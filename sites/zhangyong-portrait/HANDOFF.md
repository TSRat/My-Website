# 张勇的生活切片 · Handoff

## Current target

Move the already published Sites page into `My-Website` using the same
maintainable static implementation model as The Living Atlas, while preserving
its own visual and narrative identity.

## Completed

- Captured the public rendered baseline and its primary local assets.
- Replaced the framework/runtime output with directly maintainable static
  HTML, CSS and ES modules.
- Preserved the original sections, copy, visual language, image roles and
  responsive behavior.
- Added stable content and site manifests.
- Added a provider-neutral analytics contract with no provider or storage.
- Added a visible, honest Data/privacy empty state.
- Recorded source provenance and privacy/content boundaries.
- Added editable desktop/mobile six-stage coverage to the shared Figma file.

## Unfinished

- Antigravity extended visual QA remains pending.

## Known issues

- Upstream asset licensing notes were not present in the published runtime;
  reuse outside this project needs creator confirmation.
- `style.css` remains minified because it is the preserved visual baseline.
- The original public page is served independently from this repository and
  remains available until the creator decides otherwise.

## Important decisions

- Classification: `PRESERVE`.
- Tier: A editorial/static.
- Figma is a design reference, not a production implementation source.
- The runtime contains no React, Vinext or generated framework bundle.
- Analytics remains provider `none`.

## Changed files

- `sites/zhangyong-portrait/`
- `ZHANGYONG-PORTRAIT/` generated deploy mirror
- root registry, shared builder and tests

## Commands and results

- `node --check site.js` and `node --check content-registry.js`: passed.
- `npm run validate:sites`: passed for all 8 packages.
- `npm run build:sites`: passed; the uppercase deploy mirror was regenerated.
- Targeted Node tests: 13/13 passed.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed, 398 references across 53 HTML/CSS files.
- Local desktop browser smoke: passed; Antigravity narrow/extended QA pending.
- Exact-commit remote browser smoke: passed, including all lazy-loaded images,
  Data content and horizontal containment.

## Git and delivery

- Branch: `codex/living-atlas-static-sites`
- Base: `origin/main` through merge commit `518d7f9`
- Implementation commit: `6e8a19a`
- Preview: <https://raw.githack.com/TSRat/My-Website/6e8a19a/ZHANGYONG-PORTRAIT/index.html>
- Pull Request: <https://github.com/TSRat/My-Website/pull/21> (Draft)
- Figma: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-30>
- Antigravity QA: pending

## Next step

Review the exact-commit preview and Draft PR; request Antigravity extended QA if
the responsive and section-overlay matrix is needed.
