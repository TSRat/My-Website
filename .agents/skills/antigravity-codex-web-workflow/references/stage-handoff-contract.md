# Stage Handoff Contract

Use this document twice: first to plan the bounded Codex production pass, then to prepare the return package for Antigravity.

## Antigravity → Codex intake

Confirm the Stage 1 package identifies, as applicable:

- project, audience, purpose, and unacceptable failure;
- approved routes, screens, scenes, chapters, or task steps;
- content, copy, data, assets, rights, sources, and languages;
- visual system, typography, color, layout, imagery, motif, and signature moments;
- navigation, interactions, motion, audio, media, loading, fallback, and reduced-motion behavior;
- desktop, mobile, direct-entry, empty, error, and consequential states;
- existing Figma or other creative source of truth;
- elements that are fixed, flexible, unresolved, or explicitly delegated to Codex for engineering choice;
- validation expectations Antigravity will execute in Stage 3.

If a missing item would force Codex to invent creative intent or task/content structure, stop and return it to Stage 1. If it is a bounded engineering detail, record the assumption and proceed only when it cannot materially change the experience.

## Codex Stage 2 responsibilities

### Feasibility

- Inspect repository rules, source of truth, build/deploy path, existing tokens, dependencies, and supported clients.
- Map every approved requirement to a source node, component, route/state, asset, and responsive rule.
- Flag infeasible, unsafe, inaccessible, performance-heavy, ambiguous, or contradictory requirements.
- Offer implementation accommodations without silently changing approved intent.

### Production

- Work on a scoped branch or isolated worktree when repository changes are authorized.
- Preserve accepted choices and unrelated work.
- Modify the authoritative source and regenerate committed mirrors through the repository's existing build path.
- Implement real content and states rather than screenshot-only approximations.
- Keep external credentials, private data, and unlicensed assets out of the repository.
- Record deviations from the Antigravity package and their approval status.
- Commit only scoped files, push the review branch, create a draft MR/PR, and
  attach a preview of the exact review commit before requesting Stage 3.

### Preliminary checks

Run checks proportional to the changed surface, such as:

- relevant build, typecheck, lint, unit/content tests, and syntax validation;
- selected desktop/mobile rendered smoke checks;
- basic overflow, font, asset, focus, reduced-motion, and link checks;
- representative state checks for services;
- representative direct-entry and reading checks for information sites;
- source/mirror, collection, and renderer parity contracts when applicable;
- cache-resistant confirmation that the preview contains the review commit.

These checks find obvious implementation defects. They do not replace Antigravity's complete Stage 3 matrix.

## Codex → Antigravity return package

Provide:

- repository, branch, base commit, review commit, and changed paths;
- draft MR/PR URL, exact review commit, and preview URL;
- concise mapping from Antigravity requirements to implemented routes/screens/states;
- build/test/preliminary-check commands and actual results;
- screenshots or smoke evidence labeled with exact viewport/state;
- known gaps, deviations, assumptions, unsupported behavior, and unverified areas;
- assets and sources added, including rights or attribution status;
- exact routes, viewports, languages, states, interactions, content contracts, and external destinations Antigravity must validate;
- the three status lines from the parent workflow.

Do not use `PASS`, `complete`, `production ready`, `fully verified`, or equivalent language for the overall website unless Antigravity Stage 3 has actually returned that result.

Do not start Antigravity Stage 3 from uncommitted local files, an unpushed
branch, a missing MR/PR, or a preview that does not contain the stated review
commit. MR/PR creation is part of Codex Stage 2, not an optional post-handoff
step. In the default path, merge after Antigravity Stage 3 returns `PASS` and
the user authorizes it. If the user explicitly instructs Codex to merge,
publish, or skip Antigravity for the current scoped correction, Codex may use
the fast path from the parent workflow and report
`ANTIGRAVITY_PHASE_3: SKIPPED_BY_USER`.

## Antigravity corrections

Map every correction to its screenshot or evidence, viewport, route/state, rendered element, source node, and responsive rule. Preserve every accepted choice not named by the correction. Commit and push bounded corrections to the same open MR/PR, update the review commit and preview evidence, and return that MR/PR to Antigravity for another Stage 3 pass.

Return to Stage 1 when a correction changes the approved creative direction, content/learning order, primary task, identity, signature moment, or consequential behavior. Otherwise, treat it as a bounded Stage 2 implementation correction and hand it back for another Stage 3 validation pass.

When the user invokes the merge fast path, keep the same correction mapping and
minimum checks, merge only the current scoped MR/PR, list skipped validation,
and never convert `SKIPPED_BY_USER` into `PASS`.
