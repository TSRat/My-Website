# 张勇的生活切片 · Product / UX specification

- Site: 张勇的生活切片
- Slug: `ZHANGYONG-PORTRAIT`
- Classification: `PRESERVE`
- Tier: A — editorial/static
- Primary route: `/My-Website/ZHANGYONG-PORTRAIT/`
- Alternate route: `/My-Website/ZHANGYONG-PORTRAIT/red.html`
- Source of truth: `sites/zhangyong-portrait/`

## Goal

让读者通过一个长页人物档案，理解张勇如何用自我命名、身体力量、实用主义、
照料、食物、阅读和幽默组织生活；不把材料写成完整传记，也不把创作篇章写成
已证实履历。

## Primary audience and value

- 主要读者：第一次进入张勇人物档案的人。
- 主要任务：在一次连续阅读中区分可见材料、分析性整理、创作性叙事和视觉隐喻。
- 核心价值：让“张勇”保持复杂、具体和可感，而不是被成功学、亲密关系或单一标签
  概括。

## Content boundary

| 内容类型 | 使用方式 |
| --- | --- |
| 人物画像分析 | 作为分析性整理；保留“根据所提供动态”的范围限定 |
| 《张勇发财记》 | 标记为创作篇章；产品、销量、金额和资产均不是事实证明 |
| 《张勇深夜觅食记》 | 标记为创作篇章；保留深夜选择、价格计算和食物带来的生活实感 |
| Underhail 报告 | 只保留材料已说明的长期友谊、语言共振和现实物件，不公开私密标识 |
| velna 关系报告 | 以创作者校正后的 `velna` 为准；只保留日常连续性、共同游戏、怪话语境与低礼貌高信任的关系模式 |
| 其他关系报告 | 不进入本次公开页面；避免扩大人物隐私与未经核实的关系推断 |

本次明确排除私人亲密关系、关系终结与亲疏排名材料。页面不公开 PDF、QQ 导出、
UIN、私聊内容或新的身份线索。

## Information architecture

现有公开锚点保持稳定，内容语义按下表更新：

| Anchor | Section | Role |
| --- | --- | --- |
| `main-content` | 张勇不是一种答案，是一种天气 | 入口与人物主张 |
| `fragments` | 命名权、普通与力量 | 分析性人物画像 |
| `timeline` | 解决真实问题的创作账本 | 将《发财记》拆成问题、做法与边界 |
| `favored` | 27.3 元深夜觅食账单 | 将《深夜觅食记》拆成价格、判断与选择 |
| `bawanglong` | 霸王龙照料档案 | 42g 到 49g 的责任与边界 |
| `underhail` | Underhail 与 velna 的重要关系轨道 | 线下现实锚点与网络日常连续性 |
| `mind` | 精神信息密度 | 阅读、观看、分析与恢复 |
| `field-note` | 兔子现场笔记 | 幽默与重新命名 |
| `data` | 数据与隐私 | Provider `none` 的可见说明 |
| `weather` | 天气更新 | 结束语与返回顶部 |

## Primary reading flow

1. 从天气隐喻进入人物档案。
2. 先理解自我命名、身体与“普人自得其乐”。
3. 进入两篇明确标记的创作叙事：实用主义账本与深夜觅食账单。
4. 回到有材料支撑的照料、现实友谊、阅读和幽默。
5. 在 Data 区确认隐私边界，再以“无需每天证明强壮”结束。

## Alternate parody flow

1. 读者在原版页脚附近发现一个低透明度小红点。
2. 悬停或键盘聚焦时出现“进入学习专区”提示。
3. 点击进入独立红色专题页；页首立即说明“民间戏仿·非官方网站”。
4. 通过要闻、精神要义、贯彻落实和群众来信重新阅读张勇的独特性。
5. 任何位置均可通过页首、导航或页脚返回原版。

红色版的主要价值是制造形式与人物材料之间的反差，不增加新的事实主张。

## Navigation and interaction

- 桌面主导航：`实用账本`、`深夜觅食`、`霸王龙`、`关系轨道`。
- 移动端沿用现有简化顶栏；正文 CTA 进入第一个内容章节。
- 所有核心内容和锚点在无 JavaScript 时可用。
- JavaScript 只负责当前锚点标记和 provider-neutral 事件准备。
- 不新增搜索、购物车、音效、横向滚动图表或真实购买流程。
- 隐藏入口低调但必须可聚焦、具备可读名称，并在 focus 时显露提示。
- 红色版所有导航均为真实锚点；群众来信使用原生 `details` 展开。
- `2,135,227+` 是固定且明确标注的戏仿数字，不写入存储、不随访问变化。

## State inventory

- Default：完整长页阅读。
- Hover：沿用现有直角边框、背景和文字信号反馈。
- Focus：2px mint 轮廓，5px offset。
- Active location：桌面导航使用 `aria-current="location"`。
- Loading / empty / error：静态正文无加载状态；Data 使用明确的 provider-none
  empty state。
- Reduced motion：关闭平滑滚动和非必要 reveal/ticker 动画。
- Hidden entry resting：只显示低透明度 9px 红点。
- Hidden entry hover/focus：显示“进入学习专区”文字提示。
- Parody disclosure：页首、访问量和页脚三处持续说明非官方与虚构边界。

## Responsive behavior

- Desktop：保持双栏 hero、网格章节、时间轴和图像窗。
- Tablet：内容块转为单列或简化列数，不隐藏核心文字。
- Mobile：保持现有 620px 规则、单列阅读、无横向溢出；图片与账单行继续可读。
- 本次不改变断点、主要字号比例、图像裁切规则或移动端顶栏结构。
- 红色版在 980px 转为两列，在 640px 转为单列；横向导航可滚动且不截断。

## Accessibility requirements

- 保留一个 `h1`、语义化章节标题与跳到主要内容链接。
- 图片 `alt` 继续描述具体内容和叙事角色。
- 不以颜色作为创作/分析状态的唯一提示；状态必须有可见文字。
- 原生链接可通过键盘访问，焦点样式不可移除。
- 不自动播放声音，不新增需要拖拽才能访问的内容。
