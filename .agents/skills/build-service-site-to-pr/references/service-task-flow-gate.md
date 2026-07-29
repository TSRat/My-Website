# Service Task and State Gate

## Contents

1. Responsibility contract
2. Task blueprint
3. Entry and action hierarchy
4. Forms and input
5. State matrix and feedback
6. Error prevention and recovery
7. Safety and consequence
8. Trust, privacy, and data
9. Accessibility, mobile, and language
10. Visual identity in safe zones
11. Service QA
12. Blueprint template

## 1. Responsibility contract

Define:

- primary user;
- primary task;
- success result;
- expected time and frequency;
- prerequisites;
- cost, risk, and consequence;
- what failure is unacceptable.

Examples of unacceptable failure:

- a purchase is submitted twice;
- an appointment time is misunderstood;
- a form loses entered data;
- a destructive action cannot be reversed;
- a result looks final when processing failed;
- a user cannot tell whether payment or submission succeeded.

Do not treat conversion alone as success. Correctness, consent, confidence,
recovery, and post-task clarity are equal service outcomes.

## 2. Task blueprint

Map:

```text
entry
→ eligibility/prerequisite
→ input
→ decision
→ review
→ confirmation
→ processing
→ result
→ receipt/status/follow-up
```

For each step record:

- user goal and question;
- required and optional information;
- validation and business rule;
- system response;
- wait or asynchronous behavior;
- back, cancel, save, resume, retry, and support;
- data created, changed, sent, or deleted;
- risk and confirmation;
- success and failure destinations.

Include alternate paths rather than drawing only the happy path.

## 3. Entry and action hierarchy

The primary task entry must be visible before promotional narrative unless a
legal, safety, or eligibility step must precede it.

Define:

- one primary action per decision point;
- secondary and tertiary actions;
- destructive action separation;
- clear labels that describe outcomes;
- disabled-state reason;
- current step and remaining progress;
- exit and recovery.

Avoid generic labels such as "Continue" when the consequence can be named, for
example "Review booking," "Submit application," or "Delete account."

Do not make buttons look like ordinary text or decorative elements look
clickable.

## 4. Forms and input

For every field define:

- label;
- purpose;
- required/optional status;
- format and example;
- validation timing;
- error and correction;
- privacy sensitivity;
- autofill and input mode;
- persistence and deletion;
- language and locale behavior.

Require:

- persistent visible labels;
- instructions before the error occurs;
- inline error near the field plus summary when useful;
- preservation of valid input after errors;
- sensible defaults without hidden consent;
- paste, password manager, autofill, and keyboard support;
- correct date, time, number, currency, address, and name localization.

Do not use placeholder text as the only label. Do not reject valid names,
addresses, or formats merely because they differ from one locale.

## 5. State matrix and feedback

Cover as applicable:

- default;
- hover and focus;
- active and selected;
- disabled and read-only;
- loading and skeleton;
- empty;
- validation;
- warning;
- success;
- error;
- partial success;
- offline;
- stale;
- timed out or expired;
- permission denied;
- rate limited;
- queued or processing;
- canceled;
- refunded, reversed, or restored.

For every asynchronous action show:

- that the action was received;
- whether the user may leave;
- expected duration when known;
- how to check status;
- what happens on retry;
- whether duplicate submission is prevented.

Never leave a spinner without context or recovery.

## 6. Error prevention and recovery

Prefer preventing errors to explaining them later.

Use:

- constrained choices where appropriate;
- clear prerequisites;
- previews and review steps;
- conflict detection;
- duplicate prevention;
- autosave or explicit save status;
- undo for reversible actions;
- retry that does not duplicate side effects;
- support with relevant context.

Error messages must state:

- what happened;
- what was and was not completed;
- whether data is preserved;
- what the user can do next;
- how to get help when self-recovery is impossible.

Do not use "Something went wrong" as the complete message.

## 7. Safety and consequence

Classify actions:

