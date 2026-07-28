---
name: normalize-web-portfolio
description: Audit, document, clean up, standardize, and modernize all existing websites listed in the repository's website project table. Use when the user asks to clean up, normalize, migrate, unify, audit, modernize, or systematically improve the existing website portfolio. Classify each site and route by its primary creative, service, or information responsibility, preserve the responsibility that may not fail and each site's distinct identity, then apply the matching design, UX, QA, preview, and analytics standards. Use scoped Codex smoke checks and hand comprehensive browser and visual regression QA to Antigravity.
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
- Browser / Computer Use for a basic rendered-page smoke check
- Antigravity for comprehensive route, viewport, interaction, console/network, accessibility, and visual-regression QA
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

# Website Responsibility Classification Gate

Complete this read-only classification before the Working Branch Gate.

Classify every site and, when routes differ materially, every major route as:

- **CREATIVE:** the visitor primarily comes to feel, recognize, explore, or
  remember a person, work, project, world, or brand;
- **SERVICE:** the user primarily comes to complete a task accurately, safely,
  and confidently;
- **INFORMATION:** the visitor primarily comes to find, read, compare, learn,
  or understand.

Do not force a strict single-label taxonomy. Record:

- Primary responsibility;
- Secondary responsibility;
- Supporting responsibility;
- the unacceptable failure;
- evidence from the rendered site, content, navigation, and user flow;
- whether the current design uses the wrong responsibility's logic.

Use this decision:

> Which failure would make the page unsuccessful even if the other two
> responsibilities were handled well?

Examples:

- a portfolio may be Creative primary, Information secondary, Service
  supporting through contact;
- a museum may be Information primary on collection routes, Service primary on
  ticketing, and Creative secondary in exhibition storytelling;
- an ecommerce brand may be Service primary in checkout and Creative primary on
  a campaign route;
- documentation may be Information primary and Service secondary through
  search, copy, API testing, or account actions.

Do not redesign a site merely because its responsibility mix differs from
another site. Classification describes what must be protected and what kind of
defect matters.

For each site or route record responsibility-specific obligations:

| Responsibility | Must remain visible or operable | Typical migration failure |
| --- | --- | --- |
| Creative | identity, work, continuation, primary action | identity flattened, atmosphere removed, experience made generic |
| Service | task entry, input, state, feedback, recovery, consequence | happy path only, unclear action, lost data, unsafe failure |
| Information | subject, scope, structure, explanation, source, orientation | context hidden, reading degraded, relationships flattened |

When a major REBUILD creates a substantially new experience, use the matching
new-site skill as the detailed target standard:

- `build-creative-site-to-pr`;
- `build-service-site-to-pr`;
- `build-information-site-to-pr`.

For PRESERVE and REFACTOR work, borrow only the responsibility-specific checks
needed for changed surfaces. Do not impose a full new-site workflow or visual
redesign.

---

# Working Branch Gate

Complete this gate after the read-only repository inventory and before writing or generating any repository file.

## Establish a safe base

1. Run:
   - `git status --short --branch`
   - `git branch --show-current`
   - `git log -15 --oneline --decorate`
2. Identify the repository default branch and record the exact base commit.
3. Confirm the base belongs to the intended repository and is not a deployment-only branch such as `gh-pages`.
4. Use a verified local base, or refresh remote references when authorized and necessary.
5. Do not silently pull, rebase, reset, stash, discard, or overwrite existing work.

## Protect unrelated work

Require a clean worktree before creating the migration branch.

If unrelated or unexplained changes exist:

- do not carry them into the migration branch;
- do not stash or remove them merely to satisfy this gate;
- use a fresh worktree / task environment from the verified base when available;
- otherwise stop repository writes, report the conflicting paths, and ask the user how to isolate the work.

A fresh branch already provisioned specifically for the exact migration task satisfies this gate only when its base and scope are verified and recorded.

