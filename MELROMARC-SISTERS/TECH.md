# Melromarc Sisters technical notes

Last audited: 2026-07-19

## Deployment form

当前目录是 Vinext/React 生成的可直接发布 artifact。GitHub Pages build 不重新编译，只执行：

```text
copy MELROMARC-SISTERS/ -> docs/MELROMARC-SISTERS/
```

公开路径：

```text
/My-Website/MELROMARC-SISTERS/
```

## Active entry and bundle graph

入口：`MELROMARC-SISTERS/index.html`

入口当前引用或 preload：

- `assets/index-CpUB6AfA.css?v=d5b0fc7`
- `assets/layout-segment-context-C2etH_MC.js`
- `assets/rolldown-runtime-S-ySWqyJ.js`
- `assets/index-moQLGS8S.js`
- `assets/framework-DjPHiq1u.js`
- `assets/page-Wf3IdOaW.js`

入口还包含 Vinext RSC metadata 和静态渲染后的完整 HTML。

目录中存在相近的旧或重复 bundle，例如：

- `index-BHY2aQyK.js`
- `layout-segment-context-CKj_AMJa.js`
- `page-BhoJPGmL.js`

当前入口未引用这些旧文件。未经确认不要删除，它们可能用于回滚或来自前一次 artifact。

## No confirmed editable upstream source

仓库中没有本项目对应的 `app/*.tsx` 未编译源码目录。可从 `page-Wf3IdOaW.js` 读取故事数据和组件逻辑，但它仍是 minified build output。

因此：

- 不要声称根 `npm run build` 会重建 Melromarc Sisters。
- 不要在多个重复 bundle 中同时机械替换文本。
- 内容或 UI 修改前，优先确认完整上游源码是否存在于其他位置。
- 如果任务明确要求直接修补 artifact，只修改入口实际引用的文件，并验证缓存 query 与 preload graph。

2026-07-19 已审计当前全部 5 个 remote branches，未发现完整上游源码、原始 Vinext build command 或输出配置。

TODO: needs confirmation — 上述材料是否存在于仓库外；在得到材料前，不要从 minified artifact 反推并宣称得到“原始源码”。

## Client behavior

当前页面逻辑包括：

- React state 控制筛选、搜索、reader 和移动菜单。
- `localStorage` key：`melromarc-saved-stories`。
- reader 打开时设置 `document.body.style.overflow`。
- 随机打开当前过滤结果中的一条故事。
- 图片和来源全部使用相对路径。

若直接修改预渲染 HTML 而不修改 active bundle，hydration 后内容可能被 bundle 重新覆盖或出现 mismatch。反之，只改 bundle 不改预渲染 HTML，也可能让首屏与 hydration 后内容不一致。

## Assets

- 角色图：`images/malty-anime.svg`、`images/melty-anime.svg`、`images/melty-queen.svg`
- 故事图：`images/gallery/01-...jpg` 至 `15-...jpg`
- favicon：`favicon.svg`

入口和 bundle 使用 `./images/...` 相对路径。文件名和大小写不能改变，除非同步更新所有引用。

## Verification

生成 Pages artifact：

```bash
npm run build:pages
```

浏览器检查至少覆盖：

- 首屏人物图与 CSS 200 返回
- 13 条故事全部显示
- 5 个分类筛选与搜索
- 随机故事
- 收藏写入与重新加载恢复
- reader 打开、关闭和 body scroll 恢复
- 命运分支按钮
- 18 张 gallery 图片和来源链接
- 移动导航与小屏 modal
- 控制台 hydration/error 信息

## Known gaps

- 完整可编辑源码不在当前仓库中。
- 没有项目专用 build 或 test script。
- 静态 HTML 与 active bundle 双份内容可能在手工修改后失配。
- 目录有旧 bundle，但没有正式清理或回滚说明。
