---
name: build-service-site-to-pr
description: "Build or substantially revise a production-quality service website whose primary responsibility is to help users complete a concrete task accurately, safely, and confidently. Use for commerce, booking, banking, healthcare appointments, government services, SaaS, AI tools, forms, uploads, dashboards, accounts, multi-step workflows, and creator-directed screenshot correction passes after an Antigravity direction or approved task blueprint already exists. Require approval of a complete task-and-state blueprint before initial production writes, then complete the six-stage website workflow, Figma, implementation, preview, and pull request; use the bounded correction loop for later local feedback."
---

# Build Service Site to PR

## Mission

Build a website whose unacceptable failure is:

> The user cannot complete the intended task quickly, correctly, safely, and
> with a clear understanding of the result.

Brand expression may enrich the service, but never place promotion, atmosphere,
or novelty before the primary task entry.

Read [references/service-task-flow-gate.md](references/service-task-flow-gate.md)
completely before producing the approval blueprint or implementation.

Never modify `main` directly. Never merge automatically.

## Select this responsibility

Use this skill when the user primarily comes to:

- buy, book, apply, pay, upload, send, edit, calculate, or manage;
- use an online tool or account;
- complete a form or multi-step workflow;
- inspect a result, status, order, record, or dashboard.

For hybrids:

- Service + Creative: keep task controls conventional and stable; use the
  creative skill's identity and media grammar in safe surfaces.
- Service + Information: explain terms, risk, policy, and results with the
  information skill's comprehension rules.

If memorable experience or subject understanding is the unacceptable failure,
use that skill as primary and import only the service module needed for its
actions. Do not run three complete workflows in parallel.

## Resolve inputs read-only

Read repository rules, registry, existing service architecture, APIs, schemas,
authentication, permissions, analytics, deployment, Figma, support content,
privacy policy, and related products.

Resolve:

- user, primary task, success result, frequency, and urgency;
- Antigravity visual system and product direction;
- prerequisites, inputs, outputs, states, and business rules;
- authentication, authorization, data retention, privacy, and security;
- payment, health, legal, financial, destructive, or irreversible risk;
- languages, clients, accessibility needs, support, and recovery paths;
- source repository and preview/deployment mechanism.

If core rules, safety behavior, or Antigravity direction are unavailable, report
`STATUS: BLOCKED`. Do not invent production policy or fake backend behavior.

## Task-and-State Blueprint Approval Gate

Before branch creation, Figma production, or repository writes, present a
complete task-and-state blueprint in chat.

Cover:

- primary and secondary tasks;
- what the service is, who can use it, and what success means to a first-time
  user with no prior domain knowledge;
- entry, prerequisites, steps, decisions, confirmation, and result;
- first-use explanations for unfamiliar terms, calculated values, fees,
  durations, eligibility rules, and consequences;
- every input and validation rule;
- default, hover, focus, active, disabled, loading, empty, success, warning,
  error, partial, offline, expired, and permission-denied states as applicable;
- cancel, back, undo, retry, save, resume, and support behavior;
- destructive, financial, medical, legal, privacy, or account consequences;
- mobile, keyboard, screen-reader, multilingual, slow-network, and timeout flows;
- data ownership, retention, audit, and notification expectations;
- intended destinations and link labels for help, support, policies, terms,
  authentication, payment, receipts, downloads, and task results;
- secondary creative and information responsibilities;
- assumptions, dependencies, and unresolved policy decisions.

Report:

```text
STATUS: WAITING_FOR_TASK_BLUEPRINT_APPROVAL
```

Do not create a branch or write repository files while waiting. A happy-path
wireframe is not approval of all states. Revise the blueprint and request
approval again when task logic or consequences change.

After approval, make the blueprint the task source of truth. Material changes
to required inputs, decisions, consequences, permissions, or recovery require
renewed approval.

## Creator correction loop

Do not restart the complete task blueprint for a local, creator-directed
correction that preserves task logic, required inputs, consequences,
permissions, and recovery. Treat screenshot feedback as a bounded
implementation pass.

Before editing:

1. map each comment to the exact rendered control or content region, source
   node, viewport, state, and responsive rule;
2. inventory repeated chrome separately: sticky header, step or page counter,
   side navigation, section label, footer controls, and task pager;
3. restate ambiguous spatial instructions using container + corner +
   persistence + label + granularity; ask one short question when two
   interpretations would change the task interface;
4. preserve every accepted choice not named in the correction. Changing step
   granularity does not authorize renaming labels, moving task actions, or
   changing state semantics;
5. classify copy and controls before moving them: introduction, instruction,
   field help, validation, warning, result, quote/testimonial, caption, link, or
   state-changing action.

