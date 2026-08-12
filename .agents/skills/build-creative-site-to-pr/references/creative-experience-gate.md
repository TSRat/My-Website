# Creative Experience Gate

## Phase ownership

Treat every storyboard and creative-direction requirement in this reference as
an Antigravity Stage 1 intake criterion. Codex may verify traceability,
feasibility, and implementation completeness during Stage 2, but must not
author or approve the creative package. Treat all `CODEX_*_GATE` results below
as `CODEX_PRELIM_*_GATE` evidence for Antigravity Stage 3, not complete QA.

## Contents

1. Responsibility contract
2. Experience storyboard
3. Identity and orientation
4. Visual grammar
5. Emotional and density rhythm
6. Motion, sound, and media
7. Navigation and action
8. Originality without obstruction
9. Responsive, multilingual, and accessible behavior
10. Performance and asset integrity
11. Creative QA
12. Storyboard template

## 1. Responsibility contract

Define four outcomes before designing:

| Outcome | Question |
| --- | --- |
| Feel | What emotional or sensory state should the visitor enter? |
| Recognize | Whose work, identity, world, or proposition is this? |
| Remember | What image, phrase, gesture, or relationship should remain later? |
| Do | What should the visitor explore, contact, follow, buy, book, or share? |

Do not accept vague outcomes such as "premium," "cool," or "immersive" without
describing the content and behavior that create them.

The creative responsibility may dominate, but identity and continuation remain
non-negotiable.

## 2. Experience storyboard

Map every route and scene before implementation.

For each scene record:

- entry and exit;
- visual and narrative purpose;
- intended attention target;
- emotional temperature;
- content revealed;
- interaction and feedback;
- motion, sound, and media;
- fallback and reduced-motion state;
- loading and failure behavior;
- desktop, mobile, and language changes;
- relationship to the impression contract.

Show what a direct-entry visitor sees without relying on the previous scene.

The storyboard must include:

- first 3 seconds: identity or subject signal;
- first 10 seconds: available work or experience;
- first 30 seconds: navigation and meaningful next action;
- core experience arc;
- ending, return, or continuation path.

## 3. Identity and orientation

Creative ambiguity may invite exploration. It must not make the visitor guess
the site's owner, subject, or operability.

Require:

- author, project, exhibition, work, or brand identity;
- a recognizable title, mark, voice, portrait, work sample, or equivalent;
- visible continuation cues;
- a recoverable navigation model;
- a clear contact or action exit when the site promises one.

An abstract hero is acceptable only when identity is available within the same
initial experience or through persistent context.

Do not hide essential identity in:

- a loading sequence;
- sound;
- hover-only text;
- a tiny corner label;
- an unexplained symbol;
- the final scene.

## 4. Visual grammar

Create rules that can generate many pages without making them identical.

Define:

- typography roles and expressive limits;
- color roles and emotional/semantic meaning;
- image crop, scale, sequencing, and treatment;
- texture, motif, icon, frame, and decorative vocabulary;
- composition anchors, deliberate asymmetry, and negative space;
- page families and controlled variation;
- motion and sound grammar;
- how time, region, culture, personality, authorship, or medium affects form.

Distinctiveness should come from repeatable grammar rather than random effects.

For every strong element ask:

- What content does it reveal?
- What identity does it reinforce?
- What relationship does it explain?
- What memory does it create?
- Would the site lose meaning if it disappeared?

If the only answer is "it makes the screenshot look designed," reduce or remove
it.

## 5. Emotional and density rhythm

Do not make every scene equally spectacular, sparse, or dense.

Design a rhythm such as:

```text
arrival
→ orientation
→ immersion
→ focused work encounter
→ contrast or pause
→ deeper exploration
→ action or return
```

Use density changes deliberately:

- sparse scenes establish atmosphere or focus;
- dense scenes present work, evidence, or choice;
- pauses allow recovery;
- transitions mark conceptual change.

Empty area must focus attention, stage imagery, support motion, or clarify
grouping. Unused area caused by missing organization is not intentional
whitespace.

## 6. Motion, sound, and media

Give each animation a job:

- orient;
- reveal sequence;
- connect scenes;
- express material or personality;
- respond to action;
- explain transformation.

Reject motion that:

- delays access without meaning;
- makes controls move away;
- repeats after it has communicated;
- creates scroll hijacking or traps;
- makes text difficult to read;
- has no static equivalent.

