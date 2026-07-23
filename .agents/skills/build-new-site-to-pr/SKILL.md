---
name: build-new-site-to-pr
description: "Build a new production-quality website from a user-provided and already-selected design direction, using the full six-stage workflow: Product/UX, visual production, mandatory Figma design system, interactive prototype and design QA, production engineering with GitHub, and data/analytics. Finish with a live clickable preview URL and a pull request. Do not use when the user has not yet provided or selected a design direction."
---

# Build New Site to PR

## Mission

Turn a user-provided, already-selected website concept and design direction into:

1. a defined product / UX architecture;
2. a coherent visual system and required assets;
3. a real editable Figma design and design system;
4. a verified interactive prototype;
5. production-quality code integrated into the website repository;
6. appropriate data / analytics architecture;
7. a live clickable preview;
8. a GitHub Pull Request ready for human review.

The workflow is not complete when code is merely generated.

The completion state is:

USER DIRECTION
→ FIGMA
→ WORKING IMPLEMENTATION
→ DESIGN QA
→ BASIC BROWSER SMOKE
→ LIVE PREVIEW URL
→ PR

Never modify `main` directly.

Never merge automatically.

---

# Trigger requirements

Use this skill when the user has already supplied or selected a meaningful design direction.

Examples:
- visual direction
- reference site
- Figma reference
- screenshot
- moodboard
- style description
- approved Product Design concept
- detailed layout / interaction plan

Do not force the user through three alternative concepts when they have already selected the direction.

Respect the provided direction as authoritative.

If the direction contains contradictions:
- resolve minor contradictions using best design judgment;
- ask only when the contradiction would materially change product identity or core functionality.

Do not ask questions merely because small details are missing.
Use reasonable defaults and document them.

---

# Required input resolution

Resolve:

- site name
- slug / route
- purpose
- target audience
- user-provided design direction
- content source
- required pages
- required interactions
- source repository
- deployment expectations

Inspect the repository before modifying anything.

Read:
- README
- AGENTS.md
- website project table
- existing site architecture
- shared packages
- design tokens
- existing Figma references
- deployment workflows
- analytics conventions
- related websites

Reuse established infrastructure where appropriate.

Do not create a parallel architecture when the repository already has a healthy shared system.

## Repository documentation path

Resolve the source documentation directory before writing workflow documents:

1. Read the repository rules, `.gitignore`, build scripts, and deployment workflow.
2. Use `docs/` only when it is source-maintained and version-controlled.
3. If `docs/` is generated, ignored, or used as deployment output, use the repository-approved source directory instead; prefer `web/sites/` when no more specific convention exists.
4. Never change ignore or deployment rules merely to satisfy this skill's documentation paths.

For this repository, `docs/` is ignored GitHub Pages output, so:

```text
<site-doc-root> = web/sites
```

---

# Capability policy

Use installed capabilities automatically according to these three levels.

## Mandatory

- Figma for the editable design system and accepted design source of truth
- Browser, with Computer Use as the fallback when required UI work is not covered, for a basic rendered-page and primary-flow smoke check
- GitHub for the feature branch, commit, push, and Pull Request workflow
- A preview deployment provider or existing repository preview mechanism for the verified live preview

Mandatory capabilities are completion gates. Do not silently replace them with prose, screenshots, local-only output, or an unverified deployment.

Comprehensive browser, device-matrix, interaction, accessibility, console/network, and visual-regression QA belongs to Antigravity. Its report is not a prerequisite for Codex commit, PR, or a creator-authorized merge; record it as pending or passed.

Figma is mandatory.

If Figma cannot be accessed:
- do not silently substitute screenshots;
- stop at the Figma gate after completing any safe preparatory work;
- report the exact blocker.

A live preview URL is mandatory for final completion.

If no preview provider is available:
- do not claim completion;
- identify the missing deployment capability or credential.

## Strongly recommended

Default to using these capabilities during their corresponding stages:

