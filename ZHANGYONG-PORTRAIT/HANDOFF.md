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

- Add the site to the root project table, Living Atlas registry and Pages build.
- Complete exact-commit local/browser smoke checks.
- Create the branch preview and Draft Pull Request.
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

- `ZHANGYONG-PORTRAIT/index.html`
- `ZHANGYONG-PORTRAIT/style.css`
- `ZHANGYONG-PORTRAIT/platform.css`
- `ZHANGYONG-PORTRAIT/fonts.css`
- `ZHANGYONG-PORTRAIT/fonts/*`
- `ZHANGYONG-PORTRAIT/assets/*`
- `ZHANGYONG-PORTRAIT/favicon.svg`
- `ZHANGYONG-PORTRAIT/site.js`
- `ZHANGYONG-PORTRAIT/content-registry.js`
- `ZHANGYONG-PORTRAIT/site-manifest.js`
- `ZHANGYONG-PORTRAIT/analytics.js`
- `ZHANGYONG-PORTRAIT/CONTENT.md`
- `ZHANGYONG-PORTRAIT/DESIGN.md`
- `ZHANGYONG-PORTRAIT/TECH.md`
- `ZHANGYONG-PORTRAIT/HANDOFF.md`

## Commands and results

Pending final verification.

## Git and delivery

- Branch: `codex/living-atlas-static-sites`
- Base commit: `636c198`
- Latest commit: pending
- Preview: pending
- Pull Request: pending
- Figma: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-30>
- Antigravity QA: pending

## Next step

Integrate the site into the authoritative registry and Pages artifact, then run
the required build, path validation and representative browser smoke check.
