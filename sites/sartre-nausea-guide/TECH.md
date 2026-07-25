# Technical notes

## Source of truth

The maintainable source for this site is this directory:

`sites/sartre-nausea-guide/`

Do not edit generated portfolio output as the source. The original imported Sites source was identified from commit `70f676e`; the preserved public baseline is `https://sartre-nausea-guide.tsrat.chatgpt.site`.

## Stack

- React 19
- Next 16 compatibility APIs
- Next.js static export
- TypeScript
- Node test runner
- CSS without a component framework

## Commands

```bash
npm ci
npm run build
npm test
npm run lint
```

`npm test` runs a production static export before the exported-HTML test.

## GitHub Pages subpath

The site uses `output: "export"` and `trailingSlash: true`. It accepts `SITE_BASE_PATH` at build time; `next.config.ts` applies it as the router base path and exposes the normalized value as `NEXT_PUBLIC_SITE_BASE_PATH` for public assets. `SITE_ASSET_PREFIX` separately controls generated `_next` asset URLs and defaults to the base path. Layout metadata and the chestnut-root image are generated with the base-path prefix.

Example:

```bash
SITE_BASE_PATH=/ SITE_ASSET_PREFIX=. npm run build
```

Without an override, the legacy-compatible source-project default is
`/My-Website/sartre-nausea-guide`. The portfolio integration builds with `/`
and `.` and commits the portable mirror at:

```text
SARTRE-NAUSEA-GUIDE/
```

The published repository path is `/My-Website/SARTRE-NAUSEA-GUIDE/`. Run
`npm run sync:philosophy-sites` from the repository root after source changes;
do not hand-edit the mirror.

## State and privacy

The only client persistence is `localStorage["nausea-guide-progress"]`, containing an integer from 0 to 6. It is reading progress, not an analytics identifier. No account, server database, cookie, or third-party analytics provider is required.

## Migration exclusions

The GitHub Pages source intentionally excludes the original Sites hosting
manifest, Cloudflare Worker/D1/Drizzle scaffolding, Sites-only Vite build
plugins, authentication helper, `.npmrc`, and generated caches. None of those
files participates in the page content, visual system, client interactions, or
static Next.js export.