- Product Design for product framing, information architecture, user flows, interaction states, and design QA
- Creative Production for art direction, visual-system refinement, asset direction, and production-ready visual assets
- Data Analytics for measurement strategy, event and metric validation, privacy-aware instrumentation planning, and data-product QA
- Visualize for information architecture, user flows, state relationships, architecture, comparisons, and other structures that become materially clearer as an interactive or visual artifact

Strongly recommended does not mean mandatory. It means:

1. use the capability by default when it can materially improve the result;
2. do not invoke it merely to satisfy a plugin count;
3. if it is skipped, record a concise reason in the capability usage record and final handoff;
4. if it is unavailable, continue safe work and name the limitation.

## Recommended

Use all other relevant installed plugins, apps, connectors, and capabilities when they materially improve quality, evidence, delivery, or efficiency.

Examples may include image generation, connected content sources, research tools, accessibility tooling, and an approved hosting provider. Do not invoke an unrelated capability solely to make the workflow appear more complete.

## Capability usage record

Maintain a visible record in the project handoff:

| Capability | Level | Used | Result / artifact | Skip or blocker reason |
| --- | --- | --- | --- | --- |

Record every mandatory and strongly recommended capability. Recommended capabilities only need to be recorded when used.

---

# Phase 1 — Product / UX

Translate the approved design direction into a concrete product specification.

Do not redesign the concept unless necessary for usability or feasibility.

Strongly prefer Product Design for this phase. Strongly prefer Visualize when a route map, user flow, state model, or information architecture is materially easier to understand visually. If either capability is skipped, record why.

Define:

## Product
- primary user
- primary user goal
- primary value
- page / route map
- content model
- primary task or reading journey

## Information architecture
- navigation
- hierarchy
- page relationships
- discovery paths
- related-content logic

## Interaction
As relevant:
- navigation
- search
- filter
- sort
- tabs
- timeline
- map
- knowledge graph
- gallery
- forms
- save
- collections
- account
- dashboards
- modal
- drawer
- command palette

## State inventory
As relevant:
- default
- hover
- focus
- active
- selected
- loading
- empty
- error
- validation
- success
- disabled

For simple sites, keep the product architecture simple.

Do not add features merely to make the website appear "complex".

The architecture must be capable of growing without requiring unnecessary complexity today.

Create:

<site-doc-root>/<slug>/product-spec.md

Include:
- goals
- routes
- information architecture
- flows
- interactions
- state requirements
- accessibility requirements
- responsive behavior

---

# Phase 2 — Visual production

Use the user's design direction as the source of truth.

Do not generate three unrelated styles.

Translate the direction into a production-ready visual language.

Define:

- art direction
- color system
- typography
- grid
- spacing
- imagery
- iconography
- texture
- motion
- density
- visual hierarchy
- responsive visual behavior

Strongly prefer Creative Production to turn the approved direction into a coherent visual system and asset plan. If the supplied design and assets already resolve the visual direction and Creative Production would add no material value, record that reason before skipping it.

Use Creative Production or image generation for actual required assets when appropriate:
- hero imagery
- illustrations
- textures
- backgrounds
- decorative imagery
- editorial graphics

Do not use generic placeholders in the final implementation where the design clearly requires real visual content.

Preserve provided logos and brand assets exactly unless explicitly asked to redesign them.

Create:

<site-doc-root>/<slug>/visual-direction.md

Document concrete decisions, not vague adjectives.

Bad:
"Use elegant typography and historical colors."

Good:
"Display headings use a high-contrast serif; metadata uses a restrained sans-serif. The primary surface is warm ivory, body text is near-black, and the project accent derives from lapis blue. Large artifact photography uses directional museum lighting and generous negative space."

---

# Phase 3 — Mandatory Figma design system

This phase cannot be skipped.

Search existing shared Figma libraries first.

Reuse before creating.

Create or update a Figma design file for the new site.

Required structure:

00 — Cover / Notes

01 — Foundations
- semantic colors
- typography roles
- spacing
- grid
- responsive rules
- motion rules

02 — Components
- shared components reused from TSRat core
- site-specific components
- variants
- interaction states

03 — Key Screens
- desktop
- mobile
- tablet when materially useful

04 — Interaction / States
- loading
- empty
- error
- selected
- modal/drawer/etc. when relevant

