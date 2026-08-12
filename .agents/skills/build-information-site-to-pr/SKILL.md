---
name: build-information-site-to-pr
description: "Implement or substantially revise an information website during Codex Stage 2 after Antigravity has supplied an approved creative and zero-knowledge information package. Use for editorial sites, news, blogs, archives, museums, courses, documentation, research, history, biography, literature, cultural topics, knowledge bases, and bounded corrections returned by Antigravity. Codex adds feasibility, builds the actual framework and readable implementation, runs preliminary checks, commits and pushes the work, and creates a preview-backed draft MR/PR before Antigravity Stage 3 complete validation; do not originate Stage 1 information/visual direction or claim final QA."
---

# Build Information Site to PR

## Mission

Build a website whose unacceptable failure is:

> The visitor leaves without finding the answer or constructing a correct
> understanding of the subject.

Visual language may be poetic, historical, regional, cultural, or highly
distinctive. It must not place editorial drama before the information needed to
understand it.

## Mandatory three-stage ownership

Read and obey `antigravity-codex-web-workflow`. This skill executes only Codex Stage 2.

- Require the approved Antigravity creative and zero-knowledge information package before production writes.
- Add feasibility, implementation structure, production code, and preliminary checks without changing the approved learning order or visual direction.
- Return the implementation to Antigravity for Stage 3 complete validation.
- Never call Codex comprehension samples, browser smoke, builds, or link checks complete QA.

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

## Antigravity Information Package Intake Gate

Before creating a branch, asset, or repository content, use the complete
beginner-screen reference to verify the approved Antigravity package.

Confirm that it covers every route, meaningful screen, scroll scene, modal,
information state, responsive variation, and language variation from the
perspective of a visitor with no prior subject knowledge.

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
- title and deck text do not discharge the first body introduction: the first
  meaningful body mention still gives the complete unfamiliar name and role
  before a pronoun or shortened label;
- live reading-size floors;
- correct use of cards, lists, tables, maps, timelines, charts, or diagrams;
- images, captions, cards, and interactions that each perform a named
  explanatory job rather than supplying atmosphere or labels alone;
- comprehension audits after 30 seconds, 3 minutes, and 15 minutes;
- content, asset, localization, and data dependencies;
- for repeated collections, the total record count, section-role contract,
  source-link placement contract, and every public renderer or committed
  mirror that must remain equivalent.

Record:

```text
ANTIGRAVITY_PHASE_1: MISSING | CHANGES_REQUIRED
CODEX_PHASE_2: BLOCKED
STATUS: WAITING_FOR_ANTIGRAVITY_CREATIVE_PACKAGE
```

Do not create a branch or write repository files while waiting. Report missing,
contradictory, or infeasible content and structure to Antigravity; do not author
a replacement outline or visual direction.

Make the approved Antigravity outline the structural source of truth.
Material changes to routes, learning order, screen purpose, subject explanation,
or evidence must return to Antigravity Stage 1.

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
approved chapter/page, explanatory job, alt/caption, source or creator status,
and shipped path. A request to use the folder is not complete until every
explicitly requested file is mapped or a real blocker is recorded. Do not
substitute, relocate, crop, or remove other imagery without authorization.
Write positive captions that identify the work and why it appears. Avoid
obvious lectures about what an image is not; distinguish film still,
illustration, reconstruction, later artwork, or historical object only when it
prevents a plausible evidentiary misunderstanding.

For editorial layout corrections, remove accidental constraints before adding
new ones. Use the available grid, inspect the creator's screenshot viewport,
and check hierarchy, contrast, overlap, peer alignment, blank-space purpose,
reading measure, and one- or two-character headline lines. Do not manufacture a
wrap with an arbitrary `max-width`, manual `<br>`, or screenshot-only font
size.

Keep iterative corrections on the same open PR. After that PR is merged, create
a new branch and PR for the next correction. Modify the authoritative source,
run its rebuild command, synchronize any committed publish mirror, and bump
static cache keys when the delivery path requires it.