## Create and verify the branch

Create a new dedicated branch for each independently reviewable migration batch.

Follow repository naming conventions when they exist. Otherwise prefer:

- `codex/normalize-<portfolio-or-batch>`
- `codex/migrate-<site-slug>`

After creating the branch:

1. run `git branch --show-current`;
2. confirm the branch is not `main`, `master`, a production branch, or a deployment branch;
3. run `git status --short --branch`;
4. confirm the working tree contains no unrelated changes;
5. record the branch name and base commit in the task handoff.

Do not begin Figma-linked repository documentation, implementation, generated-mirror updates, commits, pushes, previews, or PR creation until this gate passes.

If the branch name already exists, the base is uncertain, or the branch contains unrelated work, do not reuse or overwrite it without explicit confirmation.

---

# Phase 1 — Product / UX audit

For every website, inspect both:
- source code
- actual rendered website

Use a real browser for one representative rendered-page smoke check when the task changes a website. Leave portfolio-wide or exhaustive browser inspection to Antigravity.

Document the current product and UX model.

For each site record:

## Product purpose
- primary audience
- primary user goal
- primary content or task
- primary, secondary, and supporting website responsibilities
- unacceptable failure
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

Apply the relevant audit:

### Creative responsibility

Record:

- intended impression, identity, and memory;
- whether a first-time visitor sees who or what the site represents and at
  least one concrete work or example before abstract symbolism or critique;
- work or content discovery;
- scene, media, motion, sound, and page rhythm;
- stable navigation, continuation, contact, or action;
- reduced-motion, muted, static, and failed-media equivalents.

Do not remove project-specific atmosphere merely because it is not reusable.

### Service responsibility

Record:

- primary task and success result;
- whether a first-time user understands what the service does, prerequisites,
  steps, consequential calculations or decisions, and the final result;
- entry, steps, decisions, confirmation, and result;
- form rules and state matrix;
- loading, empty, validation, warning, success, error, offline, expired, and
  permission behavior;
- cancel, back, undo, retry, save, resume, and support;
- privacy, security, destructive, financial, medical, legal, or account risk.

Do not call a service healthy after checking only its happy path.

### Information responsibility

Record:

- subject, scope, audience knowledge, and comprehension goal;
- the public entry question and whether object introduction precedes meaning,
  dispute, or editorial analysis;
- whether prerequisite concepts, processes, numerical origins, concrete
  results, and examples restore the intermediate steps omitted by specialist
  sources;
- direct-entry context, chapter/location, search, index, and related content;
- terminology, sources, evidence, uncertainty, and correction behavior;
- typography, reading measure, citations, maps, timelines, charts, diagrams,
  cards, tables, and lists;
- what a newcomer understands after the opening and core journey;
- whether cards make complete claims, visual containers perform explanatory
  jobs, and exercises require only knowledge already taught by the site.

Do not preserve a visually mature layout that hides essential explanation or
uses unreadable teaching text without recording it as a defect.

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

## Responsibility-specific design preservation

Apply the classification to visual decisions:

### CREATIVE

Preserve:

- identity, imagery, signature typography, motif, rhythm, motion character, and
  emotional arc;
- meaningful page-to-page variation;
- media treatment and authored sequencing.

Repair:

- hidden identity or work;
- symbolism, atmosphere, or critical framing shown before the visitor can name
  the represented person, work, world, or brand;
- images, captions, and cards that supply mood or labels without revealing a
  concrete work, example, context, or narrative relationship;
- unusable experimental navigation;
- unreadable essential text;
- autoplay sound, missing controls, absent reduced-motion/static fallback;
- media failure that leaves a blank experience.

### SERVICE

Preserve:

- established task language, trusted control patterns, status semantics, and
  user expectations;
- useful saved state and recovery behavior.

Repair:

- unclear task entry or action hierarchy;
- unexplained prerequisites, calculations, fees, durations, decisions, or
  consequences that force a first-time user to supply missing domain knowledge;
