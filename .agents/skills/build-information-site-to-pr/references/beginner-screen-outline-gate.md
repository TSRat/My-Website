# Beginner Screen Outline Gate

This reference defines the mandatory pre-implementation outline and approval
process for `build-information-site-to-pr`.

The goal is not merely to list sections. The goal is to prove, before design or
code begins, that a person who knows nothing about the subject can enter the
site, orient themselves, build a correct mental model, and understand why the
subject matters.

## Contents

1. Gate order
2. Required Antigravity review
3. Zero-knowledge audience model
4. What counts as a screen
5. Required outline package
6. Per-screen specification
7. Cognitive hierarchy and contextual orientation
8. Beginner comprehension audit
9. Content and evidence rules
10. Visual-system traceability
11. Interaction, responsive, and language coverage
12. Approval protocol
13. Post-approval rules
14. Failure conditions
15. Copyable outline template

---

## 1. Gate order

Follow this exact order:

```text
Read-only repository and content inspection
→ complete Antigravity visual-system review
→ complete route and screen inventory
→ zero-knowledge screen-by-screen outline
→ beginner comprehension audit
→ present the complete outline in chat
→ explicit user approval
→ Working Branch Gate
→ save the approved outline in the repository
→ execute the six implementation phases
```

Before explicit approval, do not:

- create or switch to a task branch;
- write product, design, or handoff documents into the repository;
- create final Figma frames or components;
- generate production assets;
- add, remove, or edit website source files;
- modify generated mirrors;
- commit, push, deploy, or create a pull request.

Read-only inspection is allowed and required.

---

## 2. Required Antigravity review

Read the complete Antigravity output, not only its palette or headline style.

Extract and summarize:

- the central design thesis and intended emotional effect;
- the relationship between subject matter and visual language;
- proposed information architecture and narrative order;
- typography roles, families, weights, sizes, and language coverage;
- color roles, contrast intent, and semantic use;
- composition, grid, deliberate non-grid behavior, alignment, and spacing;
- image, illustration, diagram, icon, texture, and decorative strategies;
- motion, transition, hover, scroll, reveal, and reduced-motion behavior;
- navigation and interaction model;
- responsive behavior across desktop, tablet, and mobile;
- Chinese, English, and any additional-language behavior;
- browser or client expectations;
- data, live content, search, filters, or personalization;
- links to related websites and the wider portfolio;
- accessibility, performance, maintainability, and technical implications;
- known risks, unresolved questions, and Codex implementation guidance.

Create a traceability table in the outline:

| Antigravity rule | Meaning | Screens affected | Implementation implication | Open question |
| --- | --- | --- | --- | --- |

If the artifact is missing or cannot be read, report `STATUS: BLOCKED`.

If it is readable but incomplete:

1. identify the missing decisions;
2. make only reversible, clearly labeled assumptions needed to draft the outline;
3. place those assumptions in the approval checklist;
4. do not implement them until the user approves the outline containing them.

Do not invent a generic design system and attribute it to Antigravity.

---

## 3. Zero-knowledge audience model

Assume the viewer:

- has never heard of the main subject;
- does not recognize names, quotations, dates, regions, movements, or symbols;
- does not know why the subject is important or controversial;
- cannot infer the site's purpose from atmosphere alone;
- may arrive from search on an inner route rather than the homepage;
- may read only one or two screens;
- may be using a phone, a translated interface, or a non-primary language;
- may have limited time, attention, vision, motion tolerance, or bandwidth.

Do not treat lack of knowledge as lack of intelligence. Explain foundations
plainly without becoming childish, repetitive, or patronizing.

For every unfamiliar proper noun or specialist term, choose one:

- define it before first use;
- define it inline at first use;
- provide a nearby glossary or explainer;
- remove it from that screen;
- deliberately defer it and state what the viewer needs to know for now.

Never rely on a poetic hero, unexplained quotation, date, portrait, map, or
cultural reference to perform basic orientation.

---

## 4. What counts as a screen

The outline must cover the whole experience at a useful design grain.

A screen is any meaningful unit the viewer encounters, including:

