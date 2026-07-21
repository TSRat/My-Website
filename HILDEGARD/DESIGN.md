# Hildegard design guide — Viriditas Codex

- Last audited: 2026-07-21
- Primary stylesheet: `HILDEGARD/assets/hildegard-site.css`
- Design tokens: `HILDEGARD/assets/hildegard-tokens.css`
- Interaction script: `HILDEGARD/assets/hildegard-refresh.js`
- Figma handoff: `HILDEGARD/design/figma-handoff.md`

## Concept

设计系统名：**Viriditas Codex**。它的核心不是复原 12 世纪，而是让 12 世纪的宇宙论感在当代屏幕中重新生长。视觉公式：

```text
Living Manuscript
  = Medieval Manuscript DNA (initials · marginalia · borders)
  + Cosmological Geometry (concentric circles · radial · star field)
  + Viriditas (deep green · botanical branching · root systems)
  + Contemporary Editorial UI (12-column · 70% modern · slow motion)
```

主色轴：`Parchment × Viriditas Deep × Cosmic Blue × Gold Leaf`。金和深蓝小面积、绿和纸张大面积——避免变成"教堂/圣像页"或"棕色 Medieval 皮肤"。

## Six screen templates

| Screen | Use | Section examples |
| --- | --- | --- |
| Portal | 入口、hero 引言 | `00 引子` |
| Manuscript | 三栏叙事 + marginalia，正文密度最高 | `01 窄门`, `02 传承`, `05 权威`, `07 斗争` |
| Vision | 深底 + 同心圆 + 金细线，用于神启、音乐与语言 | `03 修炼`, `04 音乐`, `06 语言` |
| Botanical | 深绿 + 放射结构 + 根系，用于 Viriditas 与当代回响 | `08 身后` |
| Archive | 网格 + 档案卡，用于通信、著作、来源、时间轴 | `05 通信卡`, `08 二次生命卡组`, `07 时间轴` |
| Interlude | 近乎空白 + 一行大字 + 一个圆，全站 ≤ 4 次 | Viriditas Interlude, Coda |

## Color tokens

| Token | Value | Role |
| --- | --- | --- |
| `--palette-parchment` | `#F0E6CF` | 主阅读底色 |
| `--palette-vellum` | `#D7C5A4` | 次级块、引文卡背景 |
| `--palette-ink` | `#14170F` | 主文字 |
| `--palette-ink-soft` | `#3A3B33` | 正文 |
| `--palette-muted` | `#6C6A5A` | Metadata |
| `--palette-viriditas-deep` | `#18382B` | 主结构色、章节标题、导航 active、footer 背景 |
| `--palette-living-green` | `#547A52` | hover、次级插图、植物线条 |
| `--palette-new-growth` | `#A7B77A` | 极小点缀、状态点 |
| `--palette-visio-night` | `#0B1524` | 深章节 Vision 底 |
| `--palette-visio-blue` | `#1B2E55` | 深章节结构色 |
| `--palette-visio-glow` | `#7CA0D9` | 深章节标题与图形色 |
| `--palette-gold-leaf` | `#B48A3C` | 细线、initials、章末引文标记 |
| `--palette-gold-soft` | `#D9B366` | 深底上的金色文字 |
| `--palette-alert-red` | `#7A2A2A` | Editorial note、禁令段落 |

**面积原则**：金 ≤ 8% · 深蓝 ≤ 20% · 绿 ≥ 30% · 纸张 ≥ 40%。

## Typography

- Display（拉丁标题）：`Cormorant Garamond` 400/500，允许 italic。
- 中文标题 & 正文：`Noto Serif SC` 600/700。
- UI / Metadata：`Noto Sans SC`（中）+ `Fira Code`（拉丁数字与编号）。
- 中文回退：`Source Han Serif SC`, Georgia, Songti SC。
- 字号阶梯：`display-1 → display-2 → h2 → h3 → lede → body → small → meta`；具体值见 `hildegard-tokens.css` 的 `--size-*`。
- 正文 `line-height: 1.85`，长文可读性优先。

