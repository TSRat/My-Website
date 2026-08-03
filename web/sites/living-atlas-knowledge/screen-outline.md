# Living Atlas 知识库屏幕页纲

Status: creator approved · 2026-08-04

## 决策记录

- 用户批准开始制作，并确认线上一级结构继续采用三大学科：人文与艺术、社会科学、自然科学与技术。
- 线下 Obsidian 的 `Start Here`、`Knowledge Map`、`Featured`、`Books`、`Topics`、`Concepts`、`Outputs`、`Recently Updated` 被整合为页面内部的导览、筛选和分区，不暴露物理文件夹编号。
- Obsidian 知识库仍是私有来源；公开站点只展示经过明确选择、去敏和校对的发布层。

## 路由模型

| 路由 | 语言 | 目标 |
| --- | --- | --- |
| `/knowledge/` | English | 知识库总览、三大学科入口、精选条目与最近更新。 |
| `/knowledge/zh.html` | 中文 | 中文总览，与英文页信息和功能对等。 |
| `/knowledge/humanities-arts/` | English | 人文与艺术学科页。 |
| `/knowledge/humanities-arts/zh.html` | 中文 | 人文与艺术中文页。 |
| `/knowledge/social-sciences/` | English | 社会科学学科页。 |
| `/knowledge/social-sciences/zh.html` | 中文 | 社会科学中文页。 |
| `/knowledge/science-technology/` | English | 自然科学与技术学科页。 |
| `/knowledge/science-technology/zh.html` | 中文 | 自然科学与技术中文页。 |

## 总览页

1. **页首**：返回 Living Atlas、Knowledge / 知识标识、语言切换、隐私友好的搜索。
2. **定位说明**：说明公开知识库不是私人笔记镜像，而是从长期研究中策展出的可读入口。
3. **三大学科**：每个学科展示一句范围说明、已发布数量和进入链接。
4. **Start Here**：给第一次访问者三条明确阅读路径，每个学科一条。
5. **Knowledge Map**：用三大学科与四种内容身份展示信息关系；不显示 00–08 文件夹。
6. **Featured**：展示创作者主动选择的公开条目。
7. **Recently Updated**：展示公开记录的更新日期；不从私人文件元数据推断。
8. **发布边界**：说明只发布 allowlist 中的条目，不公开私人日志、缓存、模板、令牌化链接或未经核实的草稿。

## 学科页

每个学科页使用一致的信息骨架，但保留独立的范围描述与内容组合：

1. 学科名称、范围与返回总览。
2. `Start Here`：推荐的第一条阅读入口。
3. 类型筛选：`All / Books / Topics / Concepts / Outputs`。
4. 内容记录列表：标题、双语摘要、类型、状态、更新时间和明确链接。
5. `Recently Updated`：由同一公开记录数据生成。
6. 空状态：筛选无结果时说明可调整关键词或类型。

## 状态规则

- `Published`：有可访问的公开链接，可以点击。
- `Mapping`：正在整理结构，只显示为计划，不伪装成可读文章。
- `Planned`：已列入发布候选，但尚未完成来源、内容或隐私审查。
- `Archived`：保留历史记录，不进入默认精选。

## 首页入口

- 首页 `Worlds` 中的 `Knowledge / 知识` 卡片变为真实链接。
- 首页 `Knowledge / 知识` 区域的三个学科行分别链接到对应学科页。
- Story、Media、Interaction 三个 Worlds 卡片继续保持目前的含义和非链接状态，不补写解释或映射。
