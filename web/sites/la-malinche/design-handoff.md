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
| `Home · Desktop · 1440×900` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=6-3> |
| `Home · Mobile · 390×844` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=6-23> |
| `Chapter 02 · Translation Split · Desktop` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=6-41> |
| `Chapter 08 · Malinchismo Shock` | <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=6-57> |

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
- Creator cover and route map are placed as actual image fills.

## Implementation mapping

| Figma role | Code role |
| --- | --- |
| Semantic color variables | CSS custom properties in `assets/site.css` |
| Name Toggle | `.name-lens` buttons and `[data-lens-copy]` |
| Evidence Badge | `.evidence-badge` |
| Chapter Marker | `.chapter-mark` and scrollspy |
| Translation Split | `.translation-split` / mobile `details` |
| Map state | `[data-map-stage]` and `#route-map` |
| Malinchismo Shock | `.scene--rupture` |

Figma is the design and QA source. The creator manuscript remains the content source.