- service copy that skips from input to result without explaining the
  intermediate step users need to predict or trust the outcome;
- missing form labels, validation, feedback, errors, recovery, or state;
- decorative styling that resembles controls or hides them;
- unsafe destructive, payment, permission, privacy, or account behavior.

### INFORMATION

Preserve:

- editorial voice, reading rhythm, citations, imagery, diagrams, and
  subject-specific visual grammar;
- established navigation and content relationships.

Repair:

- conclusion before context;
- abstract opening questions or analysis before the person, object, place,
  event, process, or concrete example has appeared;
- dense names, numbers, and terms without the relationships or calculations
  that make them meaningful;
- analytical categories without the actual result for each compared object or
  group;
- essential subject, place, time, or terminology hidden in tiny metadata;
- repeated claim-by-claim source disclaimers, "what this cannot prove," or
  research-method callouts that interrupt ordinary beginner reading; preserve
  or consolidate one closing "Evidence and boundaries" note when a meaningful
  dispute, uncertainty, missing record, reconstruction, or interpretive limit
  genuinely helps the reader;
- short entries split into unnecessary Context, Why, Evidence, Analysis, and
  Boundary sections instead of a clear three-part explanation;
- raw, generic, inert, broken, redirected-to-the-wrong-page, or non-clickable
  source references; replace them with descriptive semantic links and verify
  every changed target by clicking it in the deployed preview;
- screenshot-first type scaling;
- cards, tables, maps, timelines, or diagrams that contradict the information;
- cards that contain only a noun and label, visuals that have no explanatory
  job, captions that repeat obvious disclaimers, or learning interactions that
  demand knowledge the page has not taught;
- unexplained semantic color or one- and two-character Chinese final lines.

For hybrids, the primary responsibility sets the non-negotiable gate. Secondary
responsibilities add obligations; they do not erase the primary identity.

## Typography and line-breaking preservation

For existing sites, preserve the accepted typography, line measure, spacing
rhythm, alignment anchors, and wrapping behavior unless fixing a documented
defect.

When migration changes text containers, fonts, content, or responsive layout:

- use `text-wrap: pretty` for prose and `text-wrap: balance` for headings when
  supported;
- keep `line-break: strict` and normal Chinese line breaking;
- do not apply `word-break: keep-all` globally;
- prevent new one- or two-character final lines in Display, H1–H3, hero copy,
  pull quotes, CTA labels, card titles, and captions;
- when necessary, keep only the final short semantic phrase together with a
  non-wrapping span and verify it does not overflow;
- do not insert manual `<br>` or arbitrary fixed widths to repair one viewport;
- compare changed typography and alignment against the original rendered
  baseline at desktop, tablet, and mobile widths.

Do not rewrite all existing line breaks merely to impose a new typographic
system. Fix only regressions and explicitly approved defects.

---

# Visual Preservation Gate

The original rendered site remains the visual baseline. A reconstructed Figma file is not a substitute for it.

## Creator-led correction protocol

For screenshot-driven corrections, do not turn a local creator request into an
unsolicited redesign or a new portfolio-wide standard.

Before editing:

- map the complaint to the exact viewport, rendered element, source node, and
  responsive rule;
- inventory sticky header, per-page counter, side rail, section label, bottom
  pager, series identifier, images, and blank columns separately;
- distinguish placement, persistence, navigation granularity, and label
  vocabulary. Changing page links to chapter links does not authorize changing
  numbers to words or translating labels;
- distinguish introduction, body, quote, caption, credit, and marginalia before
  moving content;
- preserve every accepted site-specific choice that the creator did not name.

