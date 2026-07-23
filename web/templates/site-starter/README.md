# TSRat website capability starter

This directory is the copyable starting point for future sites and scoped
migration batches. It standardizes contracts and delivery, not visual identity.

## Copy only the capabilities a site needs

| Tier | Start with |
| --- | --- |
| A — editorial/static | Manifest, stable content IDs and states, Data entry empty state, accessibility and screenshot checklist |
| B — interactive | Tier A plus the analytics adapter, search/filter event hooks, empty/error states and interaction tests |
| C — product/data-backed | Tier B plus an approved provider, source ownership, metric denominators, privacy review and dashboard ownership |

Files:

- `site-manifest.example.js`: source, route, tier, Figma, preview and provider record.
- `content-registry.example.js`: stable IDs, bilingual fields and publication states.
- `analytics-adapter.js`: provider-neutral, no-storage event envelope.
- `data-entry.example.html`: honest visible entry before a provider or dataset exists.
- `migration-checklist.md`: six-stage adoption and review gates.

## Adoption rules

1. Copy the starter into the target site's real maintained source directory.
2. Rename examples and replace every placeholder. Never publish `TODO` values.
3. Preserve the site's existing palette, typography, imagery, layout and motion.
4. Keep analytics provider status `none` until the creator explicitly approves a provider.
5. Do not record raw search text, direct identifiers or private data.
6. Keep the Data entry visible even when it contains only a transparent empty state.
7. Verify the exact review commit at desktop, tablet and mobile sizes.
8. Record Figma, Preview and PR URLs in the authoritative project table and handoff.

The reference implementation is The Living Atlas. Its editorial styling is not
part of this starter.
