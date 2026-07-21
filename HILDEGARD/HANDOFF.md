# Hildegard handoff

- Last updated: 2026-07-21
- Project: 谦卑的反叛者：宾根的希尔德加德
- Current branch (creation): `agent/add-hildegard-site`
- Follow-up branch (this pass): `agent/fix-static-site-copy`
- Base commit at start: `8670663` — `feat: i18n and swap titles`

## Current goal

以 TSRat 稿件《谦卑的反叛者：宾根的希尔德加德》为叙事骨架，落地"时间的女儿 002"人物专题；视觉采用自定义的 Viriditas Codex 系统（Living Manuscript × Cosmological Geometry × Viriditas × Contemporary Editorial UI）；保留未来在 Figma 中继续编辑与迁移域名的可能性。

## 2026-07-21 修复 pass

反馈问题（用户在初版部署后指出）：

1. 章节 03/06 出现"每列只有一个汉字宽"的塌陷排版。
2. 文字过密、图像/视觉锚点过少。
3. 视频缺乏在页面内的呈现，只有文末外链。
4. 缺少像 HYPATIA / ENHEDUANNA 那样的完整"史料与延伸阅读"清单。

本次修复：

- 根本原因：`hildegard-site.css` 中 12 列栅格规则原本只作用于 `.chapter--manuscript`，导致 `.chapter--vision` 与 `.chapter--botanical` 的正文与旁注 fall back 到 `grid-column: auto`（=1 列）。已把 grid-column 规则扩展到三种章节屏。
- 每章右上加入一个 96 × 96 的装饰性 SVG "章节锚点"（`.chapter-glyph`）；桌面端 opacity 0.32，避免与正文视觉冲突；移动端自动缩小。
- 章节正文引入 `.pull-quote` 拉引金句；三种屏（Manuscript / Vision / Botanical）各自继承自己的色板。
- 每一章的正文段落被压缩：删除重复陈述，保留论点与关键人名/时间；把一些原本冗长的"叙事扩写"转成拉引句。
- 新增 `<section id="watch">` 内嵌 Bilibili iframe（BV1VE4gzNEYJ）+ 主标题 + 简介 + 外链按钮。
- 新增 `<section id="sources">`：史料分层 `<table class="source-table">` + `.reading-list` 外链 + `.image-credits` 折叠区。
- 站点头部 nav 增加 `观看` / `来源` 两个锚点。
- 页脚去掉旧的 Sources 列表，只保留 Series 导航 + About 快速跳转。
- 装饰图形仍全部为本站 SVG，没有 AI 生成的希尔德加德肖像；`image-credits` 中明确说明"AI 图片不能冒充史料"。

## Current state

- 站点目录：`HILDEGARD/`。
- 入口：`HILDEGARD/index.html`（八章 + Portal + 两处 Interlude + Footer）。
- 样式：`assets/hildegard-site.css` + `assets/hildegard-tokens.css`（tokens 与 Figma Variables 一一对应）。
- 交互：`assets/hildegard-refresh.js`（IntersectionObserver-based reveal，尊重 `prefers-reduced-motion`）。
- 装饰：独立 SVG `glyph-viriditas`, `glyph-cosmic-wheel`, `glyph-branch`, `glyph-root`, `glyph-star`。
- Hub 注册：`scripts/build-github-pages.mjs` 的 `staticSites` 中添加 `HILDEGARD`（DAUGHTERS OF TIME · 002）。
- Living Atlas：`THE-LIVING-ATLAS/index.html` 的 `07 Sites` 增加 Hildegard 行，编号 `002 · Daughters of Time · ACTIVE`。
- 根 `README.md` 与 `HANDOFF.md`：项目表增加 Hildegard 条目。
- 文档：`CONTENT.md / DESIGN.md / TECH.md / HANDOFF.md / design/figma-handoff.md`。
- 新增：`#watch` 与 `#sources` 章节，位于主 `<main>` 内、页脚之前。

## Completed

- 严格按稿件结构（引子 + 八章 + 身后）撰写正文；史实、学界解读、叙事框架、视觉隐喻分层呈现。
- 建立 Viriditas Codex 视觉系统：六种屏（Portal / Manuscript / Vision / Botanical / Archive / Interlude）+ 独立 SVG 图形语言。
- 内部链接全部使用相对路径（`./assets/...`、`../HYPATIA/`），为未来换域名或去 `/My-Website/` 前缀留出低成本迁移路径。
- 无障碍：skip-link、focus-visible、`aria-hidden` 装饰、`prefers-reduced-motion` 降级。
- Figma handoff 文档：颜色、字号阶梯、栅格、SVG 清单、六种屏模板的 Figma 页面命名建议。
- 2026-07-21 追加：修复三屏栅格塌陷；把叙事密度和视觉锚点重新平衡；视频内嵌；史料结构化。

## Verification status

- `git diff --check`: Passed
- `npm ci`: Passed
- `npm run build:pages`: Passed — hub 与 Hildegard 镜像生成成功
- `npm run validate:pages`: Passed — 全部本地资源引用可解析
- `npm run lint`: Not run yet at handoff creation time — 下一步在 CI 中随 build 触发
- `npm test`: Not run yet — 需要在具备 GNU `timeout` 的环境执行；若本地环境缺失，CI 会跑
- Browser check：本地在 `python3 -m http.server 8000 --directory docs` 下以 375 / 820 / 1440px 三档快速核对布局

## Known issues / TODO

- ✅ 视频版本已发布：<https://www.bilibili.com/video/BV1VE4gzNEYJ>；页脚 Sources 现在直接外链。
- `TODO: needs confirmation`：是否引入公版抄本图像（如 Rupertsberg Scivias 手稿扫描）。
- `TODO: needs confirmation`：Kristin Hayter / Hildegard von Blingin' 官方链接是否作为外链嵌入。
- 目前 workflow 未为 Hildegard 增加 smoke check；后续如要加，请同步 `.github/workflows/publish-static-mirror.yml` 与 `TECH.md`。

## Do not change without confirmation

- 稿件叙事骨架与"性别观进步 vs 阶级观保守"张力段落（属于**观点改变**范畴）。
- `HILDEGARD/` 目录名与 slug 大小写。
- Living Atlas 中 `002 · HILDEGARD` 的编号与位置。
- Viriditas Codex 主色轴与"金 ≤ 8% / 深蓝 ≤ 20% / 绿 ≥ 30% / 纸张 ≥ 40%"面积原则。
- Vite `base` / `scripts/build-github-pages.mjs` 中现有 slug 与复制逻辑。

## Next recommended tasks

1. 由创作者填入视频与外链后，去掉 Sources 中的 `TODO: needs confirmation`。
2. 若准备做 Figma 一致性稿：按 `design/figma-handoff.md` 在 Figma 中建立同名 Variables 与 SVG 组件。
3. 未来若要独立域名（如 `hildegard.tsrat.com`），只需把 `HILDEGARD/` 整目录托管到新平台并调整两处 canonical / og:url；相对路径无需修改。