- a page or route;
- a viewport-height narrative scene;
- a major scroll section with a distinct learning job;
- a navigation, search, filter, or language-selection state;
- a modal, drawer, expanded card, timeline detail, or data state;
- an empty, loading, error, unavailable, consent, or success state when relevant;
- an alternate mobile composition that materially changes order or meaning;
- a localized composition that materially changes density, wrapping, or hierarchy.

Do not create artificial "screens" for every decorative transition. Combine
adjacent content when it serves one learning job and behaves as one unit.

Name screens with stable identifiers, for example:

```text
H01 — Homepage orientation
H02 — Why this subject matters
H03 — Essential context
B01 — Biography introduction
B02 — Turning point
T01 — Timeline overview
T01-D — Timeline detail state
```

---

## 5. Required outline package

The approval package must contain all of the following.

### A. Plain-language site premise

In one short paragraph explain:

- what the site is about;
- who or what the central subject is;
- why a newcomer should care;
- what the viewer can do or understand here.

Avoid brand language that only makes sense after reading the site.

### B. Audience and entry assumptions

State:

- primary audience;
- what they are assumed not to know;
- likely entry routes;
- likely motivations;
- language and device assumptions;
- sensitive cultural, historical, or political context.

### C. Route map

List every route and its purpose. Show:

- parent and child relationships;
- global navigation;
- cross-links;
- related-site links;
- language equivalents;
- routes that can stand alone when entered from search.

### D. Beginner learning arc

Show the planned progression. A common pattern is:

```text
What is this?
→ Why should I care?
→ Where and when does it belong?
→ Who or what are the main actors and ideas?
→ What happened or how does it work?
→ What evidence supports this account?
→ What is debated, limited, or uncertain?
→ Why does it still matter?
→ What can I explore next?
```

This is a comprehension sequence, not a mandatory visual grid or rigid page
formula. Change it when the subject requires another order, but explain why the
alternative is easier for a newcomer.

### E. Complete screen inventory

List the screen ID, name, route, primary learning job, and major state for every
screen before expanding them individually.

### F. Detailed per-screen specifications

Use the requirements in section 6 for every screen.

### G. Comprehension audit

Report what a newcomer should understand after approximately 30 seconds,
3 minutes, and 15 minutes, plus unresolved confusion.

### H. Production dependency inventory

List:

- copy that must be written or verified;
- sources and citations that must be collected;
- images, illustrations, diagrams, maps, audio, video, or icons;
- datasets and freshness requirements;
- localization work;
- rights, privacy, consent, or accessibility dependencies;
- uncertain content that could change screen structure.

### I. Risks, assumptions, and approval checklist

Separate:

- confirmed facts;
- design decisions inherited from Antigravity;
- Codex assumptions;
- unresolved content questions;
- decisions the user must explicitly accept.

---

## 6. Per-screen specification

Specify every screen with the following fields.

### Identity and purpose

- **Screen ID and name**
- **Route and position**
- **Entry paths**
- **Single primary learning job**
- **Why this screen exists**

If a screen has several unrelated primary jobs, split or simplify it.

### Viewer perspective

- **What the newcomer asks on arrival**
- **What they are allowed to know already**
- **What they probably do not know**
- **What they see first**
- **What they may misunderstand**
- **What they should understand before leaving**
- **What uncertainty may remain**

The outline must answer, in plain language:

> If this were the only screen the viewer saw, what correct understanding would
> they leave with?

### Content

- headline thesis;
- plain-language explanation;
- supporting facts, examples, quotations, or data;
- definitions required before or at first use;
- source or evidence treatment;
- distinction between fact, interpretation, and disputed claim;
- optional deeper material;
- primary and secondary actions.

Do not write final polished copy for every paragraph unless needed to prove the
structure. Provide concrete headline and explanation examples wherever
ambiguity would otherwise remain.

### Visual and editorial structure

- dominant composition;
- reading order;
- typography roles;
- smallest essential text role and intended live reading size;
- what belongs in the initial viewport and what may continue below the fold;
- chosen card, list, table, map, timeline, chart, or relationship-diagram form
  and why it matches the content;
- content volume and semantic hierarchy inside each repeated container;
- meaning of prominent colors, sizes, shapes, borders, and groupings;
- image, diagram, data, or decorative role;
- alignment anchors and spacing logic;
- connection to the Antigravity visual system;
- distinction between meaningful visuals and atmosphere;
- continuation cue to the next screen.

