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
- `assets/archive/*.webp`
- `assets/creator/*.{webp,svg}`
- `assets/malinche-cutout.png`
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
- JavaScript adds scrollspy, lens selection, subtle reveal transforms, map switching, and the local reflection response.
- The final reflection is not persisted.
- The analytics adapter is a no-op with no network request.

## Assets

- Own Map files are copied, resized, encoded as WebP, and assigned lowercase
  filenames for case-safe GitHub Pages URLs. Originals in
  `Women Story/Malinche` remain unmodified.
- The hero PNG is a background-removed derivative of the supplied monochrome
  illustration.
- Eight large public-domain / CC0 archive images are stored locally as WebP to avoid
  fragile hotlinks. Visible captions and `CONTENT.md` retain source provenance.
- Thirteen selected project-library visuals are stored under `assets/creator/`
  as optimized WebP / SVG. Later depictions, film stills, and digital
  reconstructions are distinguished in captions; their authorization status is
  recorded as needing confirmation.
- The hero cut-out uses its intrinsic `1065 / 1476` ratio with `object-fit:
  contain`; browser QA checks the rendered ratio against the natural ratio.
- Desktop typography QA includes a `1782 × 864` viewport matching the creator
  screenshot, plus `1440 × 900`, `1024 × 768`, and `390 × 844`.
- Automated layout smoke counts all 41 scenes, checks image load state and
  document overflow, and flags display / copy collisions and one- or
  two-character display-title endings.
- The two legacy cover WebPs remain in the source archive but are not referenced
  by HTML, CSS, configuration, or the Living Atlas.
- The two Malinche Bilibili videos are embedded with the official player; neither
  iframe autoplays.

## Validation

```bash
npm run build:malinche
node --test tests/malinche-readiness.test.mjs
npm run validate:sites
npm run build:pages
npm run validate:pages
```

There is no independent repository `typecheck` script.
