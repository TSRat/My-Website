---
name: build-information-site-to-pr
description: "Build or substantially revise a production-quality information website whose primary responsibility is to help visitors find, understand, compare, and organize knowledge. Use for editorial sites, news, blogs, archives, museums, courses, documentation, research, history, biography, literature, cultural topics, knowledge bases, and creator-directed screenshot correction passes after an Antigravity direction or approved information structure already exists. Require approval of a complete zero-knowledge screen outline before initial production writes, then complete the six-stage website workflow, Figma, readable implementation, preview, and pull request; use the bounded correction loop for later local feedback."
---

# Build Information Site to PR

## Mission

Build a website whose unacceptable failure is:

> The visitor leaves without finding the answer or constructing a correct
> understanding of the subject.

Visual language may be poetic, historical, regional, cultural, or highly
distinctive. It must not place editorial drama before the information needed to
understand it.

Read all three references completely:

- [references/beginner-screen-outline-gate.md](references/beginner-screen-outline-gate.md)
- [references/typography-layout-gate.md](references/typography-layout-gate.md)
- [references/beginner-content-writing-gate.md](references/beginner-content-writing-gate.md)

Never modify `main` directly. Never merge automatically.

## Select this responsibility

Use this skill when the visitor primarily comes to:

- read, search, learn, compare, browse, or research;
- understand a person, place, event, work, idea, dataset, or controversy;
- navigate an archive, museum, course, documentation set, or knowledge base.

For hybrids:

- Information + Creative: keep understanding as the gate; import the creative
  skill's identity, imagery, rhythm, motion, and signature-moment grammar.
- Information + Service: keep explanation and findability as the gate; import
  the service skill's task, state, safety, and recovery rules for search,
  account, purchase, booking, or submission flows.

If feeling or task completion is the unacceptable failure, use that skill as
primary. Do not run three complete workflows in parallel.

## Resolve inputs read-only

Read repository rules, registry, content sources, citations, data, existing
design tokens, Figma, routes, localization, analytics, deployment, and related
sites.

Resolve:

- subject, scope, audience, learning or lookup goal;
- Antigravity concept and complete visual system;
- content source, authorship, evidence, uncertainty, and rights;
- routes, navigation, search, filters, media, data, and related-site links;
- languages, clients, accessibility, and performance;
- source repository and preview/deployment mechanism.

If Antigravity output or essential content sources cannot be read, report
`STATUS: BLOCKED`. Do not invent facts, sources, or a generic visual system.

## Beginner Screen Outline Approval Gate

Before creating a branch, Figma production file, asset, or repository content,
follow the complete beginner-screen reference.

Present every route, meaningful screen, scroll scene, modal, information state,
responsive variation, and language variation from the perspective of a visitor
with no prior subject knowledge.

Require:

- what, where, when, who, relationship, and conclusion in learnable order;
- a single primary learning or lookup job per screen;
- a concrete public-facing entry question before specialist vocabulary or
  abstract interpretation;
- first-use definitions for unfamiliar terms and names;
- complete intermediate steps between source facts and conclusions, including
  the origin of important numbers and the actual result of each comparison;
- fact, interpretation, dispute, and source treatment;
- no repeated claim-by-claim disclaimer, "what this cannot prove," or
  "not a direct fact" interruption in ordinary reader-facing copy;
- when evidence limits genuinely matter, at most one consolidated
  "Evidence and boundaries" note after the main explanation; keep it brief
  unless the dispute or missing evidence is itself important content;
- at most three major explanatory parts for a short item by default;
- plain sentences that identify who did what, when, where, and why;
- descriptive, directly clickable source links instead of raw URLs or generic
  "source" labels;
- direct-entry orientation;
- live reading-size floors;
- correct use of cards, lists, tables, maps, timelines, charts, or diagrams;
- images, captions, cards, and interactions that each perform a named
  explanatory job rather than supplying atmosphere or labels alone;
- comprehension audits after 30 seconds, 3 minutes, and 15 minutes;
- content, asset, localization, and data dependencies.

Record:

```text
CODEX_CONTEXT_GATE: PASS
CODEX_PLAIN_LANGUAGE_GATE: PASS
CODEX_PUBLIC_UNDERSTANDING_GATE: PASS
STATUS: WAITING_FOR_OUTLINE_APPROVAL
```

Do not create a branch or write repository files while waiting. Earlier approval
of the Antigravity direction is not approval of the screen outline.

After explicit approval, make the outline the structural source of truth.
Material changes to routes, learning order, screen purpose, subject explanation,
or evidence require renewed approval.

## Creator correction loop

Do not restart the full outline gate for a local, creator-directed correction
that preserves routes, learning order, page purpose, and the approved argument.
Treat screenshot feedback as a bounded implementation pass.

Before editing:

1. map each comment to the exact rendered element, source node, viewport, and
   responsive rule;
2. inventory repeated reading chrome separately: sticky header counter,
   per-page or per-folio counter, chapter rail, section label, bottom pager, and
   series identifier;
