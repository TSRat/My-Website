# Hildegard 设计交接

Status: corrected after creator review · Draft PR #29 · 2026-07-29

## 设计源

- Existing shared Figma file: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2>
- New editable redesign page: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=45-49>
- New wrapper frame: `45:50`
- Key frames:
  - `45:51` — Foundations · Viriditas Codex II
  - `45:81` — Screen 00 · Series Hero · Desktop 1440
  - `45:165` — Screen 01 · 30-second Primer · Desktop 1440
  - `45:193` — Screen 08 · Vision + Knowledge · Desktop 1440
  - `45:213` — Manuscript Leaf · Mobile 390
- Approved outline: `web/sites/hildegard/screen-outline.md`
- Product spec: `web/sites/hildegard/product-spec.md`
- Visual direction: `web/sites/hildegard/visual-direction.md`
- Type and layout: `web/sites/hildegard/typography-layout.md`

## 代码映射

- Authoritative source: `sites/hildegard/`
- Generated mirror: `HILDEGARD/`
- Tokens: `sites/hildegard/assets/hildegard-tokens.css`
- Layout and components: `sites/hildegard/assets/hildegard-site.css`
- Navigation and progressive enhancement: `sites/hildegard/assets/hildegard-refresh.js`

## QA status

- Figma composition: corrected in place for foundations, hero, desktop Vision and mobile manuscript frames.
- Implementation: complete locally; exact-commit preview refresh pending.
- Five-viewport basic smoke: passed at 1440×900, 1024×768, 768×1024, 390×844 and 320×568.
- Antigravity extended QA: pending.

## Review links

- Exact implementation preview: <https://raw.githack.com/TSRat/My-Website/5bda9fc0fb93b378b664af15441fdc9490419136/HILDEGARD/index.html>
- Draft PR: <https://github.com/TSRat/My-Website/pull/29>

raw.githack may show a one-time external-content notice before opening the exact commit.
