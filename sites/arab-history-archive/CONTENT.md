# 内容契约：阿拉伯通史数字档案馆

## 目标与来源

本项目把创作者提供的 Obsidian《阿拉伯通史》笔记转为可公开阅读的静态长卷。历史正文、术语定义与限定语必须来自已提交的 Markdown 快照；构建器和浏览器脚本不得补写史实、评价、引文或学术共识。

当前六册来源快照：

1. `content/volumes/01-pre-islamic-era.md`
2. `content/volumes/02-rise-and-caliphate.md`
3. `content/volumes/03-umayyad.md`
4. `content/volumes/04-abbasid-founding.md`
5. `content/volumes/05-abbasid-golden-age-a.md`
6. `content/volumes/06-abbasid-golden-age-b.md`

`content/source-manifest.json` 记录快照规模与图片处理边界，`content/volumes.json` 保存每册 SHA-256。构建时 checksum 不一致即失败，避免未登记内容被静默发布。

## 内容模型

- Article：`id`、`title`、`eraIndex`、`file`、`status`、`order`、来源标签与 checksum。
- Glossary：`term`、`arabic`、`definition`、`geo_location`、`image_url`、来源卷册与定位。
- Era：四个已批准历史时代及其语义色。
- Future Volume：中性结构状态，不是第五个历史时代。

构建器只渲染 `status: published` 的记录。正文中的词条在构建阶段转换为可访问按钮；词条卡片和 `/api/glossary` 静态 JSON 都来自同一个 `glossary.json`。

Hero 后的笔记目录按 `order` 展示当前六篇 published 笔记，并直接链接到对应卷册开头。它以笔记为单位，不读取单篇 Markdown 内部的章节标题；后续笔记仍通过卷册注册表和页面尾部的 Future Neutral 区域扩展。

## 后续笔记空间

新增笔记时：

1. 将 Markdown 快照放进 `content/volumes/`；
2. 在 `content/volumes.json` 增加唯一记录并写入 checksum；
3. 编辑者明确 `eraIndex` 和 `status: published` 后才进入正文；
4. 尚未定名、定年或分期的材料保留在 Future Neutral，不生成推测性标题或摘要。

页面尾部“阿拉伯通史仍在继续”永久保留，给后续卷册提供明确入口，但不承诺数量。

## 资产边界

源笔记目录包含大量图片引用。当前没有足够证据确认每张图的来源、授权和历史证据角色，因此没有把图片复制到公开站点，也没有用 AI 插画或推测性地图替代。`assets/hub-cover.svg` 是明确标注的抽象项目封面，不是历史图像。

## 编辑分类

- Historical fact：原笔记中的事实性陈述，原样保留限定语。
- Scholarly interpretation：原笔记的解释或“现代补充”，不改写为确定事实。
- Narrative framing：只允许档案 UI 标签，如“卷册”“时代”“来源”。
- Visual metaphor：限抽象封面、颜色和 CSS 几何纹理，不声称是疆域或文物。
