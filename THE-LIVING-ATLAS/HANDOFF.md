# Handoff: The Living Atlas

## 当前目标
完成 TSRat 网站生态的“主站 (Hub)”，名为 **The Living Atlas (一个人的开放档案馆)**。
设计和逻辑完全根据《个人网页思路.pdf》在前端进行代码还原。

## 已完成内容
- `THE-LIVING-ATLAS/` 静态网页搭建完成（HTML + Vanilla CSS）。
- 完全还原了 PDF 中规定的 Ivory (象牙白), Stone (石灰), Cobalt Blue (钴蓝) 颜色系统。
- 完成了 12-column 网格系统及不同字体的层级系统，包括 Noto Serif SC, Inter, Fira Code。
- 完成了 01 Hero、02 Now、03 Featured World、04 Worlds、05 Knowledge、07 Sites、08 Latest 等核心信息架构模块。
- 根目录 `scripts/build-github-pages.mjs` 中的 `staticSites` 已添加该目录，并已在 GitHub Pages 构建流中生效。
- 更新了根节点 `hubPage` 的导航链接，将流量引入此新站点。

## 尚未完成内容
- [x] 768px 以下的 Mobile Navigation 已增加可键盘操作的展开式目录。
- [ ] Cinematic 和 Hover Reveal 等微动效的全面实装。
- [x] Search (⌘/Ctrl + K) 已支持当前章节与已发布站点。
- [ ] The Index (A-Z) 的主题级内容与真实目标链接仍待补齐。
- [ ] Future: 将内容管理提取为 Astro / Content Collections 或者纯静态 JSON 驱动（参见 Phase 3 规划）。

## 已知问题
- 小红书、公众号和 The Index 中的多个 `#` 链接仍是占位目标，需要创作者提供真实 URL。
- 搜索目前索引章节和已发布站点，不索引未来的文章级数据。
- 当前浏览器的全页截图会错误重复或遗漏 sticky/reveal 区域；视觉迁移应使用固定视口与分区截图。

## 下一步建议
建议创作者：
1. 确认现有的视觉尺度（尤其是 12-column 排版在超大屏幕上的表现）。
2. 将真实的历史/文章链接填入 `04 Worlds` 的 Bento-box 和 `07 Sites`。
3. （可选）为 Hover 操作注入一些基于 JavaScript 的微小动画，比如卡片边框高亮、Metadata 淡入。

## 2026-07-23: Portfolio normalization corrective batch

### 当前目标

在不改变 Living Atlas 编辑档案视觉身份的前提下，修复基线审计确认的移动端溢出、缺失移动导航和无效搜索控件。

### 已完成

- 新增 `TECH.md`，明确静态源码、Pages 复制关系、视觉契约和验证范围。
- 新增共享 `atlas.js`，让中英文页面共同使用轮播、移动目录和搜索行为。
- 新增跳到主要内容链接、可见键盘焦点、原生 `dialog` 搜索和移动 `details` 目录。
- 修复导航中指向不存在 `#works` 的链接，改为现有 `#sites`。
- 移动端 monumental title 缩放至可完整显示，featured inline grid 改为单列，World cards 改为单列。
- 轮播保留手动 PREV/NEXT；在 `prefers-reduced-motion` 下停止自动播放。
- CSS 与 JavaScript 使用版本参数，避免旧浏览器缓存继续加载无效搜索或旧响应式规则。

### 视觉与交互验证

- Baseline: 2026-07-23 本地 Pages artifact；1440×900、1024×768、390×844。
- Figma: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- Mobile overflow: `scrollWidth 453` → `375`（viewport content width `375`），横向溢出清除。
- Desktop / tablet: 人工并排检查未发现非预期的 resting-state 变化。
- Mobile: 标题重新排版和新增目录是已记录的响应式 / 可访问性修正。
- Menu: open state verified.
- Search: button、`Command/Control + K`、结果筛选、中英文状态和关闭均验证。
- Carousel: NEXT 仍从 HYPATIA 前进到 HILDEGARD。
- Full-page visual gate: blocked by browser screenshot composition; section/fixed-viewport evidence is valid.

### 运行命令与结果

- `node --check THE-LIVING-ATLAS/atlas.js`: Passed.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 347 local references across 39 HTML/CSS files.
- `npm run lint`: Passed — 0 errors, 24 existing warnings outside this corrective batch.
- `npm run build`: Passed after the wrapper gained macOS Homebrew `gtimeout` support.
- `vinext build` plus `scripts/validate-artifact.sh`: Passed through the standard build command.
- `npm test`: Passed — build plus rendered HTML test 1/1.

### Git 状态

- Branch: `codex/normalize-web-portfolio`
- Base commit: `3a91388`
- GitHub CLI: `gh 2.96.0`, authenticated as `TSRat`.
- Commit / push / PR: pending at this handoff update.

