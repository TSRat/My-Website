---
name: audit-beginner-content
description: "Audit whether public-facing content can be understood by an interested first-time reader without specialist training. Use to review Markdown notes, articles, educational pages, research explainers, history or culture features, artist and exhibition pages, technical tutorials, service instructions, website copy, scripts, slides, cards, captions, tables, diagrams, exercises, and rendered web pages for missing orientation, skipped intermediate steps, abstract analysis before the object, unexplained terms or numbers, empty comparison dimensions, excessive disclaimers, source confusion, unhelpful visuals, mismatched exercises, or inaccessible links. Default to read-only diagnosis and prioritized fixes; rewrite or edit only when the user explicitly asks."
---

# Audit Beginner Content

## Mission

Judge whether a person who is interested in the subject but has never studied
it can build a correct, concrete, and reusable mental model.

Use this principle:

> Make the object appear before asking the reader how to interpret it.

Do not reward academic tone, information density, visual symmetry, disclaimer
volume, or abstract analysis when the reader still cannot say what the subject
is, what happened, how it works, or why the conclusion follows.

Default to an audit. Do not silently rewrite files, redesign pages, change
claims, or weaken uncertainty. If the user requests implementation, complete
the audit first, preserve the original position and evidence level, then edit.

Read [references/audit-rubric.md](references/audit-rubric.md) completely before
issuing findings. Use
[references/report-template.md](references/report-template.md) for the final
report.

## Resolve the audit surface

Inspect all material the reader actually encounters:

- raw prose, headings, lists, cards, captions, tables, and source links;
- page order, collapsed sections, navigation, and direct-entry context;
- images, diagrams, timelines, maps, charts, audio, and video when available;
- exercises, interactive tools, forms, commands, and task instructions;
- desktop and mobile rendering when the request concerns a website.

For a website, inspect the rendered page as well as source content when
available. A clean Markdown file does not prove that the live typography,
ordering, disclosure, links, or cards work.

State any surface you could not inspect. Do not infer a rendered or interactive
pass from source alone.

## Audit creator feedback literally

When the audit is triggered by screenshots or creator comments, build a visible
surface inventory before diagnosing:

- record the exact viewport and the element named in the feedback;
- distinguish sticky header, page or card chrome, side rail, section heading,
  caption, marginalia, footer, and previous / next controls;
- enumerate every repeated number, label, navigation instance, image, and
  source of blank space before recommending removal or relocation;
- distinguish navigation **granularity** (page versus chapter), **label
  vocabulary** (numbers versus words), **placement**, and **persistence**;
- distinguish introduction or deck, body argument, pull quote, source note, and
  caption before recommending a content move.

Do not treat a spatial phrase such as "top right" as self-explanatory when both
the sticky viewport and each repeated page have a top-right corner. Mark the
ambiguity and request one short clarification when the repair would differ.

For creator-supplied asset folders, create a coverage ledger with filename,
intended screen, role, reuse restriction, alt/caption, and current use. A folder
request is not fulfilled when none of its relevant files appear, when requested
placement is silently changed, or when a restricted asset is reused for a
different job. Treat hero art, archive-card covers, video posters, directly
displayed video media, maps, evidence images, portraits, and decorative motifs
as distinct roles unless the creator explicitly approves reuse. Prefer positive
identification in captions. Do not pad the page or report with obvious lectures
about what an image is not; add a historical, reconstructed, film-still, or
modern distinction only when it prevents a plausible material misunderstanding.

Flag production notes that have leaked into public copy. Phrases about changing
the palette, introducing the next chapter, adding background, selecting an
image, counting screens, or explaining the layout belong in design, technical,
or handoff records unless the production process is itself the subject. Public
copy should tell the story or explain the object, not narrate how the page was
made.

Treat arbitrary width caps, unexplained empty columns, one- or two-character
headline lines, low-contrast dark surfaces, overlaps, and misaligned peers as
comprehension defects, not merely visual polish. Inspect the creator's actual
viewport before prescribing a new width or breakpoint.

Audit media geometry at four levels: intrinsic image dimensions and alpha,
wrapper or stage geometry, the rendered `img` or `video` box, and the visible
content after `object-fit`, `object-position`, clipping, or masking. Equal outer
frames do not prove that portraits, covers, or figures have an appropriate
visible scale.

When a defect may come from a shared selector, token, component, registry, or
generator, enumerate every consumer before recommending the fix. Inspect the
named target and all affected peers. A correction for one portrait, logo, card,
carousel item, or repeated figure must not silently resize or reposition the
others; prefer a target-specific rule when only one item is defective.

For historical and multilingual material, create a terminology ledger covering
names, transliterations, dates, places, translations, and key terms across
headings, body copy, captions, maps, navigation, alt text, metadata, and
committed mirrors. Also record the approved narrative horizon: a viewpoint-led
story must not reveal later political or geographic context before the intended
turning point merely because the author or designer already knows it.

