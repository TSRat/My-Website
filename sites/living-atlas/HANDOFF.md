# Handoff: The Living Atlas

## 2026-07-31 · 小红书入口与马琳切封面

### 当前目标

在不改变 Living Atlas 既有导航结构与站点列表样式的前提下，启用创作者
提供的小红书个人主页链接、移除公众号占位入口，并把 `07 Sites` 中的马琳切
缩略图换成 `Women Story/Malinche` 文件夹内的创作者封面。

### 已完成与重要决定

- 英文与中文页面的桌面导航、移动目录均加入同一个小红书外链；使用语义化
  `<a>`、新标签页和 `noopener noreferrer`。
- 公众号入口从桌面与移动导航中完全移除，不保留 planned 状态。
- 马琳切 Sites 卡片改用创作者文件 `封面7.png`（3840 × 2160），等比
  生成 960 × 540、约 235 KB 的 WebP，并以 URL-safe 名称
  `assets/malinche-cover-vol-1.webp` 收入权威源码；画面内容未改动。
- `content-registry.js` 继续作为 Sites 唯一数据源；封面替代文本明确它是
  创作者制作的项目封面，不把现代视觉当作历史肖像。
- Featured World 轮播仍使用透明人物图，本次没有改动轮播、其他站点卡片、
  Worlds 含混性、音频或视觉系统。
- 为 HTML 入口和 registry import 更新 cache key，避免部署后继续读取旧注册表。
- Figma `TSRat Content System · v1`（node `18:2`）仍是布局与组件来源；
  本次实现暂时覆盖其中的小红书 planned 状态与马琳切卡片媒体，未改动布局。

### 修改文件

- `sites/living-atlas/{index.html,zh.html,atlas.js,content-registry.js,CONTENT.md,TECH.md,HANDOFF.md}`
- `sites/living-atlas/assets/malinche-cover-vol-1.webp`
- `tests/living-atlas-content-system.test.mjs`
- `THE-LIVING-ATLAS/`（由 `npm run build:living-atlas` 生成）

### 工作状态与下一步

- Branch: `codex/living-atlas-social-malinche-cover`，base: `origin/main` at `4900075`。
- Delivery commit: 本节随交付 commit 一起提交；最终 hash 与 PR / Preview URL 见用户交付报告。
- 未提交修改：交付 commit 后应为零；如有变化须在最终报告中如实说明。
- Antigravity 扩展多浏览器、全路线、键盘与视觉回归 QA：Pending。

### 验证

- `node --check sites/living-atlas/{atlas.js,content-registry.js}`：Passed。
- `node --test tests/living-atlas-content-system.test.mjs`：Passed — 12/12。
- `npm run build:living-atlas`：Passed，权威源码与 `THE-LIVING-ATLAS/`
  镜像中的封面哈希一致。
- `npm run build:pages`：Passed；构建产生的两个无关 Next.js 镜像差异已
  从本分支恢复，不纳入交付。
- `npm run validate:pages`：Passed — 747 local references across 82
  HTML/CSS files。
- Local browser smoke：英文桌面 `1440 × 900` 与中文移动端 `390 × 844`
  通过；小红书链接可见，公众号文字计数为 0，WebP 为 960 × 540 且完整
  加载。桌面 `scrollWidth 1425 ≤ 1440`，移动端 `375 ≤ 390`。
- 首次隔离 worktree 构建因缺少本地 `node_modules` 未执行；随后只复用主
  工作区现有依赖（未安装、未升级）并成功重跑全部上述构建。
- Exact remote Preview 与小红书外部目标点击检查：push 后执行；结果见最终
  用户交付报告。Antigravity extended QA：Pending。

### 已知问题

- 小红书 URL 含平台提供的 `xsec_token`；已按创作者给出的完整地址保留，
  后续若平台令牌失效，需要用新的个人主页分享地址替换。

## 2026-07-29 · Featured World 人物图尺度回退

### Current target

撤销 PR #30 中把四张人物图强制撑满正方形右栏的处理，恢复克制的人物图
尺度，同时继续保持马琳切原始比例。

### Correction

