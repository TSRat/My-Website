# La Malinche product / UX specification

## Product

- Site name: `马琳切：谁背叛了背叛者？`
- Series: `时间的女儿 · 003`
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
| `#watch` | Direct screening of the two-part Malinche video |
| `#sources` | Source, evidence, image-credit, and privacy notes |

## Forty-one-screen reading architecture

Every numbered scene is designed to occupy approximately one viewport on a typical device. Long passages can exceed one viewport when content integrity requires it.

1. `00` — Cover: “一个女人，却活在三个名字里”
2. `01` — Three names: Malintzin / Doña Marina / La Malinche
3. `02` — Beginner primer: what she was, why she matters, what the site analyses
4. `03` — Reading contract: fact / interpretation / framing / metaphor
5. `04` — A broken political world of city-states
6. `05` — Aztlan, Nahua, Mexica, and the Triple Alliance
7. `06` — Oluta at the imperial edge
8. `07` — A lost birth name and the evidence of courtly speech
9. `08` — Betrayed into slavery: two explanations held apart
10. `09` — Xicalango and Potonchán: a forced route south
11. `10` — Language learned as a means of survival
12. `11` — Spanish arrival: battle, twenty women, reassignment, language
13. `12` — Baptism and the name Marina
14. `13` — The translation chain: Maya ↔ Nahuatl ↔ Spanish
15. `14` — “Malinche” as a name born between two people
16. `15` — Beginner question: why the Spaniards came
17. `16` — Iberia and the 1492 political turn
18. `17` — The Caribbean as a colonial training ground
19. `18` — How people, ships, weapons, and alliances enlarged the expedition
20. `19` — Veracruz, Totonac grievances, and alliance
21. `20` — Tlaxcala: what the independent, surrounded polity was
22. `21` — Tlaxcala: why resistance became negotiation and alliance
23. `22` — Cholula: sacred city, route, and political position
24. `23` — Cholula: massacre, competing accounts, and responsibility
25. `24` — The causeway city of Tenochtitlan
26. `25` — Moctezuma–Malinche–Cortés portrait encounter
27. `26` — Gold, the sacred precinct, and the seizure of a ruler
28. `27` — Why reception became occupation
29. `28` — The Toxcatl festival massacre
30. `29` — Moctezuma’s failed mediation and collapsing authority
31. `30` — Interpreter power and the limit of command
32. `31` — La Noche Triste: retreat through rain, mud, and lake water
33. `32` — Beginner question: how the coalition returned and surrounded a lake city
34. `33` — Smallpox, regrouping, and the coalition’s return
35. `34` — Lake war and thirteen brigantines
36. `35` — Water, food, roads, and time as siege weapons
37. `36` — Continued resistance, final assault, and Cuauhtémoc’s capture
38. `37` — Survivor: diplomacy, family, property, and uncertain death
39. `38` — Malinchismo: the full-screen red rupture
40. `39` — Feminist and Indigenous rereadings
41. `40` — Who betrayed whom? Reader reflection

The direct two-part video theater sits between scenes `37` and `38` without
changing the manuscript's forty-one numbered scenes.

## Primary reading flow

1. Enter through the three names.
2. Establish what she was, why she matters, and what question the site asks.
3. Choose a name lens or continue with all three.
4. Read chronologically while the right-side progress rail marks the eight manuscript chapters.
5. Open nearby evidence annotations without leaving the scene.
6. Use the route map to understand forced movement and coalition geography.
7. Read Tlaxcala and Cholula as context → event → role → evidence, not verdicts.
8. Compare translation positions across a hard central seam.
9. Watch the two-part Bilibili documentary directly in the video theater.
10. Encounter the red `Malinchismo` rupture.
11. Answer a non-persisted reflection prompt and review evidence boundaries.

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

- Buttons select route maps and replace the image, title, alt text, and short explanation.
- The textual route remains present when images or JavaScript fail.

### Translation split

- Desktop: Nahuatl/Maya and Spanish positions flank a stable central Malinche narrative.
- Mobile: both language worlds stack around the central interpreter seam.

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
| Empty | Source room states that no analytics provider is connected |
| Success | Reflection update confirms that no answer was stored |

## Accessibility

- One `h1`; ordered `h2` chapter hierarchy; scene `h3` headings.
- Skip link targets the first reading scene.
- All buttons are native buttons; all annotations use native `details`.
- Meaning is never carried by jade / blue / red alone.
- Map captions identify the local `Own Map` assets.
- Archival images include direct collection, date, and public-domain credits.
- The hero uses the supplied black-and-white figure as a transparent cut-out.
- Focus remains visible on dark and light scenes.
- `prefers-reduced-motion: reduce` disables smooth scrolling, reveals, cursor light, and parallax transforms.
- Text contrast targets WCAG AA; primary text is designed for AAA where practical.
- No audio autoplays.

## Responsive behavior

- `≥ 1100px`: 12-column composition, sticky progress rail, full translation split.
- `768–1099px`: simplified grid, no fixed side rail, reduced monumental type.
- `≤ 767px`: single column, compact header, name panels stack, maps stay contained, the translation worlds stack, and decorative motion is disabled.
- Text width remains close to 65ch; edge-to-edge red scenes retain at least 24px content padding.
