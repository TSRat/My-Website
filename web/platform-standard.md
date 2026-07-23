# Website Platform Standard

- Version: 2026-07-23
- Applies to: all public website projects in the authoritative `README.md` project table
- Design system: [TSRat Web Design System · Portfolio Normalization](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt)

The platform standard unifies infrastructure, semantics, accessibility, QA, and delivery. It does not unify art direction, narrative voice, imagery, palette, project-specific typography, or storytelling composition.

## Project tiers

| Tier | Typical site | Required depth |
| --- | --- | --- |
| A — Editorial/static | Long-form profile, archive essay, documentary site | Semantic reading flow, citations, responsive media, keyboard navigation, section-based visual QA |
| B — Interactive | Search, filter, carousel, gallery, dialog, client state | Tier A plus explicit state behavior, feedback, keyboard support, interaction tests, event specification |
| C — Product/dynamic | Account, saved data, dashboard, API, database, multi-step flow | Tier B plus data contracts, errors/loading/empty states, security/privacy review, integration tests, operational monitoring |

Use the simplest maintainable architecture for the tier. Do not migrate a healthy Tier A static site to a heavy application framework merely for portfolio uniformity.

## Six-stage standard

### 1. Product / UX

Mandatory for every site:

- Identify primary audience, user goal, content/task model, routes, navigation, and core flow.
- Record loading, empty, error, and feedback states when those states exist.
- Classify the implementation as PRESERVE, REFACTOR, or REBUILD with a reason.
- Preserve content boundaries and distinguish historical fact, scholarly interpretation, narrative framing, and visual metaphor.
- For fan-created work, distinguish canon reference, fan premise, story branch, and creator critical position.

Optional by tier:

- Tier A: a short reading-flow and source-discovery audit is enough.
- Tier B: document each interactive state and recovery path.
- Tier C: add flow diagrams, permissions, failure modes, and operational ownership.

### 2. Visual exploration / creative production

Mandatory:

- Inspect the rendered site before proposing visual changes.
- Separate shared primitives from site identity.
- Use existing source imagery and documented motifs.
- Record visual changes as defect correction, accessibility correction, responsive correction, or approved redesign.

Optional:

- New visual assets or creative exploration are required only when an existing asset/system is missing, broken, or explicitly being redesigned.
- Do not create novelty-driven assets during an engineering-only migration.

### 3. Figma design system

Mandatory for substantial migrations and redesigns:

- Reuse the shared foundations and components before creating equivalents.
- Maintain shared spacing, width, breakpoint, focus, and motion foundations.
- Maintain separate site-theme variables for palette and identity.
- Provide representative desktop and mobile screens plus key interactive states.
- Keep browser baselines separate from editable design structures; a screenshot alone is not a design system.
- Record the Figma URL and relevant page/frame names in the audit.

Optional:

- Small defect fixes may use the existing Figma theme and browser baseline without reconstructing every page.
- Publishing a Figma library and Code Connect require separate user-controlled decisions.

Current shared Figma structure:

- `01 · Foundations & Components`
- `02 · Site Themes & Screens`
- `03 · Baselines & Handoff`

### 4. Interactive prototype and design QA

Mandatory:

- Core navigation, links, calls to action, search, filters, dialogs, and stateful controls must work.
- Keyboard access, focus visibility, focus return, and reduced-motion behavior must be verified when applicable.
- Compare implementation and accepted visual target at identical viewports and states.

Optional:

- Tier A may use the production implementation as its prototype.
- Tier B should prototype changed interactions before a large rewrite.
- Tier C should prototype multi-step flows, validation, loading, errors, and recovery before production implementation.

### 5. Production engineering, GitHub, and preview

Mandatory:

- Preserve public paths, directory-name case, and GitHub Pages subdirectory behavior.
- Distinguish source, generated output, deploy mirror, and historical snapshot.
- Use semantic HTML, accessible controls, explicit content/data boundaries, and reproducible builds.
- Work on a dedicated branch; never commit directly to `main`.
- Run repository-required build, test, lint, asset, browser, and diff checks.
- Use a reviewable Pull Request and do not merge automatically.
- Commit and push verified website work by default, then create or update its Pull Request unless the creator explicitly requests local-only work.
- Provide a directly viewable, browser-verified Preview URL for every website-facing change. The Preview must render the exact review branch / commit and remain reachable before merge.

Repository-specific constraints:

- GitHub Pages remains an Actions artifact deployment.
- `docs/` is ignored build output and is never hand-maintained.
- Portfolio documentation lives under `web/`.
- PR branches do not currently receive a GitHub Pages deployment. Use a separate approved preview provider or a verified immutable commit preview; never treat a local build, PR source page, or artifact download as the Preview URL.

