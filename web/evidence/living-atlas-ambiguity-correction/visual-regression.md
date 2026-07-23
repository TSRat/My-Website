# Living Atlas ambiguity correction

## Scope

- Baseline: unmerged PR #14 commit `ff6c8f0`.
- Review branch: `codex/living-atlas-template-data`.
- Desktop: `1440 × 900`.
- Mobile: `390 × 844`.
- Routes/states: English Worlds, Knowledge, Index; English mobile Worlds; Chinese mobile Worlds.

## Creator-approved changes

1. Restore the four Worlds to their earlier labels:
   - English: Knowledge / Story / Media / Interaction
   - Chinese: 知识 / 故事 / 媒体 / 交互
2. Remove every visible World description.
3. Remove the explanatory paragraph from Knowledge.
4. Remove the explanatory paragraph from The Index.
5. Treat Worlds as deliberately open-ended portals, not portfolio categories or one-to-one content-type mappings.

## Evidence

| State | Baseline | Review | Comparison |
| --- | --- | --- | --- |
| Worlds desktop | `baseline/01-worlds-desktop.png` | `review/01-worlds-desktop.png` | `comparisons/01-worlds-desktop.png` |
| Knowledge desktop | `baseline/02-knowledge-desktop.png` | `review/02-knowledge-desktop.png` | `comparisons/02-knowledge-desktop.png` |
| Index desktop | `baseline/03-index-desktop.png` | `review/03-index-desktop.png` | `comparisons/03-index-desktop.png` |
| Worlds mobile | — | `review/04-worlds-mobile.png` | New approved state |
| Worlds Chinese mobile | — | `review/05-worlds-zh-mobile.png` | New approved state |
| Figma Content System | — | `figma-content-system.png` | Worlds definition corrected in editable source |

## Human review

- World imagery, order, numbering, four-column grid, colors, typography, borders, and responsive stacking remain unchanged.
- Removing descriptions intentionally shortens the Worlds section and returns the cards to their earlier visual rhythm.
- Knowledge and Index retain their headings, generated content, typography, columns, and link behavior; only the requested explanatory paragraphs are removed.
- The generated Index changes `Fiction` to `Story`, following the restored World title.
- No horizontal overflow was found: desktop `1425 ≤ 1440`; English mobile `388 ≤ 390`; Chinese mobile `375 ≤ 390`.
- English and Chinese rendered without console errors in the checked states.

## Figma

The editable `TSRat Content System · v1` frame now says:

> Knowledge, Story, Media, and Interaction are deliberately open-ended portals.

The former sentence that mapped Worlds to four practices was removed. Component structure and layout were not changed.

## Result

**Passed.** Every visible difference is the creator-requested rollback or the direct vertical reflow caused by removing that copy. No unrelated visual change was found.
