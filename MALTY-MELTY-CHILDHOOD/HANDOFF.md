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

- Add the site to the root project table, Living Atlas registry and Pages build.
- Complete build/path validation and representative browser smoke checks.
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

- `MALTY-MELTY-CHILDHOOD/index.html`
- `MALTY-MELTY-CHILDHOOD/style.css`
- `MALTY-MELTY-CHILDHOOD/platform.css`
- `MALTY-MELTY-CHILDHOOD/content-registry.js`
- `MALTY-MELTY-CHILDHOOD/site.js`
- `MALTY-MELTY-CHILDHOOD/site-manifest.js`
- `MALTY-MELTY-CHILDHOOD/analytics.js`
- `MALTY-MELTY-CHILDHOOD/assets/*`
- `MALTY-MELTY-CHILDHOOD/favicon.svg`
- `MALTY-MELTY-CHILDHOOD/CONTENT.md`
- `MALTY-MELTY-CHILDHOOD/DESIGN.md`
- `MALTY-MELTY-CHILDHOOD/TECH.md`
- `MALTY-MELTY-CHILDHOOD/HANDOFF.md`

## Commands and results

Pending final verification.

## Git and delivery

- Branch: `codex/living-atlas-static-sites`
- Base commit: `636c198`
- Latest commit: pending
- Preview: pending
- Pull Request: pending
- Figma: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-76>
- Antigravity QA: pending

## Next step

Integrate the site into the authoritative registry and Pages artifact, then run
the build, path validation and representative interactive browser smoke check.
