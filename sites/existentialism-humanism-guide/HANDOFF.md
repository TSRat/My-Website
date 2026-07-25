# Handoff

## Current target

把 OpenAI Sites 中的《存在主义是一种人道主义：初学者导读》迁入 `My-Website` 的独立可维护目录，同时保持现有内容、视觉身份、原生 `details` 和困境选择交互。

## Completed

- 从源 commit `bc3d393` 复制 React / Next 页面源码与公共资产。
- 排除源项目 Git 历史、依赖、构建缓存、Sites 托管清单、认证、Worker、D1 / Drizzle 和其他托管脚手架。
- 将目标构建改为 Next.js 静态导出。
- 默认 GitHub Pages base path 为 `/My-Website/existentialism-humanism-guide`。
- favicon 和 Next 静态资源跟随子路径。
- 新增键盘 skip link，并保留现有焦点与减弱动效规则。
- 保留全文、章节顺序、原生 `details` 和困境 React 状态。
- 新增内容、设计、技术、分析和设计 QA 文档。
- 新增 `EXISTENTIALISM-HUMANISM-GUIDE/` committed mirror、根 Pages 构建
  集成、Living Atlas 正式条目和真实页面缩略图。
- Figma 六阶段覆盖：
  `https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=33-73`。

## Important decisions

- Classification: `PRESERVE`.
- 不把站点改造成仓库其他站点的视觉风格。
- 只统一静态部署、路径、可访问性、QA 与分析规范。
- analytics 保持 provider-neutral specification only。
- 本批次不修改根注册表、构建脚本或 workflow。

## Unfinished

- 需要 Antigravity 扩展视觉、响应式、键盘、网络和对比 QA。

## Known issues

- `CONTENT.md` 中列出的书目、译本和公开访问策略仍需创作者确认。
- 本目录保留源项目版本锁定；依赖升级不属于本任务。
- `npm ci` 报告 6 个已知依赖漏洞（1 low、5 high）；本任务没有擅自运行 `npm audit fix` 或升级锁定版本，需在独立依赖审计中评估。
- 根 worktree 还有其他并行站点的未跟踪修改，不应与本目录混合归属。

## Modified files

- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `next.config.ts`
- `package.json`
- `package-lock.json`
- `README.md`
- `CONTENT.md`
- `DESIGN.md`
- `TECH.md`
- `ANALYTICS.md`
- `design-qa.md`
- `HANDOFF.md`
- `tests/exported-html.test.mjs`

## Verification

- `npm install --package-lock-only --ignore-scripts`: Passed；更新为迁移后的精简依赖图。命令报告 24 个漏洞，随后干净安装按实际平台依赖重新报告为 6 个。
- 首次 `npm ci --ignore-scripts`: Failed；全局 npm cache 含不可写文件并留下不完整 `node_modules`。只清理本目录生成的依赖后改用临时项目 cache。
- `npm ci --ignore-scripts --cache /private/tmp/npm-cache-existentialism`: Passed；356 packages installed。
- `npm run lint`: Passed；0 errors / 0 warnings。
- `npm run build:pages`: Passed；Next 静态生成 `/` 与 `/_not-found`，输出 `out/`。
- `npm test`: Passed；再次构建并通过 3/3 测试：metadata、Pages 子路径、skip link / `details` / 困境状态。
- Export size: 952 KB。
- Browser smoke: Passed at 1440 × 900 and 390 × 844 for load, real source
  side-by-side, horizontal containment, local assets, representative dilemma
  state, and console output.
- Antigravity QA: Pending。
- Root `npm run build:pages` / `validate:pages`: 由根 handoff 在 commit 前记录。

## Git state

- Branch: `codex/sites-six-stage-import`
- Base commit: `2d36674`
- Implementation commit:
  `2ecd4325f72a61d5d6d3ba5a1833809cdd3a6cdd`.
- Exact preview:
  `https://raw.githack.com/TSRat/My-Website/2ecd4325f72a61d5d6d3ba5a1833809cdd3a6cdd/EXISTENTIALISM-HUMANISM-GUIDE/index.html`.
- Draft PR: `https://github.com/TSRat/My-Website/pull/19`.

## Next step

把 Draft PR #19 与 immutable preview 交给 Antigravity 做扩展 QA。
