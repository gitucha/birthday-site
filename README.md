# Birthday Celebration Site

A single-flow celebration site: Intro → Reveal → Photo gallery → Letter → Outro.
No backend needed — everything is static, deployable to Vercel/Netlify for free.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Personalize it (do these first)

1. **Name** — in `src/App.jsx`, change `<IntroScreen name="Ama" ...>` to their name.
2. **Photos** — drop 3-6 images into `public/images/` (e.g. `photo-1.jpg`), then edit
   `src/data/photos.js` with matching filenames and captions. The first four are reused
   as the scattered polaroids on the letter page (`src/components/ScrapbookLetter.jsx`).
3. **The letter** — edit the text in `src/data/letter.js`. That's the whole message, kept
   separate from the component code so you never have to touch JSX to change wording.
4. **Music** — drop an mp3 into `public/audio/song.mp3` (must be named exactly that, or
   update the `src` path in `src/App.jsx`'s `<audio>` tag). Also edit the title/artist
   shown in the player panel in `src/data/song.js`. Browsers block autoplay until a user
   clicks something, which is why it starts on the "tap to open" button.
5. **Colors** — palette lives in `tailwind.config.js` under `theme.extend.colors`
   (maroon / twilight / periwinkle / blush / cream) if you want to nudge any tone.

## Letter page (scrapbook style)

`ScrapbookLetter.jsx` shows scattered taped-down photos and a "click here" note. Tapping
the note opens `LetterModal.jsx`, which shows the full message and a "continue" button to
move on. Doodle hearts/balloons/squiggle live in `Doodles.jsx` — pure SVG, easy to recolor
or swap for your own.

## Music player

The vinyl icon (bottom-right, `MusicToggle.jsx`) spins while a track plays and opens
`MusicPlayerModal.jsx` — a centered panel with a bigger spinning vinyl, play/pause, and a
decorative waveform. Playback state lives in `App.jsx` so the icon and panel always agree.

## Deploy

Easiest path: push this folder to a GitHub repo, then import it in Vercel or Netlify —
both auto-detect Vite and deploy on push, no config needed. You'll get a shareable link.

## Notes

- If you don't add photos, the gallery cards will just show the caption with no image
  (broken image icons are hidden automatically) — add real images before sharing.
- Reduced-motion is respected for accessibility (animations shorten automatically if the
  visitor has that OS setting on).
