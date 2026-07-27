# La Malinche handoff

- Project: `马琳切：谁背叛了背叛者？`
- Series: `时间的女儿 · 003`
- Branch: `codex/site-la-malinche`
- Figma v3: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-13>
- Pull Request: <https://github.com/TSRat/My-Website/pull/26>
- Verified implementation preview:
  <https://raw.githack.com/TSRat/My-Website/e629f30/LA-MALINCHE/index.html>

## Current goal

Refine the differentiated historical editorial for a first-time reader. Explain
who and what the reader is encountering before presenting the argument, give
the Spanish landing, Tlaxcala, and Cholula enough narrative space, and correct
hero proportion, display-title wrapping, spacing, and alignment defects found
in browser review.

## Completed

- Expanded the site from 30 to 33 numbered scenes while preserving all eight
  manuscript chapter anchors and the supplied argument.
- Added an early `她是谁 / 为什么重要 / 这篇要问什么` primer.
- Made `1519 · 西班牙人登陆` a standalone full-height scene that explains
  the defeat of `波顿查恩`, the transfer of twenty women, Malinche's second
  transfer, and why language changed her position.
- Split Tlaxcala into two scenes:
  1. what the independent polity was and why it resisted both the Triple
     Alliance and an unknown armed force;
  2. how weeks of fighting, translation, shared interest, and negotiation
     produced an alliance without reducing it to friendship.
- Split Cholula into two scenes:
  1. what made it a major sacred and route center;
  2. what is known about the massacre, why the surviving stories conflict, and
     why a later warning story does not transfer command responsibility.
- Added visibly captioned, locally optimized public-domain images for the
  landing, a large Tlaxcala map, Moctezuma II, and Cortés.
- Kept later depictions explicitly separate from historical likeness or现场记录.
- Corrected every production occurrence of `波通昌` to `波顿查恩`.
- Preserved the transparent monochrome hero and fixed its intrinsic ratio with
  `object-fit: contain`.
- Added authored display lines and shared display-to-copy spacing tokens to
  prevent one- or two-character title orphans and collisions.
- Kept the two Bilibili videos directly playable and left legacy video-cover
  files unreferenced outside the players.
- Updated the editable Figma source non-destructively with a v3 beginner-first
  sequence; v1 and v2 remain available for comparison.

## Important decisions

- Beginner context now precedes interpretation: identity and stakes first,
  event sequence second, the creator's analysis third.
- Tlaxcala's alliance is framed as political negotiation under shared pressure,
  not as uncomplicated loyalty.
- Cholula's evidentiary conflict remains visible. The site does not turn one
  contested account into certainty or shift military command to the
  interpreter.
- Image scale, background color, alignment, and scene structure vary with the
  argument while shared spacing and grid rules keep the page coherent.
- Video-cover imagery is allowed only inside the direct embedded players.
- No external analytics provider, persistence, autoplay, automatic merge, or
  deployment-architecture change.

## Modified files

- `sites/la-malinche/index.html`, `assets/site.css`, `assets/site.js`
- four new files under `sites/la-malinche/assets/archive/`
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
- `npm run validate:pages`: passed — 541 local references across 67 HTML/CSS files.
- `npm run lint`: passed with 0 errors and 24 pre-existing warnings in
  Enheduanna and the committed Hypatia bundle.
- Dynamic local browser layout audit passed at `1782 × 864`, `1440 × 900`,
  `1024 × 768`, and `390 × 844`: 33 scenes, no horizontal overflow, no
  detected display-title orphans, and preserved hero aspect ratio.
- Visual smoke inspected the hero, landing, both Tlaxcala scenes, both Cholula
  scenes, and the Moctezuma / Malinche / Cortés encounter on desktop and mobile.
- Exact implementation-commit smoke passed at desktop and mobile widths:
  33 scenes, corrected wording, no horizontal overflow or display-title
  orphans, preserved hero ratio, and all four new archive images loaded at
  their natural dimensions.
- Antigravity extended multi-browser, keyboard, and visual-regression QA:
  pending.

## Known issues

- External scholarly bibliography remains limited to the manuscript and
  visible image-source records; broader claim expansion needs a separate source
  review.
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
- Pre-refinement head: `b7d21fb`
- Refinement implementation: `e629f30`
- Current worktree: this verified-preview handoff update only.
- Merge: not authorized and not performed.