- 删除 `.featured-portrait` 的 `width: 100%` 与 `aspect-ratio: 1 / 1`。
- 四张图改为自然宽高、`object-fit: contain`，桌面最大 `300px`、移动端
  最大 `240px`，不再填满整个右栏。
- 本次只修改 Living Atlas 的人物图尺寸规则、对应文档、测试与生成镜像。
- `npm run build:living-atlas` 与 10 项 Living Atlas 测试通过；
  本地浏览器中方形人物图为 `300 × 300px`，马琳切为 `216 × 300px`，
  两者均为 `aspect-ratio: auto`。
- Branch: `codex/fix-living-atlas-portrait-scale`; Antigravity extended QA
  pending.

## 2026-07-29 · Featured World 统一画框

### Current target

修复马琳切轮播图比其他三期更高的问题，同时保留透明人物图的原始比例。

### Cause and correction

- 前一版给希帕蒂娅、希尔德加德和恩赫杜安娜各自写了 `1:1` 画框，却给
  马琳切单独设置 `1065 / 1476` 纵向高度和桌面 / 移动最大高度，所以人物
  本身没有变形，轮播卡片的占位高度却不一致。
- 现在四期全部使用共享 `.featured-portrait` 方形画框；画框统一高度，
  图片内容继续 `object-fit: contain`。马琳切仍保留原始比例、透明背景和
  底部对齐，没有拉伸或裁切。

### Verification and delivery

- 桌面 `1440 × 900`：希帕蒂娅和马琳切画框均为
  `389.67 × 389.67px`。
- 移动 `390 × 844`：马琳切画框为 `335 × 335px`，页面
  `scrollWidth 375 ≤ innerWidth 390`。
- 中英文四期均使用共享 class；透明图完整加载。
- Targeted tests: passed — 13/13；Living Atlas build、Pages build、
  650-reference Pages validation 和 11-site structure validation 均通过。
- Branch: `codex/sync-malinche-series`; implementation: `333063b`;
  PR: <https://github.com/TSRat/My-Website/pull/30>.
- Exact preview:
  <https://raw.githack.com/TSRat/My-Website/333063b/THE-LIVING-ATLAS/zh.html>.
- Antigravity extended QA pending; merge not authorized.

## 2026-07-28 · La Malinche Featured World sync

### Current target

把已经发布并登记的 `时间的女儿 · 003` 真正加入首页人物轮播，同时让四个
人物专题的系列入口彼此完整可达。

### Completed

- 英文与中文 Featured World 从三张扩展到四张，顺序为
  `001 → 002 → 003 → 004`。
- 马琳切卡采用一句话：
  `她靠翻译活了下来，历史却把她翻译成了背叛。`
- 直接复用 `LA-MALINCHE/assets/malinche-cutout.png`，没有复制视频封面，
  也没有给透明人物图强制正方形比例。
- 四个专题站各自采用原有视觉语言补齐系列页脚；Living Atlas 本身的
  Ivory、Ink、Stone、Cobalt 与 12 栏结构不变。

### Responsibility and failure gate

- Primary: Creative hub; secondary: information discovery.
- Unacceptable failure: `003` 在注册表可见却无法从 Featured World 抵达，
  人物图丢失透明度或比例，或跨站导航把四个专题的视觉身份压成同一模板。

### Verification

- Targeted source tests: Passed — 18/18.
- Full repository tests after the application build: Passed — 32/32.
- Five site builds: Passed.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 650 local references across 76 HTML/CSS
  files.
- `npm run validate:sites`: Passed — 11 packages.
- `npm run lint`: Passed with 0 errors and 24 pre-existing warnings in the
  Enheduanna `<img>` elements and preserved Hypatia bundle.
- Browser basic smoke: English desktop `1440 × 900` and Chinese
  `390 × 844`; four slides, no broken image, no horizontal overflow.
- Malinche image rendered at the same `1065 / 1476` ratio on desktop and
  mobile.
- Antigravity extended cross-browser, keyboard, and visual-regression QA:
  pending.

### Modified files

- `sites/living-atlas/{index.html,zh.html,style.css,CONTENT.md,DESIGN.md,TECH.md,HANDOFF.md}`
- generated `THE-LIVING-ATLAS/` mirror
- cross-site footer sources and generated mirrors for Hypatia, Hildegard,
  La Malinche, and Enheduanna
