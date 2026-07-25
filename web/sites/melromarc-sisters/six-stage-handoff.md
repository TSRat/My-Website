# Melromarc Sisters six-stage implementation

- Site: `MELROMARC-SISTERS`
- Classification: `REBUILD`
- Figma: [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- Review branch: `codex/melromarc-six-stage-readiness`
- Pull request: [Draft PR #18](https://github.com/TSRat/My-Website/pull/18)
- Merge state: not merged

The original ChatGPT Work conversation and Sites page were located, but the
Sites interface did not expose a usable source export. The repository owner
explicitly authorized reconstruction, so the accepted deployed artifact became
the product, content, interaction, and visual baseline.

## 1. Product / UX

The rebuilt source preserves:

- 13 mutually incompatible story branches
- five “first change” categories
- the feminist critical position and two non-negotiable foundations
- search, filter, random opening, saved stories, reader, fate map, and gallery
- the distinction between canon reference, fan premise, story branch, and
  creator position

The visible Data entry follows the gallery and remains an archive-maintenance
boundary rather than a performance dashboard.

## 2. Visual exploration

The implementation retains the dark royal archive, Malty crimson / Melty blue
dual axis, gold memory lines, paper reading field, continuous editorial grids,
hard rules, and dark fate-map transitions. Existing character and gallery
imagery is retained; no new imagery was generated.

The Data appendix uses the site-native divided night field, gold metadata, and
square editorial rules. It does not collapse both sisters into one purple
gradient or generic rounded cards.

## 3. Figma design system

Node `27:2` contains editable desktop/mobile migration references and the
Melromarc Data component. Shared semantic foundations remain separate from the
site's character colors, fan-archive voice, story schema, and reader behavior.

Figma remains the visual design reference. The source reconstruction is the
maintainable production implementation.

## 4. Prototype and design QA

The production prototype supports mobile navigation, search, all five filters,
random story, saved-story toggle, reader open/close, scroll lock, Escape close,
fate-map buttons, gallery sources, and the Data entry.

Codex smoke checks passed at 1280px and 390px. Antigravity still owns the
extended deterministic matrix: desktop/tablet/mobile visual comparison,
non-empty search, every filter, saved state after reload, reader focus
trap/return, mobile menu/modal, and screenshot regression.

## 5. Production, GitHub, and preview

Readable React/TypeScript/Vite source now lives in
`static-sites/melromarc-sisters/`. The site-specific build:

```bash
npm run build:melromarc
```

builds in ignored `.site-build/melromarc-sisters/`, validates the compiled
entry, and updates the committed `MELROMARC-SISTERS/` Pages mirror. Old
unreferenced Vinext bundles remain rollback material and are protected by
hash-based tests.

Pages continues to copy the uppercase mirror. No workflow, route, slug, Vite
base, deployment permission, or Pages architecture changed.

The review implementation is delivered through Draft PR #18. An exact-commit
preview is added after the implementation commit is pushed.

## 6. Data / analytics

The visible appendix reports `data-provider="none"`. There is no analytics
network request, cookie, identity, raw search upload, story-text upload, or
cross-site store.

`site-manifest.proposed.json` preserves a provider-neutral future event
contract for search-length buckets, filters, random/story/path openings, save
toggles, gallery sources, and Data entry. This is explicitly distinct from the
functional local-only `melromarc-saved-stories` key.

## Verification summary

- Rebuild: passed; 18 modules.
- Targeted tests: passed; 4/4.
- Pages build and asset validation: passed.
- Desktop/mobile resource, overflow, Data, console, filter, reader, scroll-lock,
  and saved-state smoke checks: passed.
- Antigravity extended visual/accessibility pass: not run.

## Remaining review decision

The maintainable reconstruction is implemented but intentionally unmerged.
Creator review of the exact-commit preview and optional Antigravity comparison
determine whether PR #18 is ready to merge.
