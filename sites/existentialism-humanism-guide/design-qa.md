# Design QA

## Baseline

- Source project: `/private/tmp/sites-six-stage-source/existentialism-humanism-guide/`
- Source commit: `bc3d393`
- Classification: `PRESERVE`
- Visual acceptance target: 原 Sites 页面

## Approved intentional differences

1. 键盘聚焦时出现“跳到主要内容”链接。
2. favicon、Next 静态资产与 hydration 脚本改为 GitHub Pages 子路径。
3. 移除只用于 Sites 开发预览的 `codex-preview` metadata。
4. 移除没有参与视觉呈现的 Geist 网络字体加载；CSS 中原有中文字体栈保持不变，并显式保留抗锯齿。

正文、章节顺序、色板、排版、原生 `details` 和困境交互没有获准进行视觉重设计。

## Codex checks

Status: `Codex basic smoke passed — Antigravity extended QA and exact-commit
preview verification remain pending until push`.

Engineering preflight passed:

- site lint：0 errors / 0 warnings；
- static export：passed；
- exported HTML metadata、Pages 子路径、skip link、原生 `details` 与困境 ARIA 状态：3/3 tests passed。
- 1440 × 900 的原 Sites 源码基线与迁移镜像并排检查，Hero、导航、构图、
  字体、色板、按钮与首屏节奏一致；证据为
  `qa-comparison-desktop.png`（左侧原始基线，右侧迁移镜像）。
- 390 × 844 的迁移实现截图为 `qa-implementation-mobile.png`；页面无横向
  溢出，首屏资源加载正常。
- 选择 “A · 留下” 后，按钮更新为 `aria-pressed="true"` 和
  `decision-option active`。
- 代表路线没有捕获到 console error 或 warning。
- Editable Figma review frame:
  `https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=33-73`.

Antigravity 待补：

- 两个困境选项均可切换并更新 `aria-pressed` / `aria-live`；
- 至少一个 `details` 可用鼠标和键盘开合；
- skip link 可见、可用并把焦点带到主内容；
- tablet、Safari、`prefers-reduced-motion`、全路线网络与 overlay 检查。

## Antigravity QA

Status: `Pending`.

建议范围：

- 1440×900、1024×768、390×844；
- Hero、路线图、四章、困境、八个误解和结尾；
- Chrome / Safari；
- 键盘顺序、focus ring、原生 details、困境状态；
- `prefers-reduced-motion`；
- 基线并排 / overlay，确认除已批准差异外没有视觉变化；
- 控制台和网络中不存在 Pages 子路径 404。

## Preview

Exact-commit raw.githack preview URL will be added after the branch is pushed.
A branch-name preview is not accepted as final evidence.
