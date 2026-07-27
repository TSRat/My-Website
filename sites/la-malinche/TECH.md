# La Malinche technical notes

## Source and mirror

| Directory | Role |
| --- | --- |
| `sites/la-malinche/` | Authoritative direct-static source, documentation, manifest, and creator assets |
| `.site-build/la-malinche/` | Ignored staging output |
| `LA-MALINCHE/` | Version-controlled deploy mirror |

Public path:

```text
/My-Website/LA-MALINCHE/
```

## Entries

- `index.html`
- `assets/site.css`
- `assets/site.js`
- `assets/analytics.js`
- `assets/maps/*.webp`
- `assets/cover-*.webp`
- `site-manifest.json`
- `site.config.json`

## Build

```bash
npm run dev:malinche
npm run build:malinche
```

The shared direct-static builder copies deployable source into `.site-build/la-malinche/`, verifies `index.html`, and replaces `LA-MALINCHE/`. Maintenance Markdown and `site.config.json` are excluded from the mirror.

## Progressive enhancement

- All chapters and primary content exist in HTML.
- JavaScript adds scrollspy, lens selection, reveal classes, map switching, and the local reflection response.
- The final reflection is not persisted.
- The analytics adapter is a no-op with no network request.

## Assets

The creator cover and maps are copied, resized, encoded as WebP, and assigned ASCII lowercase filenames for case-safe GitHub Pages URLs. The original PNG and PSD files remain in the creator’s `Women Story/Malinche` source folder and are not modified.

## Validation

```bash
npm run build:malinche
node --test tests/malinche-readiness.test.mjs
npm run validate:sites
npm run build:pages
npm run validate:pages
```

There is no independent repository `typecheck` script.