Decoration may enrich meaning, place, time, culture, or personality, but it may
not hide hierarchy or replace an explanation.

Do not approve an outline that depends on shrinking essential copy to fit all
planned containers into one screenshot. Do not approve equal cards when the
content is relational, spatial, temporal, unequal, or too slight to support
their area.

### Interaction and state

- user action;
- response or feedback;
- default, hover, focus, active, expanded, loading, empty, error, and success
  states where relevant;
- keyboard and screen-reader expectation;
- reduced-motion behavior;
- data or cross-site dependency.

### Responsive and multilingual behavior

- desktop composition;
- tablet change;
- mobile order and simplification;
- Chinese and English density or line-breaking differences;
- additional-language fallback;
- text expansion tolerance;
- what must never disappear or reorder;
- browser/client-specific risk.

### Comprehension verdict

Give each screen:

- **Expected newcomer comprehension:** high, medium, or low;
- **Reason for the rating;**
- **Remaining question;**
- **How the next screen or interaction resolves it.**

A low rating is allowed only for deliberate mystery or advanced optional
material. Explain why it does not block the core journey.

---

## 7. Cognitive hierarchy and contextual orientation

Use this blocking principle:

> Visual hierarchy must follow the order in which a newcomer can construct a
> correct mental model. Editorial drama may intensify understanding, but it may
> not appear to be more important than the context required to understand it.

### Context before conclusion

Before asking the viewer to interpret a conclusion, comparison, slogan, or
political relationship, establish the applicable coordinates:

1. **What:** the person, event, place, work, idea, system, or dataset;
2. **Where:** geographic, cultural, institutional, or conceptual location;
3. **When:** era, date range, sequence, or current status;
4. **Who:** the main actors, groups, or political units;
5. **Relationship:** how those actors or units connect;
6. **Conclusion:** what the screen wants the viewer to infer.

Not every screen needs to repeat all six coordinates. The screen must either:

- show the required coordinates directly;
- expose them through persistent, prominent route or section context;
- provide an obvious way for a direct-entry viewer to recover them before the
  conclusion depends on them.

Do not make a previous screen the only place where indispensable context exists.

### Semantic roles for headings

Assign each text level a stable job:

- **Eyebrow or chapter label:** sequence number, section, category, or compact
  metadata;
- **Main heading:** the subject-specific object and the context needed to
  identify it;
- **Subheading or deck:** the core question, interpretation, contrast, or
  conclusion;
- **Body:** explanation, evidence, qualification, and causal relationship;
- **Cards or examples:** concrete instances that support an already introduced
  category or relationship.

Essential subject, place, or time information must not exist only in an
eyebrow whose size and position make it visually subordinate to an abstract
slogan.

The main heading may be expressive, but a newcomer must be able to identify the
screen's world without decoding the expressive phrase.

### Headline specificity test

Test every dominant headline:

> Could this exact headline plausibly describe five unrelated historical,
> cultural, scientific, or contemporary subjects?

If yes, it is probably a conclusion or mood line rather than sufficient
orientation. Do one of the following:

- add the specific subject, place, or period to the main heading;
- make the abstract phrase the subheading;
- pair it with an equally prominent contextual heading;
- rewrite it as a specific beginner question.

Example pattern:

```text
Weak as the only H1:
"Many cities, many political centers"

Contextual:
"The city-state world of Mesoamerica"
"Many cities, many political centers"

Beginner-oriented:
"Why did fifteenth-century Mesoamerica have no single political center?"
"Begin with the alliance among Tenochtitlan, Texcoco, and Tlacopan."
```

Use the pattern, not the example's exact language, for other subjects.

### Object-before-evaluation test

Do not visually announce an evaluation before the viewer has met its object.

Fail the screen when it asks the viewer to understand:

- "many," "different," "declining," "revolutionary," "central," or "contested"
  without first defining what is being counted, compared, changed, centered, or
  contested;
- a political, causal, stylistic, or scientific relationship before the
  entities in that relationship are introduced;
- a list of examples before explaining the category that makes them examples.

Mystery and delayed revelation may be used deliberately, but must not block
basic orientation or cause a direct-entry viewer to form a wrong model.

