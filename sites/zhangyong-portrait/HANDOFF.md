# 张勇的生活切片 · Handoff

## Current target

Resolve the Web Interface Guidelines audit findings on both maintained routes
without changing the portrait's established visual identity or weakening the
red alternate's explicit non-official parody boundary.

## Completed

- Added surface-matched browser theme colors and local first-paint font
  preloads to both routes.
- Added verified intrinsic dimensions to every local image and high fetch
  priority to each route's leading image.
- Restored the original route's chapter navigation at narrow viewports with a
  contained, touch-safe layout and visible scrollbar styling where needed.
- Added dark color-scheme metadata, hash-target offsets, touch interaction
  behavior and stronger small-metadata legibility while preserving the dense
  cyber-diary composition.
- Replaced the red masthead's simulated search label with an honest column
  index, removed the false current-page state, localized visible dates and
  added balanced headings plus consistent link hover/focus states.
- Kept the red alternate script-free and retained the visible non-official
  disclosure and fictional-counter label.
- Added source-level regression assertions for these interface contracts.
- Preserved the weather-observatory hero, palette, typography, image roles,
  section rhythm and responsive breakpoints.
- Replaced the former timeline with a visibly labeled practical-life creative
  ledger based on `张勇发财记`.
- Replaced the former people-ranking section with a visibly labeled deep-night
  food receipt based on `张勇深夜觅食记`.
- Kept source-based identity, body, care, friendship, reading and humor
  material, while excluding private and intimate relationship reporting.
- Added velna as a second creator-confirmed important relationship, using only
  the report-supported patterns of daily continuity, shared language, gaming
  and low-formality trust.
- Updated the friendship orbit to show Underhail and velna as distinct,
  non-ranked nodes and corrected the public spelling to `velna`.
- Kept all original public section IDs and updated the content registry,
  metadata and portfolio registry.
- Added product, visual-direction, analytics and Figma-to-production handoff
  documents under `web/sites/zhangyong-portrait/`.
- Added an editable Figma v2 frame with desktop/mobile key screens, a receipt
  detail state, theme variables and a reusable ledger-row component.
- Regenerated `ZHANGYONG-PORTRAIT/` from the maintained source.
- Added a low-opacity, focusable red-dot entry that reveals its label on hover
  or keyboard focus without changing the main portrait composition.
- Added `red.html` as a self-contained red/paper editorial portal with real
  anchors for headlines, principles, implementation cases and letters.
- Reframed Zhang Yong's public themes as mock notices and study materials:
  self-naming, practical problem-solving, physical strength, concrete care,
  hot food, ordinary-life dignity and humor.
- Added non-official parody disclosure at the top, counter and footer; omitted
  real seals, agency names, filing numbers and government service claims.
- Added a fixed `2,135,227+` narrative visitor count, visibly labeled as
  fictional and disconnected from analytics.
- Added editable Figma desktop/mobile screens, entry states, theme variables,
  the real Bawanglong image and a reusable red bulletin component.

## Unfinished

- Antigravity extended visual QA remains pending.

## Known issues

- Upstream asset licensing notes were not present in the published runtime;
  reuse outside this project needs creator confirmation.
- `style.css` remains minified because it is the preserved visual baseline.
- The supplied PDF reports remain local, untracked review inputs and are not
  part of the public site or commit.
- The main working copy still contains unrelated pre-existing changes; this
  task is isolated in a clean worktree and does not include them.
- The public-portal research is used as a structural reference only. The
  alternate page must retain its visible non-official parody labels.

## Important decisions

- Classification: `PRESERVE`.
- Tier: A editorial/static.
- Factual observation, creative narrative and visual metaphor are explicitly
  separated.
- The selected visual direction is the existing high-density cyber diary;
  practical-store and receipt ideas are used only for information structure.
- No new commerce flow, analytics provider, generated imagery or external
  dependency was introduced.
- Analytics remains provider `none`.
- The main route remains `PRESERVE`; the approved visual departure is isolated
  to `red.html`.
- The visitor count is creative copy, not traffic evidence.
- The alternate page uses flat colors, existing local imagery and typography;
  no new external runtime, official icon or generated institutional asset was
  introduced.

## Changed files

Current guideline-remediation round:

- `sites/zhangyong-portrait/index.html`
- `sites/zhangyong-portrait/platform.css`
- `sites/zhangyong-portrait/red.html`
- `sites/zhangyong-portrait/red.css`
- `sites/zhangyong-portrait/DESIGN.md`
- `sites/zhangyong-portrait/TECH.md`
- `sites/zhangyong-portrait/HANDOFF.md`
- matching generated files under `ZHANGYONG-PORTRAIT/`
- `tests/living-atlas-static-sites.test.mjs`