Optional:

- Shared packages are justified only by demonstrated reuse.
- Framework migration is justified only by product or maintenance needs.

### 6. Data / analytics

Mandatory:

- Record the current analytics provider, tracked events, privacy implications, and missing measurement.
- Do not silently add an analytics provider, cookies, fingerprints, or cross-site tracking.
- When no provider exists, maintain a provider-neutral event contract.

Base event envelope:

```text
event_name
site_slug
page_path
content_id
interaction_source
timestamp
schema_version
```

Do not include direct personal identifiers, free-form search text by default, private contact data, or sensitive content.

Recommended event vocabulary:

| Event | When |
| --- | --- |
| `search_performed` | A user submits a search; record result count, not raw query, unless separately approved |
| `filter_applied` | A taxonomy or content filter changes |
| `article_opened` | A briefing or long-form item is opened |
| `chapter_opened` | A long-form chapter anchor becomes the explicit destination |
| `source_opened` | A citation or external source is opened |
| `figure_opened` | A figure or gallery item is expanded |
| `video_opened` | A video embed or external watch action is activated |
| `story_opened` | A story branch is opened |
| `random_story_opened` | The random-story interaction returns a branch |

Optional:

- Tier A may stop at the event specification.
- Tier B should include meaningful interaction events.
- Tier C should add metric definitions, denominators, retention windows, privacy review, and dashboard ownership.

## Shared foundations

The concrete content and interaction reference is documented in [`content-system.md`](./content-system.md). Its stable IDs, publication states, bilingual field shape, link rules, and provider interfaces are shared platform contracts; its Living Atlas palette and composition are not.

Mandatory:

- Semantic landmarks and one clear page-level heading.
- Skip navigation where a repeated header precedes long content.
- Visible `:focus-visible` treatment with sufficient contrast.
- Keyboard-operable controls using native elements where possible.
- `prefers-reduced-motion` handling for non-essential motion.
- Responsive reflow at content-defined breakpoints; no hidden horizontal overflow as a substitute for fixing layout.
- Accurate image alternatives and nearby captions/credits when images carry evidence or narrative meaning.
- Citations and source-boundary language remain attached to the claims they qualify.
- Relative asset paths compatible with `/My-Website/<SLUG>/`.
- No secrets or private source URLs in public files.

Shared foundations do not require identical component styling. A skip link, button, citation, or dialog may use each site’s own type, color, border, and motion language while meeting the same semantic contract.

## Visual preservation gate

Before implementation:

1. Render the current base revision or production site.
2. Capture representative routes, anchors, and interactive states.
3. Capture desktop `1440×900`, tablet `1024×768`, and mobile `390×844` unless the repository defines other viewports.
4. Record browser, device pixel ratio, fonts, locale, content, theme, and state.
5. Record typography, color, grid, spacing, imagery, crop, navigation, and responsive transformations.

After implementation:

1. Render the exact review branch and commit under matching conditions.
2. Capture the same states and viewports.
3. Run pixel or perceptual comparison when available.
4. Always perform human side-by-side or overlay review.
5. Classify every difference and fix unapproved regressions.

When long-page screenshot composition is unreliable, replace it with deterministic section or anchor captures that collectively cover the changed surface. Do not use a known-invalid long screenshot as evidence.

Strictness:

- PRESERVE: no unapproved visible difference.
- REFACTOR: only documented defect, accessibility, or responsive corrections may change appearance.
- REBUILD: preserve recognizable identity and obtain explicit human approval for the new result.

## Required verification

Repository-wide minimum:

```bash
git diff --check
git status --short
git diff --stat
npm run build:pages
npm run validate:pages
```

Run `npm run build`, `npm test`, and `npm run lint` when the implementation scope touches application code or shared engineering behavior. The repository has no independent `typecheck` script.

Browser QA must cover:

- Primary paths and anchors
- Assets and console health
- Desktop, tablet, and mobile reflow
- Keyboard navigation and visible focus
- Search, filters, carousel, menu, dialog, or other changed interactions
- Lazy media and external embeds where relevant

## Documentation and handoff

The authoritative project table remains in `README.md`.

Detailed portfolio state belongs in:

- `web/portfolio-audit.md`
- `web/platform-standard.md`
- `web/content-system.md`

Do not create a second registry. Update the authoritative table when a site is created, migrated, renamed, deployed, archived, or changes lifecycle status.

Every implementation handoff records:

- Current target and completed work
- Unfinished work and blockers
- Important decisions
- Changed files
- Commands and results
- Branch, commit, and uncommitted changes
- Figma URL
- Preview URL or named preview limitation
- Pull Request URL or pending state
- Visual comparison result and approved differences
