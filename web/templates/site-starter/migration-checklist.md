# Six-stage migration checklist

## 1. Product / UX

- Confirm audience, primary task, routes and interaction tier.
- Record entry, reading/task, search/filter and failure paths.
- Classify the site as PRESERVE, REFACTOR or REBUILD.

## 2. Visual exploration

- Capture the production or base-revision baseline first.
- Separate shared foundations from site-specific identity.
- Use Creative Production only when an asset or visual system needs repair.

## 3. Figma

- Reuse the portfolio foundations and components.
- Add editable desktop/mobile frames and key states.
- Record the exact frame URL.

## 4. Prototype and QA

- Verify relevant hover, focus, open, loading, empty, error and reduced-motion states.
- Compare matching baseline/review captures and explain every visible difference.

## 5. Production and preview

- Keep public paths and the current Actions artifact architecture.
- Run build, test, lint, asset and browser checks.
- Commit and push a dedicated branch; provide an exact-commit Preview and PR.
- Never commit directly to or automatically merge `main`.

## 6. Data / analytics

- Show a Data entry even when its honest state is “provider none”.
- Define the decision, events, privacy boundary and missing sources.
- Do not invent metrics, targets or charts.
- Activate a provider only after explicit approval.
