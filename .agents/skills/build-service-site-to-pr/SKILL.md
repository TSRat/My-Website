---
name: build-service-site-to-pr
description: "Implement or substantially revise a service website during Codex Stage 2 after Antigravity has supplied an approved creative and task/state package. Use for commerce, booking, banking, healthcare appointments, government services, SaaS, AI tools, forms, uploads, dashboards, accounts, multi-step workflows, and bounded corrections returned by Antigravity. Codex adds feasibility, builds the actual framework and production implementation, runs preliminary checks, commits and pushes the work, and creates a preview-backed draft MR/PR before Antigravity Stage 3 complete validation; do not originate Stage 1 task/visual direction or claim final QA."
---

# Build Service Site to PR

## Mission

Build a website whose unacceptable failure is:

> The user cannot complete the intended task quickly, correctly, safely, and
> with a clear understanding of the result.

Brand expression may enrich the service, but never place promotion, atmosphere,
or novelty before the primary task entry.

## Mandatory three-stage ownership

Read and obey `antigravity-codex-web-workflow`. This skill executes only Codex Stage 2.

- Require the approved Antigravity creative and task/state package before production writes.
- Add feasibility, implementation structure, production code, and preliminary checks without changing approved task logic or consequences.
- Return the implementation to Antigravity for Stage 3 complete validation.
- Never call Codex happy-path tests, browser smoke, builds, or safety samples complete QA.

Read [references/service-task-flow-gate.md](references/service-task-flow-gate.md)
completely before verifying the Antigravity package or implementing it.

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

## Antigravity Task Package Intake Gate

Before branch creation or repository writes, verify that the approved
Antigravity package contains a complete task-and-state blueprint.

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
ANTIGRAVITY_PHASE_1: MISSING | CHANGES_REQUIRED
CODEX_PHASE_2: BLOCKED
STATUS: WAITING_FOR_ANTIGRAVITY_CREATIVE_PACKAGE
```

Do not create a branch or write repository files while waiting. A happy-path
wireframe is not a complete package. Report missing, contradictory, unsafe, or
infeasible states to Antigravity; do not author replacement task logic.

Make the approved blueprint the task source of truth. Material changes to
required inputs, decisions, consequences, permissions, or recovery must return
to Antigravity Stage 1.

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
approved screen/state, task or trust job, alt/caption, source status, and
shipped path. Do not silently substitute, relocate, crop, or remove another
asset. Prefer positive identification and useful task context over obvious
disclaimers.

For layout corrections, remove accidental constraints before adding new ones.
Use the available grid and inspect the feedback viewport and state. Check action
hierarchy, contrast, overlap, peer alignment, empty-space purpose, error
placement, and one- or two-character labels. Do not repair a single screenshot
with arbitrary width caps, manual breaks, or reduced essential text.

Keep iterative corrections on the same open PR. After merge, use a new branch
and PR. Modify the authoritative source, rebuild any committed publish mirror,
and bump static cache keys when required.

For repeated forms, records, results, dashboards, or state families, inventory
the complete set. Manually inspect representative paths, then run schema,
validation, link, and renderer/client-parity checks across every applicable
state. Do not infer complete task coverage from one happy-path example.

Explicit "publish directly", "merge now", or equivalent instruction from the
repository owner authorizes merging the current scoped PR even when
Antigravity Stage 3 is pending. It does not waive mandatory checks for
destructive, financial, medical, legal, privacy, authentication, authorization,
payment, or data-loss behavior. Run those checks plus the proportional minimum
Codex checks, report everything else skipped, and use
`ANTIGRAVITY_PHASE_3: SKIPPED_BY_USER`. Never relabel skipped Antigravity
validation as passed or reuse the authority later.

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

### 1. Feasibility and implementation interpretation

Translate the approved Antigravity task contract into an implementable model:

- who is acting, what they want, and what counts as success;
- minimum steps and decision points;
- the complete chain from inputs through calculation or processing to result;
  do not replace intermediate steps with "the system processes your request";
- prerequisites, constraints, policies, and consequences;
- concrete examples or previews that show what valid input and a successful
  result look like;
- progressive disclosure without hiding prices, risks, or required inputs;
- recovery, support, and post-completion follow-up.

Create `<site-doc-root>/<slug>/task-spec.md` and a state matrix as implementation
records. Do not use them to redesign task logic or consequences.

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

### 3. Creative-source implementation mapping

Use Antigravity's Figma or equivalent creative artifact as the source of truth.
When explicitly authorized, annotate or map it for implementation across:

- inputs, buttons, navigation, tables, filters, search, dialogs, and feedback;
- every relevant state in the approved matrix;
- desktop and mobile happy paths;
- representative validation, error, empty, loading, and recovery flows;
- keyboard/focus, reduced-motion, and localization behavior.

Record the authoritative creative URL, frames, and implementation mapping in
`<site-doc-root>/<slug>/design-handoff.md`. Do not invent a substitute creative
source when Antigravity has not supplied one.

### 4. Prototype and preliminary Codex checks

Prototype the complete primary task, not only the ideal screen. Sample the
approved state matrix to catch obvious implementation defects; Antigravity
Stage 3 owns complete validation.

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
CODEX_PRELIM_TASK_GATE: PASS | FAIL
CODEX_PRELIM_STATE_GATE: PASS | FAIL
CODEX_PRELIM_SAFETY_GATE: PASS | FAIL
CODEX_PRELIM_PUBLIC_TASK_UNDERSTANDING_GATE: PASS | FAIL
```

