# IVORY ARCHIVE handoff

## 2026-07-29 · Four-part zero-knowledge rewrite

### Current target

按创作者批准的逐屏大纲，把全部现有报道统一为“背景 / 事件 / 细节 /
分析”四段式。读者默认从未听说过相关人物、机构、作品或专业领域；
标题与导语不算正文已经介绍过，正文第一次出现时仍需写出完整名称和
必要背景。常识性的“报道不代表权威立场”不再逐篇重复。

### Completed

- 为 15 期、75 则报道逐篇新增独立 `background`，先解释人物是谁、
  机构做什么、概念是什么意思，避免以“他 / 她 / 其 / 这位 / 该”开头。
- React 与 Pages 详情页统一为“背景 / 事件 / 细节 / 分析”；原有事实、
  日期、图片与来源 URL 保留。
- 标题下方的原文入口已删除；每则只在“分析”正文之后保留一个可点击
  原文链接，链接名称由来源机构与报道标题组成。
- Brassaï 条目补充本名、生卒年、迁居巴黎、摄影集《Paris de nuit》
  及夜间摄影特点，并把标题改为更能概括人物与事件的名称。
- 首页、归档搜索、页脚说明、静态渲染器、测试和产品 / 视觉 / 排版 /
  Figma 交接文档已同步。
- Figma 文件 `ey07N2cwgxCtNUjvm6Ixgt` 的首页 `46:50`、桌面期刊
  `46:51` 和移动阅读流 `46:52` 已原位更新为四段式；唯一来源入口位于
  Analysis 之后。

### Verification

- `npm run build:pages`: passed.
- `npm run validate:pages`: passed, 654 local references across 75 HTML/CSS
  files.
- `npm run build:ivory`: passed, Sites artifact valid.
- `node --test tests/ivory-renderer-parity.test.mjs`: passed, 3/3.
- `npm run lint`: 0 errors; 24 unchanged warnings from Enheduanna/Hypatia.
- `git diff --check`: passed.
- Content audit: 75/75 stories have non-empty backgrounds; none begins with a
  contextless Chinese pronoun.
- Browser smoke: 1440×900, 1024×768, 768×1024, 390×844 and 320×720 all show
  five stories with exactly four sections and one external source link per
  story; no header source link or horizontal overflow.
- Figma desktop issue, mobile issue and homepage screenshots inspected.
- Antigravity extended route, interaction, accessibility and visual-regression
  QA: pending.

### Modified files

- Content and schema: `briefings.ts`, `CONTENT.md`.
- React UI and search: issue route, homepage, archive explorer and site shell.
- Static Pages renderer: `scripts/build-github-pages.mjs`.
- Verification: `tests/ivory-renderer-parity.test.mjs`.
- Product and design records: `DESIGN.md`, `TECH.md` and
  `web/sites/ivory-archive/`.

### Delivery state

- Branch: `codex/ivory-beginner-rebuild`.
- Latest commit: this four-part implementation and handoff update.
- Pull Request: <https://github.com/TSRat/My-Website/pull/31>.
- Owner-only preview:
  <https://tsrat-ivory-migration-preview.tsrat.chatgpt.site>.
- The preview is redeployed from this branch head and smoke-checked before
  final handoff.
- Merge remains unauthorized and has not been performed.
- Worktree is clean after the delivery commit.

## 2026-07-29 · Three-section beginner rewrite

### Current target

根据创作者反馈，删除把日刊写成证据审查或批判性思维练习的结构，让每篇只保留三段普通语言说明，并让来源链接用内容名称直接打开。

### Completed

