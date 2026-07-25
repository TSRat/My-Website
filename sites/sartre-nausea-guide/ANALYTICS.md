# Provider-neutral analytics specification

## Goal

Measure whether readers reach the guide's core explanatory interactions and continue to a reading route. The specification is provider-neutral; no analytics SDK is installed by this migration.

## Privacy rules

- Do not collect names, email addresses, IP-derived profiles, raw user-entered text, or persistent cross-site identifiers.
- Do not send chapter prose, quiz statements, or source URLs as free-form payloads.
- Use stable enumerated IDs listed below.
- Reading progress in local storage remains product state and must not be repurposed as an analytics identifier.
- Consent, retention, and regional policy must be decided before a provider is implemented.

## Common properties

| Property | Type | Allowed values |
| --- | --- | --- |
| `site_id` | string | `sartre-nausea-guide` |
| `content_version` | string | release or commit identifier |
| `viewport_group` | string | `mobile`, `tablet`, `desktop` |
| `interaction_method` | string | `pointer`, `keyboard`, `unknown` |

## Events

| Event | Trigger | Event properties |
| --- | --- | --- |
| `guide_opened` | Six-chapter guide opens | `chapter_id`: `01`–`06`; `entry_point`: `hero`, `progress`, `story`, `route` |
| `guide_chapter_completed` | Reader advances after a chapter | `chapter_id`: `01`–`06`; `completed_count`: `1`–`6` |
| `map_place_selected` | Bouville location changes | `place_id`: `seaside`, `cafe`, `library`, `museum`, `park` |
| `moment_selected` | Nausea-moment tab changes | `moment_id`: `stone`, `cafe_objects`, `hand`, `chestnut_root`, `song` |
| `perception_mode_changed` | Name-removal control changes | `mode`: `daily_use`, `bare_presence` |
| `character_selected` | Character tab changes | `character_id`: stable non-personal content ID |
| `concept_layer_selected` | Concept layer changes | `layer`: `novel_1938`, `later_1943_45` |
| `quiz_answered` | A quiz option is chosen | `question_id`: `01`–`04`; `is_correct`: boolean |
| `reading_route_selected` | Route tab changes | `route_id`: `quick`, `practice`, `research` |
| `source_opened` | Reader opens a cited source | `source_id`: `01`–`06` |

## Derived metrics

- Guide start rate: sessions with `guide_opened` / eligible page views.
- Guide completion rate: sessions reaching `completed_count = 6` / sessions with `guide_opened`.
- Core interaction reach: sessions with at least one map, moment, perception, character, or concept event.
- Reading-route selection rate: sessions with `reading_route_selected` / eligible page views.
- Source follow-through: sessions with `source_opened` / eligible page views.

Implementation is intentionally pending provider, consent, and retention decisions.
