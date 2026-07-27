# La Malinche analytics strategy

## Classification

`A. editorial/content`, with a small number of progressive interactions.

## Provider

`none`

No external analytics provider, cookie, fingerprint, persistent analytics identifier, or network endpoint is enabled.

## Why an event model still exists

The provider-neutral contract documents what could be measured if the creator later approves a privacy review and provider. It also gives interaction code stable names without pretending that events are currently collected.

## Events

| Event | When | Allowed properties |
| --- | --- | --- |
| `page_view` | Initial page load | `path`, `language` |
| `chapter_viewed` | A chapter becomes active | `chapter_id`, `chapter_number` |
| `name_lens_selected` | Reader changes name lens | `lens` |
| `annotation_opened` | Reader opens an evidence note | `annotation_id`, `evidence_type` |
| `map_stage_selected` | Reader changes the creator map | `stage_id` |
| `reflection_selected` | Reader answers the final prompt | `choice_id` |
| `source_opened` | Reader follows a source link | `source_id`, `source_type` |
| `data_entry_opened` | Reader opens the Data appendix | `location` |

## Privacy boundary

Never collect:

- names, email addresses, IP-derived identity, or account data;
- free text;
- the contents of the manuscript;
- exact scroll position or fine-grained reading telemetry;
- cross-site behavior;
- persistent reflection answers;
- audio or media history.

The final reflection is intentionally local and ephemeral. Its value is not stored in `localStorage`, cookies, IndexedDB, or a network request.

## Future questions, not current metrics

If a provider is approved later, the event model could answer:

- Which chapters readers reach.
- Whether evidence annotations are opened.
- Whether the translation split and route map aid exploration.
- Which name lenses readers inspect.

No target or KPI is set without a baseline, a session definition, a retention policy, and an explicit use decision.
