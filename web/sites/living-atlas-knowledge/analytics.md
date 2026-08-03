# Living Atlas 知识库分析规格

Status: implementation scope · 2026-08-04

## 原则

沿用 Living Atlas 已有的 provider-neutral no-op analytics。默认不发送网络请求、不写 cookie、不使用本地存储、不记录身份。

## 允许的匿名事件契约

| 事件 | 触发 | 允许属性 |
| --- | --- | --- |
| `knowledge_open` | 进入知识库总览或学科页 | `language`, `discipline` |
| `knowledge_filter` | 用户选择内容类型 | `language`, `discipline`, `type` |
| `knowledge_search` | 搜索结果发生变化 | `language`, `discipline`, `has_results` |
| `knowledge_entry_open` | 打开 Published 条目 | `language`, `discipline`, `entry_id`, `type` |

## 禁止收集

- 搜索词原文。
- 私人 Obsidian 路径、文件名或 frontmatter。
- URL 查询参数、访问令牌或 referrer 中的私人信息。
- IP、设备指纹、账户标识或跨页面持久 ID。

## 当前实现

- 本版本仅调用现有 no-op `window.atlasAnalytics` 接口；没有分析供应商时不会产生外部副作用。
- 未来接入供应商前必须再次确认隐私、保留周期与生产配置。