When feedback applies to an archive, issue, news set, course, glossary, or
other repeated collection, repair the complete collection rather than the
named examples. Inventory all entries, define machine-checkable section,
punctuation, source-link, and entity-introduction contracts, and compare every
public renderer or generated mirror against the authoritative content.

Explicit "publish directly", "merge now", or equivalent instruction from the
repository owner authorizes merging the current scoped PR even when
Antigravity Stage 3 is pending. Run the proportional minimum Codex checks,
produce the deployable source/mirror artifact, keep the commit scoped, report
skipped checks honestly, and use `ANTIGRAVITY_PHASE_3: SKIPPED_BY_USER`. Never
relabel skipped Antigravity validation as passed or reuse the authority later.

Keep design and delivery records truthful during fast corrections. Update Figma
in the same pass or name the exact frame that the implementation temporarily
supersedes; never call stale Figma current. Update the relevant content,
design, technical, source, and handoff notes without rewriting historical
records. A merge only triggers publication. Call production live only after the
deployment workflow succeeds; when the owner explicitly declines waiting or
verification, report "deployment triggered, unverified" instead.
Use a harmless cache-busting query or equivalent hard reload when the host may
serve stale HTML or CSS. Inspect the final DOM and computed styles; do not
accept deployment status or a cached screenshot as proof of the current
commit.

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

### 1. Feasibility and implementation interpretation

Translate the approved Antigravity package into an implementable contract:

- audience, question, comprehension outcome, and lookup success;
- route and chapter map, search, filter, index, glossary, and related content;
- content model, reading path, direct-entry recovery, and progress/location;
- source, citation, update, correction, and uncertainty behavior.
- the fewest clear section roles for short entries: usually What / How / Why,
  or an approved Background / Event / Details / Analysis contract when a
  recurring briefing needs separate orientation, headline result, supporting
  evidence, and derived meaning.

After the branch gate, save the approved Antigravity outline to
`<site-doc-root>/<slug>/screen-outline.md` and create `product-spec.md` as an
implementation record. Do not use either file to redesign the learning order.

### 2. Visual exploration and production

Translate Antigravity into an explanatory visual system:

- typography and layout for sustained reading;
- subject-specific image, map, diagram, data, timeline, and motif grammar;
- semantic color, annotation, caption, source, and relationship rules;
- rhythm that supports orientation, depth, and continued exploration;
- creative distinction without hiding basic context.

Create `<site-doc-root>/<slug>/visual-direction.md` and
`typography-layout.md`.

### 3. Creative-source implementation mapping

Use Antigravity's Figma or equivalent creative artifact as the source of truth.
When explicitly authorized, annotate or map it for implementation across:

- desktop, tablet where material, and mobile;
- article, chapter, index, search, filter, glossary, media, citation, and
  information-container patterns as applicable;
- loading, empty, unavailable, error, expanded, and translated states;
- typography, spacing, grid, wrapping, and long/short content variants.

Record the authoritative creative URL, frames, and implementation mapping in
`<site-doc-root>/<slug>/design-handoff.md`. Do not invent a substitute creative
source when Antigravity has not supplied one.

### 4. Prototype and preliminary Codex checks

Use realistic content and real fonts. Sample representative templates and
required viewports against both references to catch obvious implementation
defects; Antigravity Stage 3 owns complete coverage.

Record:

```text
CODEX_PRELIM_CONTEXT_GATE: PASS | FAIL
CODEX_PRELIM_PLAIN_LANGUAGE_GATE: PASS | FAIL
CODEX_PRELIM_PUBLIC_UNDERSTANDING_GATE: PASS | FAIL
CODEX_PRELIM_LAYOUT_GATE: PASS | FAIL
CODEX_PRELIM_READING_SCALE_GATE: PASS | FAIL
CODEX_PRELIM_CARD_COMPOSITION_GATE: PASS | FAIL
```

Run direct-entry, headline-specificity, entity-introduction, terminology,
three-second, ten-second, one-minute, thumbnail, deletion, overflow, alignment,
Chinese orphan, 100% zoom, and 200% reflow checks. Also run the boundary-note,
section-role, sentence paraphrase, attribution, clickable-link, object-and-
process, container, numerical-origin, collection-coverage, and learning-task
checks from the content-writing reference.