3. restate ambiguous spatial instructions using container + corner +
   persistence + label + granularity. "Top right" may mean the viewport header
   or every page's top-right corner; ask one short question when the
   implementation would differ;
4. preserve every accepted choice not named in the correction. "Use chapters
   instead of screens" changes anchor granularity, not label language, title
   vocabulary, or unrelated navigation;
5. classify prose before moving it: page introduction or deck, body argument,
   pull quote, source note, caption, or marginalia.

For creator-provided folders, maintain an asset placement ledger: filename,
approved chapter/page, explanatory job, reuse restriction, alt/caption, source
or creator status, and shipped path. A request to use the folder is not complete
until every explicitly requested file is mapped or a real blocker is recorded.
Do not substitute, relocate, crop, remove, or reuse other imagery without
authorization. Treat hero art, archive-card covers, video posters, directly
displayed video media, maps, evidence images, portraits, and decorative motifs
as distinct roles unless the creator explicitly approves reuse. Write positive
captions that identify the work and why it appears. Avoid obvious lectures
about what an image is not; distinguish film still, illustration,
reconstruction, later artwork, or historical object only when it prevents a
plausible evidentiary misunderstanding.

Maintain a terminology ledger for names, transliterations, dates, places,
translations, and key terms. Apply it consistently to headings, body copy,
captions, maps, navigation, alt text, metadata, and committed mirrors. When the
story follows a historical person's limited viewpoint, also record the
approved narrative horizon. Do not reveal later geopolitical or cross-ocean
context before the intended turning point merely because the author or designer
already knows it.

Do not publish internal production narration as editorial copy. Notes about
changing the palette, introducing the next chapter, adding background,
replacing an image, counting screens, or explaining the layout belong in
design, technical, or handoff records unless the production process is itself
the subject.

For editorial layout corrections, remove accidental constraints before adding
new ones. Use the available grid, inspect the creator's screenshot viewport,
and check hierarchy, contrast, overlap, peer alignment, blank-space purpose,
reading measure, and one- or two-character headline lines. Do not manufacture a
wrap with an arbitrary `max-width`, manual `<br>`, or screenshot-only font
size.

Large empty space is acceptable only when it supports orientation, pacing, or
evidence. If an essential definition, event, causal step, or transition remains
tiny while most of the screen is unused, promote it in the hierarchy or give it
an independent screen. Do not bury the sentence that makes the next section
understandable in metadata-sized copy.

Inspect media geometry at four levels: intrinsic dimensions and alpha, wrapper
or stage geometry, the rendered media box, and the visible content after
`object-fit`, `object-position`, clipping, or masking. A matching outer frame
does not prove that maps, portraits, and covers have the right visible scale.

Before changing a shared selector, token, component, registry, or generator,
enumerate all consumers and inspect the requested target plus every affected
peer. A local portrait, logo, carousel, card, or figure correction must not
silently enlarge or reposition the others; prefer a target-specific rule when
only one item is defective.

Keep iterative corrections on the same open PR. After that PR is merged, create
a new branch and PR for the next correction. Modify the authoritative source,
run its rebuild command, synchronize any committed publish mirror, and bump
static cache keys when the delivery path requires it.

Explicit "publish directly" or "merge now" from the repository owner authorizes
merging the scoped PR; it is not automatic merge authority for later work. If
the owner also says not to run more checks or assigns extended QA to
Antigravity, stop discretionary QA loops. Still produce the deployable
source/mirror artifact, keep the commit scoped, and report skipped preview or
QA honestly. Never relabel unrun QA as passed.

Keep design and delivery records truthful during fast corrections. Update Figma
in the same pass or name the exact frame that the implementation temporarily
supersedes; never call stale Figma current. Update the relevant content,
design, technical, source, and handoff notes without rewriting historical
records. A merge only triggers publication. Call production live only after the
deployment workflow succeeds; when the owner explicitly declines waiting or
verification, report "deployment triggered, unverified" instead.

## Working Branch Gate

After outline approval:

1. run `git status --short --branch`, `git branch --show-current`, and
   `git log -15 --oneline --decorate`;
2. identify and record the default branch and exact base commit;
3. require a clean worktree or isolated fresh worktree;
4. preserve unrelated work; never silently stash, reset, discard, or overwrite;
5. create and verify a dedicated branch such as `codex/site-<slug>`;
6. confirm it is not a production or deployment branch.

Stop repository writes if branch or worktree ownership is uncertain.

## Execute the six stages

### 1. Product / UX

Define:

- audience, question, comprehension outcome, and lookup success;
- route and chapter map, search, filter, index, glossary, and related content;
- content model, reading path, direct-entry recovery, and progress/location;
- source, citation, update, correction, and uncertainty behavior.
- a three-part What / How / Why structure for short entries unless the content
  genuinely requires another form.

After the branch gate, save the approved outline to
`<site-doc-root>/<slug>/screen-outline.md` and create `product-spec.md`.

