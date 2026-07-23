# The Living Atlas technical notes

- Last audited: 2026-07-23
- Public path: `/My-Website/THE-LIVING-ATLAS/`

## Source and deployment

`THE-LIVING-ATLAS/` is both the readable source and the static directory copied into the GitHub Pages artifact.

Primary files:

- `index.html`: default archive page
- `zh.html`: Chinese variant
- `style.css`: shared design tokens, layout, and responsive rules
- `content-registry.js`: bilingual Worlds, Knowledge, focus, published-site, and update records
- `web-core.js`: reusable localization, filtering, sorting, rendering, index, search, and mobile-menu primitives
- `analytics.js`: provider-neutral, no-storage event adapter and Living Atlas event vocabulary
- `atlas.js`: Living Atlas adapter plus carousel behavior
- `assets/`: local site imagery, including the feathered alpha-backed `hypatia-sketch-transparent.webp`
- `tsrat-logo.png`: local navigation logo

Figma:

- Content-system frame: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=18-2>
- Data / analytics frame: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=19-2>

`scripts/build-github-pages.mjs` performs:

```text
copy THE-LIVING-ATLAS/ -> docs/THE-LIVING-ATLAS/
```

There is no separate framework build for this site. Do not change its directory name, relative asset paths, or public URL.

## Rendering and state

- Static HTML and CSS provide the complete document.
- Vanilla JavaScript provides the featured-story carousel, registry rendering, mobile navigation, and in-page search dialog.
- Worlds, Knowledge, Now, Sites, Latest, Data, and Index use the shared bilingual content and navigation contracts.
- Analytics remains no-op until `analytics.setProvider(...)` receives an explicitly approved provider; no browser storage or external request is used by default.
- Both language variants share `content-registry.js`, `web-core.js`, `style.css`, and `atlas.js`; behavior changes must be verified in both.

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

- Small Red Book and WeChat links are represented as non-clickable planned states until the creator provides URLs.
- The knowledge taxonomy is intentionally marked as mapping in progress; article-level records and real counts do not exist yet.
- The shared runtime currently lives inside `THE-LIVING-ATLAS/`. Publishing a repository-level `shared/web-core/` requires a separately authorized Pages build-map change.
- Full-page screenshots are not accepted from the current browser backend because sticky/reveal composition can repeat or omit regions. Use matching section or anchor captures.
- The Featured World Hypatia portrait must keep a real, softly feathered alpha channel. Keep the shared `.hypatia-portrait` multiply treatment; do not replace `hypatia-sketch-transparent.webp` with the legacy opaque `hypatia-sketch.jpg` and rely on browser blend-mode compositing alone.
- The Data entry is not evidence that tracking is enabled. Keep `PROVIDER / NONE` until a provider and privacy boundary are explicitly approved.

## Safe next improvement

Use `../web/templates/site-starter/` for the next migration batch, beginning
with IVORY ARCHIVE parity and Data entry work. Do not migrate frameworks until
a real Tier C requirement appears.
