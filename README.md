# TSRat（TS鼠）的网站档案馆

<p align="center">
  <img src="./assets/tsrat-logo.png" alt="TSRat（TS鼠）Logo" width="720">
</p>

这是 TSRat（TS鼠）的集中式网站仓库。它把人物专题、思想简报与创作型故事档案保存在同一个 Git 仓库中，再通过同一套 GitHub Actions workflow 发布到 GitHub Pages 的不同子目录。

采用集中式仓库的目的，是共享版本历史、部署入口与总导航，同时让每个网站继续拥有独立 URL、内容原则和视觉语言。新增文档体系用于让新的 AI Coding Agent 在没有聊天记录的情况下安全接管；它不代表现有项目已经被重构成统一框架。

## 公开入口

- 总入口：[TSRat Website Archive](https://tsrat.github.io/My-Website/)
- 仓库：[TSRat/My-Website](https://github.com/TSRat/My-Website)

## 当前项目

| 项目 | 用途 | 主要维护位置 | GitHub Pages URL |
| --- | --- | --- | --- |
| IVORY ARCHIVE | 每期 5 则的中文思想简报，覆盖艺术人文、社会科学与女性主义 | `app/briefings.ts`、`app/`、`public/`、`scripts/build-github-pages.mjs` | [IVORY ARCHIVE](https://tsrat.github.io/My-Website/IVORY-ARCHIVE/) |
| Enheduanna / 恩赫杜安娜 | “时间的女儿 004”人物专题；公主、祭司、作者与先驱 | 源码在 `static-sites/enheduanna/`；当前 Pages 输入镜像在 `ENHEDUANNA/` | [恩赫杜安娜：第一人](https://tsrat.github.io/My-Website/ENHEDUANNA/) |
| Hypatia / 希帕蒂娅 | “时间的女儿 001”人物专题；教师、哲学家与公共人物 | `HYPATIA/` | [教师之死：希帕蒂娅](https://tsrat.github.io/My-Website/HYPATIA/) |
| Melromarc Sisters | Malty 与 Melty 的非官方多重故事档案 | `MELROMARC-SISTERS/` | [Melromarc 姐妹故事](https://tsrat.github.io/My-Website/MELROMARC-SISTERS/) |

### 真实来源与静态快照

- `IVORY-ARCHIVE/` 是已提交的历史静态快照，最后一次目录级更新停在第 02 期。当前 GitHub Pages 版本由 `app/briefings.ts` 和 `public/` 在 Actions 中重新生成；不要把旧快照当作主要内容源。
- `static-sites/enheduanna/` 保存可读的 TSX/CSS 源码，`ENHEDUANNA/` 保存当前被 Pages workflow 直接复制的构建镜像。仓库暂时没有把两者自动同步的 npm script。
- `HYPATIA/` 是可直接发布的 HTML/CSS/JavaScript 与资源目录；仓库中没有可确认的另一份完整上游应用源码。
- `MELROMARC-SISTERS/` 是 Vinext/React 生成的静态 HTML、带哈希的 JavaScript/CSS 和图片；完整未编译源码位置无法从当前仓库确认。

修改任何站点前，先阅读该项目的 `CONTENT.md`、`DESIGN.md`、`TECH.md` 和 `HANDOFF.md`。

## 仓库结构

```text
My-Website/
├── README.md
├── AGENTS.md
├── TECH.md
├── HANDOFF.md
├── .github/workflows/publish-static-mirror.yml
├── app/                         # IVORY ARCHIVE 的动态应用与内容数据
├── public/                      # IVORY ARCHIVE 的图片和公共资源
├── scripts/                     # Pages 生成、构建与验证脚本
├── static-sites/enheduanna/     # Enheduanna 可读源码
├── ENHEDUANNA/                  # Enheduanna 当前发布镜像
├── HYPATIA/                     # Hypatia 当前发布目录
├── MELROMARC-SISTERS/           # Melromarc 当前发布目录
├── IVORY-ARCHIVE/               # IVORY 的旧静态快照，不是当前 Pages 来源
└── tests/                       # 当前应用构建后的 Node 测试
```

`docs/` 是 `npm run build:pages` 生成的临时 GitHub Pages artifact，已被 `.gitignore` 忽略，不是手工维护的源目录。

## 技术栈

仓库当前明确使用：

- Node.js `>=22.13.0`
- npm 与 `package-lock.json`
- React 19
- Next.js 16
- TypeScript 5.9
- Vite 8 与 Vinext
- Tailwind CSS 4（由部分构建产物和主应用使用）
- Cloudflare Vite plugin / Wrangler（用于主应用的 Worker 兼容构建）
- GitHub Actions 与 GitHub Pages
- Node 内置 test runner

仓库没有使用 Vitest，也没有独立的 `typecheck` npm script。完整版本以 `package.json` 和 `package-lock.json` 为准。

## 本地运行

要求 Node.js 满足 `package.json` 中的 engines 约束。

```bash
npm ci
npm run dev
```

`npm run dev` 运行根目录的 Vinext/Vite 应用，主要用于 IVORY ARCHIVE 的动态版本。它不等于重建所有三个独立静态站点。

生成与 GitHub Actions 相同的 Pages artifact：

```bash
npm run build:pages
```

生成结果位于被忽略的 `docs/`。如需本地查看完整多站点路径，可在仓库根目录运行：

```bash
python3 -m http.server 8000 --directory docs
```

然后访问 `http://localhost:8000/`。这条预览命令不属于 `package.json`，只用于查看静态 artifact。

## 构建与验证

```bash
npm run build:pages
npm run validate:pages
npm run build
npm test
npm run lint
```

- `build:pages`：生成 GitHub Pages 的 `docs/` artifact。
- `validate:pages`：检查生成页面中所有本地 HTML/CSS 资源引用，缺图、缺脚本、缺样式或越出 `docs/` 的路径会失败。
- `build`：运行 Vinext 的受限时长构建并验证 Worker artifact。
- `test`：再次运行 `build`，然后执行 `tests/rendered-html.test.mjs`。
- `lint`：运行 ESLint；命令中明确忽略若干已生成的静态镜像目录。

更完整的命令、输出目录和限制见 [TECH.md](./TECH.md)。

## GitHub Pages 部署

当前部署方式是 GitHub Actions，不是 Deploy from a branch。

1. 推送到 `main`，或手动触发 workflow。
2. `.github/workflows/publish-static-mirror.yml` 安装 Node 22 依赖。
3. workflow 运行 `npm run build:pages`。
4. `scripts/build-github-pages.mjs` 生成总入口与 IVORY ARCHIVE，并复制 `ENHEDUANNA/`、`HYPATIA/`、`MELROMARC-SISTERS/`。
5. `npm run validate:pages` 检查生成页面的本地资源引用，workflow 再执行 Hypatia 关键文件 smoke checks。
6. workflow 上传 `docs/`，再由 `actions/deploy-pages@v4` 发布。

不要在没有仓库所有者明确要求的情况下，把它改成 Deploy from a branch、恢复 `gh-pages` 发布逻辑或改变现有 URL。远程 `gh-pages` branch 目前仍存在，但当前 workflow 不使用它。

## 文档导航

根目录：

- [README.md](./README.md)：仓库总览、项目入口与基础命令
- [AGENTS.md](./AGENTS.md)：所有 AI Coding Agent 的工作规则
- [TECH.md](./TECH.md)：全局技术架构、资产路径与部署约束
- [HANDOFF.md](./HANDOFF.md)：仓库当前状态、风险与下一步

项目内：

- `CONTENT.md`：内容、史料、观点或创作边界
- `DESIGN.md`：现有视觉与交互原则
- `TECH.md`：该项目特有的入口、构建与镜像关系
- `HANDOFF.md`：该项目当前进度、已知问题与验证状态

项目文档位置：

- IVORY ARCHIVE：[`app/`](./app/)
- Enheduanna：[`static-sites/enheduanna/`](./static-sites/enheduanna/)
- Hypatia：[`HYPATIA/`](./HYPATIA/)
- Melromarc Sisters：[`MELROMARC-SISTERS/`](./MELROMARC-SISTERS/)

## 工作原则

本仓库的首要目标是保存独立项目的内容和设计选择，而不是把所有网站统一成同一种框架或 UI。任何修改都应遵循：

1. 先确认真实源文件和部署输入。
2. 只修改任务涉及的站点。
3. 保持现有 URL、大小写和相对路径。
4. 内容修改区分事实修正、表达优化、结构调整和观点改变。
5. 完成前构建、检查实际页面并更新对应 `HANDOFF.md`。

详细规则见 [AGENTS.md](./AGENTS.md)。

---

由 TSRat（TS鼠）制作与维护。
