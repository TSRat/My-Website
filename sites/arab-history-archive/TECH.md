# 技术说明：阿拉伯通史数字档案馆

## 真实维护来源

- 内容：`content/volumes/*.md`、`content/volumes.json`、`content/glossary.json`。
- 表现：`styles.css`、`site.js`、`assets/`。
- 生成器：`../../scripts/build-arab-history-archive.mjs`。
- 站点配置：`site.config.json`。
- 发布镜像：`../../ARAB-HISTORY-ARCHIVE/`，不得手改。

## 构建

```bash
npm run build:arab-history
```

共享 `build-site.mjs` 的 `generated-static` 模式调用站点生成器。生成器：

1. 读取卷册注册表与词条库；
2. 校验四时代、Future Volume 开关、唯一 ID、明确 era 映射和 Markdown checksum；
3. 移除 frontmatter，把 Markdown 转为语义 HTML；列表按原始空格或 Tab 缩进建立层级栈，保留无序、有序及两者混排的父子关系；
4. 从卷册注册表按 `order` 提取当前六篇 published 笔记，生成无脚本可用的笔记目录，并链接到对应卷册开头；
5. 在正文文本节点中进行最长词条匹配并生成 `GlossaryTrigger`；
6. 包裹阿拉伯字符以保证 BiDi；
7. 写入静态 HTML、CSS、JS、manifest 与 glossary JSON API；
8. 更新 `ARAB-HISTORY-ARCHIVE/` 镜像。

构建器不访问 Obsidian 路径。GitHub Actions 只读取仓库内快照，因此发布可复现且不会暴露本地绝对路径。

## 静态 API

静态托管没有动态路由处理器，因此同时生成：

- `api/glossary`（与路由契约一致的无扩展 JSON 文件）
- `api/glossary.json`（便于要求扩展名的工具直接读取）

页面首屏不依赖 fetch；同一词条数据嵌入 HTML，确保离线和 No-JS 降级。

## 性能

- 零外部运行时、零远程字体、零第三方追踪。
- 静态 HTML 直接包含正文，避免客户端 Markdown 解析。
- `IntersectionObserver` 代替逐帧 scroll 查询。
- scroll handler 只在 `requestAnimationFrame` 中写 transform。
- 目标 LCP `< 1.2s` 需在最终预览与生产环境测量；本地构建不能证明网络 LCP。

## 新增卷册

计算新文件 SHA-256，登记 `content/volumes.json`。不要把本地绝对路径写入配置。未确认分期时保留为未发布记录；不要随意使用 `eraIndex: 3` 兜底。

## 已知边界

- 当前最小 Markdown 渲染器保留标题、段落、多级列表、引用、代码、表格、强调与链接；Obsidian 内链显示为非跳转参考文本。
- 原笔记图片尚未公开；待逐项补齐 provenance、rights、alt 和证据角色后再进入 `assets/`。
- 完整多浏览器、全路线、键盘和视觉回归由 Antigravity 最终验证。
