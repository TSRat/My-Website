# IVORY ARCHIVE beginner rebuild — Product specification

## Product job

Help a reader with no prior subject knowledge understand any of 75 archived
stories in three short sections and open the related article through a
descriptive link.

## Success criteria

- A direct-entry visitor can answer what, when, who, why, and source from one
  story scene.
- Every issue has a concrete theme and a plain three-minute summary.
- Every story follows one stable learning order.
- Search covers themes, titles, categories, summaries, and story background.
- All 75 stories expose a directly clickable source link named for its subject.
- No fact, qualification, feminist analysis, image credit, or public URL is
  silently removed.

## Content model

Issue additions:

- `learningGoal`: what a newcomer should understand after the issue.
- `connection`: why these five stories belong together.

Story changes:

- beginner-facing `title`;
- `summary` and `happened` remain factual orientation;
- `whyItMatters` gives one plain explanation of why the event matters;
- `facts` provides the key dates, numbers, people, and background in one list;
- `sourceName`, `sourceDate`, and `sourceUrl` support a descriptive article
  link without a separate source register.

The data remains a directly evaluable literal because the Pages generator
depends on that contract.

## Navigation and direct entry

- Keep the existing public routes and legacy redirects.
- Add a visible “阅读方法” destination to global navigation.
- On issue routes, name each link “查看原文：<story title>” and make it directly
  clickable.
- Add a five-line quick read before the long stories.
- Add previous/next issue links derived from array position.

## Corrections and unavailable sources

Future factual corrections should update the article text and source date
without adding boilerplate disclaimers to every story.

## Analytics

Provider remains `none`. Implemented provider-neutral signals:

- `search_performed` with query-length bucket only;
- `filter_applied`;
- `briefing_opened`;
- `source_opened`;
- `data_entry_opened`.

`story_opened`, `glossary_term_opened`, `timeline_item_opened`, and
`comparison_viewed` remain future candidates; they are not claimed as current
signals.

Do not collect raw search text, identity, dwell time as a learning proxy,
cookies, or persistent storage.
