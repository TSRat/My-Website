# Design

## Visual identity

The site is an archival field notebook rather than a generic card-based product UI. Its identity depends on ivory paper, charcoal ink, burgundy annotations, fog/sage secondary tones, editorial serif typography, numbered sections, evidence-board composition, maps, taped notes, and deliberate whitespace.

Do not replace this language with glass effects, generic gradients, rounded dashboard cards, or a shared portfolio skin. Infrastructure may be standardized; this site's art direction must remain distinct.

## Tokens

- Ivory: `#f3efe5`
- Paper: `#fbf8f0`
- Paper deep: `#e9e1d2`
- Ink: `#202729`
- Muted: `#667276`
- Fog: `#6e7d82`
- Wine: `#7e2637`
- Wine dark: `#671d2c`
- Sage: `#a7b0a4`
- Serif stack: Noto Serif SC, Source Han Serif SC, Songti SC, Georgia
- Sans stack: Noto Sans SC, Source Han Sans SC, system UI

## Layout and interaction

- Sticky editorial header and in-page chapter navigation.
- Wide desktop grids collapse to a single reading column on narrow screens.
- Horizontal tab rails remain scrollable on mobile; the native scrollbar and partial next item communicate overflow.
- The six-chapter modal preserves progress in local storage.
- Interactive maps, perception mode, character files, concept layers, quiz, and time-based routes are core behavior and must remain functional.

## Accessibility contract

- A keyboard-visible skip link targets the main content.
- Tab groups use `tablist`, `tab`, and `tabpanel` with stable relationships, roving tab stops, and arrow/Home/End keyboard behavior.
- Interactive targets are at least 44 CSS pixels where compact controls previously fell below that size.
- Focus indicators remain visible.
- Motion respects `prefers-reduced-motion`.
- Existing meaningful alternative text is retained.

## Responsive baseline

- Desktop reference: 1800 × 872.
- Mobile reference: 390 × 844.
- Preserve no page-level horizontal overflow. Only the intentional tab rails may scroll horizontally.