### 5. Engineering, preview, draft PR, and Antigravity handoff

Choose the simplest maintainable architecture for the content and interaction.
Preserve repository URL and deployment conventions. Keep content and data
separate from presentation when it materially improves maintenance.

Run the smallest relevant build, tests, lint, content/source validation, and
real-browser smoke checks. Deploy the exact review commit and run a bounded
technical smoke check; do not treat it as Antigravity Stage 3 validation.

For structured collections, test every record rather than only fixtures named
in the task. Assert required sections, complete first body introductions,
punctuated details, source count/placement, and equivalence between dynamic,
static, server, client, and generated-mirror renderers as applicable.

Create a draft Pull Request with:

- approved outline, Figma, and preview links;
- clearly named, directly clickable source links;
- typography, comprehension, and container QA evidence;
- Codex preliminary results and explicit `ANTIGRAVITY_PHASE_3: PENDING` status.

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

## Codex Stage 2 handoff gate

Require:

- [ ] approved Antigravity creative and zero-knowledge information package
- [ ] dedicated clean branch from a verified base
- [ ] documented sources, terms, uncertainty, and corrections
- [ ] short entries use no more than three major explanatory parts by default
- [ ] an approved four-part recurring briefing uses distinct Background /
      Event / Details / Analysis roles rather than duplicating content
- [ ] title, deck, metadata, and listing text are not used to excuse an
      incomplete first body introduction
- [ ] no repeated claim-level disclaimers; any needed evidence boundary appears
      once after the main explanation and is proportionate to the real issue
- [ ] every sentence is paraphrasable by a newcomer
- [ ] the opening names the object before meaning, dispute, or visual metaphor
- [ ] important numbers, comparisons, and results include the intermediate
      steps needed to understand how they were produced
- [ ] cards, images, captions, diagrams, and interactions perform a specific
      explanatory job
- [ ] source links are direct, descriptively named anchors whose final targets
      were opened successfully; no bare URL is used as reader-facing copy
- [ ] repeated collections pass full-record section, punctuation, source-link,
      entity-introduction, and renderer-parity checks
- [ ] Antigravity creative source mapped to desktop/mobile implementation with realistic content
- [ ] clear direct-entry orientation and information architecture
- [ ] readable live typography and correct information containers
- [ ] `CODEX_PRELIM_CONTEXT_GATE: PASS`
- [ ] `CODEX_PRELIM_PLAIN_LANGUAGE_GATE: PASS`
- [ ] `CODEX_PRELIM_PUBLIC_UNDERSTANDING_GATE: PASS`
- [ ] `CODEX_PRELIM_LAYOUT_GATE: PASS`
- [ ] `CODEX_PRELIM_READING_SCALE_GATE: PASS`
- [ ] `CODEX_PRELIM_CARD_COMPOSITION_GATE: PASS`
- [ ] relevant build, tests, lint, source checks, and browser smoke
- [ ] privacy-aware analytics specification
- [ ] verified live preview
- [ ] cache-resistant DOM/style smoke confirms the exact review commit
- [ ] draft Pull Request and preview prepared for Antigravity Stage 3
- [ ] the exact review commit is pushed and present in both the draft MR/PR and preview
- [ ] authoritative project registry updated

If a mandatory Stage 2 item fails, report `CODEX_PHASE_2: BLOCKED` with the exact
next action. Otherwise report:

```text
ANTIGRAVITY_PHASE_1: APPROVED
CODEX_PHASE_2: MR_READY_FOR_ANTIGRAVITY_VALIDATION
ANTIGRAVITY_PHASE_3: PENDING | PASS | FAIL | SKIPPED_BY_USER
```

Never report the website fully validated, production ready, or complete until
Antigravity has performed Stage 3 and returned its result.
Keep Antigravity corrections on the same open MR/PR and normally request a new
Stage 3 pass for the updated review commit. Merge immediately when the user
explicitly authorizes the current scoped MR/PR; record skipped Stage 3 honestly.
