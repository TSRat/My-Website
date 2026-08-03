# The Living Atlas technical notes

- Last audited: 2026-07-25
- Public path: `/My-Website/THE-LIVING-ATLAS/`

## Source and deployment

`sites/living-atlas/` is the authoritative maintenance package.
`THE-LIVING-ATLAS/` is a generated, committed Pages mirror and must not be
edited by hand.

Primary files:

- `index.html`: default archive page
- `zh.html`: Chinese variant
- `style.css`: shared design tokens, layout, and responsive rules
- `content-registry.js`: bilingual Worlds, Knowledge, focus, published-site, and update records
- `web-core.js`: reusable localization, filtering, sorting, rendering, index, search, and mobile-menu primitives
- `analytics.js`: provider-neutral, no-storage event adapter and Living Atlas event vocabulary
- `atlas.js`: Living Atlas adapter plus carousel behavior
- `knowledge/knowledge-registry.js`: curated public knowledge records and the three-discipline contract
- `knowledge/knowledge.js`: bilingual record rendering, client-side filtering, and privacy-safe knowledge events
- `knowledge/knowledge.css`: Knowledge-specific editorial layout and responsive record component
- `assets/`: local site imagery, including the feathered alpha-backed
  `hypatia-sketch-transparent.webp` and real-page thumbnails for the two
  migrated philosophy guides; it also contains the creator-provided
  `who-are-you-the-who.mp3` background track and the creator-provided
  `malinche-cover-vol-1.webp` used only by the La Malinche Sites row; this
  960 × 540 WebP is a load-optimized derivative of the creator's 3840 × 2160
  `Women Story/Malinche/封面7.png`
- All four Featured World images share the same bounded
  `.featured-portrait` treatment: `300px` maximum on desktop and `240px` on
  mobile, with `object-fit: contain`. Images keep their natural aspect ratios
  and are not enlarged to fill the whole right column.
- The `003` Featured World slide reuses
  `../LA-MALINCHE/assets/malinche-cutout.png` from the generated sibling
  mirror. The source asset remains authoritative in
  `sites/la-malinche/assets/malinche-cutout.png`; do not duplicate or
  independently edit it inside Living Atlas.
- `tsrat-logo.png`: local navigation logo

Figma:

- Content-system frame: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=18-2>
- Data / analytics frame: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=19-2>
- Knowledge Library page: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=62-49>
- Knowledge Record component set: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=63-160>
- Knowledge desktop portal: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=65-55>
- Knowledge mobile discipline screen: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=68-89>

The shared site builder performs:

```text
sites/living-atlas/ -> .site-build/living-atlas/
                    -> THE-LIVING-ATLAS/
                    -> docs/THE-LIVING-ATLAS/
```

Use `npm run dev:living-atlas` for a local source server and
`npm run build:living-atlas` to refresh the mirror. There is no framework
compile step. Do not change the mirror directory name, relative asset paths, or
public URL.

## Rendering and state

- Static HTML and CSS provide the complete document.
- Vanilla JavaScript provides the four-slide featured-story carousel, registry rendering, mobile navigation, and in-page search dialog.
- Worlds, Knowledge, Now, Sites, Latest, Data, and Index use the shared bilingual content and navigation contracts.
- Analytics remains no-op until `analytics.setProvider(...)` receives an explicitly approved provider; no browser storage or external request is used by default.
- Both language variants share `content-registry.js`, `web-core.js`, `style.css`, and `atlas.js`; behavior changes must be verified in both.
- Knowledge routes share one public registry and one renderer. Eight static HTML shells provide route-specific copy and `<noscript>` access; JavaScript enhances them with filtering rather than defining the only readable content.
- Background audio uses a native `<audio>` element with `preload="none"` and
  `loop`. `atlas.js` starts playback only after the visible bilingual control is
  activated, sets the playback volume to `0.35`, reflects state through
  `aria-pressed`, and does not use browser storage or autoplay.

## Visual contract

The site is an editorial atlas, not a generic portfolio template.

Preserve:

- Ivory, ink, stone, and cobalt color relationships
- Noto Serif SC display, Inter UI, and Fira Code metadata roles
- Large left-aligned editorial scale
- 12-column desktop grid and asymmetric composition
- Archive numbering, metadata, image selection, and section rhythm

Shared platform primitives may normalize semantics, keyboard behavior, focus, responsive containment, motion preferences, and QA without changing this identity.

## Verification

Generate and validate the Pages artifact:

```bash
npm run build:living-atlas
npm run build:pages
npm run validate:pages
```

Browser QA must cover:

- `index.html` and `zh.html`
- Desktop `1440×900`, tablet `1024×768`, and mobile `390×844`
- No horizontal overflow
- Mobile menu open/close and anchor navigation
- Search button and `Control/Command + K`
- Search result navigation and dialog close/focus return
- Featured carousel previous/next behavior
- Reduced-motion behavior
- Console and asset health

## Known limitations

- Small Red Book is a live external profile link in both desktop and mobile navigation. The former WeChat public-account placeholder has been removed rather than left as a planned state.
- The Knowledge route now exposes a curated public registry. Social Sciences and Natural Sciences & Technology intentionally begin with Mapping / Planned records rather than fake article destinations.
- The shared runtime currently lives inside `sites/living-atlas/`. Publishing a repository-level `shared/web-core/` requires a separately authorized Pages build-map change.
- Full-page screenshots are not accepted from the current browser backend because sticky/reveal composition can repeat or omit regions. Use matching section or anchor captures.
- The Featured World Hypatia portrait must keep a real, softly feathered alpha channel. Keep the shared `.hypatia-portrait` multiply treatment; do not replace `hypatia-sketch-transparent.webp` with the legacy opaque `hypatia-sketch.jpg` and rely on browser blend-mode compositing alone.
- The Data entry is not evidence that tracking is enabled. Keep `PROVIDER / NONE` until a provider and privacy boundary are explicitly approved.
- The background track is a creator-provided commercial recording. Repository
  inclusion does not establish public distribution rights:
  `Needs creator confirmation`.

## Safe next improvement

Use `../../web/templates/site-starter/` for the next migration batch, beginning
with IVORY ARCHIVE parity and Data entry work. Do not migrate frameworks until
a real Tier C requirement appears.
