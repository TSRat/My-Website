---
name: build-creative-site-to-pr
description: "Build or substantially revise a production-quality creative website whose primary responsibility is to create a memorable impression, express an author or brand identity, present work, or deliver an artistic digital experience. Use for portfolios, artists, films, music, fashion, exhibitions, campaign microsites, personal brands, experimental narratives, and creator-directed screenshot correction passes after an Antigravity direction or approved experience already exists. Require approval of a complete experience storyboard before initial production writes, then complete the six-stage website workflow, Figma, implementation, preview, and pull request; use the bounded correction loop for later local feedback."
---

# Build Creative Site to PR

## Mission

Build a website whose unacceptable failure is:

> The visitor leaves without feeling, recognizing, or remembering the intended
> person, work, world, or brand.

Creative freedom is broad, but never use it to hide:

- who or what the site represents;
- what work or experience is available;
- how to continue;
- the primary action, contact, or destination.

Read [references/creative-experience-gate.md](references/creative-experience-gate.md)
completely before producing the approval storyboard or final design.

Never modify `main` directly. Never merge automatically.

## Select this responsibility

Use this skill when the visitor primarily comes to:

- feel and explore a world;
- recognize an author, artist, project, or brand;
- experience work, images, film, music, fashion, or narrative;
- remember a distinctive identity.

For hybrids, choose one primary responsibility:

- Creative + Information: keep this skill primary only when impression and
  authorship may not fail; add information orientation, source, and reading
  checks from `build-information-site-to-pr`.
- Creative + Service: keep this skill primary only when experience may not
  fail; add the complete task, state, safety, and recovery checks from
  `build-service-site-to-pr`.

If completing a task or obtaining correct understanding is the unacceptable
failure, use the corresponding skill as primary. Do not run three complete
workflows in parallel.

## Resolve inputs read-only

Read the repository rules, authoritative project registry, current architecture,
design tokens, existing Figma, related sites, deployment workflow, and content
sources.

Resolve:

- site name, slug, purpose, audience, and primary impression;
- Antigravity design direction and complete visual system;
- work, story, media, assets, rights, and attribution;
- author or brand identity;
- required routes, interactions, languages, clients, and destinations;
- source repository and preview/deployment mechanism.

If the Antigravity visual system is unavailable or unreadable, report
`STATUS: BLOCKED`. Do not invent a generic visual direction.

## Experience Storyboard Approval Gate

Before creating a branch, Figma production file, asset, or repository content,
present a complete experience storyboard in chat.

Cover every route and meaningful screen, scene, transition, interaction, media
state, language variation, and direct-entry state. Include:

- the impression contract: feel, recognize, remember, and do;
- the visitor's emotional and attentional arc;
- what is visible in the first 3, 10, and 30 seconds;
- identity, work, navigation, and action visibility;
- what a visitor with no prior knowledge can say about the represented person,
  work, world, or brand before encountering symbolism or critical framing;
- typography, color, imagery, motif, space, rhythm, motion, and sound grammar;
- signature moments and their content purpose;
- media rights, loading, fallback, reduced-motion, and muted behavior;
- intended destinations and link labels for work, credits, sources, contact,
  social profiles, tickets, purchases, and related projects;
- desktop, mobile, multilingual, keyboard, and screen-reader behavior;
- secondary information or service responsibilities;
- risks, assumptions, assets, and production dependencies.

Report:

```text
STATUS: WAITING_FOR_EXPERIENCE_APPROVAL
```

Do not create a branch or write repository files while waiting. Earlier concept
selection is not storyboard approval. Revise and ask again when the user changes
the experience.

After explicit approval, record it and treat the storyboard as the experience
source of truth. Material changes to identity, scene order, signature moments,
navigation, or primary action require renewed approval.

## Creator correction loop

Do not restart the full storyboard gate for a local, creator-directed correction
that preserves routes, scene order, identity, primary action, and the approved
experience. Treat screenshot feedback as a bounded implementation pass.

Before editing:

1. map each comment to the exact rendered element, source node, viewport, and
   responsive rule;
2. inventory repeated chrome separately: sticky header, per-scene or per-page
   counter, side rail, section label, bottom pager, and series identifier;
3. state ambiguous spatial instructions using container + corner + persistence
   + label + granularity; ask one short question when two interpretations would
   produce different interfaces;
4. preserve every accepted choice not named in the correction. Changing
   navigation from page-level to chapter-level does not authorize translating
   its labels, changing its visual vocabulary, or moving unrelated controls;
5. classify copy before moving it: identity line, introduction, body, quote,
   caption, credit, or marginal note.

