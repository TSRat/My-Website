# Enheduanna handoff

- Last updated: 2026-07-25
- Project: 恩赫杜安娜：第一人
- Current branch: `codex/enheduanna-six-stage-readiness`
- Draft PR: [#17](https://github.com/TSRat/My-Website/pull/17)

## Current goal

把已存在但缺少脚手架的 Enheduanna 可读源码重建为可重复维护、可生成 Pages 镜像的独立工程，同时保留历史内容边界、视觉身份、公开 URL 和现有 GitHub Actions 架构。

## Completed

- 找到对应 ChatGPT Work / Sites 任务与公开 Sites 输出；当前 Sites 编辑界面没有暴露源码导出。
- 确认仓库内 `static-sites/enheduanna/page.tsx`、`globals.css` 和 `public/` 已构成完整可读来源。
- 新增项目级 `vite.config.ts`、`dev:enheduanna` 和 `build:enheduanna`。
- 新增共享 `scripts/build-maintainable-site.mjs`：临时构建、入口检查、镜像更新、历史 bundle 保留。
- 从源码重新生成 `ENHEDUANNA/index.html` 与当前哈希 JS/CSS。
- 在 Sources 后实现站点原生的 `13 · DATA / SIGNALS` provider-none 入口，不启用分析服务或虚构指标。
- 修复已记录的 1024px hero/next-chapter 横向溢出；桌面视觉规则与移动布局保持不变。
- 更新项目 manifest、六阶段交接、组合 registry、技术文档和 targeted tests。

## Current source of truth

| Path | Role |
| --- | --- |
| `static-sites/enheduanna/page.tsx` | 内容与页面结构 |
| `static-sites/enheduanna/globals.css` | 视觉、响应式与 Data 附录 |
| `static-sites/enheduanna/public/` | 原始图片与 favicon |
| `static-sites/enheduanna/vite.config.ts` | 独立开发配置 |
| `scripts/build-maintainable-site.mjs` | 源码到镜像的共享发布器 |
| `ENHEDUANNA/` | 当前 Pages 发布镜像 |

## How to run

```bash
npm run dev:enheduanna
npm run build:enheduanna
node --test tests/enheduanna-readiness.test.mjs
npm run build:pages
npm run validate:pages
```

`npm run build:pages` 只复制镜像，不会自动重建站点。修改源码后先运行 `build:enheduanna`。

## Verification status

- Source build: Passed — Vite 8 transformed 16 modules and generated deployable hashed JS/CSS.
- Targeted tests: Passed — 3/3.
- Pages build: Passed.
- Pages asset validation: Passed.
- Browser smoke: Passed at 1280, 1024 and 390 CSS pixels; Data visible, 8/8 images loaded, no console errors, no horizontal overflow.
- Extended visual preservation: Not run by Codex; assign section-level desktop/tablet/mobile comparison and keyboard review to Antigravity.

## Known issues and remaining decisions

- 章节顺序仍包含 `07 → 08 → 06 → 09`；是否调整需要创作者确认。
- 旧哈希 bundle 继续保留为回滚材料；尚未建立长期归档/清理策略。
- 当前未连接 analytics provider；Data 入口只说明边界和未来可回答的问题。

## Protected decisions

- “第一位作者”既是结论也是问题。
- 神庙必须被呈现为宗教、经济和行政机构。
- 圆盘证明人物和职位，不单独证明全部作品归属。
- 双语引文、153/154 行差异、Lugal-Ane 暴力译释边界和 Inanna/Ishtar 历史融合解释不得随意改写。
- 左侧 spine、纸色、蓝红金对比、深色叙事转折和图像证据标签继续保留。
- 公开 URL 保持 `/My-Website/ENHEDUANNA/`。

## Delivery

- Branch: `codex/enheduanna-six-stage-readiness`
- PR: [#17](https://github.com/TSRat/My-Website/pull/17)
- Implementation commit: `28b7b8cc91b1cbcec53c0fea0eaf0fac404241bb`.
- Exact-commit Preview: <https://raw.githack.com/TSRat/My-Website/28b7b8cc91b1cbcec53c0fea0eaf0fac404241bb/ENHEDUANNA/index.html>.
- Merge: not authorized and not performed.
