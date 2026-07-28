# Hildegard six-stage handoff

## 2026-07-28 · Interface refactor

- Product / UX: approved 20-page outline saved in `screen-outline.md`; supporting spec in `product-spec.md`.
- Visual: Illuminated Leaves direction saved in `visual-direction.md`.
- Figma: editable foundations and key screens added at <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=45-49>.
- Prototype: production HTML is the interactive prototype; 20 stable deep links and chapter-level navigation are implemented.
- Engineering: source and generated mirror are synchronized through `npm run build:hildegard`.
- Data: the existing provider-neutral manifest and appendix are preserved.

Basic browser smoke covers 1440×900, 1024×768, 768×1024, 390×844 and 320×568. Antigravity extended route, keyboard, multi-browser and perceptual QA remains pending.

- Site: `HILDEGARD`
- Classification: `PRESERVE`
- Figma: [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- Review branch: `codex/hypatia-hildegard-six-stage`

## 1. Product / UX

The existing portal, chapters 01–08, Watch, and Sources journey remains
unchanged. Data is a final appendix and an optional footer destination.

## 2. Visual exploration

No new visual direction or imagery was introduced. The appendix uses the
existing Viriditas Codex palette, manuscript borders, mono metadata, serif
headings, square geometry, and established responsive behavior.

## 3. Figma design system

The shared Figma file contains editable desktop/mobile references and a
reusable Hildegard Data component inside node `27:2`. It shares semantic
foundations without flattening the site's Viriditas identity.

## 4. Prototype and design QA

The prototype contract covers chapters, Watch, Sources, and Data. Codex runs
basic route/asset/responsive smoke checks. Antigravity should perform extended
deterministic-section comparison so reveal animation does not invalidate
full-page capture evidence.

## 5. Production, GitHub, and preview

The maintainable source is `sites/hildegard/`; `HILDEGARD/` is the generated
deploy mirror. The migration adds a visible Data
appendix, a machine-readable manifest, a provider-neutral event adapter, and
contract tests. Review the [exact implementation commit](https://raw.githack.com/TSRat/My-Website/a8d393eb582d45e2a2a4af533d32ff534fa84721/HILDEGARD/index.html#data)
in [Draft PR #16](https://github.com/TSRat/My-Website/pull/16). Nothing is
merged automatically.

## 6. Data / analytics

No provider is connected. The adapter emits same-page `tsrat:analytics` custom
events only. It sends no requests, stores no identity, writes no cookies or
persistent storage, and never captures raw narrative content.
