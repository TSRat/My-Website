# Melromarc Sisters handoff

- Last updated: 2026-07-19
- Project: Melromarc 姐妹故事
- Current branch: `agent/document-and-validate-sites`
- Latest relevant commit: `fc3e420` — `Refresh Melromarc Sisters stylesheet reference`

## Current goal

保存并组织 Malty 与 Melty 的多重故事，让姐妹关系、责任、边界、尊严和女性主义批评在不同 AU 中持续成立，而不是寻找唯一结局。

## Current state

- 当前 artifact 可直接从 `MELROMARC-SISTERS/index.html` 打开和部署。
- 收录 13 条主要故事线。
- 按 5 个“Malty 第一次改变时点”分类。
- 页面包含故事搜索、筛选、随机打开、收藏、reader modal、命运分支、改写原则和图像书架。
- 图像书架有 3 张 Anime 参考和 15 张故事插图。
- 完整未编译源码位置无法从仓库确认。

## Completed

- 13 条故事的摘要、三段结构、问题、母题与引文。
- 5 个第一次改变时点的命运分支图。
- “理解不等于开脱；原谅不等于遗忘”宣言。
- 对原作男性受害—复仇、奴役和性化羞辱结构的批评。
- 两个非协商基础：姐妹关系不能是 Nothing Special；厌女羞辱不能无批判描写。
- 搜索、筛选、localStorage 收藏和 modal reader。
- 18 张图像及其说明与来源入口。
- 项目级内容、设计、技术和交接文档。

## In progress

- 项目接管文档位于当前 PR branch；故事内容、UI 和 active bundles 没有改动。
- 页面保留“下一张故事插图”占位，但仓库没有可确认的下一张具体图片或未完成故事。

## Known issues

- 全部 5 个现有 remote branches 均没有完整上游 React/Vinext 源码；仓库外位置仍待确认。
- 内容同时存在于预渲染 HTML 和 active minified bundle，直接手工修改容易失配。
- 目录保留多个旧 bundle，删除或回滚策略未确认。
- 没有项目专用 test 或 build script。
- `originalUrl` 中的 ChatGPT 对话链接长期可用性未在仓库内验证。

## Important decisions

- 多条 AU 彼此矛盾是项目结构，不是 continuity bug。
- 责任不通过一次牺牲自动清零。
- 恢复本名和尊严不等于无罪。
- Melty 必须拥有愤怒、拒绝和设定边界的能力。
- Malty 的改变不要求她失去虚荣、骄傲或锋利性格。
- 姐妹关系必须是两人人生的因果核心。
- 原作厌女羞辱批评是项目立场，不是可删的免责声明。
- 公开 URL 保持 `/My-Website/MELROMARC-SISTERS/`。

## Do not change without confirmation

- 两个故事基础
- 13 条故事的第一次改变分类
- 原作批评章节
- 角色本名和对羞辱性改名的批判
- Non-commercial fan archive 定位
- 红/蓝双轴、暗色王室档案和命运分支结构
- active bundle 引用、hash 文件名和 hydration graph
- 旧 bundle 删除
- 公开 URL

## Relevant files

- `MELROMARC-SISTERS/index.html`：预渲染入口和 RSC metadata
- `MELROMARC-SISTERS/assets/page-Wf3IdOaW.js`：active 页面数据与逻辑
- `MELROMARC-SISTERS/assets/index-CpUB6AfA.css`：active 样式
- `MELROMARC-SISTERS/assets/index-moQLGS8S.js`：active client entry
- `MELROMARC-SISTERS/images/`：角色图和 gallery
- `scripts/build-github-pages.mjs`：Pages 复制逻辑

## How to run

```bash
npm run build:pages
python3 -m http.server 8000 --directory docs
```

然后访问 `http://localhost:8000/MELROMARC-SISTERS/`。

## Verification status

- Pages build: Passed — `npm run build:pages`
- Pages asset validation: Passed — `npm run validate:pages`
- Project rebuild: Not available; upstream source/build command unknown
- Tests: No project-specific test
- Typecheck: Not applicable to confirmed current artifact form
- Lint: Root lint explicitly ignores this deployed directory
- Artifact copy: Passed — `MELROMARC-SISTERS/` and `docs/MELROMARC-SISTERS/` are byte-identical
- Browser check: Not run；本项目页面、UI 与资源未改动
- Deployment: Not run；PR branch 不触发 Pages workflow

## Next recommended tasks

1. 确认完整未编译源码是否存在于仓库外；若存在，把其权威位置写入文档。
2. 在有源码后建立可重复 build，并验证预渲染 HTML 与 client bundle 一致。
3. 由创作者确认旧 bundle 是否保留作为回滚材料。
4. 确认下一张故事插图或移除“即将增加”的时间暗示，但不要在无内容时自行生成。

## Git state

- Branch: `agent/document-and-validate-sites`
- Latest repository commit: `edcc2b7`
- Working tree clean at audit start: Yes
- Working tree clean at handoff: Yes
- Uncommitted changes: None
