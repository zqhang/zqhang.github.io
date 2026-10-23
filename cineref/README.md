# CineRef — ProbEx-style Demo Site + Reference Voices

This project includes **only** the CineRef title, optional authors, four resource buttons, and five video demos, styled after the Academic Project Page Template / ProbEx. There is no PDF, abstract, method, or results section.

## Video

All five MP4 videos are **1344×768** with their original soundtracks. (Demo 03 was rescaled from a higher resolution without cropping.)

## Voice reference mapping

Each video has two small **reference portraits** in its lower-right corner, each paired with a separate **Timbre 1/2** button. These buttons play *reference voice audio*, not video audio.

| Demo | Video | Portrait 1 → audio | Portrait 2 → audio |
|---|---|---|---|
| 01 | `static/videos/2.mp4` | `static/images/2-ref0.webp` → `static/audio/2_ref0.wav` | `static/images/2-ref1.webp` → `static/audio/2_ref1.wav` |
| 02 | `static/videos/9.mp4` | `static/images/9-ref0.webp` → `static/audio/9_ref0.wav` | `static/images/9-ref1.webp` → `static/audio/9_ref1.wav` |
| 03 | `static/videos/36.mp4` | `static/images/36-ref0.webp` → `static/audio/36_ref0.wav` | `static/images/36-ref1.webp` → `static/audio/36_ref1.wav` |
| 04 | `static/videos/39.mp4` | `static/images/39-ref0.webp` → `static/audio/39_ref0.wav` | `static/images/39-ref1.webp` → `static/audio/39_ref1.wav` |
| 05 | `static/videos/40.mp4` | `static/images/40-ref0.webp` → `static/audio/40_ref0.wav` | `static/images/40-ref1.webp` → `static/audio/40_ref1.wav` |

Playing a reference audio pauses any playing video. Playing a video stops the reference audio. Reference voices also stop one another. Click the same voice again to stop.

## Preview / release

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`.

Edit `static/js/config.js` for the four external links and real author names / personal links. They intentionally remain unfilled. The template is a static site suitable for GitHub Pages. Publishing full media requires publicly hosting all the audio and video assets.
