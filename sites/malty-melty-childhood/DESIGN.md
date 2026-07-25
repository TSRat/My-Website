# 两只天鹅 · Design

## Classification

`REFACTOR`

The migration replaces the Sites/Vinext/React implementation with direct static
HTML, CSS and ES modules. The visual direction, content, chapter order and core
reader interactions remain the baseline.

## Visual identity

- Warm paper surfaces, wine red, blue, violet and muted gold.
- Editorial serif headings and small spaced labels.
- The two-color memory system is narrative structure, not decorative theming:
  red is Malty, blue is Melty and violet marks shared/contested memory.
- Full-bleed chapter illustrations carry the emotional state of the reader.
- Thin rules, restrained panels and long-form spacing keep the work closer to
  an illustrated book than a generic application.

Do not normalize the site into The Living Atlas palette or card system.

## Shared platform foundations

- skip navigation and one page-level heading;
- visible focus styles;
- native buttons and links;
- focus return and focus containment in the reader dialog;
- keyboard close and reader navigation;
- responsive landing and dialog states;
- reduced-motion support;
- relative assets under `/My-Website/MALTY-MELTY-CHILDHOOD/`;
- visible Data/local-storage disclosure.

## Figma reference

- Shared foundations:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- Editable desktop/mobile migration coverage:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-76>
- Frame: `Two Swans · migration coverage`

Figma is a design and QA reference only. The authoritative runtime is this
directory's static implementation.

## QA baseline

Codex should smoke-check:

- landing page and primary artwork;
- start/resume chapter;
- previous/next;
- chapter drawer;
- red/blue memory views;
- ending screen;
- one narrow viewport.

Antigravity should perform full visual, keyboard, focus, autoplay, storage,
responsive and section-by-section comparison.