- 全部 75 篇移除 `analysis`、`reflection`、`evidenceBoundary`、`sourceType` 和 `informationForm` 字段。
- React 与 Pages 详情页统一为“发生了什么 / 这件事为什么重要 / 记住这几个细节”。
- 删除页面上的“先补上背景”“证据与边界”“来源不能单独证明什么”“分析”“不是来源中的直接事实”“反思与练习”和独立来源登记。
- 每则来源链接改为“查看原文：<故事标题>”，直接指向原 `sourceUrl`；机构和日期作为辅助文字保留，不显示裸网址。
- 重写 Goldsworthy《Red Flags》示例，明确说明 2026 年是 1776 年《独立宣言》通过 250 周年，并用普通语言解释土壤旗帜。
- 进一步重写梦境研究、警务性别判断、O’Keeffe、彗星分类、长期新冠、Linder、Nilsson、西非洪水、贝叶挂毯和 TMS 等过度抽象或免责声明式的重要性说明。
- Figma 桌面 `46:51` 与移动 `46:52` 原位更新为三段式；旧证据、分析、反思 frame 已隐藏。

### Verification

- `npm run build:pages`: passed.
- `npm run validate:pages`: passed, 654 local references across 75 HTML/CSS files.
- `npm run build:ivory`: passed, Sites artifact valid.
- `node --test tests/ivory-renderer-parity.test.mjs`: passed, 3/3.
- `npm run lint`: 0 errors; 24 unchanged warnings from Enheduanna/Hypatia.
- `git diff --check`: passed.
- Browser at 390×844: 5 stories; each story has exactly 3 sections; 10 descriptive source links; no horizontal overflow; removed disclaimer copy absent.
- Figma desktop and 390 px mobile screenshots inspected; three-section order is visible.

### Delivery state

- Branch: `codex/ivory-beginner-rebuild`.
- Implementation commit: `d0ed36f`.
- Pull Request: <https://github.com/TSRat/My-Website/pull/31>.
- Owner-only preview:
  <https://tsrat-ivory-migration-preview.tsrat.chatgpt.site>.
- Preview version 5 was built from `d0ed36f` and deployed successfully.
- Live smoke on issue 14: 5 stories; every story has exactly 3 sections; 10
  descriptive source links; Goldsworthy source URL and 250th-anniversary
  explanation present; removed disclaimer copy absent; all lazy images loaded
  after scrolling.
- Merge remains unauthorized and has not been performed.

## 2026-07-28 · Beginner-first complete archive rebuild

### Current target

重写全部现有期刊，让从未听说过事件、也没有学过相关领域的读者能按“事情、背景、原因、证据、分析、反思”完全理解，并保留每则原始新闻或原始资料链接。

### Completed

- 第 01—15 期全部改为更具代表性的主题名称；仍为 15 期、75 则，不虚构不存在的第 16 期。
- 75 则标题改为先说清具体事件；原有事实、限定语、来源、日期、图片和 credit 保留。
- 每期新增学习目标、五则连接和三分钟摘要。
- 每则新增 `whyItMatters`、`analysis`、`reflection`、`evidenceBoundary`、`sourceType` 与 `informationForm`。
- React 与 Pages 静态渲染器同步为固定初学者顺序，并提供时间线、对照表、过程、关系和证据卡。
- 原始来源链接同时位于故事导语后与来源登记，`source_opened` 保持 provider-neutral。
- Figma 新增 `06 · Beginner Reading System`：桌面首页 `46:50`、桌面期刊/故事 `46:51`、390px 移动流 `46:52`。

### Important decisions

- 内容属于结构调整与表达优化；不删除女性主义立场、制度分析、争议、限定语或来源。
- `analysis` 明确标为编辑解释；`evidenceBoundary` 明确来源不能单独证明什么。
- 关键背景不折叠；移动端阅读顺序固定。
- 旧 `IVORY-ARCHIVE/` 快照仍不是来源，本次不手改或删除。

### Verification

- `npm run build:pages`: passed.
- `npm run validate:pages`: passed, 654 local references across 75 HTML/CSS files.
- `npm run build:ivory`: passed, including Sites artifact validation.
- `node --test tests/ivory-renderer-parity.test.mjs`: passed, 3/3.
- `npm run lint`: 0 errors; 24 warnings belong to unchanged Enheduanna/Hypatia files.
- `git diff --check`: passed.
- Figma screenshots: desktop home, corrected desktop issue, and 390px mobile inspected.
- Browser layout gate: 1440×900, 1024×768, 768×1024, 390×844 and 320×568 inspected for home/detail containment; source entry and narrow reading flow visible.
- Source audit: all 75 source URLs remain present; 58 responded successfully in the automated pass and 17 returned access-controlled 401/403 responses rather than confirmed dead links.
- Antigravity extended route/interaction/accessibility comparison: pending.

