# La Malinche design guide

## Visual identity

`Cut-out Poster × Mutable Archive × Translation Seam × Survivor Red`

This site is distinct from the other `时间的女儿` projects. Its seventy numbered
scenes deliberately alternate composition rather than repeating a two-column
card template. Image scale, color field, density, direction, and type hierarchy
change with the historical argument.

## Protected choices

- Transparent monochrome cut-out against jade, black, gold, and paper in the hero.
- Three-name opening: jade / iron blue / survivor red.
- A beginner primer precedes the evidence contract and explicitly establishes
  `是什么 / 为什么重要 / 本站分析什么`.
- Tlaxcala and Cholula each use two deliberately different screens: context
  first, event and evidence second.
- The Spanish background uses three different structures: an Iberian portrait /
  history-painting field, a full-height 1502 sea chart, a colony-system
  explanation, and a four-part expedition ledger.
- Chapter 2 ends in the reader's existing jade / ochre world. A torn horizontal
  seam then introduces the Spanish chapter's red, navy, cream, and gold system;
  this is the major visual hinge of the first half.
- The revised chronology gives city-states, tribute, ritual, enslavement,
  Potonchán, Doña Marina, Totonac politics, and Malintzin's Spanish-language
  learning their own structures rather than compressing them into small labels.
- Chapters 5 and 6 form an eighteen-screen visual sequence rather than one
  siege summary: lake-city atlas, causeway infrastructure, political encounter,
  hostage rule, split fronts, festival massacre, failed mediation, rain retreat,
  epidemic, coalition, brigantines, blockade, siege pressures, resistance,
  negotiation, fall, and the 1522 global coda.
- Chapter 7 adopts colonial paper, legal ledgers, route documents, and fading
  archive lines. Chapter 8 shifts to red / black public memory and gives
  records, fiction, `malinchismo`, feminist rereading, monuments, and the final
  responsibility ledger different structures.
- Full archival walls at the Codex, Tlaxcala, Cholula, and Tenochtitlan moments.
- The Moctezuma–Malinche–Cortés encounter is a portrait triptych, not oversized
  decorative names behind a narrow text box.
- Translation is represented by opposing language fields and a stable gold seam.
- The religion scene is an image-and-ledger composition rather than a right-side
  four-card grid; the Tlaxcala alliance scene is a continuous route ending in a
  full-width outcome field. These two structures prevent empty space from being
  filled with undersized card copy.
- Route maps use a dark console; the 1524 map becomes a full-screen atlas table.
- The `Malinchismo` section becomes fully red after the black video theater.
- Video-cover imagery is confined to the embedded players.
- Sharp corners and hard borders; no generic rounded card system.
- Paragraph measures remain approximately 55–65ch even when the composition changes.
- Display headings use authored line breaks at wide viewports. No line may be
  left with only one or two Chinese characters; display-to-body spacing is
  governed by `--display-gap` and `--copy-gap`.
- Editorial display copy that needs a deliberate break uses `controlled-wrap`:
  each authored line stays intact, while scene-specific mobile sizes keep the
  line inside the available column instead of producing a one-character tail.
- The persistent header reports the exact reading position as `当前屏 / 69`
  together with the current chapter. The desktop chapter rail exposes the
  active chapter name, not only an unexplained number.
- Every numbered scene caption uses the responsive size established by `23 ·
  十五世纪 · 欧洲走向远洋`; scene-specific paragraph rules must not shrink or
  enlarge that shared hierarchy.
- Evidence labels stay adjacent to claims.

## Components

- Name lens
- Chapter progress rail
- Evidence badge and native annotation details
- Translation seam / stacked mobile language worlds
- Route map stage selector
- Direct two-act video theater
- Survivor-red rupture
- Final reflection

## Responsive behavior

- Desktop uses a sticky progress rail and full split compositions.
- Tablet removes the fixed rail and reduces monumental type.
- Mobile stacks the name panels, uses the compact chapter menu, and keeps both translation positions around the central seam.
- Mobile does not flatten the late chapters into one repeated text-first stack:
  `37` retains the three-voice comparison, `47` and `53` lead with imagery and
  overlap their text fields, and `66` keeps the archival-paper construction.
- The 01 title scales down at `560px` and below so “一个人，三个名字。” remains a
  single complete line without clipping.
- Maps preserve aspect ratio and stay within the viewport. In particular, the
  `08` origin map uses `object-fit: contain` and positive insets at desktop and
  mobile widths so no edge is silently cropped.
- Image-led mobile scenes retain the image’s intrinsic ratio and place captions
  next to their corresponding image rather than separating them into a generic
  gallery.

## Motion and accessibility

- Progressive reveal is additive; core content is visible without JavaScript.
- Focus uses a three-pixel gold outline.
- `prefers-reduced-motion` disables smooth scroll, reveals, and cursor light.
- No audio autoplays.
- Color never carries evidence type or state without text.

## Figma

Design source for scenes `35–69`:
<https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=17-2>

V5 records scenes `00–34` and the Chapter 2 → 3 transition. V6 records the
approved last-four-chapter catalogue, evidence labels, media rules, and
typographic contract. Earlier V1–V4 frames remain available for comparison.
