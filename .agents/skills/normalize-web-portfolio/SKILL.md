---
name: normalize-web-portfolio
description: Audit, document, clean up, standardize, and modernize all existing websites listed in the repository's website project table. Use when the user asks to clean up, normalize, migrate, unify, audit, modernize, or systematically improve the existing website portfolio. Preserve each site's distinct visual identity while unifying product, design-system, engineering, QA, preview, and analytics standards. Enforce pre-migration baselines and post-migration visual regression review for existing sites.
---

# Normalize Web Portfolio

## Mission

Audit every website in the repository's authoritative website project table, document how each site is currently designed and implemented, then actively migrate the portfolio toward one shared six-stage web standard capable of supporting both simple editorial sites and complex dynamic web applications.

This is not an audit-only skill unless the user explicitly says "audit only".

Default behavior:
1. inspect;
2. document;
3. design the target architecture;
4. implement safe standardization;
5. verify;
6. create reviewable branches / draft PRs with previews.

Never modify `main` directly.

Do not make all websites look the same.

Unify infrastructure, design-system logic, engineering standards, QA, and delivery.
Preserve project-specific visual identity, narrative structure, tone, and art direction unless they are demonstrably broken or the user explicitly requests redesign.

---

# Inputs

Primary source:
- the repository's website project table / website registry.

Locate it before doing anything else.

Search likely locations and names including:
- README
- PROJECTS
- websites
- sites
- registry
- portfolio
- project-table
- docs
- AGENTS.md references

Prefer the table explicitly referenced as authoritative by README or AGENTS.md.

For every project, resolve when available:
- project name
- slug
- source directory
- live URL
- repository path
- deployment mechanism
- status
- notes

If multiple conflicting project tables exist:
1. determine which one is most current using repository references and actual deployed projects;
2. do not silently merge contradictory data;
3. record the conflict in the audit;
4. proceed with the strongest source of truth.

---

# Required tools and capabilities

Use the relevant installed capabilities automatically.

Preferred capabilities:
- Product Design for UX, flows, audits, prototypes, and design QA
- Creative Production for visual assets and visual-system refinement
- Figma for design systems, variables, components, responsive screens, and design source of truth
- Browser / Computer Use for live-site inspection and end-to-end QA
- GitHub for branches, commits, PRs, issues, and repository history
- Data Analytics when a site's purpose depends on quantitative dashboards, metrics, charts, or product analytics
- Preview deployment provider for reviewable live URLs

Do not ask the user to manually select plugins one by one.

If a required external capability is unavailable:
- continue all non-blocked work;
- record the exact blocker;
- never pretend the blocked stage was completed.

Figma is required for sites being migrated into the shared design-system standard.
Do not silently skip Figma.

---

# Phase 0 — Repository and portfolio inventory

Before modifying code:

1. Inspect:
   - repository tree
   - README
   - AGENTS.md
   - package manifests
   - build configuration
   - deployment workflows
   - GitHub Actions
   - current branches
   - git status
   - existing design-system folders
   - existing Figma references
   - analytics configuration
   - website project table

2. Resolve every website listed in the project table.

3. Detect unlisted website directories or deployed sites.

4. Record discrepancies:
   - listed but missing
   - present but unlisted
   - broken URL
   - duplicated site
   - deprecated site
   - abandoned branch
   - missing deployment
   - stale documentation

Do not delete anything merely because it appears obsolete.
Deletion requires explicit evidence and should be proposed separately unless the user explicitly authorized cleanup deletion.

---

# Phase 1 — Product / UX audit

For every website, inspect both:
- source code
- actual rendered website

Use a real browser whenever a live or local rendered version is available.

Document the current product and UX model.

For each site record:

## Product purpose
- primary audience
- primary user goal
- primary content or task
- major routes/pages
- key user flows
- navigation model

## UX
- information architecture
- discovery flow
- reading / task flow
- search
- filtering
- navigation
- interaction depth
- feedback states
- loading states
- empty states
- error states
- mobile behavior
- accessibility risks

Do not list criteria without conclusions.

For every criterion state what the site actually does now and what must change.

Classify each site:

- PRESERVE:
  architecture is healthy; mainly needs shared standards and cleanup.

- REFACTOR:
  useful structure exists but components, design tokens, responsive logic, or engineering need substantial normalization.

