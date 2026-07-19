# IVORY ARCHIVE handoff

- Last updated: 2026-07-19
- Project: IVORY ARCHIVE
- Current branch: `agent/document-and-validate-sites`
- Latest relevant commit: `edcc2b7` — `Publish IVORY ARCHIVE issue 06 with editorial illustrations`

## Current goal

保持一份可持续更新、来源明确的中文思想简报，并让动态应用与 GitHub Pages 静态版都从同一组 `briefings` 数据生成内容。

## Current state

- `app/briefings.ts` 收录第 01—06 期，共 30 则故事。
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

- 当前内容源是 `app/briefings.ts`，不是 `IVORY-ARCHIVE/index.html`。
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

- `app/briefings.ts`：内容数据
- `app/page.tsx`：动态首页
- `app/briefings/[date]/page.tsx`：动态详情页
- `app/globals.css`：动态样式
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