When the creator supplies a folder, maintain a placement ledger with filename,
approved site/page, role, reuse restriction, alt/caption, provenance status,
source path, mirror path, and shipped status. Do not claim the request is
complete while relevant requested assets remain unused or while a restricted
asset has been repurposed. Treat hero art, portfolio-card covers, video posters,
directly displayed video media, maps, evidence images, portraits, logos, and
decorative motifs as distinct roles unless the creator explicitly approves
reuse. Use positive captions; add historical or representational distinctions
only when they prevent plausible confusion, not as repetitive lectures.

Keep production narration out of public copy. Notes about palette transitions,
upcoming background sections, screen counts, layout rationales, asset swaps, or
implementation plans belong in design, technical, audit, or handoff records
unless the production process is itself the published subject.

Repair accidental constraints before adding more CSS. Inspect the feedback
viewport and check usable grid width, hierarchy, contrast, overlap, peer
alignment, intentional empty space, and Chinese one- or two-character final
lines. Avoid arbitrary `max-width`, manual breaks, or font shrinking that fixes
only one screenshot.

Before changing a shared selector, design token, component, registry entry,
generator, or build template, enumerate every site, route, item, and mirror
that consumes it. Inspect the named target and all affected peers. A fix for one
portrait, logo, carousel item, card, or figure must not enlarge or reposition
the rest of the portfolio; prefer a site- or item-specific rule when only one
consumer is defective.

Audit media geometry at four levels: intrinsic dimensions and alpha, wrapper or
stage geometry, the rendered `img` or `video` box, and the visible content after
`object-fit`, `object-position`, clipping, or masking. Equal outer card or
carousel dimensions do not prove equal perceived scale, correct cropping, or
appropriate emphasis.

Use the same open PR for iterative corrections until it merges. After merge,
open a new branch and PR. Always edit the authoritative source, run the
site-specific rebuild, synchronize committed mirrors, and bump static cache
keys when necessary.

Explicit creator authorization to "publish directly" or "merge now" applies
only to the current scoped PR. If the creator also declines more checks or
hands extended QA to Antigravity, stop discretionary QA loops, record skipped
checks and `Antigravity QA pending`, and never present unrun QA as passed.
Minimum deployable source/mirror generation and high-risk safety checks are not
optional.

Update Figma in the same pass or name the exact frame that the implementation
temporarily supersedes; never call stale Figma current. Keep content, design,
technical and handoff records synchronized without rewriting the historical
sequence of creator decisions. A merge only triggers publication. Call
production live only after the deployment workflow succeeds; when the creator
explicitly declines waiting or verification, report "deployment triggered,
unverified" instead.

## Codex minimum before submission

1. Inspect the changed source and the current rendered baseline or a valid prior reference.
2. Render one representative changed route from the exact review commit or local artifact.
3. Confirm the requested change, primary assets, and obvious layout containment.
4. Check one relevant narrow viewport only when responsive behavior changed.
5. Run the smallest applicable build, asset validation, targeted test, or lint.

Do not require full-page captures, all routes, all breakpoints, pixel diffs, or overlay review before commit / PR.

## Antigravity extended QA

Hand Antigravity the preview URL, changed routes and states, baseline reference, and known risks. Antigravity owns:

- desktop, tablet, and mobile matrices;
- browser / device stabilization;
- console and network inspection;
- full interaction and keyboard / focus coverage;
- matching screenshots, pixel or perceptual comparison, and human side-by-side / overlay review;
- classification of visible differences and regression reporting.

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
  - require explicit human approval for the new visual result before calling the migration complete;
  - apply the matching Creative, Service, or Information new-site blueprint and
    QA gates to materially rebuilt routes.

## Gate failure behavior

Do not pass even the basic smoke check when the target page does not load, required assets are missing, the requested change is absent, obvious layout breakage appears, or a material change lacks user approval.

Missing Antigravity output does not block commit, push, PR, or a creator-authorized merge. Report `Antigravity QA pending` and do not claim comprehensive visual preservation until it passes.

Include in every migration PR:

- baseline reference when relevant
- Codex smoke-check route and result
- Antigravity QA status and recommended scope
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