- REBUILD:
  current architecture fundamentally blocks maintainability, accessibility, responsiveness, or planned dynamic functionality.

Explain the classification.

---

# Phase 2 — Visual system audit and normalization

Inspect the actual rendered design.

For each site document:

- visual concept / art direction
- color palette
- typography
- grid
- spacing
- content width
- cards
- navigation
- imagery
- iconography
- decoration
- animation / motion
- responsive transformations
- accessibility-related visual issues

Separate:

A. Shared design primitives
Things that should be standardized across the portfolio:
- spacing scale
- accessibility rules
- focus behavior
- content-width conventions
- breakpoints strategy
- semantic color architecture
- type-role architecture
- interaction states
- motion accessibility
- image handling
- captions
- citations
- navigation primitives

B. Project-specific visual identity
Things that should remain unique:
- palette
- display typography
- imagery
- textures
- motifs
- historical / narrative art direction
- project-specific motion
- storytelling composition

Never normalize category B merely to make sites look consistent.

Use Creative Production only when visual assets or a visual system need to be repaired, expanded, or made coherent.
Do not redesign for novelty.

---

# Visual Preservation Gate

Apply this gate to every existing site before migration unless the user explicitly requests a redesign.

The original rendered site is the visual baseline. A reconstructed Figma file is not a substitute for comparing against the original site.

## Establish the baseline before modifying implementation

For each site:

1. Build and render the unmodified base revision, or use the current production URL when the local baseline cannot be reproduced.
2. Select representative routes and states, including the homepage, major content types, navigation states, and important interactive states.
3. Capture full-page and above-the-fold screenshots at fixed viewports. Use repository-defined viewports when available; otherwise use:
   - desktop: 1440 × 900
   - tablet: 1024 × 768
   - mobile: 390 × 844
4. Stabilize comparison conditions:
   - browser and version
   - device pixel ratio
   - fonts and font loading
   - locale
   - content and data fixtures
   - authentication state
   - theme
   - time-dependent or random content
   - motion and transition state
5. Record the visual contract:
   - typefaces, weights, sizes, line heights, and wrapping behavior
   - colors and surface relationships
   - grid, content width, spacing, alignment, and page rhythm
   - image selection, aspect ratio, crop, position, and caption treatment
   - navigation, ordering, decoration, and responsive transformations
   - animation character and reduced-motion behavior
6. Store baselines in a repository-approved non-generated location or attach them as CI / PR artifacts. Do not place source baselines inside a generated or ignored deployment directory such as `docs/`.

Do not start implementation migration without a usable baseline. If the original site is already broken, capture the failure and distinguish it from migration regressions.

## Compare after migration

Render the exact branch and commit intended for review under the same conditions as the baseline.

For every recorded route, state, and viewport:

1. Capture matching post-migration screenshots.
2. Run automated pixel or perceptual comparison when tooling is available.
3. Perform a human side-by-side or overlay review even when automated comparison passes.
4. Classify every visible difference as:
   - intentional and explicitly approved
   - required accessibility or responsive correction
   - rendering noise such as antialiasing
   - dynamic-content difference
   - unintended regression
5. Fix unintended regressions before PR handoff.

Do not use a numeric screenshot-diff threshold as the sole approval signal. A low changed-pixel count can still hide meaningful typography, alignment, crop, or interaction regressions.

## Apply classification-specific strictness

- PRESERVE:
  - allow no intentional redesign;
  - treat any unapproved visible difference as a failed gate;
  - preserve layout, typography, color, imagery, spacing, and responsive behavior unless fixing a documented defect.

- REFACTOR:
  - keep the original rendered design as the acceptance target;
  - limit visible changes to documented bug, accessibility, or responsive fixes;
  - itemize and obtain approval for material visual changes.

- REBUILD:
  - use the baseline to preserve recognizable identity, hierarchy, content emphasis, imagery, and interaction character;
  - document why exact visual matching is infeasible;
  - require explicit human approval for the new visual result before calling the migration complete.

## Gate failure behavior

Do not pass the gate when:

- no pre-migration baseline exists;
- required routes or viewports were not compared;
- fonts, assets, or content failed to load during comparison;
- visible differences remain unexplained;
- a material change lacks user approval;
- only build, lint, tests, or HTTP status were checked;
- only the reconstructed Figma target was compared and the original site was omitted.