### Unfamiliar-entity threshold

When a screen introduces three or more unfamiliar names, places, works, groups,
or technical terms, first provide:

- the shared region, period, category, or system;
- why these entities are grouped together;
- the relationship the viewer is expected to compare;
- a map, diagram, timeline, definition, or concise orientation when it
  materially improves comprehension.

Cards are evidence or examples, not a substitute for introducing the category.

### Historical and cultural terminology

At first meaningful use:

- distinguish a historical or cultural region from a modern country or
  geographic label;
- include the original or widely recognized term when it prevents ambiguity;
- define its approximate extent, period, or usage in plain language;
- identify contested, translated, colonial, or anachronistic terminology;
- keep later short labels consistent with the first definition.

Do not "simplify" a precise historical term into a familiar but inaccurate
modern term.

### Standalone-entry screenshot test

For every route and every screen that can be entered, shared, searched, or
landed on independently:

1. hide the preceding screen and its narration;
2. inspect only the initial viewport or captured screen;
3. ask a reviewer with no subject knowledge to answer:
   - What is this about?
   - Where does it belong?
   - When does it belong?
   - Who or what are the named entities?
   - What relationship or question is being introduced?
4. mark non-applicable coordinates explicitly rather than inventing them;
5. revise when essential answers require guessing from atmosphere or tiny
   metadata.

The subject and the applicable place/time coordinate must be recoverable before
the viewer is asked to interpret the dominant thesis.

### Visual-versus-semantic hierarchy audit

For each screen, create a table:

| Rank | Most visually prominent element | Semantic job | Knowledge required | Appropriate rank? | Revision |
| --- | --- | --- | --- | --- | --- |

Compare the visual ranking with the newcomer's required learning order.

Fail when:

- an abstract conclusion dominates while its object is visually marginal;
- location or time is essential but appears only as tiny metadata;
- unfamiliar names receive large card treatment before their shared context;
- decoration, quotation, or motion appears to carry meaning that text never
  establishes;
- the reading order produced by size and position contradicts the intended
  explanation order.

Do not solve a semantic hierarchy failure merely by making all text larger.
Reassign roles, rewrite headings, reorder content, or strengthen persistent
context.

### Context gate result

Before outline approval and again during rendered design QA, record:

```text
CODEX_CONTEXT_GATE: PASS
```

Pass only when:

- required context appears before dependent conclusions;
- every dominant headline passes the specificity test;
- direct-entry screens pass the standalone-entry test;
- unfamiliar entities pass the introduction threshold;
- terminology is precise at first use;
- visual prominence matches semantic and pedagogical importance.

Otherwise record `CODEX_CONTEXT_GATE: FAIL`, revise, and rerun the checks.

---

## 8. Beginner comprehension audit

Run these audits on the full outline.

### 30-second audit

A newcomer should be able to answer:

- What is this website about?
- Is the central subject a person, event, place, idea, work, dataset, or product?
- Why might it matter to me?
- What can I do next?

If these answers depend on scrolling through several unexplained screens, revise
the opening.

### 3-minute audit

A newcomer should be able to answer:

- What is the essential context?
- Who or what are the main actors or ideas?
- What is the central story, mechanism, or question?
- Which parts are fact, interpretation, or debate?
- Where can I go deeper?

### 15-minute audit

A newcomer should have:

- a coherent mental model rather than disconnected facts;
- enough vocabulary to understand the site's main terms;
- access to evidence and sources;
- awareness of important limits or controversies;
- a useful connection to the present or to related material;
- clear next steps without being trapped in a linear tour.

### Screen-to-screen audit

For every transition, verify:

- the next screen does not assume a term or fact that has not been introduced;
- the new question follows naturally from the previous answer;
- repeated explanations add depth rather than merely repeat;
- no essential context exists only in hover, motion, audio, or imagery;
- an inner-route visitor can recover basic orientation;
- navigation labels make sense before the viewer learns specialist vocabulary.

### Teach-back audit

Write a two- or three-sentence explanation that a newcomer should be able to
give after the core journey. If the outline cannot support that explanation,
its learning sequence is incomplete.

---

## 9. Content and evidence rules

For historical, cultural, political, scientific, biographical, or disputed
subjects:

