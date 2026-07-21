# Repository handoff

- Last updated: 2026-07-19
- Project: `TSRat/My-Website`
- Current branch: `agent/document-and-validate-sites`
- Latest commit at audit start: `edcc2b7` — `Publish IVORY ARCHIVE issue 06 with editorial illustrations`

## Current goal

建立一套无需依赖历史聊天记录的多 Agent 接管文档，让新 Agent 能从仓库、Git 历史和项目文档确认：

- 仓库与四个站点的用途
- 真实源码、镜像和历史快照的区别
- 不可擅自改变的内容、设计与部署约束
- 本地运行、构建和验证方式
- 当前状态、已知缺口和下一步

## Current state

- 仓库公开，默认 branch 为 `main`。
- 审计开始时本地 `main` 与 `origin/main` 对齐，working tree clean。
- GitHub Pages 通过 Actions artifact 部署，不使用 Deploy from a branch。
- 公开总入口下有 4 个站点：IVORY ARCHIVE、Enheduanna、Hypatia、Melromarc Sisters。
- 根目录原先只有 `README.md`；本次任务建立全局与项目级接管文档。
- 接管文档已建立；后续修复只新增一个缺失的 Hypatia 图片、通用 Pages 资源验证脚本和对应 workflow 检查，不改 URL、路由、Vite base 或部署架构。

## Completed

- 审计目录结构、现有 README、`package.json`、lockfile、Vite/TypeScript 配置和脚本。
- 检查 `git status`、当前 branch、最近 20 个 commits、remote branches 与初始 diff。
- 确认 `.github/workflows/publish-static-mirror.yml` 的 GitHub Pages Actions artifact 流程。
- 确认四个站点的公开目录、入口文件和当前 Pages 构建来源。
- 识别源码、发布镜像和历史静态快照之间的不对称关系。
- 创建根 `AGENTS.md`、`TECH.md`、`HANDOFF.md` 并扩展 `README.md`。
- 为四个站点创建项目级 `CONTENT.md`、`DESIGN.md`、`TECH.md` 和 `HANDOFF.md`。
- 追溯 `agora-hypatia-teaching.jpg` 缺图：引用由 `eb7fae6` 引入，当前 5 个 remote branches 均没有该文件。
- 新增明确标注为现代 AI 视觉隐喻的替代图，并修正原先错误的“电影剧照”说明。
- 新增 `npm run validate:pages`，验证所有生成 HTML/CSS 的本地资源引用，并接入 Pages workflow。
- 审计全部 remote branches，确认仓库内没有 Hypatia 或 Melromarc 的完整上游源码，也没有 Enheduanna 的原始构建脚手架。

## In progress

- 文档、缺图修复和验证增强位于当前 PR branch；没有内容章节或 UI 重构处于半完成状态。

## Known issues

1. `IVORY-ARCHIVE/` 是旧静态快照，当前只到第 02 期；当前 Pages IVORY 由 `app/briefings.ts` 生成，已到第 06 期。
2. `static-sites/enheduanna/` 有可读 TSX/CSS，`ENHEDUANNA/` 是 workflow 直接复制的发布镜像，但没有自动重建或同步 npm script。
3. `HYPATIA/` 可以直接部署；全部现有 remote branches 均没有完整上游应用源码。目录内还有入口未引用的历史 bundle/样式，不能擅自删除。
4. `MELROMARC-SISTERS/` 主要是 Vinext/React 编译 artifact；全部现有 remote branches 均没有完整未编译源码。
5. 远程仍有 `agent/add-hypatia-site`、`agent/add-melromarc-sisters-site`、`enheduanna-first-author` 和 `gh-pages` branch。当前任务未删除；workflow 只监听 `main`。
6. PR branch push 不触发 Pages deployment；合并到 `main` 后才会由现有 Actions workflow 发布。

## Important decisions

- 适应现有目录，不移动或重命名站点。
- IVORY 项目文档放在真实动态源码目录 `app/`，而不是旧 `IVORY-ARCHIVE/` 快照。
- Enheduanna 项目文档放在 `static-sites/enheduanna/`，并在全局文档明确指出当前部署复制 `ENHEDUANNA/`。
- Hypatia 与 Melromarc 文档放在各自可部署目录，因为仓库中没有更可信的完整上游源码目录。
- 为每个站点增加短的 `TECH.md`，避免 Agent 在源码/镜像关系上做出错误假设。
- 无法从仓库确认的设计历史、上游源码和重建命令统一标记为待确认，不用聊天记忆补写。
- 缺失的 Hypatia 教学图使用现代 AI 辅助插画补齐，caption 明确说明它不是历史现场，也不是《城市广场》剧照。

## Do not change without confirmation

