# Hypatia handoff

- Last updated: 2026-07-19
- Project: 教师之死：希帕蒂娅
- Current branch: `agent/document-and-validate-sites`
- Latest site commit: `eb7fae6` — `Publish Hypatia chapter redesign and restore Pages assets`
- Latest relevant validation commit: `09924d6` — `Validate Hypatia v11 Pages assets`

## Current goal

以“教师之死”为核心重建希帕蒂娅的生命、课堂、思想、公共声望、政治性谋杀和后世记忆，并让读者能在神话、史料和持续修正之间接近人物。

## Current state

- 可直接发布的完整页面位于 `HYPATIA/index.html`。
- 当前入口使用湖蓝 `v11` 样式和 `interactive-v11` 交互脚本。
- 页面包含 `00—07` 七个主要章节加史料来源。
- 交互包括证据筛选、思想层级、三传统对比、书信和后世记忆切换。
- Pages workflow 对入口、版本标记和关键图片有专门 smoke checks。
- 完整上游 React/TSX 源码位置无法从仓库确认。

## Completed

- 亚历山大里亚与图书馆多阶段制度史。
- 学术成果的“较可靠 / 学界推断 / 存在争议”分层。
- 新柏拉图主义、基督教与 Hypatia 道路的具体比较。
- 教师事业、西涅修斯书信与公共权威。
- 412—415 权力冲突、三种谋杀史料和责任边界。
- 415 年后的制度断裂与知识传统延续。
- 六种后世面孔与“走近她”的结尾。
- 图片来源、授权和现代视觉的证据边界。
- 统一湖蓝版式、对比度修正和恢复的交互。
- 项目级内容、设计、技术和交接文档。
- 补齐 `assets/agora-hypatia-teaching.jpg`：使用现代 AI 辅助插画，并把 caption 修正为非历史现场、非电影剧照。
- 新增全站本地资源验证，并把该图片加入 Hypatia workflow 关键文件检查。

## In progress

- 文档和缺图修复位于当前 PR branch。
- 仓库没有显示正在写作一半的新章节。

## Known issues

- 全部 5 个现有 remote branches 均没有完整上游框架源码；仓库外位置仍待确认，当前维护依赖静态 HTML/CSS/JS。
- 目录中有未被入口引用的历史 bundle 和样式，删除策略未确认。
- 外部 Google Fonts 依赖可能受网络环境影响；当前有本地字体 fallback。
- Pages workflow 有 smoke checks，但没有完整无头浏览器交互测试。

## Important decisions

- 教师是理解人物的第一身份。
- 415 年不是“科学与宗教决战”或图书馆同时焚毁的单一事件。
- 西里尔的政治责任与直接下令必须分开。
- “现存学生都是基督徒”必须保留幸存偏差说明。
- 古典知识延续与 Hypatia 的具体跨宗教共同体断裂同时成立。
- 后世神话既可能遮蔽人物，也使她继续被看见和修正。
- 统一湖蓝、清晰对比度和编辑展览感是当前设计方向。

## Do not change without confirmation

- 核心“教师之死”叙事
- 所有史料层级和限定语
- 图书馆、日心说、星盘、第一位女性数学家等误解澄清
- 西里尔责任边界
- 电影剧照与 AI 图像的非史料标签
- `lake-v11` / `interactive-v11` 与 workflow 验证关系
- `/My-Website/HYPATIA/` URL
- 未引用历史文件的删除

## Relevant files

- `HYPATIA/index.html`：内容和结构
- `HYPATIA/assets/hypatia-site.css`：基础 reset/style
- `HYPATIA/assets/hypatia-v2.css`：当前主视觉
- `HYPATIA/assets/hypatia-refresh.js`：当前交互
- `HYPATIA/assets/agora-hypatia-teaching.jpg`：现代 AI 辅助教学场景视觉隐喻
- `HYPATIA/assets/`：图片和历史产物
- `.github/workflows/publish-static-mirror.yml`：Hypatia 专用 smoke checks

## How to run

```bash
npm run build:pages
npm run validate:pages
python3 -m http.server 8000 --directory docs
```

然后访问 `http://localhost:8000/HYPATIA/`。

## Verification status

- Pages build: Passed — `npm run build:pages`
- Pages asset validation: Passed — 209 个本地引用，0 个缺失
- Workflow-equivalent Hypatia checks: Passed
- Tests: No project-specific test
- Typecheck: Not applicable to confirmed current source form
- Lint: Passed with 16 existing `no-unused-expressions` warnings in old `assets/index-DJ37GHJq.js`; root lint is not a complete static-page validation
- Artifact copy: Passed — `HYPATIA/` and `docs/HYPATIA/` are byte-identical
- Browser check: Playwright library 可用但环境缺少 Chromium executable，无法完成 in-page screenshot；1600×1067 成品图已直接检查，artifact 引用与尺寸验证通过
- Deployment: Not run；PR branch 不触发 Pages workflow

## Next recommended tasks

1. 由创作者在合并前确认新的教学场景视觉隐喻符合页面语气。
2. 确认完整上游源码是否存在于仓库外。
3. 为核心交互增加轻量 Playwright 或等价 browser smoke tests，前提是不改变当前部署。
4. 由创作者确认历史 bundle/样式的保留策略，再考虑单独清理。

## Git state

- Branch: `agent/document-and-validate-sites`
- Latest repository commit: `edcc2b7`
- Working tree clean at audit start: Yes
- Working tree clean at handoff: Yes
- Uncommitted changes: None
