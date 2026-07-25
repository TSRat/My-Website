# Handoff

## Current goal

Migrate the imported Sartre *Nausea* guide into the portfolio's six-stage website workflow without changing its visual identity, editorial position, public behavior, or source assets.

## Six-stage status

| Stage | Status | Evidence |
| --- | --- | --- |
| 1. Product / UX | Documented | Existing beginner-reading journey and core interactions preserved |
| 2. Visual exploration | Preserved | Existing Sites page remains the approved visual baseline |
| 3. Figma design system | Documented | Editable theme tokens, desktop/mobile screens, and analytics card in node `33:32` |
| 4. Interactive prototype + design QA | Basic smoke passed | Desktop side-by-side, mobile containment, assets, console, and representative tab interaction checked; Antigravity pending |
| 5. Production engineering + preview | Delivered for review | Static mirror, root Pages build, immutable preview, and Draft PR #19 are verified |
| 6. Data / analytics | Specified | See provider-neutral `ANALYTICS.md`; no provider installed |

## Completed

- Preserved the imported page structure, content, visual system, interactions, and real assets.
- Converted the app to a fully static Next.js export with a legacy-compatible default base path.
- Made metadata and public image paths compatible with a configurable GitHub Pages subpath.
- Added a skip link and main landmark.
- Completed tab semantics and keyboard operation for moment, character, concept, and route groups.
- Increased compact interaction hit areas to at least 44 CSS pixels.
- Removed unused Sites hosting metadata, Cloudflare/Worker/D1/Drizzle
  scaffolding, authentication helper, and obsolete Vinext build dependencies
  from the public repository source.
- Added content, design, technical, analytics, QA, and handoff documentation.
- Added the committed `SARTRE-NAUSEA-GUIDE/` static mirror, repository build
  integration, Living Atlas listing, and a real page thumbnail.
- Added editable Figma coverage:
  `https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=33-32`.

## Remaining

- Complete extended Antigravity route, state, keyboard, network, and visual QA.
- Confirm the source and usage rights for `public/chestnut-root.png`, favicon, and decorative assets.

## Known issues

- Codex basic smoke passed; comprehensive Antigravity QA is pending.
- Asset provenance is `Needs creator confirmation`.
- No analytics provider, consent model, or retention policy has been selected.

## Important decisions

- Classification: **REFACTOR**. Preserve the current rendered site as the visual baseline.
- Unify infrastructure, not identity.
- Keep content distinctions between historical fact, scholarly interpretation, narrative framing, and visual metaphor.
- Do not install analytics as part of migration; document a provider-neutral contract first.

## Modified files

- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `next.config.ts`
- `package.json`
- `tsconfig.json`
- `tests/rendered-html.test.mjs`
- `CONTENT.md`
- `DESIGN.md`
- `TECH.md`
- `ANALYTICS.md`
- `design-qa.md`
- `HANDOFF.md`

## Commands and results

- `npm ci` — passed after the lockfile was reduced to the static Next.js
  dependency graph.
- Earlier Vinext checks passed before the static-export alignment; they are superseded by the final Next.js checks below.
- `SITE_BASE_PATH=/ SITE_ASSET_PREFIX=. npm test` — passed; static export completed and 3 exported-HTML tests passed.
- `npm test` — passed with the legacy-compatible default `/My-Website/sartre-nausea-guide`; 3 exported-HTML tests passed.
- `npm run lint` — passed with no reported errors.
- Browser smoke — passed at 1440 × 900 and 390 × 844 for page load,
  representative tab interaction, local image loading, console output, and
  horizontal containment.
- Portable-mirror network smoke — passed after compiling public assets with
  `NEXT_PUBLIC_SITE_BASE_PATH=.`; the local server log contains only
  `SARTRE-NAUSEA-GUIDE/` resource requests and no root-path favicon or
  chestnut-image 404.
- Visual comparison — passed for Codex basic smoke; evidence is
  `qa-comparison-desktop.png`. Antigravity extended QA remains pending.

## Git state

- Branch: `codex/sites-six-stage-import`
- Starting commit: `2d36674`
- Final integration commit: `a0b7bcd`.
- Exact preview:
  `https://raw.githack.com/TSRat/My-Website/63a17bb/SARTRE-NAUSEA-GUIDE/index.html`.
- Draft PR: `https://github.com/TSRat/My-Website/pull/19`.

## Next step

Hand Draft PR #19 and its immutable preview to Antigravity for extended QA.
