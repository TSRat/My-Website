# Living Atlas template + Data visual review

## Scope

- Baseline: deployed `main` at commit `16e9706`.
- Review branch: `codex/living-atlas-template-data`.
- Site: `THE-LIVING-ATLAS/`, English and Chinese.
- Viewports: desktop `1440 × 900`, tablet `1024 × 768`, mobile `390 × 844`.
- Browser review used fixed-viewport, section-level captures because full-page capture is unreliable for sticky and reveal regions in this site.

## Intentional changes

1. Add `Data` to the desktop navigation, mobile menu, generated Index, and Search.
2. Add a visible Data empty state that reports the real provider, storage, identity, and activation status.
3. Keep the existing Ivory editorial design language; do not introduce dashboard cards or an unrelated analytics visual system.

## Evidence

| State | Baseline | Review | Combined comparison |
| --- | --- | --- | --- |
| Home, desktop | `baseline/01-home-desktop.png` | `review/01-home-desktop.png` | `comparisons/01-home-desktop.png` |
| Index, desktop | `baseline/02-index-desktop.png` | `review/03-index-desktop.png` | `comparisons/02-index-desktop.png` |
| Menu open, mobile | `baseline/03-menu-mobile.png` | `review/06-menu-mobile.png` | `comparisons/03-menu-mobile.png` |
| Search “Data”, mobile | `baseline/04-search-data-mobile.png` | `review/07-search-data-mobile.png` | `comparisons/04-search-data-mobile.png` |
| Data section, desktop | — | `review/02-data-desktop.png` | New approved state |
| Data section, tablet | — | `review/04-data-tablet.png` | New approved state |
| Data section, mobile | — | `review/05-data-mobile.png` | New approved state |
| Data section, Chinese mobile | — | `review/08-data-zh-mobile.png` | New approved state |

The `comparisons/preview/` copies are reduced-resolution review aids. The original captures remain the evidence source.

## Human side-by-side review

- Home: hero composition, typography, artwork crop, whitespace, rules, and primary grid remain stable. The only visible desktop first-fold change is the approved `Data` navigation item.
- Index: typography, letter metadata, spacing language, and link styling remain stable. The approved Data entry creates a new `D` group and therefore reflows the alphabetical columns.
- Mobile menu: border, cobalt offset, row height, typography, and disclosure behavior remain stable. The approved Data row increases the menu height without overlapping the hero.
- Search: dialog geometry, dimming layer, focus treatment, and typography remain stable. The approved behavior changes the query result from `0 results` to one navigable Data result.
- New Data section: the layout uses existing hard rules, metadata, serif display type, Ivory surface, and Cobalt accents. It is not styled as a separate SaaS dashboard.
- Chinese variant: translated labels, Index entry, responsive stacking, and no-provider status are visible.

No unapproved visual differences were found in the representative states.

## Interaction and responsive checks

- Desktop: `scrollWidth 1425 ≤ viewport 1440`.
- Tablet: `scrollWidth 1009 ≤ viewport 1024`.
- Mobile: content `scrollWidth 375 ≤ viewport 390`.
- Mobile menu includes Data.
- Search returns one Data result; opening it closes the dialog and navigates to `#data`.
- English and Chinese Data states render.
- Browser console: zero errors and warnings in the checked Chinese mobile state.

## Accessibility and privacy review

- Data remains a normal anchor destination in desktop navigation, mobile navigation, Index, and Search.
- Existing focus behavior and keyboard search remain intact.
- No raw search text is emitted; only query length and result count are eligible properties.
- The default adapter has no provider, makes no network request, sets no cookie, stores no value, and collects no identity.
- A future provider requires an explicit privacy, retention, consent, and production verification pass.

## Gate result

**Passed for this additive batch.** The approved changes are the new Data entry, its empty state, and the related Index/Search/menu reflow. No claim is made that a provider or dashboard is active.
