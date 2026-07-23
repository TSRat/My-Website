# Content Architecture: THE LIVING ATLAS

## 总览 (Overview)
本目录承载了 TSRat 个人的总网站（Hub Site），定位为“一个人的开放档案馆 (The Living Atlas)”。它不是简单的 Linktree 导航，也不是传统的求职作品集，而是一个呈现世界观、提供多维度知识与创作入口的“数字文化机构”。

## 内容结构 (Content Structure)

- **01 Hero (世界观宣言)**: "NO SINGLE DISCIPLINE IS ENOUGH." 及四大类目标签（History, Feminism, Psychology, Design, Technology, Literature）。
- **02 Now (当前焦点)**: 记录 TSRat 当前的写作、构建、工作和研究焦点。
- **03 Featured World (重点特写)**: 提取一个正在深入探讨的专题，当前为 "004 / DAUGHTERS OF TIME" 中的 Hypatia。
- **04 Worlds (开放入口)**: 固定显示 Knowledge / Story / Media / Interaction（中文为知识 / 故事 / 媒体 / 交互）。这些词是创作者有意保留含混性的概念入口，不是作品类型目录；不得增加解释句、对应关系或穷尽式分类。
- **05 Knowledge Atlas (知识库细分)**: 只细分 Knowledge 世界。底层收藏尚未整理完成时显示 `Mapping / 整理中`，不得使用没有来源的数量。
- **07 Sites (已发布网站)**: 只收录 `status: published` 且有真实 URL 的独立网站；数量由注册表自动计算。
- **08 Latest (最近更新)**: 从带日期的更新记录自动排序和渲染。
- **09 Data / Signals (数据入口)**: 保留可见的数据与测量入口；provider 未连接时显示诚实空状态，不展示假数字或假图表。
- **10 The Index (总索引)**: 汇总当前可抵达的内容；页面只保留标题与索引本身，不附加解释句。

## 数据要求 (Data Requirements)
当前页面继续采用静态 HTML + ES Modules，不迁移框架：

- `content-registry.js` 是 Worlds、Knowledge、Now、Sites、Latest 和 Index 的唯一页面数据源。
- `web-core.js` 负责双语字段、已发布过滤、日期排序、索引、搜索和移动目录。
- `analytics.js` 提供 provider-neutral 事件信封；默认 no-op，不存储或发送数据。
- `index.html` 与 `zh.html` 只保留共同的语义容器和各自的界面文案。
- 未来可以把注册表替换为 Markdown + Frontmatter、CMS 或 API，但必须保持稳定 `id`、发布状态和链接规则。

完整跨站契约见 `../web/content-system.md`、`../web/analytics-standard.md`
和 `../web/templates/site-starter/`。
