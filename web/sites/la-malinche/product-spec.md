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

## Seventy-screen reading architecture

Every numbered scene is designed to occupy approximately one viewport on a typical device. Long passages can exceed one viewport when content integrity requires it.

1. `00` — Proportional cut-out hero and beginner profile table
2. `01` — One person, three names
3. `02` — Who she was and why she matters
4. `03` — Reading contract: fact / interpretation / framing / metaphor
5. `04` — Chapter 1 gate: how her world worked before her story
6. `05` — City-states and multiple political centres
7. `06` — Triple Alliance, tribute, and imperial pressure
8. `07` — Gods, warfare, sacrifice, and slavery
9. `08` — Olutla at the imperial edge
10. `09` — Evidence for a possible elite childhood
11. `10` — How a noble girl could be enslaved
12. `11` — Olutla → Xicalango → Potonchán
13. `12` — Language as a survival method
14. `13` — Chapter 2 gate: strangers appear on the coast
15. `14` — Potonchán’s defeat and the transfer of twenty women
16. `15` — Baptism and the name Marina
17. `16` — Why translation produced the position “Doña Marina”
18. `17` — The Maya–Nahuatl–Spanish translation chain
19. `18` — The birth of the name “Malinche”
20. `19` — Public interpreter and privately unfree woman
21. `20` — Totonac politics and the first coalition opening
22. `21` — Learning Spanish and recognising the expedition’s ambitions
23. `22` — Torn visual transition from her known world to Spain
24. `23` — Atlantic navigation and European expansion
25. `24` — Spanish political unification and conquistador identity
26. `25` — Columbus and the 1492 crossing
27. `26` — What a Caribbean colony was
28. `27` — Cortés in Cuba
29. `28` — The people, ships, weapons, and networks of the 1519 expedition
30. `29` — Malintzin understands the stakes and decides how to act
31. `30` — Veracruz and Cortés’s legal-political manoeuvre
32. `31` — Tlaxcala as an independent, pressured polity
33. `32` — Resistance, negotiation, and alliance
34. `33` — Cholula as sacred city, trade centre, and political threshold
35. `34` — The Cholula massacre and contested warning accounts
36. `35` — Mountain pass and first view of the lake city
37. `36` — Causeways, canoes, and aqueducts
38. `37` — Moctezuma–Malinche–Cortés portrait encounter
39. `38` — Gold, gifts, and incompatible political meanings
40. `39` — Moctezuma held as a hostage ruler
41. `40` — Narváez on the coast and Alvarado in the city
42. `41` — The Toxcatl festival massacre
43. `42` — Moctezuma’s failed mediation and conflicting death accounts
44. `43` — La Noche Triste: retreat through rain, mud, and lake water
45. `44` — Why the defeated coalition returned
46. `45` — Smallpox enters the city
47. `46` — A larger Indigenous-Spanish coalition
48. `47` — Thirteen brigantines are moved and rebuilt
49. `48` — The lake becomes a blockade
50. `49` — Water, food, roads, disease, fire, and time as siege weapons
51. `50` — Continued resistance under Cuauhtémoc
52. `51` — Translation and failed surrender negotiations
53. `52` — 13 August 1521: the city falls
54. `53` — 1522: Victoria returns to Spain
55. `54` — A colonial capital built on the ruined city
56. `55` — Martín is born
57. `56` — Translation work continues after the war
58. `57` — Coyoacán and an unstable position near colonial power
59. `58` — Marriage, land, and the Honduras expedition
60. `59` — Return to Olutla and the later reunion account
61. `60` — Martín goes to Spain and Malinche’s record thins
62. `61` — When was she first written as a traitor?
63. `62` — Three early archives, three different positions
64. `63` — The 1826 novel `Xicoténcatl`
65. `64` — Three later mother figures
66. `65` — The political anatomy of `malinchismo`
67. `66` — Feminist rereadings reopen the archive
68. `67` — The anachronism of modern national loyalty
69. `68` — Monument and mural afterlives
70. `69` — Double ledger of consequence and responsibility

The direct two-part video theater sits between scenes `60` and `61` without
changing the manuscript's seventy numbered scenes.

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
