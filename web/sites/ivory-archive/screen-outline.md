# IVORY ARCHIVE — Approved zero-knowledge screen outline

## Gate status

- Antigravity source: accepted production baseline plus Figma
  `Remaining Sites · Six-Stage Migration v2`, node `27:2`.
- Reviewed: 2026-07-28.
- Approval: creator wrote “批准这个逐屏大纲，按此进入六阶段。”
- Scope: rewrite the existing issues 01–15 and all 75 stories. Do not create
  issue 16.
- `CODEX_CONTEXT_GATE: PASS`

## Plain-language premise

IVORY ARCHIVE is a Chinese daily thought briefing. Each issue starts with five
news events from art and the humanities, social science, or feminism. It first
explains what happened, then why it matters, what the evidence can and cannot
support, how the archive interprets it, and what the reader can question next.
No prior knowledge of the people, institutions, methods, or terminology is
assumed.

## Zero-knowledge audience

- Primary reader: a curious general reader entering from the home page, search,
  or an individual story anchor.
- Assumed known: ordinary contemporary Chinese only.
- Assumed unknown: every proper noun, institution, discipline, historical
  event, research method, policy mechanism, and specialist term.
- Primary language: `zh-CN`; English names and titles receive a nearby Chinese
  identity explanation.
- Devices: desktop, tablet, and phone; all essential explanation remains
  available without hover, audio, motion, or expansion.
- Sensitive contexts: health, gender identity, reproductive rights, policing,
  colonial history, race measurement, climate disasters, and unequal access.

## Route map

| Route | Purpose | Direct-entry orientation |
| --- | --- | --- |
| `/IVORY-ARCHIVE/` | Explain the archive and expose all 15 issues | Premise, current scope, latest issue, search, filters, editorial method |
| `/IVORY-ARCHIVE/briefings/<date>/` | Teach one issue through five stories | Issue number/date, concrete theme, three-minute summary, story index, sources |
| `/briefings/<date>/` | Preserve legacy entry points | Redirect to the matching IVORY route |

## Beginner learning arc

1. What this archive is.
2. What happened in a story.
3. Who, where, when, and which unfamiliar terms are involved.
4. Why the story matters.
5. What evidence supports the account.
6. What the evidence does not establish.
7. Which statements are editorial analysis.
8. Which questions remain open.
9. Where the original source can be read.

## Screen inventory

### Home

| ID | Screen | Primary learning job | States |
| --- | --- | --- | --- |
| H01 | Archive orientation | Identify the product, audience, scope, and reading model | desktop/tablet/mobile |
| H02 | Latest issue | Understand the newest date, theme, and five events | normal/image unavailable |
| H03 | Search and filter | Find an issue by person, work, institution, subject, or date | default/filtered/no results |
| H04 | Fifteen-issue archive | Compare dates, concrete themes, and five-story scope | normal |
| H05 | Three editorial threads | Define humanities, social science, and feminism | desktop/mobile |
| H06 | Editorial method | Distinguish fact, source, analysis, uncertainty, correction, and reflection | expanded method |
| H07 | Data boundary | Explain what is and is not measured | provider unavailable/none |

### Shared issue route

| ID | Screen | Primary learning job | States |
| --- | --- | --- | --- |
| Ixx-01 | Issue orientation | Recover date, subject, and the relationship among five stories | direct entry |
| Ixx-02 | Three-minute summary | Read one plain sentence per story | desktop/mobile |
| Ixx-03 | Relationship explanation | Understand why these five stories share one issue | text plus optional diagram |
| Ixx-04 | Story index | Choose a story without specialist vocabulary | sticky desktop/collapsible mobile |
| Ixx-S1–S5 | Story scene | Learn what, why, evidence, limits, analysis, reflection, and source | image/source unavailable |
| Ixx-06 | Issue synthesis | Separate shared takeaway from remaining uncertainty | normal |
| Ixx-07 | Source register | Open all five original sources with type and date | accessible/restricted link |
| Ixx-08 | Previous/next issue | Continue non-linearly | first/last issue |

## Story-scene contract

Every `Ixx-Sn` screen uses this order:

1. plain headline and one-sentence summary;
2. visible primary-source link;
3. “发生了什么”;
4. “先补上背景” using the first two verified facts;
5. “为什么值得关注”;
6. “证据与边界” using the remaining facts and a source-type-specific limit;
7. “分析” clearly labeled as editorial interpretation;
8. “反思与练习”, preserving the creator angle as an optional inquiry;
9. original source name, type, date, and URL.

If the scene were the only part read, the visitor should be able to identify
the event, principal actors, applicable date/place, the central consequence,
the evidence limit, and the original source.

## Approved issue themes and information forms