## 2026-07-24: Content registry and Web Core v1

### 当前目标

把创作者确认的信息架构落实为可维护系统：Worlds 对应知识库、虚构小说、自媒体创作和交互项目；Knowledge 只负责知识库细分；Sites 只显示已发布网站；Now、Latest 与 Index 从同一数据源生成。

### 已完成

- 英文入口的 `lang` 从 `zh-CN` 修正为 `en`。
- 主导航用 `Index` 取代含义不清的 `Archive`，并保留 `#archive` 兼容锚点。
- 小红书、公众号和原 Index 中的 `href="#"` 已全部移除；未知目标改为不可点击的 planned 状态。
- 新增 `content-registry.js`，统一维护双语 Worlds、Knowledge、Now、Sites、Latest 数据。
- 新增 `web-core.js`，负责本地化、发布状态过滤、日期排序、DOM 渲染、Index、Search 和移动目录状态。
- Sites 自动过滤 `status: published` 且有真实 URL 的记录，当前显示 `005`。
- Knowledge 不再显示未确认的 128 / 74 / 42，改为 `Mapping / 整理中`。
- Now 自动使用 focus 记录的最新日期生成月份；Latest 自动按 ISO 日期倒序。
- Index 只收录当前真实可达的章节、World、Knowledge 分类和已发布网站。
- 移动目录展开时给正文让出空间；浏览器测得 `panelBottom 419.98 < titleTop 568.58`，不再覆盖标题。
- 新增内容系统测试，并让 `npm test` 运行所有 `tests/*.test.mjs`。
- 组合级参考文档：`web/content-system.md`。
- Figma 新增可编辑画面 `TSRat Content System · v1`（node `18:2`）和组件集 `Shared / Content Status`（node `18:47`）。

### 重要决定

- 不迁移 React、Astro 或 CMS；当前静态 ES Modules 足以支持 Tier B。
- “自动生成”指从一个明确注册表渲染、过滤和排序，不从 GitHub API 猜测内容。
- 不显示无数据依据的统计数字。
- 共享内容语义、状态、测试和交互契约，不共享各站点的视觉身份。
- `web-core.js` 当前随 Living Atlas 发布。把它提升为仓库级共享 runtime 需要仓库所有者单独授权修改受保护的 Pages build map。

### 验证

- `node --check`（registry、Web Core、adapter）：Passed。
- `npm run build:pages`: Passed。
- `npm run validate:pages`: Passed — 337 local references across 41 HTML/CSS files。
- `node --test tests/living-atlas-content-system.test.mjs`: Passed — 4/4。
- `npm run lint`: Passed — 0 errors；24 个既有 warnings。
- `npm run build`: Passed。
- `npm test`: Passed — 5/5。
- Browser QA: 英文 / 中文、桌面 / 移动、5 个 published sites、15 个 Index links、0 个 fake links、Search `Hypatia` 1 result、mobile menu、carousel、console health 均通过。
- Figma render QA: Passed — 信息架构、registry contract、四种 content states 与三档采用路径均可见。

### 已知问题与下一步

- 小红书和公众号的真实 URL 仍待创作者提供。
- Knowledge 文章级记录、真实数量和分类目标页尚未建立。
- 当前没有 analytics provider；按创作者要求继续保持 no-op。
- Preview / PR 尚未创建。

### Git 状态

- Branch: `codex/living-atlas-content-system`
- Base commit: `999e302`
- Existing user-owned root `HANDOFF.md` changes and untracked `.agents/skills/build-new-site-to-pr/` remain preserved.
- Commit / push / PR: not performed.

## 2026-07-24: Hypatia responsive transparency fix

### 当前目标

修复 Living Atlas Featured World 中 Hypatia 人物图在移动端和平板端可能出现不透明浅色矩形的问题，同时保持桌面端既有构图和纸本融合效果。

### 根因与实现

- 旧的 `assets/hypatia-sketch.jpg` 实际是没有 Alpha 通道的 WebP；页面只靠 `mix-blend-mode: multiply` 产生“看起来透明”的效果，设备合成差异会让移动端和平板端重新显示原图底色。
- 新增 `assets/hypatia-sketch-transparent.webp`。它由现有 Hypatia 素描作为编辑目标，经内置图像编辑生成纯色键控中间图，再由本地 chroma-key 工具提取为 RGBA PNG，最后转为保留 Alpha 的高质量 WebP。
- 英文 `index.html` 与中文 `zh.html` 均改为引用真实透明 WebP；保留原有尺寸、`object-fit`、`multiply` 和黑白对比滤镜，所以桌面端视觉语言不变。

### 验证

