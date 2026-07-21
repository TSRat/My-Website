# Hildegard handoff

- Last updated: 2026-07-21
- Project: 谦卑的反叛者：宾根的希尔德加德
- Current branch (creation): `agent/add-hildegard-site`
- Base commit at start: `8670663` — `feat: i18n and swap titles`

## Current goal

以 TSRat 稿件《谦卑的反叛者：宾根的希尔德加德》为叙事骨架，落地"时间的女儿 002"人物专题；视觉采用自定义的 Viriditas Codex 系统（Living Manuscript × Cosmological Geometry × Viriditas × Contemporary Editorial UI）；保留未来在 Figma 中继续编辑与迁移域名的可能性。

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

## Completed

- 严格按稿件结构（引子 + 八章 + 身后）撰写正文；史实、学界解读、叙事框架、视觉隐喻分层呈现。
- 建立 Viriditas Codex 视觉系统：六种屏（Portal / Manuscript / Vision / Botanical / Archive / Interlude）+ 独立 SVG 图形语言。
- 内部链接全部使用相对路径（`./assets/...`、`../HYPATIA/`），为未来换域名或去 `/My-Website/` 前缀留出低成本迁移路径。
- 无障碍：skip-link、focus-visible、`aria-hidden` 装饰、`prefers-reduced-motion` 降级。
- Figma handoff 文档：颜色、字号阶梯、栅格、SVG 清单、六种屏模板的 Figma 页面命名建议。

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
