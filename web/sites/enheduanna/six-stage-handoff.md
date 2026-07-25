# Enheduanna six-stage migration readiness

- Site: `ENHEDUANNA`
- Classification: `REFACTOR`
- Figma: [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- Review branch: `codex/enheduanna-six-stage-readiness`
- Production state: blocked before Phase 5 implementation

This is a readiness package, not a claim that the deployed mirror was migrated.
Readable source exists in `static-sites/enheduanna/`, while GitHub Pages copies
the separate compiled `ENHEDUANNA/` mirror. The repository has no confirmed
command that reproduces one from the other.

## 1. Product / UX

Preserve the existing long-form sequence, deliberately non-monotonic chapter
numbers, complete source list, video and NotebookLM destinations, and the
central tension between “first named author” and authorship uncertainty.

The future Data entry belongs after Sources. It should describe reading signals
and privacy boundaries without interrupting the historical argument.

## 2. Visual exploration

Preserve the ancient-archive / contemporary-exhibition identity: fixed blue
spine, paper field, red/blue/gold contrast, monumental condensed numbering,
hard rules, asymmetrical grids, and distinct light/dark narrative turns.

The proposed Data appendix uses a dark-blue field, gold mono metadata, paper
text, hard dividers, and no rounded generic cards. No new imagery is required.

## 3. Figma design system

Node `27:2` contains editable desktop/mobile migration references and the
Enheduanna Data component. It reuses portfolio semantic foundations but keeps
site-specific color, type, grid, imagery, and chapter rhythm.

## 4. Prototype and design QA

The prototype contract covers full-directory navigation, chapter anchors,
source links, video, NotebookLM, and the future Data entry. Antigravity should
compare deterministic anchors at desktop, tablet, and mobile sizes. The
existing tablet overflow is a known baseline defect to fix only after the build
chain is reproducible. The current local Pages mirror measures 35 CSS pixels
wider than a 1024-pixel viewport; the 390-pixel mobile viewport does not
overflow.

## 5. Production, GitHub, and preview

**Blocked.** Do not patch `ENHEDUANNA/assets/index-*.js` or
`ENHEDUANNA/assets/index-*.css`, and do not report a `page.tsx` change as
deployed. Phase 5 can begin when either:

1. the original project package, Vite configuration, and build command are
   restored; or
2. the repository owner explicitly authorizes a reconstruction with an
   accepted current-mirror baseline.

Acceptance requires one command that builds into a temporary directory,
documented asset/base behavior, source-to-output smoke tests, and a deliberate
mirror update reviewed in a Draft PR.

## 6. Data / analytics

The proposed contract is stored in `site-manifest.proposed.json` and is not
referenced by the deployed mirror. It defines provider-neutral events for
chapter, directory, source, video, NotebookLM, and Data entry interactions.
It allows no network requests, cookies, persistent storage, identity, raw
content, or raw free-form text.

## Safe next action

Provide the original build scaffold or explicitly authorize reconstruction.
Until then, this branch documents the target, protects source/mirror asset
parity, and leaves the public website unchanged.