### 5. Engineering, preview, draft PR, and Antigravity handoff

Use an architecture appropriate to real APIs, authentication, data, and risk.
Do not simulate a production success when persistence or authorization is
required. Separate secrets and environments.

Add tests proportional to consequences. High-risk actions require stronger
validation, idempotency, authorization, audit, and rollback behavior.

Run relevant builds, tests, lint, accessibility checks, and real-browser task
smoke checks. Deploy the exact review commit and run a bounded technical smoke
check; do not treat it as Antigravity Stage 3 validation.

Create a draft Pull Request with:

- task blueprint, state matrix, and Figma;
- preview URL and tested accounts/data boundaries;
- success and failure validation evidence;
- privacy/security assumptions;
- Codex preliminary results and explicit `ANTIGRAVITY_PHASE_3: PENDING` status.

### 6. Data / Analytics

Define task-funnel events and guardrails:

- task_started, step_completed, validation_failed;
- task_completed, task_abandoned, task_recovered;
- support_opened, destructive_action_confirmed;
- latency, failure, and completion-quality measures.

Never log secrets, full form values, health/financial identifiers, payment
details, or direct personal contact data. Document consent, retention, access,
and deletion expectations.

## Codex Stage 2 handoff gate

Require:

- [ ] approved Antigravity creative and task/state package
- [ ] dedicated clean branch from a verified base
- [ ] Antigravity creative source mapped to the implemented task flow and state variants
- [ ] primary task is easy to find and complete
- [ ] a first-time user understands what the service does, what it requires,
      how the main result is produced, and what happens next
- [ ] direct-entry steps, results, errors, and recovery states introduce the
      required object and consequence without relying on titles or prior steps
- [ ] consequential numbers and decisions expose the necessary intermediate
      steps, examples, or calculation rules
- [ ] validation, feedback, recovery, and support are clear
- [ ] destructive or high-risk consequences are explicit and protected
- [ ] keyboard, mobile, localization, and slow/failure states work
- [ ] descriptive semantic links with no bare or inert reader-facing URLs
- [ ] every changed destination was clicked in the deployed preview and reached
      the intended page or documented expected external state
- [ ] repeated records and state families pass full schema, validation, and
      renderer/client-parity coverage rather than happy-path sampling
- [ ] `CODEX_PRELIM_TASK_GATE: PASS`
- [ ] `CODEX_PRELIM_STATE_GATE: PASS`
- [ ] `CODEX_PRELIM_SAFETY_GATE: PASS`
- [ ] `CODEX_PRELIM_PUBLIC_TASK_UNDERSTANDING_GATE: PASS`
- [ ] relevant build, tests, lint, accessibility, and browser checks
- [ ] privacy-aware analytics specification
- [ ] verified live preview
- [ ] cache-resistant live DOM/state smoke confirms the exact review commit
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