- 四个站点的公开 URL 和目录名大小写
- GitHub Actions Pages artifact 架构
- `main` 的 push trigger 与 workflow permissions
- Vite `base`
- `scripts/build-github-pages.mjs` 的 slug、redirect 和复制逻辑
- `gh-pages` 或其他 remote branch 的存在状态
- 历史站点的核心叙事、史料限定语和来源边界
- Melromarc 的女性主义批评立场与两个故事基础
- 整体 UI、字体、色彩和图片体系
- 任何看似旧但尚未确认可删除的静态 bundle 或图片

## Relevant files

| 文件或目录 | 作用 |
| --- | --- |
| `README.md` | 项目列表、入口、运行方式与文档导航 |
| `AGENTS.md` | 所有 Agent 的工作规则 |
| `TECH.md` | 全局构建、部署、资产和路径约束 |
| `.github/workflows/publish-static-mirror.yml` | GitHub Pages workflow |
| `scripts/build-github-pages.mjs` | 生成 Pages 总入口和 IVORY，复制三个静态站点 |
| `scripts/validate-pages-assets.mjs` | 检查生成页面的本地 HTML/CSS 资源引用 |
| `app/briefings.ts` | IVORY 当前全部期刊数据 |
| `static-sites/enheduanna/` | Enheduanna 可读源码与项目文档 |
| `ENHEDUANNA/` | Enheduanna 当前 Pages 输入镜像 |
| `HYPATIA/` | Hypatia 当前 Pages 输入与项目文档 |
| `HYPATIA/assets/agora-hypatia-teaching.jpg` | 修复缺图的现代 AI 视觉隐喻 |
| `MELROMARC-SISTERS/` | Melromarc 当前 Pages 输入与项目文档 |

## How to run

```bash
npm ci
npm run dev
```

生成 Pages artifact：

```bash
npm run build:pages
npm run validate:pages
```

本地查看 artifact：

```bash
python3 -m http.server 8000 --directory docs
```

## Verification status

- Change scope: 20 个 Markdown 文档、1 张 Hypatia 图片、1 个验证脚本，以及必要的 HTML、`package.json` 和 workflow 小改动
- Diff check: Passed — `git diff --check` 与全部新增文本文件检查无错误
- GitHub Pages build: Passed — `npm run build:pages`
- Pages asset validation: Passed — 27 个 HTML/CSS 文件中的 209 个本地引用；负向测试能准确捕获被临时移走的 Hypatia 图片
- Application build: Passed — `npm run build`
- Tests: Passed — `npm test`，1/1
- Typecheck: No dedicated npm script
- Lint: Passed — 0 errors；24 个既有 warning（16 个来自旧 Hypatia bundle，8 个来自 Enheduanna 的 `<img>`）
- Workflow-equivalent checks: Passed — Hypatia 文件、版本标记和标题检查全部通过
- Artifact checks: 三个复制站点与源目录 byte-identical；总入口和四站点 smoke checks 通过
- Browser check: 环境有 Playwright 库但没有 Chromium executable，无法运行；已直接检查 1600×1067 成品图，并通过 artifact 资源与尺寸验证
- Deployment: Not run；PR branch push 不触发只监听 `main` 的 Pages workflow

## Next recommended tasks

1. Review and merge the current draft PR after checking the generated Hypatia image in context.
2. Confirm whether the complete upstream source for Hypatia and Melromarc Sisters exists outside this repository.
3. 提供 Enheduanna 原始项目脚手架或明确授权重建后，再增加从 `static-sites/enheduanna/` 到 `ENHEDUANNA/` 的可重复构建。
4. Decide whether old root static snapshots and `IVORY-ARCHIVE/` should remain as rollback material or be explicitly archived; do not delete before that decision.
5. If branch cleanup is desired, audit merge status and obtain separate explicit authorization before deleting any remote branch.

## Git state

- Branch: `agent/document-and-validate-sites`
- Latest base commit: `edcc2b7`
- Working tree clean at audit start: Yes
- Working tree clean at handoff: Yes
- Uncommitted changes: None
- Commit/push performed: Yes, on the current PR branch
- Merge performed: Yes

---

## 2026-07-20: Deploy The Living Atlas Hub

### Current Target
将“TSRat - The Living Atlas”作为总网页面部署到 GitHub Pages，且保留未来 Figma 编辑可能性。

### Completed
- 审计了仓库配置和多网站生成脚本。
- 在 `THE-LIVING-ATLAS/` 目录下静态还原了 PDF 设计稿的 12列网格、三级字体排印、象牙白底色及钴蓝色强调的 UI。
- 添加了独立网站所需的 `CONTENT.md`，`DESIGN.md`，`HANDOFF.md` 规范文件。
- 更新了 `scripts/build-github-pages.mjs`，将 `THE-LIVING-ATLAS` 注册进入 `staticSites`，并更新了 `hubPage` (根目录 `index.html`)，增加了指向新主站的链接。
- 根目录 `README.md` 中已更新当前项目列表。
- 运行了完整的 `build:pages` 与 `validate:pages` 资源引用校验，一切通过。