| Level | Example | Required protection |
| --- | --- | --- |
| Low | Change sort order | Immediate and reversible |
| Medium | Submit form or publish item | Review, status, undo when possible |
| High | Payment, health, legal, account, permission | Explicit consequence, strong validation, receipt/audit |
| Destructive | Delete, revoke, erase, transfer | Separate styling, precise target, confirmation, recovery policy |

Never use dark patterns, preselected consent, disguised advertising, forced
urgency, or obstructive cancellation.

For high-risk actions verify:

- authorization;
- idempotency;
- confirmation target and consequence;
- secure transport and secret handling;
- audit/status record;
- rollback, refund, correction, or escalation;
- user receipt.

Do not implement policy, payment, medical, legal, or financial assumptions that
the owner has not confirmed.

## 8. Trust, privacy, and data

Explain:

- why data is requested;
- whether it is required;
- who receives it;
- how long it remains;
- how it can be corrected or deleted;
- what happens if permission is denied.

Collect the minimum necessary data. Do not expose secrets or personal data in:

- URLs;
- logs;
- analytics;
- screenshots;
- client bundles;
- error messages.

Separate demo, preview, test, and production environments. Label simulated data
and actions clearly.

## 9. Accessibility, mobile, and language

Require:

- semantic controls and native behavior where possible;
- complete keyboard order and visible focus;
- accessible names, descriptions, errors, and live status;
- 200% zoom and text reflow;
- touch targets and no gesture-only action;
- no timeout without warning and extension when appropriate;
- reduced motion;
- locale-correct formats;
- translation expansion and clear language switching.

On mobile:

- keep the primary action reachable but do not cover content;
- use appropriate input keyboards;
- preserve entered data through orientation and navigation;
- avoid desktop tables when a task-focused sequence is clearer;
- confirm sticky elements do not trap focus or hide errors.

## 10. Visual identity in safe zones

Place brand distinction in:

- color and type systems that preserve status clarity;
- illustration and empty states;
- tone of voice;
- icons with labels;
- microinteraction feedback;
- onboarding and confirmation;
- noncritical backgrounds and transitions.

Keep stable:

- standard controls;
- action hierarchy;
- form labels;
- validation;
- status;
- safety and consent;
- cancel, undo, and support.

Novelty must not change the meaning of familiar controls.

## 11. Service QA

### First-action test

Can a first-time user identify:

- what the service does;
- where to start;
- what information or cost is required;
- what result they will receive?

### Complete-task test

Run the task with realistic valid data and verify the result, receipt, status,
and next action.

### Failure matrix

Test invalid, incomplete, duplicate, expired, interrupted, offline, denied,
timed-out, and server-failed paths that apply.

### Recovery test

Verify back, cancel, save, resume, retry, undo, and support without lost or
duplicated work.

### Safety test

Verify destructive and high-risk target, consequence, authorization,
confirmation, idempotency, audit, and recovery.

### Inclusive-use test

Complete the core task with keyboard, screen reader expectations, 200% zoom,
mobile touch, long translation, and slow network.

Record:

```text
CODEX_TASK_GATE: PASS | FAIL
CODEX_STATE_GATE: PASS | FAIL
CODEX_SAFETY_GATE: PASS | FAIL
```

## 12. Blueprint template

```markdown
# <Service> Task-and-State Blueprint

## Responsibility profile
- Primary: Service
- Secondary: Creative / Information / none
- Unacceptable failure:

## Task contract
- User:
- Task:
- Success:
- Time/frequency:
- Prerequisites:
- Cost/risk/consequence:

## Task flow
| Step | Goal | Input | Rule | System response | Recovery | Data/consequence |
| --- | --- | --- | --- | --- | --- | --- |

## State matrix
| Surface/action | Loading | Empty | Validation | Success | Error | Offline/expired | Recovery |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Field inventory

## Safety, privacy, permission, and policy

## Desktop/mobile/language/accessibility

## Antigravity visual-system traceability

## Secondary responsibility gates

## Assumptions and approval record
```
