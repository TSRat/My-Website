# TSRat website Data / analytics standard

- Version: 1
- Current provider: none
- Reference implementation: `THE-LIVING-ATLAS/analytics.js`
- Reusable starter: `web/templates/site-starter/analytics-adapter.js`
- Figma: [TSRat Data & Analytics · v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=19-2)

## Decision this layer supports

The first useful question is not “How many visits did the site get?” It is:

> Can a reader discover a real published work and successfully enter it?

The second question is whether search helps that discovery or exposes missing
content and navigation paths.

No target is set because there is no approved provider, baseline, session
definition or reliable source yet.

## Current state

| Item | State |
| --- | --- |
| Analytics provider | None |
| Browser storage | None |
| Cookies or fingerprinting | None |
| External data transfer | None |
| Visible Data entry | Present as an honest empty state |
| Event delivery | No-op until a provider is explicitly connected |

The visible entry is a product and information-architecture commitment. It does
not imply that collection is active.

## Event contract

Every event uses:

```text
event_name
site_slug
page_path
content_id
interaction_source
timestamp
schema_version
```

Living Atlas starts with four events:

| Event | Decision use | Allowed event properties |
| --- | --- | --- |
| `search_performed` | Detect whether search is used and whether it returns a destination | `query_length`, `result_count` |
| `search_result_opened` | Distinguish searching from successfully choosing a result | `content_type` |
| `published_site_opened` | Measure entry into real published work | `content_type` |
| `data_section_opened` | Measure whether readers deliberately inspect the Data commitment | `content_type` |

Raw query text is deliberately excluded. The adapter ignores unapproved
properties rather than forwarding arbitrary payloads.

## Candidate metrics after a provider is approved

These are definitions, not current values or targets.

1. **Published-work entry rate**
   - Definition: sessions with at least one `published_site_opened` divided by
     eligible Living Atlas sessions.
   - Decision: whether the hub succeeds at routing readers into real work.
   - Missing source: an approved, privacy-reviewed session definition.

2. **Successful search rate**
   - Definition: searches followed by `search_result_opened` divided by
     `search_performed`.
   - Decision: whether search closes a discovery task.
   - Driver: result count distribution.

3. **Zero-result search rate** — guardrail
   - Definition: `search_performed` events with `result_count = 0` divided by
     all `search_performed`.
   - Decision: where content, vocabulary or index coverage needs repair.

Do not add page-view totals, time-on-page, returning-user identity or popularity
rankings unless a concrete decision needs them.

## Provider activation gate

Before activating any provider:

1. identify the decision owner and review cadence;
2. approve provider, hosting region and retention;
3. define sessions and bot filtering;
4. confirm no raw search text or identifiers are transmitted;
5. document opt-out or consent requirements;
6. test the no-provider and connected-provider paths;
7. update the visible Data entry with the real source and freshness;
8. add dashboard ownership only when a dashboard actually exists.

The creator must explicitly approve provider activation.