### Unfinished / Issues
- GNU `timeout` 命令缺失，导致 `build-verified.sh` (含 `npm test`) 无法在当前环境运行。
- `THE-LIVING-ATLAS` 目前虽然作为“总网站”形态存在，但它是通过跳转进入子目录的方式展示，这遵循了仓库不破坏已有根目录分发逻辑的规则。

### Next Actions
- 验证线上新主站的响应式布局及具体文案链接。
- 为 Mobile View 补充汉堡菜单的交互逻辑。


## 2026-07-21: Add HILDEGARD (Daughters of Time 002)

### Current Target
按 TSRat 稿件《谦卑的反叛者：宾根的希尔德加德》建立"时间的女儿 002"人物专题，与 Hypatia、Enheduanna 并列，走仓库现有 GitHub Actions Pages 部署链路，同时保留未来在 Figma 中继续编辑视觉的可能性。

### Completed
- 新建 `HILDEGARD/`：`index.html` + `assets/hildegard-site.css` + `assets/hildegard-tokens.css` + `assets/hildegard-refresh.js` + 五个独立 SVG（`glyph-viriditas / cosmic-wheel / branch / root / star`）。
- 内容严格按稿件"引子 + 八章 + 身后"结构；史实、学界解读、叙事框架、视觉隐喻分层呈现；性别观 vs 阶级观张力通过 Editorial note 保留。
- 视觉系统命名为 **Viriditas Codex**：Parchment × Viriditas Deep × Cosmic Blue × Gold Leaf 四色主轴，六种屏模板（Portal / Manuscript / Vision / Botanical / Archive / Interlude），动效遵循 Breathing + Growing + Revealing 且严格支持 `prefers-reduced-motion`。
- Figma 可编辑性：所有设计变量集中在 `assets/hildegard-tokens.css`；SVG 全部独立文件；`HILDEGARD/design/figma-handoff.md` 列出 Variables、Text Styles、Grid、SVG 清单、组件命名，与代码一一对应。
- 在 `scripts/build-github-pages.mjs` 的 `staticSites` 中注册 `HILDEGARD`（DAUGHTERS OF TIME · 002 · className `hildegard` · artLabel `002`）。
- `THE-LIVING-ATLAS/index.html` 的 07 Sites 增加 Hildegard 行（编号 `002` · Daughters of Time · ACTIVE）。
- 根 `README.md` 项目表、仓库树、Pages 部署描述、文档导航链接均补上 Hildegard。
- 项目内文档 `CONTENT.md / DESIGN.md / TECH.md / HANDOFF.md` 均按当前实际内容编写，不使用空模板。

### Verification status
- `git diff --check`: Passed
- `npm ci`: Passed
- `npm run build:pages`: Passed — `docs/HILDEGARD/` 生成，Hub 更新
- `npm run validate:pages`: Passed — Hildegard 全部本地资源引用可解析
- `npm run lint`: Not run locally (会在 CI 中随 workflow 触发)
- `npm test`: Not run locally — 本机缺 GNU `timeout`（同"The Living Atlas"记录中所述限制）；CI 将执行
- Browser check: 本地在 `python3 -m http.server 8000 --directory docs` 下以 375 / 820 / 1440 px 抽查桌面、平板与移动端布局

### Unfinished / Issues
- `TODO: needs confirmation` — 视频《谦卑的反叛者》正式发布链接（Hildegard 页脚 Sources）。
- `TODO: needs confirmation` — 是否引入 Rupertsberg Scivias 公版抄本扫描。
- `TODO: needs confirmation` — Kristin Hayter / Hildegard von Blingin' 官方链接是否作为外链嵌入。
- Workflow 目前只对 Hypatia 有额外 smoke check；Hildegard 未设置强制文件级 grep check（如需增加，请同步 `.github/workflows/publish-static-mirror.yml` 与 `HILDEGARD/TECH.md`）。

### Do not change without confirmation
- 稿件叙事骨架与"性别观 vs 阶级观"张力段落（观点改变类）。
- `HILDEGARD/` 目录名与 slug 大小写。
- Living Atlas 中 `002 · HILDEGARD` 的编号与位置。
- Viriditas Codex 主色轴与面积原则。
- 现有 `staticSites` 中其它站点的 slug、metadata、顺序。

### Next Actions
- 由创作者填入视频与外链后清除页脚 TODO。
- 若要在 Figma 中同步视觉源，按 `HILDEGARD/design/figma-handoff.md` 建立 Variables 与 SVG 组件。
- 若未来切换独立域名（例如 `hildegard.tsrat.com`），只需修改 `HILDEGARD/index.html` 中的 `canonical` 与 `og:url`；相对路径已保证整目录可迁移。