Always provide:

- `prefers-reduced-motion` behavior;
- pause, stop, or mute when media persists;
- visible playback state;
- captions/transcripts when speech matters;
- poster, fallback image, and failure state;
- manual opt-in before sound;
- no autoplay audio.

Record source, creator, license, modification, and attribution for every asset.

## 7. Navigation and action

Experimental navigation must remain learnable.

Require:

- a stable home or reset path;
- visible interactive affordances;
- keyboard focus and logical order;
- current-location feedback;
- mobile/touch equivalents;
- meaningful link labels;
- escape from fullscreen, modal, or immersive states.

Do not disguise the primary action as decorative text. Do not let brand story
block contact, project viewing, purchase, booking, or following when those are
promised outcomes.

## 8. Originality without obstruction

Divide the experience into:

- **stable zones:** identity, navigation, primary actions, accessibility,
  consent, media control, and recovery;
- **expressive zones:** composition, image treatment, transitions, spatial
  narrative, typography, motifs, and scene rhythm.

Put the most experimental behavior where failure does not prevent orientation
or completion.

Reject:

- novelty applied uniformly to every component;
- different behavior for identical controls;
- invisible links;
- tiny essential text;
- mystery that depends on missing labels;
- motion that is the only source of meaning.

## 9. Responsive, multilingual, and accessible behavior

Compose mobile independently. Do not scale down a desktop poster.

For every scene define:

- reading and focus order;
- crop or media replacement;
- motion simplification;
- touch target and gesture alternative;
- typography and line-length changes;
- which signature quality must remain.

For every language define:

- font and glyph support;
- expansion tolerance;
- title and identity wrapping;
- translated navigation, media, captions, and metadata;
- language-switch destination;
- right-to-left behavior when applicable.

Preserve semantic HTML, alt text, focus visibility, contrast, zoom, and screen
reader access even when the visual order is unconventional.

## 10. Performance and asset integrity

Set budgets for:

- first meaningful identity/content;
- hero and above-fold media;
- fonts;
- JavaScript;
- animation and video;
- route transitions.

Prefer progressive enhancement. The visitor should still recognize the project,
view work, navigate, and act when heavy media fails.

Avoid:

- loading multiple unused font families or weights;
- uncompressed full-resolution media;
- canvas/WebGL without fallback;
- long blank preloaders;
- layout shift after fonts or images load.

## 11. Creative QA

### Identity test

Without explanation, can a new visitor identify:

- whose or what experience this is;
- what kind of work is present;
- how to continue;
- how to take the primary action?

### Memory test

After leaving the page for several minutes, can the reviewer state:

- one distinctive visual or interaction rule;
- one meaningful content idea;
- the author, project, or brand?

Memorability that excludes the content is insufficient.

### Static-equivalent test

Disable animation, sound, and heavy media. Verify that identity, work, sequence,
navigation, and action remain understandable.

### Live-use test

At required viewports and 100% zoom, verify:

- text remains readable;
- controls remain stable;
- no scene requires a screenshot-like fit;
- direct entries recover identity;
- reduced motion and muted use remain complete;
- keyboard and touch flows work;
- load failure does not become a blank experience.

Record:

```text
CODEX_PRELIM_IDENTITY_GATE: PASS | FAIL
CODEX_PRELIM_EXPERIENCE_GATE: PASS | FAIL
CODEX_PRELIM_CREATIVE_USABILITY_GATE: PASS | FAIL
```

## 12. Storyboard template

```markdown
# <Site> Creative Experience Storyboard

## Responsibility profile
- Primary: Creative
- Secondary: Information / Service / none
- Unacceptable failure:

## Impression contract
- Feel:
- Recognize:
- Remember:
- Do:

## Antigravity traceability
| Rule | Meaning | Scenes | Implementation |
| --- | --- | --- | --- |

## Experience arc

## Route and scene inventory
| ID | Route/scene | Purpose | Attention | Emotion | Exit |
| --- | --- | --- | --- | --- | --- |

## Scene <ID>
- Direct-entry identity:
- Content:
- Composition:
- Typography/color/image/motif:
- Motion/sound/media:
- Interaction and feedback:
- Stable navigation/action:
- Reduced-motion/static fallback:
- Loading/error fallback:
- Desktop/mobile/languages:
- Impression-contract contribution:

## Assets, rights, performance, and dependencies

## Secondary responsibility gates

## Approval record
```