## Establish the reader model

Unless the user specifies another audience, assume:

> An interested member of the public with ordinary life knowledge and no
> systematic training in this subject.

Do not treat the reader as an expert. Do not treat them as incapable of common
sense.

Before scoring, write a short internal prerequisite map:

1. What can this reader reasonably know already?
2. What will they probably not know?
3. Which missing fact or term would make later sections unintelligible?
4. Which process cannot be compressed into one sentence?
5. Which concrete example would let the reader form a picture?

## Run the audit

### 1. Perform the zero-knowledge read

Read in the order presented without importing outside expertise.

At the title, opening, first major section, and conclusion, record what a
newcomer can now answer. Check whether the content establishes:

- what or who the subject is;
- where and when it belongs;
- who participates;
- what concretely happened or what the reader can observe;
- how the process, mechanism, comparison, or task works;
- what result or directional difference was found;
- why the interpretation follows.

Do not repair gaps mentally. A gap the auditor can fill from expertise remains
a defect for the intended reader.

### 2. Run the rubric gates

Use every gate in `references/audit-rubric.md`:

- orientation and object;
- prerequisites and terminology;
- process and intermediate steps;
- numbers, comparisons, and directional results;
- facts, interpretations, editorial analysis, and causality;
- disputes, limitations, and disclaimer restraint;
- structure, cards, tables, visuals, and captions;
- operations, interactions, and exercise difficulty;
- language, multilingual behavior, and clickable links;
- final recall and application.

Score each dimension from 0 to 2:

- `0` — absent, misleading, or blocks understanding;
- `1` — present but incomplete, late, compressed, or hard to use;
- `2` — clear, correctly ordered, concrete, and usable by a newcomer.

Do not let a high total conceal a fatal gap. Orientation, object introduction,
process, result, or safety may independently fail the audit.

### 3. Use the heuristic scanner

For local text or source files, run:

```bash
python3 scripts/scan_beginner_content.py <file-or-directory>
```

Use `--json` when structured output helps.

The scanner finds signals, not truth. Review every match in context. Do not
report a phrase merely because a pattern matched, and do not pass content
merely because the scan is clean.

### 4. Test reconstruction

Attempt a plain-language reconstruction without copying the page:

1. This is...
2. It involves...
3. First..., then..., finally...
4. The main result or visible difference is...
5. This matters because...
6. The important limitation or dispute, if any, is...

Any blank, vague, or expert-dependent sentence identifies a missing bridge.

### 5. Prioritize findings

Assign:

- `P0` — unsafe or fundamentally misleading; the reader may take a harmful,
  irreversible, legal, medical, financial, or destructive action incorrectly;
- `P1` — blocks the core mental model or task;
- `P2` — materially increases confusion, effort, or misinterpretation;
- `P3` — polish that improves clarity but does not block understanding.

Each finding must include:

- exact location;
- what the reader encounters;
- what the reader still cannot know or do;
- why the missing bridge matters;
- the smallest effective repair;
- a short replacement example only when it clarifies the repair.

Do not produce generic findings such as "add more context" or "simplify the
language."

When the creator has already named the defect, do not replace it with a broader
redesign thesis. Verify the literal mismatch first, preserve accepted choices
that were not mentioned, and propose the smallest repair that satisfies the
stated location, wording, imagery, and hierarchy.

## Decide the gate

Report:

```text
BEGINNER_CONTENT_GATE: PASS | CONDITIONAL PASS | FAIL
```

Use:

- `PASS` when all mandatory dimensions score 2 and no P0/P1 finding remains;
- `CONDITIONAL PASS` when the core model is understandable but P2 repairs remain
  or an uninspected surface prevents full confidence;
- `FAIL` when any P0/P1 finding remains or a mandatory dimension scores 0.

Also report the score as `<earned>/<possible>`, but explain that the gate takes
precedence over the total.

## Preserve content integrity

When proposing repairs:

- retain specific names, dates, places, numbers, works, events, and sequences;
- add the missing bridge rather than deleting difficult knowledge;
- distinguish direct facts, source interpretations, editorial analysis, and
  unresolved inference;
- keep one concrete closing evidence-boundary note when it genuinely changes
  understanding;
- remove repeated or obvious disclaimer boilerplate;
- never replace correlation with causation;
- never convert a local result into a claim about an entire field or group;
- preserve the creator's position unless the user asks to change it.

Beginner-friendly means more complete intermediate steps, not fewer facts.

## Handoff

Finish with the report template. Lead with the gate and the reader's actual
understanding, then list prioritized findings and repairs.

If no actionable problem exists, say so directly and list the inspected
surfaces. Do not invent minor criticism to make the audit look substantial.
