# 张勇的生活切片 · Design

## Classification

`PRESERVE`

This content rebuild changes the information architecture and copy, not the art
direction. The captured public page remains the visual baseline.

## Visual identity

- Dark editorial/cyber archive surface.
- Mint is the primary signal color; orange and violet distinguish emotional and
  narrative systems.
- Large compressed headings, thin rules, monospace metadata and interface-like
  labels create the “weather observatory / personal system” language.
- Image windows, the two-node friendship orbit and rabbit collage are narrative
  devices rather than interchangeable decoration.
- Dense sections alternate with large pauses. Do not normalize this into a
  generic card grid.

## Shared platform foundations

The site adopts the portfolio foundations without adopting The Living Atlas
art direction:

- one page-level heading;
- skip navigation;
- visible `:focus-visible` treatment;
- semantic section IDs;
- responsive reflow at 1180px, 900px and 620px;
- `prefers-reduced-motion`;
- relative assets compatible with `/My-Website/ZHANGYONG-PORTRAIT/`;
- visible Data/provider empty state.

The friendship orbit may show Underhail and velna as distinct satellite nodes.
Their positions and colors communicate two relationship modes, not a ranking.

The primary navigation remains visible and horizontally scrollable at narrow
viewports. Interface metadata uses a 10px minimum and strengthened contrast so
the preserved dense visual language does not make supporting text illegible.

## Figma reference

- Shared foundations:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- Editable desktop/mobile migration coverage:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-30>
- Frame: `张勇的生活切片 · migration coverage`
- Editable content-rebuild screens:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=40-30>
- Frame: `张勇的生活切片 · content rebuild v2`
- Theme variables: `Theme / 张勇的生活切片`
- Site component: `Site / 张勇 / Ledger Row`

The v2 rebuild frame is the design source of truth for this change. The
authoritative production runtime remains this directory's static HTML, CSS,
JavaScript modules and assets.

## Red parody alternate

`red.html` is an intentionally separate visual mode. It may use the dense
headline hierarchy, deep-red navigation, paper surface, serif headlines,
notice lists and administrative-document rhythm of Chinese public portals.
It must not visually alter the main `index.html` portrait beyond the discreet,
focusable entry point.

- Figma:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=43-39>
- Frame: `张勇精神学习宣传专栏 · red parody v1`
- Theme variables: `Theme / 张勇红色戏仿版`
- Component: `Site / 张勇 / Red Bulletin Item`

The parody always uses explicit non-official labels and omits real emblems,
seals and government identifiers.

Its compact masthead index is a label, not a simulated search control. Narrow
navigation keeps a visible scrollbar, and link hover/focus states remain
available across notice, bulletin and policy surfaces.

## QA baseline

Codex should compare one desktop route and one related narrow viewport against
the captured Sites page. Antigravity should perform the complete visual
preservation review, including section captures and keyboard/focus behavior.
