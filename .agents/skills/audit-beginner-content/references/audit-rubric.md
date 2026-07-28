# Beginner Content Audit Rubric

## Contents

1. Mandatory gates
2. Orientation and object
3. Prerequisites and terminology
4. Process and intermediate steps
5. Numbers, comparisons, and results
6. Facts, analysis, disputes, and boundaries
7. Structure and visual containers
8. Operations, interaction, and exercises
9. Language, links, and multilingual behavior
10. Recall and application
11. Content-type adaptations
12. Scoring worksheet

## 1. Mandatory gates

Treat these as independent gates:

| Gate | Pass condition |
| --- | --- |
| Orientation | A direct entrant can identify the subject, scope, place/time when relevant, and reading purpose. |
| Object | The person, work, event, study, tool, service, or concept is concretely introduced before interpretation. |
| Process | The reader can restate the sequence, mechanism, experiment, or task without supplying missing expert knowledge. |
| Result | The content states what happened, what was found, or which direction each comparison goes. |
| Safety | Instructions explain irreversible or consequential actions before the reader performs them. |

Any mandatory gate scoring `0` produces `FAIL` regardless of the total.

## 2. Orientation and object

Check the title, subtitle, opening, first image, and first major heading.

Require:

- a concrete subject, not only an abstract theme;
- who or what it is;
- relevant time and place;
- the immediate question or problem;
- at least one concrete example, work, action, or visible feature;
- enough direct-entry context to understand the page without reading a previous
  chapter.

Fail patterns:

- meaning, ethics, theory, controversy, gaze, structure, or modernity appears
  before the object;
- the object receives one label but no introduction;
- the page assumes the reader recognizes a person, institution, experiment,
  war, tool, or artwork;
- a slogan occupies the main title while location, period, and subject remain
  tiny metadata;
- the first screen is visually complete but informationally empty.

Useful audit question:

> After the opening, can the reader describe one thing this subject made, did,
> contained, measured, changed, or allowed?

## 3. Prerequisites and terminology

Identify the smallest knowledge set required for the next section. Do not demand
the entire disciplinary foundation.

Require:

- unfamiliar terms explained at first meaningful use;
- relationships among people, places, organizations, variables, or tools;
- an explanation built from something the reader already knows;
- a need or problem before a new technical concept is introduced;
- headings that let experts skip basics without deleting them for beginners.

Do not require:

- number theory before arithmetic;
- transformer architecture before using an AI tool;
- the full history of linguistics before explaining a two-vowel experiment;
- obvious common-sense warnings.

Fail patterns:

- one unfamiliar term is defined through several other unfamiliar terms;
- a name appears in a card with only a category label;
- professional shorthand is copied from a paper, press release, or curatorial
  statement without restoring the omitted middle steps;
- "basic" means starting from remote underlying theory rather than the reader's
  present goal.

## 4. Process and intermediate steps

Require a traceable chain:

```text
starting state
→ action or event
→ intermediate change
→ result
```

For research:

- question;
- reason for studying it;
- participants or material;
- exact task or procedure;
- measurement;
- result.

For history:

- actors;
- location and period;
- event order;
- decisions or turning points;
- outcome.

For tools and services:

- what the tool or service is;
- where it is found;
- the object being changed;
- inputs and prerequisites;
- steps and feedback;
- result;
- undo, failure, and recovery.

Fail patterns:

- "researchers conducted an experiment";
- "the parties then fought";
- "the system processes the request";
- commands appear before the reader knows the current directory, target file,
  side effect, or recovery path;
- several causal steps are compressed into one abstract sentence.

## 5. Numbers, comparisons, and results

### Derived numbers

When a number is produced from other values, require:

1. each input;
2. the operation or relationship;
3. the total;
4. why the number matters.

A line such as "each participant completed 490 trials" is incomplete when the
trial design is necessary to understand the workload or method.

### Directional conclusions

Every comparison dimension must include:

```text
dimension
→ direction for each group or object
→ concrete example
→ likely reason when supported
→ conclusion
```

Fail:

- a table lists only what to observe;
- a chart has categories but the prose never states the result;
- the page names length, material, decoration, or status but does not say how
  the compared cases differ;
- isolated statistics replace explanation;
- an estimate is deleted merely because it is disputed.

Preserve original figures, then state the evidence level and specific dispute.

## 6. Facts, analysis, disputes, and boundaries

Distinguish:

1. directly confirmable source fact;
2. source author's or institution's interpretation;
3. editor's analysis;
4. unresolved inference.

Require analysis to point back to already presented material.

Fail:

- an editorial inference is written as a study result;
- correlation becomes causation;
- one local experiment becomes a theory of an entire population or field;
- a museum statement is treated as primary experimental data;
- "scholars disagree" appears without positions and evidence;
- caution deletes the original account, figure, or claim.

### Evidence boundaries

Allow no public note when ordinary attribution is enough.

Allow one brief closing note when a material limitation changes interpretation.

Allow one developed closing section only when disputed evidence,
reconstruction, contested identity, missing records, or competing explanations
are central content.

A useful boundary names:

- sample size or source base;
- participants or provenance;
- tested objects;
- task or method;
- untested condition;
- the exact population, context, or conclusion that cannot be extended.

