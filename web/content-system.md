# TSRat Website Content System

- Version: 2
- Reference implementation: `THE-LIVING-ATLAS/content-registry.js`, `THE-LIVING-ATLAS/web-core.js`
- Figma: [TSRat Content System · v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=18-2)
- Applies to: The Living Atlas now; the other five sites and future sites when they enter a scoped migration batch
- Reusable starter: `web/templates/site-starter/`

## Purpose

This system separates shared content and interaction rules from site-specific visual identity.

Share:

- publication-state semantics
- bilingual field shape
- content IDs
- link validation
- published-site filtering
- update sorting
- searchable-index generation
- accessible menu and search behavior
- tests and handoff rules

Keep site-specific:

- color, typography, imagery, texture, and motion character
- historical or narrative framing
- page composition and reading rhythm
- project-specific interaction

## Living Atlas information architecture

| Surface | Meaning | Inclusion rule |
| --- | --- | --- |
| Worlds | Four deliberately open-ended portals: Knowledge, Story, Media, and Interaction | Preserve their ambiguity; do not add explanatory copy, one-to-one mappings, or present them as portfolio categories |
| Knowledge | The internal classification of the knowledge base | Show categories before counts; show counts only when backed by a real collection |
| Sites | Published independent websites | `status: "published"` and a valid URL are both required |
| Now | Current areas of focus | Rendered from registry focus records |
| Latest | Recent meaningful releases or changes | Sorted from dated update records |
| Data | Visible measurement commitment and provider status | Always has an entry; never displays invented values |
| Index | Generated navigable index | Excludes drafts, placeholders, and links without destinations; the visible section does not need explanatory copy |

`Archive` is no longer a primary navigation destination. The old `#archive` hash remains as a compatibility anchor pointing to the Index section.

## Registry contract

Every content record needs:

```js
{
  id: "stable-machine-id",
  title: { en: "English label", zh: "中文名称" },
  status: "draft | planned | published | archived",
  href: null,
  updatedAt: "YYYY-MM-DD"
}
```

Rules:

- `id` is stable across title, route, and visual changes.
- `published` content must have a real `href`.
- `planned` and `draft` content must not render as clickable links.
- `archived` means retained but no longer primary; it is not the same as deleted.
- Unknown counts are omitted or labelled as mapping in progress; never invent a number.
- Dates use ISO `YYYY-MM-DD` in data and are localized only at render time.
- Bilingual pages consume the same record; do not maintain two independent site lists.

## Reference rendering pipeline

```text
content-registry.js
        │
        ├── Worlds
        ├── Knowledge
        ├── Now
        ├── Published Sites
        ├── Latest
        └── Index + Search
                │
                ▼
           web-core.js
                │
                ▼
       site-specific HTML + CSS
```

The reference uses small ES modules and semantic DOM creation. It does not require React, a CMS, or a database.

## Shared-core adoption

Adopt by capability, not by visual template.

| Site type | Recommended adoption |
| --- | --- |
| Simple static editorial site | Registry IDs and states, link validation, focus/reduced-motion helpers |
| Interactive static site | Above plus shared dialog, search, filter, and disclosure primitives |
| React or TypeScript application | Reuse the registry contract and pure sorting/index functions; wrap UI behavior in native components |
| Product or data-backed site | Keep the same IDs and state vocabulary while replacing the in-memory registry with an API or database adapter |

For the five existing sites:

- IVORY ARCHIVE: reuse IDs, update records, publication states, and validation; keep its current React/content generator.
- Enheduanna: adopt only after a repeatable source-to-mirror build is restored.
- Hildegard: adopt registry metadata and shared validation; preserve Viriditas Codex.
- Hypatia: adopt registry metadata, link states, and browser smoke tests without replacing its visual system.
- Melromarc Sisters: defer runtime adoption until maintainable upstream source is confirmed.

## Extension points

Future implementations may replace data sources without changing page semantics:

```text
ContentProvider  -> static module | Markdown | CMS | API
SearchProvider   -> local index   | generated index | hosted search
AnalyticsAdapter -> no-op default | privacy-approved provider
```

Living Atlas now ships a provider-neutral no-op adapter and a visible Data empty
state. No data is stored or transmitted until the creator approves and connects
a provider. The full contract and candidate metric definitions live in
[`analytics-standard.md`](./analytics-standard.md).

## Verification contract

Every adopting site should test:

- duplicate IDs and duplicate publication numbers
- published records without URLs
- fake `href="#"` links
- bilingual field parity
- link-state rendering
- chronological update sorting
- keyboard access and focus return
- mobile menu open/close
- no horizontal overflow
- `prefers-reduced-motion`
- local asset and route validity

## Current deployment boundary

The reference implementation currently ships inside `THE-LIVING-ATLAS/`, so it can be verified without changing the protected Pages build map. Moving it to a repository-level `shared/web-core/` runtime requires a separately authorized addition to `scripts/build-github-pages.mjs`; that change must not alter existing slugs, URLs, or the GitHub Actions artifact architecture.

The copyable migration starter lives under `web/templates/site-starter/`. It is
source documentation and example code, not a deployed shared runtime, so each
site can adopt the contracts without changing the protected build map.
