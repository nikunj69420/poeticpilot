# Poetic Pilot Academy — redesign

A static, multi-page redesign of poeticpilotacademy.com. It has 17 pages, one design system and one motion system.

## Folders

| Path | What it is |
| --- | --- |
| `site/` | **The finished website.** Upload this folder as-is to any static host (Netlify, Vercel, Cloudflare Pages, or the existing server). |
| `src/` | Page sources. Edit copy here, then rebuild. `ui.mjs` holds the shared components, `layout.mjs` the header and footer, and `pages/` one file per page. |
| `hero-film/` | The HyperFrames project for the animated hero loop (a gold flight path from the Delhi base, VIDP, to the Bengaluru base, VOBL). |

## Commands

```bash
node src/build.mjs        # regenerate site/*.html from src/
node src/serve.mjs 4173   # preview at http://localhost:4173
```

Re-rendering the hero film (only needed if you change `hero-film/`):

```bash
cd hero-film && npx hyperframes render -o renders/hero-loop.mp4 --quality delivery
```

Then re-encode it into `site/assets/video/` (the MP4 and WebM are 1600 px wide, with no audio).

## Design system (site/assets/css/main.css)

- **Colour.** The whole site uses three colours: ink `#0B1220`, paper `#F5F2EA` and brand gold `#F5C518`. Each section is either ink or paper, and the page glides between the two as you scroll. Gold is used as text only on ink. On paper the accent text is a deep gold, `#7A5A00`. Every text pairing meets WCAG AA.
- **Type.** Inter for interface and body text. Instrument Serif italic for the one "poetic" accent phrase in each heading. JetBrains Mono for labels, in an aviation-chart style.
- **Motion.** Lenis smooth scroll runs on GSAP's ticker, with ScrollTrigger and SplitText on top. Headings rise line by line and images reveal behind masks. The hero frame shrinks into a card as you scroll. The programme cards scroll sideways on desktop. A gold flight rail on the right edge follows you through the whole page. Between pages, a gold route line carries the transition across. With `prefers-reduced-motion`, all of this switches off and the content shows immediately.

## Before going live

- **Contact form.** It currently opens WhatsApp with the visitor's details pre-filled. To keep the old email or CRM flow instead, connect `[data-callback-form]` in `site/assets/js/main.js` to that endpoint.
- **Images.** Photos are loaded from the live site's `/wp-content/uploads/`. If the new site moves to a different domain, copy those uploads across. `aboutus/mentor1.JPG` is 6000×4000 px and should be resized.
- **Linked pages.** Blog articles, the A320 question bank, student login and the individual IndiGo academy pages still point to the live site.
