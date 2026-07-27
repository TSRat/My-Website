# 张勇的生活切片 · Design handoff

## Figma source of truth

- File: `TSRat Web Design System`
- Editable rebuild frame:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=40-30>
- Root frame: `张勇的生活切片 · content rebuild v2` (`40:30`)
- Desktop key screen: `Desktop · 1440 / 核心页面` (`40:40`)
- Mobile key screen: `Mobile · 390 / 核心页面` (`40:104`)
- Representative detail state: `Receipt detail state` (`40:83`)

## Design-system additions

- Variable collection: `Theme / 张勇的生活切片`
- Color variables: `ink`, `inkSoft`, `paper`, `muted`, `mint`, `orange`,
  `violet`, `line`, `lineStrong`
- Reusable local component: `Site / 张勇 / Ledger Row` (`39:52`)
- Source-asset frame: `Assets / 张勇 v2` (`40:207`)

The new frame is additive. The earlier migration-coverage frame remains in the
file for comparison.

## Implementation mapping

| Figma element | Production source |
| --- | --- |
| Desktop/mobile navigation | `index.html` `.topbar`, `.nav-links`; the production label is `关系轨道` |
| Weather hero and source imagery | `index.html` `.hero`, `.hero-collage` |
| Practical ledger | `#timeline`, preserving the existing timeline visual rail |
| Deep-night receipt | `#favored`, preserving the existing dense list treatment |
| Important relationships | `#underhail`, with separate Underhail and velna orbit nodes |
| Theme colors and type rhythm | Existing `style.css` custom properties and type system |
| Content-status labels | Visible copy attached to `#timeline` and `#favored` |

## Design decisions

- Preserve the current dark cyber-editorial identity and its mint/orange/violet
  signal system.
- Use the practical-store proposal for information hierarchy, not for a visual
  conversion to a storefront.
- Use the receipt proposal as a content rhythm inside the existing design, not
  as a full light-paper redesign.
- Reuse all current local images; no new generated imagery or iconography is
  required.
- Keep factual observations, creative narrative and visual metaphor visibly
  distinct.
