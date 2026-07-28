# IVORY ARCHIVE — Approved beginner screen outline

## Gate status

- Original outline approved on 2026-07-28.
- Creator approved the four-part replacement outline on 2026-07-29 with the
  wording “批准这个四段式逐屏大纲”.
- Scope remains issues 01–15 and all 75 stories. Do not create issue 16.
- `CODEX_CONTEXT_GATE: PASS`

## Plain-language premise

IVORY ARCHIVE is a Chinese five-story news briefing about art and the
humanities, social science, and feminism. A reader does not need to know the
  people, institutions, works, or specialist terms in advance. Every story uses
the same Background / Event / Details / Analysis order and ends with one
directly clickable article link.

## Audience and entry assumptions

- Primary reader: a curious general reader entering from the home page, search,
  an issue route, or an individual story anchor.
- Assumed known: ordinary contemporary Chinese only.
- Assumed unknown: all proper nouns, institutions, disciplines, research
  methods, policy mechanisms, and specialist terms.
- Primary language: `zh-CN`.
- Devices: desktop, tablet, and phone.
- Essential information never depends on hover, expansion, audio, or motion.

## Route map

| Route | Purpose | Direct-entry orientation |
| --- | --- | --- |
| `/IVORY-ARCHIVE/` | Explain the archive and expose all 15 issues | Premise, latest issue, search, filters, reading method |
| `/IVORY-ARCHIVE/briefings/<date>/` | Explain one issue through five stories | Issue number/date, theme, three-minute summary, story index |
| `/briefings/<date>/` | Preserve legacy entry points | Redirect to the matching IVORY route |

## Beginner learning arc

1. What is this archive?
2. Who or what is the person, institution, work, or concept?
3. What happened in this story?
4. Which dates, numbers, works, places, and process details should I remember?
5. Why is it worth knowing?
6. Where can I read the related article?

## Screen inventory

### Home

| ID | Screen | Primary learning job |
| --- | --- | --- |
| H01 | Archive orientation | Identify the product, audience, and four-part reading model |
| H02 | Latest issue | Understand the newest date, theme, and five events |
| H03 | Search and filter | Find an issue by person, event, subject, or source |
| H04 | Fifteen-issue archive | Compare dates and representative themes |
| H05 | Three editorial threads | Define humanities, social science, and feminism |
| H06 | Reading method | Preview the four sections used in every story |
| H07 | Data boundary | Explain which anonymous interactions are available |

### Shared issue route

| ID | Screen | Primary learning job |
| --- | --- | --- |
| Ixx-01 | Issue orientation | Recover the date, theme, and five-story relationship |
| Ixx-02 | Three-minute summary | Read one plain sentence per story |
| Ixx-03 | Story index | Choose a story without specialist vocabulary |
| Ixx-S1–S5 | Story scene | Learn the background, event, details, analysis, and original article |
| Ixx-04 | Issue synthesis | Remember the connection among the five stories |
| Ixx-05 | Previous/next issue | Continue through the archive |

## Story-scene contract

Every story uses exactly this order:

1. plain headline and one-sentence summary, with no source link;
2. **背景** — fully introduce the unfamiliar person, institution, work, or
   concept as though the reader has not read the headline or issue intro;
3. **事件** — name who did what, where, and when, and include the main effect
   or research result instead of stopping at “a study was conducted”;
4. **细节** — use punctuated bullet points for the method, sample, dates,
   numbers, works, places, findings, and process; unrelated facts belong in
   separate bullets rather than one semicolon-linked sentence;
5. **分析** — first derive a conclusion from the preceding evidence or
   comparison, then extend it to the larger consequence in at least one more
   complete sentence;
6. one plain link after and visually outside the analysis section, named
   `<source organization>｜<descriptive story title>`.

The first body mention may not replace an unfamiliar name with “他”, “她”,
“其”, “这位艺术家”, or “该研究者”. Pronouns and shortened names may be used only
after the complete introduction. The page does not add “证据与边界”,
“来源不能证明什么”, repeated source-authority reminders, reflection exercises,
source-type registers, or raw URLs as reading sections.

## Approved issue themes

| Issue | Theme |
| --- | --- |
| 01 | 谁能被留下：女性艺术、照护与公共记忆 |
| 02 | 谁在分配注意力与资源：历史物件、社交媒体与女性援助 |
| 03 | 图像背后的制度：艺术、科学、气候与政治如何制造现实 |
| 04 | 看见世界需要基础设施：银幕、天文台、大学与选票 |
| 05 | 规则怎样进入生活：文化符号、AI 审查与医学试验 |
| 06 | 离开原始背景之后：文物、女性艺术、实验与公共制度 |
| 07 | 分类决定谁被看见：迁徙、家庭、公共参与与医疗差距 |
| 08 | 证据如何被制造：复原、建筑、新闻、统计与诊断 |
| 09 | 解释世界的框架：宗教、地方、童年、遗产与性别叙事 |
| 10 | 谁有资格探索：历史展览、宇宙研究与女性健康 |
| 11 | 想法如何变成制度：创作、设计、政策、食物与司法 |
| 12 | 文化与照护也是基础设施：书籍、音乐、统计与社区医疗 |
| 13 | 系统不会自动正确：图像、算法、森林、卫星与孕期医疗 |
| 14 | 分类不是自然生成的：土地、声音、天体与性别数据 |
| 15 | 观察从来不中立：镜头、望远镜、实验与警察记录 |

## Responsive and reading contract

- Desktop and mobile preserve the same four-section order.
- Body text remains 19 px desktop and 18 px mobile.
- Chinese prose remains approximately 25–40 full-width characters per line.
- Key details use a plain list and never become a comparison table or exercise.
- Each story has exactly one article link after analysis. It is visible,
  keyboard focusable, descriptive without surrounding context, and opens the
  stored `sourceUrl`.
- At 200% zoom, ordinary prose remains one-axis reading.

## Comprehension audit

- After 30 seconds: the visitor recognizes a Chinese five-story news archive
  written for newcomers.
- After 3 minutes: the visitor can identify the subject, explain one event, and
  say why it matters.
- After 15 minutes: the visitor can summarize an issue, recall concrete details,
  and open any related article without searching for its link.

## Production dependencies

- Preserve the 15 issue themes, 75 source URLs, source dates, images, credits,
  public routes, and five-story rhythm.
- Keep React/Vinext and GitHub Pages renderers equivalent.
- Search must include all four visible story sections and source names.
- The isolated branch remains `codex/ivory-beginner-rebuild`.
