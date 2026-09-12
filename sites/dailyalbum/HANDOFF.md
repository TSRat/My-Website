# DailyAlbum website handoff — 2026-09-04

Target: migrate the existing bilingual DailyAlbum public site into My-Website using its maintenance package, uppercase mirror and existing Actions deployment.

Base: `393feec`; branch: `codex/dailyalbum-public-site`. The unrelated Arab History checkout and `.impeccable/` files remain untouched.

Design input: existing approved DailyAlbum public-release design and HTML/CSS, reused as a migration baseline. No new Figma artifact or Antigravity approval is claimed. Final Antigravity validation remains pending.

Completed: eight source routes, shared stylesheet, public contact, portfolio footer, site config/manifest, registry and build command. No private app source, catalog, logs, profiles, credentials or user backups belong in this PR.

Verification: `npm run build:dailyalbum`, `npm run build:pages`, `npm run validate:pages` (1,651 references / 162 HTML/CSS files), shared maintenance test and `git diff --check` passed. Existing tracked `docs/` snapshots generated unrelated changes during Pages validation; they are excluded from this PR per repository policy. Exact preview/PR follows after browser smoke. Production merge is not yet authorized. The intended production URL is not proof that it is live.

App release is separate: public artwork is still absent and device launch trust/regression work remains. This website must not imply that the app is already on the App Store.

## 2026-09-12: App Store privacy-policy readiness

Target: prepare the public DailyAlbum privacy-policy pages required before App Store submission, without changing routes, deployment architecture, or implying that the app is available.

Completed locally: synchronized the current Chinese and English policy text into `sites/dailyalbum/privacy/index.html` and `sites/dailyalbum/en/privacy/index.html`. The policy now identifies the operator, explains local records, Widget artwork requests, external music-service searches, notifications, export and restore behavior, and the confirmed support-email retention rule: no more than 24 months after resolution, except legal or dispute needs. The generated `DAILYALBUM/` mirror was refreshed.

Verification: `npm run build:dailyalbum` and `npm run validate:sites` passed. Local browser checks confirmed the Chinese layout and the complete English policy text.

Current blocker: the intended GitHub Pages privacy URL returns 404 because this branch has not been merged and deployed. `dailyalbumapp.com` has not yet resolved. Do not enter either URL into App Store Connect until one returns the published policy over HTTPS. Production merge and deployment remain a separate owner-authorized action.