### Modified areas

- content and schema: `briefings.ts`, `CONTENT.md`;
- React renderer: home, archive explorer, issue route, shell, stylesheet;
- Pages renderer: generator and stylesheet;
- privacy-safe analytics manifest/adapter and renderer parity tests;
- product, screen outline, visual, typography, and Figma handoff documents.

### Current branch

- `codex/ivory-beginner-rebuild`
- base: `3e4e753aad62920453398d41a766f9e625bd4d2e`
- implementation commit: `87dfcf5`
- merge: not authorized and not performed.

### Delivery state

- Pull Request: <https://github.com/TSRat/My-Website/pull/31>
- Owner-only live preview:
  <https://tsrat-ivory-migration-preview.tsrat.chatgpt.site>
- Preview version 3 was built from implementation commit `87dfcf5` and passed a
  live smoke check: 5 stories, 5 primary source links, 5 source registers,
  fixed six-step order, and 0 broken images in the latest issue.
- Figma:
  [desktop home](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=46-50),
  [desktop issue/story](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=46-51),
  [mobile flow](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=46-52).

## 2026-07-25 · Unified maintenance package

- Authoritative maintenance root: `sites/ivory-archive/`.
- `site.config.json` records the dual-renderer contract, Figma source, public
  path, manifest, and build command.
- Root `app/` now contains thin Vinext route adapters; `public/` remains the
  framework resource root and Pages remain generated from `briefings.ts`.
- No visual, content, public-route, or analytics-provider change was intended.

- Last updated: 2026-07-25
- Project: IVORY ARCHIVE
- Current branch: `codex/remaining-sites-six-stage-migration`
- Base commit: `2d36674` — `publish: IVORY ARCHIVE issue 11 for 2026-07-24`

## 2026-07-25 six-stage migration

### Current target

在不改变 IVORY 编辑身份和内容立场的前提下，完成 Product / UX、视觉保护、Figma、交互、生产交付和 Data / Analytics 六阶段迁移。

### Completed

- 保留现有五则日刊、搜索、筛选、日期路由和双渲染结构。
- 动态版与 Pages 版均加入 Data 入口与同一隐私边界。
- 新增机器可读 manifest 和 provider-neutral analytics adapter。
- 事件只覆盖页面、搜索长度区间、筛选、日刊打开和 Data 打开；无网络、cookie、持久存储、身份或原始搜索文本。
- 新增内容 schema、图片、路由、隐私和 dynamic / Pages parity 测试。
- Figma 新增可编辑桌面 / 移动 Data 状态与可复用组件，节点 `27:2`。
- Codex 本地桌面与 390px 窄视口 smoke 通过；Antigravity extended QA pending。

### Intentional visible difference

仅新增 Header 中的 `Data` 导航项和一个延续象牙纸 / 酒红 / 森林绿语言的 Data 区块。

### Modified files

- `app/layout.tsx`
- `app/site-shell.tsx`
- `app/page.tsx`
- `app/archive-explorer.tsx`
- `app/globals.css`
- `public/ivory-site-manifest.json`
- `public/ivory-analytics.js`
- `scripts/build-github-pages.mjs`
- `scripts/github-pages-data.css`
- `tests/ivory-renderer-parity.test.mjs`
- IVORY 与组合级设计、技术、审计和交接文档

### Delivery state

- Dedicated branch: `codex/remaining-sites-six-stage-migration`.
- Implementation commit: `2da67ce`.
- Sites binding commit: `58f8df0`.
- Push: completed.
- Draft PR: <https://github.com/TSRat/My-Website/pull/15>.
- Owner-only Preview: <https://tsrat-ivory-migration-preview.tsrat.chatgpt.site>.
- Preview deployment: succeeded; public access requires creator approval.
- Merge: not authorized and not performed.