- Alpha: Passed — WebP 为 `1094 × 1437` 且带 Alpha；原始提取结果中 818,683 / 1,572,078 像素完全透明，6,005 像素部分透明。
- Asset weight: `298 KB`，较 2.0 MB 的无损中间 PNG 减少约 85%，更适合移动端加载。
- Browser: Passed — 英文 `1440 × 900`、`1024 × 768`、`390 × 844`；中文 `390 × 844` 分区截图均显示人物背景与 Ivory 页面连续，无浅色矩形。
- Responsive: Passed — tablet `scrollWidth 1009 ≤ innerWidth 1024`；mobile content `scrollWidth 375 ≤ innerWidth 390`。
- Console: Passed — 中文移动端 0 errors / warnings。
- Pages build and asset validation: Passed after asset replacement.
- Application build: Passed — standard bounded Vinext build and artifact validation.
- Tests: Passed — `npm test`, 6 / 6；新增回归检查同时验证中英文引用透明 WebP，并确认文件包含 WebP `ALPH` chunk。
- Lint: Passed with 0 errors and 24 existing warnings outside this change.

### 修改文件

- `THE-LIVING-ATLAS/assets/hypatia-sketch-transparent.webp`
- `THE-LIVING-ATLAS/index.html`
- `THE-LIVING-ATLAS/zh.html`
- `THE-LIVING-ATLAS/DESIGN.md`
- `THE-LIVING-ATLAS/TECH.md`
- `THE-LIVING-ATLAS/HANDOFF.md`

### 尚未完成

- 旧的 `assets/hypatia-sketch.jpg` 继续保留为原始 / 回滚材料，未删除。
- 本修复完成时尚未 commit、push、创建 Preview 或 PR；后续交付状态见下一节。

## 2026-07-24: Review delivery

- Branch: `codex/living-atlas-content-system`
- Commit: `d85c78c` — `build living atlas content system and review workflow`
- Unmerged Preview: <https://raw.githack.com/TSRat/My-Website/codex/living-atlas-content-system/THE-LIVING-ATLAS/index.html>
- Chinese Preview: <https://raw.githack.com/TSRat/My-Website/codex/living-atlas-content-system/THE-LIVING-ATLAS/zh.html>
- Draft PR: <https://github.com/TSRat/My-Website/pull/13>
- Remote Preview QA: Passed — 4 Worlds、5 published Sites、15 Index links、透明 Hypatia 资源与中英文模块均加载；控制台 0 errors / warnings。
- Merge: not performed; creator review required.

## 2026-07-24: Hypatia portrait edge refinement

### 当前目标

消除 Hypatia 透明人物图过硬的剪贴边缘，同时保留真实 Alpha、纸本线稿质感和 Featured World 的现有构图。

### 实现与决定

- 不重新生成或改画人物；沿用此前内置图像编辑得到的纯色键控中间图，仅重算透明蒙版。
- Alpha 蒙版使用 1px 收边和 0.75px 羽化，将部分透明像素从 6,005 增至 20,094，降低发丝、肩颈和衣缘的锯齿与硬切感。
- 两个语言页面改用共享 `.hypatia-portrait` 类。明确保留 `mix-blend-mode: multiply`，并将对比度从 `1.5` 降至 `1.32`、亮度从 `1.1` 降至 `1.06`、整体透明度设为 `0.96`，让线稿更自然地融入 Ivory 底色。
- 继续使用同一资产 URL 和同一人物构图，避免新增内容漂移或响应式差异。

### 修改文件

- `THE-LIVING-ATLAS/assets/hypatia-sketch-transparent.webp`
- `THE-LIVING-ATLAS/index.html`
- `THE-LIVING-ATLAS/zh.html`
- `THE-LIVING-ATLAS/style.css`
- `THE-LIVING-ATLAS/DESIGN.md`
- `THE-LIVING-ATLAS/TECH.md`
- `THE-LIVING-ATLAS/HANDOFF.md`
- `tests/living-atlas-content-system.test.mjs`

### 验证与交付

- Alpha: Passed — `1094 × 1437` WebP 保留 Alpha；20,094 个部分透明像素形成柔和边缘。
- Browser: Passed — 英文 `1440 × 900`、`1024 × 768`、`390 × 844` 与中文 `390 × 844` 都显示 Ivory 底色连续、人物边缘自然、`multiply` 生效。
- Responsive: Passed — tablet `scrollWidth 1009 ≤ innerWidth 1024`；mobile `scrollWidth 375 ≤ innerWidth 390`。
- Console: Passed — 中英文手机端 0 errors / warnings。
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 337 references across 41 HTML/CSS files.
- `npm run build`: Passed.
- `npm test`: Passed — 6 / 6.
- `npm run lint`: Passed with 0 errors and 24 existing warnings outside this change.
- Pending at handoff update time: commit, push, PR readiness, and the creator's explicitly authorized merge.