05 — Handoff
- implementation notes
- links / asset notes

Requirements:

1. Use editable Figma nodes.
2. Use Auto Layout where appropriate.
3. Use Variables / Styles where appropriate.
4. Use Components and Variants for repeated UI.
5. Reuse existing library components when they fit.
6. Preserve the site's unique theme separately from shared core primitives.

At minimum create:
- homepage or primary screen, desktop
- homepage or primary screen, mobile
- one representative content/detail screen if the site has multiple content types
- important interactive state screens for dynamic sites

The Figma result is the design source of truth.

Store:

- Figma URL
- file name
- key frame names

in:

<site-doc-root>/<slug>/design-handoff.md

Do not start final production implementation before a usable Figma target exists.

---

# Phase 4 — Interactive prototype + design QA

Build the smallest complete interactive frontend that proves the important experience.

The prototype must implement the interactions visible in the core user journey.

As relevant:
- navigation
- links
- tabs
- menu
- search
- filter
- toggles
- forms
- timelines
- maps
- graphs
- save / selection states
- modal / drawer
- responsive navigation

Implement visible states as relevant:
- hover
- focus
- selected
- loading
- empty
- success
- error

Run the prototype locally.

Open it in a real browser and smoke-test the primary page or flow.

Perform design QA:

FIGMA TARGET
↕
RENDERED IMPLEMENTATION

Compare:
- layout
- hierarchy
- size
- typography
- spacing
- image crop
- components
- responsive transformation
- interaction states

Fix high-priority differences.

Do not declare the prototype ready based only on:
- successful build
- localhost returning HTTP 200
- no TypeScript errors

Codex must confirm that the target renders, the requested result is visible, primary assets load, and the primary flow has no obvious blocker. Antigravity owns exhaustive flows, device matrices, console/network inspection, keyboard/accessibility passes, and screenshot comparison.

---

# Phase 5 — Production engineering + GitHub + preview

## Architecture selection

Choose the simplest architecture that supports the real requirements.

Guidance:

### Editorial / static-heavy
Prefer a maintainable SSG/static-capable approach.

### Rich interactive frontend
Use a componentized TypeScript architecture.

### Complex dynamic application
When requirements include:
- auth
- server rendering
- APIs
- database
- persistent user data
- server actions
- complex dynamic routing

choose an appropriate full-stack architecture.

Do not add backend infrastructure when the product does not require it.

## Engineering requirements

As applicable:

- TypeScript
- reusable components
- shared design tokens
- semantic HTML
- accessibility
- keyboard behavior
- responsive design
- data/content abstraction
- API abstraction
- environment variables
- secure secret handling
- error handling
- loading states
- optimized assets
- route integrity
- lint
- typecheck
- tests
- build

Do not break existing sites.

Preserve repository conventions when they are healthy.

## Browser QA

Before PR:

1. build the project;
2. run it;
3. open the primary changed route;
4. confirm the requested result and primary interaction;
5. confirm primary local assets load;
6. check one relevant narrow viewport only when responsive behavior changed.

Fix obvious blocking issues. Hand comprehensive route, desktop/tablet/mobile, console/network, broken-link, keyboard/accessibility, and interaction coverage to Antigravity.

## Git workflow

Create a dedicated branch.

Preferred naming:

feature/site-<slug>

or, if updating existing naming conventions, follow the repository standard.

Commit intentionally.

Push the branch.

Never push directly to main.

---

# Preview deployment gate

A live clickable preview URL is mandatory.

Preferred order:

1. existing repository PR-preview infrastructure;
2. connected preview deployment provider such as Vercel;
3. another already-approved repository preview mechanism.

Do not alter production hosting merely to create a preview.

If production uses GitHub Pages:
- production may remain GitHub Pages;
- PR preview may use a separate preview provider.

Deploy the exact branch / commit intended for the PR.

Open the deployed URL in a real browser for a basic smoke check.

Do not rely only on deployment status.

Check:
- homepage loads
- requested change is visible
- primary assets load
- primary interaction has no obvious blocker
- one related mobile viewport when responsive behavior changed

