# Hypatia design guide

- Last audited: 2026-07-19
- Primary styles: `HYPATIA/assets/hypatia-site.css` and `HYPATIA/assets/hypatia-v2.css`
Interaction script: `HYPATIA/assets/hypatia-refresh.js`

## Visual direction

当前版本采用统一的湖蓝—白色编辑展览风格：清晰、明亮、理性，但不把人物做成科技产品页面。它通过大面积白色、湖水蓝层级、细分隔线、宋体标题、长文阅读宽度和档案编号，建立“可持续查证的历史人物专题”。

Git 历史明确显示当前方向经过以下变化：

- 替换 legacy CSS，建立 clean base。
- 增加 unified lake-blue layout system。
- 重建章节和 type system。
- 多次提高文字、标签和对手人物区域的对比度。
- 恢复 Pages 交互并固定 `lake-v11` / `interactive-v11` 标记。

因此，统一湖蓝、清晰层级和可读性是已确认的当前选择，不应被随意替换成另一套全站风格。

## Color system

| Token | Value | Use |
| --- | --- | --- |
| `--lake-950` | `#12344a` | 最深标题与页脚色 |
| `--lake-900` | `#164a70` | 深蓝导航和强调 |
| `--lake-800` | `#1f6d9a` | kicker 和结构色 |
| `--lake-700` | `#247bb5` | 主交互色 |
| `--lake-600` | `#4a9bd3` | 进度条与焦点 |
| `--lake-300` | `#a9d4ef` | 边框与柔和层级 |
| `--lake-200` | `#d2e8f6` | 浅边界 |
| `--lake-100` | `#e7f3fa` | 浅蓝背景 |
| `--lake-050` | `#f4f9fd` | 极浅章节背景 |
| `--paper` | `#ffffff` | 页面底色 |
| `--ink` | `#163447` | 主文字 |
| `--muted` | `#526a78` | 辅助文字 |
| `--sand` | `#a87939` | 史料、古代或次要暖色 |

## Typography

- 标题：`Noto Serif SC`、思源宋体、宋体 fallback。
- 正文与 UI：`Noto Sans SC`、思源黑体、苹方、微软雅黑 fallback。
- 主显示字号约 `48–72px`，章节标题约 `36–48px`，正文 `16px`，lead `18px`。
- 正文 line-height 约 `1.85`，长文阅读优先于视觉压缩。
- `--reading-max` 为 `800px`，用于限制连续阅读宽度。

## Layout principles

- 固定 header、阅读进度条和当前章节高亮。
- hero、章节索引、档案卡、史料表和引用块共同构成长篇阅读地图。
- 正文宽度与全宽展示模块交替：普通段落保持窄读宽，时间线、比较表和图像可展开。
- `14px` 圆角只用于特定卡片和交互，不应把所有章节包进大圆角容器。
- 章节之间依靠留白、浅蓝背景和细线区分，不使用强烈无意义渐变。
- 史料边界、图片说明和引文出处应与对应内容保持视觉邻近。

## Images

网站混合使用：

- 公版历史绘画和图解
- 手稿、地图、仪器与建筑图像
- 《城市广场》（Agora, 2009）剧照
- AI 概念插画
- TSRat logo 与自制档案肖像

每类图片的证据地位不同。设计不能把所有图片裁成没有说明的 hero 素材；caption 中“不是历史肖像”“不是历史现场”“仅作电影叙事参考”等文字必须保留。

`assets/agora-hypatia-teaching.jpg` 是现代 AI 辅助插画，使用湖蓝、石灰白和克制酒红连接现有版式。它修复的是原先不存在的图片引用；不得把 caption 改回“电影剧照”或把画面当作史料复原。

## Interaction

`hypatia-refresh.js` 当前提供：

- 阅读进度条
- fixed header 滚动状态和 back-to-top
- 移动导航
- 当前章节导航高亮
- 学术证据筛选
- 新柏拉图主义层级 stepper
- 三种思想传统对比切换
- 西涅修斯书信内容切换
- 六种后世记忆切换
- Arrow keys 进行 tab 式切换，并维护 ARIA 状态

这些交互用于比较复杂信息，不是装饰。修改 HTML data attributes 时必须同步检查 JavaScript。

## Responsive and accessibility

- 页面以 `1280px` content max 和 `800px` reading max 为基础。
- 移动端 header 与导航会改排，不能只缩小桌面布局。
- 需要保持 skip link、focus outline、ARIA selected/pressed、键盘方向键操作和图片 alt。
- 新增动画必须支持 reduced motion；不要引入持续视差或自动播放。
- 颜色修改必须继续保持当前经过多次 Git 提交修正的文字对比度。

## Established choices

- 统一湖蓝体系替代早期 legacy CSS。
- 白底和清晰阅读层级优先于装饰密度。
- 展览/档案感来自编号、引文、图像说明和史料表，而不是做旧纹理。
- 交互集中服务于证据、思想对比和记忆层级。
- 视觉上可以使用现代电影和 AI 图像，但必须明确其非史料身份。

## Needs creator confirmation

仓库未完整记录所有被否决的设计草案。需要确认：

- 是否明确拒绝过玻璃拟态、深色古典风或其他具体方向。
- `lake-v11` 是否只是 cache/version 标记，还是创作者希望长期保留的设计版本名。
- 入口未引用的旧 CSS/bundle 是否作为回滚材料保留。

在确认前，不重做整个 UI，也不删除旧文件。
