# Content Architecture: THE LIVING ATLAS

## 总览 (Overview)
本目录承载了 TSRat 个人的总网站（Hub Site），定位为“一个人的开放档案馆 (The Living Atlas)”。它不是简单的 Linktree 导航，也不是传统的求职作品集，而是一个呈现世界观、提供多维度知识与创作入口的“数字文化机构”。

## 内容结构 (Content Structure)

- **01 Hero (世界观宣言)**: "NO SINGLE DISCIPLINE IS ENOUGH." 及四大类目标签（History, Feminism, Psychology, Design, Technology, Literature）。
- **02 Now (当前焦点)**: 记录 TSRat 当前的写作、构建、工作和研究焦点。
- **03 Featured World (重点特写)**: 提取一个正在深入探讨的专题，当前为 "004 / DAUGHTERS OF TIME" 中的 Hypatia。
- **04 Worlds (长期宇宙)**: 以 Bento Box 的形式展示各个长期创作世界。
- **05 Knowledge Atlas (知识地图)**: 各学科文章/卡片的数量统计，强调知识结构。
- **07 Sites (独立网站矩阵)**: IVORY ARCHIVE, HYPATIA, ENHEDUANNA, MELROMARC SISTERS 等独立网站的入口。
- **08 Latest (最近更新)**: 技术更新和内容新增的日志流。
- **09 The Index (总索引)**: A-Z 字母表形式的细颗粒度标签体系导航（预留）。

## 数据要求 (Data Requirements)
目前页面采用静态 HTML 实现。在未来的迭代中，应当如 `个人网页思路.pdf` 所述，通过 Markdown + Frontmatter 或 headless CMS 获取 `staticSites` 和 `knowledgeList` 数据，实现内容驱动（Data-driven）渲染。
