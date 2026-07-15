# Harikaran & Arputham — Wedding Invitation

React + Vite + Framer Motion digital invitation.

## Run locally
```
npm install
npm run dev
```

## Page order
Envelope (tap to open, shows every visit/refresh) → Hero → Countdown → Ceremony → Reception → Thank You

## Adding your own photos later
Every slide already has an image slot wired up and filled with an on-theme placeholder for now.
Just overwrite the file at the path below with your real photo — no code changes needed.
Every photo renders with `object-fit: contain`, so nothing is ever cropped or zoomed —
whatever you drop in shows exactly as-is.

| Slide               | Image path                     |
|---------------------|----------------------------------|
| Slide               | Base filename (any of .jpg / .jpeg / .png works) |
|---------------------|----------------------------------------------------|
| Envelope             | `public/images/envelope.*`   |
| Hero                 | `public/images/hero.*`       |
| Countdown            | `public/images/countdown.*`  |
| Ceremony             | `public/images/ceremony.*`   |
| Reception            | `public/images/reception.*`  |
| Thank You            | `public/images/final.*`      |

The `.*` means the extension doesn't matter — drop in `hero.jpg`, `hero.jpeg`, or `hero.png`
and it'll be found automatically. You only need to get the **name before the dot** right
(e.g. `hero`), not the extension after it.

`scripts/make_placeholders.py` (Python + Pillow) generated the current placeholder images —
safe to delete once real photos are in place.

## Structure
- `src/App.jsx` — page order & content
- `src/components/shared/` — `PhotoSlot` (full-bleed images, blurred backdrop fill + uncropped
  foreground), `PhotoFrame` (card-based images, rounded frame, also uncropped), `Divider`,
  `SectionLabel`, `ScrollHint`, `KolamArt` (signature background motif, fallback when no photo
  exists yet), `AnimatedName` (letter-by-letter text reveal)
- `src/utils/calendar.js` — Add to Calendar (Google + .ics download)
- The wax seal on the envelope is hand-built SVG using an organic "goo" blend technique
  (overlapping circles merged + edge-displaced by noise) to avoid looking like a flat drawn
  circle — modeled after a real wax stamp reference.

## Before going live
1. Replace the placeholder images at the paths above with real photos.
2. Add an `og-cover.png` (1200×630) to `/public` for link-preview cards when shared on WhatsApp etc.
3. Double check both venue Google Maps links and the wedding date/time in `App.jsx`.
