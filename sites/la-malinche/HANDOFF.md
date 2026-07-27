# La Malinche handoff

- Project: `马琳切：谁背叛了背叛者？`
- Series: `时间的女儿 · 003`
- Branch: `codex/site-la-malinche`
- Figma V5: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=16-2>
- Pull Request: <https://github.com/TSRat/My-Website/pull/28>
- Verified exact-implementation preview:
  <https://raw.githack.com/TSRat/My-Website/697dd53878cfd93ee59211558ed2c255f85f9718/LA-MALINCHE/index.html>

## Current goal

Deliver the creator-approved 52-screen beginner chronology without restarting
the established visual rebuild. Preserve Malintzin's available perspective
through Chapter 2, make the Chapter 2 → 3 shift unmistakable, expand the Spanish
background, and give Tlaxcala and Cholula enough independent explanation.

## Completed

- Expanded the approved reading sequence from 41 to 52 consecutive scenes
  (`00`–`51`) while preserving all eight chapter anchors and both direct video
  players.
- Rebuilt `00` as a proportional cut-out profile, kept “一个人，三个名字。” on
  one line at desktop and mobile, and made `02` a first-time-reader identity /
  stakes introduction.
- Gave city-states, the Triple Alliance and tribute, religion / sacrifice /
  slavery, Olutla, noble-origin evidence, and enslavement their own Chapter 1
  scenes.
- Rebuilt Chapter 2 around Potonchán, the twenty transferred women, baptism,
  Doña Marina, the translation chain, the birth of “Malinche,” possible abuse,
  Totonac politics, and her gradual understanding of Spanish aims.
- Added a strong jade-to-red torn transition before the new Spanish chapter,
  then explained navigation, political unification, conquistador identity,
  Columbus, the Caribbean colonial system, Cortés in Cuba, and the 1519
  expedition.
- Reordered Veracruz, Tlaxcala, and Cholula as context → event → evidence.
  Cholula now has a dedicated modern archaeological photograph and a separate
  massacre / contested-warning scene.
- Replaced every `奥卢塔` occurrence with `奥卢特拉`, retained both TSRat logos,
  and removed conclusion-first `不是……而是……` phrasing from the rebuilt
  `00`–`34` sequence.
- Updated source, generated mirror, registry, manifests, test, product spec,
  design handoff, and Figma V5 reference.

## Important decisions

- The reader does not receive Spain's full backstory before Malintzin could
  plausibly recognise the expedition's identities and aims.
- Historical fact, scholarly interpretation, narrative framing, and visual
  metaphor remain explicitly separated.
- The Cholula photograph is a modern archaeological view, not a 1519 record;
  the massacre image remains a later history painting.
- Image scale, background color, alignment, and density vary by historical
  function; shared spacing rules prevent that variation from becoming disorder.
- No video-cover reuse, autoplay, external analytics, persistence, deployment
  architecture change, automatic merge, or content-position rewrite.

## Modified files

- `sites/la-malinche/index.html`, `assets/site.css`, `assets/site.js`
- `sites/la-malinche/assets/archive/cholula-pyramid.webp`
- `sites/la-malinche/{CONTENT,DESIGN,TECH,HANDOFF}.md`
- `sites/la-malinche/site.config.json`, `site-manifest.json`
- generated `LA-MALINCHE/` mirror
- `README.md`
- `web/sites/la-malinche/{product-spec,design-handoff}.md`
- `tests/malinche-readiness.test.mjs`

## Validation

- `npm run build:malinche`: passed.
- `node --check sites/la-malinche/assets/site.js`: passed.
- `node --test tests/malinche-readiness.test.mjs`: passed — 2/2.
- `npm run validate:sites`: passed — 11 maintenance packages.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 560 local references across 67 HTML/CSS
  files.
- `git diff --check` and staged diff check: passed.
- Chrome desktop visual smoke covered `00`, `01`, `05`, `13`, `16`, `22`,
  `30`, `33`, and `34`; 52 scenes rendered with no document-level horizontal
  overflow and the hero retained its `1065 / 1476` ratio.
- Chrome `390 × 844` device-metrics smoke covered the hero, three-name table,
  Chapter 2 → 3 transition, and Cholula. No display title overflow remained;
  the document width stayed within the viewport.
- Exact-commit preview smoke confirmed 52 scenes, the new 2200 × 1650 Cholula
  image, proportional hero, and both natural-ratio TSRat marks.
- Antigravity extended multi-browser, keyboard, full-route, and visual
  regression QA: pending.

## Known issues

- Authorization status for selected `Women Story/Malinche/photo` images still
  needs confirmation before reuse outside this project.
- Broader historical bibliography expansion requires a separate scholarly
  source review; the creator manuscript remains the primary content source.
- Google-hosted fonts may fall back to installed Chinese serif / sans fonts.
- Bilibili embeds depend on regional and privacy-network conditions.

## Git state

- Branch: `codex/site-la-malinche`
- 52-screen implementation: `697dd53878cfd93ee59211558ed2c255f85f9718`
- Verified handoff record: `f6e80a5e26c4640b7ab52f514f4cdf21ab37f1fc`.
- Merge: not authorized and not performed.

## Next step

Review the exact-commit preview and PR #28. Run Antigravity extended QA if a
comprehensive overlay, keyboard, multi-browser, and full-route audit is desired.
