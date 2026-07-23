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
