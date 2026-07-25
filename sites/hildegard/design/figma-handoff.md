# Figma handoff — Viriditas Codex

Last updated: 2026-07-21

本文件用来把 `HILDEGARD/` 站点的视觉源在 Figma 与代码之间保持同步。任何后续 Figma 编辑，请保持这里列出的命名与结构，方便直接落回 `assets/hildegard-tokens.css` 与 `assets/glyph-*.svg`。

## 页面结构建议

Figma 文件建议采用以下 pages（左侧侧栏）：

- `01 · Foundations`：色板、字号、间距、圆角、边框、动效速度。
- `02 · Icons & Ornaments`：SVG 图形（同心圆、宇宙轮、藤蔓、根系、星点）。
- `03 · Screen Templates`：六种屏模板（Portal / Manuscript / Vision / Botanical / Archive / Interlude）。
- `04 · Chapter Compositions`：把八章按代码顺序摆到 desktop / mobile 两栏。
- `05 · Handoff`：变量表 + 与代码的对应关系。

## Variables → CSS

| Figma Collection · Variable | CSS token | Value |
| --- | --- | --- |
| Color / Palette · parchment | `--palette-parchment` | `#F0E6CF` |
| Color / Palette · vellum | `--palette-vellum` | `#D7C5A4` |
| Color / Palette · ink | `--palette-ink` | `#14170F` |
| Color / Palette · ink-soft | `--palette-ink-soft` | `#3A3B33` |
| Color / Palette · muted | `--palette-muted` | `#6C6A5A` |
| Color / Palette · viriditas-deep | `--palette-viriditas-deep` | `#18382B` |
| Color / Palette · living-green | `--palette-living-green` | `#547A52` |
| Color / Palette · new-growth | `--palette-new-growth` | `#A7B77A` |
| Color / Palette · visio-night | `--palette-visio-night` | `#0B1524` |
| Color / Palette · visio-blue | `--palette-visio-blue` | `#1B2E55` |
| Color / Palette · visio-glow | `--palette-visio-glow` | `#7CA0D9` |
| Color / Palette · gold-leaf | `--palette-gold-leaf` | `#B48A3C` |
| Color / Palette · gold-soft | `--palette-gold-soft` | `#D9B366` |
| Color / Palette · alert-red | `--palette-alert-red` | `#7A2A2A` |
| Space / 1..10 | `--space-1..10` | `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px` |
| Radius / xs..lg | `--radius-xs..lg` | `0 · 2 · 4 · 8 px` |
| Border / hair..thick | `--border-hair..thick` | `1 · 1.5 · 2 px` |
| Motion / slow..breath | `--motion-slow / slower / breath / rotation` | `1200 · 2400 · 9000 · 60000 ms` |

## Text styles

| Figma style | CSS size | Family |
| --- | --- | --- |
| Display 01 · Portal | `--size-display-1` (clamp 54–86px) | Cormorant Garamond 500 |
| Display 02 · Chapter | `--size-display-2` (clamp 42–58px) | Cormorant Garamond 500 |
| Heading 02 | `--size-h2` (30–38px) | Cormorant Garamond 500 |
| Heading 03 | `--size-h3` (21–25px) | Noto Serif SC 600 |
| Lede | `--size-lede` (18px) | Noto Serif SC 600 |
| Body | `--size-body` (16.3px) | Noto Serif SC 400 |
| Small | `--size-small` (14.7px) | Noto Serif SC 400 |
| Meta | `--size-meta` (12.5px) | Fira Code 500 tracked +0.16em |

## Grid

- Desktop 12 columns · gutter `24px` · outer margin clamp `16–96px`.
- Container max: `1200px`. Reading max: `720px`.
- Manuscript template: columns `2 / span 8` for body, `10 / span 3` for marginalia.
- Portal template: `7 : 5` split.
- Mobile: stack；Marginalia 保留但排在正文下方；圆形装饰可越屏 `120vw`。

## SVG assets

| File | Screen | Notes |
| --- | --- | --- |
| `assets/glyph-viriditas.svg` | Portal · Interlude | 200×200 · currentColor · 同心圆 + 八向放射 |
| `assets/glyph-cosmic-wheel.svg` | Portal · Vision | 240×240 · Scivias-inspired 环 |
| `assets/glyph-branch.svg` | Interlude · 页面之间的换气页 | 320×120 · 藤蔓分割线 |
| `assets/glyph-root.svg` | Coda Interlude · Botanical | 200×260 · 根系 |
| `assets/glyph-star.svg` | Vision 备用 | 160×160 · 星点场 |

要替换某个 SVG：在 Figma 内绘制同尺寸 artboard → `stroke="currentColor"` → export SVG → 覆盖 `assets/glyph-*.svg`。图形颜色由父元素 `color` 决定，因此不要在 SVG 中固定颜色。

## Component naming

| Figma component | CSS class |
| --- | --- |
| `Chapter / Manuscript` | `.chapter.chapter--manuscript` |
| `Chapter / Vision` | `.chapter.chapter--vision` |
| `Chapter / Botanical` | `.chapter.chapter--botanical` |
| `Chapter / Portal` | `.chapter.chapter--portal` |
| `Chapter / Interlude (light)` | `.chapter.chapter--interlude` |
| `Chapter / Interlude (dark)` | `.chapter.chapter--interlude-dark` |
| `Block / Pair Card` | `.pair-card` (+ `.pair-card--dark`) |
| `Block / Letter Card` | `.letter` |
| `Block / Archive Card` | `.archive-card` |
| `Block / Editor Note` | `.editor-note` |
| `Block / Marginalia` | `.marginalia` |
| `Block / Timeline` | `.timeline` |
| `Block / Alphabet Grid` | `.alphabet` |

## Editing workflow

1. 在 Figma `01 Foundations` 页调整变量。
2. 复制变量 hex / 数值到 `assets/hildegard-tokens.css`，保持同名 CSS 变量。
3. 若涉及 SVG，从 Figma `02 Icons & Ornaments` 页 export 同名 SVG，覆盖 `assets/glyph-*.svg`。
4. 若新增 chapter template，在 CSS 中扩展 `.chapter--<name>` 变体，并在本文件末尾登记。
5. 每次 Figma → 代码 同步后，在 `HANDOFF.md` 追加一次 "Design sync" 记录。
