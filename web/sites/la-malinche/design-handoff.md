# La Malinche Figma handoff

## Design source

- File: `马琳切 · 谁背叛了背叛者？ · Web Design System`
- Figma: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi>
- Cover / notes: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=3-2>
- Foundations: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=4-2>
- Components: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=5-2>
- Interaction states: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=7-2>
- Handoff: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=7-36>

## Key frames

| Frame | Node |
| --- | --- |
| `v2 · Visual narrative catalogue` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-2> |
| `v2 · Cut-out poster hero` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-3> |
| `v2 · Archival wall` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-22> |
| `v2 · Route / cartographic console` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-31> |
| `v2 · Direct video theater` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-38> |
| `v2 · Mobile hero` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-48> |
| `v1 · Existing system reference` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=6-2> |

### V3 beginner narrative

| Frame | Node |
| --- | --- |
| `v3 · Beginner narrative catalogue` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-13> |
| `v3 · Beginner primer` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-16> |
| `v3 · Spanish landing` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-30> |
| `v3 · Tlaxcala — what` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-43> |
| `v3 · Tlaxcala — why` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-54> |
| `v3 · Cholula — what` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-65> |
| `v3 · Cholula — evidence` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-77> |
| `v3 · Encounter triptych` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-83> |

### V4 Spain + siege

| Frame | Node |
| --- | --- |
| `v4 · Spain + siege catalogue` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-2> |
| `16 · Iberia / 1492` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-7> |
| `18 · Expedition system` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-20> |
| `30 · Interpreter limit` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-40> |
| `34 · Lake blockade` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-50> |
| `35 · Siege overview` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-66> |
| `36 · City fall` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-81> |

### V5 approved 52-scene chronology

| Frame | Node |
| --- | --- |
| `v5 · 52-screen chronology + Chapter 2→3 hinge` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=16-2> |

## Editable system

- Six required pages are present.
- Local semantic variable collection: `Malinche · Semantic`.
- 9 color variables and 10 spacing variables.
- 6 local text styles and 9 local paint styles.
- Reusable component sets:
  - `Name Toggle`
  - `Evidence Badge`
  - `Chapter Marker`
  - `Archive Annotation`
- Desktop, mobile, translation, selected, annotation, loading, error, and keyboard-focus states are represented.
- The supplied cut-out, Codex page, and 1524 map are placed as actual image fills.
- V1–V4 remain intact for comparison. V5 is the current implementation source
  for the 52-scene count, beginner chronology, Chapter 2 → 3 visual hinge,
  expanded Spanish background, and revised Tlaxcala / Cholula sequence.

## Implementation mapping

| Figma role | Code role |
| --- | --- |
| Semantic color variables | CSS custom properties in `assets/site.css` |
| Name Toggle | `.name-control` and `[data-lens]` |
| Evidence Badge | `.badge` inside native `.evidence-note` |
| Chapter Marker | `.chapter-index` and scrollspy |
| Translation Split | `.translation-seam` |
| Map state | `[data-map-stage]` and `#route-map` |
| Video theater | `.watch-theater` and two direct player iframes |
| Malinchismo Shock | `.traitor-field` |

Figma is the design and QA source. The creator manuscript remains the content source.
