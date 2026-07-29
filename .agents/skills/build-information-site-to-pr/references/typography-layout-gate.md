# Information Site Typography and Layout Discipline Gate

## Contents

1. Required specification
2. Typography contract
3. Live reading scale and screenshot-first rejection
4. Information containers and card composition
5. Spacing and alignment contract
6. Chinese line breaking and orphan control
7. Figma requirements
8. Production implementation rules
9. Codex blocking layout QA
10. Antigravity extended QA
11. Evidence and status

## Required specification

Complete this gate for every new site. Do not start final Figma screens or
production implementation until the layout contract is concrete enough to
verify.

Create:

```text
<site-doc-root>/<slug>/typography-layout.md
```

Record:

- typography roles and values;
- minimum live reading sizes by semantic importance;
- spacing tokens;
- grid, gutters, page margins, and content widths;
- shared alignment anchors;
- line-length and wrapping rules;
- responsive transformations;
- information-container decisions and their semantic rationale;
- card anatomy, grouping, color meaning, and content-to-area rationale;
- intentional exceptions;
- the Codex QA route/template and viewport matrix.

Site-specific values may differ. The mandatory requirement is to define and
reuse a coherent system instead of assigning values section by section.

## Typography contract

Define every role that the site uses:

- Display
- H1
- H2
- H3
- Lead
- Body
- Quote
- Caption
- Metadata
- Label / CTA

For every role record:

- font family and fallback;
- font size;
- font weight;
- line height;
- letter spacing;
- text transform when applicable;
- maximum measure;
- alignment;
- wrapping behavior;
- responsive changes.

Prefer comfortable default measures unless the approved art direction requires
otherwise:

- Chinese body text: approximately 25–40 full-width characters per line;
- Latin body text: approximately 55–75 characters (`ch`) per line.

Do not use fixed-height text containers unless the content is deliberately
clamped and the truncation behavior is part of the accepted design.

## Live reading scale and screenshot-first rejection

Treat the website as a live reading environment, not a static poster, magazine
spread, portfolio thumbnail, or single screenshot.

Use this division of responsibility:

- information structure makes the subject understandable;
- visual language makes the subject memorable;
- interaction and narrative make the viewer want to continue.

Do not trade away the first responsibility to strengthen the other two.

### Reject screenshot-first composition

Fail the layout when it:

- shrinks required text so a title, explanation, and full card row all fit in
  one viewport;
- treats "everything is visible in the first screenshot" as a success metric;
- preserves a desktop-spread silhouette by scaling the whole composition down
  on smaller clients;
- assumes the user will zoom, move closer, or open a card to discover its basic
  identity;
- makes the largest phrase memorable while the smallest text contains the
  information needed to understand it;
- removes explanation and calls the remaining unstructured area "whitespace."

Scrolling is normal. Prefer:

- allowing content below the fold;
- splitting one overloaded screen into a clear sequence;
- reflowing columns;
- changing the information form;
- using progressive disclosure for genuine depth, never basic orientation.

Basic identity, category, and relationship information must remain visible
without interaction.

### Reading-scale contract

Record sizes in CSS pixels and `rem`, then verify the rendered CSS pixels at
100% browser zoom after the real fonts load. Font design, weight, contrast,
language, and line height affect perceived size, so inspect visually as well.

Use these defaults unless the approved typeface and browser evidence justify a
different value:

| Role | Desktop default | Mobile default | Rule |
| --- | ---: | ---: | --- |
| Long-form body | 18–22 px | 17–20 px | Do not compress to preserve a spread |
| Lead or explanatory deck | 20–30 px | 18–24 px | Must remain easier to read than metadata |
| Card title | 24–34 px | 22–30 px | Scale to content, not empty card area |
| Essential card explanation | 17–20 px | 16–19 px | Prefer at least 17 px for teaching content |
| Supporting label | 14–16 px | 14–16 px | Never the sole carrier of essential meaning |
| Citation or nonessential metadata | 12–14 px | 12–14 px | Use sparingly; preserve contrast and zoom |

Treat 16 CSS px as the normal absolute floor for explanatory text required to
understand the page. Prefer 17 px or larger for Chinese card explanations and
other core teaching content. Text below 14 px must not carry necessary subject,
identity, relationship, navigation, or task information.

These are starting values, not a mandate to make unrelated sites identical.
Any exception below the floors must document:

- the role and exact font;
- why the information is nonessential or remains comfortably readable;
- evidence at all required viewports and 100% zoom;
- accessible zoom and reflow behavior.

Do not create hierarchy only by making secondary text tiny. Combine size,
weight, color, spacing, position, and wording without reducing necessary
information to caption status.

### Scale-ratio sanity check

Compare the largest and smallest meaningful text on each screen.

Fail when:

- the display type forces essential explanation below its reading floor;
- card titles look like signage while their identity or relationship reads like
  legal copy;
- an eyebrow is the only carrier of essential place, period, or subject context;
- decreasing the display headline slightly would improve comprehension without
  damaging the approved visual thesis, but the layout instead shrinks body copy.

Large display typography is allowed. It must earn its area without starving
the content that explains it.

### Live reading QA

At every required viewport:

1. use 100% browser zoom and default text scaling;
2. wait for the intended fonts;
3. read each essential text role at normal viewing distance;
4. confirm no basic explanation requires zoom, hover, expansion, or a previous
   screen;
5. verify narrower clients reflow rather than uniformly shrink;
6. verify browser zoom to 200% does not remove content or require two-axis
   reading for ordinary prose;
7. record the computed sizes of the smallest essential text.

Record:

```text
CODEX_READING_SCALE_GATE: PASS | FAIL
```

## Information containers and card composition

Choose the representation after understanding the information, not before.

### Choose the correct container

Use:

- **cards** for independently meaningful objects with enough distinct content
  or action to form separate units;
- **lists** for short, sequential, or compact identity-plus-description items;
- **tables** for repeated attributes that viewers must compare across rows and
  columns;
- **relationship diagrams** for alliances, dependencies, hierarchies, influence,
  conflict, networks, or unequal membership;
- **maps** when spatial location or proximity explains the subject;
- **timelines** when order, duration, overlap, or change over time is essential;
- **charts** when quantitative comparison is the actual learning task.

Combine forms when necessary. Provide an accessible text, list, or table
equivalent when a visual relationship cannot carry all meaning accessibly.

Fail when a relational, spatial, temporal, or comparative explanation is
flattened into equal cards that merely list unfamiliar names.

### Card job and content sufficiency

For every proposed card, state its job:

- identify an object;
- explain a category;
- support a claim;
- enable comparison;
- expose a state or action;
- lead to deeper content.

A card should normally contain the minimum information needed for that job,
such as:

- name or title;
- plain-language identity;
- category or relationship;
- one differentiating fact, status, or action when needed.

Do not place two short lines inside a very large rectangle unless the remaining
area has a deliberate function such as media, comparison, interaction, or
meaningful compositional emphasis.

Empty area is not automatically whitespace. It must strengthen grouping,
hierarchy, focus, rhythm, interaction, or imagery. Otherwise resize the card,
change the layout, or add the missing information.

### Card geometry and internal rhythm

Match card width, height, and hierarchy to content volume and semantic weight.

Use the site's spacing scale. Reasonable starting values are:

| Card property | Desktop | Mobile |
| --- | ---: | ---: |
| Horizontal padding | 24–36 px | 16–24 px |
| Vertical padding | 24–32 px | 16–24 px |
| Title-to-identity gap | 12–16 px | 8–12 px |
| Identity-to-detail gap | 8–12 px | 8–12 px |

Require:

- sufficient breathing room around text;
- a visible internal vertical rhythm;
- content aligned to deliberate anchors;
- responsive height based on content rather than a forced equal screenshot;
- text and actions placed where the card's visual weight actually exists.

Equal-height or equal-width cards imply peer status. Use them only when the
content is genuinely comparable. When size represents importance, power,
quantity, or hierarchy, state the encoding explicitly and avoid misleading
precision.

### Card typography

Do not make the title a display face and the explanation a footnote merely to
manufacture contrast.

The identity or relationship needed to interpret a card is core content, not
metadata. It must:

- meet the reading-scale floor;
- have adequate line height and contrast;
- remain visible without hover or expansion;
- retain a clear but continuous hierarchy with the card title.

Use weight, color, spacing, and position in addition to size. Avoid a hierarchy
so abrupt that the title feels like a storefront sign and the explanation like
package fine print.

### Semantic color and grouping

Every prominent card color, fill, border, icon, size, or shape must have a
declared meaning.

Document:

- what category, relationship, state, or emphasis it encodes;
- whether the meaning is repeated consistently;
- how it is explained through a label, legend, heading, or surrounding group;
- a non-color cue for viewers who cannot distinguish the color.

Fail when viewers can reasonably wonder whether a color means selected, primary,
allied, hostile, loaded, incomplete, or merely decorative.

Strong decorative color that creates false hierarchy is not neutral. Reduce it
or give it a real semantic role.

### Background grid and boundary interference

Use one dominant structural grid.

When a page has both a visible background grid and card boundaries, do one or
more of the following:

- place cards on an opaque surface that masks the background grid;
- reduce or remove card borders and use spacing or fill for separation;
- align card dimensions and boundaries to deliberate multiples of the visible
  grid;
- weaken the background inside information-dense regions;
- reserve the visible grid for diagrams whose nodes and paths actually use it.

