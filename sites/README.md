# Website maintenance packages

`sites/` is the single maintenance root for every public website in the
authoritative project table in [`README.md`](../README.md#当前项目).

Every site package contains the same maintenance contract:

```text
sites/<site-id>/
├── site.config.json
├── CONTENT.md
├── DESIGN.md
├── TECH.md
├── HANDOFF.md
└── site-specific source and assets
```

The package layout is uniform; the renderer is intentionally not. Static
editorial sites keep readable HTML/CSS/JavaScript, React sites use Vite, and
the philosophy guides use Next.js static export. IVORY keeps its Vinext route
adapters plus generated Pages renderer.

Public uppercase directories such as `HYPATIA/`, `ZHANGYONG-PORTRAIT/` and
`MALTY-MELTY-CHILDHOOD/` are deploy
mirrors. Edit the corresponding package under `sites/`, then run its
`build:<site>` command or `npm run build:sites`. `app/` is the thin Vinext
route adapter for `sites/ivory-archive/`; `public/` remains its framework-level
asset root.

`site.config.json` is technical build configuration, not a competing public
project registry. Names, lifecycle state, and public URLs remain authoritative
in the root `README.md`.
