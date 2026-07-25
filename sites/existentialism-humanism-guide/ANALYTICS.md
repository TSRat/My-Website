# Provider-neutral analytics specification

## Status

Specification only. No analytics provider or tracking code is enabled.

## Measurement purpose

只衡量读者是否能进入阅读路径、理解困境交互并展开澄清内容。不得把停留时间或点击总量当作思想理解的替代指标。

## Privacy rules

- 默认不收集姓名、邮箱、ChatGPT 身份、IP、精确位置或跨站标识符。
- 不采集用户输入、页面选中文本或完整 referrer URL。
- 不把困境选择解释成用户的政治立场、道德品格或敏感画像。
- 若未来 provider 使用 cookie、本地持久标识或跨会话识别，必须先获得明确授权并提供适当告知 / 同意机制。
- 事件属性必须来自下方枚举，禁止发送自由文本。

## Common envelope

| Field | Type | Rule |
| --- | --- | --- |
| `event_name` | string | 使用下方稳定事件名 |
| `site_slug` | string | 固定为 `existentialism-humanism-guide` |
| `page_path` | string | 只允许本站规范化路径，不含 query 或 fragment |
| `viewport_group` | enum | `mobile` / `tablet` / `desktop` |
| `occurred_at` | timestamp | provider 生成；不作为用户身份 |
| `schema_version` | string | 初始为 `1.0` |

## Events

| Event | Trigger | Allowed properties |
| --- | --- | --- |
| `page_viewed` | 页面成功加载一次 | none |
| `reading_path_started` | 点击“从零开始” | `destination: start` |
| `argument_map_opened` | 点击“先看全书地图”或导航进入地图 | `source: hero / nav` |
| `section_navigation_selected` | 顶部导航选择章节 | `section: map / foundation / situation / myths` |
| `dilemma_option_selected` | 选择困境选项 | `option: mother / resistance` |
| `myth_detail_toggled` | 原生 details 状态变化 | `item_index: 1..8`, `state: open / closed` |
| `back_to_top_selected` | 点击回到开头 | none |

## Derived measures

- Reading-path entry rate：`reading_path_started / page_viewed`
- Argument-map discovery rate：有 `argument_map_opened` 的会话比例
- Dilemma engagement rate：有 `dilemma_option_selected` 的会话比例
- Clarification engagement：至少展开一个 myth 的会话比例

这些指标只描述界面使用，不证明读者已理解或认同内容。

## Implementation gate

在创作者确认 provider、隐私模式、保留期和公开访问策略前保持未实现。实现时应把 adapter 隔离在单一模块，并让页面在 provider 被阻止或加载失败时继续完整工作。
