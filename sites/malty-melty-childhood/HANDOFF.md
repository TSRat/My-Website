# 两只天鹅 · Handoff

## Current target

Move the existing Sites visual novel into `My-Website` using the same directly
maintainable static implementation model as The Living Atlas, while preserving
the site's distinct identity and interactions.

## Completed

- Read the exact Sites source commit through a short-lived repository
  credential without using the site's identity-sharing login flow.
- Migrated all eleven chapters, dialog beats, memories, acts and images.
- Replaced React/Vinext/Next.js with static HTML, CSS and ES modules.
- Preserved start/resume, previous/next, chapter drawer, memory perspectives,
  autoplay, keyboard controls and ending behavior.
- Added focus containment/return and a skip link.
- Added explicit canon/fan-created/story/creator content boundaries.
- Added a visible local-progress/Data disclosure.
- Added a provider-neutral analytics contract with no external delivery.
- Added editable desktop/mobile six-stage coverage to the shared Figma file.

## Unfinished

- Complete exact-commit remote browser smoke checks.
- Create the exact-commit preview and Draft Pull Request.
- Antigravity extended visual and interaction QA remains pending.

## Known issues

- Image-generation and licensing notes were not in the source repository and
  need creator confirmation before reuse outside this project.
- The source site is access-gated; the exact source commit is the reliable
  migration baseline available without sharing identity details.
- The original Sites deployment remains independent from this repository.

## Important decisions

- Classification: `REFACTOR`.
- Tier: B interactive.
- Static ES modules are the production implementation; Figma is reference only.
- Saved progress remains local to the browser.
- Analytics provider remains `none`.

## Changed files

- `sites/malty-melty-childhood/`
- `MALTY-MELTY-CHILDHOOD/` generated deploy mirror
- root registry, shared builder and tests

## Commands and results

- `node --check site.js` and `node --check content-registry.js`: passed.
- `npm run validate:sites`: passed for all 8 packages.
- `npm run build:sites`: passed; the uppercase deploy mirror was regenerated.
- Targeted Node tests: 13/13 passed.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed, 398 references across 53 HTML/CSS files.
- Local desktop interactive browser smoke: passed through start, next beat,
  memory view and chapter drawer; Antigravity narrow/extended QA pending.

## Git and delivery

- Branch: `codex/living-atlas-static-sites`
- Base: `origin/main` through merge commit `518d7f9`
- Latest commit: pending
- Preview: pending
- Pull Request: pending
- Figma: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-76>
- Antigravity QA: pending

## Next step

Run the shared build and path validation, then publish the exact-commit preview
and Draft PR.
