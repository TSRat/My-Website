# Delacroix Archive design-to-code handoff

## Fixed decisions

- Use the creator-selected 1862 Pierre Petit photograph on the home screen.
- Keep the handwritten signature on the home screen only.
- Preserve `中文 / EN / FR`; each selected language otherwise controls the full
  interface and prose.
- Use life periods `1798—1815`, `1816—1831`, `1832`, `1833—1847`,
  `1848—1857`, `1858—1863`.
- Treat 1848—1857 as the concentrated period of social activity and public
  achievement, not as proof of a simple political conversion.
- Keep life and chronology distinct. Every chronology item expands with image
  where available, beginner context, longer explanation and exact sources.

## Implementation map

- Tokens and responsive rules: `sites/delacroix-archive/styles.css`.
- Navigation, routing and interaction: `sites/delacroix-archive/app.js`.
- Work records: `sites/delacroix-archive/data.js` and `featured-works.js`.
- Biography, chronology, journal and source graph:
  `sites/delacroix-archive/research-content.js`.
- Visual baseline: the accepted local implementation and its recorded browser
  captures. The portfolio Figma file is a shared-infrastructure reference; no
  Delacroix-specific Figma frame is claimed.
