---
name: antigravity-codex-web-workflow
description: "Apply the Antigravity-Codex ownership model to website creation, redesign, implementation, correction, normalization, preview, pull-request, and publication tasks. Antigravity owns creative direction and the default complete-validation path; Codex owns feasibility, engineering, implementation, preliminary checks, commits, pushes, and MR/PR creation. Also support a user-authorized fast path that may merge a scoped low-risk correction without Antigravity Stage 3 while recording validation as skipped rather than passed."
---

# Antigravity × Codex Web Workflow

Apply this ownership contract before using any other website skill. Keep it active throughout the task.

## Default ownership

### Stage 1 — Antigravity creative ownership

Require an Antigravity creative package before Codex writes production files. The package must define the intended experience sufficiently to implement, including the relevant purpose, audience, content or task structure, screens/routes, visual direction, responsive behavior, media/motion behavior, and important states.

Allow Codex to inspect the repository read-only, identify feasibility constraints, and ask implementation questions. Do not let Codex originate, replace, or silently reinterpret the creative direction.

If the package is absent or materially incomplete, report:

```text
ANTIGRAVITY_PHASE_1: MISSING | CHANGES_REQUIRED
CODEX_PHASE_2: BLOCKED
STATUS: WAITING_FOR_ANTIGRAVITY_CREATIVE_PACKAGE
```

For an existing approved site, a bounded implementation bug may use the current
accepted interface plus the user's correction as its Stage 1 input. Do not
require a new Antigravity creative package when the fix preserves routes,
content or task order, identity, primary actions, consequential states, and the
approved experience. Return to Antigravity Stage 1 if any of those change.

### Stage 2 — Codex production ownership

After the Antigravity package is approved, let Codex:

- check technical feasibility and expose implementation risks;
- translate approved intent into tokens, components, data/content models, routes, states, and responsive rules;
- choose the simplest maintainable framework and implementation architecture consistent with the repository;
- create or revise the actual source, assets, committed mirrors, tests, and documentation within the authorized scope;
- commit the scoped changes, push the review branch, create a draft MR/PR, and attach a preview of the exact review commit;
- run bounded preliminary checks needed to catch obvious implementation defects;
- return precise questions when a requested effect cannot be implemented faithfully or safely.

Treat any change to the approved experience, information order, primary task, visual identity, signature moment, or consequential state as an Antigravity Stage 1 decision. Codex may recommend an engineering accommodation but must not approve it for itself.

### Stage 3 — Antigravity validation ownership

Antigravity Stage 3 may start only after Codex has committed and pushed the scoped implementation, created the draft MR/PR, and supplied a preview of the exact review commit. Antigravity must validate that MR/PR commit and preview, including comprehensive route, viewport, state, interaction, content, console/network, accessibility, and visual-regression coverage appropriate to the project.

Treat Codex browser smoke checks, screenshots, lint, builds, unit tests, link samples, and accessibility spot checks as preliminary evidence only. Never relabel them as complete QA, final design approval, production readiness, or Antigravity validation.

Codex may implement corrections returned by Antigravity, commit and push them to the same open MR/PR, and repeat preliminary checks. Antigravity then retests the updated review commit and owns the final pass/fail decision. In the default path, merge after Antigravity Stage 3 returns `PASS` and the user authorizes the merge, unless an applicable repository policy already grants that authority.

## User-authorized merge fast path

Treat an explicit instruction from the user such as "merge", "publish",
"merge now", "publish directly", or "skip Antigravity for this bug" as merge
authority for the current scoped MR/PR. It may override a pending Antigravity
Stage 3 result. Do not carry that authority to later work.

Before using the fast path:

- confirm the MR/PR contains only the authorized scope and the intended commit;
- run the minimum build, source/mirror, and targeted smoke checks proportionate
  to the changed surface;
- never waive required safety, security, privacy, authentication,
  authorization, payment, destructive-action, or data-integrity checks;
- record every skipped check and use `ANTIGRAVITY_PHASE_3: SKIPPED_BY_USER`;
- never describe skipped Antigravity validation as `PASS`, fully validated, or
  production ready.

A small bug is eligible when it is a localized implementation correction that
does not alter creative direction, information or task structure, permissions,
consequential behavior, or high-risk logic. If those boundaries are unclear,
keep the default Stage 3 path until the user explicitly chooses otherwise.

## Skill hierarchy during Stage 2

Choose one primary build skill by the site's unacceptable failure:

- `build-creative-site-to-pr`: identity, authorship, experience, or memorability may not fail;
- `build-information-site-to-pr`: finding or correctly understanding information may not fail;
- `build-service-site-to-pr`: completing a task safely and correctly may not fail.

Use other Codex skills only as Stage 2 modules:

- `frontend-design`: translate the approved direction into an implementable visual system and frontend;
- `ui-ux-pro-max`: query patterns, palettes, typography, interaction, or stack-specific guidance;
- `impeccable`: run an explicit bounded critique, hardening, or polish pass;
- `web-design-guidelines`: run a preliminary code-guideline review;
- Figma/Product Design tools: map or annotate implementation details when authorized, without replacing Antigravity's creative authority;
- framework skills such as React best practices: improve implementation quality;
- `normalize-web-portfolio`: coordinate Stage 2 work across a classified website collection without homogenizing identities.

Do not run multiple complete build workflows in parallel. Import only the bounded secondary responsibility checks required by a hybrid site.

## Source-of-truth order

Apply the following precedence:

1. the user's latest literal instruction;
2. the approved Antigravity creative package and later Antigravity correction evidence;
3. accepted repository design/content sources of truth that the package preserves;
4. the primary build skill's responsibility and safety constraints;
5. Codex specialist-skill recommendations.

Never let a style database, generic best practice, or Codex preference overwrite an approved Antigravity choice unless it creates a concrete feasibility, safety, accessibility, or correctness problem. Report the conflict and return it for decision.

## Required Stage 2 handoff

Read [references/stage-handoff-contract.md](references/stage-handoff-contract.md) before starting implementation and again before handoff.

End Codex work with truthful state labels:

```text
ANTIGRAVITY_PHASE_1: APPROVED
CODEX_PHASE_2: MR_READY_FOR_ANTIGRAVITY_VALIDATION | BLOCKED
ANTIGRAVITY_PHASE_3: PENDING | PASS | FAIL | SKIPPED_BY_USER
```

`CODEX_PHASE_2: MR_READY_FOR_ANTIGRAVITY_VALIDATION` means that the scoped implementation is committed and pushed, the draft MR/PR exists, its exact review commit has a preview, and the preliminary evidence is attached for Stage 3. It is not a claim that the website is fully validated, approved for merge, or ready to publish.