### 2. Visual exploration and production

Translate Antigravity into an explanatory visual system:

- typography and layout for sustained reading;
- subject-specific image, map, diagram, data, timeline, and motif grammar;
- semantic color, annotation, caption, source, and relationship rules;
- rhythm that supports orientation, depth, and continued exploration;
- creative distinction without hiding basic context.

Create `<site-doc-root>/<slug>/visual-direction.md` and
`typography-layout.md`.

### 3. Figma design system

Create editable foundations, components, and key screens for:

- desktop, tablet where material, and mobile;
- article, chapter, index, search, filter, glossary, media, citation, and
  information-container patterns as applicable;
- loading, empty, unavailable, error, expanded, and translated states;
- typography, spacing, grid, wrapping, and long/short content variants.

Record Figma URL and frames in
`<site-doc-root>/<slug>/design-handoff.md`.

### 4. Prototype and design QA

Use realistic content and real fonts. Verify every distinct template and
required viewport against both references.

Record:

```text
CODEX_CONTEXT_GATE: PASS | FAIL
CODEX_PLAIN_LANGUAGE_GATE: PASS | FAIL
CODEX_PUBLIC_UNDERSTANDING_GATE: PASS | FAIL
CODEX_LAYOUT_GATE: PASS | FAIL
CODEX_READING_SCALE_GATE: PASS | FAIL
CODEX_CARD_COMPOSITION_GATE: PASS | FAIL
```

Run direct-entry, headline-specificity, entity-introduction, terminology,
three-second, ten-second, one-minute, thumbnail, deletion, overflow, alignment,
Chinese orphan, 100% zoom, and 200% reflow checks. Also run the boundary-note,
three-part structure, sentence paraphrase, attribution, clickable-link,
object-and-process, container, numerical-origin, and learning-task checks from
the content-writing reference.

### 5. Engineering, preview, and PR

Choose the simplest maintainable architecture for the content and interaction.
Preserve repository URL and deployment conventions. Keep content and data
separate from presentation when it materially improves maintenance.

Run the smallest relevant build, tests, lint, content/source validation, and
real-browser smoke checks. Deploy and verify the exact review commit.

Create a Pull Request with:

- approved outline, Figma, and preview links;
- clearly named, directly clickable source links;
- typography, comprehension, and container QA evidence;
- Codex results and Antigravity extended QA status.

### 6. Data / Analytics

Define privacy-aware events such as:

- search_performed, filter_applied;
- article_or_chapter_opened;
- glossary_term_opened;
- citation_or_source_opened;
- related_content_opened;
- timeline, map, or diagram item opened.

Do not treat page views or dwell time alone as learning. Define useful outcome
signals and state what is intentionally not tracked.

## Completion gate

Require:

- [ ] approved zero-knowledge screen outline
- [ ] dedicated clean branch from a verified base
- [ ] documented sources, terms, uncertainty, and corrections
- [ ] short entries use no more than three major explanatory parts by default
- [ ] no repeated claim-level disclaimers; any needed evidence boundary appears
      once after the main explanation and is proportionate to the real issue
- [ ] every sentence is paraphrasable by a newcomer
- [ ] the opening names the object before meaning, dispute, or visual metaphor
- [ ] important numbers, comparisons, and results include the intermediate
      steps needed to understand how they were produced
- [ ] cards, images, captions, diagrams, and interactions perform a specific
      explanatory job
- [ ] names, terms, dates, places, translations, and narrative viewpoint are
      consistent across copy, media, metadata, and mirrors
- [ ] creator assets keep their approved roles and reuse restrictions
- [ ] no reader-facing copy exposes internal design or implementation notes
- [ ] essential definitions, events, causes, and transitions are not buried in
      metadata-sized text beside unexplained empty space
- [ ] shared component changes were checked against every affected peer
- [ ] media was checked at intrinsic, wrapper, rendered-box, and visible-content
      levels
- [ ] source links are direct, descriptively named anchors whose final targets
      were opened successfully; no bare URL is used as reader-facing copy
- [ ] Figma desktop/mobile system with realistic content
- [ ] clear direct-entry orientation and information architecture
- [ ] readable live typography and correct information containers
- [ ] `CODEX_CONTEXT_GATE: PASS`
- [ ] `CODEX_PLAIN_LANGUAGE_GATE: PASS`
- [ ] `CODEX_PUBLIC_UNDERSTANDING_GATE: PASS`
- [ ] `CODEX_LAYOUT_GATE: PASS`
- [ ] `CODEX_READING_SCALE_GATE: PASS`
- [ ] `CODEX_CARD_COMPOSITION_GATE: PASS`
- [ ] relevant build, tests, lint, source checks, and browser smoke
- [ ] privacy-aware analytics specification
- [ ] verified live preview
- [ ] Pull Request with Figma and preview links
- [ ] authoritative project registry updated

If a mandatory item fails, report `STATUS: BLOCKED` with the exact next action.
Never report completion without both a verified preview URL and PR URL.
