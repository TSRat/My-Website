# La Malinche handoff

- Project: `马琳切：谁背叛了背叛者？`
- Series: `时间的女儿 · 003`
- Branch: `codex/site-la-malinche`
- Figma v4: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-2>
- Pull Request: <https://github.com/TSRat/My-Website/pull/26>
- Verified implementation preview:
  <https://raw.githack.com/TSRat/My-Website/0da661b/LA-MALINCHE/index.html>

## Current goal

Complete the first-time-reader structure by explaining the Spanish background
before the campaign and rebuilding Chapters 5 and 6 as a legible occupation,
retreat, return, lake blockade, siege, and fall sequence. Preserve visual
variety while correcting display spacing, title wrapping, image proportion,
and alignment defects found through browser review.

## Completed

- Expanded the site from 33 to 41 numbered scenes while preserving the eight
  manuscript chapter anchors and the beginner-first opening.
- Added three independent Spanish-background scenes: the Iberian 1492 turn,
  Caribbean colonial practice, and a people / material / network explanation
  of how a small expedition grew.
- Rebuilt Chapter 5 as reception → occupation → Toxcatl massacre → failed
  mediation → interpreter limit → retreat.
- Rebuilt Chapter 6 as smallpox and regrouping → lake control → siege
  mechanics → continued resistance and Cuauhtémoc's capture.
- Added thirteen optimized visuals from `Women Story/Malinche/photo`, with
  visible media-type and evidence qualifications. Film stills appear as
  labelled reconstructions, not video-cover substitutes.
- Added a restrained sun motif to the expedition ledger and retained the sharp
  archive / jade / gold / red system without turning every scene into the same
  card layout.
- Reused the repository's transparent TSRat identity mark in both the fixed
  header and the closing footer.
- Increased title-to-deck and deck-to-body spacing, corrected image/title
  alignment, preserved intrinsic image ratios, and removed the remaining
  two-character mobile title ending.
- Kept the two Bilibili videos directly playable and left legacy video-cover
  files unreferenced outside the players.
- Updated the editable Figma source non-destructively with a six-screen V4
  Spain + siege catalogue; V1–V3 remain available for comparison.

## Important decisions

- Beginner context now precedes interpretation: identity and stakes first,
  Spanish context and event sequence second, the manuscript's analysis third.
- Historical event, later history painting, colonial image narration, film
  still, and digital reconstruction are explicitly distinguished.
- The interpreter-limit screen keeps Malinche's influence visible without
  transferring military command to her.
- Image scale, background color, alignment, and scene structure vary with the
  argument while shared spacing and grid rules keep the page coherent.
- Video-cover imagery is allowed only inside the direct embedded players.
- No external analytics provider, persistence, autoplay, automatic merge, or
  deployment-architecture change.

## Modified files

- `sites/la-malinche/index.html`, `assets/site.css`
- thirteen new files under `sites/la-malinche/assets/creator/`
- `sites/la-malinche/{CONTENT,DESIGN,TECH,HANDOFF}.md`
- `sites/la-malinche/site.config.json`, `site-manifest.json`
- generated `LA-MALINCHE/` mirror
- `README.md`, root `HANDOFF.md`, `web/portfolio-audit.md`
- `web/sites/la-malinche/{product-spec,visual-direction,design-handoff}.md`
- `tests/malinche-readiness.test.mjs`

## Validation

- `node --check sites/la-malinche/assets/site.js`: passed.
- `node --test tests/malinche-readiness.test.mjs`: passed — 2/2.
- `npm run build:malinche`: passed.
- `npm run validate:sites`: passed — 11 packages.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 557 local references across 67 HTML/CSS files.
- `npm run lint`: passed with 0 errors and 24 pre-existing warnings in
  Enheduanna and the committed Hypatia bundle.
- Dynamic local browser layout audit passed at `1782 × 864` and `390 × 844`:
  41 scenes, no horizontal overflow, no detected title / copy collisions, all
  images loaded, and preserved hero aspect ratio.
- Visual smoke inspected the hero, Spanish-background sequence, expedition
  ledger, Toxcatl massacre, interpreter limit, lake blockade, siege overview,
  city fall, and rereading screen on desktop and mobile.
- Exact implementation-commit smoke passed at `1782 × 864`: 41 scenes, zero
  document overflow, preserved hero ratio, and all lazy images loaded after
  their corresponding scenes entered the viewport.
- Logo follow-up smoke passed in Chrome at `1800 × 928`: two intrinsic-ratio
  TSRat marks loaded, the header mark rendered at `115 × 32`, the footer mark
  at `176 × 53`, and the document retained zero horizontal overflow.
- Antigravity extended multi-browser, keyboard, and visual-regression QA:
  pending.

## Known issues

- External scholarly bibliography remains limited to the manuscript and
  visible image-source records; broader claim expansion needs a separate source
  review.
- Authorization status for selected `Women Story/Malinche/photo` images needs
  confirmation before reuse outside this project.
- Google-hosted fonts fall back to installed Chinese serif/sans fonts if the
  service is unavailable.
- Bilibili embeds require network access and may behave differently behind
  regional or privacy restrictions.

## Pending

- Review the exact-commit preview and PR #26.
- Run Antigravity extended QA if comprehensive multi-browser, keyboard, and
  visual comparison is desired.

## Git state

- Branch: `codex/site-la-malinche`
- Pre-revision head: `3863e2a`
- Spain + siege implementation: `0da661b`
- Current worktree: this verified-preview handoff update and SVG permission
  normalization only.
- Merge: not authorized and not performed.