Fail when a small decorative grid and a larger card grid compete, drift out of
alignment, or make the page resemble one table laid over another.

### Connection to the surrounding argument

Trace every card, list item, table row, diagram node, or map marker to the claim
it helps explain.

Ask:

- Why is this item present?
- What does it prove, compare, locate, or distinguish?
- Does the viewer understand why these objects are grouped?
- Does the representation show the relationship described in the prose?
- Would a diagram, map, list, or table communicate the relationship better?

Remove or redesign containers that only display names without advancing the
screen's learning job.

### Composition tests

Run:

1. **Three-second test:** Can a newcomer identify place/context, period when
   applicable, subject, and core question from the opening hierarchy?
2. **Ten-second test:** Can they identify grouping, relative importance, and
   the main relationship from the visual containers?
3. **One-minute test:** Can they explain why the examples support the screen's
   thesis?
4. **Thumbnail test:** At 25% scale, does the focal order remain context and
   thesis → relationship structure → primary objects → details, rather than
   only a decorative headline?
5. **Deletion test:** If a grid, color, border, extreme size, or empty area is
   removed, what information or interaction is lost? If none, treat it as
   decoration and judge whether it still helps.

Record:

```text
CODEX_CARD_COMPOSITION_GATE: PASS | FAIL
```

Pass only when the chosen information forms, content volume, card geometry,
internal rhythm, typography, semantic encoding, background structure, and
connection to the page argument all work at the required viewports.

## Spacing and alignment contract

Define a finite spacing scale. Use the repository or shared design-system scale
when one exists. Otherwise a reasonable starting scale is:

```text
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
```

Define:

- desktop, tablet, and mobile column counts;
- gutters and outer page margins;
- maximum content and reading widths;
- section rhythm;
- component padding;
- vertical gaps between heading, lead, body, media, caption, and actions;
- shared left, right, center, and baseline anchors.

Require the same semantic relationship to use the same spacing token.

Do not repair ordinary alignment with arbitrary negative margins, transforms,
empty spacer elements, or one-off pixel nudges. Document the rare intentional
exception.

## Chinese line breaking and orphan control

Treat a final line containing only one or two Chinese characters as a layout
failure for high-visibility text:

- Display, H1, H2, and H3;
- hero copy;
- pull quotes;
- CTA labels;
- card titles;
- captions and other short editorial text.

For long body paragraphs, minimize extremely short final lines without blindly
locking every paragraph or damaging responsive flow.

Use progressive wrapping defaults:

```css
.prose {
  text-wrap: pretty;
  line-break: strict;
  word-break: normal;
  overflow-wrap: break-word;
}

h1,
h2,
h3 {
  text-wrap: balance;
  line-break: strict;
}
```

When automatic wrapping is insufficient, keep the final short semantic phrase
together:

```html
<h1>
  她重新定义了
  <span class="no-break">女性与权力</span>
</h1>
```

```css
.no-break {
  white-space: nowrap;
}

@media (max-width: 360px) {
  .no-break--optional {
    white-space: normal;
  }
}
```

Keep only a short semantic unit together, usually 3–8 Chinese characters plus
closing punctuation. Verify that the protected phrase cannot overflow the
narrowest supported viewport.

For CMS or structured content, represent protected phrases as structured spans
instead of mutating arbitrary text after render.

Do not:

- apply `word-break: keep-all` globally to Chinese text;
- insert visible non-breaking spaces between Chinese characters;
- use manual `<br>` merely to repair one viewport;
- add a fixed height that hides the orphan;
- reduce font size for one isolated block without updating the type role.

Allow an art-directed `<br>` only when it is intentional, documented, and
verified at every required viewport.

## Figma requirements

In addition to the normal Figma handoff:

- use Text Styles for every typography role;
- use Variables for spacing, page margins, gutters, and layout constants;
- use Auto Layout for primary sections, repeated components, cards, navigation,
  text/media groups, and action groups;
- define Hug, Fill, Fixed, minimum, and maximum sizing intentionally;
- align repeated components to shared grid anchors;
- include realistic Chinese and Latin content rather than placeholder fragments;
- verify long and short titles in component variants;
- show the required desktop, tablet, and mobile wrapping behavior.

Do not rely on manually dragged positions to create apparent alignment.

## Production implementation rules

Map Figma roles and variables to code tokens.

Require:

- typography roles to use shared classes, components, or tokens;
- spacing and gutters to use the declared scale;
- repeated sections to use shared layout primitives;
- readable `max-width` values for prose;
- responsive rules to preserve hierarchy and alignment;
- heading wrapping to remain stable after the real fonts load.

Review and justify:

