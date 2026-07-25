# Enheduanna six-stage migration handoff

- Site: `ENHEDUANNA`
- Classification: `REFACTOR`
- Figma: [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- Review branch: `codex/enheduanna-six-stage-readiness`
- Draft PR: [#17](https://github.com/TSRat/My-Website/pull/17)
- Production state: maintainable rebuild implemented; awaiting creator review

## 1. Product / UX

The existing long-form sequence, deliberately non-monotonic chapter numbers,
17-source list, video, NotebookLM destination, and the tension between “first
named author” and authorship uncertainty remain intact.

An additive Data / Signals entry follows Sources. It does not interrupt or
reinterpret the historical argument.

## 2. Visual exploration

The ancient-archive / contemporary-exhibition identity remains unchanged:
fixed blue spine, paper field, red/blue/gold contrast, monumental condensed
numbering, hard rules, asymmetrical grids, and distinct light/dark narrative
turns.

The Data appendix uses a dark-blue field, gold metadata, paper text, and hard
dividers. It introduces no generic rounded dashboard cards or new imagery.

## 3. Figma design system

Node `27:2` contains editable desktop/mobile migration references and the
Enheduanna Data component. It reuses portfolio semantic foundations while
keeping this site's color, type, grid, imagery, and chapter rhythm.

## 4. Prototype and design QA

The contract covers directory navigation, chapter anchors, source links,
video, NotebookLM, and the provider-none Data state. The previously documented
1024-pixel overflow is fixed by allowing the hero grid to shrink and its title
to wrap below 1100 pixels.

Codex completed a basic smoke check at 1280, 1024, and 390 CSS pixels with no
broken images, no console errors, and no horizontal overflow. Antigravity still
owns deterministic section captures, keyboard review, multi-browser checks,
and human overlay comparison.

## 5. Production, GitHub, and preview

Stage 5 is implemented:

- `static-sites/enheduanna/` is the maintainable React / TSX / CSS source.
- `vite.config.ts` provides a site-specific development configuration.
- `npm run build:enheduanna` builds into `.site-build/enheduanna/`, validates
  the compiled entry, and updates `ENHEDUANNA/`.
- Existing GitHub Actions Pages deployment and `/My-Website/ENHEDUANNA/`
  remain unchanged.
- Old unreferenced bundles are preserved as rollback material.
- Targeted tests protect the build command, provider-none Data source, compiled
  entry, and source/mirror public-asset equality.

## 6. Data / analytics

The visible Data entry reports provider `none` and displays no invented
metrics. The contract in `site-manifest.proposed.json` allows no cookies,
persistent identity, raw content, raw free-form text, or network delivery
without a future explicit provider decision.

## Remaining review

Creator review should focus on the additive Data appendix and the tablet hero
wrap correction. Antigravity should perform the extended visual preservation
gate before the PR is merged. The chapter-number order remains a separate
creator decision.