Choose tier and behavior from both technical complexity and primary
responsibility:

- a Creative Tier A site may still need sophisticated media fallbacks and
  reduced-motion behavior;
- an Information Tier A site may still need rigorous reading, source, direct
  entry, and relationship-container QA;
- a Service site requires a complete applicable state matrix even when its
  implementation is technically simple.

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
- basic browser smoke QA
- CI-compatible scripts

Framework guidance:

- simple editorial / mostly static:
  use the simplest maintainable SSG/static-capable architecture.

- rich interactive frontend without server requirements:
  React + TypeScript with an appropriate modern build system is acceptable.

- server-rendered, API-heavy, auth, database, or complex product:
  use an appropriate full-stack framework such as Next.js when justified.

Do not migrate a healthy simple site to a heavier framework merely because another site uses it.

Architecture must support the primary responsibility:

- Creative: media, motion, asset, fallback, and performance needs;
- Service: real state, persistence, authorization, validation, recovery, and
  safety needs;
- Information: content model, sources, search, localization, relationships,
  and readable rendering.

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

Verify only what the change touches:
- applicable build or asset validation
- targeted lint or tests
- one representative route
- requested behavior and primary image loading
- one related responsive state when layout changed

Use a real browser for this smoke check. Assign major-route sweeps, console/network analysis, full responsive matrices, keyboard interaction, and link integrity crawling to Antigravity.

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
- Primary / secondary / supporting responsibility
- Unacceptable failure
- Route-level responsibility exceptions
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
- complete the Working Branch Gate for the batch.

For each batch:
1. verify and record the dedicated branch and base commit;
2. implement migration only on that branch;
3. run the smallest relevant checks;
4. perform the Codex browser smoke check;
5. deploy a live preview of the exact review commit;
6. create a Draft PR;
7. include before/after summary;
8. include the basic smoke result and Antigravity QA status / scope;
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
5. Every website has primary, secondary, and supporting responsibilities plus
   an unacceptable failure; route exceptions are recorded.
6. Shared versus site-specific design decisions are explicit.
7. Responsibility-specific preservation and repair obligations are explicit.
8. Migrated sites have Figma design-system coverage.
9. Migrated code passes the applicable build/test checks.
10. One representative changed flow or page passed Codex browser smoke QA; extended coverage is assigned to Antigravity.
11. A dedicated task branch was created from a verified base before repository writes, contains no unrelated work, and no production branch was modified directly.
12. Reviewable PRs exist for implemented migration batches.
13. Every website-facing batch has a verified Preview URL that is reachable before merge.
14. The website project table is updated to reflect new implementation, Figma, preview, and status information.
15. Every migrated existing site passes the Codex basic gate and records whether Antigravity QA is pending or passed.
16. Typography-affecting migrations introduce no unapproved alignment, spacing, wrapping, or Chinese orphan regressions.
17. Major REBUILD routes pass the applicable Creative, Service, or Information
    blueprint and QA gates.
18. Changed public-facing routes establish the object or task before abstract
    meaning, retain the necessary intermediate steps, and use media, containers,
    and interactions for a concrete explanatory or task purpose.
19. Creator assets retain their approved roles and reuse restrictions; public
    copy contains no accidental production notes.
20. Every shared selector, token, component, registry, generator, or template
    change has a documented consumer inventory and peer check.
21. Media-affecting migrations distinguish intrinsic, wrapper, rendered-box,
    and visible-content geometry rather than judging only outer frame size.

Final response must summarize:

- number of sites discovered
- number audited
- PRESERVE / REFACTOR / REBUILD counts
- Creative / Service / Information primary-responsibility counts and hybrids
- shared platform changes
- migrated sites
- Figma deliverables
- PR links
- preview links
- Codex smoke result, Antigravity QA status, and approved intentional differences
- blocked items
- remaining migration queue
