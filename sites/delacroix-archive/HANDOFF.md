# Delacroix archive handoff

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
- Exact branch preview, PR, merge commit, Pages run and live URL remain to be
  recorded after the Git delivery steps.

`ANTIGRAVITY_FINAL_VALIDATION: SKIPPED_BY_USER`