For creator-provided folders, maintain an asset placement ledger: filename,
approved scene, visual job, reuse restriction, alt/caption, source or creator
status, and shipped path. Use every explicitly requested asset or report the
exact unresolved mapping. Do not substitute, relocate, crop, remove, or reuse
another image without authorization. Treat hero art, archive-card covers, video
posters, directly displayed video media, maps, evidence images, portraits, and
decorative motifs as distinct roles unless the creator explicitly approves
reuse. Write positive captions that identify the work and its role. Avoid
patronizing disclaimers about obvious image status; distinguish a film still,
modern illustration, reconstruction, or historical object only when a viewer
could plausibly mistake its evidentiary role.

Do not publish internal production narration as visitor-facing copy. Notes such
as "the page now turns from green to red", "next we add the background",
"replace this image", screen counts, layout rationales, and asset plans belong
in design, technical, or handoff records unless making the work is itself the
subject.

For layout corrections, remove accidental constraints before adding new ones.
Use the available grid, inspect the feedback viewport, and check hierarchy,
contrast, overlap, peer alignment, blank-space purpose, and one- or
two-character headline lines. Do not force wrapping with an arbitrary
`max-width`, manual `<br>`, or screenshot-only font size.

Inspect media geometry at four levels: intrinsic dimensions and alpha, wrapper
or stage geometry, the rendered media box, and the visible content after
`object-fit`, `object-position`, clipping, or masking. A consistent frame height
does not mean every portrait or cover should have the same visible scale.

Before changing a shared selector, token, component, registry, or generator,
enumerate all consumers and inspect the requested target plus every affected
peer. A local portrait, logo, carousel, card, or figure correction must not
silently enlarge or move the rest. Use target-specific rules when the defect is
target-specific.

Create rhythm through controlled variation rather than cloned screens or random
novelty. Image scale, color field, density, orientation, and layout family may
change between scenes when each change serves a narrative beat. Keep the
typographic system, alignment logic, navigation behavior, and identity motifs
coherent enough that the experience still feels intentionally authored.

Keep iterative corrections on the same open PR. After that PR is merged, use a
new branch and PR for the next correction. Modify the authoritative source,
rebuild its committed publish mirror, and bump static cache keys when the
existing delivery path requires it.

Explicit "publish directly" or "merge now" from the repository owner authorizes
merging the scoped PR; it is not automatic merge authority for later work. If
the owner also says not to run more checks or assigns extended QA to
Antigravity, stop discretionary QA loops. Still produce the deployable
source/mirror artifact, keep the commit scoped, and report skipped preview or
QA honestly. Never relabel unrun QA as passed.

Keep design and delivery records truthful during fast corrections. Update Figma
in the same pass or name the exact frame that the implementation temporarily
supersedes; never call stale Figma current. Update the relevant design,
technical, content, and handoff notes without rewriting historical records.
A merge only triggers publication. Call production live only after the
deployment workflow succeeds; when the owner explicitly declines waiting or
verification, report "deployment triggered, unverified" instead.

## Working Branch Gate

After storyboard approval and before repository writes:

1. run `git status --short --branch`, `git branch --show-current`, and
   `git log -15 --oneline --decorate`;
2. identify and record the default branch and exact base commit;
3. require a clean worktree or use a fresh isolated worktree;
4. preserve unrelated work; never silently stash, reset, discard, or overwrite;
5. create and verify a dedicated branch such as `codex/site-<slug>`;
6. confirm it is not a production or deployment branch.

Stop repository writes if the base, branch, or worktree ownership is uncertain.

## Execute the six stages

### 1. Product / UX

Define:

- visitor, impression, desired memory, and next action;
- a public entry contract that names who or what the site represents and shows
  at least one concrete work, example, place, event, or capability before asking
  the visitor to decode a metaphor;
- route map, discovery path, project/content model, and direct-entry recovery;
- minimal stable navigation beneath any experimental behavior;
- contact, follow, view-work, buy, book, or subscribe exits when relevant;
- secondary information and service requirements.

Create `<site-doc-root>/<slug>/product-spec.md`.

### 2. Visual exploration and production

Translate Antigravity into an implementable visual grammar:

- distinctive type, color, imagery, composition, motifs, and rhythm;
- media and asset plan with rights and attribution;
- a named information or narrative job for each major image, film, sound,
  caption, card, and visual comparison; do not add media only to manufacture
  atmosphere;
- useful captions with identity, date, role, context, or visual observation,
  plus clear labels for AI-generated, reconstructed, imagined, replicated, or
  materially altered media when confusion with primary evidence is plausible;
- motion and sound with purpose, opt-in behavior, and fallbacks;
- signature moments that reveal content rather than delay it;
- page-to-page variation inside one recognizable system.

