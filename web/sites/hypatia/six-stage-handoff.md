# Hypatia six-stage handoff

- Site: `HYPATIA`
- Classification: `REFACTOR`
- Figma: [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- Review branch: `codex/hypatia-hildegard-six-stage`

## 1. Product / UX

The existing long-form historical reading journey remains primary. The new
Data entry is an appendix after Sources, so it does not interrupt the argument,
evidence hierarchy, or video path.

## 2. Visual exploration

No replacement art direction was introduced. The Data appendix extends the
existing lake-blue exhibition language with square edges, hairline rules,
serif display type, and the current responsive spacing system.

## 3. Figma design system

The shared Figma file contains an editable Hypatia desktop/mobile migration
reference and reusable Data component inside node `27:2`. It reuses the
portfolio foundations while keeping Hypatia's site-specific tokens.

## 4. Prototype and design QA

The prototype contract covers section navigation, evidence filtering,
comparison and letter controls, memory tabs, sources, video, and Data. Codex
runs basic route/asset/responsive smoke checks. Antigravity should perform the
extended deterministic-section comparison because long full-page captures
repeat sticky and reveal regions in the current browser backend.

## 5. Production, GitHub, and preview

The static source remains `HYPATIA/`. The migration adds a visible Data
appendix, a machine-readable manifest, a provider-neutral event adapter, and
contract tests. Review the [exact implementation commit](https://raw.githack.com/TSRat/My-Website/a8d393eb582d45e2a2a4af533d32ff534fa84721/HYPATIA/index.html#data)
in [Draft PR #16](https://github.com/TSRat/My-Website/pull/16). Nothing is
merged automatically.

## 6. Data / analytics

No provider is connected. The adapter emits same-page `tsrat:analytics` custom
events only. It sends no requests, stores no identity, writes no cookies or
persistent storage, and never captures raw historical content.
