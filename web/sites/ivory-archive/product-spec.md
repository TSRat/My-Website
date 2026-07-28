# IVORY ARCHIVE beginner rebuild — Product specification

## Product job

Help a reader with no prior subject knowledge understand any of 75 archived
stories, distinguish sourced fact from editorial interpretation, and reach the
original source without losing the archive’s cross-disciplinary point of view.

## Success criteria

- A direct-entry visitor can answer what, when, who, why, and source from one
  story scene.
- Every issue has a concrete theme and a plain three-minute summary.
- Every story follows one stable learning order.
- Search covers themes, titles, categories, summaries, and story background.
- All 75 stories expose a source URL near the top and in the source rail.
- No fact, qualification, feminist analysis, image credit, or public URL is
  silently removed.

## Content model

Issue additions:

- `learningGoal`: what a newcomer should understand after the issue.
- `connection`: why these five stories belong together.

Story changes:

- beginner-facing `title`;
- `summary` and `happened` remain factual orientation;
- `whyItMatters` replaces the old importance label without changing its
  evidentiary certainty;
- `evidenceBoundary` describes what the source type can and cannot establish;
- `analysis` makes the archive’s interpretation explicit;
- `reflection` preserves the existing creator prompt as optional inquiry;
- `sourceType` distinguishes reporting, research, policy, institutional,
  exhibition, and primary-document sources.

The data remains a directly evaluable literal because the Pages generator
depends on that contract.

## Navigation and direct entry

- Keep the existing public routes and legacy redirects.
- Add a visible “编辑方法” destination to global navigation.
- On issue routes, place the primary source directly after each story lead.
- Add a five-line quick read before the long stories.
- Add previous/next issue links derived from array position.

## Corrections and unavailable sources

Source access control is not equivalent to a dead source. If a link is
temporarily inaccessible, retain the citation and show an honest access note.
Future factual corrections should add a dated correction record rather than
silently changing the claim.

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

Do not collect raw search text, identity, responses to reflection prompts,
dwell time as a learning proxy, cookies, or persistent storage.
