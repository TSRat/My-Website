# Delacroix explanatory-content repair — 2026-09-09

## Artifact identity

- **New artifact branch:** `codex/delacroix-explanation-repair-20260909`
- **Parent snapshot:** `a010e51624f2410766b42b81fae269f0348161ce`
- **Historical acceptance:** `8648ff0` remains a historical judgment for its earlier scope only. It is not reused for this repair.
- **Scope:** The 1798 Talleyrand biological-father legend and a small, semantically selected audit of the same explanatory pattern. No visual or product redesign is reopened.

## Finding and accepted repair

| ID | Classification | Affected surface | Repair |
| --- | --- | --- | --- |
| `DX-EXPL-1798-01` | `CORRECTION_BEFORE_PROPOSITION` and `MISSING_REFERENT` | 1798 period note, timeline context, timeline event, biography chapter | Name the claim first; name Talleyrand and Charles Delacroix; distinguish indirect clues from a paternity record; state the legal/uncertainty conclusion; return to documented family, schooling, and bereavement context. |

## Fact-integrity ledger

| Claim | Evidence | Site treatment |
| --- | --- | --- |
| The legend alleges Talleyrand was Eugène’s biological father rather than Charles Delacroix. | Elisabeth A. Fraser, *Delacroix: Art and Patrimony in Post-Revolutionary France* (2004), ch. 1, pp. 12–18. | Identified as a later legend, never stated as fact. |
| Charles’s operation and absence at the birth, a connection between Talleyrand and Charles’s office, and perceived resemblance became later indirect clues. | Fraser, ch. 1, pp. 12–18. | Described as indirect circumstances, not proof. |
| Charles Delacroix was Eugène’s legal father; the alleged biological paternity is unconfirmed. | Fraser, ch. 1, pp. 12–18; Musée des Beaux-Arts de Bordeaux, “Eugène Delacroix.” | Explicit reliable conclusion. |
| Early family roles, schooling, and loss are the more useful documented account of the period. | *The Cambridge Companion to Delacroix* (2001), chronology, pp. x–xiv. | Preserved as the primary explanatory frame. |

## Policy and audience path

- **Policy gap:** `NO`. The existing Learning Explanation Policy already requires object/event/premise → context → evidence → interpretation → significance, “Build Conception Before Debunking,” and “Critique After Representation.”
- **Audience contract:** requested before implementation; targeted post-implementation review is required for the revised entry.

## Same-pattern audit (semantic, scope-limited)

This is not a repository-wide regex rule. Each candidate was read in its immediate explanatory context.

| Candidate | Outcome | Reason |
| --- | --- | --- |
| 1798 paternity legend (`data.js`, `research-content.js`) | `REPAIR` | The correction previously named neither the alleged father nor the actual proposition. |
| 1830 *Liberty Leading the People* participation note | `CLEAR` | The entry names the artist’s non-participation and distinguishes it from painting the revolution. |
| 1815 / 1830 chronology distinction | `CLEAR` | The work, the possible misreading, and the historical correction are all named. |
| 1841 Crusaders interpretation | `CLEAR` | The two rejected readings are stated and situated in the object’s composition. |
| 1847 journal gap | `CLEAR` | It directly identifies what is absent (continuous journal), rather than denying life itself. |
| 1849–1861 Saint-Sulpice “one wall” shorthand | `CLEAR` | The entry immediately identifies the three-work chapel programme. |
| Other “not” constructions about artistic interpretation | `NOT_APPLICABLE` | They are interpretive qualifications, not a hidden factual claim or a missing referent. |

## Affected verification

- `npm run build:delacroix` passed and regenerated the deployment mirror at `DELACROIX-ARCHIVE/`.
- `node --check` passed for the two edited source modules; `git diff --check` passed.
- The direct route `#/timeline/1798-birth` rendered in Chinese, English, and French at 1440px. The new Fraser source record opened from the event and correctly reported the only linked timeline and biography uses.
- At 390px, the direct Chinese event had `scrollWidth === clientWidth` (375px): no horizontal overflow or clipping observed. Mobile navigation, language controls, event content, source links, and the skip link remained present.
- Browser console: 0 errors, 0 warnings. The inspected runtime requests, including the source modules and required local assets, returned 200.
- Repository lint completed with 0 errors and 27 existing warnings in unchanged `app.js`, unrelated site code, and generated third-party assets.

## Targeted Audience rereview

- **Finding `DX-EXPL-1798-01`: `RESOLVED`.** The direct event states the Talleyrand allegation before any qualification, labels the cited material as indirect, gives a source-bounded conclusion, and returns to the documented childhood account.
- **AHG-01 to AHG-04:** `PASS`.
- **Chinese, English, French equivalence:** `PASS`.
- **New bounded findings:** none.

## Fact-integrity result

**PASS for the changed content.** Fraser is registered as the evidence source for the allegation, its later indirect clues, and the limit of those clues. Cambridge chronology remains limited to basic dates and documented childhood context. The copy distinguishes legal father, alleged biological father, later speculation, indirect circumstances, and the source-bounded conclusion; it neither treats uncertainty as disproof nor infers biological parentage from family context.