## Current goal

保持一份可持续更新、来源明确的中文思想简报，并让动态应用与 GitHub Pages 静态版都从同一组 `briefings` 数据生成内容。

## Current state

- `sites/ivory-archive/briefings.ts` 收录第 01—06 期，共 30 则故事。
- 最新一期是 2026-07-19 的第 06 期。
- 动态首页、日期详情页、搜索和筛选组件都存在。
- GitHub Pages build 会从数据源生成 IVORY 首页、详情页、图片和 legacy redirect。
- 已提交的 `IVORY-ARCHIVE/` 快照只到第 02 期，不代表当前部署数据。

## Completed

- 6 期内容数据及每期 5 则结构。
- 每则故事包含事实、重要性、创作角度、Fact File、来源与图片说明。
- 首页最新一期、历史档案和三条主题范围。
- 动态版与静态 Pages 版的搜索/筛选。
- 项目级内容、设计、技术和交接文档。

## In progress

- 项目接管文档位于当前 PR branch；IVORY 内容与 UI 没有改动。
- 没有正在编辑一半的第 07 期数据可以从仓库确认。

## Known issues

- `IVORY-ARCHIVE/` 是过期快照，可能误导接管者。
- 动态版与静态 Pages 版是两套展示实现，缺少自动一致性测试。
- `uniqueCount` 由内容数据直接提供，仓库中没有保存独立去重审计记录。
- 当前没有针对 `briefings.ts` schema、失效来源 URL 或缺图的专用测试。

## Important decisions

- 当前内容源是 `sites/ivory-archive/briefings.ts`，不是 `IVORY-ARCHIVE/index.html`。
- 每期固定 5 则，按艺术人文、社会科学、女性主义三条线索组织。
- 天文学和地理学在本站编辑分类中归入社会科学范围。
- 每则故事必须明确区分“发生了什么”“为什么重要”和“可创作角度”。
- GitHub Pages URL 保持 `/My-Website/IVORY-ARCHIVE/`。

## Do not change without confirmation

- 三条长期主题范围
- 每期 5 则的节奏
- 来源、日期、数据、图片 credit 和限定语
- `briefings` 字面量数据结构与 Pages parser 的关系
- legacy redirect
- 象牙纸、酒红、森林绿的编辑档案视觉
- 公开 URL

## Relevant files

- `sites/ivory-archive/briefings.ts`：内容数据
- `sites/ivory-archive/page.tsx`：动态首页实现
- `sites/ivory-archive/briefings/[date]/page.tsx`：动态详情实现
- `sites/ivory-archive/globals.css`：动态样式
- `app/`：Vinext 薄路由适配器
- `public/story-images/`：图片
- `scripts/build-github-pages.mjs`：静态生成
- `scripts/github-pages.css`：Pages 样式
- `scripts/github-pages.js`：Pages 交互

## How to run

```bash
npm run dev
npm run build:pages
```

## Verification status

- Pages build: Passed — `npm run build:pages`
- Pages asset validation: Passed — `npm run validate:pages`
- Application build: Passed — `npm run build`
- Tests: Passed — root `npm test`，1/1
- Typecheck: No dedicated npm script
- Lint: Passed — 0 errors；24 个 warning 均来自其他既有项目文件
- Browser check: Not run for documentation-only change
- Deployment: Not run；PR branch 不触发 Pages workflow

## Next recommended tasks

1. 为新增期刊建立轻量 schema/asset validation，检查日期、5 则数量、来源 URL 和图片存在性。
2. 确认第 07 期的选题与发布日期后，再向 `briefings` 数组顶部添加新条目。
3. 决定旧 `IVORY-ARCHIVE/` 快照是保留、明确归档，还是在单独授权的清理任务中删除。

## Git state

- Branch: `agent/document-and-validate-sites`
- Latest commit: `edcc2b7`
- Working tree clean at audit start: Yes
- Working tree clean at handoff: Yes
- Uncommitted changes: None