Only after verification is the preview accepted.

---

# Create the Pull Request

Create a PR after the preview passes.

PR body must include:

## Summary
What the site is and what was built.

## Design
- Figma URL
- visual direction summary
- shared design-system components used
- site-specific theme/components

## Product / UX
- primary flow
- major interactions
- responsive behavior

## Implementation
- framework / architecture
- important modules
- data/content model

## Validation
- build
- lint
- typecheck
- tests
- Codex browser smoke QA
- Antigravity QA status / recommended scope
- accessibility checks

## Preview
A clearly visible clickable Preview URL.

## Screenshots
Include representative desktop/mobile screenshots when supported.

## Known limitations
List real limitations.

## Follow-ups
Only actual remaining work.

Do not merge automatically.

---

# Phase 6 — Data / Analytics

Determine whether the site is:

A. editorial/content
B. interactive content product
C. data product/dashboard
D. full application

Do not add analytics merely because this stage exists.

Strongly prefer Data Analytics to validate the measurement strategy, provider-neutral event model, privacy boundaries, and any proposed metrics. Using Data Analytics does not authorize adding cookies, tracking providers, or invasive instrumentation. If it is skipped for a simple site, record why.

If the repository already has an analytics provider:
- integrate using existing conventions.

If there is no provider:
- create a provider-neutral event model unless the user explicitly approves adding a provider.

For content sites consider events such as:
- page_view
- article_opened
- related_content_opened
- search_performed
- filter_applied
- timeline_item_opened

For product sites consider:
- task_started
- task_completed
- item_saved
- collection_created
- error_encountered

For dashboards/data products:
- use Data Analytics to validate metrics, definitions, source freshness, filters, and chart choices.

Create:

<site-doc-root>/<slug>/analytics.md

State:
- what is measured
- why
- provider
- events
- privacy implications
- what is intentionally not tracked

---

# Update website project table

Add the new project to the authoritative website project table.

Include when columns exist or can be safely added:

- project name
- slug
- source path
- production URL / future production route
- preview URL
- Figma URL
- framework
- status
- PR
- deployment
- notes

Do not create a second competing project table.

---

# Completion gate

The workflow is complete only when all applicable items are true:

- [ ] Product / UX spec exists
- [ ] visual direction is documented
- [ ] capability usage record covers all mandatory and strongly recommended capabilities
- [ ] every skipped strongly recommended capability has a stated reason
- [ ] Figma file exists
- [ ] Figma URL is recorded
- [ ] key desktop design exists
- [ ] key mobile design exists
- [ ] reusable components / variables exist
- [ ] implementation matches the accepted design
- [ ] primary interaction flow works
- [ ] build passes
- [ ] applicable lint/typecheck/tests pass
- [ ] Codex browser smoke QA completed
- [ ] changed responsive behavior smoke-checked when applicable
- [ ] Antigravity extended QA status and scope recorded
- [ ] analytics strategy documented
- [ ] feature branch pushed
- [ ] live preview deployed
- [ ] preview opened and verified
- [ ] PR created
- [ ] PR contains Figma link
- [ ] PR contains live Preview link
- [ ] website project table updated

If any mandatory gate fails, say:

STATUS: BLOCKED

Then state:
- completed work
- exact blocker
- exact next action required

Never report "done" without both:
1. PR URL
2. verified live Preview URL

---

# Final handoff format

Return:

## New site
- name
- source path
- architecture

## Design
- Figma
- visual direction
- design system

## Product
- primary user flow
- interactions

## Capabilities
- mandatory capabilities used or blocked
- strongly recommended capabilities used and their artifacts
- explicit reasons for any strongly recommended capability skipped
- other recommended capabilities used

## Validation
- build
- tests
- Codex browser smoke QA
- Antigravity QA status / scope
- targeted accessibility checks performed by Codex, if any

## Analytics
- measurement approach

## Delivery
- Branch
- PR
- Preview URL

## Remaining limitations
Only real limitations.

The two most important links must be easy to find:

FIGMA:
<url>

PREVIEW:
<url>

PR:
<url>
