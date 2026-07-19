# IVORY ARCHIVE design guide

- Last audited: 2026-07-19
- Primary stylesheet: `app/globals.css`
GitHub Pages stylesheet: `scripts/github-pages.css`

## Visual direction

当前视觉语言是纸张、索引卡、标本档案与文化杂志的混合体。它强调编辑设计和阅读层级，而不是软件仪表盘或通用营销落地页。

具体表现：

- 象牙纸底色和轻微纸纹。
- 酒红色用于期号、标题标记和关键操作。
- 森林绿用于来源、成功状态和结构性强调。
- 宋体/衬线字体承担标题和长文阅读，无衬线字体承担导航与元信息。
- 日期、期号、Fact File、来源与图片说明共同制造档案感。
- 卡片只是首页索引的一部分；长文页回到连续的编辑版式，不把每段都装进卡片。

## Color system

动态应用 `app/globals.css` 当前主要变量：

| Token | Value | Use |
| --- | --- | --- |
| `--ivory` | `#f4efe3` | 页面主底色 |
| `--paper` | `#fbf8f0` | 卡片和纸张前景 |
| `--paper-deep` | `#e8dfcf` | 图片占位与层次 |
| `--burgundy` | `#7c2838` | 栏目标记、标题和主操作 |
| `--burgundy-dark` | `#5e1d2b` | 深色交互状态 |
| `--forest` | `#214b3a` | 来源、筛选与结构强调 |
| `--ink` | `#22201d` | 正文文字 |
| `--muted` | `#6f685e` | 辅助说明 |
| `--line` | `#d8cdba` | 分隔线 |
| `--rose-paper` | `#ead9d9` | 纸张叠层和选中背景 |

Pages 静态版使用相同的象牙、酒红、森林绿方向，但具体 CSS 是 `scripts/github-pages.css`，不能假设两者逐像素相同。

## Typography

- 标题与长文：`Songti SC`、`STSong`、`Noto Serif CJK SC`、`Source Han Serif SC`、Georgia fallback。
- 导航与元信息：`PingFang SC`、`Microsoft YaHei`、`Noto Sans CJK SC`、Arial fallback。
- 期号和部分英文档案信息使用 Georgia。
- 标题字重普遍为 500，而不是全部使用粗黑体。

不要未经确认改成单一系统无衬线字体；衬线文字是档案馆氛围和阅读节奏的核心。

## Layout principles

- 页面宽度受 `page-frame` / `frame` 约束，桌面端保留明显外边距。
- 首页 hero 是元信息栏、主叙事和纸张插图的三列结构。
- 5 则故事在桌面端不是完全同尺寸：前三则各占 2/6，后两则各占 3/6，形成编辑节奏。
- 详情页使用编号、正文和 Fact File 的多列结构。
- 日刊档案使用连续列表，不改成重复卡片墙。
- 三条主题线索使用并列分栏，但具体文字说明必须保留。

## Images

图片是内容的一部分：

- 首页植物档案图建立整个项目的标本/档案隐喻。
- 每则故事图片承担人物、作品、地点或制度背景的识别作用。
- 详情页必须保留 `figcaption`、图片来源或生成说明。
- 当前图片通常降低一点饱和度，使不同来源进入同一编辑体系；hover 可轻微恢复饱和度。

不要把所有图片裁成同一种无语境缩略图，也不要删除图片说明。

## Interaction

动态应用和 Pages 镜像当前都包含：

- 分类筛选
- 关键词搜索
- 平滑滚动
- hover 位移与轻度阴影
- 清晰的 focus 样式与 skip link
- 每期索引和锚点阅读

交互服务于查找和阅读，不应加入与内容无关的视差、自动轮播或持续动画。

## Responsive behavior

- 桌面三列 hero 在较窄屏幕隐藏右侧插图或改为两列。
- 故事卡从 3/2 的编辑网格逐步变为单列。
- 详情页的 Fact File 在移动端回到正文之后。
- 导航、搜索和日期元信息在移动端必须可换行，不得造成横向滚动。
- 图片仍需保持可读的说明文字，不因移动端而完全移除 caption。

## Established choices

- 视觉关键词是“文化杂志 / 纸张档案 / 标本索引”，不是科技 SaaS。
- 主色不是蓝紫渐变，而是象牙、酒红和森林绿。
- 卡片圆角较小，页面仍依赖分隔线、留白和连续版式。
- 首页 5 则采用不完全对称的编辑网格。
- 内容图片经过统一调性处理，但不能牺牲辨认度。

## Needs creator confirmation

仓库和 Git 历史没有完整记录所有曾尝试并否决的 UI 方案。以下内容不能由 Agent 自行宣称为既定历史：

- 是否明确拒绝过玻璃拟态或某个具体版本。
- 动态应用与 GitHub Pages 静态版是否要求长期保持逐像素一致。
- 是否计划进一步强化植物标本视觉，或保持现状。

在得到确认前，维持当前编辑档案方向，不进行全站视觉重做。
