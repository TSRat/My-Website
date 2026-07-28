export type BriefingStory = {
  category: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  title: string;
  summary: string;
  happened: string;
  whyItMatters: string;
  analysis: string;
  reflection: string;
  evidenceBoundary: string;
  sourceType: string;
  informationForm: "timeline" | "comparison" | "process" | "relationship" | "evidence";
  facts: string[];
  sourceName: string;
  sourceUrl: string;
  sourceDate: string;
};

export type Briefing = {
  date: string;
  displayDate: string;
  issueNo: string;
  theme: string;
  intro: string;
  learningGoal: string;
  connection: string;
  uniqueCount: number;
  topics: string[];
  stories: BriefingStory[];
};

export const knownHistoryTopics = [
  "Frida Kahlo 的符号化与展览热潮",
  "算法性厌女、推荐系统与深度伪造",
];

export const briefings: Briefing[] = [
  {
    "date": "2026-07-28",
    "displayDate": "2026.07.28",
    "issueNo": "15",
    "theme": "观察从来不中立：镜头、望远镜、实验与警察记录",
    "intro": "本期从摄影、射电天文、梦境研究、政治心理实验和警察拦停数据出发，解释观察工具与分类规则怎样影响我们最后看到的“事实”。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 摄影 × 城市与观看史",
        "image": "/story-images/brassai-secret-paris.jpg",
        "imageAlt": "夜间街灯、咖啡馆窗格、墙面涂鸦与暗房接触印相叠合的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Brassaï 的夜间巴黎、街头观察与暗房编辑，并非摄影作品复制、巴黎实景、人物肖像或展览视觉",
        "title": "Brassaï 回顾展解释“夜间巴黎”是怎样被拍出来的",
        "summary": "Heide Museum of Modern Art 以 150 余张原版照片回看 Brassaï：所谓“秘密巴黎”并非城市自动显影，而是夜行、取景、长曝光、印相和出版共同制造的观看方式。",
        "happened": "《Brassaï: Secret Paris》于 7 月 25 日在 Melbourne 开幕。展览以 1930 年代的巴黎夜景和城市人物为中心，同时纳入 Brassaï 与 Picasso 等先锋艺术家的交往、超现实主义实验及其持续拍摄的墙面涂鸦。",
        "facts": [
          "展期为 2026 年 7 月 25 日至 11 月 15 日，地点是 Melbourne 的 Heide Main Galleries",
          "展览与 Brassaï 遗产管理方合作，汇集 150 余张原版照片，是其作品在澳大利亚迄今最全面的回顾之一",
          "核心材料包括巴黎及其夜间人物、与 Picasso 等巴黎先锋艺术家的关系、超现实主义实验和墙面涂鸦摄影",
          "Brassaï 出生于匈牙利，后来在法国工作；展览的策展人为 Emmanuelle de l’Ecotais、Lesley Harding 和 Philippe Ribeyrolles"
        ],
        "sourceName": "Heide Museum of Modern Art",
        "sourceUrl": "https://www.heide.com.au/exhibitions/brassai/",
        "sourceDate": "展览开幕 2026-07-25；2026-07-28 核验",
        "whyItMatters": "Brassaï 的照片常被当作巴黎夜生活的透明证据，但镜头选择、可接近的场所和暗房处理都会决定谁被看见、谁仍留在阴影里。",
        "analysis": "把照片放回制作过程，既不取消它的诗意，也能避免把经过编排的城市想象误认成完整社会记录。",
        "reflection": "选择一个虚构街角，依次加入路灯位置、曝光时长、人物是否同意被看见、裁切和印刷版式；让同一地点生成五种“秘密巴黎”，显示纪实感如何由一连串决定产生。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "process"
      },
      {
        "category": "社会科学 × 天文学 × 科研经费与公共基础设施",
        "image": "/story-images/jodrell-bank-funding.jpg",
        "imageAlt": "大型射电碟形天线、七个联网台站、信号波纹与经费时间线构成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Jodrell Bank、e-MERLIN 与科研资金链，并非天文台实景、观测数据、预算文件或机构标识",
        "title": "英国停止续资 e-MERLIN，七台射电望远镜可能在 2028 年停运",
        "summary": "英国 STFC 决定不再续资以 Jodrell Bank 为核心的 e-MERLIN；现有经费将在 2028 年 3 月结束，若找不到替代支持，这套国家射电天文网络将停止观测。",
        "happened": "University of Manchester 于 7 月 27 日确认不续资决定，并表示将与政府、公共机构、产业和慈善资金方寻找出路。Jodrell Bank 游客中心仍开放，但科研网络与地标性的 Lovell Telescope 面临不同于场馆运营的资金危机。",
        "facts": [
          "e-MERLIN 是由 7 台射电望远镜组成的英国国家射电天文能力，核心设在 Jodrell Bank Observatory",
          "STFC 决定不再续资，现有资金将在 2028 年 3 月结束；没有替代支持时观测将停止",
          "Lovell Telescope 于 1957 年完成，当时是世界最大的射电望远镜，也是唯一能追踪 Sputnik 的设备",
          "Jodrell Bank 同时是 UNESCO 世界遗产地，每年吸引超过 100,000 名访客；游客中心的运营与此次科研经费并非同一资金线",
          "STFC 表示到 2030 年需节省 1.62 亿英镑；同期英国参与 Rubin Observatory 和 La Palma 观测的投入各削减 20%，BISON 太阳观测网络削减 40%"
        ],
        "sourceName": "University of Manchester／The Guardian",
        "sourceUrl": "https://www.staffnet.manchester.ac.uk/news/display/?id=34217",
        "sourceDate": "大学回应 2026-07-27；资金影响分析 2026-07-28",
        "whyItMatters": "一台射电望远镜的能力不只在巨大碟面，而在多台站同步、工程维护、数据处理和训练有素的人员。",
        "analysis": "经费终止会把一件分布式科学仪器拆成彼此孤立的地点；这与此前简报讨论的人文学岗位缩减不同，是天文观测基础设施及长期数据能力的独立事件。",
        "reflection": "把一次射电观测画成七个节点的共同作品：信号到达、时钟同步、数据传输、相关处理和论文依次展开；然后移除一个经费节点，观察哪些能力不是简单减少七分之一，而是整体失效。",
        "evidenceBoundary": "来源能确认当时公开的政策、资格、资金、行政数据或法律进展；执行结果仍可能随地区、时间、申诉和后续决定变化。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "relationship"
      },
      {
        "category": "社会科学 × 心理学 × 梦境与计算语言研究",
        "image": "/story-images/dream-language-model.jpg",
        "imageAlt": "梦境碎片、词语语义网络、睡眠波形与清醒思维轨迹叠合的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释梦境报告、清醒经验与自然语言处理，并非真实参与者、梦境再现、脑部扫描或研究图表",
        "title": "一项 3,700 份文本研究发现：梦会重组白天的经验",
        "summary": "研究者以自然语言处理比较 3,700 余份梦境与清醒经验报告，发现梦的内容同时受到心智游移、睡眠质量、个人对梦的重视和 COVID-19 封锁等共同经历影响。",
        "happened": "287 名 18 至 70 岁参与者连续两周记录梦与日常经验，并提供睡眠、人格、认知和心理资料。模型比较文本的语义结构，发现梦会保留熟悉地点与经验碎片，却经常把它们与不相关场景、视角和可能性重新组合。",
        "facts": [
          "研究分析 3,700 余份梦境与清醒经验描述，参与者共 287 人，年龄为 18 至 70 岁",
          "参与者连续两周记录梦与日常经验，研究者同时收集睡眠习惯、人格、认知和心理特征",
          "自然语言处理用于测量报告中的语义结构，其结果与独立人工评估者达到相近准确度",
          "心智游移较多者报告的梦更碎片化、场景切换更快；更重视梦者的报告通常更具感官细节，但研究只显示关联、不能证明因果",
          "COVID-19 封锁期报告包含更强情绪和更多限制、屏障、禁闭主题，随后这些模式逐渐减弱；论文 DOI 为 10.1038/s44271-026-00447-2"
        ],
        "sourceName": "IMT School for Advanced Studies Lucca／Communications Psychology",
        "sourceUrl": "https://doi.org/10.1038/s44271-026-00447-2",
        "sourceDate": "研究报道 2026-07-27",
        "whyItMatters": "这项研究没有证明梦存在固定密码，也不能从一段梦直接诊断人格。",
        "analysis": "它的价值在于把“梦是白天回放”改成可检验的问题，并展示计算方法能扩大文本比较规模；与此同时，书写能力、记忆与参与者对梦的兴趣仍会影响报告本身。",
        "reflection": "把同一天的清醒记录切成地点、人物、情绪和未实现行动四类卡片，再与梦境文本的语义连接对照；明确标出哪些联系来自文本、哪些是研究者或观众的解释。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "evidence"
      },
      {
        "category": "社会科学 × 社会心理学 × 政治极化与群体边界",
        "image": "/story-images/moderate-outgroup-effect.jpg",
        "imageAlt": "两组相对的政治阵营把中央的桥与中间人物同时推向对面的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释“温和派作为外群体”效应，并非真实选民、政党宣传、实验界面或研究数据",
        "title": "五项实验发现：政治两端都可能把温和派当成对手",
        "summary": "五项在线实验发现，政治立场较强、感到对方威胁并把议题道德化的人，更容易把温和政策或平均支持两方者归入“对面”。",
        "happened": "超过 3,200 名美国参与者评估堕胎政策、以色列与巴勒斯坦议题，以及 2024 年美国总统选举中的假想立场。即使一项政策在形式上位于中间，两端参与者也常认为它在帮助对手。",
        "facts": [
          "研究包含 5 项在线实验，共有超过 3,200 名美国参与者",
          "议题包括第一孕期堕胎政策、以色列与巴勒斯坦，以及 Donald Trump 与 Kamala Harris 在 2024 年总统选举中的选择",
          "一项实验在 2024 年大选前 5 天进行，参与者评估一名同等支持 Trump 与 Harris 的假想人物",
          "立场越极端、越感到对方带来威胁、越把议题视为道德问题，“温和派作为外群体”的效应越强",
          "论文《Whoever Is Not With Me Is Against Me》于 2026 年 7 月 27 日在线发表于 Journal of Experimental Psychology: General"
        ],
        "sourceName": "American Psychological Association／Journal of Experimental Psychology: General",
        "sourceUrl": "https://www.apa.org/pubs/journals/releases/xge-xge0001957.pdf",
        "sourceDate": "2026-07-27",
        "whyItMatters": "极化不只制造左右两端的敌意，也会改变中间位置的社会含义：不明确谴责对手，会被理解为暗中支持对手。",
        "analysis": "不过实验测量的是特定情境下的判断，不能把所有自称温和者当成同质群体，也不能把“中间”自动等同于更合理。",
        "reflection": "制作一条可移动的政策轴，同时显示政策位置、观察者立场、威胁感和道德化程度；让同一个中间点随着观察者改变颜色，呈现群体边界而非政策文本本身如何移动。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "relationship"
      },
      {
        "category": "女性主义 × 性别 × 警务裁量与数据治理",
        "image": "/story-images/trans-police-stops.jpg",
        "imageAlt": "停车线、警务决策节点、主观性别分类与不同概率路径叠合的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释警员的性别感知如何进入搜查与逮捕数据，并非真实警务现场、跨性别者肖像、执法记录或统计图表",
        "title": "加州 460 万次拦停数据显示：警员的性别判断会影响搜查与逮捕",
        "summary": "UCLA Williams Institute 分析加州 460 万次成年人警察拦停：被警员感知为跨性别者的人有 24%遭搜查、约 20%被逮捕，明显高于被感知为顺性别男性者的 14%和 10%。",
        "happened": "研究使用 California Racial and Identity Profiling Act 数据。该制度要求警员为每次拦停记录其对当事人身份的主观判断；研究者控制年龄和种族后，比较车辆与行人拦停中的搜查、违禁品发现和逮捕。",
        "facts": [
          "2023 年数据包含加州约 460 万次涉及成年人的车辆与行人拦停，其中 17,916 次涉及被感知为跨性别或性别不循规者",
          "被感知为跨性别男性或女性者有 24%遭搜查；顺性别男性为 14%、顺性别女性为 8%、性别不循规者为 11%",
          "2023 年共记录 576,735 次搜查；被感知为跨性别、性别不循规或顺性别男性者的违禁品发现率均约 27%，顺性别女性为 26%",
          "被感知为跨性别男性者的逮捕率为 19%、跨性别女性为 20%；顺性别男性为 10%、顺性别女性为 7%、性别不循规者为 9%",
          "数据来自 California Racial and Identity Profiling Act，记录的是警员的主观感知而非当事人的自我报告；分析控制了种族与年龄"
        ],
        "sourceName": "Williams Institute at UCLA School of Law／University of California, Irvine",
        "sourceUrl": "https://williamsinstitute.law.ucla.edu/publications/ca-police-gender-stops/",
        "sourceDate": "2026-07-28",
        "whyItMatters": "数据并未测量当事人的自我认同，而是在测量警员如何读取外表并据此行动。",
        "analysis": "被感知为跨性别者的搜查率更高，但违禁品发现率与其他群体相近，说明差异不能简单解释为搜查更“有效”；同时，行政分类本身也可能误认身份。",
        "reflection": "把一次拦停拆成“警员感知、是否搜查、是否发现违禁品、是否逮捕”四个节点，分别显示数据记录了什么、没有记录什么；让读者看见主观分类怎样在下一步变成制度后果。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "process"
      }
    ],
    "learningGoal": "理解观察结果不是现实的直接复制，而是由工具、经费、研究设计和制度判断共同形成。",
    "connection": "五则故事都包含同一个过程：先有人或机构选择怎样观察，再由这个选择决定什么会成为可见、可测量、可执行的结果。"
  },
  {
    "date": "2026-07-27",
    "displayDate": "2026.07.27",
    "issueNo": "14",
    "theme": "分类不是自然生成的：土地、声音、天体与性别数据",
    "intro": "红色国旗、沙漠工作室、外语元音、彗星和实验室参考区间看似属于不同领域，但它们都提醒我们：分类是人根据目的和证据做出的决定。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 艺术与设计 × 土地、国家与材料",
        "image": "/story-images/red-flags-earth.jpg",
        "imageAlt": "五十面抽象旗帜、赭红土壤纹理与地图碎片组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Andy Goldsworthy《Red Flags》的材料、地理与国家象征，并非艺术作品复制、展览现场、美国国旗或历史地图",
        "title": "Andy Goldsworthy 用五十州土壤制作五十面红旗",
        "summary": "Andy Goldsworthy 的《Red Flags》把美国五十州的土分别研入五十面旗帜；每面都失去州徽，却保留来自具体土地的颜色与颗粒。",
        "happened": "FOR-SITE Foundation 将这组 2020 年作品带到旧金山 Fort Mason，完成西海岸首展。五十面旗帜各为 5×8 英尺，分别以美国一个州的土壤染红；展览恰逢《独立宣言》签署 250 周年，另以红土作品补充 Goldsworthy 长期使用土地材料的线索。",
        "facts": [
          "展览于 2026 年 7 月 1 日至 30 日在 San Francisco 的 Fort Mason Gateway Pavilion 举行，免费开放",
          "装置由 50 面旗帜组成，每面尺寸为 5×8 英尺",
          "每面旗帜分别以美国 50 个州之一采集的土壤染成红色，不使用各州通常的徽记",
          "作品最初于 2020 年在 New York 的 Rockefeller Center 展出，此次为美国西海岸首展",
          "旧金山展览与《独立宣言》签署 250 周年同年发生，并补充展示 Goldsworthy 以红土为材料的其他作品"
        ],
        "sourceName": "FOR-SITE Foundation",
        "sourceUrl": "https://www.for-site.org/andy-goldsworthy-red-flags",
        "sourceDate": "展期 2026-07-01 至 2026-07-30；2026-07-27 核验",
        "whyItMatters": "旗帜通常把土地变成抽象边界，《Red Flags》反向把国家符号重新变回会掉粉、带色差的物质。",
        "analysis": "五十面看似统一的红色仍来自五十处不同地质与采集关系，也让“统一”显出运输、劳动和策展所需的基础设施。",
        "reflection": "制作一张从土样到旗面的材料履历：标出采集地、地质颜色、运输距离、染色与悬挂方式；然后隐去州名，测试观众还能依据哪些线索想象国家。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "process"
      },
      {
        "category": "艺术人文 × 女性主义 × 艺术、建筑与批评史",
        "image": "/story-images/okeeffe-ghost-ranch.jpg",
        "imageAlt": "沙岩地貌、房屋平面、窗框与工作台叠合成创作环境的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Georgia O’Keeffe、Ghost Ranch 与创作环境，并非 O’Keeffe 作品、人物肖像、住宅照片或展览视觉",
        "title": "新展览把 Ghost Ranch 重新放回 O’Keeffe 的创作方法中",
        "summary": "Courtauld 将以 Georgia O’Keeffe 的 Ghost Ranch 住宅与周边景观组织新展，把沙漠从传记布景改写为影响取景、采集、尺度和系列创作的工作条件。",
        "happened": "7 月 27 日公布的《Georgia O’Keeffe: Ghost Ranch》计划于 2027 年 10 月开幕。展览将呈现近二十余件相关作品，其中 18 件从未在英国展出，并把室内陈设、动物骨骼、步行与附近地貌纳入作品理解。",
        "facts": [
          "《Georgia O’Keeffe: Ghost Ranch》计划于 2027 年 10 月在 London 的 Courtauld Gallery 开幕",
          "展览标题公布时称将有 18 件作品首次在英国展出；报道同时指出全部展品接近两打",
          "Ghost Ranch 位于 New Mexico 北部一片约 21,000 英亩的庄园中，O’Keeffe 于 1934 年开始在此居住",
          "她在 New Mexico 另有一处 Abiquiú 住宅，位于牧场以南约 16 英里",
          "约两打拟展作品中，此前只有 6 件曾在英国展出；1993 年英国男性评论家曾以“商业插画”等措辞贬低其创作"
        ],
        "sourceName": "The Guardian／The Courtauld Gallery",
        "sourceUrl": "https://www.theguardian.com/culture/2026/jul/27/new-exhibition-to-explore-how-georgia-okeeffes-desert-home-shaped-her-art",
        "sourceDate": "2026-07-27",
        "whyItMatters": "O’Keeffe 长期被男性批评家用花朵、女性身体和孤绝天才的框架解释。",
        "analysis": "把住宅视为工作基础设施，能同时看见她如何选择观看距离、积累自然物、控制生活节奏，也避免把女性艺术家的家只写成浪漫传记。",
        "reflection": "以一幅虚构风景为中心，画出窗框、步行路线、采集物、工作台和储藏空间的来源关系；再比较“沙漠灵感”与“长期空间实践”两种叙事分别省略了什么。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "社会科学 × 语言学 × 第二语言与声学测量",
        "image": "/story-images/language-vowel-cues.jpg",
        "imageAlt": "元音声波、频谱轮廓、抽象口腔几何与听说双向路径组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释英语元音的时长、频谱与感知—发音联系，并非真实参与者、实验界面、声谱图或研究数据",
        "title": "研究发现：母语会改变人们分辨外语元音时依赖的线索",
        "summary": "一项针对台湾华语英语学习者的实验发现，听辨与模仿的联系并非整体能力：beat–bit 主要依赖时长，bat–bet 则更依赖频谱与舌位形成的音质。",
        "happened": "25 名参与者先完成 490 次听觉分类，再完成 180 次语音模仿。研究者把元音的频谱与时长独立操纵，发现个体在听觉中给某条声学线索的权重，会预测其发音在同一维度上能拉开多大差异。",
        "facts": [
          "论文于 2026 年 7 月 19 日在线发表于《Second Language Research》，DOI 为 10.1177/02676583261461946",
          "研究招募 25 名台湾华语母语者，其中 15 名女性、10 名男性，年龄为 20 至 37 岁",
          "实验使用 beat–bit 与 bat–bet 两组英语元音对，并把频谱与时长分别做成 7 级连续体",
          "每位参与者完成 490 次感知分类试次和 180 次模仿试次，整个实验约一小时",
          "beat–bit 的听说联系主要出现在时长维度，bat–bet 则主要出现在频谱／音质维度；含混的 beat–bit 刺激还受到华语 /i/ 类别影响"
        ],
        "sourceName": "Second Language Research／National Yang Ming Chiao Tung University",
        "sourceUrl": "https://journals.sagepub.com/doi/10.1177/02676583261461946",
        "sourceDate": "论文在线发表 2026-07-19；机构解读 2026-07-25",
        "whyItMatters": "把口音只理解为“发音器官没练好”，会漏掉学习者实际听见了哪些差异。",
        "analysis": "研究提示训练应针对具体音位和具体线索，而不是笼统要求“听得更准”；但样本只有 25 人，不能直接代表全部华语学习者。",
        "reflection": "制作一个可以独立调整时长与音质的四词播放器，让 beat–bit 与 bat–bet 轮流越过分类边界；同时把听觉权重与发音结果画成两条对应轨迹。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学 × 天文学 × 观测分类与行星防御",
        "image": "/story-images/hidden-comet-tracking.jpg",
        "imageAlt": "细弱彗尾、轨道预测线、望远镜口径与偏离点叠成观测网络的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 P/1998 SH2 的轨道偏差、微弱彗尾与多台望远镜协作，并非天文实拍、NASA 图示、雷达图或真实轨道数据",
        "title": "一颗被归为近地小行星的天体后来被确认是彗星",
        "summary": "1998 SH2 在预计位置上没有出现。NASA 团队从非引力轨道偏差推断微弱喷气，再由三台大型望远镜找到几乎不可见的彗尾，将其增列为 P/1998 SH2。",
        "happened": "这颗天体在 2025 年 8 月以约 300 万公里距离安全掠过地球，但 Deep Space Network 雷达没能按预报位置捕捉它。研究者重算 1998 年以来的测量，怀疑太阳加热冰物质造成喷气推力；随后 Hawaii 与 Chile 的望远镜共同确认微弱彗尾。",
        "facts": [
          "1998 SH2 绕太阳一周约需 4.5 年，2025 年 8 月 28 日曾在约 200 万英里（300 万公里）外安全掠过地球",
          "其轨道从 1998 至 2016 年已有追踪记录，但此后完成两次公转而没有新的望远镜观测，直到 2025 年雷达尝试",
          "确认工作使用 3.6 米 Canada–France–Hawaii Telescope、1.5 米 ESO Danish Telescope 和 8.2 米 Very Large Telescope",
          "观测得到微弱但清晰的彗尾后，天体新增彗星临时编号 P/1998 SH2",
          "自 2016 年发现首颗“暗彗星”以来，约又识别出十余颗；NASA 认为持续精密测轨可帮助判断喷气如何影响近地天体风险"
        ],
        "sourceName": "NASA Jet Propulsion Laboratory",
        "sourceUrl": "https://www.nasa.gov/solar-system/comets/nasa-study-finds-near-earth-asteroid-is-actually-comet/",
        "sourceDate": "2026-07-16",
        "whyItMatters": "“小行星”或“彗星”不是只凭外观一次决定的标签。",
        "analysis": "长期位置测量、模型残差与跨台站复核会改变分类，也会改变行星防御如何预测轨道；一次未观测到的目标，有时不是设备失败，而是模型暴露了新物理过程。",
        "reflection": "把故事做成一张误差逐步放大的侦测图：预报位置、雷达空白、历史测量、非引力残差、望远镜口径和最终彗尾依次出现，明确区分推断与直接影像证据。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "timeline"
      },
      {
        "category": "女性主义 × 性别与健康 × 实验室数据基础设施",
        "image": "/story-images/gender-diverse-lab-data.jpg",
        "imageAlt": "血液样本、参考区间、器官清单与电子病历字段连接成个体化诊断路径的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释性别多元患者的检验参考区间、器官清单与电子病历，不代表真实患者、检验报告、医院界面或医疗建议",
        "title": "实验室发布指南：参考区间不能只按法律性别划分",
        "summary": "ADLM 发布美国首份广泛覆盖性别多元患者的检验医学与病理学指引，要求实验室把激素治疗、器官清单和信息系统能力纳入结果解释。",
        "happened": "指引聚焦稳定接受性别肯定激素治疗至少六个月的成年人，覆盖检验参考区间、输血、尸检、组织学和病理信息学五个领域。它建议电子病历记录器官是否存在及手术日期，并在证据不足时允许双重报告参考区间。",
        "facts": [
          "Association for Diagnostics & Laboratory Medicine 于 2026 年 7 月 1 日发布这份美国首个广泛覆盖该领域的专业指引",
          "指引集中讨论 5 类问题：激素治疗影响的参考区间、输血、尸检与死亡调查、组织学，以及实验室信息学",
          "主要证据对象为稳定接受性别肯定激素治疗至少 6 个月的成年人，因为更早阶段的数据仍很有限",
          "指导表列出血红蛋白、肌酐、胱抑素 C、心肌肌钙蛋白、脂质、肝酶与激素等检验在不同治疗下的变化或证据缺口",
          "建议电子病历设置器官清单；对部分指标可考虑同时报告女性与男性参考区间，尸检则应同时记录法律性别与确认的性别认同并使用正确姓名和代词"
        ],
        "sourceName": "Association for Diagnostics & Laboratory Medicine",
        "sourceUrl": "https://myadlm.org/science-and-research/academy-guidance/gender-diversity",
        "sourceDate": "2026-07-01",
        "whyItMatters": "许多实验室系统仍用法律性别自动选择区间与筛查提醒，可能把个体生理压进错误的二元默认值。",
        "analysis": "更精确的做法不是取消生物信息，而是把激素状态、实际器官、治疗史和临床情境分开记录；指引也承认现有前瞻研究仍然有限。",
        "reflection": "把一张化验单拆成四层：法律字段、性别认同、激素状态和器官清单；让同一指标在不同信息组合下显示参考区间、证据强度与需要临床复核的位置。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      }
    ],
    "learningGoal": "看见名称、边界和参考标准如何被制作、检验，并在新证据出现后改变。",
    "connection": "五则故事都把一个熟悉标签拆开，追问它由哪些材料、声音线索、观测标准或身体信息组成。"
  },
  {
    "date": "2026-07-26",
    "displayDate": "2026.07.26",
    "issueNo": "13",
    "theme": "系统不会自动正确：图像、算法、森林、卫星与孕期医疗",
    "intro": "从“热带”图像、热量应用和森林规范，到导航卫星与孕期哮喘，本期解释系统为什么需要被校准、维护和放回实际使用环境。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 艺术与设计 × 殖民图像史",
        "image": "/story-images/joiri-minaya-tropics.jpg",
        "imageAlt": "热带植物纹样、织物褶皱、被遮蔽的纪念碑轮廓与跨洋地图层叠的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Joiri Minaya 对“热带”图像、纺织品与殖民纪念物的研究，并非艺术家作品复制、展览现场或历史地图",
        "title": "Henry Art Gallery 追问“热带风景”是怎样被制造出来的",
        "summary": "Henry Art Gallery 为 Joiri Minaya 开设个展，以 Aloha 衬衫、花卉弹力布和包裹殖民纪念物的纺织实践，拆解“热带”如何从加勒比延伸为全球消费图像。",
        "happened": "展览于 7 月 25 日在西雅图开幕。Minaya 出生于纽约、在多米尼加共和国长大；她把自己定位为表演者与“破坏者”，用纺织、摄影和遮蔽动作对抗把热带地区及居民简化为异国幻想的视觉传统。",
        "facts": [
          "展期为 2026 年 7 月 25 日至 2027 年 5 月 2 日，地点是 University of Washington 的 Henry Art Gallery",
          "Joiri Minaya 1990 年出生于纽约，在多米尼加共和国长大，创作横跨纺织、摄影与表演",
          "展览从加勒比延伸到太平洋，讨论“全球热带”如何被制造为供消费的异国想象",
          "展品线索包括艺术家的 Aloha 衬衫，以及她设计来包裹殖民纪念物的花卉弹力布"
        ],
        "sourceName": "Henry Art Gallery",
        "sourceUrl": "https://henryart.org/press/2026-spring-summer-exhibition-announcements",
        "sourceDate": "新闻稿 2026-04-15；展览开幕 2026-07-25",
        "whyItMatters": "棕榈、花朵和鲜艳布料看似中性装饰，却常把殖民历史、旅游经济与种族化身体压成可消费的愉悦背景。",
        "analysis": "Minaya 的工作不是拒绝植物或色彩，而是让图案显出是谁设计、谁穿着、谁被观看，以及哪些历史被遮住。",
        "reflection": "选择一枚常见“热带”花纹，追踪它从植物学图谱、殖民贸易、旅游海报到服装印花的四次转译；再设计一块可包裹纪念物的布，让遮蔽本身成为重新命名空间的动作。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "社会科学 × 传播与测量 × AI 消费工具",
        "image": "/story-images/calorie-app-measurement.jpg",
        "imageAlt": "餐盘照片穿过识别框后变成缺失脂肪与热量的数字卡片的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释食物识别应用的测量误差，并非真实应用界面、产品标识、研究图表或医疗建议",
        "title": "研究测试四款拍照记热量应用，它们都低估了餐食能量",
        "summary": "NIH Clinical Center 团队用代谢厨房中精确称重的餐食测试四款照片识别应用：它们平均少算 250 至 345 千卡，并把脂肪低估约 30 克。",
        "happened": "研究者先拍摄 102 份标准化餐食，分别交给 MyFitnessPal、LoseIt!、CalAI 与 Appediet 识别，再与精确到 0.1 克的配方记录比较；随后又分析 200 多份餐食，初步发现高脂低碳餐更容易被低估。",
        "facts": [
          "首轮测试使用 102 份 NIH 代谢厨房餐食，原料称量精确到 0.1 克",
          "测试对象为 MyFitnessPal、LoseIt!、CalAI 和 Appediet 四款照片识别应用",
          "四款应用平均少算 250 至 345 千卡，并把脂肪含量低估约 30 克",
          "研究者随后分析 200 多份额外餐食；初步结果显示高脂的生酮餐更难估算，研究目前属于 NUTRITION 2026 会议摘要、尚未经过完整同行评审"
        ],
        "sourceName": "American Society for Nutrition／NIH NIDDK",
        "sourceUrl": "https://www.newswise.com/articles/photo-based-calorie-tracking-apps-may-underestimate-energy-in-meals",
        "sourceDate": "2026-07-25",
        "whyItMatters": "照片让记录饮食变得轻松，却也把食材识别、份量推断和营养数据库三层不确定性压成一个精确数字。",
        "analysis": "误差若系统性偏向脂肪与特定饮食，会影响个人决策和基于应用数据的研究；不过这仍是会议摘要，尚未完成期刊同行评审。",
        "reflection": "把同一餐盘拆成“相机看见的形状、模型猜测的食物、数据库匹配的份量、真实称重”四层，逐步显示误差在哪里累积，并让用户手动修改份量后观察数字如何变化。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学 × 人类学与地理 × 共有资源治理",
        "image": "/story-images/swidden-social-rules.jpg",
        "imageAlt": "森林斑块、互助劳动的人形节点、休耕周期与卫星网格组成的共有资源治理编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释轮耕、互助规范与森林斑块模型，并非真实社群、遥感影像、农地地图或研究结果截图",
        "title": "亚马孙研究发现：邻里合作也能限制森林开垦",
        "summary": "一项结合人类学、遥感与模型的研究分析逾 18,000 个森林斑块，发现轮耕社群可通过互助和撤回合作，约束过大的开垦请求并维持森林再生。",
        "happened": "研究团队比较中南美洲、撒哈拉以南非洲、南亚和东南亚的遥感图像，并建立劳动共享模型。在 Belize 的例子中，合理的两英亩农地容易获得邻里协作，二十英亩的过大请求则可能因无人相助而无法实现。",
        "facts": [
          "研究分析超过 18,000 个森林斑块，并结合遥感、计算模型与实地人类学经验",
          "轮耕在热带与亚热带地区已有约 10,000 年历史，通常经历清理、燃烧、种植一至两次和长期休耕",
          "Belize 例子显示，两英亩规模的请求较易获得互助，二十英亩的过大请求可能因邻居撤回劳动而无法完成",
          "研究覆盖中南美洲、撒哈拉以南非洲、南亚和东南亚，并指出中等程度扰动可能创造新的生态位、提高景观层面的生物多样性"
        ],
        "sourceName": "Ohio State University／Proceedings of the National Academy of Sciences",
        "sourceUrl": "https://www.newswise.com/articles/unwritten-social-rules-not-government-oversight-help-keep-forest-land-sustainable",
        "sourceDate": "2026-07-23",
        "whyItMatters": "“刀耕火种”常把差异巨大的实践都写成环境破坏，也让政策误以为只有外部监管能保护森林。",
        "analysis": "研究提示社会规范可以成为治理机制，但它不是浪漫化社群的免检证：土地压力、权力差异和市场变化仍可能破坏休耕周期。",
        "reflection": "制作一张可切换的斑块地图：改变请求面积、可用劳力、休耕年限和合作意愿，观察森林结构如何变化；同时标出模型没有测量的土地权、性别劳动与商品价格。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "官方数据、政策或制度文件",
        "informationForm": "relationship"
      },
      {
        "category": "社会科学 × 天文学与空间技术 × 公共基础设施",
        "image": "/story-images/galileo-public-infrastructure.jpg",
        "imageAlt": "两颗导航卫星、原子钟脉冲、地面控制站与手机定位网格连接成公共基础设施的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Galileo 卫星、地面控制与公共导航服务，并非卫星实拍、任务图示、ESA 标识或导航界面",
        "title": "两颗 Galileo 卫星投入服务，全球导航系统获得更多余量",
        "summary": "Galileo 的 SAT 33 与 SAT 34 完成在轨测试并进入服务。新增冗余不仅提高定位连续性，也显出卫星、原子钟、地面站、安全认证和产业供应链共同构成的欧洲公共基础设施。",
        "happened": "两颗卫星于去年 12 月由 Ariane 6 发射，经过约七天早期运行和数月调试，被送入 23,222 公里高的精确轨道。SAT 33 在 5 月获准服务，SAT 34 于 7 月 23 日获批，L14 任务至此完成部署。",
        "facts": [
          "SAT 33 与 SAT 34 于 2025 年 12 月 17 日由 Ariane 6 发射，卫星分离约在升空四小时后完成",
          "早期运行阶段约七天，随后完成导航载荷、原子钟、转发器和安全功能测试",
          "两颗卫星被送入距离地面 23,222 公里的轨道；SAT 33 于 2026 年 5 月获准服务，SAT 34 于 7 月 23 日获批",
          "Galileo 自 2016 年提供开放服务，目前服务超过 50 亿智能手机用户；第一代仍有四颗卫星待发射"
        ],
        "sourceName": "European Space Agency",
        "sourceUrl": "https://www.esa.int/Applications/Satellite_navigation/Two_new_Galileo_satellites_enter_service",
        "sourceDate": "2026-07-24",
        "whyItMatters": "手机上的定位点看起来像设备自身功能，实际依赖长期公共投资、跨机构认证和持续地面维护。",
        "analysis": "把“航天成就”只写成发射瞬间，会忽略真正决定可靠性的测试、备份、时钟与治理；系统自主性也必须与开放标准和国际互操作一起讨论。",
        "reflection": "从一个手机定位点向后展开五层基础设施：卫星信号、原子钟、轨道控制、地面测试、安全认证；再模拟一颗卫星离线，观察冗余如何保护铁路、航运、金融授时与救援服务。",
        "evidenceBoundary": "机构原始页面或专题资料能支持这里列出的事件、日期与公开材料；本站的比较和反思会单独标记，不能替代原始来源。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "process"
      },
      {
        "category": "女性主义 × 健康与照护 × 孕期临床证据",
        "image": "/story-images/pregnancy-asthma-care.jpg",
        "imageAlt": "呼吸气流、胎盘轮廓、空气污染颗粒与连续照护节点交织的孕期哮喘编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释孕期哮喘控制、环境暴露与母胎照护，并非患者肖像、医学影像、胎儿照片或治疗建议",
        "title": "综述指出：孕期哮喘的主要风险来自疾病控制不足",
        "summary": "Mount Sinai 团队综述最新证据：哮喘影响 8% 至 13% 的妊娠，真正推动早产、高血压性疾病和胎儿生长风险的主要因素，是持续失控而非诊断标签本身。",
        "happened": "发表于《American Journal of Obstetrics and Gynecology》的综述整合气道炎症、氧化应激、胎盘功能与母体低氧机制，并把病毒感染、空气污染、室内暴露、肥胖和睡眠呼吸暂停纳入管理框架。",
        "facts": [
          "综述估计哮喘影响 8% 至 13% 的妊娠",
          "与控制良好者相比，失控哮喘相关的早产调整优势比由 1.3 上升至 1.6，高血压性疾病由 1.2 上升至 1.5",
          "胎儿生长受限或小于胎龄儿的调整优势比由控制状态下的 1.2 上升至失控状态下的 1.4",
          "论文讨论病毒感染、空气污染、室内暴露、肥胖、过敏性鼻炎、胃食管反流和阻塞性睡眠呼吸暂停等可改变因素，并强调持续监测与控制治疗"
        ],
        "sourceName": "Mount Sinai Health System／American Journal of Obstetrics and Gynecology",
        "sourceUrl": "https://www.newswise.com/articles/mount-sinai-researchers-synthesize-emerging-evidence-to-inform-management-of-pregnancy-specific-asthma-affecting-nearly-1-in-10-pregnancies",
        "sourceDate": "2026-07-24；期刊 2026 年 8 月号",
        "whyItMatters": "孕期常见的“少用药更安全”直觉可能让控制药物被自行停用，反而增加母体与胎儿风险。",
        "analysis": "把差异归因于疾病控制，也能把责任从孕妇个人移向连续监测、环境暴露、可及药物与跨专科照护；具体治疗仍必须由临床医生个体化决定。",
        "reflection": "绘制两条并行妊娠时间线：一条只记录“有哮喘”标签，另一条记录症状、肺功能、药物、空气暴露和随访，让风险从静态身份改为可以被观察和干预的过程。",
        "evidenceBoundary": "研究论文或学术材料能支持这里列出的事件、日期与公开材料；本站的比较和反思会单独标记，不能替代原始来源。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      }
    ],
    "learningGoal": "理解自动化结果、公共系统和医学建议都依赖输入、维护、环境与人的判断。",
    "connection": "五则故事共同反对“系统自己会正确运行”的想象，并指出校准失败会把误差转移给使用者或公共环境。"
  },
  {
    "date": "2026-07-25",
    "displayDate": "2026.07.25",
    "issueNo": "12",
    "theme": "文化与照护也是基础设施：书籍、音乐、统计与社区医疗",
    "intro": "一本艺术书、一场音乐计划、一份人口调查和两项健康研究说明，文化参与与照护都需要组织、统计、转介和长期支持。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 艺术家书 × 诗歌与印刷",
        "image": "/story-images/miro-book-collaboration.jpg",
        "imageAlt": "木版形状、诗歌行列、折页与印刷套色相互咬合的艺术家书编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Miró、Éluard 与印刷者的协作过程，并非《À toute épreuve》书页复制、展品照片或艺术家作品",
        "title": "Miró 用 233 块木版把诗与图像编成一本书",
        "summary": "旧金山 Legion of Honor 今天开启《Miró: Proof Against All》，把 Joan Miró 与 Paul Éluard 的艺术家书《À toute épreuve》拆回木版、试印、折页与装订的协作过程。",
        "happened": "展览围绕 1958 年出版的《À toute épreuve》展开。Éluard 的诗与 Miró 的木版图形并不是两条平行轨道：图像穿过页边、改变留白和翻页节奏。馆方同时展示装订本与未装订本，让观众比较阅读顺序和单页印刷物的不同身份。",
        "facts": [
          "《À toute épreuve》于 1958 年出版，是 Miró 与法国诗人 Paul Éluard 的合作",
          "Miró 为全书雕制 233 块木版，最终形成 80 幅印刷图像",
          "Fine Arts Museums of San Francisco 收藏该书的装订本与未装订本各一套，本展将两种状态并置",
          "展期为 2026 年 7 月 25 日至 2027 年 7 月 25 日；Miró 一生参与创作约 250 本艺术家书"
        ],
        "sourceName": "Fine Arts Museums of San Francisco／Apollo",
        "sourceUrl": "https://www.famsf.org/exhibitions/miro-proof-against-all",
        "sourceDate": "展览开幕 2026-07-25；Apollo 预展发布 2026-07-17",
        "whyItMatters": "“配图”常暗示文字先完成、图像随后解释；这本书却把意义放在诗句、纸张、套色、木纹与翻页之间。",
        "analysis": "它也提醒我们，现代主义杰作不是艺术家单独完成的神来之笔，而是诗人、画家、雕版与印刷劳动共同生产的物件。",
        "reflection": "选择一首四段短诗，为每段设计不同的纸张尺寸、留白和翻页动作；先不画具象插图，只用木版形状改变读者的停顿。最后把诗人、艺术家、雕版者和印刷者的决定分别标出来。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "process"
      },
      {
        "category": "艺术人文 × 音乐 × 现场档案与策展",
        "image": "/story-images/warm-up-live-archive.jpg",
        "imageAlt": "扬声器、舞台线路、声波与档案票券形成多层音乐谱系的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 MoMA PS1 Warm Up 的现场音乐谱系，并非演出现场、真实表演者、海报或 MoMA 标识",
        "title": "MoMA PS1 的 Warm Up 用连续演出保存纽约舞曲文化",
        "summary": "MoMA PS1 的 Warm Up 2026 以六个周五晚间串联 dub、techno、gabber、house、hyperpop 与声音艺术；26 组表演者让小众音乐史通过现场合作而非流媒体标签被重新听见。",
        "happened": "本季 Warm Up 于 7 月 24 日开始、持续至 8 月 28 日。节目既有 Wackies 厂牌相关演出，也有 SCRAAATCH 向声音艺术家 Yasunao Tone 致意、巴西制作人 Anderson do Paraíso 的美国首演，以及 Mabe Fratti 的三重奏。",
        "facts": [
          "Warm Up 2026 于 7 月 24 日至 8 月 28 日举行，共安排 6 个周五晚间",
          "本季节目包含 26 位艺术家与团体，横跨 dub、techno、gabber、house、hyperpop 和声音艺术",
          "系列创办于 1998 年，至今持续把实验音乐与 MoMA PS1 的夏季建筑环境结合",
          "节目实例包括 Wackies 相关演出、SCRAAATCH 向 Yasunao Tone 致意、Anderson do Paraíso 美国首演与 Mabe Fratti 三重奏"
        ],
        "sourceName": "MoMA PS1",
        "sourceUrl": "https://press.moma.org/exhibition/warm-up-2026/",
        "sourceDate": "节目日期 2026-07-24 至 2026-08-28；页面核验 2026-07-25",
        "whyItMatters": "音乐平台倾向把风格压缩成可推荐的标签，现场策展则能让厂牌、城市、代际与技术影响同时出现。",
        "analysis": "博物馆因此不只是借音乐吸引观众，也在决定哪些地下谱系获得空间、制作条件和机构记忆。",
        "reflection": "不要按风格名称做歌单，而是画一张六晚关系图：每位表演者连接其城市、厂牌、合作对象、设备和前辈，再让观众沿一条影响链听下去。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "社会科学 × 文化参与 × 调查与测量",
        "image": "/story-images/arts-participation-census.jpg",
        "imageAlt": "家庭调查网格连接电影院、舞台和展览空间的文化参与测量编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释家庭调查如何测量文化参与，并非 U.S. Census Bureau 官方信息图、调查界面或受访者照片",
        "title": "美国人口普查局首次用短期调查统计文化参与",
        "summary": "U.S. Census Bureau 发布新一轮 Household Trends and Outlook Pulse Survey 数据，把电影、现场音乐与戏剧、艺术展览等参与方式纳入约 13.6 万户家庭的实验性调查。",
        "happened": "调查于 2026 年 3 月 13 日至 30 日进行。官方信息图估计，在此前四周内，约 4,600 万成年人去电影院，约 5,000 万人现场观看音乐、舞蹈或戏剧，约 2,300 万人参观艺术展览。",
        "facts": [
          "本轮调查于 2026 年 3 月 13 日至 30 日进行，样本约为 136,000 个美国家庭",
          "官方估计此前四周约有 4,600 万成年人到电影院观看电影",
          "约 5,000 万成年人现场参加音乐、舞蹈或戏剧活动，约 2,300 万人参观艺术展览",
          "HTOPS 是实验性调查，约每两个月实施一次；同一项目还测量就业、食物、保险、心理健康、社会连接与家庭支出"
        ],
        "sourceName": "U.S. Census Bureau",
        "sourceUrl": "https://www.census.gov/newsroom/press-releases/2026/htops-data-tables.html",
        "sourceDate": "2026-07-23",
        "whyItMatters": "把文化活动放进全国性家庭调查，能让交通、收入、时间和场馆分布成为公共政策问题，而不只是个人品味。",
        "analysis": "但“过去四周是否到场”仍会遗漏家庭创作、线上观看、宗教仪式和非正式社区文化；测量边界会决定什么被算作文化生活。",
        "reflection": "制作两张并列的文化地图：第一张严格使用调查问项，只显示可计数的到场行为；第二张补入家中阅读、线上观看、社区庆典和照护者无法外出的文化实践，比较统计制度留下的空白。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "官方数据、政策或制度文件",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学 × 老龄化 × 公共住房与照护基础设施",
        "image": "/story-images/public-housing-dementia-navigation.jpg",
        "imageAlt": "公寓楼、记忆筛查卡、交通路线与照护导航员连成支持网络的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释公共住房中的认知筛查与照护导航，并非真实居民、患者、筛查结果或 Rutgers 项目现场",
        "title": "Rutgers 项目帮助公共住房居民从失智筛查走到就医",
        "summary": "Rutgers 在公共住房中开展认知筛查，并由社区脑健康导航员安排预约、车辆和回访。首半年 160 名受筛者中，约三分之二显示超出年龄预期的记忆下降。",
        "happened": "项目把筛查带进居民所在社区；当结果提示风险时，来自护理与公共卫生领域的导航员不只给出转诊单，还协助预约、安排交通、陪伴返家，并用居民能理解的方式解释下一步。",
        "facts": [
          "项目运行前半年已为 160 名公共住房居民进行认知筛查",
          "约三分之二受筛者表现出超过同龄正常范围的记忆下降，其中接近一半的表现与轻度、中度或重度失智相符",
          "Rutgers 引述的背景资料指出，非裔美国人发生这类疾病的比例超过其他群体的两倍",
          "项目获得 Hearst Foundations 10 万美元与 Eli Lilly 58.7 万美元支持，并计划向 Louisiana 和 Florida 扩展"
        ],
        "sourceName": "Rutgers University",
        "sourceUrl": "https://www.newswise.com/articles/how-rutgers-is-helping-to-tackle-the-rising-crisis-of-public-housing-residents-facing-dementia-alone",
        "sourceDate": "2026-07-24",
        "whyItMatters": "认知障碍服务常假定患者能识别症状、预约专科、找到车辆并记住医嘱，这恰好排除了最孤立的人。",
        "analysis": "筛查工具只有接上交通、信任与持续沟通，才可能成为照护；不过目前数据来自早期项目，不能直接推算所有公共住房居民的患病率。",
        "reflection": "把一张阳性筛查结果扩展成完整服务旅程：预约、交通、诊断、药物、回家解释和下一次随访。为每个节点标出最容易失联的位置，以及导航员实际补上的工作。",
        "evidenceBoundary": "新闻报道或研究新闻稿能支持这里列出的事件、日期与公开材料；本站的比较和反思会单独标记，不能替代原始来源。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "process"
      },
      {
        "category": "女性主义 × 健康 × 长期新冠与照护劳动",
        "image": "/story-images/women-long-covid-stress.jpg",
        "imageAlt": "女性身体轮廓、症状时间线、照护日程与社会支持节点交叠的长期新冠编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释长期新冠、压力与照护负担之间的关联，并非患者肖像、诊断图或因果关系证明",
        "title": "研究发现女性长期新冠患者的压力与症状有关，但不能把压力当作病因",
        "summary": "一项针对 2,500 名美国幼儿母亲的研究发现，高压力与长期新冠诊断、自我判断及更多症状相关；研究同时强调，横截面调查无法确定压力究竟是原因、放大因素还是疾病结果。",
        "happened": "研究者分析 2023 年 7 月的在线调查。近 10% 受访者认为自己患有尚未确诊的长期新冠，1.2% 报告正式诊断；高压力量表得分与更多长期症状相关，抚养超过两个孩子者报告的症状也更多。",
        "facts": [
          "研究样本为 2,500 名美国女性，全部是年幼儿童的母亲；在线调查于 2023 年 7 月完成",
          "近 10% 受访者自我判断患有尚未确诊的长期新冠，1.2% 报告得到正式诊断",
          "高压力与正式诊断、自我判断和更多症状均相关；抚养超过两个孩子者报告的症状更多",
          "社会支持的关联较弱；研究为横截面设计，不能判断压力导致长期新冠、加重症状，还是症状本身提高压力"
        ],
        "sourceName": "Stony Brook University／Health Psychology",
        "sourceUrl": "https://www.newswise.com/articles/study-reveals-stress-a-significant-factor-in-women-experiencing-long-covid",
        "sourceDate": "2026-07-24；论文 DOI 10.1037/hea0001626",
        "whyItMatters": "女性的症状长期容易被解释成焦虑或压力。",
        "analysis": "关联研究若被简化，会再次把诊断缺口变成个人心理问题；更可靠的读法是同时追踪感染、照护负担、医疗可及性和症状如何互相影响，并承认因果方向尚未确定。",
        "reflection": "画一张双向因果图，让感染后症状、睡眠、工作、育儿、压力、社会支持和就医分别可以互为原因与结果；用不同线型区分研究已观察到的关联与尚待验证的机制。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "comparison"
      }
    ],
    "learningGoal": "把文化与照护理解为需要人、场所、数据和制度持续支撑的公共网络。",
    "connection": "五则故事关心的不是单个作品或患者，而是经验怎样被一套可以持续运转的系统接住。"
  },
  {
    "date": "2026-07-24",
    "displayDate": "2026.07.24",
    "issueNo": "11",
    "theme": "想法如何变成制度：创作、设计、政策、食物与司法",
    "intro": "Sondheim 的草稿、Panton 的空间、政府法规、饮食转型和性别迫害判决共同展示：一个想法只有经过材料、组织、预算与执行，才会真正产生后果。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 戏剧与音乐 × 创作档案",
        "image": "/story-images/sondheim-creative-archive.jpg",
        "imageAlt": "乐谱草稿、铅笔修改、索引卡、舞台光线与档案盒叠合的 Sondheim 创作档案编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释音乐剧创作过程与公共档案，并非 Sondheim 手稿复制、肖像或 Library of Congress 展品照片",
        "title": "美国国会图书馆公开 Sondheim 的草稿、删除和改写",
        "summary": "Library of Congress 今天继续展出 Stephen Sondheim 创作档案。歌词、乐谱草稿、录音、笔记与剪贴簿让音乐剧不再只剩经典唱段，而成为可以逐页追踪的修改过程。",
        "happened": "Library of Congress 在 2025 年取得 Sondheim Papers，并已向研究者开放。7 月 24 日，Performing Arts Reading Room 的小型陈列展示《Into the Woods》《Sunday in the Park with George》《Merrily We Roll Along》《Sweeney Todd》和《A Little Night Music》等作品的歌词与音乐材料。",
        "facts": [
          "Library of Congress 于 2025 年取得 Sondheim Papers，并在 2026 年持续于 Performing Arts Reading Room 展示馆藏精选",
          "Music Division 估计馆藏约含 11,000 件材料，包括手稿、歌词与音乐草稿、录音、笔记本和剪贴簿",
          "自 2025 年 6 月宣布入藏至 2026 年 6 月，馆方已处理 700 余次研究者与工作人员调阅箱件的请求",
          "本次小型陈列明确涵盖 5 部音乐剧：《Into the Woods》《Sunday in the Park with George》《Merrily We Roll Along》《Sweeney Todd》和《A Little Night Music》"
        ],
        "sourceName": "Library of Congress",
        "sourceUrl": "https://www.loc.gov/item/event-419398/treasures-from-the-stephen-sondheim-collection/2026-07-24/",
        "sourceDate": "活动日期 2026-07-24；馆藏与研究指南资料更新至 2026-06",
        "whyItMatters": "成品舞台容易制造“灵感一次成形”的神话，档案却保存删除、替换、结构调整与合作痕迹。",
        "analysis": "把私人工作纸变成公共研究资源，也会改变谁有资格解释一部作品：不再只有演出回忆和权威传记，还包括可以核对的创作证据。",
        "reflection": "选择一首虚构音乐剧歌曲，制作三层创作剖面：第一版的韵脚、被划掉的动机、最终舞台顺序。重点不是模仿 Sondheim，而是让观众看到“修改”怎样同时改变语言、旋律和戏剧情境。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "timeline"
      },
      {
        "category": "艺术人文 × 设计 × 材料与生活空间",
        "image": "/story-images/panton-total-environment.jpg",
        "imageAlt": "流动色带、纸模型、悬挂座椅轮廓与空间网格组成的总体环境设计编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Verner Panton 的空间、色彩与设计过程，并非具体家具复制、展览现场或历史照片",
        "title": "Vitra 回顾 Panton 如何从家具设计走向整体空间",
        "summary": "Vitra Design Museum 在 Verner Panton 百年诞辰展中，把名椅放回光、织物、化学材料、企业委托与未实现建筑组成的总体环境，纠正“六十年代造型大师”的单一标签。",
        "happened": "《Verner Panton: Form, Colour, Space》正在 Vitra Schaudepot 展出。展览从五十年代纸模型和原型，延伸到 1970 年 Visiona II 的可步入式 Fantasy Landscape 重构，并首次详细呈现大量未建成建筑方案及其设计过程。",
        "facts": [
          "展览为 Panton 1926 年出生百年而设，展期为 2026 年 5 月 23 日至 2027 年 5 月 9 日",
          "展览包含 1970 年 Fantasy Landscape 的可步入式重构，版本标注为 1/8",
          "Panton Chair 的基本构想始于 1950 年代中期，直到 1967 年才由 Vitra 推向系列生产",
          "Vitra 的 Panton Archive 保存逾 40,000 份文件，其中约 20,000 份为图纸与绘图；展览首次详细呈现其多数未实现的建筑项目"
        ],
        "sourceName": "Vitra Design Museum",
        "sourceUrl": "https://www.design-museum.de/en/exhibitions/detailpages/verner-panton-form-colour-space.html",
        "sourceDate": "展览开幕 2026-05-23；页面核验 2026-07-24",
        "whyItMatters": "Panton 的作品常被拆成可收藏的单件家具，但他的核心问题是空间怎样改变坐、躺、交往与感受。",
        "analysis": "把 Bayer 等化工企业的委托重新放进叙事，还能看见“未来主义”如何依赖合成材料产业，而不只是设计师个人想象。",
        "reflection": "从同一张室内平面出发，依次只改变家具、光线、色阶、声学与身体姿势，观察“空间功能”在哪一步开始变化；再把材料供应者和生产技术标进图中，让总体艺术也显出其工业链条。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学 × 政治制度 × AI 与行政能力",
        "image": "/story-images/policy-sludge-ai.jpg",
        "imageAlt": "堆叠法规文件穿过扫描网格并转化为透明公共仪表板的政策淤泥编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释法规扫描、行政负担与公共数据，并非政府文件、AI 产品界面或新闻摄影",
        "title": "Stanford 用 AI 阅读州政府多年累积的报告要求",
        "summary": "Stanford RegLab 用 AI 扫描全美五亿词州法，寻找过时报告、委员会与费用。结果显示，行政负担不仅来自执行太慢，也来自法律长期累积而缺少退出机制。",
        "happened": "研究团队建立覆盖美国 50 州法规的语料库，并与地方和州政府验证识别工具。研究已推动 San Francisco 精简超过三分之一报告要求，也被 New York 的 regulatory reset 使用；论文将发表于《Yale Journal on Regulation》。",
        "facts": [
          "研究语料包含约 5 亿词州法，覆盖美国全部 50 州",
          "California 的报告要求从 2000 年到 2025 年增长约 400%，约 30% 的持续性报告可能从未完成",
          "Maryland 估计阅读相关报告最长需要 14 周，而州议会会期只有 13 周；州机构将约 20% 报告列为可取消或合并",
          "研究发现一份报告可消耗约 3,500 个员工工时、成本逾 87 万美元；San Francisco 已据试点精简超过三分之一报告要求"
        ],
        "sourceName": "Stanford Regulation, Evaluation, and Governance Lab",
        "sourceUrl": "https://news.stanford.edu/stories/2026/07/how-ai-is-helping-states-cut-through-decades-of-red-tape",
        "sourceDate": "2026-07-23",
        "whyItMatters": "“删繁就简”听起来天然正确，但一份报告可能是没人阅读的遗留物，也可能是公众监督污染、预算或歧视的唯一窗口。",
        "analysis": "AI 可以发现重复与成本，却不能单独判断公共价值；关键是为保留、合并和废止建立透明的人类复核程序。",
        "reflection": "把十份假想政府报告放入一个决策台：显示法定目的、制作工时、提交率、阅读量、受影响群体和替代数据源。让观众尝试删减，再展示每次删除同时减少的负担与监督能力。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "process"
      },
      {
        "category": "社会科学 × 地理与食物系统 × 情景模型",
        "image": "/story-images/food-system-transition.jpg",
        "imageAlt": "牧场、豆类、果蔬、土地网格与区域经济箭头重新排列的全球食物系统编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释饮食转型、土地利用与农业经济情景，并非农场实景、统计图或研究结果截图",
        "title": "Nature 研究模拟更健康饮食将怎样改变农业与地区收入",
        "summary": "十个模型团队推演全球转向健康饮食、减少浪费与提高生产效率的后果：土地利用排放可大幅下降，但畜牧业、作物生产和地区收入会发生极不均衡的重排。",
        "happened": "发表于《Nature》的多模型分析模拟了接近 2025 EAT–Lancet 建议的食物系统转型。到 2050 年，全球农业用地可能比延续当前趋势少 6%，反刍动物数量比 2020 年少约四亿头；果蔬、坚果与豆类产值则明显增加。",
        "facts": [
          "研究由 LSHTM、Cornell University 与 10 个模型团队合作，论文 DOI 为 10.1038/s41586-026-10775-2",
          "情景中 2050 年全球农业用地可比当前趋势少 6%，土地利用变化造成的农业净二氧化碳排放可比 2020 年低 85%",
          "全球畜牧业产值可比 2020 年下降 42%（约 6,300 亿美元），反刍动物约减少 4 亿头",
          "蔬菜、水果、坚果与豆类合计产值可增长 57%（约 8,900 亿美元）；但模型假定消费者可无成本转向健康饮食"
        ],
        "sourceName": "Nature；London School of Hygiene & Tropical Medicine",
        "sourceUrl": "https://doi.org/10.1038/s41586-026-10775-2",
        "sourceDate": "研究发布 2026-07-23",
        "whyItMatters": "“人人吃得更健康”不是一条只发生在营养标签上的路线，而会改变土地、贸易、劳动和地方财政。",
        "analysis": "模型提示转型规模，也暴露一个重要假设：消费者被设定为无成本地改变偏好。真正的政策必须处理价格、文化、基础设施和受冲击生产者，而不能把模型情景当作自动到来的预测。",
        "reflection": "把同一套饮食目标画成三张并列地图：土地与碳、农业产值、家庭可负担性。用美国、印度和欧洲三条不同路径说明全球平均数怎样遮蔽相反的地区结果。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      },
      {
        "category": "女性主义 × 国际法 × 性别迫害与制度执行",
        "image": "/story-images/gender-justice-report-card.jpg",
        "imageAlt": "法院台阶、分散法律文件、交叉性网格与未闭合执行链组成的性别正义编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释国际刑法中的性别迫害、判决与执行缺口，并非法院照片、受害者影像或官方法律文件",
        "title": "性别迫害进入国际判决后，执行仍受资金短缺限制",
        "summary": "Women’s Initiatives for Gender Justice 在中断八年后重启 Gender Report Card，把监测范围从 ICC 扩展到国际法院、区域人权法院、联合国机制与危害人类罪条约谈判。",
        "happened": "新版报告梳理 2025 年 1 月至 2026 年 5 月的进展：ICC 首次作出性别迫害定罪，Afghanistan 案逮捕令首次以性别迫害为主要指控；美洲人权法院也首次承认生殖暴力这一法律类别。",
        "facts": [
          "2026 版覆盖 2025 年 1 月至 2026 年 5 月，并把范围扩展到 ICC、ICJ、混合法庭、区域法院、联合国机制与条约谈判",
          "旧版 Gender Report Card 于 2005 至 2014 年每年发布，另有 2018 年版；此次是在 8 年空档后重启",
          "Ali Kushayb 案产生国际刑法史上首个性别迫害定罪；Afghanistan 逮捕令则首次把性别迫害作为 ICC 的主要指控",
          "报告同时记录美洲人权法院首次承认生殖暴力，并警告 Central African Republic 特别刑事法院等机构的资金危机"
        ],
        "sourceName": "Women’s Initiatives for Gender Justice",
        "sourceUrl": "https://4genderjustice.org/gender-report-card-july-2026/",
        "sourceDate": "2026-07-13；2026-07-24核验",
        "whyItMatters": "把性别暴力命名为独立罪行，会改变调查证据、受保护群体与责任链条；但法律承认并不等于执行。",
        "analysis": "报告同时指出逮捕、赔偿、法律援助和特别法庭资金不足，提醒我们不要把“首例判决”写成已经完成的胜利。",
        "reflection": "制作一条从证词到赔偿的法律路径：记录、定性、起诉、逮捕、审判、判决、赔偿与执行。每一节点分别标出法律突破、负责机构、资金来源和可能断裂的位置。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "process"
      }
    ],
    "learningGoal": "区分创意或法律文本本身，与使它们能够被执行、体验或长期维持的制度条件。",
    "connection": "五则故事都沿着“想法—模型—执行—后果”的链条，检查在哪一步可能出现阻塞或不平等。"
  },
  {
    "date": "2026-07-23",
    "displayDate": "2026.07.23",
    "issueNo": "10",
    "theme": "谁有资格探索：历史展览、宇宙研究与女性健康",
    "intro": "本期比较历史展览、沉浸式博物馆、银河研究、类器官实验和女性健康战略，追问谁能定义问题、建造工具并决定什么算作知识。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 历史 × 音乐与文化身份",
        "image": "/story-images/tejano-legacy.jpg",
        "imageAlt": "马鞍、织物、乐谱、拱门与地图纸片跨越四百年叠合的 Tejano 历史编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Tejano 历史、物质文化与音乐传统，并非展品复制、历史地图或官方海报",
        "title": "Tejano 展览把美国历史起点推回建国以前",
        "summary": "Briscoe Western Art Museum 用一场双语展览追溯近四百年 Tejano 历史，把牧场、信仰、军旅、音乐与当代艺术放回“美国起源”的中心，而不是边缘附录。",
        "happened": "《Tejano Legacy: Another American Origin Story》于 7 月 23 日举行开幕活动、7 月 24 日向公众开放。展览从十六世纪延伸到今天，汇集美国与墨西哥的馆藏、私人收藏和当代委托作品；若干被墨西哥认定为文化与历史遗产的借展品首次在美国展出。",
        "facts": [
          "展览覆盖近 400 年历史，从 16 世纪延伸至当代，并以英语和西班牙语双语呈现",
          "展览包含 100 余件艺术品、器物与沉浸式叙事，是 Briscoe 创馆以来规模最宏大的展览",
          "借展机构包括墨西哥国家人类学与历史研究所、国立历史博物馆、美国国会图书馆和 San Antonio Museum of Art 等",
          "展览主题明确包括艺术、牧场传统、军旅、音乐、信仰与社群；部分墨西哥借展品为首次在美国展出"
        ],
        "sourceName": "Briscoe Western Art Museum",
        "sourceUrl": "https://briscoemuseum.org/tejanolegacy/",
        "sourceDate": "展览信息发布 2026-07-08；开幕活动 2026-07-23",
        "whyItMatters": "“美国西部”常被讲成英裔移民向空白土地推进的故事。",
        "analysis": "马术、牧场、宗教、语言和音乐的物证显示，Tejano 社群并非后来加入，而是早已参与建造这些制度与文化。双语展签也不是翻译上的附加服务，而是在决定谁能以自己的语言成为历史主体。",
        "reflection": "选取马鞍、圣像、军刀、唱片和当代作品各一件，不按年代而按它们跨越边界的路线排列：谁制作、谁使用、何时被国家或博物馆重新命名，以及它怎样从生活工具变成“美国遗产”。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "艺术人文 × 博物馆 × 媒介与制度",
        "image": "/story-images/museum-of-exploration.jpg",
        "imageAlt": "沉浸式展厅、投影地球、展柜与票务门槛被拼贴成一台探索机器的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于讨论沉浸式博物馆、赞助与探索叙事，并非 National Geographic 场馆照片、品牌图像或展陈复制",
        "title": "National Geographic 用十万平方英尺把“探索”变成沉浸式产品",
        "summary": "华盛顿新开的 National Geographic Museum of Exploration 用投影、互动媒体和探险档案把“探索者”塑造成公众身份；与此同时，票价、赞助和机构自述也在决定谁能进入、谁被看见。",
        "happened": "新馆于 6 月 26 日开放，本周进入首轮集中评论。它在 National Geographic Society 总部提供 100,000 平方英尺互动空间，以 Photo Ark、探险装备、环境影像和沉浸式装置组织参观；馆方把门票收入直接描述为对全球 Explorer 项目的支持。",
        "facts": [
          "National Geographic Museum of Exploration 于 2026 年 6 月 26 日在华盛顿特区开放",
          "新馆提供 100,000 平方英尺的互动空间与媒体体验",
          "主要内容包括 Photo Ark、Explorer 装备、Geoverse 与海洋主题沉浸式体验",
          "馆方为 SNAP 与 WIC 家庭提供每张 3 美元的 Museums for All 门票，并说明一般门票收入用于支持 Explorer 项目"
        ],
        "sourceName": "National Geographic Society；Financial Times",
        "sourceUrl": "https://moe.nationalgeographic.org/en",
        "sourceDate": "开馆新闻稿 2026-03-26；评论 2026-07-23",
        "whyItMatters": "沉浸技术能把遥远环境变得可感，却也容易把殖民测绘、媒体所有权和赞助关系藏在“身临其境”的效果之后。",
        "analysis": "真正值得观察的不是互动是否炫目，而是展览如何区分发现、记录、占有与保护，以及谁有资格被称为探索者。",
        "reflection": "把一次参观拆成四条并行路线：观众看到的壮观影像、物件原来的采集路线、项目的资金来源，以及被拍摄社群的署名与反馈入口。比较每一层在沉浸界面里占了多少空间。",
        "evidenceBoundary": "机构原始页面或专题资料能支持这里列出的事件、日期与公开材料；本站的比较和反思会单独标记，不能替代原始来源。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "relationship"
      },
      {
        "category": "社会科学 × 天文学 × 模型与观测基础设施",
        "image": "/story-images/milky-way-disc-flip.jpg",
        "imageAlt": "倾斜的银河盘与香肠状恒星流、轨道线和模拟网格相交的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释银河并合与盘面翻转模型，并非 Gaia 观测图、真实天文照片或论文模拟截图",
        "title": "天文学家提出：银河系盘面翻转可能来自一次矮星系碰撞",
        "summary": "Durham University 团队用 Gaia 观测约束超级计算机模拟，提出约一百亿年前的 Gaia Sausage 正面并合曾让银河盘翻转超过九十度，并解释恒星晕为何转得异常缓慢。",
        "happened": "研究者原本在追查银河盘恒星约每秒 220 公里、恒星晕仅约每秒 25 公里的旋转差异。模拟显示，质量接近 Gaia Sausage 的矮星系若正面撞入早期银河系，会在数亿年内重定向整个盘面，并留下缓慢旋转、偏心轨道明显的恒星晕。",
        "facts": [
          "相关并合约发生在 100 亿年前，研究团队提出银河盘可能翻转超过 90 度",
          "银河盘恒星绕中心运行约为每秒 220 公里，恒星晕平均旋转约为每秒 25 公里",
          "模拟显示盘面重定向并非瞬间发生，而至少持续数亿年",
          "Gaia Sausage 的恒星、气体与暗物质总量曾超过太阳质量的 100 亿倍；研究结果在 2026 年英国皇家天文学会全国会议上报告"
        ],
        "sourceName": "Durham University／Royal Astronomical Society；The Guardian",
        "sourceUrl": "https://www.theguardian.com/science/2026/jul/21/milky-way-disc-flip-collision-dwarf-galaxy-astronomers",
        "sourceDate": "2026-07-21",
        "whyItMatters": "天文学没有在银河系外架设摄像机回看历史，而是把恒星运动、化学组成和数值模拟拼成可检验的过去。",
        "analysis": "这个结论因此不是一张“碰撞照片”，而是观测任务、超级计算机和模型选择共同生产的解释；新数据仍可能改变翻转幅度与时间线。",
        "reflection": "制作一张“证据到叙事”的分层动画：先只显示 Gaia 测得的速度与轨道，再加入并合模拟，最后才出现翻转的银河盘；让观众清楚看到哪些是测量、哪些是模型推断。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "process"
      },
      {
        "category": "社会科学 × 心理与健康 × 科研方法",
        "image": "/story-images/alzheimers-organoids.jpg",
        "imageAlt": "培养皿里的微型神经组织、分叉神经元与不同药物反应路径的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释患者来源脑类器官与药物反应差异，并非显微照片、患者组织或临床结果",
        "title": "患者细胞培育的“迷你脑”显示同一种药可能产生不同结果",
        "summary": "Johns Hopkins 团队用患者血细胞培养数百个后脑类器官，发现阿尔茨海默病相关组织对常用抗抑郁药的分子反应并不一致；这是个体化研究工具的早期证据，不是已经可用的治疗预测。",
        "happened": "研究者把阿尔茨海默病患者与健康参与者的血细胞重编程为诱导多能干细胞，再培养为豌豆大小、能产生血清素神经元的后脑类器官。团队比较 escitalopram 治疗前后的蛋白质和细胞外囊泡，观察到疾病相关蛋白与药物反应的异质性。",
        "facts": [
          "研究使用患者来源细胞培养数百个豌豆大小的后脑类器官，作者称其可能是阿尔茨海默病领域规模最大的类器官研究之一",
          "类器官含有产生血清素的神经元，研究药物为常用 SSRI escitalopram oxalate",
          "阿尔茨海默病类器官中的 RAB3A、NSF 与 ATCAY 等神经信号相关蛋白水平较低",
          "研究发表于《Alzheimer's & Dementia》，DOI 为 10.1002/alz.71273；团队明确称液体活检与临床预测仍属未来目标"
        ],
        "sourceName": "Johns Hopkins Medicine；Alzheimer's & Dementia",
        "sourceUrl": "https://www.sciencedaily.com/releases/2026/07/260721000844.htm",
        "sourceDate": "2026-07-22",
        "whyItMatters": "精神和行为症状几乎影响所有阿尔茨海默病患者，但药物反应差异很大。",
        "analysis": "类器官让研究者在不直接试错于患者的情况下比较亚群，却仍缺少真实脑中的免疫、血管和长期环境。最危险的误读，是把一个实验室模型提前包装成“替你选药”的临床服务。",
        "reflection": "画出从血样、重编程、类器官、药物处理到囊泡分析的完整链条，并在每一步标出模型失去的现实条件。用多条不同颜色的反应路径替代单一“有效／无效”结论。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "process"
      },
      {
        "category": "女性主义 × 健康 × 研究与照护制度",
        "image": "/story-images/womens-health-infrastructure.jpg",
        "imageAlt": "研究、监管、数据、人才与公众知识五个支柱由照护路径连接的女性健康制度编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释女性健康研究与照护基础设施，并非患者、医护人员、政府文件或组织标志",
        "title": "多家机构发布缩小女性健康差距的全国战略",
        "summary": "三家美国女性健康组织联合三十余个伙伴，要求国会十年投入 200 亿美元，把研究、监管、数据、人才与公众教育连接成一项国家策略。",
        "happened": "ACOG、Society for Women's Health Research 与 Women First Research Coalition 发布《National Strategy to Close the Women's Health Gap》。框架提出五项投资重点：研究创新、跨机构监管协调、数据与证据基础设施、临床和研究人才，以及公众健康素养。",
        "facts": [
          "框架呼吁国会在 10 年内投资 200 亿美元",
          "策略由 ACOG、SWHR 与 Women First Research Coalition 发起，并获 30 余家专业、患者和研究组织支持",
          "五个重点是研究创新、监管现代化、数据基础设施、临床与研究人才、公众教育",
          "1993 年 NIH Revitalization Act 已要求 NIH 资助的临床研究纳入女性；新策略认为仍需补足研究到照护的实施链条"
        ],
        "sourceName": "Society for Women's Health Research；Endocrine Society",
        "sourceUrl": "https://www.endocrine.org/news-and-advocacy/news-room/2026/leading-womens-health-organizations-launch-national-strategy-to-close-the-womens-health-gap",
        "sourceDate": "2026-07-15；伙伴更新 2026-07-21",
        "whyItMatters": "1993 年法律要求 NIH 资助的临床研究纳入女性，解决了“谁被招募”的一部分，却没有自动修复研究主题、数据共享、成果转化与实际照护。",
        "analysis": "新框架的价值在于把缺口写成制度链条；局限则是它目前仍是一份倡议，200 亿美元尚未成为拨款，也缺少逐项绩效指标。",
        "reflection": "把“女性健康”画成五节点公共工程：每个节点列出负责机构、资金流、可检验产出与失败方式。另设一栏区分倡议金额、已授权资金和已实际支出，避免把政策主张当成预算事实。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "relationship"
      }
    ],
    "learningGoal": "理解探索需要场所、仪器、模型、资金和对研究对象的选择，而不只是个人好奇心。",
    "connection": "五则故事都在说明，探索权来自对叙事、空间、科研工具和健康数据基础设施的控制。"
  },
  {
    "date": "2026-07-22",
    "displayDate": "2026.07.22",
    "issueNo": "09",
    "theme": "解释世界的框架：宗教、地方、童年、遗产与性别叙事",
    "intro": "诗歌中的神、科罗拉多州、不可预测的童年、水库遗址和小说里的“浪子”都不是不言自明的对象；我们使用的解释框架会改变看见的问题。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 哲学 × 宗教与文学",
        "image": "/story-images/radical-god-theopoetics.jpg",
        "imageAlt": "一本打开的书释放出纸片、星群与不确定光环，象征神的概念由诗性想象生成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释神学、现象学与诗性想象的关系，并非宗教圣像、书封或作者肖像",
        "title": "《A Radical God》主张：诗歌不是描述神，而是在语言中创造神",
        "summary": "John D. Caputo 七月新书《A Radical God》把 theopoetics 推到更激进的位置：诗性语言不是替一个既有的神换上修辞外衣，而是在想象中构成‘神’这个观念。",
        "happened": "Columbia University Press 于 2026 年 7 月出版《A Radical God: Theopoetics, Phenomenology, and the Future of Religion》。Caputo 先暂停有神论与无神论的裁决，再用现象学讨论宗教语言如何在诗、祈祷和实践中生成意义；全书从 theopoetics 进入 theopraxis，最后追问一种不依附教义正统的宗教未来。",
        "facts": [
          "该书由 Columbia University Press 于 2026 年 7 月出版，共 336 页",
          "全书分 4 部、13 章，路径从 theopoetics、onto-theology 延伸至 theopraxis 与宗教未来",
          "平装定价 35 美元，精装定价 140 美元，并同时提供 PDF 与 EPUB 电子版",
          "作者 John D. Caputo 是 Syracuse University 宗教与人文学荣休教授、Villanova University 哲学荣休教授"
        ],
        "sourceName": "Columbia University Press",
        "sourceUrl": "https://cup.columbia.edu/book/a-radical-god/9780231566063/",
        "sourceDate": "2026-07（页面核验 2026-07-22）",
        "whyItMatters": "公共讨论常把宗教压缩成‘相信某个超自然存在’或‘拒绝这种相信’。",
        "analysis": "Caputo 的框架把问题改写为：共同体用哪些隐喻、叙事与实践组织苦难、希望和责任。它不证明神存在，也没有自动解决宗教制度的权力问题，却为研究宗教、文学与政治想象如何相互塑造提供了第三条路径。",
        "reflection": "选择同一句祈祷或神学命题，制作三栏文本：把神当作既有对象的陈述、暂停真假判断后的现象描述、以及把神视为诗性生成的版本。比较每一栏允许人们做什么，而不仅是它声称什么。",
        "evidenceBoundary": "机构原始页面或专题资料能支持这里列出的事件、日期与公开材料；本站的比较和反思会单独标记，不能替代原始来源。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "relationship"
      },
      {
        "category": "艺术人文 × 艺术 × 地理与地方身份",
        "image": "/story-images/colorado-currents.jpg",
        "imageAlt": "科罗拉多地形线、家庭档案、河流与工作室纸片交叠成一幅开放地图的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释地方身份、环境与当代艺术的关系，并非参展作品、展览现场或官方海报",
        "title": "28 位艺术家用一场展览重新讨论“科罗拉多”是什么",
        "summary": "MCA Denver 将在科罗拉多建州 150 周年之际推出《Colorado Currents》。展览没有把地方身份当成现成风景，而是让 28 位相关艺术家从历史、家庭遗产和水资源压力重新定义它。",
        "happened": "《Colorado Currents》将于 7 月 24 日开幕、展至 11 月 1 日。首席策展人 Miranda Lash 历时近两年走访工作室，尤其寻找此前没有在 MCA Denver 展出的创作者；展览以科罗拉多历史、地方与家庭遗产、自然三条线组织近期作品，并把干旱、山火与用水放进州身份叙事。",
        "facts": [
          "展览汇集 28 位与科罗拉多有关的艺术家，展期为 2026 年 7 月 24 日至 11 月 1 日",
          "项目为科罗拉多建州 150 周年而策划，前期工作持续近 2 年",
          "展览按科罗拉多历史、地方与家庭遗产、自然 3 条主题线组织",
          "自然主题明确涉及水资源使用、干旱与山火，策展人也优先寻找此前未在 MCA Denver 展出的艺术家"
        ],
        "sourceName": "Museum of Contemporary Art Denver；Axios Denver",
        "sourceUrl": "https://mcadenver.org/exhibitions/colorado-currents",
        "sourceDate": "展览信息核验 2026-07-22；报道 2026-07-15",
        "whyItMatters": "周年展很容易把复杂地域压缩成山景、开拓神话和统一的庆典口号。",
        "analysis": "这一策展方法至少承认‘地方’由迁徙、原住民历史、家庭记忆、城市发展与资源分配共同形成。28 位艺术家仍不可能代表全州，但展览把代表性的缺口变成可以公开争论的问题。",
        "reflection": "制作一张没有行政边界的州地图：用作品主题标出水、火、家庭迁徙、产业与被省略的历史，再在图外列出没有进入展览的地区和社群。让‘28’既是规模，也是一条清晰的代表性边界。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "relationship"
      },
      {
        "category": "社会科学 × 心理学 × 儿童与家庭",
        "image": "/story-images/childhood-unpredictability.jpg",
        "imageAlt": "日程方格在一张家庭餐桌周围忽然错位，而灯、餐盘和时钟保持稳定的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释日常可预测性与儿童心理健康筛查，并非儿童、家庭或临床研究对象照片",
        "title": "研究发现：不可预测的童年环境也可能影响成年心理健康",
        "summary": "一项近三万名儿童的真实世界研究发现，在传统 ACE 创伤筛查之外加入 5 个‘日常不可预测性’问题，能更准确识别多类心理与行为风险；结果是关联证据，不是对父母的因果判决。",
        "happened": "Chapman University、UC Irvine 与 Rady Children's Health 团队分析儿科初级照护数据，将照护者更换、作息变动和难以预期的日常安排，与传统 Adverse Childhood Experiences 筛查并列。两种量表捕捉到不同经验，合用时对抑郁、焦虑、睡眠、行为与躯体症状的识别优于只用 ACE。",
        "facts": [
          "研究分析近 30,000 名在 Rady Children's Hospital Orange County 接受照护的儿童数据",
          "不可预测性使用 5 个问题测量，并与传统 ACE 筛查并列而非取代后者",
          "研究考察抑郁、焦虑、睡眠障碍、行为问题和躯体症状 5 类结果",
          "项目得到 California Initiative to Advance Precision Medicine 290 万美元资助；研究者强调这是风险识别工具，不能仅凭关联断定家庭日程导致疾病"
        ],
        "sourceName": "Chapman University；Nature Mental Health",
        "sourceUrl": "https://news.chapman.edu/2026/07/21/chapman-researcher-identifies-overlooked-childhood-risk-factor-for-mental-health/",
        "sourceDate": "2026-07-21",
        "whyItMatters": "创伤模型擅长询问‘发生了什么坏事’，却可能漏掉长期的不确定感。",
        "analysis": "新量表为儿科筛查增加了一个维度，但也有风险：贫困、轮班工作、住房不稳和照护资源不足可能被错误地归咎于单个家庭。筛查只有连接到物质支持与可获得的服务，才不会变成新的标签。",
        "reflection": "把同一个孩子的一周画成两层时间表：上层记录重大事件，下层记录谁来照护、何时吃饭、在哪里睡觉等可预测性。再叠加住房、工时和交通条件，避免把结构性不稳定改写成父母性格。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学 × 地理学 × 水资源与文化遗产",
        "image": "/story-images/reservoir-heritage-risk.jpg",
        "imageAlt": "水库水位线在地图上反复升降，露出化石足迹、遗址网格与五级风险色带的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释水位调度与文化、古生物资源保存风险，并非 USGS 原始地图或具体遗址定位",
        "title": "USGS 建模评估 Lake Powell 水位变化对遗址的风险",
        "summary": "USGS 发布 Lake Powell 与 Lake Mead 的文化和古生物资源保存风险模型，把 2026—2060 年水位方案、岸线侵蚀与潜在遗址分布纳入同一空间分析。",
        "happened": "这份 7 月更新的数据集服务于美国两座水库的 Post-2026 运营环境影响评估。研究者分别估计化石、足迹、洞穴等古生物资源和考古遗址、历史土地使用、器物等文化资源可能位于何处，再把地形与水位变化造成的风化和侵蚀叠加，形成 1 至 5 级风险。",
        "facts": [
          "模型覆盖 Lake Powell 与 Lake Mead，并投射 2026 年 12 月至 2060 年 12 月的水位波动",
          "文化与古生物资源分别建模，保存风险从 1 级到 5 级排序，5 级代表最高变化潜势",
          "研究将风险与 8 种拟议大坝运营替代方案按月度时间步进行比较",
          "数据集 DOI 为 10.5066/P13UBJSP，2026 年 7 月发布第 2 版，并以 CC0 1.0 开放"
        ],
        "sourceName": "U.S. Geological Survey",
        "sourceUrl": "https://www.usgs.gov/data/modeled-preservation-risk-paleontological-and-cultural-resources-within-lake-powell-and-lake",
        "sourceDate": "2026-07-02（第 2 版，页面核验 2026-07-22）",
        "whyItMatters": "大坝调度通常以供水、水电和生态指标讨论，遗址保存容易变成附录。",
        "analysis": "模型让这类损失进入方案比较，却不能把未知遗址变成精确坐标，也不能替代原住民社群与现场调查。地图最有价值之处，是让未来运营承认水位变化同时是一种文化治理。",
        "reflection": "把同一段湖岸画成八种运营方案下的月度翻页动画，分别显示供水、发电、生态与遗址风险。对未实地确认的位置使用模糊纹理，避免把概率模型误呈现为藏宝图。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "官方数据、政策或制度文件",
        "informationForm": "process"
      },
      {
        "category": "女性主义 × 文学 × 性别与婚姻史",
        "image": "/story-images/divorcing-the-rake.jpg",
        "imageAlt": "十八世纪小说书页中的婚姻契约被剪开，男性放纵与女性后果落在不对称天平上的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释家庭小说、性道德与婚姻制度，并非历史手稿、书封或研究者肖像",
        "title": "一项文学研究追问：小说怎样把男性越界写成“天性”",
        "summary": "Rachel Gevlin 获 AAUW 一年期研究资助，将撰写《Divorcing the Rake》，研究十八世纪末英国家庭小说怎样处理通奸、重婚和离婚，并自然化男女欲望的双重标准。",
        "happened": "Gevlin 的在研书稿将分析 Jane Austen 等作者笔下男性婚前与婚外性行为，以及婚姻破裂情节如何获得同情性解释。项目刚获得 5 万美元 American Postdoctoral Research Leave Fellowship；它提出了明确论点，但书尚未完成，因此不能把未来文本分析当成已经证实的普遍结论。",
        "facts": [
          "项目暂名《Divorcing the Rake: Male Sexual Conduct in Domestic Fiction》，聚焦十八世纪末英国家庭小说",
          "研究对象包括 Jane Austen 等英国作者笔下的通奸、重婚、离婚以及男性婚前和婚外性行为",
          "Gevlin 获得为期 1 年、金额 50,000 美元的 AAUW American Postdoctoral Research Leave Fellowship",
          "AAUW 成立于 1881 年，迄今用于扩大女性高等教育机会与公平的资助超过 1.5 亿美元"
        ],
        "sourceName": "Virginia Commonwealth University；American Association of University Women",
        "sourceUrl": "https://news.vcu.edu/article/rachel-gevlin-earns-aauw-fellowship-to-support-book-on-sexual-mores-in-domestic-fiction",
        "sourceDate": "2026-07-21",
        "whyItMatters": "家庭小说不仅反映性道德，也通过人物魅力、叙事视角和结局分配训练读者判断谁的越界可被原谅。",
        "analysis": "研究把‘男性欲望更自然’从生物常识还原为一种被反复讲述的文化脚本，同时提醒我们：出版和资助制度决定哪些尚未成书的问题获得研究时间。",
        "reflection": "选择三种婚姻破裂情节，逐段标记叙述者替男性提供的理由、女性承担的后果和结局给予的惩罚。再把性别互换，只改代词和法律处境，观察同情机制在哪里失效。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "timeline"
      }
    ],
    "learningGoal": "识别概念、地方身份、心理风险、保护模型和文学类型怎样组织证据与判断。",
    "connection": "五则故事都把框架本身变成研究对象，而不是只接受框架给出的结论。"
  },
  {
    "date": "2026-07-21",
    "displayDate": "2026.07.21",
    "issueNo": "08",
    "theme": "证据如何被制造：复原、建筑、新闻、统计与诊断",
    "intro": "人脸复原、建筑路线、新闻平台、种族变量和医学诊断都需要把材料转换成可理解的结果；转换方法会决定证据能够说明什么。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 历史 × 人类学与博物馆叙事",
        "image": "/story-images/aquincum-reconstructed-lives.jpg",
        "imageAlt": "古罗马颅骨、分层证据卡片与逐渐成形但不具真实人物特征的面孔相互叠合的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释考古证据、面部复原与虚构传记之间的边界，并非遗骨、展品或真实人物肖像",
        "title": "Aquincum 博物馆用遗骨复原三位古罗马人的面貌与生活",
        "summary": "布达佩斯 Aquincum Museum 用 DNA、颅骨形态和考古背景复原 16 名古罗马居民，同时为他们创造名字与人生。展览最有价值的不是‘看起来像真人’，而是暴露科学推断与叙事想象如何在同一张脸上相遇。",
        "happened": "《Once We Were Like You》正在 Aquincum Museum 展出。研究团队依据遗骨、DNA 和墓葬背景推断年龄、来源、伤病以及眼睛、头发和肤色等特征，并制作 16 个面部复原，其中 6 个是等身硅胶模型。策展团队也为人物命名、安排职业与个人经历，并明确承认这些传记是在历史基础上进行的叙事创作。",
        "facts": [
          "展览包含 16 个面部复原，其中 6 个为等身硅胶模型，展至 2026 年 10 月 31 日",
          "研究者结合 DNA、考古学与人类学信息推断肤色、发色、眼色、雀斑、年龄、伤病和来源",
          "遗骨显示多数人有炎症、营养不足或长期劳动痕迹，策展人据此判断他们多属较低社会阶层",
          "人物被推定来自意大利、不列颠、叙利亚、萨尔马提亚与凯尔特等不同背景，但具体姓名、职业和生平由策展团队创造"
        ],
        "sourceName": "Associated Press；Aquincum Museum",
        "sourceUrl": "https://apnews.com/article/hungary-ancient-rome-museum-facial-reconstrucion-73d5ed287c5de882f9ca1e12cb345f89",
        "sourceDate": "2026-07-15（页面核验 2026-07-21）",
        "whyItMatters": "复原技术能让普通劳动者从帝王与战争构成的罗马史中重新出现，但逼真的面孔会提高观众对整个故事的信任，包括没有直接证据的部分。",
        "analysis": "与此前‘罗马器物进入展台后如何变成艺术’不同，这里关注的是科学视觉化如何把概率推断转化为看似确定的人格，以及博物馆应怎样持续标记证据等级。",
        "reflection": "为一个复原人物制作三层透明肖像：骨骼能够支持的事实、DNA 与统计模型给出的概率、策展人为建立共情而补写的传记。让每一层都能单独关闭，观众会看到‘像一个人’与‘知道这个人’之间仍有多远。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "evidence"
      },
      {
        "category": "艺术人文 × 建筑 × 博物馆制度",
        "image": "/story-images/clark-tavitian-wing.jpg",
        "imageAlt": "象牙色与酒红色纸张构成的新博物馆翼楼穿过两座不同时代的旧建筑并连向山林的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Clark 新翼在旧馆、藏品与景观之间的连接，并非建筑效果图或建成照片",
        "title": "Clark Art Institute 公布连接旧馆、捐赠与山林的新翼设计",
        "summary": "Selldorf Architects 公布 Clark Art Institute 的 Aso O. Tavitian Wing：12 间展厅把三百余件欧洲艺术收藏安置在两座不同时代的建筑之间。所谓‘无缝’，其实是材料、资金、动线与机构记忆的精密协商。",
        "happened": "Clark Art Institute 宣布建设专门陈列 Aso O. Tavitian Collection 的新翼，建筑由 Selldorf Architects 设计，景观由 Reed Hilderbrand 负责，计划 2028 年开放。新建筑连接 1955 年的主馆与 1973 年的 Manton Research Center，以石材、白橡木、青铜窗框和连续景观组织 12 间尺度不同的展厅。",
        "facts": [
          "新翼面积约 15,000 平方英尺，设置 12 间展厅，计划于 2028 年开放",
          "Aso O. Tavitian Collection 包含 300 余件作品，范围从文艺复兴延伸至十八世纪法国艺术",
          "Tavitian 的遗赠与捐赠合计价值约 4,500 万美元，用于收藏、建筑和相关项目",
          "建筑将连接 1955 年主馆与 1973 年 Manton Research Center，景观设计由 Reed Hilderbrand 承担"
        ],
        "sourceName": "Selldorf Architects；Clark Art Institute",
        "sourceUrl": "https://www.selldorf.com/news/clark-art-institute-reveals-design-for-new-aso-o-tavitian-wing",
        "sourceDate": "2026-07-20",
        "whyItMatters": "博物馆扩建常被描述为纯粹的空间改善，但一座新翼同时固定了捐赠者的名字、收藏的地位、参观顺序和未来维护成本。",
        "analysis": "与此前 Madelon Vriesendorp 讨论建筑图像和女性作者不同，本项关注真实制度如何通过材料与路径把一笔捐赠变成长期公共叙事；越是看起来无缝，越值得追问哪些谈判被藏进了墙体。",
        "reflection": "把平面图画成一份‘机构剖面’：每个展厅同时标出作品年代、捐赠关系、旧建筑接口、景观视线与维护材料。让观众看到一条优雅动线背后，至少有五种不同时间尺度在协同。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "relationship"
      },
      {
        "category": "社会科学 × 传播学 × 新闻基础设施",
        "image": "/story-images/platformized-news.jpg",
        "imageAlt": "同一则新闻从报纸页面分流到短视频、社交网络和聊天机器人，来源标识沿途逐渐变小的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释新闻消费的平台化与来源可见度，并非 Reuters Institute 原始图表",
        "title": "2026 新闻报告显示：平台首次超过新闻网站成为主要入口",
        "summary": "Reuters Institute 的 48 个市场调查显示，社交媒体与视频网络以 54% 的使用率首次超过新闻机构网站和应用。变化不是某个平台突然获胜，而是新闻入口、信任和付费关系被第三方逐步重写。",
        "happened": "《Digital News Report 2026》记录全球新闻消费继续从电视、新闻网站和应用转向社交媒体、视频网络与 AI 聊天机器人。社交与视频网络成为 54% 受访者使用的新闻来源，新闻机构自有网站和应用为 51%，电视为 52%；另有 10% 的人每周用独立 AI 聊天机器人获取新闻。",
        "facts": [
          "调查覆盖 48 个市场；54% 的受访者使用社交媒体或视频网络获取新闻，首次超过新闻机构网站和应用的 51%",
          "30% 将社交或视频网络视为主要新闻来源，高于五年前的 22%；12% 只通过这些平台接触新闻，比 2020 年的 6% 翻倍",
          "每周使用 AI 聊天机器人获取新闻者由 7% 升至 10%，35 岁以下人群为 16%",
          "整体新闻信任度降至 37%，为 2015 年开始追踪以来最低；社交媒体新闻信任度为 22%，聊天机器人新闻答案为 20%"
        ],
        "sourceName": "Reuters Institute for the Study of Journalism · Digital News Report 2026",
        "sourceUrl": "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/dnr-executive-summary",
        "sourceDate": "2026-06-16（页面核验 2026-07-21）",
        "whyItMatters": "这不是‘年轻人不读新闻’的简单故事，而是新闻仍被阅读，却越来越在新闻机构无法完整控制的界面里出现。",
        "analysis": "平台决定标题长度、视频节奏、来源显示和点击出口，也分走受众数据与订阅机会。与昨日 Pew 的公民参与类型不同，本项关注的是分发基础设施本身如何改变信任：整体新闻信任降至 37%，社交新闻和聊天机器人答案的信任度更低。",
        "reflection": "选择同一则报道，让它依次穿过新闻网站、短视频、信息流摘要和聊天机器人回答。逐站记录标题、署名、原始链接、上下文、广告和纠错入口还剩多少，把‘平台化’做成一张可见的损耗表。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "process"
      },
      {
        "category": "社会科学 × 社会学 × 测量与不平等",
        "image": "/story-images/race-measurement-inequality.jpg",
        "imageAlt": "同一组人物经过不同分类表格后投射出不同工资、健康与教育统计结果的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释种族变量选择如何改变统计结论，并非论文原始图表或真实调查对象",
        "title": "研究证明：种族变量怎样编码会改变不平等结论",
        "summary": "Sociological Science 的开放研究比较美国纵向调查中的多种种族测量，发现常用的筛选变量在五类结果中从未获得最佳模型拟合。种族不是数据库里天然存在的一栏，而是研究者必须解释的操作选择。",
        "happened": "Stanford 社会学者 Emma Williams-Baron 与 Aliya Saperstein 使用 1979 National Longitudinal Survey of Youth，比较自我认同、他人分类和筛选问卷等不同种族变量，并将其带入工资、薪金、失业、抑郁与学校纪律五类不平等分析。表现最好的变量会随性别、结果与拟合指标改变，没有一个通用金标准。",
        "facts": [
          "论文于 2026 年 7 月 9 日发表，DOI 为 10.15195/v13.a32，全文采用 CC BY 4.0 许可",
          "研究使用 1979 National Longitudinal Survey of Youth，并比较多种自我认同与外部分类的种族测量",
          "分析覆盖工资、薪金、失业、抑郁和学校纪律 5 类不平等结果",
          "既有研究广泛采用的 screener race 变量，在跨结果的模型拟合比较中从未成为经验上的最佳选择；最佳变量随性别、结果和拟合指标变化"
        ],
        "sourceName": "Sociological Science",
        "sourceUrl": "https://sociologicalscience.com/articles-v13-32-825/",
        "sourceDate": "2026-07-09",
        "whyItMatters": "量化研究常把种族当作无需解释的控制变量，但分类方式会改变估计值、显著性乃至政策故事。",
        "analysis": "研究并不是要求抛弃种族数据，而是要求公开变量如何生成、为何选择以及替代选择会不会得到不同结论。它也与本期古罗马面部复原形成呼应：分类工具不是现实的透明窗口，本身参与了现实的构造。",
        "reflection": "用一个可切换的统计面板呈现同一研究问题：只改变种族变量，保留样本与结果不变，观察系数和排序怎样移动。每次切换都显示变量来自自我认同、调查员判断还是早期筛选，避免把分类来源藏在脚注。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      },
      {
        "category": "女性主义 × 健康 × 诊断偏差与照护",
        "image": "/story-images/women-bleeding-diagnosis.jpg",
        "imageAlt": "一条十四年长的红色诊断时间线从月经日历穿过缺铁、转诊和血液检查，最终抵达诊断的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释女性出血性疾病的长期诊断延迟，并非患者、血样或临床结果图像",
        "title": "全球报告指出：女性出血性疾病平均可能晚诊十四年",
        "summary": "The Lancet Haematology 委员会指出，女性与女孩的出血性疾病平均需 14 至 16 年才获诊断，男性约两年；多达三分之一女性经历的月经过多，往往是最早却最容易被正常化的信号。",
        "happened": "由 Cleveland Clinic 血液学家 Bethany Samuelson Bannow 领导的全球委员会发布女性血液健康路线图，涵盖出血、血栓、贫血、妊娠和产后并发症。报告要求把月经史与缺铁筛查纳入常规照护，建立更清晰的转诊和产后出血流程，并把女性纳入临床试验与指南设计。",
        "facts": [
          "委员会估计女性与女孩的出血性疾病平均诊断等待为 14 至 16 年，男性约为 2 年",
          "月经过多影响多达三分之一女性，并可能是遗传性出血障碍最早出现的信号",
          "委员会目标是在 2035 年前把女性与女孩从症状出现到诊断的平均时间缩短至 24 个月以内",
          "建议包括普遍筛查月经过多与缺铁、标准化产后出血流程，以及为妊娠和产后阶段提供更个体化的血栓照护"
        ],
        "sourceName": "Cleveland Clinic；The Lancet Haematology Commission",
        "sourceUrl": "https://newsroom.clevelandclinic.org/2026/07/13/new-global-report-outlines-strategies-to-improve-hematologic-care-for-women",
        "sourceDate": "2026-07-13",
        "whyItMatters": "‘很多女性都这样’常被当作无需检查的理由，但高发并不等于正常。",
        "analysis": "月经过多被文化性地视为私人麻烦，会把潜在遗传性出血障碍变成长达十余年的缺铁、误诊和生活限制。与此前乳腺癌全球生存率的系统差距不同，本项聚焦症状进入医疗体系的第一道翻译：谁的疼痛和出血被记作临床数据，谁被要求适应。",
        "reflection": "把诊断过程画成 14 年时间线：首次月经、反复缺铁、请假、急诊、妊娠或手术出血、转诊与最终检测。每个节点同时标记患者说了什么、病历记下什么、系统漏掉什么，再与委员会提出的 24 个月目标对照。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "timeline"
      }
    ],
    "learningGoal": "分清原始材料、测量或设计方法、研究者推断与公众最后看到的结论。",
    "connection": "五则故事共同揭示证据不是被动地“摆在那里”，而是在复原、编码、组织和解释中形成。"
  },
  {
    "date": "2026-07-20",
    "displayDate": "2026.07.20",
    "issueNo": "07",
    "theme": "分类决定谁被看见：迁徙、家庭、公共参与与医疗差距",
    "intro": "儿童绘本、家庭空间、公民参与、网球资格和乳腺癌生存率说明，分类既帮助我们理解世界，也可能决定谁被承认、排除或获得资源。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 设计 × 儿童文学与移民史",
        "image": "/story-images/ed-young-bright-worlds.jpg",
        "imageAlt": "纸张、墨迹、上海街屋、迁徙飞鸟和打开的绘本围绕一位抽象创作者剪影的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Ed Young 的移民记忆与绘本创作，并非艺术家原作、书封或人物肖像复制",
        "title": "Ed Young 回顾展用六十年作品讲述迁徙与儿童视觉语言",
        "summary": "Museum of Chinese in America 的首场美国回顾展以原稿、拼贴和出版物串联 Ed Young 的上海童年、赴港避乱、移居美国、收养女儿与太极实践，显示儿童书并不是缩小的成人艺术，而是记忆跨代传递的基础设施。",
        "happened": "《Ed Young’s Bright Worlds: Gesture and Feeling in 60 Years of Picture Books for Children》正在纽约 Museum of Chinese in America 展出。展览从《The House Baba Built》《Voices of the Heart》《My Mei Mei》和身后出版的《Bright World》等作品出发，呈现 Young 如何使用粉彩、剪纸、钢笔、墨和拼贴，把日本占领时期的上海童年、移民生活、家庭经验和身体练习转译为图像叙事。",
        "facts": [
          "展期为 2026 年 5 月 14 日至 9 月 13 日，是 Ed Young 在美国的首场回顾展",
          "Young 的儿童书创作生涯超过 60 年，参与创作的书籍超过 100 本",
          "展览包括《The House Baba Built》(2011)、《Voices of the Heart》(1997)、《My Mei Mei》(2006) 与《Bright World》(2024) 的原作",
          "他曾带着借来的 20 美元到纽约谋生；1962 年出版的《The Mean Mouse and Other Mean Stories》开启其绘本职业生涯"
        ],
        "sourceName": "Museum of Chinese in America",
        "sourceUrl": "https://www.mocanyc.org/event/ed-youngs-bright-worlds/",
        "sourceDate": "2026-05-14（展览开幕；页面核验 2026-07-20）",
        "whyItMatters": "绘本常被放在文学和美术的边缘，但它可能是一个人最早接触战争、迁徙、家庭差异与异文化的媒介。",
        "analysis": "Young 的案例也打破了把移民艺术只理解为身份声明的习惯：个人经历进入书页后，会通过材料、翻页节奏和亲子共读变成可反复使用的家庭记忆。它与此前讨论艺术史经典补名不同，关注的是儿童视觉文化如何建立跨代共同语言。",
        "reflection": "可选取同一段记忆，分别用文字段落、单幅画和三次翻页来表达，比较每种形式能保留什么。再把纸张、墨迹、剪切边缘和身体动作作为叙事证据，而不是只复述艺术家的生平。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "艺术人文 × 女性主义 × 家庭空间与策展",
        "image": "/story-images/domestic-liminal-home.jpg",
        "imageAlt": "餐桌、椅子、衣物、半开的门和家庭照片在彼此错位的房间之间漂浮的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释家庭空间的亲密、劳动与过渡状态，并非 Paul R. Jones Collection 藏品复制",
        "title": "学生策展把家庭空间和日常劳动变成艺术史问题",
        "summary": "University of Alabama 的研究生策展项目从 Paul R. Jones Collection 选出二十世纪作品，讨论家如何同时容纳亲密、劳动、安全、压迫、记忆和离开；策展过程本身也成为学生学习如何生产解释的现场。",
        "happened": "《The Domestic Liminal: The In-Betweenness of the Home》正在 Tuscaloosa 的 Paul R. Jones Museum 展出，7 月 20 日继续向公众免费开放。展览由 Lucy Curzon 博士的 Art History 580 二十世纪艺术研讨课策划，学生从馆藏中选择作品，以日常生活为线索重新组织二十世纪艺术与文化。",
        "facts": [
          "展期为 2026 年 5 月 1 日至 8 月 21 日，7 月 20 日列为开放日期之一",
          "展览地点为 University of Alabama 的 Paul R. Jones Museum，公众可免费参观",
          "项目由 Art History 580: Twentieth Century seminar 的学生在 Lucy Curzon 博士指导下完成",
          "展品选自 Paul R. Jones Collection，策展主题聚焦二十世纪艺术与文化中的日常生活"
        ],
        "sourceName": "University of Alabama · Paul R. Jones Museum",
        "sourceUrl": "https://calendar.ua.edu/event/the-domestic-liminal-exhibition",
        "sourceDate": "2026-05-01（展览开幕；2026-07-20 当日开放）",
        "whyItMatters": "‘家’经常被当作自然、私人而且没有政治性的空间，但照护、家务、代际关系、阶级和性别分工都在其中发生。",
        "analysis": "把学生策展纳入讨论，还能揭示博物馆叙事并非天然存在：选哪件作品、让哪些物件相邻、怎样书写标签，都会决定观众把日常看成琐碎还是结构。",
        "reflection": "以一张餐桌为中心画出不同时间层：做饭、照护、争吵、远程工作、空置与离家。随后用展签的口吻分别把它写成家具、劳动工具、情感遗址和权力空间，展示命名如何改变观看。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "relationship"
      },
      {
        "category": "社会科学 × 传播学 × 公民参与",
        "image": "/story-images/civic-engagement-clusters.jpg",
        "imageAlt": "一座纸上城市被分成动员者、社区连接者、新闻旁观者和低参与者四种网络形态的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Pew 的四类公共参与模式，并非研究原始图表或精确比例地图",
        "title": "Pew 研究把美国人的新闻与公共参与分成多种群体",
        "summary": "Pew-Knight Initiative 用 19 项行为指标将美国成年人归为动员者、连接者、旁观者与局外人四组，说明投票、志愿服务、宗教活动、新闻关注和公开表达并不会总是同步出现。",
        "happened": "Pew Research Center 7 月 16 日发布公共参与研究。研究者用聚类分析处理一项 5,393 人、多模式调查中的 19 项政治、公民、宗教和新闻行为，再以另一项 5,195 人调查比较四组人的知识与态度。结果中，动员者占 9%，连接者占 28%，旁观者与局外人各占 31%。",
        "facts": [
          "主要调查于 2025 年 7 月 9 日至 12 月 5 日进行，共有 5,393 名美国成年人参与",
          "研究使用政治行动、公民参与、宗教出席和新闻关注等 19 项指标进行聚类",
          "四类占比分别为动员者 9%、连接者 28%、旁观者 31% 和局外人 31%",
          "即使在低参与的局外人中，41% 表示曾在 2024 年投票，24% 至少每月参加一次宗教活动"
        ],
        "sourceName": "Pew Research Center · Pew-Knight Initiative",
        "sourceUrl": "https://www.pewresearch.org/journalism/2026/07/16/how-americans-are-engaged-with-news-politics-religion-and-civic-life/",
        "sourceDate": "2026-07-16",
        "whyItMatters": "把人简单分为‘关心政治’与‘不关心政治’，会漏掉大量实际差异：有人深度参与社区却避开党派政治，有人密切关注新闻但只在私人聊天中回应，也有人整体参与较少却仍然投票或参加宗教活动。",
        "analysis": "分类能帮助传播者找到不同入口，但聚类不是人格诊断，而且调查期涵盖 2024 年大选，其模式未必在非选举年份保持不变。",
        "reflection": "把四种类型写成四条‘同一天’的时间线：同一则新闻如何分别变成联系议员、社区捐助、私聊转发或完全绕过。随后标出调查没有测到的照护劳动、非正式互助和无法投票者，提醒读者模型的边界。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      },
      {
        "category": "女性主义 × 性别 × 体育制度与数据隐私",
        "image": "/story-images/wta-sry-eligibility.jpg",
        "imageAlt": "空网球场被透明 DNA 链分隔，旁边出现棉签、隐私信封、准入闸门和分叉路径的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于呈现体育资格筛查的制度张力，并非运动员、检测过程或基因结果的真实图像",
        "title": "WTA 要求女子网球选手接受 SRY 基因资格筛查",
        "summary": "WTA 宣布以一次性 SRY 基因检测确认女子巡回赛资格，新规 7 月 21 日生效。争论因此从睾酮规则转向基因标记，同时把隐私、例外身体与制度申诉推到中心。",
        "happened": "WTA 更新女子巡回赛参赛政策，要求球员通过一次性 SRY 基因筛查；样本可由面颊拭子或血液取得。此前政策允许跨性别女性在声明女性身份并保持较低睾酮水平两年后参赛。WTA 表示筛查将在 2026 年开始，并承诺设置保密和球员沟通机制。",
        "facts": [
          "新政策要求一次性 SRY 基因筛查，可使用面颊拭子或血液样本",
          "资格流程于 2026 年 7 月 21 日生效，WTA 表示筛查将在 2026 年内启动",
          "旧政策要求跨性别女性声明性别身份，并在参赛前保持较低睾酮水平两年",
          "Reuters 报道称，目前职业网球任何级别都没有已知的跨性别女性现役球员"
        ],
        "sourceName": "Reuters（政策说明引述 WTA）",
        "sourceUrl": "https://www.reuters.com/sports/tennis/womens-tour-mandates-gene-test-eligibility-2026-07-20/",
        "sourceDate": "2026-07-20",
        "whyItMatters": "规则试图用一个可操作的统一门槛结束各项目长期分裂的资格制度，但可操作性并不等于没有代价。",
        "analysis": "基因信息一旦成为职业准入凭证，检测保管、异常结果、复核与申诉就不再只是医学细节，而是劳动权和数据治理问题。报道同时指出，目前职业网坛各级别没有已知的跨性别女性球员，因此政策的象征范围远大于当前直接影响人数。",
        "reflection": "不要只制作支持／反对二选一辩论；可以画出一张完整资格流程：谁采样、谁读取、谁保存、异常结果由谁解释、运动员如何申诉。把制度最容易被一句‘检测即可’省略的环节全部放回来。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "process"
      },
      {
        "category": "女性主义 × 健康 × 全球医疗与数据基础设施",
        "image": "/story-images/global-breast-survival.jpg",
        "imageAlt": "由五年时间线组成的世界地图连接筛查、药物、放疗和癌症登记系统，并在部分地区留下数据空白的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释全球乳腺癌生存差距与数据缺口，并非精确地图、患者影像或临床结果",
        "title": "WHO 首次发布全球乳腺癌五年生存率比较",
        "summary": "WHO 首次为全部 194 个成员国估计乳腺癌五年净生存率：全球中位数为 77.8%，非洲区域为 39.1%，美洲区域为 88.5%；差距同时暴露了诊断、治疗和癌症登记能力的不平等。",
        "happened": "WHO 发布 2017 至 2021 年确诊女性的全球乳腺癌五年生存估计，并在 Nature Medicine 发表模型结果。模型将 67 个拥有观测登记数据的成员国，与分期、药物可及性、放疗、乳腺摄影能力和成人死亡率等变量结合，为其余国家建立基线。",
        "facts": [
          "WHO 为全部 194 个成员国提供 2017 至 2021 年确诊患者的五年生存估计，全球中位数为 77.8%",
          "区域中位数从非洲区域的 39.1% 到美洲区域的 88.5%；欧洲区域为 84.0%",
          "低收入国家中位数为 41.9%，高收入国家为 87.3%",
          "模型只有 67 个成员国的癌症登记观测数据；36 个脆弱和冲突国家中只有 2 个拥有观测数据"
        ],
        "sourceName": "World Health Organization；Nature Medicine",
        "sourceUrl": "https://www.who.int/news/item/08-07-2026-first-global-breast-cancer-survival-estimates-show-wide-regional-and-income-disparities",
        "sourceDate": "2026-07-08（页面核验 2026-07-20）",
        "whyItMatters": "生存率常被讲成个人抗争故事，但国家间差异更多反映早期发现、及时确诊、复合治疗与连续照护能否连接起来。",
        "analysis": "与此同时，估计值的完整世界地图可能制造一种数据已经齐全的错觉：194 个国家中只有 67 个拥有观测生存数据，36 个脆弱或受冲突影响的国家中更只有两个。数据基础设施本身就是医疗能力的一部分。",
        "reflection": "制作两张叠图：第一张呈现五年生存率，第二张只显示哪些地方真正有癌症登记观测。让颜色最确定的区域与信息最稀薄的区域分开，避免把模型估计画成同等坚实的事实。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      }
    ],
    "learningGoal": "看见分类标准如何影响文化记忆、公共参与、体育资格和医疗结果。",
    "connection": "五则故事都把“谁属于哪一类”与真实的可见性、机会和照护后果联系起来。"
  },
  {
    "date": "2026-07-19",
    "displayDate": "2026.07.19",
    "issueNo": "06",
    "theme": "离开原始背景之后：文物、女性艺术、实验与公共制度",
    "intro": "罗马器物、女性抽象表现主义、焦虑游戏、私人火箭和产后医疗政策都在离开原始背景后获得新意义，也暴露新的解释风险。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 历史 × 博物馆研究",
        "image": "/story-images/roman-art-context.jpg",
        "imageAlt": "罗马头盔、壁画碎片与器皿从生活空间进入现代展台的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释器物脱离原始语境后的博物馆化，并非卢浮宫展品复制",
        "title": "罗马器物展览追问：日常用品何时会被当成艺术",
        "summary": "尼姆罗马博物馆与卢浮宫合作的展览拒绝只谈形式之美：头盔、壁画、器皿和建筑构件首先属于战斗、家居、仪式与权力，然后才被现代展台重新命名为独立艺术品。",
        "happened": "《L’art romain du Louvre. Un monde d’images》正在法国尼姆 Musée de la Romanité 展出。策展路径将庞贝角斗士头盔等仍能显出用途的器物，与从完整装饰体系中切下、后来被独立装框的壁画碎片并置，追问现代收藏和审美分类如何改变我们观看罗马视觉文化的方式。展览是卢浮宫希腊、伊特鲁里亚与罗马古物部门整修期间的馆际合作项目。",
        "facts": [
          "展期为 2026 年 6 月 11 日至 2027 年 1 月 10 日",
          "展览由 Musée de la Romanité 与 Musée du Louvre 合作举办",
          "策展明确反对近现代收藏传统遗留的纯审美化路径，强调器物的功能、使用和意义",
          "展览以庞贝角斗士头盔和脱离整体装饰的壁画碎片等例子比较‘用途’与‘艺术品’身份"
        ],
        "sourceName": "Musée de la Romanité；Musée du Louvre（当日评论补充：Le Monde）",
        "sourceUrl": "https://museedelaromanite.fr/en/temporary-exhibition",
        "sourceDate": "2026-06-11（展览开幕；页面核验 2026-07-19）",
        "whyItMatters": "博物馆并非只是保存过去，也会通过切割、装框、命名和排序生产一种新的过去。",
        "analysis": "当实用器物只剩下‘杰作’身份，劳动、宗教、阶层和空间关系会被审美遮住。与此前贝叶挂毯的跨国借展不同，这里关注的不是所有权，而是展示技术如何改变物件的本体论身份。",
        "reflection": "可做一组‘展台前／展台后’双联画：左侧还原器物在战斗、宴饮、住宅和祭祀中的关系，右侧标出支架、标签、聚光灯与白墙如何把它转译成艺术。让展陈装置本身成为叙事角色。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "艺术人文 × 女性主义 × 艺术史",
        "image": "/story-images/women-abstract-expressionism.jpg",
        "imageAlt": "多名匿名女性共同在巨幅画布上工作、强调尺度与身体动作的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释女性抽象表现主义者的集体创作史，并非任何艺术家原作复制",
        "title": "Speed Art Museum 用三十多位女性重写抽象表现主义史",
        "summary": "Speed Art Museum 的群展把 Helen Frankenthaler、Joan Mitchell、Lee Krasner 等三十多位艺术家放回美国战后先锋运动中心，并坚持让观众以原作的完整尺度理解其身体性。",
        "happened": "《Abstract Expressionists: The Women》正在 Louisville 的 Speed Art Museum 展出，7 月 19 日继续安排专题导览与现场讨论。展览覆盖二战后至 1970 年代，呈现 Helen Frankenthaler、Joan Mitchell、Vivian Springford、Grace Hartigan、Lee Krasner、Pat Passlof 等三十多位艺术家，是 Kentucky 首个专门讨论抽象表现主义的展览。",
        "facts": [
          "展期为 2026 年 5 月 16 日至 8 月 30 日，7 月 19 日有两场专题导览和一场 Chat Spot",
          "展览汇集超过 30 位女性抽象表现主义者",
          "时间范围从二战后延伸至 1970 年代",
          "参展艺术家包括 Helen Frankenthaler、Joan Mitchell、Vivian Springford、Grace Hartigan 与 Lee Krasner"
        ],
        "sourceName": "Speed Art Museum",
        "sourceUrl": "https://www.speedmuseum.org/exhibitions/abstract-expressionists-the-women/",
        "sourceDate": "2026-01-15（展览公告；活动页面核验 2026-07-19）",
        "whyItMatters": "这不是把几位女性补进既有英雄名单，而是改变运动的基本叙述单位：从 Pollock 或 de Kooning 的个人神话，转向跨画室、画廊、教学与友谊网络的集体形成。",
        "analysis": "与昨日 Gladys Nilsson 的媒介和母职偏见不同，本项追问的是一整场艺术运动为何被压缩成少数男性姓名，以及巨幅原作的尺度如何反驳‘女性创作较小、较私人’的预设。",
        "reflection": "可把传统艺术史时间线改成一张‘同时发生图’：同一年横向排列不同城市、画室、展览与教学关系，再把画布实际尺寸换算成人体比例，显示被叙事删掉的不只是姓名，也是创作的物理强度。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学 × 心理学 × 游戏与临床研究",
        "image": "/story-images/eco-rescue-anxiety-trial.jpg",
        "imageAlt": "青少年在家操作生态修复游戏，注意目标、干扰和情绪路径环绕屏幕的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Eco-Rescue 临床试验设计，并非真实参与者、游戏界面或疗效证明",
        "title": "FIU 用生态修复游戏测试青少年焦虑训练",
        "summary": "FIU 正在测试 Eco-Rescue 能否帮助 11 至 15 岁青少年练习注意力转换。研究尚无疗效结果；它最值得关注的恰恰是如何区分游戏的新鲜感、一般娱乐和针对性训练。",
        "happened": "Florida International University 的 Center for Children and Families 成为美国首个开展 Eco-Rescue 临床试验的站点。玩家扮演修复受损环境的飞行员，同时追踪移动目标、应对突发变化并管理多项任务。研究将参与者随机分入 Eco-Rescue、非注意力训练游戏和不玩游戏三组，六周后比较注意控制、情绪调节与焦虑症状。",
        "facts": [
          "FIU 计划招募 50 名参与者，全部研究站点预计共 150 名",
          "参与者年龄为 11 至 15 岁，并被分入 3 个研究组",
          "试验持续 6 周；Eco-Rescue 组每天约 30 分钟、每周 4 天，总计约 12 小时",
          "项目与 University of Geneva 合作，并有 University of Haifa 和 Yale University 参与；目前仍在招募，尚未报告疗效"
        ],
        "sourceName": "Florida International University · Center for Children and Families",
        "sourceUrl": "https://news.fiu.edu/2026/fiu-researchers-test-video-game-as-anxiety-treatment-for-teens",
        "sourceDate": "2026-07-17",
        "whyItMatters": "数字心理干预最容易出现的叙事错误，是把‘青少年愿意玩’直接等同于‘具有临床效果’。",
        "analysis": "三组设计试图把针对性机制与屏幕时间、期待效应和参与感分开。它也提醒我们，可及性不只意味着把治疗装进手机；家庭设备、持续时间、隐私、退出率和真正需要传统治疗的人如何转介，同样决定技术是否公平。",
        "reflection": "可画一张‘同一名玩家的三条时间线’，分别标出针对性训练、普通游戏与无游戏条件；把研究尚未回答的问题留在终点，而不是先制作成功故事。重点解释为什么对照组比炫目的游戏画面更重要。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学 × 天文学 × 科研制度与基础设施",
        "image": "/story-images/vikram-private-orbit.jpg",
        "imageAlt": "私人小型火箭从公共海岸发射场升空，下方展开科研、监管和供应链结构的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释私人轨道发射背后的公共基础设施，并非 Vikram-1 实拍或精确复原",
        "title": "印度首枚私人轨道火箭升空，但任务依赖公共基础设施",
        "summary": "Skyroot 的 Vikram-1 将载荷送入 450 公里轨道，使印度成为第三个拥有私人轨道发射能力的国家；但发射场、人才、监管和早期技术积累仍来自国家航天体系。",
        "happened": "7 月 18 日，Vikram-1 从 ISRO 的 Satish Dhawan Space Centre 发射，在约 15 分钟后把客户载荷和在轨实验送入 450 公里轨道。此次 Mission Aagaman 主要验证推进、航电、遥测、制导、导航与控制系统；Skyroot 表示仍需更多测试飞行，之后才会进入常规商业任务。",
        "facts": [
          "Vikram-1 于 2026 年 7 月 18 日 06:35 GMT 发射，约 15 分钟后进入 450 公里轨道",
          "火箭高约 22 米，设计近地轨道载荷能力最高 350 千克",
          "运载器采用 3 级固体燃料和带 3D 打印发动机的液体轨道调整模块",
          "印度 2020 年向私人投资开放航天部门，并计划把航天经济从约 80 亿美元提高到 2033 年的 440 亿美元"
        ],
        "sourceName": "Reuters（任务信息由 Skyroot Aerospace 交叉核验）",
        "sourceUrl": "https://www.reuters.com/science/indias-skyroot-launches-vikram-1-first-private-orbital-rocket-mission-2026-07-18/",
        "sourceDate": "2026-07-18",
        "whyItMatters": "‘私人航天’并不意味着国家退场，而是国家角色从唯一运营者转向基础设施提供者、监管者、采购者和人才训练场。",
        "analysis": "两位创始人都曾在 ISRO 工作，火箭也从国家发射中心起飞。与此前 Rubin 天文台的数据公共性不同，这里要追问公共能力如何被转换为商业市场，以及风险和收益由谁承担。",
        "reflection": "可把火箭剖成五层：企业硬件、ISRO 发射场、公共科研人才、2020 年后的监管开放和全球小卫星客户。让‘私人’一词在每一层被重新限定，避免只写成创业英雄史。",
        "evidenceBoundary": "新闻报道或研究新闻稿能支持这里列出的事件、日期与公开材料；本站的比较和反思会单独标记，不能替代原始来源。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "relationship"
      },
      {
        "category": "女性主义 × 健康 × 照护政策",
        "image": "/story-images/postpartum-medicaid-map.jpg",
        "imageAlt": "美国纸质地图环绕母婴形成一座延伸十二个月的照护桥梁的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释产后 Medicaid 覆盖扩展，并非真实患者或精确政策地图",
        "title": "美国多数州把产后 Medicaid 覆盖从 60 天延长到一年",
        "summary": "KFF 7 月 15 日更新显示，49 个州和华盛顿特区已把 Medicaid 产后覆盖延长至 12 个月，只剩一个州没有采取扩展行动。",
        "happened": "美国 2021 年《American Rescue Plan Act》允许各州通过州计划修正，把原本通常只有 60 天的 Medicaid 产后资格延长到 12 个月；该选项 2022 年 4 月 1 日生效，并在 2023 年综合拨款法中永久化。KFF 最新追踪显示，截至 2026 年 7 月 15 日，49 州和 Washington, D.C. 已实施一年覆盖，Arkansas 成为唯一尚未扩展的州。",
        "facts": [
          "截至 2026 年 7 月 15 日，49 个州和 Washington, D.C. 已实施 12 个月产后 Medicaid 扩展，1 个州尚无扩展行动",
          "联邦扩展选项来自 2021 年 American Rescue Plan Act，并于 2022 年 4 月 1 日生效",
          "Consolidated Appropriations Act 2023 把原本限期 5 年的州级选项永久化",
          "Wisconsin 2026 年的扩展使 Arkansas 成为唯一尚未实行一年覆盖的州"
        ],
        "sourceName": "KFF Medicaid Postpartum Coverage Extension Tracker（州级进展补充：Associated Press）",
        "sourceUrl": "https://www.kff.org/medicaid/medicaid-postpartum-coverage-extension-tracker/",
        "sourceDate": "2026-07-15",
        "whyItMatters": "分娩后的身体恢复、抑郁筛查、慢性病管理和避孕需求不会在第 60 天结束。",
        "analysis": "把覆盖延长到一年，是把照护从一次分娩账单重新理解为连续过程。但地图上的‘已实施’仍不能自动保证医生可得、交通、语言服务或实际参保连续性；下一步应从法律通过转向使用质量。",
        "reflection": "可以把产后一年画成十二格照护日历，把 60 天断崖放在第三格之前，再标出心理健康、心血管风险、哺乳支持和慢性病复诊可能出现的月份。最后对比‘法律覆盖’与‘真正看得到医生’两条曲线。",
        "evidenceBoundary": "来源能确认当时公开的政策、资格、资金、行政数据或法律进展；执行结果仍可能随地区、时间、申诉和后续决定变化。",
        "sourceType": "官方数据、政策或制度文件",
        "informationForm": "timeline"
      }
    ],
    "learningGoal": "追踪对象或制度在用途、环境或叙事改变之后，哪些意义被保留、放大或遮蔽。",
    "connection": "五则故事都要求把对象重新放回使用环境、研究设计或公共支持网络，才能避免误读。"
  },
  {
    "date": "2026-07-18",
    "displayDate": "2026.07.18",
    "issueNo": "05",
    "theme": "规则怎样进入生活：文化符号、AI 审查与医学试验",
    "intro": "拼贴、面具、群体规范、AI 言论限制和生育试验展示了规则怎样通过图像、习惯、模型和医学决策进入身体与公共生活。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 女性主义 × 设计与音乐史",
        "image": "/story-images/linder-punk-collage.jpg",
        "imageAlt": "杂志碎片、花朵、家用器具与朋克海报被切开重组的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Linder 的拼贴方法与朋克语境，并非艺术家原作复制",
        "title": "Linder 巡展回到 Blackpool，回顾朋克拼贴怎样重组大众图像",
        "summary": "横跨五十年的巡回回顾展今天抵达 Blackpool：从 1970 年代曼彻斯特朋克场景到新作，Linder 用剪切、错置与表演拆解身体如何被消费图像塑造。",
        "happened": "Hayward Gallery Touring 的《Linder: Danger Came Smiling》于 7 月 18 日在 Blackpool 的 Grundy Art Gallery 开幕，展至 10 月 3 日。展览覆盖 Linder 五十年的蒙太奇、摄影、行为与雕塑实践，从她身处 1970 年代曼彻斯特朋克场景时制作的早期拼贴，一直延伸到首次公开的新作。她常使用医用手术刀切割 glamour photography、食品、时尚与家居图像，把消费文化对身体的编码变成可见的接缝。",
        "facts": [
          "Blackpool 展期为 2026 年 7 月 18 日至 10 月 3 日",
          "回顾展覆盖 Linder 约 50 年创作，从 1970 年代曼彻斯特朋克场景延伸至首次公开的新作",
          "展览媒介包括蒙太奇、摄影、行为艺术与雕塑",
          "巡展由 Hayward Gallery Touring 与 Inverleith House、Glynn Vivian Art Gallery、Grundy Art Gallery 合作"
        ],
        "sourceName": "Hayward Gallery Touring · Southbank Centre",
        "sourceUrl": "https://www.southbankcentre.co.uk/whats-on/linder-danger-came-smiling-on-tour/",
        "sourceDate": "2026-07-18（Blackpool 开幕日期）",
        "whyItMatters": "这不是又一次把女性艺术家写成“被重新发现”的回顾展。",
        "analysis": "Linder 的关键在于：她没有逃离大众图像，而是用大众图像自身的材料制造干扰。纸质杂志正在消失、生成图像正在增加时，“切开”仍提醒我们，图像不是透明事实，而是可以识别来源、暴露权力并重新组合的设计对象。它与此前对深度伪造的技术批判不同：这里关注的是观众如何通过手工接缝恢复对图像的主动阅读。",
        "reflection": "可从一把医用手术刀切入，做一条“拼贴的政治技术史”：将 1970 年代杂志剪贴、朋克唱片封套、数字蒙太奇与生成式图像并列，比较每种媒介如何留下或抹平接缝。不要复制具体作品，而应把“看见切口”作为视觉叙事原则。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "process"
      },
      {
        "category": "艺术人文 × 宗教与文化史 × 人类学",
        "image": "/story-images/mexican-masks-danza.jpg",
        "imageAlt": "原创的魔鬼与老人面具、舞蹈服饰和节庆节奏组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Michoacán 面具与 danza 传统，并非展品复制或现场摄影",
        "title": "Las Cruces 展览展示墨西哥面具如何持续进入当代生活",
        "summary": "Las Cruces Museum of Art 新展以 50 件历史和当代面具、5 套完整舞蹈服饰说明：Michoacán 的 danza 传统一直通过新材料、幽默与讽刺回应现实。",
        "happened": "《Dancing with Life: Mexican Masks》于 7 月 17 日在新墨西哥州 Las Cruces Museum of Art 开幕，展至 10 月 17 日。展览从 Northwest Museum of Arts and Culture 的收藏中选出 Michoacán 的历史与当代面具及完整 danza 服饰：形象既有 diablos、圣徒与慈祥老人，也包括媒体名人、政治人物、罪人和“假偶像”。策展人 Pavel Shlossberg 曾在 Tócuaro 与面具艺术家共同生活和学习，并以此反思博物馆如何描述墨西哥原住民面具实践。",
        "facts": [
          "展期为 2026 年 7 月 17 日至 10 月 17 日，8 月 7 日举行开幕招待会",
          "展览包含 50 件历史及当代面具和 5 套完整 danza 服饰",
          "展品来自 Northwest Museum of Arts and Culture，展览由 International Arts & Artists 组织巡展",
          "面具形象涵盖魔鬼、圣徒、老人、媒体与政治名人，并通过幽默和讽刺回应日常社会处境"
        ],
        "sourceName": "City of Las Cruces · Museum of Art",
        "sourceUrl": "https://lascruces.gov/dancing-with-life-mexican-masks-opens-at-the-museum-of-art/",
        "sourceDate": "2026-07-06（新闻稿；展览 2026-07-17 开幕）",
        "whyItMatters": "民俗展览容易把传统放进“即将消失”的玻璃柜，但这些面具恰恰证明传统的生命来自变化。",
        "analysis": "宗教节庆、政治讽刺、流行文化与材料替换并非污染了某个纯粹原型，而是 danza 持续工作的方式。真正需要追问的是：博物馆如何在保存物件的同时，承认制作它们的社群仍在改变其意义。",
        "reflection": "可制作一张“面具的社会角色表”，不按年代而按功能排列：敬畏、嘲讽、纪念、反转权威与制造共同体。再用同一角色在不同时代换上不同材料和面孔，展示传统不是固定造型，而是一套继续回应现实的语法。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学 × 语言学 × 社会心理学",
        "image": "/story-images/social-norm-threshold.jpg",
        "imageAlt": "分散符号经过社会网络传播，在跨过阈值后形成共享模式的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释社会规范的阈值模型，并非实验数据图",
        "title": "研究发现：社会规范常在试探后跨过临界点",
        "summary": "PNAS 研究把儿童学习语法的 Tolerance Principle 用于成人协调实验：人们既不只是模仿，也不持续计算最优解，而是在证据越过阈值后稳定选择。",
        "happened": "CUNY Graduate Center、University of Pennsylvania 与 Stanford 的研究者重新分析社会网络中的“命名游戏”，并加入预注册的双人实验：参与者要为陌生面孔独立选择名称，匹配成功即可获得小额奖励。结果显示，参与者早期会概率性尝试多个选项；当累积经验达到 Tolerance Principle 所描述的阈值，选择会从探索突然转为稳定。该模型原本用于解释儿童如何从大量规则形式和少量例外中学会语法。",
        "facts": [
          "论文 2026 年 4 月 22 日发表于 PNAS，DOI 为 10.1073/pnas.2508061123",
          "研究连接 CUNY Graduate Center、University of Pennsylvania 与 Stanford University 三所机构",
          "实验要求参与者在社会网络中独立为陌生面孔命名，匹配可获得小额奖励",
          "Tolerance Principle 模型优于单纯模仿、持续优化与包括 Bayesian inference 在内的比较模型"
        ],
        "sourceName": "PNAS；CUNY Graduate Center",
        "sourceUrl": "https://www.pnas.org/doi/10.1073/pnas.2508061123",
        "sourceDate": "2026-04-22（论文；CUNY 解读 2026-04-28）",
        "whyItMatters": "这给“社会规范如何形成”提供了比从众或理性优化更具体的机制：在阈值之前，异议与新选项仍能进入；越过阈值后，零星反例可能只被当作例外。",
        "analysis": "它有助于解释工作习惯、组织文化和公共行为为何有时长期不动、又在临界点后迅速翻转。但实验简化了身份、地位、惩罚与权力，不能把一个参数直接当成现实社会的万能定律。",
        "reflection": "可以用“从 walked 到办公室潜规则”做双线叙事：一边展示儿童如何接受 -ed 规则并容忍 went，另一边展示群体如何从多个名字收敛到一个约定。最后加入权力变量，追问谁有资格提供足够多的‘例子’来推动别人越过阈值。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "process"
      },
      {
        "category": "社会科学 × 传播学 × 科技与社会",
        "image": "/story-images/ai-speech-borders.jpg",
        "imageAlt": "同一政治提问穿过不同边界后，被部分人工智能对话框阻挡的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释模型拒答与跨境言论环境，并非真实产品界面或测试截图",
        "title": "Oversight Board 发现 AI 模型可能把一国禁忌带给别国用户",
        "summary": "Oversight Board 测试 10 个商业大模型发现：生成政治批评材料时，涉及限制性言论环境的拒答率为 34%，宽松环境为 14%。",
        "happened": "Oversight Board 7 月 16 日发布研究，通过位于澳大利亚的 IP 地址、主要在美国的商业接口，测试 10 个商业大模型对 10 个司法辖区政治批评请求的回应。模型面对 Cambodia、China、Saudi Arabia、Thailand、Turkey 等限制性环境时，生成批评传单或诗歌的平均拒答率为 34%；面对 Chile、Japan、Taiwan、UK、US 等较宽松环境时为 14%。有些拒答援引当地法律、安全或并不存在的一般政策。",
        "facts": [
          "研究测试 10 个商业大模型和 10 个司法辖区，查询来自澳大利亚 IP，接口基础设施主要位于美国",
          "政治批评材料的平均拒答率：限制性环境 34%，宽松环境 14%",
          "意见类请求在两组环境中的拒答率均为 41%，涉及暴力的请求则分别为 94% 与 92%",
          "部分模型差异很小，但 Claude Sonnet 4 在宽松环境拒答 16%、限制性环境拒答 59%"
        ],
        "sourceName": "Oversight Board",
        "sourceUrl": "https://www.oversightboard.com/news/are-llms-stifling-political-speech-an-assessment-of-how-ai-models-protect-free-expression/",
        "sourceDate": "2026-07-16",
        "whyItMatters": "模型不必受到某国政府的实时指令，也可能从训练材料、产品政策和风险规避中学习该国的禁忌，再把它输出给身处另一地的用户。",
        "analysis": "这使内容治理从平台删帖提前到生成阶段，而且用户常看不到拒答规则来自哪里。与历史基线中的算法性厌女和深度伪造不同，本项关注的是政治表达在司法辖区之间的非透明迁移，以及多语言、多地区审计为何必须成为模型评估的一部分。",
        "reflection": "可用“同一个请求旅行十次”的形式，把用户位置、接口基础设施、谈论对象所在国和模型拒答理由分成四层。不要只排行哪个模型更自由，而要展示法律、训练环境与产品政策如何在一次看似私人的对话里叠加。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "官方数据、政策或制度文件",
        "informationForm": "relationship"
      },
      {
        "category": "女性主义 × 健康 × 生育与照护",
        "image": "/story-images/rituximab-fertility-pilot.jpg",
        "imageAlt": "免疫细胞、卵巢滤泡与谨慎延伸的临床研究路径组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释一项早期生育研究，并非患者、药品包装或治疗现场影像",
        "title": "一项 10 人试验报告 3 个婴儿出生，但证据仍非常初步",
        "summary": "针对自身免疫性早发性卵巢功能不全的小型先导研究中，rituximab 治疗后 10 人有 6 人重新形成可取卵滤泡，3 人最终分娩；证据仍远不足以成为常规疗法。",
        "happened": "NEJM Evidence 报道的一项先导研究招募 10 名自身免疫性早发性卵巢功能不全患者。她们在 rituximab 治疗前接受卵巢刺激均无反应；治疗四至六个月后，6 人形成可取卵滤泡，5 人获得可冷冻或受精的成熟卵子。3 人随后接受胚胎移植，并均分娩健康婴儿。Rituximab 1997 年首先获批治疗血液癌症，也用于部分自身免疫疾病。",
        "facts": [
          "研究样本为 10 名自身免疫性早发性卵巢功能不全患者；该病指卵巢在 40 岁前停止正常功能",
          "治疗前 10 人对卵巢刺激均无反应；治疗后 6 人形成滤泡，5 人获得可冷冻或受精的成熟卵子",
          "3 人接受胚胎移植并均分娩健康婴儿；移植为安全起见安排在治疗至少一年后",
          "研究报告 1 起严重不良事件，研究者认为与激素刺激而非免疫治疗有关；更大规模试验正在进行"
        ],
        "sourceName": "NEJM Evidence（Reuters Health Rounds 核验）",
        "sourceUrl": "https://www.reuters.com/business/healthcare-pharmaceuticals/old-cancer-drug-may-help-restore-fertility-certain-women-2026-07-01/",
        "sourceDate": "2026-07-01",
        "whyItMatters": "生育研究很容易把少数成功病例写成“恢复生育力”的奇迹，但这里最重要的信息恰恰是分母：样本只有 10 人、对象限定为自身免疫机制、需要激素刺激与辅助生殖，且尚需更大试验确认安全性。",
        "analysis": "它同时提示，女性健康并非总是需要从零发明药物；重新理解现有免疫疗法也可能打开路径，但希望必须与风险、费用、适用人群和长期随访一起叙述。",
        "reflection": "可用一张“从 10 到 6、5、3”的研究漏斗讲完整证据链，并在每一步标出条件：免疫分型、药物治疗、卵巢刺激、取卵、胚胎移植和一年等待期。这样既不抹杀参与者获得的真实结果，也不会把先导试验包装成普遍承诺。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "evidence"
      }
    ],
    "learningGoal": "识别规则不只存在于法律文本，也存在于文化形式、群体预期、算法和临床判断。",
    "connection": "五则故事都在寻找规则真正开始影响行动的临界点，并检查谁承担后果。"
  },
  {
    "date": "2026-07-17",
    "displayDate": "2026.07.17",
    "issueNo": "04",
    "theme": "看见世界需要基础设施：银幕、天文台、大学与选票",
    "intro": "IMAX 银幕、艺术回顾展、Rubin 天文台、大学岗位和生育权公投提醒我们：能否看见和讨论一个问题，取决于物质与制度基础设施。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 电影与文学",
        "image": "/story-images/odyssey-imax-infrastructure.jpg",
        "imageAlt": "古代航船沿胶片驶向巨幕，少量影院如灯塔分布在地图上的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释史诗改编与放映基础设施，并非电影剧照或新闻现场影像",
        "title": "《奥德赛》采用 IMAX 胶片，但只有少数影院能完整放映",
        "summary": "诺兰把荷马史诗拍成首部全片使用 IMAX 摄影机的叙事长片；但其首选的 70 毫米版本在美国只进入 25 家影院，技术雄心也制造了新的观看地理。",
        "happened": "Christopher Nolan 执导、Matt Damon 饰演奥德修斯的《The Odyssey》于 7 月 17 日上映。影片被 IMAX 称为首部全片使用 IMAX 摄影机拍摄的叙事长片，Nolan 首选 70 毫米 IMAX 放映；Axios 核验，美国目前只有 25 家运营中的影院具备这一放映条件。其他观众仍可在数字 IMAX、Dolby Cinema、普通 70 毫米、35 毫米及院线自有巨幕观看，但画幅、胶片质感和银幕比例并不相同。",
        "facts": [
          "影片于 2026 年 7 月 17 日公映，由 Universal Pictures 发行，Matt Damon 饰演奥德修斯",
          "IMAX 称其为首部全片使用 IMAX 摄影机拍摄的叙事长片",
          "美国仅有 25 家运营中的影院可放映 70 毫米 IMAX 版本，其中 8 家位于加利福尼亚州",
          "影院可提供数字 IMAX、Dolby Cinema、普通 70 毫米、35 毫米与院线自有巨幕等替代格式"
        ],
        "sourceName": "Axios（技术信息由 IMAX 交叉核验）",
        "sourceUrl": "https://www.axios.com/2026/07/17/odyssey-imax-christopher-nolan",
        "sourceDate": "2026-07-17",
        "whyItMatters": "古代口传史诗被包装成全球同步的商业事件，看似把经典交给大众；真正决定观众看到哪个版本的，却是几十年前形成的放映网络、设备维护和地域分布。",
        "analysis": "影片的航海叙事于是多了一层现实反讽：为了抵达导演所谓的“完整版本”，观众也可能需要跨城旅行。与前期贝叶挂毯的文物运输不同，这里的问题不是谁保管原物，而是谁拥有解释影像的硬件。",
        "reflection": "可以制作一张“同一部电影的多种身体”：从 65 毫米摄影底片、70 毫米放映拷贝、1.43:1 银幕到数字巨幕，逐层说明每次转换保留和丢失了什么；再把 25 家美国影院画成一张稀疏航海图，讨论文化平权是否也包括放映基础设施。",
        "evidenceBoundary": "新闻报道或研究新闻稿能支持这里列出的事件、日期与公开材料；本站的比较和反思会单独标记，不能替代原始来源。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "comparison"
      },
      {
        "category": "艺术人文 × 女性主义 × 艺术史",
        "image": "/story-images/gladys-nilsson-retrospective.jpg",
        "imageAlt": "水彩纸、刺绣绷架与跳舞的抽象女性形象从工作室延伸到美术馆的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释水彩、母职与媒介等级，并非 Gladys Nilsson 原作复制",
        "title": "Gladys Nilsson 首次回顾展挑战“水彩是女性媒介”的偏见",
        "summary": "86 岁前夕，Nilsson 迎来首场生涯回顾展；约 115 件作品把母职中的材料选择、芝加哥地域标签与水彩的媒介等级放到同一条六十年时间线上。",
        "happened": "Crocker Art Museum 将于 7 月 19 日开幕《Gleefully Askew: A Gladys Nilsson Retrospective》，展至 11 月 29 日。这是 Nilsson 首场回顾展，汇集约 115 件水彩、绘画、素描与版画，覆盖六十余年。她 1962 年毕业于芝加哥艺术学院，后来成为 Hairy Who 成员；怀孕期间为避免松节油毒性，她把水彩作为主要媒介，却被批评界进一步归类为团体中最“女性化”的成员。",
        "facts": [
          "展期为 2026 年 7 月 19 日至 11 月 29 日，之后将于 2027 年巡展至 Madison Museum of Contemporary Art",
          "展览汇集约 115 件作品，覆盖 Nilsson 六十余年的创作，是她首场生涯回顾展",
          "Nilsson 1940 年出生、1962 年毕业于 School of the Art Institute of Chicago，展览前夕年满 86 岁",
          "Crocker 收藏她 30 件作品，并在本展首次展出回应 1872 年馆藏画作的新作《Loded》(2025)"
        ],
        "sourceName": "Crocker Art Museum",
        "sourceUrl": "https://www.crockerart.org/press/gleefully-askew-a-gladys-nilsson-retrospective",
        "sourceDate": "2026-02-18（新闻稿；展览 2026-07-19 开幕）",
        "whyItMatters": "Nilsson 的故事不是泛泛的“被遗忘女艺术家再发现”。",
        "analysis": "它精确揭示艺术等级如何由材料、照护条件和地理中心共同生产：水彩因便于在育儿环境中使用而成为策略，却又被当成不够宏大；在 Sacramento 的长期工作，则常被“芝加哥艺术家”标签遮蔽。回顾展把这些限制重新读作形式实验的发动机，也与此前 Mendieta 的机构回顾、Yoko Ono 的行为艺术重演形成不同判断。",
        "reflection": "可从一瓶被避开的松节油开始，追踪怀孕、工作室安全、水彩、刺绣绷架和纸上大尺幅如何组成一套“照护条件下的形式发明”。再比较艺术史为何更容易记住团体名称，而忽略成员在迁居后形成的独立路径。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "社会科学 × 天文学 × 科研基础设施",
        "image": "/story-images/rubin-lsst-decade.jpg",
        "imageAlt": "智利山顶望远镜连续扫描夜空，图像数据流向分布式计算节点的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释时间域巡天与数据基础设施，并非天文实拍影像",
        "title": "Rubin 天文台开始为期十年的动态宇宙巡天",
        "summary": "位于智利的 Rubin 天文台启动十年 LSST 巡天：每三至四夜覆盖可见南天，持续生成变化警报；真正的望远镜还包括跨机构计算与数据分发系统。",
        "happened": "Reuters 7 月 15 日报道，NSF–DOE Vera C. Rubin Observatory 开始执行为期十年的 Legacy Survey of Space and Time。位于 Cerro Pachón 的 8.4 米望远镜搭载 32 亿像素相机，计划每晚拍摄约 1,000 幅图像，并在三至四夜内覆盖整个可见南天。它由 NSF NOIRLab 与美国能源部 SLAC 国家加速器实验室联合运营，目标不是单次拍出最深图像，而是把超新星、近地小行星、变星和遥远星系的变化连接成时间序列。",
        "facts": [
          "主镜口径 8.4 米，LSST Camera 达 32 亿像素，重量约 2,800 千克",
          "计划每晚获取约 1,000 幅南天图像，每三至四夜覆盖一次整个可见南天，持续 10 年",
          "首批约 10 小时测试观测已发现 2,104 颗此前未知小行星，其中 7 颗为无威胁的近地小行星",
          "巡天预计记录约 200 亿个星系；首批展示的 1,000 万个星系只约占 0.05%"
        ],
        "sourceName": "Reuters；NSF–DOE Vera C. Rubin Observatory",
        "sourceUrl": "https://www.reuters.com/science/chiles-rubin-observatory-begins-decade-long-mission-film-universe-2026-07-15/",
        "sourceDate": "2026-07-15",
        "whyItMatters": "这与前期 β Pictoris d 的“多仪器重查档案”不同：Rubin 把建立档案本身变成十年公共任务。",
        "analysis": "发现速度将取决于相机之外的实时管线、警报代理、开放规则与后续望远镜能否承接海量瞬变。天文学因此也是制度研究：谁资助长期观测，谁能及时获得数据，哪些地区承担设备与能源成本，都会塑造最终被命名的宇宙。",
        "reflection": "可以把 Rubin 画成三层机器：山顶的光学设备、地下与跨洋的数据管线、全球研究者和后续望远镜组成的响应网络。用“一颗突然变亮的星在 60 秒内如何变成公共警报”为叙事，解释现代发现为什么常由基础设施集体署名。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "process"
      },
      {
        "category": "社会科学 × 教育与知识制度",
        "image": "/story-images/uk-shape-cold-spots.jpg",
        "imageAlt": "英国地图由校园档案拼成，空椅与断裂的学术阶梯向地域边缘扩散的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释学术岗位流失与地域冷点，并非校园新闻现场影像",
        "title": "英国人文学岗位减少近四千个，部分地区出现知识空缺",
        "summary": "British Academy 的新地图显示，早期 SHAPE 学者一年减少 6%，岗位与课程也向少数机构集中；大学削减预算正在改变谁能在家乡附近学习语言、经典与社会工作。",
        "happened": "British Academy 7 月 15 日发布 Mapping SHAPE Academic Staff 数据与地域分析，追踪 2012/13 至 2024/25 的英国高校人员变化。学院发现，2024/25 年早期职业阶段的 SHAPE 学者同比减少 6%，而高级和教授层级并未同步下降；英格兰东北部与东米德兰兹的早期人员一年降幅接近 20%。Guardian 对官方数据的补充分析显示，截至 2024 年 12 月的一年内，社会科学、人文与艺术合计减少近 4,000 个岗位。",
        "facts": [
          "2024/25 年早期 SHAPE 学术人员同比下降 6%，从 52,795 个全职等效岗位降至 49,410 个",
          "英格兰东北部与东米德兰兹的早期学术人员一年降幅均接近 20%",
          "截至 2024 年 12 月的一年内，社会科学减少约 3,000 岗、人文学科 820 岗、艺术 240 岗",
          "降幅最大的学科包括社会工作 -9%、英语与古典学各 -8%、人类学 -7%、语言学 -6%"
        ],
        "sourceName": "The British Academy（岗位总量补充：The Guardian）",
        "sourceUrl": "https://www.thebritishacademy.ac.uk/news/loss-of-academic-staff-threatens-strategically-vital-skills-for-uk/",
        "sourceDate": "2026-07-15",
        "whyItMatters": "裁员不是把每门课平均缩小一点，而会在地图上留下不可逆的空白。",
        "analysis": "学生因生活成本更倾向就近入学时，某地没有神学、古典学或低门槛语言学位，就会把地域差异转化为阶层差异；早期岗位先消失，还会切断下一代教师和研究者的入口。这里的核心不是为所有旧系科免责，而是把“市场需求”拆成谁有能力迁居、哪些技能被工业政策承认、以及知识基础设施需要多长周期才能重建。",
        "reflection": "可制作一张“知识的铁路停运图”：把课程、早期岗位和地区入口视为站点，标出人员下降与学科集中如何让一些路线只剩高选择性大学可达。再追问：当一个地区最后一门语言或古典学课程关闭，损失能否用全国总招生数字衡量？",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "comparison"
      },
      {
        "category": "女性主义 × 健康与政治制度",
        "image": "/story-images/idaho-reproductive-ballot.jpg",
        "imageAlt": "匿名选民把选票投入投票箱，避孕、孕产照护、生育治疗与隐私路径环绕其外的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释生育自由公投，并非投票现场或真实人物影像",
        "title": "爱达荷生育权公投取得投票资格",
        "summary": "州务卿确认《Reproductive Freedom and Privacy Act》进入 11 月 3 日选票；它把堕胎、避孕、生育治疗与隐私放入同一项成文法选择。",
        "happened": "爱达荷州务卿确认《Reproductive Freedom and Privacy Act》达到法定要求，将出现在 2026 年 11 月 3 日州级大选选票上。倡议不是修改州宪法，而是建立一项州法律：在胎儿具有存活能力前保障堕胎权，存活能力后在保护孕妇健康时允许医疗干预，并覆盖避孕、生育治疗、隐私与医疗提供者责任保护。发起方提交超过 100,000 个签名，高于所需的 70,725 个。",
        "facts": [
          "投票日为 2026 年 11 月 3 日；州务卿页面已将该倡议标记为 Qualified",
          "发起方收集超过 100,000 个签名，法定总量门槛为 70,725 个",
          "爱达荷要求全州注册选民总数 6% 的有效签名，并在至少 18 个立法选区分别达到 6%",
          "官方修订后的短标题涵盖胎儿存活能力前的堕胎权、存活能力后保护健康、隐私与医疗提供者责任保护"
        ],
        "sourceName": "Idaho Secretary of State（背景补充：The Guardian/AP）",
        "sourceUrl": "https://voteidaho.gov/initiatives-amendments/",
        "sourceDate": "2026-07-13（资格确认；页面核验 2026-07-17）",
        "whyItMatters": "这一倡议把通常被切割讨论的服务重新放回“生育自主”连续体：避孕、IVF、流产与复杂妊娠照护并不是彼此孤立的文化议题，而共享隐私、临床判断和提供者法律风险。",
        "analysis": "它也显示，在严格禁令州，直接民主既可能成为立法僵局的出口，也会把高度专业的医疗边界压缩进一张赞成/反对选票。与前期政党性别配额不同，这里争夺的是身体与临床决定的法律归属。",
        "reflection": "可以把公投文本拆成一棵“医疗决定树”：不同孕期、健康风险、避孕与生育治疗分别进入哪条法律路径；旁边再画出签名门槛、18 个立法选区分布要求和最终投票，说明身体自主如何被转换成程序性数字。",
        "evidenceBoundary": "来源能确认当时公开的政策、资格、资金、行政数据或法律进展；执行结果仍可能随地区、时间、申诉和后续决定变化。",
        "sourceType": "官方数据、政策或制度文件",
        "informationForm": "timeline"
      }
    ],
    "learningGoal": "理解图像、研究、知识传承和政治选择都需要具体的设备、机构、人员和程序。",
    "connection": "五则故事共同说明，可见性不是只有内容，还取决于谁建造并维护让内容出现的渠道。"
  },
  {
    "date": "2026-07-16",
    "displayDate": "2026.07.16",
    "issueNo": "03",
    "theme": "图像背后的制度：艺术、科学、气候与政治如何制造现实",
    "intro": "企业壁画、建筑插图、暗行星、洪水归因和性别配额说明，图像与数据总是在机构、技术和政治条件中被生产和理解。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 女性主义 × 劳工史",
        "image": "/story-images/munch-freia-frieze.jpg",
        "imageAlt": "十二幅田园壁画、女性巧克力工人与可可运输路线组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释壁画、劳动与可可供应链，并非作品复制或新闻现场影像",
        "title": "蒙克为巧克力工厂创作的壁画掩盖了怎样的劳动现实",
        "summary": "MUNCH 博物馆把 Freia 工厂女工食堂里的 12 幅壁画搬进展厅；田园场景背后，是工资差距、女性劳动与殖民可可供应链。",
        "happened": "奥斯陆 MUNCH 博物馆正在展出 Edvard Munch 受 Freia 巧克力厂委托创作的 12 幅壁画。作品 1922 年获委托、1923 年进入女工食堂，描绘采果、浇花、海滩与休憩；此次因原食堂翻修而外借至 2026 年 10 月 11 日。这是壁画首次在挪威的工厂之外公开展出，也是继 1968 年斯德哥尔摩展出后，整组作品第二次离开工厂。展览同时追溯 Freia 从南美、加勒比到英属殖民地黄金海岸（今加纳）的可可来源。",
        "facts": [
          "整组 Freia 壁画共 12 幅，1922 年获委托、1923 年安装在奥斯陆工厂女工食堂",
          "Johan Throne Holst 向蒙克支付 80,000 挪威克朗；报道估算相当于今日约 250 万挪威克朗或 19.2 万英镑",
          "整组作品此前只在 1968 年离厂赴斯德哥尔摩展出过一次；本次展至 2026 年 10 月 11 日",
          "Freia 的可可来源先包括南美和加勒比，后来包括当时仍为英国殖民地的加纳"
        ],
        "sourceName": "The Guardian（展览与历史资料来自 MUNCH 策展团队）",
        "sourceUrl": "https://www.theguardian.com/culture/2026/jul/15/edvard-munch-and-the-chocolate-factory-the-bitter-truth-behind-the-freia-frieze",
        "sourceDate": "2026-07-15",
        "whyItMatters": "壁画被称为面向工人的公共艺术，但它没有描绘女工的生产、收入或居住条件，而是替她们安排了一套“应当理解”的田园生活。",
        "analysis": "Freia 的福利制度在当时有进步面向，作品价格与女工微薄收入之间的落差却已在 1923 年遭劳工报纸批评。把美术史与供应链、性别分工并置后，公共艺术不再只是善意装饰，而成为谁有权替劳动者想象幸福的问题。",
        "reflection": "可以制作一张“壁画之外的巧克力”双层地图：上层逐幅分析 12 个田园场景，下层追踪食堂里的女工、80,000 挪威克朗的委托费与跨大西洋可可路线。重点不是给蒙克补一项道德判决，而是比较画面里被安排的闲暇和生产链里真实存在的劳动。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "comparison"
      },
      {
        "category": "艺术人文 × 设计与建筑",
        "image": "/story-images/vriesendorp-mind-games.jpg",
        "imageAlt": "拟人化纽约摩天楼、心理棋盘与废旧包装变成的生物组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释建筑拟人、游戏与材料再造，并非原作复制",
        "title": "Madelon Vriesendorp 用拟人建筑图像影响现代建筑理论",
        "summary": "Sir John Soane’s Museum 为 2025 年 Soane Medal 得主举办大型回顾展：从《Delirious New York》封面到废塑料雕塑，建筑思想被转换成角色、笑话和游戏。",
        "happened": "《Madelon Vriesendorp: Mind Games》于 7 月 15 日在伦敦 Sir John Soane’s Museum 开幕，展至 9 月 20 日。展览覆盖蚀刻、绘画、书封、首饰、纸上新作与雕塑，并设置可被观众重新排列的放大版 Mind Game。Vriesendorp 1975 年创作《Flagrant Délit》，让 Empire State 与 Chrysler 两座摩天楼成为被撞见的恋人；作品后来成为 1978 年《Delirious New York》的封面。她也是 1975 年 OMA 的四位共同创办人之一。",
        "facts": [
          "展期为 2026 年 7 月 15 日至 9 月 20 日，地点是 Sir John Soane’s Museum",
          "《Flagrant Délit》创作于 1975 年，并成为 1978 年《Delirious New York》的封面图像",
          "Vriesendorp 于 1975 年与 Rem Koolhaas、Elia Zenghelis、Zoe Zenghelis 共同创办 OMA",
          "展览涵盖 50 余件创作或收藏物，包括可供观众重排的 Mind Game 与用塑料瓶、蛋盒制作的新雕塑"
        ],
        "sourceName": "Sir John Soane’s Museum（评论补充：The Guardian）",
        "sourceUrl": "https://www.soane.org/exhibitions/madelon-vriesendorp-mind-games",
        "sourceDate": "2026-07-15（开幕日期）",
        "whyItMatters": "建筑理论常以图纸、术语和大师姓名出现，Vriesendorp 的贡献在于把抽象观点变成可记忆的角色关系：城市不再是理性机器，而是欲望、拥挤、幽默和失控的舞台。",
        "analysis": "新作又把牛奶瓶、蛋盒等包装材料转化为天鹅、怪兽与独裁者，显示她的设计方法不是固定的后现代风格，而是一种不断重命名日常物件的观看训练。",
        "reflection": "可做一期“谁替建筑理论画表情包”：以《Flagrant Délit》、OMA 早期未建项目和可互动 Mind Game 为三站，解释图像如何让艰深理论进入公共记忆。结尾再把 1970 年代的摩天楼欲望，与今天用废包装造生物的材料政治对照。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "relationship"
      },
      {
        "category": "社会科学 × 天文学",
        "image": "/story-images/beta-pictoris-d.jpg",
        "imageAlt": "韦布望远镜、智利地面望远镜、年轻恒星碎屑盘与三颗行星组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释多台仪器与档案数据的联合发现，并非天体实拍影像",
        "title": "两套观测设施共同确认一颗隐藏十一年的暗行星",
        "summary": "两个彼此独立的团队用 JWST 与 VLT 发现同一颗冷气态巨行星；真正的突破不只是新天体，而是光谱匹配、长期档案与地空协同。",
        "happened": "两个研究团队分别报告 β Pictoris 系统的第三颗确认行星 β Pic d。美国团队在 JWST/NIRSpec 积分视场光谱中偶然识别它，并以第二轮 NIRSpec 与 MIRI 数据确认；欧洲团队则用智利 VLT/ERIS 拍到它，再回查 JWST/NIRCam 与 VLT/SPHERE 的多时期档案，建立 11 年轨迹。两组结果于 7 月 15 日在《Astrophysical Journal Letters》公开；预印本已于 6 月 22 日发布。",
        "facts": [
          "β Pictoris 距地球约 63 光年，年龄约 2,000 万年；β Pic d 的公转周期约 91 年",
          "JWST 光谱显示甲烷、一氧化碳与水吸收特征；团队估计质量约为木星的 2—4 倍",
          "另一团队用 VLT/ERIS、JWST/NIRCam 与 VLT/SPHERE 拼出 11 年基线，估计质量为木星的 2.4±0.6 倍、有效温度约 600 K",
          "它约比系统内另外两颗已知行星暗 100 倍；β Pictoris 因此成为第二个拥有三颗以上直接成像行星的系统"
        ],
        "sourceName": "Astrophysical Journal Letters 预印本 · Gibbs et al.；Bonse et al.（AP 发布核验）",
        "sourceUrl": "https://arxiv.org/abs/2606.23789",
        "sourceDate": "2026-07-15（期刊发布；预印本 2026-06-22）",
        "whyItMatters": "它与前一期“星际糖”不是同一问题：后者讨论分子在恒星形成前的化学，这里讨论的是一颗行星如何被测量系统从强烈星光和碎屑盘中分离出来。",
        "analysis": "β Pic d 约比系统内另外两颗行星暗 100 倍，说明发现能力不仅来自更大的镜面，也来自光谱模板、跨仪器校准、长期保存的数据和愿意重查旧档案的研究文化。",
        "reflection": "可以把它做成一场“同一颗行星的两份侦探报告”：左线追踪 JWST 如何用甲烷、一氧化碳和水的光谱指纹找到目标，右线追踪 VLT 如何从 11 年档案拼出轨道。用两组独立证据相遇的时刻，解释可重复发现比单张震撼图像更重要。",
        "evidenceBoundary": "来源提供论文或预印本材料；它能说明研究者的方法与当前结果，但不代表结论已经经过全部后续复核，也不能自动推导出生命、治疗或政策结论。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "timeline"
      },
      {
        "category": "社会科学 × 地理学",
        "image": "/story-images/west-africa-flood-attribution.jpg",
        "imageAlt": "几内亚湾沿岸地图、降雨模型网格、雨量计与城市排水系统组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释气候归因与城市排水，并非洪灾现场影像",
        "title": "归因研究解释气候变暖如何加剧西非洪水",
        "summary": "World Weather Attribution 分析称，人为变暖让 6 月几内亚湾沿岸极端降雨约增至五倍可能；观测、模型和城市基础设施却给出不同尺度的答案。",
        "happened": "6 月 20 日起的 72 小时内，科特迪瓦、加纳、多哥与尼日利亚沿海人口稠密地区遭遇强降雨，部分城市不到一天超过 140 毫米。World Weather Attribution 比较历史观测与气候模型，集中分析最极端的三天：观测资料显示三日强降雨强度较记录初期增加约 23%，模型给出的变暖增幅约 4%；团队综合判断，此类事件在今日气候中约为工业化前的五倍可能。",
        "facts": [
          "研究窗口为 2026 年 6 月 20 日起 72 小时，覆盖科特迪瓦、加纳、多哥和尼日利亚沿海",
          "部分城市不到 24 小时降雨超过 140 毫米，城市排水系统被迅速压垮",
          "观测资料显示极端三日降雨强度增加约 23%；气候模型估计人为变暖贡献约 4% 强度增幅",
          "在全球平均升温约 1.4°C 的今日，此类规模降雨约五倍更可能，预计每 2—4 年可再现一次"
        ],
        "sourceName": "World Weather Attribution（The Guardian 报道与数据核验）",
        "sourceUrl": "https://www.theguardian.com/world/2026/jul/16/how-global-heating-supercharged-floods-west-africa-displacing-thousands",
        "sourceDate": "2026-07-16",
        "whyItMatters": "“五倍可能”并不意味着气候模型能精确复制每个被淹街区。",
        "analysis": "研究者明确指出，全球南方的热带降水仍是模型薄弱区；与此同时，排水能力、湿地损失、非正规住区和预警覆盖决定同一场雨造成多大伤亡。归因科学的价值，是把“百年一遇”从宿命语言改写为可以讨论排放责任、城市投资和国际气候正义的制度问题。",
        "reflection": "可制作一张“同一场雨的三种地图”：天气图回答雨落在哪里，排水图回答水为何留在城市，责任图回答谁有资源适应。把观测的 23%、模型的 4% 和综合概率约五倍并列，解释不同数字并非互相否定，而是来自不同证据路径。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "process"
      },
      {
        "category": "女性主义 × 政治社会学",
        "image": "/story-images/australia-gender-quota.jpg",
        "imageAlt": "候选人队伍穿过狭窄入口进入澳大利亚议会，并与性别平衡刻度并置的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释候选人遴选与可胜选席位，并非真实议员或议会现场影像",
        "title": "澳大利亚自由党重新争论候选人性别配额",
        "summary": "一份党内讨论稿把女性配额、开放初选和可胜选席位干预摆上桌面；领袖反对配额，女性高层则要求不要在讨论开始时排除选项。",
        "happened": "澳大利亚自由党委员会向支持者散发改革讨论稿，提出更新老龄化党员基础、改善与女性、多元文化社群和年轻人的联系，并讨论在可胜选席位采取性别配额、开放初选、女性候选人激励或预选最低比例。党魁 Angus Taylor 7 月 16 日重申从未支持配额；副党魁 Jane Hume 表示草案仍在讨论，所有选项都会被考虑；影子内阁成员 Anne Ruston 则称，以往除配额外的方法未能改变众议院中的女性人数。",
        "facts": [
          "党内讨论稿称女性约占自由党党员 21%、党内联邦议员约 33%",
          "2025 年大选后，女性占澳大利亚联邦议会席位约 49.6%，并占参议院约 56.6%",
          "自由党在 2025 年众议院赢得 28 席，其中女性 6 人，占约 21.4%",
          "草案列出的工具包括可胜选席位配额、开放初选、女性候选人激励和预选最低比例；党内领导层意见公开分裂"
        ],
        "sourceName": "The Guardian Australia（议会构成数据由 Australian Parliament 公开名单交叉核验）",
        "sourceUrl": "https://www.theguardian.com/australia-news/2026/jul/16/liberal-party-gender-quotas-angus-taylor-response",
        "sourceDate": "2026-07-16",
        "whyItMatters": "争论的关键不是“女性是否够优秀”，而是谁定义进入候选池、获得资源和分配可胜选席位的程序。",
        "analysis": "2025 年大选后，女性已占澳大利亚议会近半，但自由党在众议院 28 席中只有 6 名女性；全国接近性别平衡，不能自动消除单一政党内部的入口瓶颈。“择优”如果只评价终点人物，却不检查候选人被放在哪些席位，就会隐藏制度本身的选择。",
        "reflection": "可画一条“从党员到议员”的漏斗：党员构成、提名、预选、资源投入、席位安全度和当选逐层比较。再把配额、开放初选、候选人激励三种工具放入漏斗，问它们分别改变哪一层，而不是把整场讨论压缩成支持或反对配额。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "官方数据、政策或制度文件",
        "informationForm": "comparison"
      }
    ],
    "learningGoal": "把视觉结果和统计结论重新连接到委托关系、观测工具、模型与权力结构。",
    "connection": "五则故事共同追问：一幅图或一个数字由谁制作、为谁服务，又遮住了什么。"
  },
  {
    "date": "2026-07-15",
    "displayDate": "2026.07.15",
    "issueNo": "02",
    "theme": "谁在分配注意力与资源：历史物件、社交媒体与女性援助",
    "intro": "贝叶挂毯、参与式表演、星际分子、青少年社交媒体和女性援助展示了注意力与资源怎样被移动、限制或重新分配。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 历史",
        "image": "/story-images/bayeux-tapestry-return.jpg",
        "imageAlt": "中世纪刺绣卷从博物馆运输箱中展开，并以虚线跨越英吉利海峡的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释主题，并非实物复制或新闻现场影像",
        "title": "贝叶挂毯回到英格兰展出，胜利叙事也被重新解释",
        "summary": "近千年未回英格兰的贝叶挂毯已经抵达大英博物馆；它的运输工程，也把文物外交、保存技术与谁有权解释 1066 年重新摆到公众面前。",
        "happened": "7 月 10 日凌晨，70 米长的贝叶挂毯在气候控制箱与减震支架保护下，从法国经英吉利海峡隧道抵达大英博物馆。它将在 2026 年 9 月至 2027 年 7 月展出，这是这件约作于 1072—1077 年的刺绣近千年来首次回到英格兰。作品以羊毛线绣在亚麻布上，讲述黑斯廷斯战役及诺曼征服前后的事件；大英博物馆认为它很可能由诺曼赞助人委托、英格兰刺绣者制作。",
        "facts": [
          "全长约 70 米（约 230 英尺），以羊毛线绣在亚麻布上",
          "作品约作于 1072—1077 年，叙事核心是 1066 年诺曼征服",
          "2026 年 7 月 10 日完成约 11 小时跨海运输，并在气候控制箱与减震支架中保存",
          "展期为 2026 年 9 月至 2027 年 7 月；开票首日约售出 10 万张票"
        ],
        "sourceName": "British Museum（抵达细节补充：The Guardian）",
        "sourceUrl": "https://www.britishmuseum.org/exhibitions/bayeux-tapestry",
        "sourceDate": "2026-07-10（到馆日期）",
        "whyItMatters": "这不只是“名作回家”。",
        "analysis": "挂毯本身是一套高度有效的政治传播：它把征服、誓言、战争和王权连成可移动的图像叙事；而今天的跨国借展，又把保存风险、外交关系和公共解释权绑在一起。运输箱、湿度控制和保险不是幕后琐事，而是决定公众能否看见历史的基础设施。更重要的是，称它为“挂毯”已成为习惯，但技术上它是刺绣——连名称都在塑造观看方式。",
        "reflection": "可做一期“1066 年的长卷新闻”：把贝叶挂毯当作一条 70 米的视觉报道，逐段拆解它如何选择英雄、敌人和因果，再以本次 11 小时秘密运输为第二条时间线，呈现古代宣传与现代文物治理如何在同一件物品上相遇。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "艺术人文 × 女性主义",
        "image": "/story-images/yoko-ono-cut-piece.jpg",
        "imageAlt": "匿名表演者静坐舞台，观众手持剪刀靠近酒红色层叠布料的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释权力与同意，并非演出现场或真实人物影像",
        "title": "小野洋子《Cut Piece》再演，观众参与再次触碰同意边界",
        "summary": "The Broad 与 REDCAT 将在 7 月 18—19 日重演小野洋子的两件行为作品；当剪刀重新交到观众手中，1964 年的问题也被带进当代的同意政治。",
        "happened": "配合 The Broad 的《Yoko Ono: Music of the Mind》回顾展，艺术家 MPA 将于 7 月 18 日和 19 日在洛杉矶 REDCAT 两次演出《Cut Piece》。她会静坐台上，邀请观众剪走衣服碎片；两场分别穿着 Victor Barragán 与 Aliona Kononova 定制的服装。同场的《Sky Piece to Jesus Christ》由洛杉矶室内乐团六人组合演出：乐手被纱布逐渐缠绕，直到无法继续演奏。",
        "facts": [
          "两场演出时间：2026 年 7 月 18 日 18:00、7 月 19 日 14:00",
          "《Cut Piece》首演于 1964 年京都山一会馆",
          "两场服装分别由 Victor Barragán 与 Aliona Kononova 定制",
          "《Music of the Mind》展期为 5 月 23 日至 10 月 11 日，是小野洋子在南加州首场个人博物馆展"
        ],
        "sourceName": "The Broad",
        "sourceUrl": "https://www.thebroad.org/yoko-onos-sky-piece-jesus-christ-cut-piece-sold-out",
        "sourceDate": "2026-07-18（首场活动日期）",
        "whyItMatters": "《Cut Piece》最早于 1964 年在京都演出，它把“观看”从安全距离变成必须承担后果的行动。",
        "analysis": "今天重演它，意义不在复刻一个经典画面，而在观察观众是否会因 60 多年的女性主义、行为艺术史与同意话语而改变行为。MPA 让两位受战争与国家暴力经验影响的设计师制作“最好的衣服”，也把被剪毁的价值、身份和地缘政治带回作品。",
        "reflection": "可以用“同一份指令，六十年后还会得到同一种观众吗？”为结构，对照 1964 年小野洋子与 2026 年 MPA 的现场条件。重点记录规则、服装、观众迟疑和机构安全边界，而不是再次消费被剪开的身体。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "relationship"
      },
      {
        "category": "社会科学 × 天文学",
        "image": "/story-images/interstellar-erythrulose.jpg",
        "imageAlt": "两座射电望远镜朝向银河中心分子云，四个发光节点组成分子结构的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释星际分子探测，并非望远镜实拍影像",
        "title": "天文学家首次在星际空间发现赤藓糖",
        "summary": "研究团队在银河中心分子云中报告四碳酮糖赤藓酮糖；这不是发现生命，而是把糖的化学前史向恒星形成之前又推进了一步。",
        "happened": "由 Izaskun Jiménez-Serra 等 57 名作者组成的团队，利用西班牙 Yebes 40 米和 IRAM 30 米射电望远镜的超灵敏宽带光谱巡天，在银河中心分子云 G+0.693-0.027 中识别出赤藓酮糖（erythrulose）。论文将其称为星际介质中首次观测到的糖；它是一种手性的四碳酮糖，信号丰度至少是尚未被探测到的同类三碳糖的 8 倍。论文已投稿 Nature Astronomy，目前应按预印本结论理解。",
        "facts": [
          "目标天体：银河中心分子云 G+0.693-0.027",
          "仪器：Yebes 40 米与 IRAM 30 米射电望远镜",
          "分子：手性四碳酮糖赤藓酮糖，是首次在星际介质中报告的糖",
          "相对丰度：至少为同类三碳糖的 8 倍；后者仍未在该巡天中检出"
        ],
        "sourceName": "arXiv · Jiménez-Serra et al.",
        "sourceUrl": "https://arxiv.org/abs/2606.03313",
        "sourceDate": "2026-06-02",
        "whyItMatters": "糖不仅提供能量，也是核酸骨架和多种生物结构的组成部分。",
        "analysis": "陨石与小行星样本里已经发现核糖、葡萄糖等单糖，但此前没有糖在星际介质中被直接识别。模型显示，赤藓酮糖可由更简单的二碳醛和醇在星际尘埃表面形成；这意味着部分前生物化学可能在行星诞生前就已启动。不过，光谱识别与化学模型不能被写成“外星生命证据”。",
        "reflection": "可做一条“从无线电谱线到生命原料”的推理链：先展示望远镜如何识别分子的指纹，再区分“检测到糖”“证明糖能进入行星”“证明生命存在”这三个完全不同的命题，顺带解释为何公共传播常把前生物化学夸大成生命发现。",
        "evidenceBoundary": "来源提供论文或预印本材料；它能说明研究者的方法与当前结果，但不代表结论已经经过全部后续复核，也不能自动推导出生命、治疗或政策结论。",
        "sourceType": "研究论文或学术材料",
        "informationForm": "process"
      },
      {
        "category": "社会科学 × 心理学与传播学",
        "image": "/story-images/teen-social-media-trial.jpg",
        "imageAlt": "夜间书桌、分为三个控制方案的手机、家庭餐桌与断开同伴连线的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释试验权衡，并非参与者或研究现场影像",
        "title": "英国试验限制青少年社交媒体一个月，睡眠改善但社交减少",
        "summary": "英国 309 个家庭参与政府支持的现实试验；三种限制都带来主观改善，但最强限制也造成最大的社交中断。",
        "happened": "一项英国政府支持的研究把 309 个有 13—17 岁青少年的家庭分入三种为期一个月的干预：每个社交应用每日限用 15 分钟、晚 9 点至早 7 点宵禁、或从设备中完全移除社交应用。三组参与者都报告睡眠、情绪、专注、学习时间和家庭互动改善；完全移除对专注的报告增益最大，夜间宵禁最易坚持且睡眠收益最稳定。",
        "facts": [
          "样本：309 个家庭，参与者年龄 13—17 岁",
          "周期：1 个月；三种方案为每应用每日 15 分钟、21:00—07:00 宵禁、完全移除",
          "完全移除带来最强的专注改善报告，也带来最大的社交中断",
          "夜间宵禁最容易维持，并产生最一致的睡眠改善报告"
        ],
        "sourceName": "Reuters",
        "sourceUrl": "https://www.reuters.com/legal/litigation/uk-teens-report-sleep-wellbeing-gains-under-social-media-restrictions-study-2026-07-14/",
        "sourceDate": "2026-07-14",
        "whyItMatters": "结果比“禁或不禁”更复杂：完全移除同时带来最明显的社交断裂，尤其当 Snapchat 等平台已成为同伴联系基础设施时；15 分钟上限合规率最低，也常在对话中途切断交流。",
        "analysis": "更要紧的是，这是一项短期家庭试验，改善来自参与者报告，不能直接等同于长期因果或全国政策效果。政策设计必须同时衡量睡眠、注意力、孤立风险、绕过方式与年龄自主权。",
        "reflection": "可把三种方案画成一张“干预—收益—代价”矩阵：不是只问屏幕时间降了多少，而是分别追踪睡眠、专注、家庭互动、同伴联系和可执行性。结尾再讨论：当社交平台已成为公共广场，单个家庭退出的成本为何会高于集体规则。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "comparison"
      },
      {
        "category": "女性主义 × 社会科学",
        "image": "/story-images/women-aid-cuts.jpg",
        "imageAlt": "女性援助工作者共同支撑脆弱帐篷，资金网络被剪断且服务队伍延长的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释照护基础设施，并非危机地区或真实人物影像",
        "title": "援助资金削减使至少一百万女性失去基本服务",
        "summary": "UN Women 调查 52 个危机国家的 855 个女性组织后警告：需求上升时，近九成机构已无法满足需要，四成可能在一年内关闭。",
        "happened": "UN Women 7 月 10 日公布的调查显示，自 2025 年 1 月以来，全球援助资金大幅收缩，至少 100 万名女性和女孩失去人道及其他关键支持。调查覆盖 52 个危机和冲突国家的 855 个女性主导或女性权利组织：84% 看到需求增加，近 90% 已无法满足现有需要，60% 服务人数比 2025 年 1 月前更少，40% 预计一年内暂时或永久关闭。",
        "facts": [
          "调查样本：52 个危机或冲突国家的 855 个女性组织",
          "至少 100 万名女性和女孩自 2025 年 1 月以来失去关键支持",
          "84% 报告需求增加；近 90% 已无法满足现有需求",
          "40% 可能一年内关闭；65% 依靠无薪员工维持；半数已设等候名单或拒绝求助者"
        ],
        "sourceName": "UN Women 报告（Reuters 核验）",
        "sourceUrl": "https://www.reuters.com/world/americas/one-million-women-lose-aid-access-due-funding-cuts-un-women-says-2026-07-10/",
        "sourceDate": "2026-07-10",
        "whyItMatters": "女性组织常能进入国际机构到不了、也不会长期停留的社区；它们提供性暴力幸存者支持、医疗转介、安全空间和法律协助。",
        "analysis": "因此削减资金并非按比例缩小服务，而可能让整个地方转介网络断裂。调查还显示 65% 的机构依靠无薪员工维持，超过四分之三已裁撤岗位，半数建立等候名单或直接拒绝求助者——照护被转移成女性工作者的无偿劳动。",
        "reflection": "可从“援助削减如何变成无偿照护”切入，画出一美元从捐助国预算到地方热线、避难所、翻译与个案管理的路径，再标出每个断点会让谁接手。这样能把宏观财政决定与一线女性组织的时间、身体和风险连接起来。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "process"
      }
    ],
    "learningGoal": "把文化事件和社会政策放进资源流动中，理解被看见、被限制和获得照护之间的关系。",
    "connection": "五则故事都涉及一种稀缺资源：展览位置、身体自主、观测能力、注意力或基本服务。"
  },
  {
    "date": "2026-07-14",
    "displayDate": "2026.07.14",
    "issueNo": "01",
    "theme": "谁能被留下：女性艺术、照护与公共记忆",
    "intro": "Ana Mendieta、低租金艺术工作室、TMS、更年期朋克节和女性历史项目共同追问：谁能获得空间、治疗与被公共记忆保存的机会。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 女性主义",
        "image": "/story-images/ana-mendieta.jpg",
        "imageAlt": "土地上的身体空缺轮廓与胶片组成的 Ana Mendieta 主题编辑插图",
        "imageCredit": "编辑插图 · 用于阐释主题，并非现场新闻摄影",
        "title": "Tate 回顾 Ana Mendieta，不再只从她的死亡讲述她",
        "summary": "Tate Modern 的英国首场大型 Ana Mendieta 展览开幕，把注意力重新放回她的身体、土地、流亡与影像实践。",
        "happened": "Tate Modern 于 7 月 15 日开启英国首个献给 Ana Mendieta 的大型展览，展期持续至 2027 年 1 月 17 日。展览把《Silueta》系列等代表作与重新修复的影像、早期绘画和较少展出的材料并置，使观众能够看见她如何在土壤、火、水、血与身体轮廓之间工作。",
        "facts": [
          "展期：2026 年 7 月 15 日至 2027 年 1 月 17 日",
          "定位：英国首场献给 Mendieta 的大型机构展览",
          "材料：标志性作品、重新修复的影像、早期绘画与较少展出作品"
        ],
        "sourceName": "Tate Modern",
        "sourceUrl": "https://www.tate.org.uk/whats-on/tate-modern/ana-mendieta",
        "sourceDate": "2026-07-13",
        "whyItMatters": "Mendieta 长期被夹在两种叙事中：一边是“女性主义身体艺术家”的简化标签，另一边是 1985 年坠楼死亡及 Carl Andre 审判留下的巨大阴影。",
        "analysis": "大型机构回顾展的意义，不是抹掉死亡政治，而是让作品重新拥有自己的时间线：古巴流亡经验、对前哥伦布文化的兴趣、短暂影像的保存，以及她如何拒绝把身体当成稳定的雕塑对象。",
        "reflection": "可以制作一期“当女性艺术家的死亡压过她的作品”专题：比较 Mendieta、Francesca Woodman 与 Sylvia Plath 的身后叙事，追问纪念、猎奇和重新评价之间的界线。画面上可从她留下的空缺轮廓切入，而不是重复坠楼案的戏剧化视觉。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "timeline"
      },
      {
        "category": "艺术人文 × 社会科学",
        "image": "/story-images/sarabande-studios.jpg",
        "imageAlt": "历史住宅中的艺术家工作室与共享空间编辑插图",
        "imageCredit": "编辑插图 · 用于阐释主题，并非现场新闻摄影",
        "title": "Sarabande 在伦敦开设低租金艺术家工作室",
        "summary": "Sarabande Foundation 在 Tottenham 开启新基地，把 14 间可负担工作室、展厅、咖啡馆与社区空间放进两栋历史建筑。",
        "happened": "由 Lee Alexander McQueen 于 2006 年创立的 Sarabande Foundation，在近十年的规划和修复后，于 7 月 1 日开放 Tottenham 新址。两栋 18 世纪早期 Queen Anne 联排住宅容纳了 14 间艺术家工作室、House of Bandits 画廊、咖啡馆及公共活动空间。工作室报价仅为每平方英尺 £1。",
        "facts": [
          "14 间可负担艺术家工作室",
          "租金：每平方英尺 £1",
          "建筑：两栋 18 世纪早期 Queen Anne 联排住宅",
          "开放设施：画廊、咖啡馆、共享空间与全年公共项目"
        ],
        "sourceName": "PhotoVogue",
        "sourceUrl": "https://www.vogue.com/article/sarabande-foundation-opens-its-new-home-in-tottenham",
        "sourceDate": "2026-07-13",
        "whyItMatters": "艺术生态最常被讲成天赋、灵感和市场价格，但创作者能否留下，首先取决于租金、工作空间和稳定时间。",
        "analysis": "Sarabande 没有把新址放在伦敦中心，而是“跟随艺术家”来到 Tottenham；这既可能为社区提供文化基础设施，也必须警惕艺术机构成为下一轮绅士化的先导。关键差异在于：空间是否真的长期低价、是否向本地居民开放、艺术家是否拥有决定权。",
        "reflection": "可从“艺术家不是被灵感饿死，而是被房租赶走”切入，比较 London、Berlin 与中国一线城市的工作室迁移。把每平方英尺 £1 与周边商业租金并排呈现，会比泛泛谈“支持青年艺术家”更有冲击力。",
        "evidenceBoundary": "来源能确认展览、作品、机构说明与公开日期；策展选择和本站的结构性解读属于解释，不等同于作品本身或唯一的艺术史结论。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "comparison"
      },
      {
        "category": "社会科学",
        "image": "/story-images/tms-treatment.jpg",
        "imageAlt": "匿名来访者接受经颅磁刺激治疗的科学编辑插图",
        "imageCredit": "编辑插图 · 用于解释机制，并非真实患者或治疗现场",
        "title": "TMS 正被研究用于更多精神健康问题",
        "summary": "APA 追踪经颅磁刺激的新方向：成熟适应证正在扩大，研究者也在探索 PTSD 与进食障碍，但“有希望”不等于已经成为标准治疗。",
        "happened": "American Psychological Association 的 7–8 月专题梳理了经颅磁刺激（Transcranial Magnetic Stimulation, TMS）的最新进展。TMS 通过置于头皮外的线圈产生磁脉冲，非侵入性地调节特定脑区活动。目前它已用于成人及青少年抑郁、强迫症、戒烟和偏头痛等领域；研究者还在测试它对 PTSD、进食障碍及部分神经系统疾病的价值。",
        "facts": [
          "形式：非侵入性，通常无需手术或麻醉",
          "已进入临床的方向包括抑郁、强迫症、戒烟和偏头痛",
          "仍在探索：PTSD、进食障碍及更多神经系统疾病"
        ],
        "sourceName": "APA Monitor on Psychology",
        "sourceUrl": "https://www.apa.org/monitor/2026/07-08/brain-stimulation-mental-illness-treatment",
        "sourceDate": "2026-07-01",
        "whyItMatters": "TMS 展示了心理治疗、药物和神经调控之间的边界正在重新组合。",
        "analysis": "但新技术最容易被“精准刺激大脑”的语言神化。疗效不仅取决于设备，还取决于靶点选择、刺激参数、患者差异、是否与心理治疗结合，以及保险能否覆盖。研究阶段的适应证不能被提前包装成确定疗法。",
        "reflection": "可做一期“磁场如何成为精神科治疗工具”的机制型视频：先用线圈—磁场—皮层电流的三步动画解释 TMS，再把“已获批”“临床使用”“研究中”分成三栏，避免把实验结果写成医疗承诺。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "机构原始页面或专题资料",
        "informationForm": "process"
      },
      {
        "category": "女性主义 × 社会科学",
        "image": "/story-images/menopunk.jpg",
        "imageAlt": "Menopunkapalooza 舞台上的朋克音乐人",
        "imageCredit": "摄影：Holly Andres · 来源：The Guardian",
        "title": "更年期主题朋克节把照护议题带进公共文化",
        "summary": "Menopunkapalooza 把 Gen X 朋克、医疗专业人士和 750 名参与者放进同一场节日，让更年期从私密羞耻变成公共议题。",
        "happened": "6 月底，Portland 的 Crystal Ballroom 举办了为期两天的 Menopunkapalooza。约 750 名参与者、十余位 Pacific Northwest 朋克音乐人和医疗专业人士共同讨论围绝经期、更年期、性健康与激素替代治疗。现场不仅有演出和资源市集，还宣读了十点“激素正义权利法案”。",
        "facts": [
          "约 750 名参与者，活动持续两天",
          "美国每年有超过 100 万女性开始进入更年期",
          "相关报道引用研究称：美国 HRT 使用率从 2002 年接近 30% 降至 2020 年不足 5%"
        ],
        "sourceName": "The Guardian",
        "sourceUrl": "https://www.theguardian.com/music/2026/jul/07/menopunkapalooza-menopause-festival",
        "sourceDate": "2026-07-07",
        "whyItMatters": "Riot grrrl 曾把性别暴力和舞台排斥带进朋克现场；三十年后，同一代人开始谈衰老、疼痛、脑雾与被误诊。",
        "analysis": "这里真正新颖的不是“朋克也会老”，而是健康知识传播换了场所：诊室里的单向说明，被音乐、幽默、同伴证词和集体组织改写。它也提醒我们，女性健康的知识缺口并非个人不会搜索，而是医学教育与研究长期没有把她们当作标准主体。",
        "reflection": "可做“Riot grrrl 的第二人生”：从 1990 年代的“girls to the front”讲到 2026 年的“hormones are healthcare”，呈现女性主义运动如何随一代人的身体变化而改变议题，而不是把中年写成青春政治的退场。",
        "evidenceBoundary": "来源能支持这里列出的研究设计、样本、数据或报告结论；结果仍受样本、测量方法、时间范围和相关与因果区别限制，不能直接推广到所有人。",
        "sourceType": "新闻报道或研究新闻稿",
        "informationForm": "timeline"
      },
      {
        "category": "女性主义 × 艺术人文",
        "image": "/story-images/unhidden-heroines.jpg",
        "imageAlt": "手机增强现实让五位女性形象出现在国家广场上空的编辑插图",
        "imageCredit": "编辑插图 · 用于阐释增强现实与公共记忆，并非项目现场画面",
        "title": "Smithsonian 让五位被忽视的女性重新进入国家广场叙事",
        "summary": "Smithsonian 用地理定位与定制插画制作 Unhidden Heroines，让女性历史从馆内展柜进入 National Mall 的现实空间。",
        "happened": "Smithsonian American Women’s History Museum 于 6 月 18 日推出增强现实项目 Unhidden Heroines，持续至 12 月 31 日。访客在 National Mall 的特定地点触发内容，通过地理定位与定制插画，接触五位塑造美国历史却未被充分看见的女性。",
        "facts": [
          "展期：2026 年 6 月 18 日至 12 月 31 日",
          "形式：地理定位 + 定制插画 + National Mall 现场体验",
          "规模：围绕五位影响美国历史的女性展开"
        ],
        "sourceName": "Smithsonian American Women’s History Museum",
        "sourceUrl": "https://womenshistory.si.edu/unhidden-heroines",
        "sourceDate": "2026-06-18",
        "whyItMatters": "增强现实并不会自动让历史更平等，但它能改变“纪念碑必须是什么”的想象：不必等待昂贵、永久且高度政治化的石材雕像，也能把缺席者放回国家叙事中心。",
        "analysis": "同时，数字纪念也有脆弱性——软件、设备与项目期限结束后，人物是否会再次消失？因此技术体验必须与开放档案、教育资源和长期保存结合。",
        "reflection": "可从“没有纪念碑的人，能否先拥有一个数字幽灵”切入，比较实体雕像、AR 纪念和社交媒体历史项目。重点不只是技术酷不酷，而是谁选出这五个人、内容能保存多久、离开 Washington 后公众还能否访问。",
        "evidenceBoundary": "博物馆、展览或文化机构原始页面能支持这里列出的事件、日期与公开材料；本站的比较和反思会单独标记，不能替代原始来源。",
        "sourceType": "博物馆、展览或文化机构原始页面",
        "informationForm": "comparison"
      }
    ],
    "learningGoal": "理解作品、身体经验和人物贡献能否被保存，取决于文化空间、医疗资源和公共叙事。",
    "connection": "五则故事共同关注女性经验如何从私人或被忽视的位置进入可见的艺术、照护与国家记忆。"
  }
];
