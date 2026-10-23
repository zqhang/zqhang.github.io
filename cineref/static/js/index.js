(() => {
  const cfg = window.CINEREF_CONFIG || {};
  const authorsEl = document.getElementById('authors');
  const affiliationsEl = document.getElementById('affiliations');
  const authorNote = document.getElementById('author-note');
  if (Array.isArray(cfg.authors) && cfg.authors.length) {
    authorsEl.hidden = false;
    const allAuthors = cfg.authors;
    const midpoint = Math.ceil(allAuthors.length / 2);
    const rows = allAuthors.length > 4
      ? [allAuthors.slice(0, midpoint), allAuthors.slice(midpoint)]
      : [allAuthors];
    for (const group of rows) {
      const row = document.createElement('div');
      row.className = 'authors-row';
      for (const author of group) {
        const block = document.createElement('span');
        block.className = 'author-block';
        const label = author.url ? document.createElement('a') : document.createElement('span');
        label.textContent = author.name;
        if (author.url) {
          label.href = author.url;
          label.rel = 'noopener noreferrer';
          label.target = '_blank';
        }
        block.appendChild(label);
        if (author.superscript) {
          const sup = document.createElement('sup');
          sup.textContent = author.superscript;
          block.appendChild(sup);
        }
        row.appendChild(block);
      }
      authorsEl.appendChild(row);
    }
  }
  if (Array.isArray(cfg.affiliations) && cfg.affiliations.length) {
    affiliationsEl.hidden = false;
    affiliationsEl.textContent = cfg.affiliations.join(' · ');
  }
  if (cfg.authorNote) {
    authorNote.hidden = false;
    authorNote.textContent = cfg.authorNote;
  }
  const toast = document.getElementById('link-toast');
  let toastTimeout;
  const showToast = () => {
    toast.hidden = false;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { toast.hidden = true; }, 1800);
  };
  for (const link of document.querySelectorAll('[data-link-key]')) {
    const value = cfg.links && cfg.links[link.dataset.linkKey];
    if (typeof value === 'string' && /^https?:\/\//i.test(value)) {
      link.href = value;
      link.removeAttribute('aria-disabled');
      link.removeAttribute('title');
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.addEventListener('click', (event) => { event.preventDefault(); showToast(); });
      link.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault(); showToast();
        }
      });
    }
  }
  // Play one clip at a time so audio from different demos never overlaps.
  const videos = [...document.querySelectorAll('video')];

  // The unmodified 1344x768 MP4s are stored as short base64 text chunks so
  // the GitHub connector can upload them without lowering their resolution.
  // Assemble them on demand to produce exactly the original MP4 bytes.
  const videoParts = {9:7, 36:5, 39:6, 40:4};
  const assembledUrls = [];
  const pendingVideos = new WeakMap();
  const loadVideo = (video) => {
    if (pendingVideos.has(video)) return pendingVideos.get(video);
    const source=video.querySelector('source[data-chunked-video]');
    if(!source) return Promise.resolve();
    const id=source.dataset.chunkedVideo;
    const n=videoParts[id];
    if(!n) return Promise.resolve();
    video.setAttribute('aria-busy','true');
    const promise=(async()=>{
      const pieces=await Promise.all(Array.from({length:n},async(_,i)=>{
        const response=await fetch('static/video-chunks/'+id+'-'+i+'.b64');
        if(!response.ok) throw new Error('Missing video part '+id+'-'+i);
        const encoded=(await response.text()).replace(/\s+/g,'');
        const binary=atob(encoded);
        const chunk=new Uint8Array(binary.length);
        for(let k=0;k<binary.length;k++)chunk[k]=binary.charCodeAt(k);
        return chunk;
      }));
      const url=URL.createObjectURL(new Blob(pieces,{type:'video/mp4'}));
      assembledUrls.push(url);
      source.src=url;
      video.load();
      video.removeAttribute('aria-busy');
    })().catch(err=>{
      video.removeAttribute('aria-busy');
      console.error('Unable to load original CineRef video',id,err);
      video.setAttribute('aria-label','Video temporarily unavailable: '+id);
    });
    pendingVideos.set(video,promise);
    return promise;
  };
  const observer=('IntersectionObserver' in window)
    ? new IntersectionObserver(entries=>entries.forEach(entry=>{
        if(entry.isIntersecting){loadVideo(entry.target);observer.unobserve(entry.target)}
      }),{rootMargin:'700px'}) : null;
  for(const video of videos){if(observer)observer.observe(video);else loadVideo(video);}
  window.addEventListener('pagehide',()=>assembledUrls.forEach(url=>URL.revokeObjectURL(url)),{once:true});

  // A single reference-audio player ensures no two timbres ever overlap.
  const referenceAudio = document.getElementById('reference-voice-player');
  const voiceButtons = [...document.querySelectorAll('[data-reference-audio]')];
  let activeButton = null;
  const resetButtons = () => {
    for (const button of voiceButtons) {
      button.classList.remove('playing');
      button.setAttribute('aria-pressed', 'false');
      button.querySelector('.voice-icon').textContent = '▶';
      button.setAttribute('aria-label', button.getAttribute('aria-label').replace(/^Pause /, 'Play '));
    }
  };
  const stopReferenceVoice = () => {
    if (!referenceAudio.paused) referenceAudio.pause();
    referenceAudio.currentTime = 0;
    activeButton = null;
    resetButtons();
  };
  referenceAudio.addEventListener('ended', stopReferenceVoice);
  videos.forEach(v => v.addEventListener('play', () => {
    videos.forEach(other => { if (v !== other) other.pause(); });
    stopReferenceVoice();
  }));
  for (const button of voiceButtons) {
    button.addEventListener('click', async () => {
      if (activeButton === button && !referenceAudio.paused) {
        stopReferenceVoice();
        return;
      }
      // A reference voice is separate from the synthesized video's soundtrack.
      videos.forEach(v => { if (!v.paused) v.pause(); });
      const source = button.getAttribute('data-reference-audio');
      if (referenceAudio.getAttribute('src') !== source) {
        referenceAudio.pause();
        referenceAudio.setAttribute('src', source);
        referenceAudio.load();
      }
      activeButton = button;
      resetButtons();
      button.classList.add('playing');
      button.setAttribute('aria-pressed', 'true');
      button.querySelector('.voice-icon').textContent = 'Ⅱ';
      button.setAttribute('aria-label', button.getAttribute('aria-label').replace(/^Play /, 'Pause '));
      try { await referenceAudio.play(); }
      catch (err) {
        console.warn('Unable to play reference audio:', source, err);
        stopReferenceVoice();
      }
    });
  }
})();
