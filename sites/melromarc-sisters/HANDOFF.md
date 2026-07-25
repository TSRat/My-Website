# Melromarc Sisters handoff

## 2026-07-25 · Unified maintenance package

- Authoritative maintenance root: `sites/melromarc-sisters/`.
- `site.config.json` joins the common source, Figma, manifest, public-path,
  build, staging, and mirror contract.
- `MELROMARC-SISTERS/` remains a generated deploy mirror with rollback bundles
  preserved; edit the site package and run `npm run build:melromarc`.
- No visual, content, URL, analytics-provider, or framework change was intended.

- Last updated: 2026-07-25
- Project: Melromarc 姐妹故事
- Branch: `codex/melromarc-six-stage-readiness`
- Pull request: [Draft PR #18](https://github.com/TSRat/My-Website/pull/18)
- Preview: [exact implementation commit](https://raw.githack.com/TSRat/My-Website/edb5cd20374147c8738d4340374c7b90e930bede/MELROMARC-SISTERS/index.html)

## Current goal

Provide a maintainable source project without changing the public URL, the
multi-AU content structure, the feminist critical position, or the crimson /
blue royal-archive identity.

## Completed

- Located the originating ChatGPT Work conversation and Sites page; no usable
  source export was available.
- Reconstructed readable React/Vite source from the accepted deployed
  artifact.
- Preserved 13 stories, five first-change categories, 18 gallery entries,
  search, filters, random opening, saved stories, reader dialog, fate map, and
  source links.
- Preserved the `melromarc-saved-stories` localStorage compatibility key and
  added malformed-state handling.
- Added a visible provider-none Data entry without analytics collection.
- Added a repeatable source-to-mirror build and project-specific tests.
- Retained old unreferenced Vinext bundles as rollback material.

## Important decisions

- Multiple incompatible AUs are the project structure, not a continuity bug.
- The two non-negotiable foundations and feminist critique are protected
  creator positions.
- The reconstructed source is authoritative for future changes.
- `MELROMARC-SISTERS/` remains the committed Pages mirror, not the editing
  surface.
- Infrastructure is shared with Enheduanna; visual identity and content models
  remain independent.
- The public path stays `/My-Website/MELROMARC-SISTERS/`.

## Modified areas

- `sites/melromarc-sisters/`
- `sites/melromarc-sisters/site.config.json`
- `scripts/build-site.mjs`
- `scripts/recover-melromarc-source.mjs`
- `MELROMARC-SISTERS/`
- `tests/melromarc-readiness.test.mjs`
- `web/sites/melromarc-sisters/`
- root registry, technical, Agent, and handoff documents

## Verification

- `npm run build:melromarc`: passed; 18 modules.
- `node --test tests/melromarc-readiness.test.mjs`: passed; 4/4.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed; 327 local references across 44 HTML/CSS
  files at the implementation checkpoint.
- Browser smoke at 1280px and 390px: 0 broken images, 0 horizontal overflow,
  Data entry visible, 0 console errors.
- Interaction smoke: 13 default story cards; “伤害发生前” filters to 2;
  random reader opens; body scroll locks/restores; save writes
  `["final-deception"]` to the compatibility key.
- Extended Antigravity visual/accessibility matrix: not run; intentionally
  deferred under repository policy.
- Remote exact-commit preview: passed at 1280px with 13 stories, 18 gallery
  figures, Data visible, 0 broken images, 0 overflow, and 0 console errors.

## Remaining issues

- The Vite project is client-rendered and does not preserve old Vinext RSC/SSR
  metadata.
- Dialog focus trapping and focus return remain for Antigravity.
- Old rollback bundles have no creator-approved deletion date.
- Story conversation links may age independently of the repository.

## Next recommended tasks

1. Review the exact-commit preview from PR #18.
2. Run Antigravity visual comparison before merging if pixel-level confidence
   is required.
3. Merge Enheduanna PR #17 and Melromarc PR #18 one at a time; update the
   second branch from `main` if GitHub reports a shared-script/package conflict.
4. Continue future content work only in `sites/melromarc-sisters/`, then
   run `npm run build:melromarc`.