Fail repeated generic language such as:

- does not represent everyone;
- cannot prove everything;
- the situation is complex;
- this is not the only interpretation;
- an artwork or film still is not literal historical photography when no reader
  could reasonably confuse it.

## 7. Structure and visual containers

Structure must follow understanding, not visual symmetry.

### Headings

Reject a mechanical `Context / Why / Evidence / Analysis / Reflect` sequence
when object introduction or process is missing.

### Cards

Each card must contain a useful conclusion, not only:

- name;
- category;
- date;
- keyword list.

### Tables

Tables must present actual results or mappings. A comparison table that only
lists questions transfers the analysis back to the reader.

### Images and captions

Every major image should:

- identify a person, work, place, or object;
- demonstrate form or style;
- support a comparison;
- explain spatial or temporal relations;
- show a process or mechanism.

Useful captions add identity, date, creator, role, scene, relationship, or a
specific visual observation.

Clearly label:

- AI-generated images;
- modern reconstructions;
- imagined scenes;
- materially altered maps;
- replicas likely to be mistaken for original evidence;
- fictional media changes that the surrounding prose could present as fact.

Do not replace useful caption information with obvious disclaimers.

### Typography and disclosure

Fail when essential teaching content is:

- tiny;
- low contrast;
- hidden in captions;
- collapsed by default without a clear reason;
- squeezed to preserve equal card height;
- visible only through hover;
- unreadable at ordinary desktop or mobile distance.

## 8. Operations, interaction, and exercises

Instructional content must explain:

- what the tool is;
- why it is used;
- where it is found;
- what object is being changed;
- which actions can be undone;
- what can go wrong;
- what success looks like.

Require explicit safety for destructive, privileged, financial, medical, legal,
privacy, or irreversible actions.

Exercises must use knowledge taught in the content. The site may provide a
complex instrument, but should not require the reader to build that instrument.

Good beginner tasks:

- compare two works using explained features;
- retell an event sequence;
- apply a stated rule to a case;
- trace movement on a supplied map;
- distinguish fact, source interpretation, and editorial analysis.

Fail:

- programming before programming was taught;
- professional acoustic manipulation after a basic vowel explanation;
- research-grade statistics after a conceptual introduction;
- an interaction lacks instructions, state feedback, reset, or recovery.

## 9. Language, links, and multilingual behavior

Prefer:

- explicit subjects and actions;
- short causal chains;
- concrete nouns;
- one main job per sentence;
- `中文名（English term）` at first use when both are useful;
- stable naming after first use.

Review:

- long merged sentences containing definition, mechanism, result, and meaning;
- abstract verbs such as "reflects," "constructs," or "embodies" without the
  concrete observation;
- pronouns without a clear referent;
- untranslated or inconsistently translated names;
- one- or two-character Chinese final lines in prominent text.

Every public link must:

- use a descriptive label;
- be implemented as a semantic clickable link;
- be keyboard reachable and visibly identifiable;
- point directly to the intended item rather than a search page or generic
  homepage;
- open successfully in the deployed result when a live surface is available.

Fail bare URLs, inert text, "click here," generic "source," misleading labels,
broken targets, and undocumented expected authentication or download states.

## 10. Recall and application

After reading, a newcomer should answer:

1. What is this?
2. Who participates?
3. Where and when?
4. What concretely happened?
5. How does it work?
6. What result, example, or directional difference supports the explanation?
7. Why did the result occur, when the cause is known?
8. Why is it worth attention?
9. What is fact, source interpretation, editorial analysis, or unresolved?
10. What can I now recognize, explain, compare, decide, or do?

Fail when the reader can repeat only:

- the issue is complex;
- scholars disagree;
- this reflects a larger structure;
- the result has limitations.

## 11. Content-type adaptations

### Public information or education

Apply all gates. Require the full object-to-understanding chain.

### Creative, portfolio, exhibition, or cultural experience

Do not force textbook density. Require the represented person, work, world, or
brand plus at least one concrete example before symbolism or critique.

### Service or task content

Prioritize task identity, prerequisites, steps, consequential calculations,
result, recovery, and safety.

### Technical tutorial

Prioritize tool identity, current context, target object, command meaning,
expected output, undo, and destructive-risk warnings.

### Short card, slide, or caption

Judge it in context. It need not contain the whole lesson, but it must complete
its assigned job and must not be the only location of essential orientation.

## 12. Scoring worksheet

Score each `0–2`:

| Dimension | Score | Mandatory? |
| --- | ---: | --- |
| Orientation |  | Yes |
| Object introduction |  | Yes |
| Prerequisites and terminology |  | No |
| Process and intermediate steps |  | Yes when applicable |
| Numbers, comparisons, and results |  | Yes when applicable |
| Facts, analysis, and causality |  | No |
| Disputes and evidence boundaries |  | No |
| Structure and visual containers |  | No |
| Operations, interaction, and safety |  | Yes when applicable |
| Language, links, and multilingual behavior |  | No |
| Recall and application |  | Yes |

Use `N/A` only when a dimension genuinely does not apply. Remove it from the
denominator rather than awarding automatic points.
