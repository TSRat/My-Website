# Melromarc Sisters technical notes

- Last audited: 2026-07-25
- Public path: `/My-Website/MELROMARC-SISTERS/`
- Maintained source: `sites/melromarc-sisters/`
- Pages mirror: `MELROMARC-SISTERS/`

## Source and rendering

The maintained project is a React 19 + TypeScript + Vite static application:

- `content.ts` owns the 13 story records, 18 gallery records, six filter labels
  (including “全部”), and five fate-map stages.
- `page.tsx` owns the navigation, search, filtering, random selection,
  local-only saved stories, reader dialog, fate map, gallery, and Data entry.
- `styles.css` is a readable reconstruction of the accepted Sites/Vinext
  baseline stylesheet.
- `data.css` contains the site-native Data appendix.
- `public/` owns favicon and image assets.

This is a maintainable reconstruction from the accepted deployed artifact, not
an export of the original ChatGPT Sites project. The original project could be
found in ChatGPT Work, but the Sites UI exposed no source export.

## Build

```bash
npm run dev:melromarc
npm run build:melromarc
```

`build:melromarc` invokes the unified `scripts/build-site.mjs` and reads
`sites/melromarc-sisters/site.config.json`:

1. Vite builds into ignored `.site-build/melromarc-sisters/`.
2. The builder verifies that a compiled asset entry exists.
3. It copies the result to `MELROMARC-SISTERS/`.
4. It does not delete unreferenced historical bundles in the mirror.

GitHub Pages continues to copy the committed uppercase mirror into `docs/`.
The workflow, public slug, and Actions artifact architecture are unchanged.

## Recovery baseline

`scripts/recover-melromarc-source.mjs` records the one-time recovery procedure
used on 2026-07-25. It extracts literal data from the former active
`page-Wf3IdOaW.js`, formats the former active CSS, and copies the accepted image
set. Its assertions require:

- 13 stories
- 18 gallery records
- 6 filter labels
- 5 growth stages

Do not run it for normal content changes: it would overwrite current readable
content from the historical baseline. The old active files and their hashes
remain protected by targeted tests. The current published capability contract
lives at `sites/melromarc-sisters/public/site-manifest.json`.

## State and privacy

Saved stories remain compatible with the existing functional storage contract:

```text
localStorage key: melromarc-saved-stories
value: JSON string array of story IDs
```

Malformed or non-array values fall back safely to an empty list. This storage
is not analytics. The visible Data section has `data-provider="none"` and makes
no network report, analytics cookie, or identity store.

## Assets and rollback material

- Authoritative assets: `sites/melromarc-sisters/public/`
- Current mirror assets: `MELROMARC-SISTERS/images/`,
  `MELROMARC-SISTERS/favicon.svg`, and the new files referenced by its
  `index.html`
- Historical rollback files: old Vinext/React hashed bundles still present in
  `MELROMARC-SISTERS/assets/`

Do not edit current hashed output by hand. Do not delete historical bundles
without creator confirmation.

## Verification

Minimum project checks:

```bash
npm run build:melromarc
node --test tests/melromarc-readiness.test.mjs
npm run build:pages
npm run validate:pages
npm run lint
git diff --check
```

Codex performs representative desktop/mobile smoke checks. Antigravity owns the
extended screenshot, visual-regression, full keyboard/focus, and interaction
matrix.

## Known limitations

- The reconstructed Vite entry is client-rendered; it does not reproduce the
  former Vinext RSC/SSR metadata. The visible route, content, assets, and
  interaction contract are retained.
- Dialog focus trapping and focus return should receive the planned
  Antigravity accessibility pass.
- `originalUrl` points at ChatGPT conversations whose long-term public
  availability cannot be guaranteed from this repository.