- `tests/living-atlas-content-system.test.mjs`
- `tests/daughters-of-time-navigation.test.mjs`

### Git state

- Branch: `codex/sync-malinche-series`.
- Implementation commit: `c6de2ba4fced321ebf26fd9cd57c89616149ec0e`.
- Exact Living Atlas preview:
  <https://raw.githack.com/TSRat/My-Website/c6de2ba4fced321ebf26fd9cd57c89616149ec0e/THE-LIVING-ATLAS/zh.html>.
- Pull Request: <https://github.com/TSRat/My-Website/pull/30>.
- Merge: not authorized and not performed.

## 2026-07-25 · Unified maintenance package

- Authoritative maintenance root: `sites/living-atlas/`.
- `site.config.json` records the source entry, public path, Figma source,
  manifest, build command, staging path, and mirror policy.
- `THE-LIVING-ATLAS/` is now a generated deploy mirror; edit the site package
  and run `npm run build:living-atlas`.
- No visual, content, URL, analytics-provider, or framework change was intended.

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

## 2026-07-24: Reusable migration starter and Data entry

### 当前目标

在不改变 Living Atlas 编辑档案视觉身份的前提下，把首批实现整理为后续网站可按能力采用的 starter，并加入真实可达但不虚构内容或指标的 Data 入口。

### 已完成

- 新增 `analytics.js`：provider-neutral、默认 no-op，不发网络请求、不写 cookie / storage、不采集身份。
- Data 已进入英文 / 中文桌面导航、移动目录、自动 Index 和 Search。
- 新增可见 Data empty state，明确显示 `Provider: none`、`Storage: none`、`Identity: not collected` 与 planned 状态。
- Search、已发布站点和 Data 入口连接到受白名单限制的事件契约；原始搜索文本会被丢弃。
- `web/templates/site-starter/` 提供 manifest、registry、Data 入口、analytics adapter 和迁移清单示例；它们是复制后适配的源码，不是强迫所有站点共享视觉的 runtime。
- `web/analytics-standard.md` 定义 provider 启用门槛、候选指标和隐私边界。
- Figma 增加可编辑 `TSRat Data & Analytics · v1` 画面，记录事件契约、隐私边界和 Living Atlas Data empty state。

### 视觉与交互验证

- Baseline: deployed `main` commit `16e9706`。
- Desktop `1440 × 900`、tablet `1024 × 768`、mobile `390 × 844` 均检查。
- Home、Index、mobile menu、Search 使用 baseline / review 组合图进行人工并排审查。
- 只发现并批准了 Data 导航项、Index `D` 组、移动目录行、Search 结果和新 Data 区域；没有发现其他非预期视觉差异。
- 英中 Data、移动目录、Search → Data、响应式无横向溢出和控制台健康均通过。
- 证据与结论：`web/evidence/living-atlas-template-data/visual-regression.md`。

### 重要决定

- Data 是信息架构入口，不等于当前已经部署 analytics provider。
- 内容和真实数据未成熟时不编造 dashboard、目标值、基准或增长结论。
- 后续站点复用语义、隐私、事件、可访问性、QA 和交接模板；各站继续保留自己的视觉身份、内容模型和框架。
- 推荐迁移顺序：IVORY ARCHIVE；Hypatia / Hildegard；确认 Enheduanna 构建链后；确认 Melromarc 上游源码或重建授权后。

### 修改文件

- `THE-LIVING-ATLAS/analytics.js`
- `THE-LIVING-ATLAS/atlas.js`
- `THE-LIVING-ATLAS/web-core.js`
- `THE-LIVING-ATLAS/index.html`
- `THE-LIVING-ATLAS/zh.html`
- `THE-LIVING-ATLAS/style.css`
- `THE-LIVING-ATLAS/CONTENT.md`
- `THE-LIVING-ATLAS/DESIGN.md`
- `THE-LIVING-ATLAS/TECH.md`
- `THE-LIVING-ATLAS/HANDOFF.md`
- `tests/living-atlas-content-system.test.mjs`
- `web/templates/site-starter/`
- `web/analytics-standard.md`
- `web/content-system.md`
- `web/platform-standard.md`
- `web/portfolio-audit.md`
- `web/evidence/living-atlas-template-data/`
- `README.md`
- `TECH.md`
- `HANDOFF.md`

