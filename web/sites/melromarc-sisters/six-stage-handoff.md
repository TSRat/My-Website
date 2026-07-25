# Melromarc Sisters six-stage migration readiness

- Site: `MELROMARC-SISTERS`
- Classification: `REBUILD`
- Figma: [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- Review branch: `codex/melromarc-six-stage-readiness`
- Production state: blocked before Phase 5 implementation

This is a readiness package, not a claim that the compiled artifact was
migrated. The repository contains prerendered HTML, minified Vinext/React
bundles, images, and stale bundles, but no confirmed editable upstream source
or reproducible build.

## 1. Product / UX

Preserve the 13 mutually incompatible story branches, five “first change”
categories, feminist critical position, two non-negotiable foundations, search,
filters, random opening, saved stories, reader modal, fate map, and image shelf.

The future Data entry belongs after the image shelf and before the footer. It
must not turn the fan archive into a performance dashboard or imply one
canonical story outcome.

## 2. Visual exploration

Preserve the dark royal archive, Malty crimson / Melty blue dual axis, gold
memory line, paper reading field, continuous editorial grids, square rules, and
dark fate-map transitions. No new imagery is required.

The proposed Data appendix uses a divided red/blue night field with gold archive
metadata. It must not collapse the sisters into one purple gradient or generic
rounded cards.

## 3. Figma design system

Node `27:2` contains editable desktop/mobile migration references and the
Melromarc Data component. Shared semantic foundations remain separate from the
site's character colors, fan-archive voice, story schema, and reader behavior.

## 4. Prototype and design QA

The prototype contract covers mobile navigation, search, five filters, random
story, saved-story toggle, reader open/close and scroll lock, fate-map buttons,
gallery sources, and the future Data entry.

Antigravity should compare deterministic states at desktop, tablet, and mobile:
default archive, non-empty search, each filter, saved state after reload,
reader open and closed, and mobile menu/modal.

## 5. Production, GitHub, and preview

**Blocked.** Do not patch the prerendered HTML and minified page bundle in
parallel, do not edit every similar historical bundle, and do not call a
reverse-engineered artifact “upstream source.”

Phase 5 can begin when either:

1. the complete original project and build command are restored; or
2. the repository owner explicitly authorizes a maintainable rebuild using the
   current artifact as the accepted product/content/visual baseline.

Acceptance requires a structured story data source, source-controlled
components and styles, explicit base/asset behavior, parity tests for all 13
stories and five categories, saved-state compatibility, and a deliberate
artifact update in a Draft PR.

The current review package is [Draft PR #18](https://github.com/TSRat/My-Website/pull/18).
Its [exact-commit page](https://raw.githack.com/TSRat/My-Website/bc06df1a6786171ce1be8b6516a2f4c70fa40ed5/MELROMARC-SISTERS/index.html)
is the unchanged compiled baseline, not a migrated production preview.

## 6. Data / analytics

The proposed contract is stored in `site-manifest.proposed.json` and is not
referenced by the deployed artifact. It defines provider-neutral events for
search-length buckets, filters, random/story/path openings, save toggles,
gallery sources, and Data entry.

Analytics itself may use no network request, cookie, identity, raw search text,
raw story text, or persistent storage. This is distinct from the existing
functional `localStorage` key `melromarc-saved-stories`, which preserves a
reader's saved stories locally and must remain documented.

## Safe next action

Provide the upstream project or explicitly authorize a maintainable rebuild.
Until then, this branch records the target and immutable active-artifact hashes,
and leaves the public website unchanged.
