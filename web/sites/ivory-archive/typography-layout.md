# IVORY ARCHIVE typography and layout contract

## Type roles

| Role | Family | Desktop | Mobile | Weight / line height | Measure |
| --- | --- | ---: | ---: | --- | --- |
| Display/H1 | Songti SC, STSong, Noto Serif CJK SC, Georgia | 56 px | 38 px | 500 / 1.12 | 18 Chinese chars |
| H2 | same serif stack | 38 px | 30 px | 500 / 1.22 | 24 Chinese chars |
| H3/story section | same serif stack | 26 px | 23 px | 500 / 1.3 | 28 Chinese chars |
| Lead | same serif stack | 24 px | 21 px | 400 / 1.65 | 32 Chinese chars |
| Body | same serif stack | 19 px | 18 px | 400 / 1.85 | 25–40 Chinese chars |
| Essential explanation | PingFang SC, Microsoft YaHei, Noto Sans CJK SC | 17 px | 17 px | 400 / 1.7 | 38 Chinese chars |
| Label/CTA | same sans stack | 15 px | 15 px | 600 / 1.4 | content |
| Citation/meta | same sans stack | 13–14 px | 13–14 px | 400 / 1.55 | 48 Chinese chars |

No required explanation may fall below 16 CSS px. Body and core teaching text
prefer 17 px or larger.

## Spacing

Scale: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96`.

- Desktop page margin: 48–72 px; maximum content width 1320 px.
- Tablet page margin: 32 px.
- Mobile page margin: 18–22 px.
- Prose width: 36–40 Chinese characters.
- Story section gap: 64–96 px desktop, 48–64 px mobile.
- Text/media gap: 24–32 px.
- Heading/lead/body gaps: 16 / 20 / 24 px by role.

## Grid and anchors

- Desktop issue header: 12 columns; metadata 2, title 6–7, index 3.
- Story content: story-number anchor and one continuous three-section prose anchor.
- Tablet: 8 columns; all three sections remain in one reading column.
- Mobile: 4 columns; all content follows the approved semantic order.
- Repeated headings, summaries, source actions, and key-detail blocks share left
  anchors within 2 CSS px.

## Containers

- Cards only for independently navigable issue/story objects.
- Lists for story indexes and compact definitions.
- Plain lists for key dates, numbers, people, and background.
- A bordered source link closes the third section without creating a fourth
  reading task.

## Wrapping

High-visibility Chinese text uses balanced/pretty wrapping and strict line
breaking. One- or two-character final lines fail on H1–H3, card titles,
captions, and CTA labels. Short protected phrases may use a scoped no-break
span only after verification at 320 px.

## QA matrix

Distinct templates:

- home;
- issue route;
- representative three-section story;
- no-results state.

Viewports: `1440×900`, `1024×768`, `768×1024`, `390×844`, `320×568`, plus
200% browser zoom for one home and one issue route.