### 验证

- `node --check`: Passed（Living Atlas 和 starter JavaScript）。
- `node --test tests/living-atlas-content-system.test.mjs`: Passed — 7 / 7。
- `npm run build:pages`: Passed。
- `npm run validate:pages`: Passed — 337 references across 41 HTML/CSS files。
- `npm run build`: Passed。
- `npm test`: Passed — 8 / 8。
- `npm run lint`: Passed — 0 errors；24 个既有 warnings 位于本批之外。
- Remote Preview QA: Passed — 英中 Data 状态、16 个 Index links、移动 Search → Data、无横向溢出与控制台 0 errors。

### Git 状态

- Branch: `codex/living-atlas-template-data`
- Base: `origin/main` at merge commit `16e9706`
- Implementation commit: `0c7c33b` — `add living atlas data entry and migration starter`
- Push: completed to `origin/codex/living-atlas-template-data`.
- Unmerged Preview: <https://raw.githack.com/TSRat/My-Website/codex/living-atlas-template-data/THE-LIVING-ATLAS/index.html>
- Chinese Preview: <https://raw.githack.com/TSRat/My-Website/codex/living-atlas-template-data/THE-LIVING-ATLAS/zh.html>
- Draft PR: <https://github.com/TSRat/My-Website/pull/14>
- Merge: creator authorized PR #14 on 2026-07-24; this batch is intended to land through that PR after the validation-policy configuration commit.

## 2026-07-24: Restore Worlds ambiguity

### 当前目标

撤回把 Worlds 解释成作品类型目录的显式分类，恢复创作者原本有意保留的含混性，并删除 Knowledge 与 The Index 的说明段落。

### 已完成

- Worlds 恢复旧版可见标题：`Knowledge / Story / Media / Interaction`；中文为“知识 / 故事 / 媒体 / 交互”。
- 删除四张 World 卡片的全部说明文字及对应渲染 / 样式。
- 删除英文和中文 Knowledge、The Index 各自的说明段落。
- 保留四张图片、编号、顺序、网格、响应式、Index 自动生成和 Search 行为。
- 增加回归测试，锁定四个开放标题、无 `description` 字段及无两段说明文字。
- `CONTENT.md`、`DESIGN.md` 与跨站内容系统明确：Worlds 不是作品集分类，不得再添加一一对应关系或穷尽式解释。
- Figma `TSRat Content System · v1` 的 Worlds 定义已改为开放入口，组件和布局未改变。

### 重要决定

- “含混”是创作者明确的内容与设计意图，不是待修复的信息架构缺口。
- 内部稳定 ID 只服务渲染和链接；不能据此向读者解释每个 World “对应”哪一类作品。
- Knowledge 与 Index 可以保持结构化功能，但不需要在页面上自我解释。

### 验证

- Targeted tests: Passed — 8 / 8。
- Pages build / asset validation: Passed — 337 references across 41 HTML/CSS files。
- Browser: English / Chinese，desktop / mobile，Worlds / Knowledge / Index 均通过。
- Responsive: desktop `1425 ≤ 1440`；English mobile `388 ≤ 390`；Chinese mobile `375 ≤ 390`。
- Console: 0 errors。
- Visual gate: Passed；比较证据在 `web/evidence/living-atlas-ambiguity-correction/visual-regression.md`。
- 完整 checks: Passed — `npm run build`；`npm test` 9 / 9；`npm run lint` 0 errors、24 个既有 warnings。
- 远程 Preview QA 在 push 后执行。

### Git 状态

- Branch: `codex/living-atlas-template-data`
- Draft PR: <https://github.com/TSRat/My-Website/pull/14>
- Correction commit: `2b7fa13` — `restore living atlas worlds ambiguity`.
- Push: completed to `origin/codex/living-atlas-template-data`.
- Exact Preview QA: Passed for English desktop and Chinese mobile; no broken images or horizontal overflow.
- Exact English Preview: <https://raw.githack.com/TSRat/My-Website/2b7fa13bef09cc9c1cfa68f4d705e732550cfacc/THE-LIVING-ATLAS/index.html#worlds>
- Exact Chinese Preview: <https://raw.githack.com/TSRat/My-Website/2b7fa13bef09cc9c1cfa68f4d705e732550cfacc/THE-LIVING-ATLAS/zh.html#worlds>
- Merge: creator authorized PR #14 on 2026-07-24; perform after the validation-policy configuration commit is pushed.

