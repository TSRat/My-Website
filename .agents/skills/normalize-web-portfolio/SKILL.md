---
name: normalize-web-portfolio
description: Coordinate Codex Stage 2 implementation across all existing websites listed in the repository's website project table after Antigravity supplies approved creative direction. Use when the user asks to clean up, normalize, migrate, unify, audit, modernize, or systematically improve the portfolio. Classify each site and route by Creative, Service, or Information responsibility; preserve distinct identity; add feasibility, shared engineering, production implementation, preliminary smoke checks, previews, and draft PRs; then hand every website-facing batch to Antigravity Stage 3 complete validation. Do not originate Stage 1 creative direction or claim final QA.
---

# Normalize Web Portfolio

## Mission

Audit every website in the repository's authoritative website project table, document how each site is currently designed and implemented, then execute one shared Codex Stage 2 production standard capable of supporting both simple editorial sites and complex dynamic web applications.

This is not an audit-only skill unless the user explicitly says "audit only".

## Mandatory three-stage ownership

Read and obey `antigravity-codex-web-workflow`. This skill coordinates only
Codex Stage 2 across the portfolio.

- Antigravity owns each site's Stage 1 creative direction and approved change package.
- Codex may inventory and audit read-only before Stage 1 is complete, but must not write website-facing redesigns without the approved package.
- Codex adds feasibility, shared infrastructure, actual production work, and preliminary checks.
- Antigravity owns Stage 3 complete route, viewport, state, interaction, accessibility, console/network, content, and visual-regression validation.
- Do not use normalization to make every website resemble one Codex-generated design system.

Default behavior:
1. inspect;
2. document;
3. translate approved Antigravity direction into a feasible target architecture;
4. implement safe standardization;
5. run preliminary Codex checks;
6. create reviewable branches / draft PRs with previews and hand them to Antigravity Stage 3.

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

Preferred capabilities during Codex Stage 2:
- Product Design for implementation mapping, prototypes, and preliminary checks without replacing Antigravity direction
- Creative Production for approved asset production and visual-system implementation
- Figma for reading or technically annotating Antigravity's design source when authorized
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

An approved Antigravity creative source, commonly Figma, is required before a
website-facing migration changes visual identity, information structure, or
task behavior. Codex must not create a substitute creative direction merely to
unblock Stage 2.
Do not silently skip Figma.

---

# Stage 2 Workstream 0 — Repository and portfolio inventory

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

# Stage 2 Workstream 1 — Product / UX feasibility audit

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
- whether titles, decks, metadata, listing cards, or previous entries are being
  used to excuse an incomplete first body introduction in direct-entry units;
- for repeated collections, whether Background / Event / Details / Analysis or
  another approved section contract gives every heading a distinct job;
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

# Stage 2 Workstream 2 — Approved visual-system implementation

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
  Boundary sections instead of the fewest clear roles; allow an approved
  Background / Event / Details / Analysis structure when each part separately
  supplies orientation, headline result, supporting specifics, and derived
  meaning;
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

## Collection and renderer parity

When a site publishes repeated stories, cards, chapters, records, or states:

- inventory the complete collection and every public renderer or committed
  mirror before changing the schema;
- define machine-checkable contracts for required sections, first body
  introductions, punctuation, source-link count/placement, assets, and routes;
- manually inspect representative units, then run the contracts against every
  record; creator examples reveal defects but do not bound the repair;
- compare authoritative source content with dynamic, static, server, client,
  and generated-mirror output as applicable;
- fail the migration when one renderer silently drops structure, styling,
  links, or accessibility semantics.

Do not call a corpus-wide rewrite complete from a small fixture set or a single
successful page.

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
approved site/page, role, alt/caption, provenance status, source path, mirror
path, and shipped status. Do not claim the request is complete while relevant
requested assets remain unused. Use positive captions; add historical or
representational distinctions only when they prevent plausible confusion, not
as repetitive lectures.

Repair accidental constraints before adding more CSS. Inspect the feedback
viewport and check usable grid width, hierarchy, contrast, overlap, peer
alignment, intentional empty space, and Chinese one- or two-character final
lines. Avoid arbitrary `max-width`, manual breaks, or font shrinking that fixes
only one screenshot.

Use the same open PR for iterative corrections until it merges. After merge,
open a new branch and PR. Always edit the authoritative source, run the
site-specific rebuild, synchronize committed mirrors, and bump static cache
keys when necessary.

Explicit creator authorization to "publish directly", "merge now", or skip
Antigravity grants merge authority for the current scoped PR even when Stage 3
is pending. Run the proportional minimum Codex checks, record skipped checks,
and use `ANTIGRAVITY_PHASE_3: SKIPPED_BY_USER`. Never present skipped
Antigravity validation as passed or reuse the authority for another PR.
Minimum deployable source/mirror generation and high-risk safety checks are not
optional.

Update Figma in the same pass or name the exact frame that the implementation
temporarily supersedes; never call stale Figma current. Keep content, design,
technical and handoff records synchronized without rewriting the historical
sequence of creator decisions. A merge only triggers publication. Call
production live only after the deployment workflow succeeds; when the creator
explicitly declines waiting or verification, report "deployment triggered,
unverified" instead.
For cached hosts, repeat the preview and production smoke with a harmless cache
key or equivalent hard reload. Inspect the final DOM, computed styles, primary
assets, and requested change; deployment status and a cached screenshot are
insufficient.

## Codex minimum before submission

1. Inspect the changed source and the current rendered baseline or a valid prior reference.
2. Render one representative changed route from the exact review commit or local artifact.
3. Confirm the requested change, primary assets, and obvious layout containment.
4. Check one relevant narrow viewport only when responsive behavior changed.
5. Run the smallest applicable build, asset validation, targeted test, or lint.

