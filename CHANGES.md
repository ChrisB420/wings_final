# Wings of the Cherubim — Update Summary

## New: Haiti — A Prophetic Witness (homepage)
`src/components/home/haiti-prophecy.tsx`
A dedicated homepage section placed directly under the Prophetic Timeline, as
requested. Features the Haitian coat-of-arms painting (artist: Arlene D.
Whiteman, 2008 — used with Greg's confirmed rights, credited to the artist),
color-corrected and sharpened for web display, with copy tying it to
Zechariah 4:6 and linking through to the Faith Scroll where the original
Haiti video already lives.

Images processed and placed at:
- public/images/prophecy/haiti/haiti-flag-revelation.jpg (1600px, site display)
- public/images/prophecy/haiti/haiti-flag-revelation-xl.jpg (2400px, retina/srcset)
- public/images/prophecy/haiti/haiti-flag-revelation-thumb.jpg (640px, thumbnail)

Haiti was also added as a 4th location in the gallery system
(`src/lib/content/gallery.ts`) and as a 4th pin on the Global Reach Map.

## Favicon
`public/favicon.svg` — replaced the boxed menorah icon with the actual brand
seal (menorah / Star of David / fish mark), full-bleed, transparent
background, no box — matches `public/brand/messianic-seal.svg`.

## Homepage additions
- **Prophetic Timeline** (`src/components/home/prophetic-timeline.tsx`) —
  scroll-revealed timeline from the Abrahamic covenant through the rebirth of
  Israel to the blessed hope of Christ's return.
- **Global Reach Map** (`src/components/home/global-reach-map.tsx`) —
  interactive pins for London, Manhattan, Mombasa, and now Haiti.

## Teaching scroll additions
- **Spiritual Warfare** (`src/components/teachings/spiritual-warfare.tsx`) —
  previously "coming soon," now fully written (6 sections) and published.
  Wired into `src/lib/content/teachings.ts` and
  `src/routes/teachings/$slug.tsx`.
- **Audio narration** (`src/components/teachings/scroll-audio-player.tsx`) —
  browser-native "Listen" control (speechSynthesis API, no cost, no hosting).
  Wired into Spiritual Warfare and Divine Light scrolls.

## Gallery page
- **Wall of Testimonies** (`src/components/gallery/testimony-wall.tsx`) —
  auto-scrolling marquee (replaces the old static grid), with a warm
  invitation shown instead of empty space until testimonies are added to
  `src/lib/content/testimonies.ts`.

## Honest notes
- The Haiti painting is a named, signed original work by artist Arlene D.
  Whiteman (2008). It is credited on the site per standard practice for
  displaying someone else's signed artwork, even with permission to use it.
  If that attribution should read differently, it's one line to change in
  `haiti-prophecy.tsx`.
- Only 1 of the 3 submitted Haiti photos was used for the homepage feature
  (the cleanest, most front-on shot). The other two are available if you want
  a small gallery/carousel of all three instead of one hero image — ask and
  it's a quick addition.
- This project is the **TanStack/Vite rebuild** found in your uploaded
  workspace zip — a different codebase from whatever is currently live at
  wingsofthecherubim.org (which is Next.js). Pushing this project will
  replace the live site's codebase entirely. If that's not what you want,
  say so before deploying.

## To preview locally
```
npm install
npm run dev
```
