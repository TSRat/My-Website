# Design QA

## Status

**Codex local and immutable-preview basic smoke passed — Antigravity extended
QA remains pending.**

## Baseline

- Public reference: `https://sartre-nausea-guide.tsrat.chatgpt.site`
- Original imported Sites source: commit `70f676e`
- Desktop comparison viewport: 1440 × 900
- Mobile comparison viewport: 390 × 844
- Desktop side-by-side evidence:
  `qa-comparison-desktop.png` (public baseline on the left, migrated mirror on
  the right)
- Mobile implementation evidence: `qa-implementation-mobile.png`
- Editable Figma review frame:
  `https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=33-32`

## Codex checks completed

- Existing palette, typography, section order, visual assets, copy, and core interactions are retained.
- Public asset paths are base-path aware.
- Skip link and main landmark relationship are present.
- Tab relationships, roving tab stops, and arrow/Home/End behavior are implemented.
- Compact progress, map, quiz, and text controls have 44-pixel hit areas.
- `prefers-reduced-motion`, focus styles, image alternative text, and mobile-only horizontal tab rails remain present.
- Desktop side-by-side review confirmed the same hero composition, evidence
  board, chestnut-root image, palette, typography, navigation, and section
  rhythm. Minor control sizing/spacing differences are the documented
  accessibility corrections.
- The `04 栗树根 公园` tab changed to `aria-selected="true"` after activation.
- At 390 × 844, `body.scrollWidth` equalled the document client width, the
  primary image loaded, and the hero remained contained.
- No console errors or warnings were captured on the two representative local
  routes.

## Antigravity follow-up

The extended reviewer should still cover:

2. Bouville map with at least two selected locations.
3. All tab groups and keyboard navigation.
4. Perception mode before and after switching.
5. Quiz unanswered, correct, and incorrect states.
6. Six-chapter modal, including close and progress.
7. Desktop and mobile full-page layout, local assets, console, and network.
8. Direct loading from the final GitHub Pages subpath.

## Preview

[Exact-commit raw.githack preview](https://raw.githack.com/TSRat/My-Website/2ecd4325f72a61d5d6d3ba5a1833809cdd3a6cdd/SARTRE-NAUSEA-GUIDE/index.html)
was verified at desktop and 390 × 844 mobile. The title, primary image, relative
assets, horizontal containment, console, and representative tab state passed.