Do not require full-page captures, all routes, all breakpoints, pixel diffs, or overlay review before commit / PR.

## Antigravity Stage 3 complete validation

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

Missing Antigravity Stage 3 output does not block Codex from committing,
pushing, creating the Draft MR/PR, or producing its preview; those actions must
happen before Stage 3 begins. It does block any claim of complete validation
and, by default, blocks merge. Report `ANTIGRAVITY_PHASE_3: PENDING`. Merge after
Stage 3 passes, or immediately when the user explicitly authorizes the current
scoped PR and the proportional minimum Codex checks pass; in the latter case,
report `ANTIGRAVITY_PHASE_3: SKIPPED_BY_USER`.

Include in every migration PR:

- baseline reference when relevant
- Codex smoke-check route and result
- Antigravity QA status and recommended scope
- approved intentional changes
- unresolved visual risks

---

# Stage 2 Workstream 3 — Antigravity/Figma implementation mapping

An approved Antigravity/Figma creative source is required for website-facing
migrations that change visual identity, information structure, or task
behavior. Codex uses it during Stage 2; Codex does not originate it.

First search for existing Figma files and reusable libraries.

Reuse the approved creative source before producing implementation assets.

Map the approved source into an implementation structure conceptually
equivalent to:

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

1. Inspect the Antigravity/Figma source and existing rendered design.
2. Map approved foundations, components, themes, frames, and states to code.
3. Extract and normalize implementation equivalents for:
   - variables
   - text roles
   - spacing
   - grids
   - reusable components
   - variants
4. Preserve site-specific theme variables.
5. Confirm the approved creative source covers at minimum:
   - a representative desktop frame;
   - a representative mobile frame;
   - key reusable components;
   - key states for interactive sites.

If required creative frames or states are missing, return the gap to
Antigravity Stage 1. Do not create a substitute direction in order to continue.

When explicitly authorized, Codex may add technical annotations or
implementation mappings to the supplied Figma file, but must not replace its
creative decisions.

Record:
- Figma file URL
- relevant page/frame names
- design-system relationship

in the repository audit documentation.

---

# Stage 2 Workstream 4 — Interactive implementation prototype

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

Run preliminary implementation comparison between:
- Antigravity Figma / accepted creative target
- rendered implementation

Fix high-impact discrepancies before handoff.

---

# Stage 2 Workstream 5 — Production engineering normalization

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

For collection-wide, schema, or renderer changes, "what the change touches"
includes every affected record and renderer. Use automated content-contract
and parity checks for full coverage, with representative browser inspection
for qualitative reading and layout.

Use a real browser for this smoke check. Assign major-route sweeps, console/network analysis, full responsive matrices, keyboard interaction, and link integrity crawling to Antigravity.

---

# Stage 2 Workstream 6 — Approved Data / Analytics implementation

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

Describe the shared Codex Stage 2 workstream standard and which rules are mandatory versus optional by site tier.

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

# Codex Stage 2 handoff criteria

Codex Stage 2 is not ready for Antigravity validation until:

1. Every project-table website has been inspected or has a named blocker.
2. The resolved portfolio audit file contains every website and is stored in a repository-approved, version-controlled source location.
3. Every website has a concrete current-state description, not just evaluation criteria.
4. Every website has a PRESERVE / REFACTOR / REBUILD classification.
5. Every website has primary, secondary, and supporting responsibilities plus
   an unacceptable failure; route exceptions are recorded.
6. Shared versus site-specific design decisions are explicit.
7. Responsibility-specific preservation and repair obligations are explicit.
8. Migrated sites map to the approved Antigravity creative source and implementation contract.
9. Migrated code passes the applicable build/test checks.
10. One representative changed flow or page passed Codex preliminary browser smoke; complete coverage is assigned to Antigravity Stage 3.
11. A dedicated task branch was created from a verified base before repository writes, contains no unrelated work, and no production branch was modified directly.
12. Reviewable PRs exist for implemented migration batches.
13. Every website-facing batch has a verified Preview URL that is reachable before merge.
14. The website project table is updated to reflect new implementation, Figma, preview, and status information.
15. Every migrated existing site passes the Codex preliminary gate and records whether Antigravity Stage 3 is pending, passed, or failed.
16. Typography-affecting migrations introduce no unapproved alignment, spacing, wrapping, or Chinese orphan regressions.
17. Major REBUILD routes have an approved Antigravity package and pass the
    applicable preliminary Creative, Service, or Information implementation gates.
18. Changed public-facing routes establish the object or task before abstract
    meaning, retain the necessary intermediate steps, and use media, containers,
    and interactions for a concrete explanatory or task purpose.
19. Repeated collections pass full-record section, entity-introduction,
    punctuation, source-link, asset, route, and renderer-parity contracts.
20. Preview smoke checks bypass stale caches and confirm the requested review
    commit is present; Antigravity Stage 3 remains responsible for complete
    deployed DOM, computed-style, asset, layout, and regression validation.

After the criteria pass, report:

```text
ANTIGRAVITY_PHASE_1: APPROVED
CODEX_PHASE_2: MR_READY_FOR_ANTIGRAVITY_VALIDATION
ANTIGRAVITY_PHASE_3: PENDING | PASS | FAIL | SKIPPED_BY_USER
```

Do not call the portfolio migration complete or production ready until
Antigravity has returned the Stage 3 result.

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
- Codex preliminary smoke result, Antigravity Stage 3 status, and approved intentional differences
- blocked items
- remaining migration queue