## 2026-07-25: Register two migrated philosophy guides

### Current target

把两份已完成基础六阶段迁移的萨特互动导读加入 Living Atlas 的唯一网站
注册表，不改变 Living Atlas 的视觉系统或开放 Worlds 定义。

### Completed

- 新增 `009 / SARTRE · NAUSEA GUIDE` 与
  `008 / EXISTENTIALISM IS A HUMANISM` 两个 `published` 条目。
- 链接分别使用 `../SARTRE-NAUSEA-GUIDE/` 与
  `../EXISTENTIALISM-HUMANISM-GUIDE/`。
- 缩略图来自实际迁移镜像的 1440 × 900 浏览器首屏，不使用占位图。
- Latest 新增“两份萨特互动导读完成迁移”记录。
- 保留 Worlds 的含混性、现有站点编号和注册表驱动的自动计数。

### Modified files

- `sites/living-atlas/content-registry.js`
- `sites/living-atlas/assets/thumb-sartre.png`
- `sites/living-atlas/assets/thumb-existentialism.png`
- `sites/living-atlas/TECH.md`
- `sites/living-atlas/HANDOFF.md`

### Verification

- 根迁移 handoff 记录 targeted test、Pages build / validation 与浏览器 smoke。
- Antigravity 扩展 Living Atlas 列表、搜索、双语与视觉 QA：Pending。

## 2026-07-25 · Parent archive navigation

- Added `Website Archive` / `网站总入口` links to the English and Chinese
  desktop navigation and mobile menu.
- Links use `../`, preserving the `/My-Website/THE-LIVING-ATLAS/` deployment
  contract and both local/Pages behavior.
- The root archive card reuses `assets/hero-kandinsky.jpg` as its full-bleed
  representative cover.
- Regression tests verify both language links; desktop/mobile browser smoke
  passed with no broken images or horizontal overflow.
- Branch: `codex/hub-image-covers`; implementation commit
  `77eb3c3a2e3d2a4e344b8536b3ebaf44e45626d4`.
- Exact English preview:
  <https://raw.githack.com/TSRat/My-Website/77eb3c3a2e3d2a4e344b8536b3ebaf44e45626d4/THE-LIVING-ATLAS/index.html>.
- PR: <https://github.com/TSRat/My-Website/pull/22>; merged.
- Extended QA remains with Antigravity.

## 2026-07-26 · Manual background music

### 当前目标

为个人主页加入仓库内的背景音乐，并让读者能够明确手动开启或关闭。

### 已完成

- 将创作者提供的 `Who Are You - The Who.mp3` 移入权威源码目录并改为
  URL-safe 文件名 `assets/who-are-you-the-who.mp3`。
- 英文与中文入口都加入同一个本地 `<audio>`，使用 `preload="none"`、
  `loop`，且不包含 `autoplay`。
- 新增右下角双语开关。初始状态为 Off / 关；点击后播放，再次点击暂停。
- 背景播放音量固定为 35%，避免抢过页面阅读。
- 按钮用文字、方形指示器和 `aria-pressed` 同步状态；播放失败时恢复关闭
  状态。
- 不写 cookie / localStorage / sessionStorage；刷新或切换页面后保持默认
  关闭。
- 复用现有 Living Atlas Figma 设计源与 Ivory / Ink / Cobalt / Fira Code
  视觉系统；这是小型功能适配，未创建新的 Figma 画面。

### 重要决定与已知问题

- 音频由创作者提供，但商业录音的公开传播授权未在仓库中得到证明：
  `Needs creator confirmation`。
- 音频约 15 MB，使用 `preload="none"` 避免页面打开时主动下载；第一次
  播放仍取决于网络速度。
- Antigravity 扩展响应式、跨浏览器、网络与可访问性 QA：Pending。

### 修改文件

