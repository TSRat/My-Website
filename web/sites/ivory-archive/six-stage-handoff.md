# IVORY ARCHIVE six-stage migration

- Classification: `PRESERVE`
- Interaction tier: `B — Interactive`
- Public path: `/My-Website/IVORY-ARCHIVE/`
- Source of truth: `sites/ivory-archive/`, root `app/` adapters, `public/`, and `scripts/build-github-pages.mjs`
- Figma: [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- Delivery branch: `codex/remaining-sites-six-stage-migration`

## 1. Product / UX

The useful product is already clear: a dated five-item editorial briefing with
search, thematic filters, stable issue routes, sources, and image credits.
Migration preserves that reading model and adds one honest Data entry. It does
not turn the archive into a KPI dashboard or portfolio.

Success for this batch means:

- current and historical issues remain reachable;
- search and filters still operate without exposing raw queries;
- the dynamic and Pages renderers expose the same briefing data;
- readers can inspect what is and is not measured.

## 2. Visual exploration / creative production

The accepted rendered site remains the visual baseline. No new imagery was
generated because this is a preservation migration. The Data section extends
the existing ivory paper, burgundy rule, forest-green link, editorial serif,
grid, and restrained archive-label system.

Creative Production was intentionally not used: new visual assets would not
improve the migration and would create unnecessary visual-preservation risk.

## 3. Figma design system

The shared portfolio file contains:

- existing `Theme / Ivory Archive` variables;
- an editable `Ivory Archive / Desktop · Data state` frame;
- an editable `Ivory Archive / Mobile · Data state` frame;
- a reusable `Site / Ivory Archive / Data Entry` component;
- the six-stage coverage and review status.

Figma preserves site-specific theme values while reusing shared spacing,
breakpoint, accessibility, and Data-state semantics.

## 4. Interactive prototype + design QA

The production page is the prototype for this additive change. The review flow
is:

1. open the new `Data` navigation item;
2. confirm provider, signals, and privacy boundaries;
3. open the machine-readable manifest;
4. use search, filters, and an issue link with the no-provider adapter loaded.

Codex checks this representative flow at desktop and one narrow viewport.
Antigravity owns extended route, device, console/network, keyboard, and
section-level visual regression.

## 5. Production engineering + GitHub + preview

Implemented:

- one machine-readable site manifest shared by both renderers;
- one provider-neutral in-memory analytics contract with no network, cookies,
  storage, identity, or raw query text;
- one visible Data entry in both the React and Pages home renderers;
- semantic event attributes for search, filters, issue opens, and Data opens;
- Pages output for the new manifest, adapter, and Data stylesheet;
- renderer parity and content-contract tests.

The committed `IVORY-ARCHIVE/` snapshot remains untouched because it is not the
Pages source of truth.

## 6. Data / analytics

Current provider: none.

Current external collection: none.

Provider-neutral events:

- `page_viewed`
- `search_performed`
- `filter_applied`
- `briefing_opened`
- `data_entry_opened`

The search event records only a query-length bucket. Provider activation
requires a documented source, session definition, retention period, privacy
review, and purpose. No KPI target is defined without real data.

## Review status

- Draft PR: [#15](https://github.com/TSRat/My-Website/pull/15).
- Sites Preview: <https://tsrat-ivory-migration-preview.tsrat.chatgpt.site>.
- Preview access: owner-only; deployment succeeded, but public link access needs
  separate creator approval.
- Codex basic gate: passed locally. The deployed URL reaches the Sites sign-in
  gate, so the page behind that gate is not claimed as browser-verified.
- Antigravity QA: pending.
- Intentional visible difference: the additive Data navigation item and Data
  section only.
- Remaining risk: the two renderers still use separate view code, so the parity
  test protects content and routes rather than pixel identity.