| Issue | Approved theme | Story forms |
| --- | --- | --- |
| 01 | 谁能被留下：女性艺术、照护与公共记忆 | biography timeline; cost/system table; treatment/evidence diagram; public-culture timeline; five-person comparison |
| 02 | 谁在分配注意力与资源：历史物件、社交媒体与女性援助 | object timeline; consent relationship; science process; study table; funding-impact chain |
| 03 | 图像背后的制度：艺术、科学、气候与政治如何制造现实 | patron/work/viewer table; image-theory relationship; discovery timeline; attribution chain; quota comparison |
| 04 | 看见世界需要基础设施：银幕、天文台、大学与选票 | format comparison; career timeline; survey process; workforce table; ballot timeline |
| 05 | 规则怎样进入生活：文化符号、AI 审查与医学试验 | collage process; tradition comparison; threshold mechanism; jurisdiction flow; pilot evidence table |
| 06 | 离开原始背景之后：文物、女性艺术、实验与公共制度 | object timeline; canon comparison; trial-arm table; public/private stack; policy timeline |
| 07 | 分类决定谁被看见：迁徙、家庭、公共参与与医疗差距 | migration timeline; home/labor relationship; cluster table; eligibility flow; survival comparison |
| 08 | 证据如何被制造：复原、建筑、新闻、统计与诊断 | evidence layers; route diagram; platform flow; variable comparison; diagnostic timeline |
| 09 | 解释世界的框架：宗教、地方、童年、遗产与性别叙事 | concept ladder; place list; risk comparison; water-risk chain; trope history |
| 10 | 谁有资格探索：历史展览、宇宙研究与女性健康 | historical timeline; institution/product model; collision sequence; organoid process; health-infrastructure chain |
| 11 | 想法如何变成制度：创作、设计、政策、食物与司法 | draft timeline; object/environment comparison; policy flow; scenario trade-off; justice implementation chain |
| 12 | 文化与照护也是基础设施：书籍、音乐、统计与社区医疗 | bookmaking process; event timeline; survey table; care pathway; correlation/causation table |
| 13 | 系统不会自动正确：图像、算法、森林、卫星与孕期医疗 | image genealogy; app comparison; cooperation mechanism; system-capacity diagram; risk comparison |
| 14 | 分类不是自然生成的：土地、声音、天体与性别数据 | fifty-state process; place/work timeline; language-cue comparison; reclassification timeline; laboratory-input table |
| 15 | 观察从来不中立：镜头、望远镜、实验与警察记录 | photographic process; network/funding timeline; study table; perception diagram; policing-data flow |

## Visual-system traceability

| Existing rule | Meaning | Screens | Implementation implication | Open question |
| --- | --- | --- | --- | --- |
| Ivory paper, burgundy, forest green | Editorial archive, not SaaS | all | burgundy for issue/analysis; green for facts/sources; labels repeat meaning | none |
| Serif reading typography | Cultural-magazine reading rhythm | all prose | preserve Songti/Noto Serif stack and readable measure | final font availability |
| Small radii, hairlines, continuous layouts | Archive sheets rather than a card wall | home/issues | cards only for independently navigable objects | none |
| Asymmetric five-story grid | Editorial rhythm | H02 | preserve 3+2 composition on desktop; reflow on mobile | none |
| Images are content | Identify people, works, places, systems | stories | preserve alt and credits; AI editorials are not evidence | provenance remains as recorded |
| Restrained interaction | Supports lookup and sequence | search/index/diagrams | no autoplay, parallax, or persistent animation | none |
| Existing Figma node 27:2 | Accepted migration baseline | representative desktop/mobile | extend, do not replace, the site theme | no complete new Antigravity concept exists |

Approved assumption: preserve the accepted IVORY identity and extend only its
explanatory forms. This is not approval for a new art direction.

## Responsive and multilingual contract

- Desktop: prose plus evidence rail; optional diagrams use the same reading
  anchor.
- Tablet: two columns only where both remain readable.
- Mobile order never changes: summary → event → background → why → evidence →
  analysis → reflection → source.
- Tables become labeled definition lists rather than horizontally shrinking.
- Timelines become vertical. Relationship diagrams include an equivalent list.
- Essential text never requires expansion. Advanced definitions may use
  `<details>`.
- English proper names use `lang="en"` when practical; translated identities
  remain visible.
- Reduced motion preserves all sequence and state information.

## Reading-scale contract

- H1: 48–58 px desktop, 34–40 px mobile.
- Story title: 30–36 px desktop, 26–30 px mobile.
- Lead: 22–26 px desktop, 20–22 px mobile.
- Body: 19 px desktop, 18 px mobile.
- Essential explanation: minimum 17 px.
- Supporting label: 14–16 px.
- Citation metadata: 13–14 px and never the sole carrier of essential meaning.
- Chinese prose measure: approximately 25–40 full-width characters.
- At 200% zoom, ordinary prose remains one-axis reading.

## Comprehension audit

### 30 seconds

The visitor can identify a Chinese five-story news archive, its three editorial
threads, the current issue, and the next available action.

### 3 minutes

The visitor can explain one issue’s five events, see why they were grouped,
distinguish fact from analysis, and find every original source.

### 15 minutes

The visitor can teach back one coherent issue, define its key terms, explain
what the evidence supports and does not support, and connect the issue to a
larger institutional or cultural question.

Teach-back target:

> IVORY ARCHIVE first explains each event, then shows how images,
> classifications, public systems, or gendered power shape it. It labels the
> limits of the evidence and keeps the original source available.

## Dependencies and risks

- Rewrite 15 themes, 15 intros, and 75 beginner-facing headlines.
- Preserve all existing facts, qualifications, source dates, images, credits,
  and original URLs.
- Add source type, evidence boundary, issue learning goal, and issue connection
  to the literal data contract.
- Keep React/Vinext and Pages renderers equivalent.
- Existing automated URL audit: 58 links returned success; 17 returned
  access-control responses and require browser/manual review, not deletion.
- The current Figma baseline lacks the new timeline/table/process/relationship
  forms; editable representative frames must be added after this approval.
- The root worktree contains unrelated work. Implementation must remain in the
  isolated `codex/ivory-beginner-rebuild` worktree.