## Layout

- 12 栏 grid，容器最大 `1200px`，正文最大 `720px`。
- Manuscript 章节：`2 / span 8` + marginalia `10 / span 3`。
- Portal：7:5 分栏。
- 移动端：三栏坍缩为单列，marginalia 依然保留但作为段后 aside 显示；圆形装饰允许 `overflow-x: hidden` 越界。
- Corner radius：`0–4px`，最多 `8px`；不做圆角卡片站。
- Border：`1px` 为主，`1.5px` / `2px` 只用于时间轴与 Editorial note。

## Geometry

核心图形只使用**同心圆 / 放射结构 / 根系 / 藤蔓 / 星点**，全部为独立 SVG：

- `assets/glyph-viriditas.svg` — 同心圆 + 八向放射，Portal 与 Interlude 主图。
- `assets/glyph-cosmic-wheel.svg` — Scivias-inspired 环，Portal 副图。
- `assets/glyph-branch.svg` — 藤蔓分割线，Interlude 顶。
- `assets/glyph-root.svg` — 根系，Coda Interlude。
- `assets/glyph-star.svg` — 星点，Vision 章节备用背景。

严格禁止：塔罗、月亮、水晶、五角星、玻璃拟态、无意义渐变、圆角卡片矩阵、粉紫女性主义配色、棕色木纹皮肤、Gothic 尖拱。

## Motion language

`Breathing + Growing + Revealing`

- 呼吸：Portal 圆图 `scale 1 → 1.04 → 1`，周期 9s。
- 转动：Interlude 圆图 60s / 圈，近乎静止的宇宙机械感。
- 显现：`.reveal` 元素通过 IntersectionObserver 触发 `opacity + translateY(12px)` 缓入。
- Hover：链接颜色/下划线 `1200ms` 缓变。
- 所有动效在 `prefers-reduced-motion: reduce` 下自动降级为 0ms。

## Component inventory

| Class | Role |
| --- | --- |
| `.chapter` + `.chapter--{portal,manuscript,vision,botanical,interlude,interlude-dark}` | 章节容器与模板变体 |
| `.chapter-inner` | 12 栏 grid 容器 |
| `.chapter-meta / .chapter-numeral / .chapter-title / .chapter-lede / .chapter-body` | 章节头 |
| `.marginalia` | 侧边编辑注释 |
| `.pair` + `.pair-card` + `.pair-card--dark` | 二元对照卡（苦修 vs 学识、圣咏 vs Symphonia 等）|
| `.timeline` | 关键年表 / 冲突轴 |
| `.letters` + `.letter` | 通信卡集合（05 权威）|
| `.alphabet` | Lingua Ignota 字母示意 |
| `.archive-grid` + `.archive-card` | Archive 屏的档案卡组 |
| `.editor-note` | 编辑注释框（Alert 色）|
| `.portal-grid / .portal-title / .portal-quote / .portal-decor` | Portal 模板 |
| `.site-header / .site-footer` | 全站 shell |
| `.reveal` | Scroll reveal hook |
| `.skip-link` | 无障碍跳到主内容 |

## Accessibility

- 所有 SVG 装饰使用 `aria-hidden="true"`。
- `skip-link` 位于页面顶部，`Tab` 一次即可到主内容。
- `focus-visible` 保留浏览器默认焦点样式并强化颜色。
- Editorial note 使用文本 + 颜色双通道，不依赖颜色单独传达信息。
- `prefers-reduced-motion` 全面尊重，动画降级 0ms，装饰旋转停止。

## Figma editability

设计变量与 Figma Variables 一一对应，命名保持 kebab-case。SVG 全部为独立文件，可以直接从 Figma 导出后覆盖 `HILDEGARD/assets/glyph-*.svg`。详细对照见 `HILDEGARD/design/figma-handoff.md`。
