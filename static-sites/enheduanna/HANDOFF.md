# Enheduanna handoff

- Last updated: 2026-07-19
- Project: 恩赫杜安娜：第一人
- Current branch: `agent/document-and-validate-sites`
- Latest source commit: `855d4f5` — `Standardize Enheduanna bilingual quotations`
- Latest mirror commit: `f414e65` — `Publish bilingual Enheduanna quotations`

## Current goal

用可读、来源明确的长篇人物专题解释恩赫杜安娜作为公主、最高女祭司、作者与先驱的多重身份，同时保留“第一位作者”命题中的证据边界。

## Current state

- 可读源码位于 `static-sites/enheduanna/`。
- 当前 Pages 输入镜像位于 `ENHEDUANNA/`。
- 页面包含从两河世界到来源列表的 14 个主要阅读段落。
- `sources` 数组收录 17 项来源。
- 页面有 4 组作品、42 首《神庙赞歌》的背景、流放叙事、作者争议和现代再发现。
- 当前没有专用 npm script 从源码重建发布镜像。

## Completed

- 人物、时代、乌尔神庙制度和美索不达米亚背景。
- 圆盘 B16665 的文物说明与证据边界。
- 《神庙赞歌》到《伊南娜的晋升》的叙事过渡。
- Lugal-Ane、流放、南纳沉默与转向伊南娜。
- 第一人称、创作分娩隐喻和协作作者观。
- 归来、遗忘、考古再发现、作品归属争议。
- 中英文引文、外部来源、视频入口和 NotebookLM 入口。
- 项目级内容、设计、技术和交接文档。

## In progress

- 项目接管文档位于当前 PR branch；Enheduanna 内容与发布镜像没有改动。
- 仓库未显示正在写作一半的新章节。

## Known issues

- 源码与发布镜像之间缺少可重复的自动构建流程；全部 5 个现有 remote branches 均没有项目级 `package.json`、Vite config 或原始脚手架，不能安全猜写重建命令。
- 当前章节编号阅读顺序包含 `07 → 08 → 06 → 09`，是否调整尚未由创作者确认。
- 部分历史判断明确标为重建或争议；未来修改时容易被误删限定语。
- 现代 Ishtar 图是动漫启发的 AI 同人图，必须持续保留非历史复原说明。

## Important decisions

- “第一位作者”既是结论也是问题。
- 神庙必须被呈现为宗教、经济和行政机构。
- 圆盘证明人物和职位，不单独证明全部作品归属。
- 《神庙赞歌》的“她缺席”必须先于流放中的第一人称“我”。
- 结尾强调一个声音由许多沉默者创造和保存。
- 公开 URL 保持 `/My-Website/ENHEDUANNA/`。

## Do not change without confirmation

- 核心称呼和学术限定语
- 双语引文及 153/154 行差异说明
- Lugal-Ane 暴力段落的译释边界
- Inanna/Ishtar 的历史融合解释
- 现代视觉与历史证据的标签
- 章节顺序和编号
- 左侧 spine、蓝红金配色和展览图录风格
- 源码/镜像目录关系与公开 URL

## Relevant files

- `static-sites/enheduanna/page.tsx`：内容与页面结构
- `static-sites/enheduanna/globals.css`：视觉和响应式
- `static-sites/enheduanna/public/`：源资源
- `ENHEDUANNA/index.html`：当前发布入口
- `ENHEDUANNA/assets/`：当前编译资源
- `scripts/build-github-pages.mjs`：Pages 复制逻辑

## How to run

当前没有确认的项目专用开发命令。可生成 Pages artifact：

```bash
npm run build:pages
```

不要把根 `npm run dev` 或 `npm run build` 误报为 Enheduanna 专用重建命令。

## Verification status

- Pages build: Passed — `npm run build:pages`
- Pages asset validation: Passed — `npm run validate:pages`
- Source rebuild: Not available; command needs confirmation
- Tests: No project-specific test
- Typecheck: No dedicated project script
- Lint: Passed with 8 existing `@next/next/no-img-element` warnings in `page.tsx`; this does not establish source/mirror equivalence
- Artifact copy: Passed — `ENHEDUANNA/` and `docs/ENHEDUANNA/` are byte-identical
- Browser check: Not run；本项目页面与资源未改动
- Deployment: Not run；PR branch 不触发 Pages workflow

## Next recommended tasks

1. 向创作者取得仓库外的原始 Enheduanna 项目脚手架和 Vite build command；如果已经丢失，需要先明确授权重建。
2. 材料确认后，增加从 `static-sites/enheduanna/` 到 `ENHEDUANNA/` 的可重复构建与最小 smoke test。
3. 由创作者决定章节 `06` 是否保留在当前阅读位置。

## Git state

- Branch: `agent/document-and-validate-sites`
- Latest repository commit: `edcc2b7`
- Working tree clean at audit start: Yes
- Working tree clean at handoff: Yes
- Uncommitted changes: None

## 2026-07-25 · Six-stage migration readiness

### Current target

Prepare every safe stage of the shared migration workflow without modifying
the readable application source or compiled Pages mirror under an
unreproducible build.

### Completed

- Product / UX: preserved the complete long-form journey and placed the future
  Data entry after Sources.
- Visual: specified a site-native archive/exhibition Data appendix.
- Figma: added editable desktop/mobile and Data component references at
  [node 27:2](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2).
- Prototype / QA: defined deterministic navigation, source, video, NotebookLM,
  and Data states plus Antigravity viewport scope.
- Data / analytics: added a non-deployed provider-neutral proposal with strict
  privacy gates.
- Added a readiness test for the explicit Stage 5 blocker and source/mirror
  public-asset parity.

### Blocked

- Production implementation remains blocked because no confirmed command
  rebuilds `ENHEDUANNA/` from `static-sites/enheduanna/`.
- `ENHEDUANNA/` and its hashed bundles were not edited.
- The current public page remains the review baseline, not a migrated preview.

### Next action

Provide the original scaffold or explicitly authorize reconstruction. See
`web/sites/enheduanna/six-stage-handoff.md` for acceptance criteria.

### Verification

- `git diff --check`: Passed.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 355 local references across 43 HTML/CSS
  files.
- `npm test`: Passed — 11/11, including both readiness tests.
- `npm run lint`: 0 errors; 24 pre-existing warnings.
- In-app browser baseline: 0 broken images; 390-pixel viewport has no
  horizontal overflow; 1024-pixel viewport confirms the pre-existing 35-pixel
  horizontal overflow.
- Source rebuild and renderer equivalence: Not run because no command exists.