Do not use the page title, hero promise, previous step, or summary card as a
substitute for the first complete explanation inside a direct-entry step,
result, error, or recovery state. Name the service object, unfamiliar term,
calculation, actor, and consequence again where that state must stand alone.

For creator-provided folders, maintain an asset placement ledger with filename,
approved screen/state, task or trust job, reuse restriction, alt/caption, source
status, and shipped path. Do not silently substitute, relocate, crop, remove,
or reuse another asset. Treat hero art, service-card covers, video posters,
directly displayed video media, diagrams, evidence images, trust marks, and
decorative motifs as distinct roles unless the creator explicitly approves
reuse. Prefer positive identification and useful task context over obvious
disclaimers.

Do not publish internal production narration as service copy. Notes about
changing colors, adding a later section, replacing an image, counting screens,
or explaining the layout belong in design, technical, or handoff records.
Instructions shown to users must help them understand or complete the task.

For layout corrections, remove accidental constraints before adding new ones.
Use the available grid and inspect the feedback viewport and state. Check action
hierarchy, contrast, overlap, peer alignment, empty-space purpose, error
placement, and one- or two-character labels. Do not repair a single screenshot
with arbitrary width caps, manual breaks, or reduced essential text.

Before changing a shared selector, token, component, field schema, registry, or
generator, enumerate every consumer, route, and relevant state. Inspect the
named target plus all affected peers, including loading, error, empty,
permission-denied, and success states. A local logo, card, control, or media
correction must not silently resize peers or alter validation and action
semantics elsewhere; prefer a target-specific rule when the defect is local.

For media, inspect intrinsic dimensions and alpha, wrapper geometry, the
rendered media box, and the visible content after fitting, positioning,
clipping, or masking. A uniform component frame does not guarantee an
appropriate visible scale or trustworthy presentation.

Keep iterative corrections on the same open PR. After merge, use a new branch
and PR. Modify the authoritative source, rebuild any committed publish mirror,
and bump static cache keys when required.

For repeated forms, records, results, dashboards, or state families, inventory
the complete set. Manually inspect representative paths, then run schema,
validation, link, and renderer/client-parity checks across every applicable
state. Do not infer complete task coverage from one happy-path example.

Explicit "publish directly" or "merge now" from the repository owner authorizes
merging the scoped PR; it does not waive safety checks for destructive,
financial, medical, legal, privacy, authentication, authorization, or data-loss
behavior. If the owner says not to run additional visual checks or assigns
extended QA to Antigravity, stop discretionary visual QA loops, report what was
not run, and never call it passed. High-risk task validation remains mandatory.

Keep design and delivery records truthful during fast corrections. Update Figma
in the same pass or name the exact frame that the implementation temporarily
supersedes; never call stale Figma current. Update the relevant task, design,
technical, policy, and handoff notes without rewriting historical records.
A merge only triggers publication. Call production live only after the
deployment workflow succeeds; when the owner explicitly declines waiting or
verification, report "deployment triggered, unverified" instead.
When the host may cache HTML, CSS, schemas, or client bundles, use a harmless
cache key or equivalent hard reload and inspect the live DOM, computed state,
and requested result. A successful deployment record does not prove that the
current task interface reached the user.

## Working Branch Gate

After blueprint approval:

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

Define the task contract:

- who is acting, what they want, and what counts as success;
- minimum steps and decision points;
- the complete chain from inputs through calculation or processing to result;
  do not replace intermediate steps with "the system processes your request";
- prerequisites, constraints, policies, and consequences;
- concrete examples or previews that show what valid input and a successful
  result look like;
- progressive disclosure without hiding prices, risks, or required inputs;
- recovery, support, and post-completion follow-up.

Create `<site-doc-root>/<slug>/task-spec.md` and a state matrix.

### 2. Visual exploration and production

Translate Antigravity into a trustworthy interface system:

- action hierarchy and control affordance;
- semantic color for status, risk, confirmation, and error;
- form, table, dashboard, empty-state, and feedback language;
- timelines, step views, comparisons, diagrams, cards, and illustrations only
  when they clarify order, choice, calculation, status, or consequence;
- brand illustration, voice, and motion in surfaces that do not obscure tasks;
- density, responsiveness, and touch behavior.

Create `<site-doc-root>/<slug>/visual-direction.md`.

### 3. Figma design system

Create editable Figma foundations, components, and variants for:

- inputs, buttons, navigation, tables, filters, search, dialogs, and feedback;
- every relevant state in the approved matrix;
- desktop and mobile happy paths;
- representative validation, error, empty, loading, and recovery flows;
- keyboard/focus, reduced-motion, and localization behavior.

Record the Figma URL and frames in
`<site-doc-root>/<slug>/design-handoff.md`.

