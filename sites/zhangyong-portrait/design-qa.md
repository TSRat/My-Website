# 张勇红色戏仿版 · Design QA

## Review target

- Route: `red.html`
- State: desktop top-of-page editorial portal
- Reference: `/private/tmp/zhangyong-red-gov-reference.png`
  (Beijing government portal capture, 1440 × 900)
- Implementation: `/private/tmp/zhangyong-red-local-desktop.png`
  (local branch capture, 1425 × 891 browser content area)
- Combined comparison:
  `/private/tmp/zhangyong-red-reference-comparison.png`
- Editable design:
  <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=43-39>

The public reference is used only for page rhythm and hierarchy: red masthead,
horizontal navigation, oversized headline, dense notices and columnar
information. Official emblems, agency identity, filing numbers and service
claims are intentionally absent.

## Visible comparison

| Area | Result | Notes |
| --- | --- | --- |
| Masthead and navigation | Pass | Flat deep-red field, centered title and dense horizontal navigation preserve the selected portal hierarchy. |
| Headline hierarchy | Pass | Large serif headline, short red kicker and supporting copy remain the first editorial focus. |
| Density and spacing | Pass | Notices, bulletin rows and study panels create the intended information-dense rhythm without collapsing content. |
| Color and typography | Pass | Paper white, deep red, restrained gold and Chinese serif/sans stacks remain legible and avoid decorative gradients. |
| Images | Pass | Existing Zhang Yong local assets are used with descriptive alt text; no placeholder or invented institutional asset appears. |
| Parody boundary | Pass | Top strip, principle note, counter and footer identify the page as a non-official creative parody. |
| Responsive containment | Pass | 390 × 844 smoke showed no body-level horizontal overflow; the mobile navigation is intentionally scrollable and its scrollbar is hidden. |

## Interaction smoke

- Hidden red-dot entry on `index.html` opens `red.html`.
- All in-page navigation links resolve to existing section IDs.
- Three return links lead back to the original portrait.
- The first native `details` item opens and closes without script.
- All four local images load after scrolling through the page.
- The displayed `2,135,227+` count is static copy and is paired with
  `戏仿设定值 · 非真实统计`.

## Issue history

- First combined visual review: no P0, P1 or P2 defects found.
- P3 polish: the narrow navigation scrollbar was visually distracting; it was
  hidden while preserving horizontal scrolling.
- Intentional difference: no official emblem, agency search service or
  government-service module is reproduced.

## Result

Basic design QA passed. Antigravity extended multi-browser, keyboard, console,
network and perceptual comparison remains pending.