If screenshot or browser tooling is unavailable, continue safe non-visual work but report visual verification as blocked. Never claim visual preservation without evidence.

Include in every migration PR:

- baseline screenshot or artifact links
- post-migration screenshot or artifact links
- visual diff images or report
- routes, states, viewports, browser, and device pixel ratio used
- approved intentional changes
- unresolved visual risks

---

# Phase 3 — Figma design-system migration

Figma is a required stage for migrated sites.

First search for existing Figma files and reusable libraries.

Reuse before creating new assets.

Create or update a shared structure conceptually equivalent to:

TSRat Web Design System
├── Foundations
│   ├── Color semantics
│   ├── Typography roles
│   ├── Spacing
│   ├── Grid
│   ├── Breakpoints
│   ├── Motion
│   └── Accessibility
│
├── Shared Components
│   ├── Header
│   ├── Navigation
│   ├── Footer
│   ├── Article primitives
│   ├── Cards
│   ├── Citation
│   ├── Figure / Caption
│   ├── Search
│   ├── Filters
│   ├── Modal
│   ├── Drawer
│   └── Feedback states
│
└── Site Themes
    ├── site-a
    ├── site-b
    └── ...

For each migrated site:

1. Capture or inspect the existing rendered design.
2. Reconstruct the useful visual system into editable Figma structures.
3. Extract and normalize:
   - variables
   - text roles
   - spacing
   - grids
   - reusable components
   - variants
4. Preserve site-specific theme variables.
5. Create at minimum:
   - representative desktop frame
   - representative mobile frame
   - key reusable components
   - key states for interactive sites

Do not merely paste screenshots and call that a Figma migration.

A screenshot may be used as reference, but the result must contain editable design structure.

Record:
- Figma file URL
- relevant page/frame names
- design-system relationship

in the repository audit documentation.

---

# Phase 4 — Interactive prototype and behavior standard

For every site, determine its required interaction tier.

Tier A — Editorial/static:
- navigation
- responsive behavior
- media
- citations
- basic interactions

Tier B — Interactive:
- search
- filter
- tabs
- timeline
- galleries
- dynamic navigation
- client-side state

Tier C — Product / complex dynamic:
- accounts
- saved items
- collections
- dashboards
- knowledge graphs
- maps
- APIs
- database-backed content
- multi-step flows
- complex state

Do not force Tier C technology onto Tier A sites.

However, all sites must use an architecture that can evolve safely.

For interactive sites implement and verify as relevant:
- hover
- focus
- active
- selected
- open / closed
- loading
- empty
- success
- validation
- error
- disabled

Prototype key flows before large production rewrites when behavior is materially changing.

Run design QA between:
- Figma / accepted visual target
- rendered implementation

Fix high-impact discrepancies before handoff.

---

# Phase 5 — Production engineering normalization

Do not force one framework purely for uniformity.

Choose architecture based on actual site requirements.

Preferred principles:

- TypeScript for substantial maintained applications
- componentized architecture
- shared design tokens where appropriate
- semantic HTML
- accessible interactions
- responsive layouts
- explicit content/data layer
- route organization
- error boundaries / failure handling where appropriate
- environment separation
- no secrets committed
- optimized images
- reproducible builds
- lint / typecheck / tests where appropriate
- browser QA
- CI-compatible scripts

Framework guidance:

- simple editorial / mostly static:
  use the simplest maintainable SSG/static-capable architecture.

- rich interactive frontend without server requirements:
  React + TypeScript with an appropriate modern build system is acceptable.

- server-rendered, API-heavy, auth, database, or complex product:
  use an appropriate full-stack framework such as Next.js when justified.

Do not migrate a healthy simple site to a heavier framework merely because another site uses it.

Prefer shared packages / primitives where they create real reuse.

Possible target structure:

sites/
  <site-slug>/

packages/
  ui/
  design-tokens/
  content/
  analytics/
  test-utils/

Adapt this to the existing repository rather than blindly forcing the exact folder layout.

Preserve public URLs unless the migration explicitly requires a redirect strategy.

Verify:
- build
- lint
- typecheck
- tests
- major routes
- console errors
- responsive states
- keyboard interaction
- image loading
- link integrity

Use real browser verification.

---

