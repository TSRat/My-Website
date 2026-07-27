# La Malinche design guide

## Visual identity

`Cut-out Poster × Mutable Archive × Translation Seam × Survivor Red`

This site is distinct from the other `时间的女儿` projects. Its fifty-two numbered
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
  history-painting field, Atlantic-navigation typography, a colony-system
  explanation, and a four-part expedition ledger.
- Chapter 2 ends in the reader's existing jade / ochre world. A torn horizontal
  seam then introduces the Spanish chapter's red, navy, cream, and gold system;
  this is the major visual hinge of the first half.
- The revised chronology gives city-states, tribute, ritual, enslavement,
  Potonchán, Doña Marina, Totonac politics, and Malintzin's Spanish-language
  learning their own structures rather than compressing them into small labels.
- Chapters 5 and 6 form a visual sequence rather than one siege summary:
  festival image, failed mediation, interpreter limit, rain retreat, epidemic
  split, lake blockade, siege matrix, and final capture.
- Full archival walls at the Codex, Tlaxcala, Cholula, and Tenochtitlan moments.
- The Moctezuma–Malinche–Cortés encounter is a portrait triptych, not oversized
  decorative names behind a narrow text box.
- Translation is represented by opposing language fields and a stable gold seam.
- Route maps use a dark console; the 1524 map becomes a full-screen atlas table.
- The `Malinchismo` section becomes fully red after the black video theater.
- Video-cover imagery is confined to the embedded players.
- Sharp corners and hard borders; no generic rounded card system.
- Paragraph measures remain approximately 55–65ch even when the composition changes.
- Display headings use authored line breaks at wide viewports. No line may be
  left with only one or two Chinese characters; display-to-body spacing is
  governed by `--display-gap` and `--copy-gap`.
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
- The 01 title scales down at `560px` and below so “一个人，三个名字。” remains a
  single complete line without clipping.
- Maps preserve aspect ratio and stay within the viewport.
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

Design source: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=16-2>

V5 records the approved 52-scene chronology and the Chapter 2 → 3 transition.
Earlier V1–V4 frames remain available for comparison.