Create `<site-doc-root>/<slug>/visual-direction.md`.

### 3. Figma design system

Create an editable Figma source of truth containing:

- foundations and semantic tokens;
- creative grammar and site-specific motifs;
- reusable components and variants;
- desktop and mobile key scenes;
- interaction, transition, reduced-motion, loading, and fallback states;
- a handoff page with frame names and implementation notes.

Record the Figma URL in `<site-doc-root>/<slug>/design-handoff.md`.

### 4. Prototype and design QA

Prototype the core experience with real media and realistic copy.

Verify:

- identity and work are discoverable without decoding;
- a newcomer can identify the subject and describe at least one concrete work
  or example before being asked to interpret the site's symbolism;
- cards and captions make a complete point rather than displaying only a name,
  label, or obvious disclaimer;
- experimental navigation remains operable;
- motion, audio, and media never trap or block the visitor;
- static and reduced-motion versions preserve meaning;
- typography remains readable at 100% zoom;
- mobile becomes a composed experience rather than a scaled poster;
- first load and transitions meet the performance budget.
- interactive experiences do not require specialist, research, programming, or
  design knowledge that the site has not first supplied.

Run link-integrity QA:

- use descriptive visible labels rather than bare URLs, generic "link," or
  "click here";
- implement navigation destinations as semantic anchors or framework link
  components, not inert text or click-only containers;
- make links visually identifiable, keyboard reachable, and focus visible;
- in the deployed preview, actually click every changed work, credit, source,
  contact, social, ticket, purchase, and related-project link;
- confirm each link reaches the intended page rather than an error, unrelated
  homepage, search result, or misleading redirect;
- document any expected authentication, app handoff, download, or unavailable
  external destination instead of claiming it was verified.

Record:

```text
CODEX_IDENTITY_GATE: PASS | FAIL
CODEX_EXPERIENCE_GATE: PASS | FAIL
CODEX_CREATIVE_USABILITY_GATE: PASS | FAIL
CODEX_PUBLIC_LEGIBILITY_GATE: PASS | FAIL
```

### 5. Engineering, preview, and PR

Choose the simplest architecture that supports the approved media, motion, and
interaction. Preserve repository URLs and deployment conventions.

Run the smallest relevant build, test, lint, and real-browser smoke checks.
Deploy a live preview of the exact review commit and verify it.

Commit only scoped files, push the feature branch, and create a Pull Request
containing:

- storyboard and Figma links;
- preview URL;
- impression contract and signature moments;
- media rights and performance notes;
- Codex QA results and Antigravity extended QA status.

### 6. Data / Analytics

Measure meaningful engagement without turning the experience into a surveillance
funnel. Prefer provider-neutral events such as:

- project_opened;
- story_scene_reached;
- media_started, completed, or muted;
- contact_or_follow_opened;
- related_work_opened.

Do not use dwell time alone as proof of emotional impact. Document consent,
privacy, and what is intentionally not tracked.

## Completion gate

Require:

- [ ] approved experience storyboard and recorded approval
- [ ] dedicated clean branch from a verified base
- [ ] Figma source with desktop, mobile, motion, and fallback states
- [ ] recognizable identity and available work
- [ ] the represented object or work appears before abstract symbolism, and a
      newcomer can describe at least one concrete example
- [ ] major media, captions, cards, and interactions have a content purpose and
      do not demand untaught specialist knowledge
- [ ] creator assets keep their approved roles and reuse restrictions
- [ ] no visitor-facing copy exposes internal design or implementation notes
- [ ] shared component changes were checked against every affected peer
- [ ] media was checked at intrinsic, wrapper, rendered-box, and visible-content
      levels
- [ ] clear navigation and primary action
- [ ] purposeful, performant, accessible motion and media
- [ ] readable typography without screenshot-first shrinking
- [ ] descriptive semantic links with no bare or inert reader-facing URLs
- [ ] every changed destination was clicked in the deployed preview and reached
      the intended page or has a documented expected external state
- [ ] `CODEX_IDENTITY_GATE: PASS`
- [ ] `CODEX_EXPERIENCE_GATE: PASS`
- [ ] `CODEX_CREATIVE_USABILITY_GATE: PASS`
- [ ] `CODEX_PUBLIC_LEGIBILITY_GATE: PASS`
- [ ] relevant build, test, lint, and browser smoke checks
- [ ] analytics and privacy specification
- [ ] verified live preview
- [ ] Pull Request with Figma and preview links
- [ ] authoritative project registry updated

If a mandatory item fails, report `STATUS: BLOCKED` with the exact next action.
Never report completion without both a verified preview URL and PR URL.
