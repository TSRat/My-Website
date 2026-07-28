# Beginner Content Audit Report

Use this order. Omit empty optional sections.

```markdown
# Beginner Content Audit — <content name>

BEGINNER_CONTENT_GATE: PASS | CONDITIONAL PASS | FAIL
Score: <earned>/<possible>

## Outcome

<Two to four sentences stating what a first-time reader can understand, where
the mental model breaks, and the highest-priority repair. Mention uninspected
surfaces.>

## Newcomer reconstruction

- This is...
- It involves...
- First..., then..., finally...
- The main result or visible difference is...
- This matters because...
- The important limitation or dispute, if any, is...

Mark any sentence the current content does not support as `MISSING`.

## Priority findings

### P1 — <specific finding title>

- Location: <route, heading, paragraph, card, figure, timestamp, or line>
- Reader encounters: <concrete observation>
- Reader cannot know or do: <missing understanding>
- Why it matters: <effect on later comprehension or task>
- Smallest repair: <specific action>
- Example: <short replacement or bridge when useful>

## Scorecard

| Dimension | Score | Evidence |
| --- | ---: | --- |
| Orientation | 0–2 | |
| Object introduction | 0–2 | |
| Prerequisites and terminology | 0–2 or N/A | |
| Process and intermediate steps | 0–2 or N/A | |
| Numbers, comparisons, and results | 0–2 or N/A | |
| Facts, analysis, and causality | 0–2 or N/A | |
| Disputes and evidence boundaries | 0–2 or N/A | |
| Structure and visual containers | 0–2 or N/A | |
| Operations, interaction, and safety | 0–2 or N/A | |
| Language, links, and multilingual behavior | 0–2 or N/A | |
| Recall and application | 0–2 | |

## Missing bridge map

| Current jump | Missing bridge | Best insertion point |
| --- | --- | --- |
| <A directly to C> | <B> | <location> |

## Preserve

<Specific facts, examples, wording, evidence levels, visual devices, or
interactions that should not be lost during revision.>

## Recommended repair order

1. <P0/P1 mental-model or safety repair>
2. <P1/P2 process or result repair>
3. <P2 structure, language, visual, or link repair>

## Heuristic scan

<Summarize reviewed scanner signals. Do not paste unreviewed matches.>
```

Rules:

- Lead with the outcome, not the auditing process.
- Sort findings by severity and reading order within the same severity.
- Quote only the minimum text needed to identify the defect.
- Do not rewrite the entire artifact unless the user asks.
- Do not inflate the report with passed criteria; name the strongest preserved
  features instead.
- If the artifact passes, provide the gate, score, reconstruction, inspected
  surfaces, and a brief preserve section. Do not invent findings.
