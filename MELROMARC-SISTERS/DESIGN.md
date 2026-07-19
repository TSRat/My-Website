# Melromarc Sisters design guide

- Last audited: 2026-07-19
Primary stylesheet: `MELROMARC-SISTERS/assets/index-CpUB6AfA.css`

## Visual direction

网站采用“暗色王室档案 + 双生角色对照 + 编辑故事索引”的方向。Malty 的绯红与 Melty 的蓝紫在深夜海军蓝中并置，进入正文后转为纸张色和细线网格；命运分支和图像书架再次进入深色空间。

它不是粉红色姐妹友谊站，也不是通用 Anime fan wiki。视觉必须同时容纳：

- 王室、伤害和审判的重量。
- 姐妹之间的情感和童年记忆。
- 多重 AU 的档案结构。
- 女性主义批评的严肃性。
- 某些故事中重新获得日常生活的轻松。

## Color system

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#172033` | 纸张页主文字与线条 |
| `--navy` | `#101a31` | 深色结构背景 |
| `--night` | `#0a1123` | hero、命运分支和 footer |
| `--paper` | `#f4f0e7` | 主正文纸张色 |
| `--paper-deep` | `#e9e2d5` | hover 与纸张层次 |
| `--red` | `#a42f43` | Malty、伤害、章节重点 |
| `--red-bright` | `#d45462` | 深色背景上的红色强调 |
| `--blue` | `#5162aa` | Melty 和轻松故事强调 |
| `--blue-bright` | `#8192df` | 深色背景上的蓝色强调 |
| `--gold` | `#b8955d` | 王室、档案和连接线 |
| `--muted` | `#747786` | 次要说明 |

Malty 与 Melty 的颜色是结构性对照，不应合并成单一紫色渐变。

## Typography

- 标题和故事文字：宋体、STSong、Noto Serif SC、Source Han Serif SC、Georgia fallback。
- 导航和 UI：苹方、微软雅黑、Noto Sans SC、Arial fallback。
- 档案编号和部分英文使用 Georgia。
- Hero 标题大而克制，副标题以较小金色/米色呈现，不使用夸张发光字。

## Layout principles

- `76px` fixed dark header。
- Hero 将两个人物放在画面两侧，正文居中，角色颜色不互相吞没。
- Manifesto 使用编号、主命题和说明的三列结构。
- 故事档案桌面端为三列连续网格，以细线而非独立浮卡隔开。
- 命运分支使用纵向主轴与多个故事枝条，强调同一共同起点长出不同结局。
- 原作批评先以深色大段论点出现，再进入两个基础与来源。
- 图像书架使用连续展墙网格，不是普通 carousel。
- Reader 使用 modal 展开完整档案，避免首页卡片过载。

## Images

- Hero 左右人物图是视觉锚点，Malty 偏红、Melty 偏蓝紫。
- 前 3 张 gallery 图片是 Anime 形象参考。
- 后 15 张是用户提供的 AI 故事插图，caption 明确其性质。
- Gallery 图片承担故事母题和分支记忆，不是随机装饰。
- 图片来源链接和说明必须保留。

## Interaction

当前可见交互包括：

- 移动导航开关。
- “替我翻开一篇”随机故事。
- 关键词搜索。
- 按 5 个第一次改变时点筛选。
- 故事收藏，使用 `localStorage` key `melromarc-saved-stories`。
- 故事 reader modal。
- 命运分支按钮打开对应 reader。
- 点击 backdrop 关闭 reader；modal 打开时锁定 body scroll。

新增交互应继续服务于查找、比较分支和阅读，不加入自动轮播或与内容无关的粒子效果。

## Responsive behavior

当前 CSS 对 hero、三列故事网格、manifesto、命运分支、批评链和 gallery 提供响应式重排。修改时必须检查：

- 人物图在窄屏是否遮挡标题。
- fixed header 与移动菜单是否可用。
- 故事卡是否变为合理单列。
- filter strip 是否可横向滚动。
- growth map 的纵向轴和按钮是否仍可读。
- modal 是否在小屏内滚动而不把关闭按钮推出视口。
- gallery caption 是否仍显示来源。

## Established choices

- 深色 hero 与纸张正文交替，表现王室重量和档案阅读。
- 红/蓝双轴分别锚定姐妹，同时允许金色作为共同王室/记忆线。
- 故事卡不全部使用悬浮圆角容器；连续网格与细线更接近档案目录。
- 命运分支必须可视化“共同起点—不同改变时点—多个故事”。
- 女性主义批评拥有完整视觉章节，不是 footer disclaimer。
- Gallery 是项目内容，不是可随意删去的装饰区。

## Needs creator confirmation

仓库没有保存所有设计试验和明确否决记录。需要确认：

- 是否有计划用完整可编辑源项目替换当前编译 artifact。
- 当前 hero 的 Anime 参考图是否为长期选择。
- 是否明确拒绝过某种玻璃拟态、粉色浪漫或通用卡片风格。

在确认前，保持暗色王室档案、红蓝双轴和编辑网格，不进行整体视觉重做。