### 4. Prototype and design QA

Prototype the complete primary task, not only the ideal screen.

Test:

- first-time and returning entry;
- valid, invalid, incomplete, duplicate, expired, and interrupted input;
- back, cancel, undo, retry, save, resume, and support;
- keyboard-only and screen-reader flow;
- mobile, zoom, slow network, and server failure;
- permission, privacy, destructive action, and confirmation behavior.
- whether a first-time user can explain the task, prerequisites, next step,
  calculation or decision, and final result without prior domain knowledge;
- whether important totals, prices, durations, scores, or status values show
  the inputs or rule that produced them when users need that relationship;
- whether guidance, examples, and interactive assistance teach everything the
  user must know before asking them to make a difficult decision.

Run link-integrity QA:

- use descriptive visible labels that explain the destination; do not expose
  bare URLs or use generic "link," "learn more," or "click here" labels when a
  specific name is available;
- use semantic anchors or framework link components for navigation and
  downloads, while reserving buttons for actions that change state;
- make links visually identifiable, keyboard reachable, and focus visible;
- in the deployed preview, actually click every changed help, support, policy,
  terms, authentication, payment, receipt, download, and result link;
- confirm each destination opens the intended page or documented expected
  authentication, payment-provider, app-handoff, or download state;
- fail QA for inert text, broken targets, unsafe redirects, misleading labels,
  unrelated homepages, or links that work only in local markup.

Record:

```text
CODEX_TASK_GATE: PASS | FAIL
CODEX_STATE_GATE: PASS | FAIL
CODEX_SAFETY_GATE: PASS | FAIL
CODEX_PUBLIC_TASK_UNDERSTANDING_GATE: PASS | FAIL
```

### 5. Engineering, preview, and PR

Use an architecture appropriate to real APIs, authentication, data, and risk.
Do not simulate a production success when persistence or authorization is
required. Separate secrets and environments.

Add tests proportional to consequences. High-risk actions require stronger
validation, idempotency, authorization, audit, and rollback behavior.

Run relevant builds, tests, lint, accessibility checks, and real-browser task
smoke checks. Deploy and verify the exact review commit.

Create a Pull Request with:

- task blueprint, state matrix, and Figma;
- preview URL and tested accounts/data boundaries;
- success and failure validation evidence;
- privacy/security assumptions;
- Codex results and Antigravity extended QA status.

### 6. Data / Analytics

Define task-funnel events and guardrails:

- task_started, step_completed, validation_failed;
- task_completed, task_abandoned, task_recovered;
- support_opened, destructive_action_confirmed;
- latency, failure, and completion-quality measures.

Never log secrets, full form values, health/financial identifiers, payment
details, or direct personal contact data. Document consent, retention, access,
and deletion expectations.

## Completion gate

Require:

- [ ] approved task-and-state blueprint
- [ ] dedicated clean branch from a verified base
- [ ] complete Figma task flow and state variants
- [ ] primary task is easy to find and complete
- [ ] a first-time user understands what the service does, what it requires,
      how the main result is produced, and what happens next
- [ ] direct-entry steps, results, errors, and recovery states introduce the
      required object and consequence without relying on titles or prior steps
- [ ] consequential numbers and decisions expose the necessary intermediate
      steps, examples, or calculation rules
- [ ] creator assets keep their approved roles and reuse restrictions
- [ ] no user-facing copy exposes internal design or implementation notes
- [ ] shared component changes were checked across every affected route and
      state
- [ ] media was checked at intrinsic, wrapper, rendered-box, and visible-content
      levels
- [ ] validation, feedback, recovery, and support are clear
- [ ] destructive or high-risk consequences are explicit and protected
- [ ] keyboard, mobile, localization, and slow/failure states work
- [ ] descriptive semantic links with no bare or inert reader-facing URLs
- [ ] every changed destination was clicked in the deployed preview and reached
      the intended page or documented expected external state
- [ ] repeated records and state families pass full schema, validation, and
      renderer/client-parity coverage rather than happy-path sampling
- [ ] `CODEX_TASK_GATE: PASS`
- [ ] `CODEX_STATE_GATE: PASS`
- [ ] `CODEX_SAFETY_GATE: PASS`
- [ ] `CODEX_PUBLIC_TASK_UNDERSTANDING_GATE: PASS`
- [ ] relevant build, tests, lint, accessibility, and browser checks
- [ ] privacy-aware analytics specification
- [ ] verified live preview
- [ ] cache-resistant live DOM/state smoke confirms the exact review commit
- [ ] Pull Request with Figma and preview links
- [ ] authoritative project registry updated

If a mandatory item fails, report `STATUS: BLOCKED` with the exact next action.
Never report completion without both a verified preview URL and PR URL.
