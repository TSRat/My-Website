# The Living Atlas technical notes

- Last audited: 2026-07-23
- Public path: `/My-Website/THE-LIVING-ATLAS/`

## Source and deployment

`THE-LIVING-ATLAS/` is both the readable source and the static directory copied into the GitHub Pages artifact.

Primary files:

- `index.html`: default archive page
- `zh.html`: Chinese variant
- `style.css`: shared design tokens, layout, and responsive rules
- `atlas.js`: shared carousel, navigation, and search behavior
- `assets/`: local site imagery
- `tsrat-logo.png`: local navigation logo

`scripts/build-github-pages.mjs` performs:

```text
copy THE-LIVING-ATLAS/ -> docs/THE-LIVING-ATLAS/
```

There is no separate framework build for this site. Do not change its directory name, relative asset paths, or public URL.

## Rendering and state

- Static HTML and CSS provide the complete document.
- Vanilla JavaScript provides the featured-story carousel, mobile navigation details, and in-page search dialog.
- Content is currently hard-coded in the two HTML documents.
- Both language variants share `style.css` and `atlas.js`; behavior changes must be verified in both.

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

- Site and index content are duplicated across two HTML files rather than generated from structured data.
- Some social links remain placeholders and need creator confirmation.
- Full-page screenshots are not accepted from the current browser backend because sticky/reveal composition can repeat or omit regions. Use matching section or anchor captures.

## Safe next improvement

Move repeated navigation, site records, and search metadata into a small explicit data source only after the current visual and interaction batch passes regression review. A framework migration is not required for that work.
