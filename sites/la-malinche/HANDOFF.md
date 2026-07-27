# La Malinche handoff

- Project: `马琳切：谁背叛了背叛者？`
- Series: `时间的女儿 · 003`
- Branch: `codex/site-la-malinche`
- Figma v2: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-2>
- Pull Request: <https://github.com/TSRat/My-Website/pull/26>

## Current goal

Replace the repetitive first implementation with a visually differentiated,
thirty-screen historical editorial. Use the supplied monochrome figure as the
hero cut-out, add larger archival imagery and a directly playable two-part
video theater, preserve the eight-chapter argument, and keep video-cover imagery
inside the players only.

## Completed

- Preserved 30 numbered scenes, all eight manuscript chapter anchors, and the
  fact / interpretation / framing / metaphor evidence boundary.
- Rebuilt the page around distinct scene skeletons: cut-out poster, typographic
  name atlas, evidence strip, chapter gates, archival wall, diagonal origin map,
  uncertainty ledger, split testimony, route console, language field,
  translation seam, negotiation steps, cartographic table, red rupture, siege
  measures, survivor dossier, video theater, rereading gallery, and final
  reflection.
- Removed every production reference to `cover-green.webp` and
  `cover-red.webp`. Those files remain only as unreferenced archive material.
- Added the official Bilibili players for `BV1A72vBQEEJ` and `BV1iWBeBEEFg`.
- Updated the series number from `005` to `003` in the site, manifest, config,
  authoritative project table, Figma file, and Living Atlas discovery entry.
- Generated a transparent hero PNG from the supplied monochrome illustration.
- Added four locally optimized public-domain archival images with visible
  source and collection captions.
- Added and documented Figma v2 frames for hero, archive, map, video, mobile,
  and composition catalogue while retaining v1 for comparison.
- Rebuilt `LA-MALINCHE/` and `THE-LIVING-ATLAS/`.

## Important decisions

- Video-cover imagery is allowed only as part of the direct embedded player.
- Image size, color field, direction, and typography vary by argument; the site
  does not normalize chapters into a repeated card grid.
- The supplied figure is treated as an editorial illustration and kept
  monochrome after background removal.
- Own Map assets remain available in the interactive route console. A large
  1524 map from the Newberry Library is used for the Tenochtitlan atlas scene.
- Historical qualifications such as `大约`, `可能`, `无人知晓`,
  `众说纷纭`, and source conflict remain present.
- No external analytics provider, persistence, autoplay, or automatic merge.

## Modified files

- `sites/la-malinche/index.html`, `assets/site.css`, `assets/site.js`
- `sites/la-malinche/assets/malinche-cutout.png`
- `sites/la-malinche/assets/archive/*.webp`
- `sites/la-malinche/{CONTENT,DESIGN,TECH,HANDOFF}.md`
- `sites/la-malinche/site.config.json`, `site-manifest.json`
- generated `LA-MALINCHE/` mirror
- `sites/living-atlas/content-registry.js` and generated
  `THE-LIVING-ATLAS/content-registry.js`
- `README.md`, `HANDOFF.md`, `web/portfolio-audit.md`
- `web/sites/la-malinche/product-spec.md`,
  `web/sites/la-malinche/design-handoff.md`
- `tests/malinche-readiness.test.mjs`

## Validation

- `npm run build:malinche`: passed.
- `npm run build:living-atlas`: passed.
- `npm run validate:sites`: passed — 11 packages.
- `node --test tests/malinche-readiness.test.mjs tests/site-maintenance-structure.test.mjs`:
  passed — 3/3.
- `node --check sites/la-malinche/assets/site.js`: passed.
- `node --check sites/la-malinche/assets/analytics.js`: passed.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 537 local references across 67 HTML/CSS files.
- `npm run lint`: passed with 0 errors and 24 pre-existing warnings in
  Enheduanna and the committed Hypatia bundle.
- `git diff --check`: passed.
- Local browser desktop `1440 × 900`: 30 screens, eight chapters, two players,
  no horizontal overflow, no broken loaded images, and clean console.
- Local browser mobile `390 × 844`: no horizontal overflow or broken loaded
  images; compact chapter menu, name lens, and route selector passed.
- Visual smoke inspected the cut-out hero, full archival wall, and direct video
  theater.
- Antigravity extended multi-browser, keyboard, and visual regression QA:
  pending.

## Known issues

- External scholarly bibliography is still limited to the manuscript and the
  four image-source records; claims beyond the manuscript would need a separate
  source review.
- Google-hosted fonts fall back to installed Chinese serif/sans fonts if the
  service is unavailable.
- The Bilibili embeds require network access and may behave differently behind
  regional or privacy restrictions.

## Pending

- Commit and push the redesign, update PR #26, and verify the new exact-commit
  preview.
- Review through Antigravity if comprehensive multi-browser and visual
  comparison is desired.

## Git state

- Branch: `codex/site-la-malinche`
- Base: `origin/main` at `fb78a4f`
- Latest commit before this redesign handoff: `abd241b`
- Current worktree: contains the scoped redesign and generated mirrors pending
  commit.
- Merge: not authorized and not performed.
