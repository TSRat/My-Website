# 张勇的生活切片 · Analytics

## Classification

Tier A editorial/content site.

## Current state

| Item | State |
| --- | --- |
| Provider | `none` |
| Event delivery | no-op |
| Browser storage | none |
| Cookies / fingerprinting | none |
| Identity collection | none |
| Free-form text collection | none |

## Measurement question

If a provider is approved in the future, the only initial question should be whether readers deliberately
enter the major chapters and inspect the privacy commitment. This task does not need visitor identity,
popularity rankings, time-on-page, raw text or intimate-content analytics.

## Event contract

- `chapter_opened`
  - `content_id`: one of the stable section IDs in `content-registry.js`
  - `interaction_source`: `primary_nav`, `cta`, `in_page_link`, or `unknown`
- `data_section_opened`
  - `content_id`: `data`
  - `interaction_source`: the same bounded vocabulary

Every event uses the shared provider-neutral envelope:

```text
event_name
site_slug
page_path
content_id
interaction_source
timestamp
schema_version
```

## Privacy boundary

- Do not record PDF filenames, report text, names of private contacts, UINs, search text or reading notes.
- Do not infer sensitive traits from section visits.
- Do not activate a provider without creator approval, a retention decision and a privacy review.
- The visible Data section must remain truthful when provider status is `none`.

## Intentionally not tracked

- page-view totals;
- relationship or person popularity;
- purchases, revenue or asset values;
- food orders or health-related behavior;
- returning-user identity;
- cross-site behavior.

## Red parody route

The visible `2,135,227+` visitor count on `red.html` is a fixed narrative prop.
It is not derived from page views, analytics, storage or a remote service. The
page labels it as fictional beside the number and repeats provider `none`.

The hidden-entry click is not instrumented in the current implementation. A
future provider review could add a bounded `alternate_route_opened` event, but
only after creator approval; it must not convert the fictional counter into a
claimed traffic metric.
