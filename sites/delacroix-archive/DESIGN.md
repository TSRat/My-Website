# Delacroix design guide — Romantic Archive

## Creative direction

The interface treats the archive as a sequence of rooms rather than a neutral
database skin. The accepted visual source is the implemented site produced in
the Delacroix design task; the portfolio Figma file referenced by
`site.config.json` supplies shared maintenance infrastructure only and does not
replace this project's art direction.

- The home room uses Bordeaux red `#4A010A`, coal `#312520`, gold `#C18F4E`,
  Pierre Petit's 1862 photograph and the handwritten signature.
- Biography, chronology, journal and sources use pine green `#1C312C`, Dior
  gold `#A99563`, cream `#F2E3C6` and frost grey `#C4C4B2`.
- Works and visual analysis use imperial blue `#0F325B` and star blue
  `#2B5A6C` so the act of looking has its own room.
- Chinese uses a Song/serif-led system. English and French display titles may
  use an Italian italic voice; interface labels stay plain and legible.
- Corners remain square, rules remain thin and metallic, and transitions are
  restrained. The site must not become a generic rounded-card dashboard.

## Interaction grammar

- Hash routes provide stable direct entry to every main section, artwork,
  timeline dossier and source record.
- Biography explains development; chronology records events; journal readings
  show dated working life; sources expose exact evidence and reverse mappings.
- Expansion happens in place and retains scroll position. A dossier can also
  become its own route without losing the collection context.
- The language switch keeps `中文 / EN / FR` visible in every language.

## Responsive and accessibility rules

- Desktop uses editorial split layouts; 390px and other narrow widths collapse
  into one readable column without horizontal overflow.
- Touch targets are at least 44px, keyboard focus is visible, images have
  localized alternatives, and dialogs have names and Escape behaviour.
- `prefers-reduced-motion` removes nonessential movement.
- A linked TSRat logo in the footer returns to The Living Atlas while preserving
  the Delacroix visual identity.
