(() => {
  const cfg = window.CINEREF_CONFIG || {};
  const authorsEl = document.getElementById('authors');
  const affiliationsEl = document.getElementById('affiliations');
  const authorNote = document.getElementById('author-note');
  if (Array.isArray(cfg.authors) && cfg.authors.length) {
    authorsEl.hidden = false;
    for (const author of cfg.authors) {
      const block = document.createElement('span');
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
      authorsEl.appendChild(block);
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
