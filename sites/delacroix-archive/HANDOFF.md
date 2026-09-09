# Delacroix archive handoff

## 2026-09-09 post-acceptance real-site accessibility repair

The user explicitly requested an actual website change for the issues described
in the redesign report. The seven primary report repairs were already present
in the real maintainable source at `8648ff0`; this follow-up closes the one
concrete, nonblocking issue that the report left open.

- Added `aria-labelledby="search-eyebrow"` to the search dialog and
  `aria-labelledby="image-dialog-title"` to the enlarged-artwork dialog.
- The labels are populated in the active Chinese, English, or French interface,
  so assistive technology receives a meaningful dialog name instead of an
  unnamed container.
- Rebuilt the generated `DELACROIX-ARCHIVE/` mirror from
  `sites/delacroix-archive/`; no mirror was hand edited.
- Added a readiness assertion that prevents either dialog label relationship
  from being removed accidentally.

Verification for this narrow change: `npm run build:delacroix`,
`node --check sites/delacroix-archive/app.js`, and
`node --test tests/delacroix-archive-readiness.test.mjs` passed (3/3).
At 390 × 844 in a real Chrome session, both the search dialog and the
enlarged-artwork dialog opened with their localized visible title content.

No push, pull request, merge, deployment, or Final Judge rerun had been
performed at the time of local validation. The earlier Final Judge acceptance
remains historical evidence for its prior frozen commit; it is not extended to
this post-acceptance source change. The broader browser and
assistive-technology lanes remain unverified.

## 2026-09-09 real-application redesign

Regression D was executed against the newest clean Delacroix branch state in an
isolated worktree on `codex/delacroix-real-redesign-20260909`, starting from
`ba9eb48c34ca5e6c79230bd053a838052e170dc9`. The production site was not used as
the mutation target because it still reflected an older `main` revision; no
push, pull request, merge, Pages deployment or production mutation was made.

The bounded redesign preserved the trilingual archive, red/green/blue room
system, Pierre Petit portrait, signature, stable hash routes, evidence graph,
artworks and local-only data model. It changed only the following product and
visual behavior:

- mobile home now reads identity -> portrait -> premise -> one Biography action;
- work-detail figures use the full mobile content column without cropping;
- search returns named biography periods, timeline events, journal records,
  sources and works, and reveals the selected record on arrival;
- direct timeline URLs lead with the requested event and its evidence;
- small blue-room labels use a lighter accessible accent while large display
  gold and metallic rules remain unchanged;
- CSS-imposed portrait rounding was removed (the historical source plate itself
  retains rounded photographic corners);
- Works provides a subordinate local saved/noted return filter without exposing
  private note text.

Independent Technical Verification passed the build, syntax, 3/3 targeted
tests, source/mirror parity, and a 27-case Chrome matrix covering nine routes at
1440x900, 1024x768 and 390x844. That matrix found no horizontal overflow,
detected clipping, console warning/error, HTTP 4xx response or failed request.
Design targeted rereview closed three findings and left the intrinsic portrait
silhouette partially resolved; Product targeted rereview closed all four
original findings. The only new technical backlog record is a nonblocking,
pre-existing LOW issue: the search and image dialog containers lack a
programmatic accessible name.

Broader Safari, Firefox, native screen-reader, Windows high-contrast, exhaustive
external-link and formal Antigravity Stage 3 lanes were not run. Therefore this
work is `REAL_APPLICATION_EXECUTED`, `BEHAVIORAL_EVIDENCE_ADDED` and
`WEB_PARTIAL_BEHAVIORAL`, not `WEB_E2E_VALIDATED`. No Final Judge acceptance is
claimed.

## Current target

Publish the accepted trilingual Delacroix archive in `TSRat/My-Website` using
the same maintainable-source, generated-mirror and GitHub Pages workflow as the
other public websites.

## Completed in this branch

- Added the authoritative direct-static package under
  `sites/delacroix-archive/` without local screenshots, automation traces or
  original research PDFs.
- Registered `/My-Website/DELACROIX-ARCHIVE/` in the portfolio table, shared
  build control plane and Website Archive hub.
- Added the generated `DELACROIX-ARCHIVE/` Pages mirror.
- Preserved 20 artwork images, 11 source-page images, the 1862 Pierre Petit
  portrait, three languages, 29 expandable timeline dossiers and source reverse
  mappings.
- Added canonical publication metadata and the portfolio footer link.
- Removed the obsolete unrendered trilingual edition-warning block that the
  creator had explicitly rejected; edition details now stay attached to the
  specific journal and source records where they are useful.

## Important decisions

- `sites/delacroix-archive/` is the only maintenance source. Never edit the
  uppercase mirror by hand.
- The approved implemented interface is the visual baseline. The shared Figma
  URL is an infrastructure reference, not a Delacroix-specific frame.
- Local notes remain browser-only and are never transmitted.
- The user explicitly requested public publication; extended Antigravity final
  validation is therefore recorded as skipped, not passed.

## Verification and delivery state

- Site-package validation: passed — 12 packages.
- Delacroix, maintenance and portfolio-logo tests: passed — 5/5.
- Full Pages build and asset validation: passed — 1,402 local references across
  139 HTML/CSS files.
- Basic browser smoke: desktop `1440 × 900` and French mobile `390 × 844`;
  timeline expansion, evidence links, local images, responsive containment and
  console/page errors passed.
- Implementation commit: `66b1d160e2c6988673b0e5626f00113861ed5883`.
- Pull Request: [#48](https://github.com/TSRat/My-Website/pull/48), merged as
  `088dba825fbecb4a51f060b1ed93daada8014b44`.
- Exact implementation preview:
  <https://raw.githack.com/TSRat/My-Website/66b1d160e2c6988673b0e5626f00113861ed5883/DELACROIX-ARCHIVE/index.html>.
- Pages run [33000235134](https://github.com/TSRat/My-Website/actions/runs/33000235134):
  passed, including artifact build, local-reference validation, upload and
  deployment.
- Production URL: <https://tsrat.github.io/My-Website/DELACROIX-ARCHIVE/>.
  Cache-resistant desktop and French mobile checks passed; the Website Archive
  root showed 12 cards and the Delacroix card loaded its portrait and target.

`ANTIGRAVITY_FINAL_VALIDATION: SKIPPED_BY_USER`