Earlier content and alternate-route delivery:

- `sites/zhangyong-portrait/index.html`
- `sites/zhangyong-portrait/red.html`
- `sites/zhangyong-portrait/red.css`
- `sites/zhangyong-portrait/content-registry.js`
- `sites/zhangyong-portrait/platform.css`
- `sites/zhangyong-portrait/CONTENT.md`
- `sites/zhangyong-portrait/DESIGN.md`
- `sites/zhangyong-portrait/TECH.md`
- `sites/zhangyong-portrait/HANDOFF.md`
- `sites/zhangyong-portrait/design-qa.md`
- `ZHANGYONG-PORTRAIT/` generated deploy mirror, excluding local PDF inputs
- `web/sites/zhangyong-portrait/`
- `README.md`
- `tests/living-atlas-static-sites.test.mjs`

## Commands and results

- `node --test tests/living-atlas-static-sites.test.mjs`: passed, 5/5.
- `npm run validate:sites`: passed for all 11 maintenance packages.
- `npm run build:zhangyong`: passed; source and public mirror match.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed, 961 references across 101 HTML/CSS files.
- `git diff --check`: passed.
- Local original-route smoke at 1440×900 and 390×844: passed; navigation is
  visible, body overflow is zero, all metadata is at least 10px and all seven
  local image instances load after lazy-load activation.
- Local red-route smoke at 1440×900 and 390×844: passed; disclosure, fictional
  counter, visible narrow scrollbar, localized dates and zero-script boundary
  are present without body overflow.
- Hidden-entry and return-path navigation: passed.
- `node --check` for `site.js`, `content-registry.js` and
  `site-manifest.js`: passed.
- `npm run validate:sites`: passed for all 10 maintenance packages.
- `npm run build:zhangyong`: passed; deploy mirror regenerated.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed, 575 references across 71 HTML/CSS files.
- `git diff --check`: passed.
- Public-copy exclusion search: passed for source, mirror and design documents.
- Reviewed the supplied velna relationship report through page renders and
  targeted text extraction; only non-private relationship structure was used.
- Local desktop smoke at 1440×900: passed; masthead, parody disclosure, fixed
  narrative count, local imagery and navigation are visible without horizontal
  overflow.
- Local mobile smoke at 390×844: passed; the long navigation remains
  horizontally scrollable without causing body-level overflow.
- Hidden-entry and return-path smoke: passed.
- Native details interaction and all four local images: passed.
- Exact-commit remote smoke: passed; the original route exposes the low-opacity
  entry, the alternate route renders its disclosure and fictional count, all
  four local images load and both routes remain horizontally contained.
- Antigravity extended route, focus, network and perceptual comparison: pending.

## Capability usage

| Capability | Level | Used | Result / artifact | Skip or blocker reason |
| --- | --- | --- | --- | --- |
| Product / UX | Strongly recommended | Yes | Hidden-entry flow, parody disclosure and return path documented | — |
| Figma | Mandatory | Yes | Editable red-parody frame, variables, component, desktop/mobile screens | — |
| Browser | Mandatory | Yes | Desktop/mobile smoke, entry/return flow, anchors, details and image checks passed | Antigravity extended QA remains pending |
| GitHub | Mandatory | Yes | Commit `07ccc63`, pushed branch and Draft PR #27 | — |
| Preview | Mandatory | Yes | Exact-commit original and alternate routes smoke-tested | — |
| Creative Production | Strongly recommended | No | — | Existing Zhang Yong imagery and researched portal references fully define the art direction |
| Data / Analytics | Strongly recommended | No | Provider-none contract and fictional-counter boundary documented locally | No real metric or provider is being designed; invoking analytics would risk legitimizing a fictional count |
| Visualization | Strongly recommended | No | — | Two-route flow is simpler as a short product-spec sequence |

## Git and delivery

- Branch: `codex/zhangyong-red-parody`
- Base: `origin/main` at `86467f7`
- Implementation commit: `07ccc63`
- Preview:
  <https://raw.githack.com/TSRat/My-Website/07ccc632fe04c044a84863ee3ed61698f3e92927/ZHANGYONG-PORTRAIT/red.html>
- Original route preview:
  <https://raw.githack.com/TSRat/My-Website/07ccc632fe04c044a84863ee3ed61698f3e92927/ZHANGYONG-PORTRAIT/index.html>
- Pull Request: <https://github.com/TSRat/My-Website/pull/27> (Draft)
- Figma:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=43-39>
- Antigravity QA: pending

## Next step

Review the hidden-entry discoverability and parody tone in the exact-commit
preview, then run Antigravity extended QA before marking the PR ready.