# Phase 6 — Data / Analytics standard

For every site document:

- current analytics provider
- events currently tracked
- privacy implications
- data sources
- dashboards, if any
- missing measurement

Do not silently add invasive tracking.

If an analytics provider already exists:
- normalize event names and page-view handling.

If none exists:
- create a provider-neutral analytics/event specification unless the user explicitly authorizes a provider.

For product-like sites define events around meaningful behavior, for example:
- search_performed
- filter_applied
- article_opened
- related_content_opened
- timeline_item_opened
- item_saved
- collection_created
- map_item_opened

Do not invent vanity KPIs.

For quantitative dashboards or data products, use Data Analytics to validate metric definitions, sources, filters, and charts.

---

# Portfolio documentation output

Resolve the documentation source directory before writing portfolio documentation:

1. Read the repository rules, ignore configuration, build scripts, and deployment workflow.
2. Use `docs/web/` only when `docs/` is a source-maintained, version-controlled documentation directory.
3. If `docs/` is generated, ignored, or used as deployment output, do not edit it and do not change ignore or deployment rules merely to satisfy this skill.
4. Use the repository-approved, version-controlled source documentation directory instead. Prefer `web/` when the repository has no more specific convention.
5. Record the chosen documentation paths in the root handoff or equivalent task record.

For this repository, `AGENTS.md` defines `docs/` as ignored GitHub Pages build output. Therefore use:

- `web/portfolio-audit.md`
- `web/platform-standard.md`

In repositories where `docs/` is a valid source directory, the default paths remain:

- `docs/web/portfolio-audit.md`
- `docs/web/platform-standard.md`

Create or update the resolved portfolio audit file.

It must contain one row or section per website.

Required fields:

- Site
- Slug
- Live URL
- Source path
- Status
- Product purpose
- Current visual direction
- Current typography / color / layout system
- Current framework / language
- Rendering model
- Routing
- Content/data model
- State/interactivity
- Build system
- Deployment
- Analytics
- Tests / CI
- Accessibility state
- Responsive state
- Existing Figma
- Classification: PRESERVE / REFACTOR / REBUILD
- Target architecture
- Shared-core adoption
- Site-specific theme
- Migration status
- Figma URL
- Preview / PR URL
- Remaining risks

Also create or update the resolved platform standard file.

Describe the shared six-stage standard and which rules are mandatory versus optional by site tier.

---

# Implementation strategy

Do not create one unreviewable mega-change if the portfolio is large.

Group migrations into coherent batches based on:
- shared infrastructure dependency
- site family
- risk
- architecture similarity

Before changing a site:
- ensure the baseline site still builds or document why it does not.

For each batch:
1. create a dedicated branch;
2. implement migration;
3. run tests;
4. render and inspect;
5. deploy a live preview of the exact review commit;
6. create a Draft PR;
7. include before/after summary;
8. include the Visual Preservation Gate report and comparison artifacts;
9. include Figma links;
10. include preview links;
11. include unresolved issues.

Never merge automatically.

Never delete `main`.

Do not create or maintain an obsolete `gh-pages` source branch if the repository's current deployment architecture does not require it.

---

# Acceptance criteria

This skill is not complete until:

1. Every project-table website has been inspected or has a named blocker.
2. The resolved portfolio audit file contains every website and is stored in a repository-approved, version-controlled source location.
3. Every website has a concrete current-state description, not just evaluation criteria.
4. Every website has a PRESERVE / REFACTOR / REBUILD classification.
5. Shared versus site-specific design decisions are explicit.
6. Migrated sites have Figma design-system coverage.
7. Migrated code passes the applicable build/test checks.
8. Important flows were tested in a real browser.
9. No production branch was modified directly.
10. Reviewable PRs exist for implemented migration batches.
11. Every website-facing batch has a verified Preview URL that is reachable before merge.
12. The website project table is updated to reflect new implementation, Figma, preview, and status information.
13. Every migrated existing site passes the Visual Preservation Gate or has an explicit named blocker and is not reported complete.

Final response must summarize:

- number of sites discovered
- number audited
- PRESERVE / REFACTOR / REBUILD counts
- shared platform changes
- migrated sites
- Figma deliverables
- PR links
- preview links
- visual regression results and approved intentional differences
- blocked items
- remaining migration queue
