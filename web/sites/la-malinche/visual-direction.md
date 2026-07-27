# La Malinche visual direction

## Chosen synthesis

The production direction combines the strongest parts of the four supplied concepts without turning the site into four competing themes:

- **Three Names** supplies the chronological spine, deep reading rhythm, and name lens.
- **Chain of Translation** appears only where language and diplomacy need a split composition.
- **Survivor’s Gaze** supplies the one red visual rupture in the afterlife / `Malinchismo` chapter.
- **Ruins & Rebirth** informs map strata, lake geometry, ash textures, and the siege transition without forcing horizontal scrolling or WebGL.

The result is `Obsidian Archive × Translation Split × Survivor Red × Ruins Layer`.

## Color system

| Token | Value | Role |
| --- | --- | --- |
| Obsidian | `#0C0E0D` | Primary archive field and historical darkness |
| Ink | `#1A1C1A` | Light-scene body text and hard rules |
| Ivory | `#F0EBD8` | Reading surface |
| Codex | `#D2C29C` | Secondary copy and paper strata |
| Jade | `#005D3E` | Malintzin / Indigenous language lens |
| Iron blue | `#10304D` | Doña Marina / Spanish record lens |
| Survivor red | `#D40A1A` | Violence, rupture, and later judgement |
| Gold | `#C9A243` | Evidence, focus, chapter progress |
| Ash | `#6B6C66` | Ruin, uncertainty, disabled decoration |

Red is reserved. It appears as small warnings before the eighth chapter and becomes dominant only in the `Malinchismo` scene.

## Typography

- Monumental Chinese display: `Noto Serif SC SemiBold`.
- Reading text and long quotation: `Noto Serif SC Regular`.
- Interface, metadata, evidence labels, and chapter numbers: `Noto Sans SC`.
- English and transliterated names use the same families rather than imitating a Mesoamerican script.
- Display line-height is 0.96–1.05; reading line-height is approximately 1.75.
- Reading measure is capped near 65ch.

The site does not use pseudo-Aztec novelty fonts. Historical weight comes from scale, spacing, repetition, and hard rules.

Display headings use authored line breaks at wide viewports. A single line must
not be left with only one or two Chinese characters. The standard display-to-deck
gap is 28–56px and the deck-to-body gap is 18–32px; these are implemented as
`--display-gap` and `--copy-gap`.

## Grid and spacing

- Desktop: 12 columns with 96px outer margins.
- Long reading passages: 6 columns or about 65ch.
- Translation scene: 5 columns + 2-column seam + 5 columns.
- Mobile: 24px margins and one column.
- Spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

## Imagery

Primary map and portrait assets begin with the creator’s `Women Story/Malinche`
folder:

- `封面2.png` and `封面7.png`
- `Own Map/route.png`
- `Own Map/oluta.png`
- `Own Map/Xicalango.png`
- `Own Map/Potonchán.png`
- `Own Map/Totonacapan.png`
- `Own Map/Maya.png`
- `Own Map/aztlan.png`
- `Own Map/aztecsphere.png`

They are credited as creator artwork or creator-made explanatory maps. They are not described as historical portraits, archaeological records, or contemporary maps.

No additional AI image was generated. The v3 implementation supplements the
creator assets with locally stored public-domain / CC0 material: a British
Library landing manuscript, a high-resolution Tlaxcala map, the Codex Mendoza
Moctezuma image, and the 1529 Weiditz depiction of Cortés. Every later depiction
is labelled by date and is not described as an eyewitness photograph or realist
portrait.

## Texture and shape

- Sharp corners and hard one-pixel rules.
- A low-opacity codex tile repeats behind selected archive scenes.
- Lake and route lines use layered CSS/SVG-like geometry.
- Paper is built from flat color and subtle grain, not photorealistic parchment.
- No glassmorphism, generic gradient cards, or ornamental “ancient” UI.

## Component language

- `Name Toggle`: jade / iron blue / survivor red variants.
- `Evidence Badge`: fact / interpretation / framing / metaphor.
- `Chapter Marker`: oversized number, chapter title, progress state.
- `Archive Annotation`: compact trigger and expanded note.
- `Route Stage`: hard-edged map selector.
- `Reflection Choice`: text-first button with no score or correctness state.

## Motion

- Text reveal: 320ms opacity and 12px rise.
- Ink line: 480ms scale.
- Cursor light: desktop fine-pointer devices only.
- Map replacement: 220ms crossfade.
- No continuously moving background.
- No horizontal scroll narrative.
- Reduced-motion mode makes every element immediately visible and disables transforms and smooth scrolling.

## Responsive visual behavior

- Monumental titles step down rather than simply shrinking the desktop canvas.
- Three name panels stack in sequence on mobile.
- The translation split becomes an accordion.
- The chapter rail becomes a compact menu and progress bar.
- Full-bleed red scenes keep readable black / ivory contrast and generous padding.
- Creator maps preserve their aspect ratio and never overflow horizontally.