- `sites/living-atlas/index.html`
- `sites/living-atlas/zh.html`
- `sites/living-atlas/style.css`
- `sites/living-atlas/atlas.js`
- `sites/living-atlas/assets/who-are-you-the-who.mp3`
- `sites/living-atlas/CONTENT.md`
- `sites/living-atlas/DESIGN.md`
- `sites/living-atlas/TECH.md`
- `sites/living-atlas/HANDOFF.md`
- `tests/living-atlas-content-system.test.mjs`
- `THE-LIVING-ATLAS/`（由 `npm run build:living-atlas` 更新）

### 验证与交付

- 当前 branch: `codex/living-atlas-background-music`
- `node --check sites/living-atlas/atlas.js`: Passed.
- `node --test tests/living-atlas-content-system.test.mjs`: Passed — 9 / 9.
- `npm run build:living-atlas`: Passed.
- `npm run build:pages`: Passed；构建重算的两个无关 Next.js 镜像已恢复到
  `HEAD`，未混入本任务。
- `npm run validate:pages`: Passed — 522 local references across 65 HTML/CSS
  files.
- Local browser smoke: Passed — 英文桌面从 Off 切换为 On；中文
  `390 × 844` 从关切换为开；主要资源加载、控件视口包含与页面布局正常。
- Console: 音乐资源与脚本无错误；仅有仓库未提供 `favicon.ico` 造成的既有
  404。
- Exact remote Preview smoke: Passed — raw.githack 安全确认页之后，页面、
  主资源与 15 MB 音频可加载，按钮从 `Music · Off` 切换为
  `Music · On`。
- Antigravity extended QA: Pending.
- Implementation commit: `4013a1f` —
  `add manual living atlas background music`.
- Push: completed to `origin/codex/living-atlas-background-music`.
- Exact implementation Preview:
  <https://raw.githack.com/TSRat/My-Website/4013a1f1de34a9f52c3b31cdc9afd480258f78c4/THE-LIVING-ATLAS/index.html>.
  raw.githack may first show an external-content notice; choose
  `Open the page`.
- Draft PR: <https://github.com/TSRat/My-Website/pull/23>.
- Merge: not performed; creator review and explicit merge authorization are
  still required.

## 2026-08-04 · Curated Knowledge Library

### 当前目标

在 Living Atlas 首页建立 `Knowledge / 知识` 入口；线上继续使用且只使用
人文与艺术、社会科学、自然科学与技术三大学科，同时把私人 Obsidian
知识库中适合公开的导览结构整合为公开阅读层。

### 已完成

- 新增双语知识库总览与三个学科页，共八个可直接访问路由。
- 页内整合 `Start Here`、`Knowledge Map`、`Featured`、`Books`、
  `Topics`、`Concepts`、`Outputs` 和 `Recently Updated`。
- 新增 10 条人工白名单记录；6 条 `published` 记录链接到现有公开站点，
  4 条 `mapping / planned` 记录不生成假链接。
- 首页只把 Knowledge World 变成链接；其余 Worlds 保持原有含混与非链接状态。
- 三个学科行均链接到真实双语路由；搜索与四类筛选在浏览器端工作。
- 新增 provider-neutral 分析契约，不记录搜索词原文、私人路径、tokenized URL、
  cookie、持久标识或 Obsidian 文件元数据。
- 新页面不新增远程字体请求；沿用已有 Living Atlas 字体后备与视觉变量。
- Figma 新增响应式 Knowledge Record 组件和桌面 / 移动组合：
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=62-49>。

### 重要决定与已知问题

- Obsidian 仍是私人编辑源；网站是人工白名单发布层，不暴露私人文件夹编号、
  文件系统路径、草稿关系或同步状态。
- `mapping` 与 `planned` 是诚实状态，不渲染 `<a>`，避免制造不存在的公开内容。
- `npm run build:pages` 会重算两个无关 Next.js 哲学镜像。仓库保护规则阻止
  整目录恢复；这些构建噪声未纳入暂存或提交，并会作为工作树残留明确报告。
- Antigravity 全路线、多设备、多浏览器、键盘与视觉回归扩展 QA：Pending。
- Merge 未授权；Draft PR 不得自动合并。

### 修改文件