- distinguish established fact, attributed opinion, interpretation, and uncertainty;
- attach important claims to planned sources;
- explain why a quotation, image, document, or data point is being shown;
- avoid decorative quotation fragments that a newcomer cannot place;
- identify translation status and translator when material;
- avoid presenting a timeline as explanation without causal or thematic context;
- surface contested terminology and naming choices;
- plan captions that explain relevance, not only object identity;
- state when evidence is incomplete or the site's perspective is intentionally limited.

For data-driven subjects:

- define metrics in ordinary language;
- state time period, unit, source, update frequency, and exclusions;
- provide a non-chart explanation of the key takeaway;
- identify loading, unavailable, stale, and empty states;
- never make comprehension depend on color alone.

---

## 10. Visual-system traceability

Every major visual decision in the outline must trace to one of:

1. the approved Antigravity visual system;
2. an existing repository design-system rule;
3. a clearly labeled Codex assumption awaiting approval;
4. a necessary accessibility, localization, performance, or implementation
   adaptation.

For every route, verify:

- typography expresses hierarchy before decoration;
- color roles remain semantic and contrast-safe;
- composition fits the subject's time, place, culture, character, or evidence;
- deliberate asymmetry or non-grid layouts retain visible alignment anchors;
- recurring motifs have a defined meaning and do not become random ornament;
- motion explains sequence, causality, change, or spatial relationship;
- static and reduced-motion states preserve the same information;
- imagery has a narrative or evidentiary job;
- the system remains recognizable across routes without making every page identical.

The outline does not need to freeze every pixel. It must freeze the logic that
the six phases will implement.

---

## 11. Interaction, responsive, and language coverage

### Interaction

Document:

- what the viewer controls;
- what changes after an action;
- whether state persists;
- how the viewer returns or recovers;
- keyboard, focus, touch, and screen-reader behavior;
- failure and slow-network behavior;
- whether the action opens another site or language version.

Do not rely on interaction to reveal information required for basic
understanding.

### Responsive behavior

Do not describe mobile as "stack the desktop."

For every materially different screen, decide:

- reading order;
- content priority;
- navigation model;
- image crop or replacement;
- table, chart, map, or timeline adaptation;
- motion simplification;
- tap-target behavior;
- preserved alignment anchors;
- line-length and Chinese orphan control.

### Multilingual behavior

Plan:

- whether routes are paired, translated, summarized, or language-independent;
- language switch location and destination;
- fallback when a translation is missing;
- changes caused by Chinese/English density and additional-language expansion;
- font fallback and glyph coverage;
- proper-name and specialist-term presentation;
- translated citations, captions, dates, units, and metadata;
- `lang`, directionality, and screen-reader expectations.

Do not assume that identical screen geometry works for every language.

---

## 12. Approval protocol

Present the complete outline in chat before creating repository content.

End the presentation with:

```text
STATUS: WAITING_FOR_OUTLINE_APPROVAL
```

Ask the user to approve:

- the route map;
- the complete screen inventory;
- the beginner learning sequence;
- the cognitive hierarchy and contextual-orientation audit;
- live reading-scale floors and information-container choices;
- the 30-second, 3-minute, and 15-minute comprehension outcomes;
- the mapping to the Antigravity visual system;
- labeled assumptions and unresolved decisions;
- production dependencies and known risks.

Approval must be explicit and refer to the outline, for example:

- "批准这个逐屏大纲";
- "按这版逐屏大纲进入六阶段";
- "I approve this screen-by-screen outline."

An earlier selection of the Antigravity concept is not outline approval.
Silence is not approval. A generic "continue" is insufficient unless the
surrounding message unmistakably approves the presented outline.

If the user requests changes:

1. revise every affected screen and downstream dependency;
2. rerun the comprehension audit;
3. show the changed outline or a complete replacement when changes are broad;
4. request explicit approval again.

---

## 13. Post-approval rules

After approval:

1. record the approval wording or an accurate dated summary;
2. pass the Working Branch Gate;
3. create `<site-doc-root>/<slug>/screen-outline.md`;
4. include the Antigravity traceability table, full outline, audit, assumptions,
   and approval record;
5. reference the outline from Product/UX, visual, Figma, implementation, QA,
   analytics, and PR documents;
