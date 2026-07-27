# La Malinche handoff

- Project: `马琳切：谁背叛了背叛者？`
- Series: `时间的女儿 · 005`
- Branch: `codex/site-la-malinche`
- Figma: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi>

## Current goal

Turn the creator’s 21-page Malinche manuscript and selected hybrid design direction into a maintainable 20+ screen historical long-form site, a verified unmerged preview, and a reviewable Pull Request.

## Completed

- Read the complete manuscript structure, both Chinese subtitle transcripts, two creator covers, and the creator’s `Own Map` set.
- Defined an approximately 30-screen reading architecture that preserves the eight manuscript chapters.
- Created a new editable six-page Figma design file with semantic variables, local styles, component variants, desktop/mobile key screens, interaction states, creator cover art, and creator route map.
- Chose the repository’s direct-static maintenance architecture.
- Recorded content boundaries, visual direction, product behavior, and provider-neutral analytics.
- Implemented all 30 scenes and the eight manuscript chapter anchors in semantic HTML.
- Added name-lens, creator-map, evidence-disclosure, translation, reflection, scroll-progress, chapter-menu and reduced-motion behavior.
- Web-optimized creator covers and maps to case-safe local WebP assets without modifying the original files.
- Added the generated `LA-MALINCHE/` mirror, repository registry, root archive hub and The Living Atlas entry.
- Added targeted 30-screen, evidence, privacy, asset and shared-maintenance tests.

## Capability usage record

| Capability | Level | Used | Result / artifact | Skip or blocker reason |
| --- | --- | --- | --- | --- |
| Figma | Mandatory | Yes | Editable file, variables, components, key desktop/mobile screens, states | — |
| Browser | Mandatory | Yes | Local 1440 × 900 and 390 × 844 smoke; interactions and console checked | Exact-preview smoke follows push |
| GitHub | Mandatory | Pending | Dedicated branch exists; push and PR follow final local verification | — |
| Preview deployment | Mandatory | Pending | Exact-commit raw.githack URL follows push | — |
| Product Design | Strongly recommended | No separate focused workflow | Product and UX spec created directly from the selected hybrid direction | The repository skill forbids forcing another three-option ideation round after a direction is selected |
| Creative Production | Strongly recommended | Reviewed, generation skipped | Creator cover and map asset system retained | Supplied creator assets already resolve the visual direction; new AI imagery would add unsupported historical interpretation |
| Data Analytics | Strongly recommended | Documented directly | Provider-neutral event and privacy contract | This is a simple editorial site with provider `none`; no data source or KPI required a separate analytical artifact |
| Visualize | Strongly recommended | Skipped | Route and state relationships are documented in compact tables | Single-route reading flow does not become clearer as a separate visualization |
| PDF | Recommended | Yes | 21-page manuscript extracted and representative pages visually inspected | — |

## Important decisions

- Use the creator manuscript as the content source and Figma as the design source.
- Preserve `可能 / 或许 / 据说 / 众说纷纭` and the four evidence layers.
- Reuse creator cover and map assets; do not generate a substitute historical face.
- Do not enable an external analytics provider.
- Do not autoplay audio.
- Do not merge without separate creator authorization.

## Validation

- `npm run validate:sites`: passed — 11 packages.
- `npm run build:malinche`: passed.
- `node --test tests/malinche-readiness.test.mjs tests/site-maintenance-structure.test.mjs`: passed — 3/3.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 536 local references across 67 HTML/CSS files.
- `npm run lint`: passed with 0 errors; 24 existing warnings remain in Enheduanna and the committed Hypatia bundle.
- `node --check sites/la-malinche/assets/site.js`: passed.
- `node --check sites/la-malinche/assets/analytics.js`: passed.
- Codex browser desktop: passed; exact 900px first screen, no overflow, key assets present.
- Codex browser mobile: passed; 390 × 844, compact menu and mobile translation disclosures active, no overflow.
- Name lens, Xicalango map stage, two-sided final reflection and mobile chapter menu: passed.
- Console warnings/errors: none in checked desktop and mobile states.
- Antigravity extended QA: pending.

## Modified files

- `sites/la-malinche/` — production source, assets, manifest, config and maintenance documents.
- `LA-MALINCHE/` — generated deploy mirror.
- `web/sites/la-malinche/` — Product / UX, visual, Figma and analytics handoff.
- `README.md`, `TECH.md`, `HANDOFF.md`, `web/portfolio-audit.md` — portfolio registry and global handoff.
- `sites/living-atlas/content-registry.js`, `THE-LIVING-ATLAS/content-registry.js` — archive discovery entry.
- `package.json`, `scripts/site-projects.mjs`, `tests/site-maintenance-structure.test.mjs`, `tests/malinche-readiness.test.mjs` — build and validation contracts.

## Known issues

- The current site intentionally cites the creator manuscript as its primary source. It does not yet include an external scholarly bibliography for claims beyond that manuscript.
- Google-hosted display/body fonts fall back to installed Chinese serif/sans fonts if the font service is unavailable.
- Comprehensive keyboard sequence, multi-browser and section-overlay review remains assigned to Antigravity.

## Pending

- Final branch commit, push, immutable preview, and PR.
- Antigravity extended multi-route / multi-device / keyboard / visual QA.

## Git state

- Branch: `codex/site-la-malinche`
- Base: `origin/main` at `fb78a4f`
- Latest implementation commit: pending final commit
- Current worktree: only task-scoped La Malinche, registry, build, test and documentation changes