- `sites/living-atlas/knowledge/`
- `sites/living-atlas/{index.html,zh.html,content-registry.js,web-core.js,style.css}`
- `sites/living-atlas/{analytics.js,atlas.js,site-manifest.json,site.config.json}`
- `sites/living-atlas/{CONTENT.md,DESIGN.md,TECH.md,HANDOFF.md}`
- `THE-LIVING-ATLAS/` 对应发布镜像
- `tests/living-atlas-content-system.test.mjs`
- `tests/living-atlas-knowledge.test.mjs`
- `web/sites/living-atlas-knowledge/`

### 验证与交付状态

- Branch: `codex/living-atlas-knowledge`；任务开始基线：`3e36dd0`；
  implementation commit: `2ab946adab0477eca20c360962acbe560360fa55`。
- `node --test tests/living-atlas-content-system.test.mjs tests/living-atlas-knowledge.test.mjs`:
  Passed — 18 / 18。
- `npm run build:living-atlas`: Passed；源码与 `THE-LIVING-ATLAS/` 镜像同步。
- `npm run build:pages`: Passed。
- `npm run validate:pages`: Passed — 914 local references across 97 HTML/CSS files。
- Local browser smoke: Passed — 英文总览搜索与 Topics 筛选；中文人文学科
  `390 × 844` 无横向溢出；6 个 published 链接与 0 个 mapping 链接；首页
  仅 Knowledge World 可点击，三个学科入口均指向真实路由；本地 favicon 可加载。
- Exact implementation Preview: Passed —
  <https://raw.githack.com/TSRat/My-Website/2ab946adab0477eca20c360962acbe560360fa55/THE-LIVING-ATLAS/knowledge/>。
  raw.githack 可能先显示外部内容确认页；选择 `Open the page`。
- Draft PR: <https://github.com/TSRat/My-Website/pull/38>。
- Merge: not performed；仍需创作者明确授权。

### 下一步

由创作者审阅 Draft PR，并交给 Antigravity 做扩展 QA。只有收到明确合并授权后
才可 merge。

## 2026-08-04 · Knowledge header logo-only correction

### 当前目标与决定

按创作者反馈，把知识库八个中英文路由左上角的品牌入口统一为仅显示 TSRat
Logo，不再重复显示 `TSRat` 名字。返回目标、右侧导航、页面内容、路由与视觉
系统均保持不变。

### 实现与验证范围

- 八个路由删除可见 `<span>TSRat</span>`，保留本地 Logo。
- 英文链接使用 `Back to The Living Atlas`，中文链接使用
  `返回 The Living Atlas` 作为可访问名称；空 `alt` 避免重复朗读。
- 回归测试锁定所有知识库路由都包含可访问品牌链接且不再包含名字节点。
- Figma 桌面 `65:55` 与移动 `68:89` 继续作为布局基线；本次代码在左上角
  品牌节点上暂时覆盖其中的文字版本，后续 Figma 同步应删除该文字。
- Branch: `codex/living-atlas-logo-only`；base: `origin/main` at `7b5176f`。
- Implementation commit: `3a2535218ed7cbaf520ead7a9ed33e83cdfa3006`。
- Targeted tests: Passed — 18 / 18；`npm run build:living-atlas`: Passed。
- 一次性验证副本中的 `npm run build:pages`: Passed；
  `npm run validate:pages`: Passed — 914 local references across 97 HTML/CSS files。
- Local browser smoke: Passed — 英文桌面与中文 `390 × 844` 均只有 Logo，
  返回目标与可访问名称正确，Logo 加载，0 横向溢出，0 console errors。
- Exact implementation Preview: Passed —
  <https://raw.githack.com/TSRat/My-Website/3a2535218ed7cbaf520ead7a9ed33e83cdfa3006/THE-LIVING-ATLAS/knowledge/>。
- Draft PR: <https://github.com/TSRat/My-Website/pull/39>；未合并。
- Antigravity extended QA: Pending。

## 2026-08-04 · English Knowledge locale correction

### 当前目标与决定

按创作者截图反馈，四个英文 Knowledge 路由的正文、标题与栏目标签只保留
英文；中文只保留在 `中 / EN` 语言切换入口中。四个中文路由、三大学科结构、
记录、导航目标与视觉系统不变。创作者已明确授权修改后直接发布。

