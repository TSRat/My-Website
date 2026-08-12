# Handoff：阿拉伯通史数字档案馆

## 当前目标

从六篇创作者提供的 Obsidian 笔记生成个人网站知识库下的阿拉伯通史主页，并为以后的笔记保留可扩展空间；完成 Figma、生产实现、GitHub exact preview 和 Draft PR，不自动合并。

## 已完成

- 建立独立 Figma 设计源，覆盖 Foundations、组件、桌面/移动关键屏、交互状态和工程交接。
- 导入六篇 Markdown 只读快照，共 15,027 行，并保存 SHA-256。
- 建立 `volumes.json` 卷册注册表、四时代映射和 Future Neutral 预留区。
- 建立来源约束的 glossary schema 与 build-time 术语包裹。
- 实现 70/30、60/40、移动 Bottom Sheet、Reduced Motion、No-JS 与阿拉伯文 BiDi。
- 新增 `generated-static` 构建模式与静态 glossary API。
- 源笔记图片保持未公开，等待来源与授权确认。

## 重要决定

- 用户提供的 Handoff Packet 已是批准的 Antigravity 创意与信息方案；Codex 执行工程全流程，Antigravity 只负责 PR 后的扩展 QA。
- 滚动换肤使用原生 `IntersectionObserver` 实现与 GSAP 方案等价的用户体验，避免为静态站引入 CDN 或重型客户端依赖。
- Future Neutral 不预设下一册标题、数量、年代或时代；只有编辑者登记的 published 卷册才进入正文。
- 项目封面是抽象视觉隐喻，不是地图、文物或历史图像。

## 验证

- `npm run build:arab-history`：Passed；生成 807 KB 静态正文、10 条 glossary 与两个 JSON endpoint。
- `npm run build:living-atlas`：Passed；权威源码与 `THE-LIVING-ATLAS/` 镜像同步。
- `npm run validate:sites`：Passed；12 个维护包。
- Targeted Node tests：Passed，13/13。
- `npm run build:pages`：Passed；11 个静态镜像与 Pages artifact 完成。
- `npm run validate:pages`：Passed；1,039 个本地引用、107 个 HTML/CSS 文件。
- Browser desktop `1440 × 900`：Passed；实际阅读区 / 注疏栏 `1008 / 432px`，正文 `18/36px`，无横向溢出，Era 3 为 `#0B1320 / #E0E0E0`。
- Browser mobile `390 × 844`：Passed；Bottom Sheet `422px`，不遮挡 `64px` 顶栏，Escape 关闭并恢复触发器焦点，页面 `scrollWidth=390`。
- Living Atlas 人文与艺术入口：Passed；解析到 `/ARAB-HISTORY-ARCHIVE/`；浏览器 console 0 error / 0 warning。
- WCAG 程序化对比度：四时代正文和注疏表面、Future Neutral 均 ≥ 4.5:1。
- Antigravity extended QA：Pending。

## 待完成与已知问题

- [x] 更新 Living Atlas 知识库、仓库注册表与文档。
- [x] 完成 targeted tests、Pages 构建、资源验证和基本浏览器 smoke。
- [x] commit、push、exact implementation preview、Draft PR。
- [ ] Antigravity 全路线、多设备、多浏览器、控制台/网络、键盘、可访问性与视觉回归 QA。
- [ ] 原笔记图片 provenance / rights / alt 审计。
- [ ] 在 exact preview 上测量网络 LCP；本地 build 不作为 `< 1.2s` 证明。

## 当前 Git 状态

- Branch：`codex/arab-history-archive`
- Base：`origin/main` at `cd22191`
- Implementation commit：`6686565`
- Exact implementation preview：<https://raw.githack.com/TSRat/My-Website/6686565/ARAB-HISTORY-ARCHIVE/index.html>
- Knowledge entry preview：<https://raw.githack.com/TSRat/My-Website/6686565/THE-LIVING-ATLAS/knowledge/humanities-arts/zh.html>
- Draft PR：<https://github.com/TSRat/My-Website/pull/46>；未授权合并

本次文档收尾提交只记录交付状态，不改变已验证的网站产物；最终 branch HEAD 与远端预览结果见 PR 和交付报告。
