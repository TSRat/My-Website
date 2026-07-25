# Hildegard six-stage handoff

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

The deployable source remains `HILDEGARD/`. The migration adds a visible Data
appendix, a machine-readable manifest, a provider-neutral event adapter, and
contract tests. The exact commit preview and Draft PR URL are recorded after
push; nothing is merged automatically.

## 6. Data / analytics

No provider is connected. The adapter emits same-page `tsrat:analytics` custom
events only. It sends no requests, stores no identity, writes no cookies or
persistent storage, and never captures raw narrative content.