### 实现与验证范围

- 英文总览移除 `KNOWLEDGE / 知识` 与
  `PUBLICATION BOUNDARY / 公开边界` 中的中文部分。
- 三个英文学科页移除 H1 中的中文学科名，并把
  `START HERE / 从这里开始` 改为 `START HERE`。
- 新增全路由回归契约：四个英文路由移除语言切换器后不得包含中文字符；
  `中 / EN` 切换器必须继续存在并指向中文页面。
- `sites/living-atlas/` 源码与 `THE-LIVING-ATLAS/` 发布镜像已同步。
- Figma 桌面总览 `65:55` 与移动学科页 `68:89` 继续作为布局基线；本次代码
  暂时覆盖其中英文路由的双语文字节点，下次 Figma 同步应删除这些中文文字。
- Branch: `codex/living-atlas-english-only-labels`；base:
  `origin/main` at `21fceb8`；implementation commit:
  `7b7416cdcf03d6c54c15063054cd6b8d2420dcdc`。
- Targeted tests: Passed — 19 / 19；`npm run build:living-atlas`: Passed。
- 一次性精确提交验证副本中的 `npm run build:pages`: Passed；
  `npm run validate:pages`: Passed — 914 local references across 97 HTML/CSS files。
- Local browser smoke: Passed — 英文总览桌面与三个英文学科页（含
  `390 × 844`）移除切换器后均为 0 个中文字符；长标题未裁切，0 横向溢出，
  0 console errors。
- Exact-commit Preview、PR、合并、Pages 部署与正式站复核由本次直接发布流程记录。
- Antigravity extended QA: Pending。

## 2026-08-04 · Shared branded favicon correction

### 当前目标与决定

把最新版 Living Atlas 方形 SVG favicon 统一用于知识库分页与网页导航页。该图标
使用 Living Atlas 的钴蓝、象牙白与橙色识别色；页面版式、正文、导航和 Figma
设计不变，因此本次不新增 Figma 画板。

### 已完成与验证

- 八个 Knowledge 中英文路由全部改用 `favicon.svg?v=20260804-1`，并保留正确的
  相对路径和 `image/svg+xml` 类型。
- `sites/living-atlas/` 权威源码与 `THE-LIVING-ATLAS/` 发布镜像已同步；首页中英
  路由也统一使用同一缓存键。
- 回归测试覆盖八个 Knowledge 路由、Living Atlas 首页与 Website Archive 生成器。
- Branch: `codex/living-atlas-favicon-surfaces`；base: `origin/main` at `208b85d`；
  implementation commit: `586b542c9629896dd9e28c20b98202840d8f25fc`。
- Targeted tests: Passed — 20 / 20；`npm run build:living-atlas`: Passed。
- 一次性精确提交验证副本中的 `npm run build:pages`: Passed；
  `npm run validate:pages`: Passed — 936 local references across 99 HTML/CSS files。
- Local browser smoke: Passed — Knowledge 与 Website Archive 均请求同一个 SVG，
  HTTP 200、`image/svg+xml`、品牌色匹配、0 console errors。
- Exact implementation previews:
  <https://raw.githack.com/TSRat/My-Website/586b542c9629896dd9e28c20b98202840d8f25fc/THE-LIVING-ATLAS/knowledge/>
  与
  <https://raw.githack.com/TSRat/My-Website/586b542c9629896dd9e28c20b98202840d8f25fc/>。
- PR: <https://github.com/TSRat/My-Website/pull/41>；已通过 merge commit
  `eca27d1ae72958079e4a624678a84b7150f8174b` 合并。
- GitHub Pages run
  <https://github.com/TSRat/My-Website/actions/runs/30918123313>: Passed — build、
  本地资源校验、Hypatia 镜像校验与 Pages 部署全部成功。
- Production smoke: Passed — Website Archive、Knowledge 总览与两层学科页均解析到
  `THE-LIVING-ATLAS/favicon.svg?v=20260804-1`；禁用缓存请求返回 HTTP 200、
  `image/svg+xml`，品牌色匹配，0 console errors。
- Antigravity extended QA: Pending。

### 下一步

正式站已发布。后续只需由 Antigravity 完成扩展多浏览器与视觉回归 QA。