6. implement the six phases against the approved structure.

The approved outline is the structural source of truth.

Return for renewed approval when a change materially affects:

- route or navigation structure;
- number or order of major screens;
- a screen's primary learning job;
- the beginner explanation or assumed prior knowledge;
- the central narrative, evidence, controversy, or conclusion;
- a required interaction, language path, or cross-site relationship.

Minor copyediting, implementation detail, responsive tuning, or accessibility
improvement does not require renewed approval when it preserves the approved
meaning and journey. Record material deviations in the final handoff.

---

## 14. Failure conditions

Report `STATUS: BLOCKED` when:

- the Antigravity visual system cannot be read;
- the content source is too incomplete to establish even a provisional beginner journey;
- essential claims cannot be distinguished from unsupported invention;
- the user rejects the outline and no revised direction can be inferred;
- implementation has begun but the approved structure must materially change
  and renewed approval has not been received.

Report `STATUS: WAITING_FOR_OUTLINE_APPROVAL` when the outline is ready but
explicit approval has not yet been received.

Never bypass the gate because:

- a deadline is short;
- a design already looks polished;
- the user previously chose one of several concepts;
- the repository already contains a partial implementation;
- the subject seems familiar to the designer;
- the visual system is detailed.

---

## 15. Copyable outline template

```markdown
# <Site name> — Approved Screen Outline

## Gate status
- Antigravity source:
- Reviewed:
- Outline status:
- Approval record:

## Plain-language premise
<What it is, why it matters, what a newcomer can understand or do here.>

## Zero-knowledge audience
- Assumed known:
- Assumed unknown:
- Likely entry routes:
- Languages:
- Devices and constraints:

## Antigravity visual-system traceability
| Rule | Meaning | Screens | Implementation implication | Open question |
| --- | --- | --- | --- | --- |

## Route map
| Route | Purpose | Entry context | Language pair | Related routes/sites |
| --- | --- | --- | --- | --- |

## Beginner learning arc
1. What:
2. Why:
3. Context:
4. Main actors or ideas:
5. Story or mechanism:
6. Evidence:
7. Debate or limits:
8. Present relevance:
9. Next exploration:

## Complete screen inventory
| ID | Screen | Route | Primary learning job | Major states |
| --- | --- | --- | --- | --- |

## Screen <ID> — <Name>
- Route and position:
- Entry paths:
- Primary learning job:
- Why it exists:
- Newcomer's arrival question:
- Allowed prior knowledge:
- Likely unknowns:
- First visible content:
- Headline thesis:
- Plain-language explanation:
- Supporting evidence:
- Terms defined before or at first use:
- Fact / interpretation / disputed claim:
- Visual and editorial structure:
- Smallest essential text role / intended size:
- Initial viewport / below-fold continuation:
- Information container and rationale:
- Card or repeated-item content sufficiency:
- Color, size, shape, border, and grouping semantics:
- Antigravity rules applied:
- Interaction and states:
- Desktop / tablet / mobile:
- Chinese / English / additional languages:
- What must be understood before leaving:
- Likely misunderstanding:
- Expected comprehension: high / medium / low
- Remaining question:
- Transition to next screen:

## Cognitive hierarchy audit
| Screen | Required what/where/when/who/relationship | Dominant headline | Specificity result | Standalone-entry result | Visual/semantic rank result |
| --- | --- | --- | --- | --- | --- |

### Context gate
`CODEX_CONTEXT_GATE: PASS / FAIL`

## Comprehension audit
### After 30 seconds
### After 3 minutes
### After 15 minutes
### Teach-back statement

## Content and production dependencies

## Risks and unresolved questions

## Assumptions requiring approval

## Approval checklist
- [ ] Route map
- [ ] Complete screen inventory
- [ ] Beginner learning sequence
- [ ] Cognitive hierarchy and contextual-orientation audit
- [ ] `CODEX_CONTEXT_GATE: PASS`
- [ ] Reading-scale floors and screenshot-first rejection
- [ ] Information-container and card-composition rationale
- [ ] 30-second, 3-minute, and 15-minute outcomes
- [ ] Antigravity visual-system mapping
- [ ] Assumptions
- [ ] Dependencies and risks
```
