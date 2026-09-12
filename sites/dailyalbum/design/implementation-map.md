# Preserved DailyAlbum site: implementation map

Design source: the existing DailyAlbum PublicSite HTML/CSS and approved 2026-08-30 public-release design. Owner directive on 2026-09-04: place it in My-Website following the other sites' arrangement. This is a migration; no replacement art direction or invented Figma link.

| Stage | Coverage | Work |
| --- | --- | --- |
| Product and structure | REUSE_COMPLETE | Four pages × Chinese/English: introduction, privacy, support, sources |
| Visual production | REUSE_COMPLETE | Existing record illustration, charcoal/ivory/coral palette, native typography |
| Implementation mapping | EXTEND_PARTIAL | Map existing HTML/CSS into the direct-static maintenance package |
| Prototype and checks | EXTEND_PARTIAL | Inspect existing page, then built routes, contact and language navigation |
| Engineering and delivery | CREATE_MISSING | Site registration, build/mirror, exact-commit preview and scoped PR |
| Data and analytics | REUSE_COMPLETE | No scripts, tracker, cookies, forms, account or site storage |

## Screen outline

- Introduction: what DailyAlbum does → random discovery, listening records, external playback → privacy/support. Visitors learn that it is a listening journal, not an audio player. No download claim before release.
- Privacy: device records → network/external services → notifications, backups and support email. Direct visitors can identify which product and data are described.
- Support: getting started → platform/cover problems → backup/restore → contact. Users learn not to delete the app before protecting records.
- Sources: named ranking publications → independent editing and artwork attribution. Links point to the source organizations.
- Each page has a paired language route, persistent product identity and access to the other pages. There are no hidden, loading, signed-in or modal states.

## Typography and layout

Reuse `styles.css` with system sans-serif fonts. Body is 16px, inner-page line height 1.75; introductory deck is 16.8–21.12px. Secondary navigation is 14.4px and nonessential footer 13.6px. Wide shell: 1100px maximum with 20px minimum side margins. Inner prose: 800px maximum. At 760px the hero/cards and paired section headers reflow into one column. No font downloads, fixed-height prose or animation are required.

## Validation ownership

Codex: source/mirror parity, build and asset checks, representative rendered routes and bilingual contact/navigation smoke. Antigravity: expanded cross-device, visual, accessibility and reading checks. Do not call the latter complete from the preliminary checks.