- arbitrary spacing values outside the scale;
- negative margins;
- translation transforms used only for alignment;
- duplicated typography declarations;
- fixed text heights;
- component-specific padding that conflicts with its peers;
- manual line breaks.

## Codex blocking layout QA

Codex owns the minimum layout guarantee. It must pass before the task is called
complete or a Draft PR is marked ready for review.

Test every distinct page template and every route materially changed by the
implementation.

Use these CSS-pixel viewports unless the repository defines stricter ones:

```text
1440 × 900
1024 × 768
768 × 1024
390 × 844
320 × 568
```

At each required viewport:

1. wait for `document.fonts.ready`;
2. confirm the intended fonts are actually applied;
3. run the live reading-scale checks;
4. check for horizontal overflow;
5. check for clipped or overlapping text;
6. check shared alignment anchors;
7. check that repeated gaps match declared tokens;
8. inspect high-visibility Chinese text for one- or two-character final lines;
9. confirm protected phrases do not overflow;
10. run the container and card-composition tests;
11. compare the rendered hierarchy, grid, spacing, and wrapping with Figma;
12. capture a screenshot as evidence.

Use browser geometry or equivalent automated assertions where practical:

- document width must not exceed viewport width unintentionally;
- text `scrollWidth` / `scrollHeight` must not exceed its visible box unless
  deliberate overflow or clamping is documented;
- elements sharing an alignment anchor should be within 2 CSS pixels;
- token-governed gaps should be within 2 CSS pixels of the intended value;
- critical regions must not overlap.

Use character-range geometry, screenshot inspection, or both to identify the
number of Chinese characters on the final rendered line. Exempt code, tables,
deliberate vertical writing, and other documented special layouts.

After preview deployment, repeat the relevant checks with a harmless
cache-busting query parameter or equivalent hard reload when the host may cache
HTML or CSS. Inspect:

- the final DOM contains the expected structured no-break span or equivalent;
- the computed `white-space`, `text-wrap`, and `line-break` values are current;
- fonts are loaded before measuring lines;
- the protected phrase stays on one line without horizontal overflow;
- the requested commit, not a previously cached build, is being rendered.

Do not accept deployment status, an old screenshot, or unverified visible text
as proof that the current markup and styles shipped. After an authorized merge,
wait for the production workflow and repeat the smoke on the public URL before
reporting the change live.

Fail the Codex gate when:

- a required template or viewport was not checked;
- fonts did not load;
- essential text falls below the approved reading floor or requires zoom;
- content was shrunk merely to preserve a screenshot-like first viewport;
- visible alignment is inconsistent;
- spacing is arbitrary or contradicts the contract;
- text clips, overlaps, or overflows;
- a high-visibility text block leaves one or two Chinese characters alone;
- the implementation materially differs from Figma without approval;
- a card, table, list, map, timeline, or diagram contradicts the information relationship;
- card color, size, or grouping creates unexplained meaning;
- screenshots or the QA record are missing.

## Antigravity extended QA

After the Codex gate passes, hand Antigravity:

- the exact Preview URL and commit;
- Figma frames;
- the typography/layout specification;
- Codex screenshots and assertions;
- changed templates and known risks.

Antigravity expands coverage rather than replacing the Codex gate:

- all routes and meaningful states;
- Chrome, Safari, and Firefox where available;
- additional real devices, DPRs, orientations, and zoom levels;
- slow or failed font loading and fallback behavior;
- unusually long, short, mixed-language, and dynamic content;
- localization, punctuation, and CMS stress cases;
- dialogs, drawers, sticky elements, animations, and loading transitions;
- screenshot / perceptual diffs and human overlay review;
- keyboard, focus, reduced-motion, and accessibility behavior.

Classify findings:

- P0: unusable page or critical content inaccessible;
- P1: overlap, clipping, severe misalignment, or broken responsive layout;
- P2: inconsistent spacing, hierarchy, alignment, or wrapping;
- P3: optional visual polish.

Do not claim `Antigravity QA passed` while P0 or P1 findings remain unresolved
or unapproved.

## Evidence and status

Record separately:

```text
CODEX_LAYOUT_GATE: PASS | FAIL
CODEX_READING_SCALE_GATE: PASS | FAIL
CODEX_CARD_COMPOSITION_GATE: PASS | FAIL
ANTIGRAVITY_QA: PENDING | PASS | FAIL
```

The PR and final handoff must include:

- templates and routes checked;
- viewport matrix;
- font-loading result;
- smallest essential computed text sizes;
- screenshot-first and responsive reflow result;
- information-container and card-composition rationale;
- three-second, ten-second, one-minute, thumbnail, and deletion-test results;
- overflow, clipping, alignment, spacing, and orphan-control results;
- screenshot or artifact links;
- intentional exceptions;
- Antigravity status and remaining findings.
