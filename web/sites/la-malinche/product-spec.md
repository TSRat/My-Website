# La Malinche product / UX specification

## Product

- Site name: `马琳切：谁背叛了背叛者？`
- Series: `时间的女儿 · 005`
- Slug: `LA-MALINCHE`
- Public path: `/My-Website/LA-MALINCHE/`
- Product type: single-route interactive historical documentary and long-form editorial
- Primary reader: Chinese-language readers interested in Mesoamerican history, women’s history, colonialism, translation, and national memory
- Primary goal: follow Malinche’s life without reducing her to either innocent heroine or timeless traitor
- Primary value: the creator’s eight-chapter argument becomes a navigable, evidence-qualified experience in which names, languages, alliances, violence, survival, and later judgement stay connected

The source is the creator’s 21-page manuscript `马琳切：谁背叛了背叛者？`, cross-checked against the two Chinese subtitle transcripts and the creator’s cover and `Own Map` assets.

## Route map

This is intentionally one public route. Deep links use stable section anchors.

| Route / anchor | Purpose |
| --- | --- |
| `/` | Full reading journey |
| `#prologue` | Thesis and the three names |
| `#before` | Chapter 1 · 前世 |
| `#translator` | Chapter 2 · 翻译者 |
| `#conqueror` | Chapter 3 · 征服者 |
| `#killing` | Chapter 4 · 杀戮 |
| `#rupture` | Chapter 5 · 撕裂 |
| `#endgame` | Chapter 6 · 终局 |
| `#survivor` | Chapter 7 · 幸存者 |
| `#traitor` | Chapter 8 · 背叛者 |
| `#sources` | Source and evidence notes |
| `#data` | Provider-neutral measurement boundary |

## Thirty-screen reading architecture

Every numbered scene is designed to occupy approximately one viewport on a typical device. Long passages can exceed one viewport when content integrity requires it.

1. `00` — Cover: “一个女人，却活在三个名字里”
2. `01` — Three names: Malintzin / Doña Marina / La Malinche
3. `02` — Reading contract: fact / interpretation / framing / metaphor
4. `03` — A broken political world of city-states
5. `04` — Aztlan, Nahua, Mexica, and the Triple Alliance
6. `05` — Oluta at the imperial edge
7. `06` — A lost birth name and the evidence of courtly speech
8. `07` — Betrayed into slavery: two explanations held apart
9. `08` — Xicalango and Potonchán: a forced route south
10. `09` — Language learned as a means of survival
11. `10` — Ships, horses, firearms, and a second transfer
12. `11` — Baptism and the name Marina
13. `12` — The translation chain: Maya ↔ Nahuatl ↔ Spanish
14. `13` — “Malinche” as a name born between two people
15. `14` — Cortés and the rules of a different world
16. `15` — Veracruz, Totonac grievances, and alliance
17. `16` — Tlaxcala: enemy, negotiator, ally
18. `17` — Cholula: warning, sources, and massacre
19. `18` — The causeway to Tenochtitlan
20. `19` — Meeting Moctezuma through her voice
21. `20` — Gold, the sacred precinct, and the seizure of a ruler
22. `21` — A world order torn open
23. `22` — The Toxcatl massacre and the failure of language
24. `23` — La Noche Triste: “活下去”
25. `24` — Smallpox, regrouping, and the coalition’s return
26. `25` — Siege, hunger, water, and the fall of the city
27. `26` — Survivor: diplomacy, family, property, and uncertain death
28. `27` — Malinchismo: the full-screen red rupture
29. `28` — Feminist and Indigenous rereadings
30. `29` — Who betrayed whom? Reader reflection, sources, and data boundary

## Primary reading flow

1. Enter through the three names.
2. Choose a name lens or continue with all three.
3. Read chronologically while the right-side progress rail marks the eight manuscript chapters.
4. Open nearby evidence annotations without leaving the scene.
5. Use the route map to understand forced movement and coalition geography.
6. Compare translation positions in a desktop split view or a mobile accordion.
7. Encounter one intentional visual rupture in the `Malinchismo` scene.
8. Answer a non-persisted reflection prompt.
9. Review the site’s evidence and measurement boundaries.

## Interactions

### Name lens

- Three buttons use `aria-pressed`.
- Selecting a lens changes visible perspective notes and color emphasis.
- It never hides the shared chronology or changes factual claims.
- “All names” is always available.

### Chapter navigation

- Sticky desktop rail and compact mobile chapter menu.
- Scrollspy updates the active chapter.
- All anchors remain usable without JavaScript.

### Evidence annotations

- Native `details` elements keep annotations keyboard-operable without JavaScript.
- Each note is labelled as Historical fact, Scholarly interpretation, Narrative framing, or Visual metaphor.
- Opening a note may dispatch a provider-neutral event, but no provider is active.

### Route map

- Buttons select creator-made route maps and replace the image, title, alt text, and short explanation.
- The textual route remains present when images or JavaScript fail.

### Translation split

- Desktop: Nahuatl/Maya and Spanish positions flank a stable central Malinche narrative.
- Mobile: an accordion reveals one side at a time, with both sections present in the DOM.

### Final reflection

- Three non-judgemental options update a short response.
- The choice is never stored or transmitted.
- No option is described as the historically correct answer.

## State requirements

| State | Requirement |
| --- | --- |
| Default | All chronology, headings, and core text readable without JavaScript |
| Hover | Underline or hard-rule shift; no meaning conveyed by color alone |
| Focus | 3px gold outline with visible offset |
| Active | Chapter and selected lens expose text and `aria-current` / `aria-pressed` |
| Loading | Map area reserves its dimensions and shows a restrained label |
| Error | Map fallback lists the route in text |
| Selected | Lens and reflection state are announced in a live region |
| Disabled | Not used in the primary experience |
| Empty | Data section states provider `none`; it does not show fabricated metrics |
| Success | Reflection update confirms that no answer was stored |

## Accessibility

- One `h1`; ordered `h2` chapter hierarchy; scene `h3` headings.
- Skip link targets the first reading scene.
- All buttons are native buttons; all annotations use native `details`.
- Meaning is never carried by jade / blue / red alone.
- Map captions identify creator-made visual material, not historical maps.
- The cover image is creator artwork, not a historical portrait.
- Focus remains visible on dark and light scenes.
- `prefers-reduced-motion: reduce` disables smooth scrolling, reveals, cursor light, and parallax transforms.
- Text contrast targets WCAG AA; primary text is designed for AAA where practical.
- No audio autoplays.

## Responsive behavior

- `≥ 1100px`: 12-column composition, sticky progress rail, full translation split.
- `768–1099px`: simplified grid, no fixed side rail, reduced monumental type.
- `≤ 767px`: single column, compact header, name panels stack, maps stay 16:10, translation split becomes accordion, and decorative cursor light is disabled.
- Text width remains close to 65ch; edge-to-edge red scenes retain at least 24px content padding.
