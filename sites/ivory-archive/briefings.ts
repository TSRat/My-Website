export type BriefingStory = {
  category: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  title: string;
  summary: string;
  background: string;
  happened: string;
  whyItMatters: string;
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
    "date": "2026-08-04",
    "displayDate": "2026.08.04",
    "issueNo": "22",
    "theme": "门槛之前：材料、收藏、求助、资助与风险分类如何决定谁被看见",
    "intro": "本期从一本中世纪手稿的制作链、一件公共雕塑进入地方收藏、青年私下向 AI 求助、Fermi 公开数据的资助入口，以及英国乳腺癌风险转介规则出发，追问一个结果出现之前，哪些材料劳动与制度门槛已经替我们做了选择。",
    "learningGoal": "学会把作品、调查比例、科研计划和临床分类还原成多阶段流程，区分直接观察、模型识别、制度决定与编辑分析，并同时检查扩大入口会增加哪些资源需求。",
    "connection": "五则故事共同说明，可见性不是对象本身的属性：羊皮和装订让书得以保存，收购让雕塑进入公共记忆，保密求助使青年经验离开成人视野，评审把公开数据转成研究项目，而转介规则决定谁能获得进一步评估。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 书籍史 × 材料与工艺劳动",
        "image": "/story-images/medieval-manuscript-making.jpg",
        "imageAlt": "羊皮框、羽毛笔、矿物颜料、金箔和半装订书册串成中世纪手稿制作链的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释羊皮制作、书写、彩饰与装订流程，并非馆藏复制、历史手稿、工匠、工具实物或展览现场",
        "title": "一本手稿被放进展柜以前，先经过动物皮、墨水、金箔与装订",
        "summary": "中世纪手稿是约公元 500 至 1500 年间以手工书写、绘饰并装订的书。Getty 新展开幕，把完成的彩饰页面拆回羊皮制作、书写、绘画和装订四个阶段，让通常被作者名与图像遮住的材料劳动重新出现。",
        "background": "欧洲及地中海地区的早期书籍常以牛、羊或山羊皮制成羊皮纸。工匠先用石灰松脱毛发，再把湿皮固定、反复刮薄；抄写员划线并以羽毛笔书写，彩饰师加入颜料和金属箔，最后才由装订者把书页组合成册。",
        "happened": "J. Paul Getty Museum 于 8 月 4 日开放《The Making of a Medieval Manuscript》。展览用馆藏与现代工具样本组织一条从原料到书册的制造路径，展品包含基督教、犹太教与伊斯兰文化的文本，并以英语和西班牙语呈现。",
        "facts": [
          "展期为 2026 年 8 月 4 日至 2027 年 3 月 14 日，地点在 Getty Center Museum West Pavilion。",
          "展览把制作过程分成羊皮制作、书写、彩饰和装订四个阶段。",
          "展品包括 9 世纪北非《古兰经》书页、1296 年 Rothschild Pentateuch、约 1053 年的 Irmengard Codex 与约 1450 年的原装皮革封面。",
          "现代全张山羊皮被张在木框上，与完成的手稿并置，显示书页在成为书写表面前的处理状态。",
          "彩饰材料包括蛋彩、墨水、金箔、金漆与银漆。",
          "装订使用木板、皮革和金属扣件。",
          "部分展品将在 2026 年 11 月 24 日轮换，以减少长期曝光并展示更多馆藏。",
          "展览免费，但入馆需要预约时段。"
        ],
        "sourceName": "J. Paul Getty Museum／The Making of a Medieval Manuscript",
        "sourceUrl": "https://www.getty.edu/exhibitions/making-medieval-manuscript/",
        "sourceDate": "展览开幕 2026-08-04",
        "whyItMatters": "把四个制作阶段与跨宗教文本放在一起，说明“手稿”不是一个孤立的漂亮页面，而是材料获取、专业分工和保存条件共同完成的技术系统。可以选择一页馆藏，从动物皮、划线、书写、颜料、金箔、缝线到展柜光照制作材料履历，再比较目录中哪位作者或艺术家被命名、哪些工匠仍保持匿名。"
      },
      {
        "category": "艺术人文 × 当代雕塑 × 原住民视觉语言与收藏制度",
        "image": "/story-images/jeffrey-gibson-coyote-process.jpg",
        "imageAlt": "郊狼形态从混合材料小样、数字扫描、青铜铸造移动到博物馆藏品区的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Jeffrey Gibson 雕塑的制作与收藏路径，并非作品复制、艺术家肖像、Met 立面、Des Moines Art Center 或真实制作现场",
        "title": "一只郊狼从纽约立面进入得梅因收藏，制造链也随作品一起移动",
        "summary": "Jeffrey Gibson 是 Mississippi Band of Choctaw Indians 成员、具有 Cherokee 血统的美国艺术家。他把北美原住民材料传统与现代主义抽象并置；Des Moines Art Center 新购的一件郊狼雕塑，先以手工小样出现，再经数字雕塑、青铜铸造与人工着色成为公共作品。",
        "background": "这件 2025 年雕塑原为 Metropolitan Museum of Art 的 Genesis Facade Commission 而作，是四件拟人动物之一。郊狼在不同北美原住民传统中含义并不相同，常被理解为机敏的变形者；作品也回应 Jacques Derrida 关于人与动物伦理关系的著作《The Animal That Therefore I Am》。",
        "happened": "Des Moines Art Center 于 8 月 3 日宣布直接从艺术家及其画廊购入《nashoba holba / wayaha / coyote / they are witty and transform themselves in order to guide us》。作品离开临时立面委约后进入永久公共收藏，新的馆藏记录同时公开了它从小样到青铜的协作制造过程。",
        "facts": [
          "作品最初是 Met 2025 年 Genesis Facade Commission 的四件立面雕塑之一。",
          "Gibson 先以漂流木、珠饰和布料制作混合媒材小样。",
          "他与 New York 的 UAP 艺术铸造和制作团队合作，将小样扫描、数字雕塑并铸成青铜。",
          "青铜表面由人工着色，以唤起来自多种原住民视觉语言的珠饰与织物质感。",
          "雕塑披着另一只郊狼的皮毛，并佩戴浆果和珠子构成的项链，以强化变形者线索。",
          "Gibson 代表美国参加 2024 年 Venice Biennale，并于 2019 年获得 MacArthur Fellowship。",
          "收购资金来自 1947 年指定 Des Moines Art Center 为受益人的 Coffin Fine Arts Trust。",
          "该信托迄今已支持 126 件作品入藏。"
        ],
        "sourceName": "Des Moines Art Center／Jeffrey Gibson sculpture acquisition",
        "sourceUrl": "https://desmoinesartcenter.org/news/jeffrey-gibson-acquisition/",
        "sourceDate": "馆方公告 2026-08-03",
        "whyItMatters": "临时立面、混合材料小样、数字扫描、铸造、人工着色和信托收购共同说明，一件被称为个人作品的雕塑也依赖多人技术与长期收藏资金。可以把作品的地理与材料迁移画成双线：一条追踪 New York 立面到 Iowa 馆藏，另一条追踪漂流木与珠饰小样到青铜表面，并继续追问馆藏说明如何既承认跨文化引用，又避免把不同原住民传统合并成单一符号。"
      },
      {
        "category": "社会科学 × 心理健康传播 × 青年与生成式 AI",
        "image": "/story-images/youth-ai-mental-health.jpg",
        "imageAlt": "匿名青年与发光对话界面相连，而通向家长和临床人员的沟通线逐渐淡出的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释青年使用聊天机器人获得心理健康建议及其披露缺口，并非真实青年、治疗场景、产品界面或聊天记录",
        "title": "近五分之一青年向 AI 询问心理问题，多数使用者没有告诉任何人",
        "summary": "AI 聊天机器人是能够以对话形式生成回复的通用软件，并非自动等同于心理治疗。美国全国调查发现，12 至 21 岁人群中 19.2% 曾向聊天机器人寻求心理健康建议；在这些使用者中，63.3% 没有向家人、朋友或医生披露。",
        "background": "聊天机器人提供匿名、即时和低成本对话，可能填补等待专业服务期间的信息空档；但通用模型通常不是为诊断或治疗设计。使用者觉得建议有帮助，只能说明主观体验，不能替代对内容准确性、安全性或临床效果的检验。",
        "happened": "JAMA Pediatrics 于 6 月 3 日发表 2025 年全国横断面调查，Harvard 于 8 月 3 日集中介绍其结果。研究把新的使用率与团队 2024 年相近调查比较，显示青年使用比例由 13.1% 上升至 19.2%，但两次问法略有差异。",
        "facts": [
          "调查于 2025 年 11 月进行，向 1,727 名 12 至 21 岁青年发出邀请，最终分析 1,009 名受访者。",
          "加权后样本代表约 4,283 万名美国青年，中位年龄为 17 岁。",
          "19.2% 报告曾用 AI 聊天机器人寻求心理健康建议，估计约为 820 万人。",
          "使用者中有 42.8% 至少每月使用一次。",
          "91.7% 认为建议有些帮助或非常有帮助，但研究没有测试回复的临床准确性或实际疗效。",
          "63.3% 的使用者没有向任何人披露这种使用。",
          "女性的使用调整后优势比为男性的 2.10。",
          "18 至 21 岁相对 12 至 14 岁的调整后优势比为 3.65。",
          "过去六个月和医生谈过心理健康者更常使用聊天机器人，说明 AI 使用不一定完全替代正式服务。",
          "2024 年与 2025 年调查的问题措辞略有差异，因此增长幅度应理解为趋势而非精确的同题追踪。"
        ],
        "sourceName": "JAMA Pediatrics／AI Chatbot Use and Disclosure for Mental Health Among US Adolescents and Young Adults",
        "sourceUrl": "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2849307",
        "sourceDate": "论文在线发表 2026-06-03；Harvard 研究解读 2026-08-03",
        "whyItMatters": "约 820 万人的加权估计、每月使用频率和 63.3% 的不披露共同说明，聊天机器人已经成为青年心理健康信息系统的一部分，却常发生在成人与临床人员看不见的空间。可以把一次求助拆成需求出现、选择 AI、得到回复、主观评价、是否披露与是否转向专业照护六步，继续研究哪一步需要安全提示、人工接力或保密边界，而不是把“有帮助”直接写成“有效治疗”。"
      },
      {
        "category": "社会科学 × 天文学 × 公共数据与科研资助基础设施",
        "image": "/story-images/fermi-cycle-19.jpg",
        "imageAlt": "伽马射线天空数据从轨道望远镜流入开放档案，再通过评审入口连接多波段设施的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Fermi 数据、研究提案评审与多波段协作，并非 NASA 图像、真实卫星、天空图、评审材料或观测结果",
        "title": "数据立即公开以后，谁能把它变成研究仍取决于资助与设施入口",
        "summary": "Fermi Gamma-ray Space Telescope 是 NASA 自 2008 年运行的伽马射线天文台，主要仪器为 LAT 和 GBM。第 19 轮 General Investigator 计划于 8 月 4 日开始，为公开数据分析、理论研究和多波段协同观测提供项目入口。",
        "background": "开放数据意味着观测事件与产品可供研究者下载，并不意味着分析时间、计算资源、人员工资或其他望远镜时段也自动获得。General Investigator 计划通过同行评审选择科学问题，再把经费及协同设施机会配置给项目。",
        "happened": "NASA Fermi Science Support Center 完成第 19 轮第一阶段评审，邀请 34 位新提案负责人提交预算阶段材料，并在 7 月公布入选项目摘要。8 月 4 日新研究周期正式开始，资助预计在 10 月或 11 月发放。",
        "facts": [
          "Fermi 第 19 轮提案截止于 2026 年 1 月 29 日，科学同行评审在 4 至 5 月进行。",
          "第一阶段结束后共有 34 位新提案负责人获邀进入第二阶段。",
          "第二阶段预算材料截止于 6 月 24 日，最终选择于 7 月公布，研究周期于 8 月 4 日开始。",
          "计划允许分析 GBM 或 LAT 从科学运行开始以来的事件数据，也可研究公开光变曲线与点源目录。",
          "研究者可以申请直接相关的射电、光学与其他波段协作时间，包括 NRAO、VERITAS、TESS 和 NOIRLab 设施。",
          "定向 LAT 观测一旦执行，也必须和巡天数据一样立即公开。",
          "美国和非美国机构的研究者都可提交科学提案，但 NASA 经费只发给在美国机构任职并居住在美国的负责人及合作者。",
          "本轮项目主题覆盖伽马射线暴早期余辉、脉冲星、太阳耀斑、活动星系核与暗物质搜索等。"
        ],
        "sourceName": "NASA Fermi Science Support Center／Cycle 19 General Investigator Program",
        "sourceUrl": "https://fermi.gsfc.nasa.gov/ssc/proposals/",
        "sourceDate": "第 19 轮研究周期开始 2026-08-04",
        "whyItMatters": "34 位负责人、公开数据政策和跨设施时段说明，天文基础设施至少有三层：仪器收集数据、档案开放数据、评审系统配置把数据转成知识所需的劳动与观测资源。可以选取一项入选研究，画出伽马射线事件从卫星、地面处理、公共档案、提案评审到其他波段望远镜的旅程，并比较科学开放在哪一层仍受国籍、机构与经费限制。"
      },
      {
        "category": "女性主义 × 健康制度 × 乳腺癌风险与转介",
        "image": "/story-images/breast-risk-referral.jpg",
        "imageAlt": "依赖家族史的狭窄转介门遗漏许多女性，而多因素路径连接到更宽服务容量的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 NICE 家族史标准、多因素风险模型与转介容量权衡，并非患者、医生、病历、家谱、基因检测或医学影像",
        "title": "只靠家族史开启转介门，英国现行规则漏掉了多数五十岁以下风险者",
        "summary": "英格兰 NICE 规则主要根据亲属患癌人数与年龄，决定哪些 50 岁以下女性应从基层医疗转到专科风险评估。新研究用 1,258 人队列比较发现，现行规则只识别十年内后来患乳腺癌者的 4.4%；多因素 BOADICEA 模型可识别 34.8%，同时会显著扩大转介量。",
        "background": "BOADICEA/CanRisk 是综合家族史、生殖与激素经历、生活方式及多基因风险分数的乳腺癌风险模型。它估计未来风险，并不诊断当前是否患癌；被归入较高风险后，仍需专科评估，才可能进入更早影像筛查或预防用药。",
        "happened": "British Journal of Cancer 于 8 月 4 日发表 University of Cambridge 与 Institute of Cancer Research 团队的直接比较。研究把 2004 至 2011 年招募的女性资料按英国年龄与家族史结构加权，检验不同转介策略能否识别随后十年确诊者。",
        "facts": [
          "分析包含 1,258 名招募时未满 50 岁的女性，其中 392 人在十年内确诊乳腺癌。",
          "资料包括家族史、生殖与月经史、激素使用、运动、酒精、吸烟、身高体重及多基因风险。",
          "现行 NICE 标准会转介 1.4% 的人，并识别十年内后来患癌者的 4.4%。",
          "完整 BOADICEA 模型会把 26.5% 的人列为高于一般人群风险，并识别后来患癌者的 34.8%。",
          "现行 NICE 与完整 BOADICEA 策略每识别一名后来患癌者分别需要评估约 161 人和 185 人。",
          "扩大识别范围并不等于所有新增转介者都会患癌。",
          "完整模型判断为高于一般风险的 50 岁以下女性中，73% 没有乳腺癌家族史。",
          "把风险评估限于有家族史者，会使完整模型识别后来患癌者的比例从 34.8% 降至 15.7%。",
          "研究估计，完整模型可能让符合早期发现或预防干预条件的人数增加约七倍，但会明显增加基层、遗传咨询与专科服务负担。",
          "这是队列中的模型比较，尚未证明全面采用该路径能改善长期临床结局或具备成本效益。"
        ],
        "sourceName": "British Journal of Cancer／NICE criteria 与 BOADICEA 风险模型比较",
        "sourceUrl": "https://www.nature.com/articles/s41416-026-03547-2",
        "sourceDate": "论文在线发表 2026-08-04；DOI 10.1038/s41416-026-03547-2",
        "whyItMatters": "4.4% 对 34.8% 的识别差距与 1.4% 对 26.5% 的转介差距同时说明，改善敏感度会把被遗漏者带进系统，也会重新分配遗传咨询、影像和专科容量。可以把同一组女性分别送入 NICE 与 BOADICEA 两条路径，标出真阳性、未识别者、新增转介和服务队列；再与第 18 期的 BRCA 阴性解释区分：前者问谁获得首次风险评估，后者问已检测者如何理解结果。"
      }
    ]
  },
  {
    "date": "2026-08-03",
    "displayDate": "2026.08.03",
    "issueNo": "21",
    "theme": "摘要之外：工艺、日历、信号、闪光与床旁协作留下了什么",
    "intro": "本期从一位雕塑家的金属工艺起点、州选举日历、整夜睡眠信号、星系边缘的黑洞闪光和重症监护室的床旁流程出发，追问结果被压缩成作品、日期、指数或事故率时，哪些制造条件和制度选择会被藏起来。",
    "learningGoal": "学会把完成品、制度安排、临床指标、天文发现和质量改进还原成证据链，并区分历史材料、观察性比较、模型关联、直接观测与单中心实践结果。",
    "connection": "五则故事共同说明，便于传播的摘要往往只保留最后一层：雕塑、投票率、一个睡眠指数、一道宇宙闪光或一条安全指标。真正决定这些结果的，是金属加工履历、选举日历、多模态信号、跨望远镜协作和持续床旁复盘。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 雕塑与设计 × 工艺劳动史",
        "image": "/story-images/petersen-metal-memory.jpg",
        "imageAlt": "制模钢块、雕刻刀、纪念章、浮雕与博物馆档案抽屉组成一条金属工艺履历的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Christian Petersen 的制模、雕刻与雕塑工作链，并非艺术家肖像、作品复制、历史照片、档案或展览现场",
        "title": "完成的雕塑会藏住制模、切模与铸造的职业起点",
        "summary": "Christian Petersen 是丹麦出生的美国雕塑家，也是 Iowa State 长期驻校创作者。《Memory in Metal》新展把他更为人熟知的校园雕塑往前追溯到 East Coast 的商业制模、纪念章与金属设计工作。",
        "background": "制模师会在金属模具上反向雕刻图像，供机器压制奖章、徽章和其他批量物件。这项工作同时需要绘图、浅浮雕、材料判断与机器生产知识；Petersen 后来的公共雕塑并不是从纯粹的工作室神话中突然出现，而是建立在这套商业工艺上。",
        "happened": "Iowa State University Museums 宣布 8 月 25 日开放《Christian Petersen: Memory in Metal》。展览聚焦他在 20 世纪初进入艺术界时较少被讲述的金属职业，并把制模工作、早期合作网络与后来成为驻校雕塑家的路径放进同一条时间线。",
        "facts": [
          "Christian Petersen 生于 1885 年、卒于 1961 年，1894 年随家人从 Denmark 移居美国。",
          "他约在 1900 年开始学习制模，之后在 Newark Technical School、Fawcett School of Design、Art Students League 与 Rhode Island School of Design 继续训练。",
          "他曾在 Massachusetts 的 Robbins Company 从事商业制模与金属设计，并以纪念章、肖像浮雕和公共纪念物扩展雕塑实践。",
          "经济条件曾迫使他在追求独立雕塑事业后重返商业制模。",
          "这段往返说明，工艺工作也是维持艺术生涯的收入基础。",
          "Petersen 在 1930 年代进入 Iowa 的公共艺术项目，随后成为 Iowa State 的驻校雕塑家与教师。",
          "展览在 Christian Petersen Art Museum 举行，展期为 2026 年 8 月 25 日至 12 月 18 日。"
        ],
        "sourceName": "Iowa State University Museums／Christian Petersen: Memory in Metal",
        "sourceUrl": "https://museums.iastate.edu/news/new-exhibition-explores-untold-story-christian-petersens-work-metal",
        "sourceDate": "馆方发布 2026-07-22；展览开幕 2026-08-25",
        "whyItMatters": "制模训练、商业订单和重返工厂的经历共同说明，Petersen 的公共雕塑既是艺术观念，也是可复制金属生产知识长期累积的结果。可以为一件完成雕塑绘制材料履历，逐步标出草图、反向制模、压制或铸造、合作者、收入来源与博物馆保存，比较艺术史在哪一步把劳动从作者形象中删去了。"
      },
      {
        "category": "社会科学 × 政治学 × 选举制度与参与",
        "image": "/story-images/virginia-election-calendar.jpg",
        "imageAlt": "奇数年州选举与联邦选举日历被两条投票路径连接，旁边显示城乡选民与更长选票的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Virginia 选举日期整合、参与机会与信息负担，并非官方选票、真实地图、选民、候选人、政党材料或研究图表",
        "title": "把州选举移到联邦年份，参与可能增加，同一张选票也会更拥挤",
        "summary": "Virginia 是美国仅有的五个仍把州级选举与联邦周期错开的州之一。University of Virginia 为州议会完成的报告发现，历史比较与既有研究普遍把选举整合和更高投票率联系起来，但更长选票也可能稀释地方议题注意力。",
        "background": "选举整合是把原本在不同年份举行的州、地方和联邦选举安排到同一天。它能减少选民一年内多次登记时间、请假和前往投票点的成本，却也会让更多职位与议题同时争夺注意力。",
        "happened": "UVA Karsh Institute of Democracy 于 7 月向 Virginia General Assembly 的联合小组提交跨学科报告，并在 8 月 3 日集中公开研究结论。团队审查政治学文献与各州案例、梳理 Virginia 宪法史、调查 1,000 名州居民，并访谈地方选务人员，没有为州议会指定唯一方案。",
        "facts": [
          "Virginia 州长选举仍在奇数年举行。",
          "全美只有五个州尚未把州选举与联邦选举周期对齐。",
          "报告比较的州和 Virginia 地方案例中，整合后的投票率都高于整合前，但前后比较本身不能排除同期其他变化。",
          "文献综述显示，整合与年轻人、少数族裔和低收入选民的参与增加相关，也可能削弱单一议题组织在低投票率选举中的相对力量。",
          "团队对 1,000 名 Virginia 居民进行了具有州级代表性的调查。Republican 与 Democratic 受访者都出现支持整合的多数。",
          "自报投票可能性在年轻人、全职工作者和有子女者中增加最明显。",
          "政治参与最低者的自报行为预计变化不大。",
          "地方选务人员同时提出行政效率和信息负担两类判断，尤其担心更长选票对农村和年长选民的影响。",
          "Virginia 的奇数年模式最初来自 1851 年宪法改革与当年 12 月州长选举的时间安排，并非一次关于长期参与的明确设计。"
        ],
        "sourceName": "University of Virginia Karsh Institute／Election Consolidation and Scheduling in the Commonwealth",
        "sourceUrl": "https://karshinstitute.virginia.edu/research/election-consolidation-and-scheduling-commonwealth",
        "sourceDate": "报告 2026-07；研究要点发布 2026-08-03",
        "whyItMatters": "五州例外、1,000 人调查与地方官员的两面判断说明，日期不是中性的行政背景：它会重新分配参与成本、组织力量和注意力。可以把同一位选民在分散选举与整合选举中的请假次数、候选项数量、信息来源和投票完成率画成两条旅程，再检验提高参与是否伴随地方议题理解下降。"
      },
      {
        "category": "社会科学 × 健康测量 × AI 与性别偏差",
        "image": "/story-images/sleep-signals-risk.jpg",
        "imageAlt": "脑电、心电、呼吸与肌肉信号被压缩成单一指数，同时分流为五个风险组的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释多模态睡眠信号、传统摘要指标与风险分组，并非患者、临床界面、真实波形、医疗设备或论文图表",
        "title": "睡眠报告只留下一个指数时，整夜信号里的风险会消失",
        "summary": "多导睡眠检查会整夜记录脑、眼、肌肉、心脏、呼吸和血氧活动，临床上常被压缩成呼吸暂停低通气指数。新模型分析一万余次检查，分出五组长期风险；最高组的死亡风险超过最低组两倍，而传统指数没有形成同样清晰的区分。",
        "background": "呼吸暂停低通气指数按每小时呼吸暂停或变浅次数分级，是诊断睡眠呼吸障碍的核心指标。它只总结呼吸事件频率，却没有完整表达脑电、心电、睡眠结构和低氧持续方式，也曾在部分历史队列中对男性结局显示更强关联。",
        "happened": "Cleveland Clinic、Yale 等团队于 8 月 3 日在《Nature Communications》发表睡眠基础模型。研究以临床多模态波形学习表征，再按相似性把患者分为五组；研究者把这些组与多年病历和死亡记录比较，并在独立的 Sleep Heart Health Study 中验证。",
        "facts": [
          "STARLIT-10K 最初包含 10,000 次住院外实验室睡眠检查和 9,661 名患者。",
          "质量控制后有 9,608 次检查和 9,297 人进入聚类分析。",
          "临床检查来自 2012 至 2022 年，并与最长超过 14 年的电子病历、Ohio Death Index 和 Social Security Death Index 连接。",
          "模型同时读取脑电、眼电、下颏肌电、心电、血氧、鼻压、气流、胸腹运动、鼾声和呼气末二氧化碳等信号。",
          "五个风险组的死亡、心血管和神经系统结局呈梯度变化。最高风险组相对最低组的调整后死亡风险比为 2.71。",
          "传统呼吸暂停低通气指数分级没有显示同样稳定的长期结局区分。",
          "最高风险组同时包含指数正常、轻度、中度与重度者。",
          "在独立的 Sleep Heart Health Study 中，最高风险组的死亡风险比为 1.58，心力衰竭风险比为 2.13。",
          "新分组在男性和女性中都显示预后价值。",
          "研究仍是回顾性关联，且缺少完整的气道正压治疗依从与用药资料，不能证明按模型干预会改善结局。"
        ],
        "sourceName": "Nature Communications／睡眠基础模型与临床结局研究",
        "sourceUrl": "https://www.nature.com/articles/s41467-026-75326-9",
        "sourceDate": "论文在线发表 2026-08-03；DOI 10.1038/s41467-026-75326-9",
        "whyItMatters": "9,608 次整夜记录、五组梯度和跨性别验证共同说明，医学测量的公平问题有时来自“保留了哪些信号”，而不只来自模型最后怎样分类。可以把同一次检查画成原始波形、技师标注、传统指数、模型分组和临床行动五层，继续追踪新增风险信息是否能在前瞻试验中改变转诊与治疗，而不是只生成更复杂的标签。"
      },
      {
        "category": "社会科学 × 天文学 × 巡天与跨台站基础设施",
        "image": "/story-images/wandering-black-hole-flare.jpg",
        "imageAlt": "星系边缘的黑洞撕裂恒星产生闪光，地面巡天、光谱望远镜与 Swift 卫星依次接力的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释偏心黑洞、潮汐撕裂事件与跨台站确认链，并非 NASA 图像、真实观测、星系照片、望远镜或事件现场",
        "title": "黑洞偏离星系中心三万光年，靠一次恒星撕裂才显形",
        "summary": "超大质量黑洞通常通过星系核心的活动被发现。天文学家在一个遥远星系边缘确认潮汐撕裂事件：约一百万倍太阳质量的黑洞吞噬恒星时突然变亮，使一颗平时不可见的“游荡”黑洞暴露位置。",
        "background": "潮汐撕裂事件发生在恒星过于接近巨大黑洞、被引力差拉碎时。碎片加热后会发出强烈紫外、可见光或 X 射线；地面巡天先发现亮度变化，再需要光谱与空间望远镜排除超新星等其他解释。",
        "happened": "Zwicky Transient Facility 在 2025 年 11 月从每晚约五十万次闪光中筛出异常事件，SOAR 与 Lowell 等地面望远镜取得位置和光谱，NASA Swift 补上紫外与 X 射线信息。团队于 7 月 27 日报告，这次闪光位于宿主星系中心外超过 30,000 光年，是少数已确认的偏心超大质量黑洞候选之一。",
        "facts": [
          "宿主星系距离地球约 7.5 亿光年，位于 Cetus 方向。",
          "黑洞质量约为太阳的一百万倍，事件位置离星系中心超过 30,000 光年。",
          "Zwicky Transient Facility 每晚检测约五十万次亮度变化，AI 筛选算法首先标出这次位置异常的潮汐撕裂候选。",
          "闪光在数月内的紫外亮度一度超过整个宿主星系，约相当于一百亿个太阳的光。",
          "Swift 的紫外光学望远镜测得辐射温度约为 30,000 摄氏度，跨波段数据共同排除了其他主要解释。",
          "常规巡天每年大约找到 30 次潮汐撕裂事件。",
          "2024 年以前，已知事件几乎都位于星系核心。",
          "研究提出两种仍待区分的来源：多星系并合把较轻黑洞甩向外缘，或一座矮星系正在被大星系吞并。"
        ],
        "sourceName": "NASA Swift／偏离星系核心的潮汐撕裂事件",
        "sourceUrl": "https://science.nasa.gov/missions/swift/nasas-swift-sees-wandering-mega-black-hole-shredding-star/",
        "sourceDate": "NASA 报道 2026-07-27；更新 2026-07-28",
        "whyItMatters": "三万光年的位置偏差、每晚五十万次闪光筛选和多台望远镜接力说明，所谓“发现黑洞”并不是拍到黑色天体，而是从短暂变化与跨波段排除中建立位置证据。可以把巡天报警、算法排序、光谱、紫外温度、替代解释和并合假说排成证据树，继续追踪 Rubin 与 Roman 扩大样本后，游荡黑洞究竟有多常见。"
      },
      {
        "category": "女性主义 × 护理与照护劳动 × 重症安全",
        "image": "/story-images/nurse-led-extubation-safety.jpg",
        "imageAlt": "呼吸管路、三层风险标记、床旁交接、家属提示与跨专业复盘形成安全网络的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释护士主导的意外拔管预防流程，并非患者、医护人员、真实病房、约束工具、病历或医院资料图",
        "title": "把每次意外拔管变成床旁复盘，安全改进才维持了五年",
        "summary": "意外拔管是重症患者在计划之外移除气管内导管，可能造成缺氧或再次插管。New Jersey 一所医院由高级执业护士与护理经理牵头，建立风险分层、每日巡查、交接提示、家属教育和事件复盘后，把发生率从高峰 2.0 降至每百个呼吸机日 0.7 以下。",
        "background": "呼吸机日是统计一位患者使用有创机械通气一天的单位。预防意外拔管不仅依靠固定导管，还需要判断躁动、清醒试验、体位、拔机时机和沟通；护理人员在床旁持续观察这些变化，却常在成果叙事里只剩一条最终指标。",
        "happened": "American Association of Critical-Care Nurses 于 8 月 1 日发布 St. Joseph’s University Medical Center 的单病区质量改进结果。团队把三层风险算法写入交接和每日巡查，训练工作人员与家属识别高风险时刻，并在每次事件后立即召开复盘；改善持续记录到 2023 年。",
        "facts": [
          "项目发生在 Paterson, New Jersey 的 28 床成人内科重症监护室。",
          "意外拔管率在 2018 年最后一季达到每 100 个呼吸机日 2.0 次，接近病区内部基准 1.06 的两倍。",
          "流程实施后，发生率很快下降，并在 2019 至 2023 年持续低于每 100 个呼吸机日 0.7 次。",
          "高级执业护士 Alyson Triolo 与护理经理 Jennifer Ricker 牵头，团队还包括床旁护士、呼吸治疗师、重症医生及质量与安全人员。",
          "具体措施包括三层风险算法、正确体位、护士领导每日巡查、门外高风险提示、交接记录、家属谈话要点及醒觉和自主呼吸试验培训。",
          "2018 至 2023 年共记录 343 次意外拔管，其中 82 次需要再次插管，占 24.0%。",
          "251 次事件发生时患者已有某种约束，占 73.2%，说明单纯增加约束不能替代风险判断、拔机时机和沟通。",
          "这是一个病区的前后质量改进记录，没有同期对照病区，因此不能把全部变化归因于某一项单独措施。"
        ],
        "sourceName": "Critical Care Nurse／护士主导的意外拔管质量改进",
        "sourceUrl": "https://www.newswise.com/articles/nurse-led-initiative-reduces-unplanned-extubations",
        "sourceDate": "研究报道与期刊文章发布 2026-08-01；DOI 10.4037/ccn2026904",
        "whyItMatters": "2.0 降到 0.7 以下并维持五年、同时 73.2% 事件曾发生在已有约束的人身上，说明安全并不是购买一种装置，而是让观察、交接、拔机判断与复盘持续运转。可以把护士一天中的风险识别、体位调整、家属沟通、跨专业报告和事后反馈画成照护链，比较哪些劳动会进入医院指标，哪些仍被藏在“流程改善”四个字里。"
      }
    ]
  },
  {
    "date": "2026-08-02",
    "displayDate": "2026.08.02",
    "issueNo": "20",
    "theme": "把入口拆开：开放、承载、说服、观测与照护的真实门槛",
    "intro": "本期从不设评审的纤维艺术展、三年一次的岛屿艺术节、气候政策实验、日食科研飞行与儿童肿瘤临床试验出发，追问一个入口看似开放时，容量、资源、说明方式和专业判断怎样决定谁真正能够进入。",
    "learningGoal": "学会把文化参与、地方振兴、政策支持、天文观测和临床研究拆成具体流程，并区分开放声明、承载能力、实验关联、待验证计划和制度性筛选。",
    "connection": "五则故事共同说明：开放并不是一句口号。展墙容量、岛屿资源、政策的分配方式、观测窗口和医生是否主动提供机会，都会把名义上的入口变成不同人面对的真实门槛。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 纤维艺术 × 社区文化基础设施",
        "image": "/story-images/fiber-common-thread.jpg",
        "imageAlt": "不同织物、纱线、刺绣、编织和篮编痕迹在象牙色展墙上彼此连接的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释非评审开放展与社区手工知识，并非参展作品、真实展厅、艺术家肖像或活动纪录",
        "title": "不设评审的纤维展，把“谁有资格展出”改成了容量问题",
        "summary": "《A Common Thread》是 Minneapolis Textile Center 的会员纤维艺术双年展，涵盖织造、刺绣、编织和其他纤维实践。它不由评审挑选优胜者，而是向符合条件的提交者开放，直到展厅容量用完。",
        "background": "纤维艺术以线、布、植物纤维和相关手工技术为材料，长期跨越家庭劳动、工艺传统与当代艺术。Textile Center 是一所位于 Minnesota 的纤维艺术机构，通过展览、行会、课程、图书馆和工作室连接专业艺术家与社区实践者。",
        "happened": "Textile Center 于 7 月 30 日开放《A Common Thread》，把会员和附属行会的作品集中展示到 10 月 10 日。馆方将其描述为全美唯一采用“非评审、开放提交至容量满额”机制的同类展览，把策展权的一部分从评委转移给参与资格、提交顺序和物理空间。",
        "facts": [
          "展览在 Minneapolis 的 Textile Center 举行，展期为 2026 年 7 月 30 日至 10 月 10 日。",
          "《A Common Thread》是 Textile Center 的会员双年展，面向该中心会员和附属行会。",
          "征集不进行作品评审，而是开放接收至展览容量用完。",
          "展览属于全年的 Minnesota Handwork 项目，该项目同时安排策展、评审和开放征集三类机会。",
          "Minnesota Handwork 明确纳入 Native、残障身份、LGBTQ+、行会与社区艺术实践者，从新手到成熟创作者均在范围内。",
          "部分作品将在 2026 年 10 月至 2027 年 2 月间前往 Minnesota 另外两地巡展。"
        ],
        "sourceName": "Textile Center／Handwork 2026《A Common Thread》展览资料",
        "sourceUrl": "https://textilecentermn.org/minnesota-handwork/",
        "sourceDate": "展览开幕 2026-07-30；资料于 2026-08-02 核验",
        "whyItMatters": "非评审机制减少了由少数专家判断“够不够艺术”的一道门，但“先到先得”的容量、会员资格和提交条件仍然决定参与边界。可以继续比较同一项目中的策展展、评审展与开放展，追踪三种机制分别让哪些材料、技能、身份和代际知识获得可见度。"
      },
      {
        "category": "艺术人文 × 社会科学 × 岛屿地理与文化旅游",
        "image": "/story-images/setouchi-art-islands.jpg",
        "imageAlt": "五座抽象岛屿由渡轮连接，艺术节人流高峰与淡季小店并列显示的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释濑户内艺术节的间歇旅游与岛屿承载力，并非真实地图、岛屿风景、艺术作品、商户或研究图表",
        "title": "艺术节带来一百天人潮，岛屿却要独自度过下一段淡季",
        "summary": "濑户内国际艺术祭是每三年在日本濑户内海多座岛屿举办的大型当代艺术节，目标之一是回应人口减少。对五座小岛十年田野工作的研究发现，游客高峰能带来生意和交流，却也会制造淡季收入不稳、资源紧张和过度互动。",
        "background": "Naoshima、Teshima、Inujima、Ogijima 与 Megijima 是濑户内国际艺术祭的重要举办地。岛上人口老化、交通和劳动力有限，艺术节期间需要短时间接待大量访客；节后，持续经营的小型旅游商户又必须面对客流骤降。",
        "happened": "Hiroshima University 研究者 Meng Qu 汇总 2015 至 2025 年田野资料，在《Journal of Marine and Island Cultures》提出，岛屿振兴不能只用活动期间游客数或销售额评估。研究把商户问卷、居民与经营者访谈、官员访谈和参与观察并置，指出长期收益取决于社区能否把短暂人流转化为本地企业、关系网络与自主决策。",
        "facts": [
          "濑户内国际艺术祭每三年举办一次，活动约持续 100 天，分布在 12 座岛屿及若干沿海地区。",
          "研究覆盖 Naoshima、Teshima、Inujima、Ogijima 与 Megijima 五座小岛，田野跨度为 2015 至 2025 年。",
          "研究包括 128 份持续营业的小型旅游商户问卷、33 名居民与经营者访谈、12 名节庆官员访谈，以及更广泛的参与观察。",
          "128 家商户中，56.3% 同意或强烈同意艺术节促进居民与游客的友好互动，60.2% 认为它强化了“艺术岛”形象。",
          "活动的间歇性使商户在短暂客流高峰后面对长时间收入不稳，岛上有限的人力、交通和日常生活空间也承受压力。",
          "不同岛屿的调查阶段并不完全同步，因此研究适合比较机制和在地经验，不能当作一次统一时点的岛际排名。"
        ],
        "sourceName": "Journal of Marine and Island Cultures／濑户内艺术节十年田野研究",
        "sourceUrl": "https://jmic.online/issues/v15n1/7/",
        "sourceDate": "论文在线发表 2026-04-30；Hiroshima University 解读发布 2026-07-31",
        "whyItMatters": "100 天活动、三年周期与 128 家商户的长期处境共同说明，游客增加不是振兴的自动同义词；关键在于峰值之后，收入、交通和关系是否仍可持续。可以把每座岛的旺季人流、淡季营业、渡轮班次、居民参与和决策权放进年度时间轴，比较谁有能力吸收节庆收益，谁在替城市文化消费承担间歇成本。"
      },
      {
        "category": "社会科学 × 政治传播 × 气候政策与分配",
        "image": "/story-images/climate-policy-support.jpg",
        "imageAlt": "气候政策卡片的成本、收益与对贫富群体影响被分层展示的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释气候政策实验中的成本、收益与再分配信息，并非真实问卷、民调结果、政党材料或统计图",
        "title": "说清谁承担成本，比只强调气候收益更能改变政策支持",
        "summary": "一项针对西班牙代表性样本的政治学研究用两组调查实验比较气候政策的成本、收益与分配信息。结果显示，告诉人们政策会让低收入者处境改善，对支持度的影响大于说明富人得失；强调经济成本的负面影响也强于强调收益的正面影响。",
        "background": "气候政策可以是低排放区、污染车辆限制或航空税等具体措施。公众可能支持减排目标，却在面对收费、出行限制或不均等负担时反对某项方案，因此研究者需要把政策内容和关于政策的说明方式分别测量。",
        "happened": "Universitat Autònoma de Barcelona、Pompeu Fabra University 与 University of Barcelona 团队在《West European Politics》发表两项实验。第一项随机向受访者展示十种政策的成本或收益信息，第二项让受访者在虚构城市政策组合之间选择，并改变方案对最富与最贫居民的预期影响。",
        "facts": [
          "研究使用两组具有西班牙人口代表性的调查样本，分别进行情境实验与联合分析实验。",
          "第一项实验覆盖十种气候政策，并随机呈现政策成本或收益信息。",
          "第二项实验改变虚构城市政策组合的内容、成本、收益，以及对最富和最贫居民的预期影响。",
          "强调经济成本会显著降低支持度，强调收益带来的提升较小，显示潜在损失获得更强反应。",
          "当方案被描述为改善资源较少者的处境时，支持度提高最明显。富裕群体的得失对偏好的影响较小。",
          "左翼受访者总体支持度和对再分配的敏感度更高，右翼尤其极右翼受访者更反对。实验测量的是西班牙调查中的政策偏好，不能直接等同于实际投票或其他国家。"
        ],
        "sourceName": "Universitat Autònoma de Barcelona／West European Politics 气候政策支持实验",
        "sourceUrl": "https://www.uab.cat/web/newsroom/news-detail/why-is-gaining-citizen-support-for-climate-policies-so-difficult-1345830290613.html?detid=1345997896398",
        "sourceDate": "大学解读 2026-07-31；DOI 10.1080/01402382.2026.2701769",
        "whyItMatters": "两项实验把“政策是什么”与“谁付出、谁受益”拆开，说明公众反应不仅取决于抽象环保态度，也取决于分配结构是否被看见。可以为同一项低排放政策制作成本、总体收益和分配影响三种说明，再追踪信息是否准确、哪些负担得到补偿，以及态度变化能否延续到实际政策选择。"
      },
      {
        "category": "社会科学 × 天文学 × 日食观测基础设施",
        "image": "/story-images/eclipse-airborne-science.jpg",
        "imageAlt": "日食阴影上方的科研飞机、多波段相机和连续科学气球组成分层观测系统的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 2026 年日全食的飞机与气球观测计划，并非 NASA 照片、真实飞机、日食影像、仪器图或观测数据",
        "title": "追着月影飞行，日全食观测窗口可以从两分多钟延长到近三分钟",
        "summary": "2026 年 8 月 12 日的日全食将经过 Greenland、Iceland 与 Spain 等地。NASA 资助的团队计划让高空飞机沿月影飞行，并在 Iceland 和 Spain 放飞科学气球，同时研究太阳外层大气和地球近地面大气对突然变暗的反应。",
        "background": "日全食发生时，月球完全遮住太阳明亮表面，使通常被强光淹没的日冕短暂可见。地面观测受云层、低层大气吸收和极短全食时间限制，因此飞机速度、高度、相机波段和气球发射节奏都会改变能取得的数据。",
        "happened": "NASA 公布 8 月日食科研部署：一架 WB-57 飞机将携带四台相机在约 50,000 英尺高度追逐月影，每秒至少拍摄 20 幅图像；学生团队则在日食前后连续放飞气球，测量边界层与臭氧变化。计划仍待 8 月 12 日实际天气、飞行与仪器表现检验。",
        "facts": [
          "2026 年 8 月 12 日的日全食路径经过 northern Russia、Greenland、Iceland、Spain 和 Portugal 一角。大多数全食地点的全食阶段少于两分钟半。",
          "地面最长可见日冕约 2 分 18 秒。WB-57 以约每小时 460 英里沿月影飞行，可把观测延长到接近三分钟。",
          "飞机将在约 50,000 英尺高度飞行，四台相机覆盖可见光和红外波段，每秒至少记录 20 幅图像。",
          "2024 年同类任务部分明亮结构过曝。本次将调整曝光时间，并使用更新的软件加快处理。",
          "Iceland 两支团队计划从日食前 18 小时到日食后 8 小时共放飞 80 个气球，观察近地边界层是否变薄。",
          "Spain 三支团队将放飞 6 个配备 360 度相机和臭氧仪器的气球。此前 2024 年实验观察到全食期间臭氧下降，本次将比较不同季节与时刻。"
        ],
        "sourceName": "NASA Science／2026 年 8 月日全食飞机与气球实验",
        "sourceUrl": "https://science.nasa.gov/science-research/heliophysics/nasa-science-soars-during-august-total-solar-eclipse/",
        "sourceDate": "NASA 计划发布 2026-07-27；日全食日期 2026-08-12",
        "whyItMatters": "多出几十秒、避开云层和补回部分红外波段，说明一次日食能产生什么证据，取决于飞行平台、曝光修正和连续发射等工程安排。可以把地面观察者、飞机与两地气球沿时间和高度排成剖面，继续追踪计划中的测量是否按预期完成，以及失败数据会怎样进入下一次观测设计。"
      },
      {
        "category": "女性主义 × 儿童健康与照护 × 临床研究权力",
        "image": "/story-images/pediatric-trial-gatekeeping.jpg",
        "imageAlt": "匿名家长与临床团队之间分布着筛选门、知情同意、翻译、交通和照护节点的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释儿童肿瘤临床试验的系统门槛与医生把关，并非真实患儿、家长、医生、病历、知情同意书或临床现场",
        "title": "家庭愿意参加研究时，医生的预判仍可能让邀请根本没有发生",
        "summary": "儿童肿瘤临床试验为癌症患儿测试新的治疗方案。Boston 一家大型儿童癌症中心对 60 名 Black 或 Hispanic 患儿家长和 15 名临床人员的研究发现，家长普遍愿意贡献研究，却可能在医生基于交通、收入或服药坚持的假设下，根本没有进入试验讨论。",
        "background": "参加儿童癌症试验通常需要医生先判断患儿是否符合条件，再向家长解释治疗、风险、额外检查和随访。所谓 gatekeeping 是临床人员在正式筛选或邀请之前，凭对家庭信任、资源或坚持能力的预期，决定不提出研究机会。",
        "happened": "UT Southwestern 与 Dana-Farber 等机构在《JAMA Network Open》发表单中心混合方法研究。家长和临床人员都把信任、知情同意压力、语言材料和额外要求视为关键因素，但家庭物质困难与试验的实验性质并未被大多数家长视为不可克服；将它们视为障碍并产生把关的主要是临床人员。",
        "facts": [
          "研究在 Boston 一家大型儿童癌症中心进行，60 名家长完成问卷，其中 20 人参加访谈。",
          "另有 15 名临床人员接受访谈。",
          "60 名家长中 51 人为母亲，占 85%。Black 与 Hispanic 身份按研究预设方式覆盖全部家长样本。",
          "44 个家庭报告至少一种物质困难，占 73%，包括食物、住房、交通或水电不安全。",
          "家长对肿瘤团队的信任平均为 4.63 分，满分 5 分。家长和临床人员都把利他动机与可信关系视为参与促进因素。",
          "双方都指出，确诊后 24 至 48 小时内出现的大量知情同意信息、缺少翻译材料、额外就诊和检查会形成门槛。",
          "临床人员把物质困难、历史不信任或预期不依从视为潜在障碍，并承认这些判断可能阻止试验讨论。多数家长则表示，只要认为对孩子重要，会设法克服资源压力。",
          "这是单中心、单时点研究，样本主要描述参与者对门槛的看法，不能估算所有医院实际发生 gatekeeping 的比例。"
        ],
        "sourceName": "JAMA Network Open／儿童肿瘤临床试验参与研究",
        "sourceUrl": "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2852335",
        "sourceDate": "论文在线发表 2026-07-31；DOI 10.1001/jamanetworkopen.2026.26538",
        "whyItMatters": "73% 的家庭报告物质困难，却同时给出 4.63 分的高信任并表达参与意愿，这组对照直接挑战了把低参与归因于家庭不信任或不配合的简单解释。可以把资格筛选、医生是否提出、知情同意、翻译、交通支持和最终决定分成连续节点，追踪机会究竟在哪一步消失，并检验统一筛选与资源支持能否减少把关。"
      }
    ]
  },
  {
    "date": "2026-08-01",
    "displayDate": "2026.08.01",
    "issueNo": "19",
    "theme": "看见基础设施：作品、城市、探测与照护怎样获得条件",
    "intro": "本期从一位长期被“安静”概括的画家、法老展中的日常器物、城市里的数据中心、月球冰探测模型和南非 HIV 随机试验出发，追问结果背后需要哪些空间、能源、仪器与治疗选择。",
    "learningGoal": "学会把展览、数字基础设施、天文探测与临床试验拆成可核验的条件链，并区分直接观察、模型推断、随机比较和编辑分析。",
    "connection": "五则故事共同说明：我们看见的作品、数据和治疗结果都不是孤立对象。它们依赖馆藏合作、电网遗产、实验设施、测量方法与可获得的药物选择。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 女性主义 × 绘画与艺术史",
        "image": "/story-images/gwen-john-retrospective.jpg",
        "imageAlt": "安静画室里重复出现的抽象坐姿、纸上习作与色彩变化组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Gwen John 的系列创作与纸上实验，并非艺术家肖像、作品复制、展览现场或历史照片",
        "title": "四十年后，Gwen John 的大型回顾展把“安静”还原成一种工作方法",
        "summary": "Gwen John 是一位生于威尔士、长期在法国生活的现代主义画家，以人物、室内和反复变化的系列作品著称。爱丁堡 Modern Two 开幕的《Strange Beauties》是四十多年来首场关于她的大型回顾展。",
        "background": "Gwen John（1876—1939）在 London 的 Slade School of Art 接受训练，属于最早获得正式艺术教育的一代女性，1904 年迁居法国。她经常重复同一构图，通过色调、形式和技法的细微变化推进作品，也留下大量素描与水彩。",
        "happened": "National Galleries of Scotland 于 8 月 1 日开放《Gwen John: Strange Beauties》，以她诞辰 150 周年为线索，从 Wales 早年一直展到 Meudon 晚期创作。展览把油画与少见纸上作品并置，其中多件素描和水彩首次公开展出，使重复、户外写生和抽象化实验进入对她的整体理解。",
        "facts": [
          "展览在 Edinburgh 的 Modern Two 举行，展期为 2026 年 8 月 1 日至 2027 年 1 月 4 日。",
          "这是四十多年来首场关于 Gwen John 的大型回顾展。",
          "展览从她在 Wales 和 Slade 的早期学习，延伸到受宗教、法国现代主义及 Meudon 环境影响的晚期作品。",
          "少见的素描和水彩中有多件首次公开展出。",
          "相关纸上作品显示她进行户外写生、抽象化人物试验，并使用比著名油画更明亮的色彩。",
          "项目由 Amgueddfa Cymru 联合 National Galleries of Scotland、Yale Center for British Art 与 National Museum of Women in the Arts 组织。"
        ],
        "sourceName": "National Galleries of Scotland／Gwen John: Strange Beauties",
        "sourceUrl": "https://www.nationalgalleries.org/exhibition/gwen-john-strange-beauties",
        "sourceDate": "展览开幕 2026-08-01；页面于 2026-08-01 核验",
        "whyItMatters": "首次公开的纸上作品与反复构图说明，John 画面里的克制不是缺少行动，而是长期比较色调、姿势与技法的结果。可以把同一题材的油画、素描和水彩排成变化序列，继续追问：艺术史把女性创作者称为“安静”时，究竟描述了画面，还是遮住了她的实验劳动？"
      },
      {
        "category": "艺术人文 × 历史与考古 × 展览叙事",
        "image": "/story-images/pharaohs-everyday-life.jpg",
        "imageAlt": "抽象展柜从花岗岩巨像轮廓逐渐过渡到首饰、化妆品、工具和家具的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释法老权力叙事与日常器物的并置，并非古埃及文物复制、考古现场、展览照片或历史重建",
        "title": "从花岗岩巨像走到化妆品，法老展把权力旁边的日常生活也放进来",
        "summary": "《Treasures of the Pharaohs》是 de Young Museum 举办的古埃及展览，以 130 件作品跨越约三千年历史。展览从法老的王权与宗教位置出发，再转向家族、官员、工匠和日常生活。",
        "background": "古埃及的法老同时处在政治、宗教和视觉文化的中心，但今天保存下来的物件并不只属于国王。墓葬中的首饰、化妆品、工具和家具也能说明普通生活如何被理想化地带入来世，不过它们不能直接等同于所有人的完整日常。",
        "happened": "Fine Arts Museums of San Francisco 于 8 月 1 日在 de Young 开放《Treasures of the Pharaohs》。展览把来自 Cairo 的 Egyptian Museum 与 Luxor Museum 的大型雕像、金饰和日常器物放进同一条参观路线，使观众从社会等级顶端逐步看到服务王室者的劳动、信仰与物质生活。",
        "facts": [
          "展期为 2026 年 8 月 1 日至 2027 年 1 月 31 日。",
          "展览包含 130 件来自 Egyptian Museum in Cairo 与 Luxor Museum 的文物。",
          "展品跨越约三千年历史，尺度从巨型花岗岩雕像到精细金饰。",
          "叙事从法老、王室成员和高级官员，延伸到神祇、宗教、死亡与来世观念。",
          "首饰、化妆品、工具和家具等墓葬物品，被用来讨论服务法老者的日常生活及其理想化呈现。",
          "旧金山是这场国际巡展的首个美国展出城市。"
        ],
        "sourceName": "Fine Arts Museums of San Francisco／Treasures of the Pharaohs",
        "sourceUrl": "https://www.famsf.org/exhibitions/treasures-pharaohs",
        "sourceDate": "展览开幕 2026-08-01；馆方资料于 2026-08-01 核验",
        "whyItMatters": "把巨像、金饰与工具放在同一路线里，会让“古埃及”从少数统治者的辉煌扩展成材料、手艺和服务关系共同组成的社会。可以为每件器物标出材料来源、制作者、使用者、墓葬语境与现代出借路径，再比较展览如何分配国王、工匠和普通生活的可见度。"
      },
      {
        "category": "社会科学 × 地理与城市研究 × AI 基础设施",
        "image": "/story-images/urban-data-centers.jpg",
        "imageAlt": "城市街区、服务器机房、退役燃煤电厂与输电线路叠合成基础设施剖面的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释数据中心的城市分布与电网遗产，并非真实设施、城市地图、公司资产或研究图表",
        "title": "所谓“云端”有 97.5% 落在城市及其近郊",
        "summary": "数据中心是存放服务器并为网络和 AI 服务提供计算的实体设施。NYU 研究定位美国本土 4,283 座数据中心，发现 97.5% 位于都会或小型都市统计区，推翻了它们主要藏在偏远乡村的常见想象。",
        "background": "数据中心需要持续供电、快速网络、冷却用水和专业劳动力，因此选址会把数字服务与地方电网、土地和环境政策连接起来。美国的都会与小型都市统计区不仅包括市中心，也包括与核心城市紧密相连的周边地区。",
        "happened": "NYU Tandon 团队在《Nature Cities》发表全国选址分析。结果显示，数据中心跟随现有供电和网络基础设施集中到城市，退役燃煤电厂留下的输电连接也会吸引新项目；位于联邦 Energy Community 指定区的城市，正在建设的数据中心出现概率约为其他城市的两倍。",
        "facts": [
          "研究覆盖美国本土 4,283 座数据中心。",
          "其中 97.5% 位于 metropolitan 或 micropolitan statistical areas。其余约 2.5% 平均只离最近的城市边缘 8.5 英里。",
          "Washington、Chicago、Dallas–Fort Worth、New York 与 Phoenix 五个都会区合计接近全国三分之一。Washington 地区有 610 座，占 14.2%。",
          "地方发电能力是选址模型中最强的单一预测因素。退役燃煤电厂留下的线路和并网条件可被新数据中心利用。",
          "位于 Energy Community 指定区的城市，正在开发的数据中心出现概率约为其他城市的两倍。",
          "模型估算单座设施的年度碳排放会随地方电力结构大幅变化。Montana 或 North Dakota 的典型值超过 35 万吨，Vermont、New Hampshire 或 Arkansas 的平均值低于 3,000 吨。"
        ],
        "sourceName": "NYU Tandon School of Engineering／Nature Cities 数据中心选址研究",
        "sourceUrl": "https://engineering.nyu.edu/news/inside-urban-machine-where-americas-data-centers-actually-live",
        "sourceDate": "大学解读与论文发布 2026-07-31；DOI 10.1038/s44284-026-00487-z",
        "whyItMatters": "4,283 个地点、97.5% 的城市集中度和燃煤电网遗产共同说明，数字服务的成本并没有漂浮在无人的“云”里，而是落在居民共用的电力、土地与环境系统中。可以把一座数据中心与退役电厂、输电线、水源、社区和地方许可画在同一张图上，继续追踪谁获得税收与就业，谁承担拥堵、用水和排放。"
      },
      {
        "category": "社会科学 × 天文学 × 月球探测基础设施",
        "image": "/story-images/lunar-ice-seismology.jpg",
        "imageAlt": "月球南极剖面中的冰层、钻头产生的地震波与实验室真空腔相互对应的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释月球冰的地震探测模型，并非真实月面、探测器、冰层分布、实验数据或观测影像",
        "title": "月球钻头发出的震动，可能比它本身钻得更深",
        "summary": "月球极区的地下冰可能为长期探测提供水，但表面以下的分布仍不清楚。Berkeley Lab 团队用模拟月壤、低温真空实验和计算模型，提出通过地震波区分干燥岩石与含冰岩层的方法。",
        "background": "地震学通过波在不同材料中的传播速度和形态推断地下结构。月球的低温与高真空会让岩石和冰表现得不同于地球，因此地面实验必须先建立可供月面仪器解释信号的物理基线。",
        "happened": "研究者在《Science Advances》报告首次使用 FROST 低温真空腔的结果，并把 X 射线微断层扫描、冰稳定性模型与地震模拟连接起来。模拟显示不同类型的月球冰沉积可能产生可区分的地震特征，未来可用月球车钻头产生的震动和车载传感器检验。",
        "facts": [
          "FROST 是一座约 15 英寸高的低温真空腔，连接 Berkeley Lab Advanced Light Source 的 X 射线束线。",
          "实验使用由 NASA Johnson Space Center 调制、尽量接近真实月壤的地球岩石。",
          "团队比较干燥与含冰模拟月壤在月球式低温真空中的微观弯曲和变形。",
          "组合模型目前描述月面以下约 800 米范围，并预测不同冰沉积会留下不同地震信号。",
          "计划中的 VIPER 月球车钻头会产生震动，导航加速度计可尝试测量短频地震波。其他仪器主要直接探测上部约一米的冰。",
          "这些结果仍需真实月面实验验证，模型目前提供的是可检验假说，而不是已经发现的地下冰矿图。"
        ],
        "sourceName": "Lawrence Berkeley National Laboratory／月球冰地震探测研究",
        "sourceUrl": "https://newscenter.lbl.gov/2026/07/31/ice-ice-maybe-new-ways-to-search-for-frozen-water-on-the-moon/",
        "sourceDate": "研究解读与 Science Advances 论文发布 2026-07-31",
        "whyItMatters": "15 英寸实验腔、800 米模型深度与未来月球车的钻头和传感器构成一条从实验室到月面的证据链，说明“找水”先要解决怎样解释间接信号。可以把上部一米的直接探测和更深处的地震推断分层显示，继续比较每种方法能看见什么、需要什么校准，以及谁决定冰被用于科学、生命支持还是资源开发。"
      },
      {
        "category": "女性主义 × 健康与照护 × HIV 治疗选择",
        "image": "/story-images/opti-dor-hiv-trial.jpg",
        "imageAlt": "两条匿名治疗路径并列显示病毒抑制、体重变化、服药坚持与随访节点的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Opti-DOR 随机试验的治疗权衡，并非真实患者、药片、临床现场、病历或研究图表",
        "title": "病毒控制相近时，少增两公斤也会改变治疗选择",
        "summary": "Opti-DOR 是一项在南非比较两种每日口服 HIV 初始治疗的随机试验。600 名参与者接受 doravirine 或常用的 dolutegravir 方案 48 周，两组病毒抑制相近，但前者的体重和体脂增幅较小。",
        "background": "抗逆转录病毒治疗可以把 HIV 病毒量压到很低并长期维持健康。Dolutegravir 方案疗效强、耐药屏障较高，已在许多国家成为一线选择，但治疗相关体重增加在黑人群体和女性中尤其受到关注，因为它可能叠加既有的代谢健康风险。",
        "happened": "University of the Witwatersrand 与 Africa Health Research Institute 团队在 JAMA 发布 Opti-DOR 结果。Doravirine 组合在 48 周病毒抑制上达到预设的非劣效标准，同时中位体重增加 3.0 公斤，对照方案为 5.0 公斤；研究者因此主张把它作为有体重增加风险者的针对性选择，而不是全面替代 dolutegravir。",
        "facts": [
          "试验在 Johannesburg 城市站点与 KwaZulu-Natal 的 Somkhele 乡村站点共纳入 600 人，并按 1:1 随机分组。",
          "参与者中约 69% 出生时指定为女性，超过 99% 被记录为 Black African，年龄中位数为 34 岁。",
          "48 周时，doravirine 组有 89.0% 达到每毫升低于 50 copies 的病毒抑制，对照组为 90.7%，差异符合非劣效标准。",
          "中位体重增加分别为 3.0 公斤与 5.0 公斤。体重增加至少 5% 的比例分别为 41.1% 与 56.8%。",
          "总体脂肪比例的中位增幅分别为 1.5 与 2.2 个百分点。",
          "Doravirine 组有七名参与者出现耐药相关结果。研究者强调服药坚持和有针对性的选择，未建议用它全面替代 dolutegravir。"
        ],
        "sourceName": "JAMA／Opti-DOR randomized clinical trial",
        "sourceUrl": "https://jamanetwork.com/journals/jama/fullarticle/2852404",
        "sourceDate": "在线发表 2026-07-31；DOI 10.1001/jama.2026.14762",
        "whyItMatters": "病毒抑制率相近、体重中位增幅相差 2 公斤，以及至少增加 5% 体重者相差 15.7 个百分点，说明疗效之外的长期负担也应进入共同决策。48 周试验尚未证明较少增重会直接减少多年后的糖尿病或心血管事件，可以继续追踪性别、既有代谢风险、耐药、药价和供应稳定性怎样共同决定谁真正拥有选择。"
      }
    ]
  },
  {
    "date": "2026-07-31",
    "displayDate": "2026.07.31",
    "issueNo": "18",
    "theme": "正式记录之外：记忆、过程与分类边界",
    "intro": "本期从分布在三座机构的奴隶制记忆展览、反向科学研讨会、移民执法对象、BRCA 检测结果和参宿四伴星出发，追问正式记录为何总会删去一部分现实。",
    "learningGoal": "学会区分展览场地、论文、执法分类、基因检测与天文图像所记录的内容，以及仍需由路线、口述、家族史和后续观测补回的证据。",
    "connection": "五则故事共同说明：一份看似完整的记录并不等于完整现实。谁选择场地、谁整理过程、如何划分类别、保留哪些背景，都会改变我们最终看见的对象。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 摄影与电影 × 奴隶制记忆",
        "image": "/story-images/distributed-memory-exhibition.jpg",
        "imageAlt": "三座抽象文化机构由步行路线、相册框、织物层和河岸轮廓连接的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释多地点展览与历史记忆的关系，并非参展作品复制、真实场馆、奴隶制现场、历史照片或展览纪录",
        "title": "同一场展览分布在三处，场地本身也开始讲述奴隶制记忆",
        "summary": "《Free as They Want to Be》是一场以摄影、电影和当代艺术讨论奴隶制记忆、自由与非洲离散经验的巡展。它在 Baton Rouge 被分配到一所历史悠久的黑人大学、一座曾发生民权抗议的旧泳池建筑和一座糖业史博物馆。",
        "background": "这场展览由摄影史学者 Deborah Willis 与艺术史学者 Cheryl Finley 共同策划，汇集 Bisa Butler、Carrie Mae Weems、Dawoud Bey、Hank Willis Thomas 等二十位艺术家的作品。它不只回看奴隶制，也关注家庭相册、土地、历史地点和公共纪念如何保存或改写黑人生活。",
        "happened": "Southern University 与两家地方机构宣布，巡展将于 8 月 1 日至 23 日在 Baton Rouge 三地免费展出。当地版本没有把作品集中在一个白盒子里，而是让原有策展论题分别进入 HBCU 校园、民权抗议旧址和记录 Louisiana 糖业历史的博物馆。",
        "facts": [
          "展览在 Southern University 的 Frank Hayden Hall Visual Art Gallery、Baton Rouge Gallery 和 West Baton Rouge Museum 三地同时展出。",
          "Baton Rouge Gallery 位于一座旧泳池建筑中，这里曾发生 1963 年 Baton Rouge Swim-In 民权抗议。",
          "Southern University 是一所历史悠久的黑人大学，校园所在的河岸地区受到种植园历史塑造。",
          "West Baton Rouge Museum 从殖民时期至今追踪 Louisiana 糖业历史。",
          "当地艺术家 John Alleyne、Malaika Favorite、Randell Henry 和 John Isiah Walton 的作品将补入巡展，为 Baton Rouge 版本增加地方视角。",
          "展览最初为 2022 年 Cincinnati 的 FotoFocus Biennial 在 National Underground Railroad Freedom Center 策划，此后在美国巡展。"
        ],
        "sourceName": "Southern University／West Baton Rouge Museum／《Free as They Want to Be》展览公告",
        "sourceUrl": "https://www.subr.edu/news/southern-university-partners-with-local-art-galleries-for-multisite-exhibition-featuring-renowned-american-artists",
        "sourceDate": "Southern University 公告 2026-07-30；展览开幕 2026-08-01",
        "whyItMatters": "三处场地分别携带大学、民权抗议和糖业的历史，因此作品移动并不只是扩大观众，而会改变每件作品邻接的制度与记忆。分析这场展览时，可以把路线、建筑旧用途、地方艺术家和巡展原作画在同一张地图上，继续追问：作品进入不同地点后，哪些历史被放大，哪些仍留在场馆之外？"
      },
      {
        "category": "社会科学 × 科学传播 × 隐性知识与学术制度",
        "image": "/story-images/inverse-seminar.jpg",
        "imageAlt": "年轻报告者把论文反向呈现给资深研究者，周围浮现失败实验、分岔路径和档案节点的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释反向研讨会和论文遗漏的研究过程，并非真实学者、研讨会、实验记录或论文页面",
        "title": "让年轻研究者把论文讲回给作者，失败与偶然才重新进入科学史",
        "summary": "“反向研讨会”是一种把传统学术报告倒过来的形式：年轻研究者阅读资深科学家的论文并向作者复述，作者不准备演讲，只负责补充论文没有写下的失败、争论、偶然发现与合作关系。",
        "background": "科学论文通常把研究整理成从问题到结果的清晰路线，但真实工作会经历失败实验、临时会面、人员变化和未发表项目。这些隐性知识影响后来者如何理解一个领域，却很少进入正式文献。",
        "happened": "University of Pittsburgh 团队在《Nature Physics》发表这一形式，并上线开放网站。团队在物理学中连续 27 个月举办七场反向研讨会；每场录像获得可引用的 DOI，使口述过程能够像论文一样被后续研究指向。",
        "facts": [
          "反向研讨会由年轻研究者选择并讲解资深科学家的论文。受邀作者通常远程参加，事先不知道会讲哪篇文章。",
          "团队在 27 个月中举行七场活动，形式源于 2020 年以后线上研讨会暴露的参与不足问题。",
          "一场案例回看 Michael Crommie 团队 2010 年的应变石墨烯论文。Crommie 说明发现最初是偶然出现，随后经历数月困惑。",
          "他还谈到两个各持续约两年却从未发表的失败项目。正式文献中没有这些工作的记录。",
          "配套网站面向所有学科开放。每场录像分配可引用 DOI。Crommie 场次时长为 92 分钟。",
          "目前证据来自七场物理学实践和参与者经验，还不能说明这一形式在所有学科都能产生相同效果。"
        ],
        "sourceName": "Nature Physics／University of Pittsburgh／What physics papers don’t tell you",
        "sourceUrl": "https://www.nature.com/articles/s41567-026-03380-7",
        "sourceDate": "论文与开放网站发布 2026-07-31",
        "whyItMatters": "可引用录像能保存论文删去的过程，但它仍由记忆、提问者选择和资深作者的叙述共同形成，并不是未经筛选的事实仓库。可以继续比较同一项研究的论文、实验记录和反向研讨会，把偶然、失败、贡献者与最终结论分层标注，追踪口述补回了什么，又新遗漏了什么。"
      },
      {
        "category": "社会科学 × 移民与执法 × 行政数据",
        "image": "/story-images/ice-arrest-priorities.jpg",
        "imageAlt": "执法数据路线从拘押节点分岔到机场、学校、工作场所和社区空间，数量柱上升而前科占比收窄的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释移民逮捕地点与对象构成变化，并非真实执法现场、移民、警员、政府地图或官方统计图",
        "title": "逮捕数量翻升时，有前科者所占比例反而降到三分之一",
        "summary": "美国 Immigration and Customs Enforcement 负责联邦移民执法。对 2015 年 10 月至 2026 年 3 月约 160 万次 ICE 逮捕的分析发现，第二届 Trump 政府前 14 个月的日均逮捕数增加，但有刑事定罪记录者只占 34%。",
        "background": "ICE 可以在监狱等羁押场所接收已被其他执法机构拘留的人，也可以在工作场所、机场、学校附近及其他社区空间实施逮捕。“是否有刑事定罪”与“是否违反移民法”是不同分类；行政逮捕本身也不等于刑事定罪。",
        "happened": "University of Colorado Boulder 研究者在《PNAS》发布跨三届政府的逮捕记录分析。结果显示，执法规模扩大与对象构成、地点同时变化：第二届 Trump 政府前 14 个月日均逮捕达到 952 人，社区逮捕接近全部逮捕的一半。",
        "facts": [
          "研究分析约 160 万次 ICE 逮捕，时间覆盖 2015 年 10 月至 2026 年 3 月。",
          "第二届 Trump 政府前 14 个月日均逮捕 952 人，比 Biden 政府最后一年高 214%。",
          "同期有刑事定罪记录者占 34%。Biden 政府最后一年为 52%，Trump 第一任期第一年为 70%，Obama 政府最后一年为 79%。",
          "第二届 Trump 政府就职前，社区逮捕约占 17%。之后上升至接近一半。",
          "Denver 所在执法区在第二届任期初的总逮捕数上升 220%，社区逮捕上升 269%。",
          "研究比较的是行政记录中的逮捕、地点和既往定罪，不能据此判断每个被捕者的移民案件最终结果。"
        ],
        "sourceName": "Proceedings of the National Academy of Sciences／University of Colorado Boulder",
        "sourceUrl": "https://doi.org/10.1073/pnas.2618096123",
        "sourceDate": "论文发布 2026-07-27；大学解读 2026-07-31",
        "whyItMatters": "日均数量、前科比例和社区逮捕占比必须一起阅读：只公布总逮捕数，会遮住执法从羁押场所向日常空间移动，也会把行政违法与刑事定罪混为一谈。可以继续制作同一时期的三层图，把规模、对象构成和地点分开，再追踪不同执法区的案件结局与社区服务使用是否随之变化。"
      },
      {
        "category": "女性主义 × 遗传与健康 × 风险沟通",
        "image": "/story-images/brca-family-history.jpg",
        "imageAlt": "基因检测结果卡、家族关系树、筛查时间线和多条风险路径组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 BRCA 检测、家族史与乳腺癌风险沟通，并非真实患者、家族、基因序列、病历或医学影像",
        "title": "BRCA 阴性不一定回到平均风险，检测结果还需要家族史解释",
        "summary": "BRCA1 和 BRCA2 是与遗传性乳腺癌、卵巢癌风险有关的基因。Ontario 近 1.6 万名接受检测者的队列显示，普通“阴性”者到 80 岁的乳腺癌累计风险约为 26%，高于匹配一般人群的 12%；真正排除家族已知突变的“预测阴性”者接近一般水平。",
        "background": "“BRCA 阴性”可能指不同情形：有人没有检出已知致病变异，但家族中并没有一个可供对照的明确突变；另一些人则针对家族已经确认的突变检测并确定自己没有携带。两种结果的遗传解释并不相同。",
        "happened": "Cedars-Sinai 与加拿大研究团队在《JAMA Network Open》发布近人群基础队列研究。团队分别估算阳性、普通阴性、意义不明变异和预测阴性者的乳腺癌及卵巢癌累计风险，并检验一级亲属癌症史如何改变风险。",
        "facts": [
          "队列纳入 2007 至 2016 年在 Ontario 接受 BRCA1 或 BRCA2 检测的 15,986 人，并随访至 2024 年 9 月。",
          "乳腺癌分析包括 6,966 名受检者和 34,830 名按 1 比 5 匹配的一般人群。卵巢癌分析包括 13,276 名受检者和 66,380 名匹配者。",
          "到 80 岁，BRCA1 与 BRCA2 致病变异携带者的乳腺癌累计风险分别约为 62% 和 66%。一般人群为 12%。",
          "普通阴性者的乳腺癌累计风险约为 26%，意义不明变异者约为 31%。预测阴性者约为 13%。",
          "在致病变异携带者中，一级亲属的乳腺癌或卵巢癌数量越多，估计乳腺癌风险越高。",
          "这是基于行政数据库的观察性队列。受检者原本就因个人或家族史被转介，不能把普通阴性组的估计直接套用到所有女性。"
        ],
        "sourceName": "JAMA Network Open／Cedars-Sinai／BRCA 检测后癌症风险队列",
        "sourceUrl": "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2852275",
        "sourceDate": "论文在线发布 2026-07-30；doi:10.1001/jamanetworkopen.2026.26334",
        "whyItMatters": "普通阴性与预测阴性的差距说明，一张报告上的同一个“未检出”可能对应不同背景风险。把结果解释成简单的安全或危险，会让家族史、转介原因和筛查选择从对话中消失。可以继续把检测前概率、结果类别、家族关系与后续筛查画成决策路径，比较风险数字如何随证据改变，而不是只比较阳性和阴性。"
      },
      {
        "category": "社会科学 × 天文学 × 观测技术与证据",
        "image": "/story-images/betelgeuse-companion.jpg",
        "imageAlt": "红色超巨星的强光被仪器遮去，一颗微弱蓝白伴星在处理后的多层观测图中显现的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释参宿四伴星候选与遮光成像技术，并非 ESO 观测图、真实天体照片、数据产品或星空实景",
        "title": "为寻找系外行星设计的遮光技术，照出了参宿四旁的微弱伴星",
        "summary": "参宿四是 Orion 星座中肉眼可见的红超巨星，亮度会周期变化。ESO 的 Very Large Telescope 用 SPHERE 仪器直接记录到一颗微弱光源，为参宿四拥有伴星提供迄今最清楚的图像证据。",
        "background": "天文学家约一个世纪来怀疑参宿四的部分亮度变化可能与伴星有关，但主星极亮、周围物质复杂，微弱光源很难分离。SPHERE 原本主要为直接成像系外行星开发，会抑制亮星光并用多波段和后处理寻找邻近暗源。",
        "happened": "研究团队依据 2024 年轨道预测，在候选伴星与参宿四视角距离最大时用 VLT 观测，并在数月处理后得到两个独立算法均能识别的信号。论文把它称为 Betelgeuse B 候选体；要正式确认两星受引力束缚，仍需一年后在主星另一侧再次观测。",
        "facts": [
          "观测于 2024 年 12 月 6 日在 Chile 的 VLT 上完成，使用 SPHERE-ZIMPOL 极端自适应光学直接成像。",
          "PACO ASDI 与主成分分析两种处理方法分别以 6.1σ 和 5.1σ 检出同一候选源。",
          "候选源与参宿四的视角距离约为 52.32 毫角秒。",
          "若两颗星同龄，伴星估计为 2.6 至 3.1 个太阳质量的年轻主序星，高于此前约一个太阳质量的预测。",
          "SPHERE 与后处理技术主要为寻找系外行星开发，这次被用于一颗大质量演化恒星周围。",
          "团队计划约一年后在预测轨道另一侧复观。在第二历元之前，论文仍将它称为候选伴星。"
        ],
        "sourceName": "European Southern Observatory／Astronomy & Astrophysics／VLT-SPHERE 参宿四伴星研究",
        "sourceUrl": "https://www.eso.org/public/news/eso2611/",
        "sourceDate": "ESO 新闻稿与论文在线发布 2026-07-28",
        "whyItMatters": "这次结果不仅来自更大的望远镜，也来自等待正确轨道位置、抑制主星光和比较两套算法；证据链因此是时间、仪器与计算的共同产物。可以继续把原始亮星、遮光、差分处理、候选信号和下一次复观排成五层，清楚区分已经直接看见的光源与仍待确认的引力关系。"
      }
    ]
  },
  {
    "date": "2026-07-30",
    "displayDate": "2026.07.30",
    "issueNo": "17",
    "theme": "隐藏在日常系统里的生产、尺度与门槛",
    "intro": "本期从罗马陶器作坊、昆虫装置艺术、公共福利规则、钴矿供应链和妇科疾病诊断出发，追踪那些平时被成品、数字与制度界面遮住的生产过程、尺度变化和进入门槛。",
    "learningGoal": "学会把一件器物、一场展览、一项政策、一条供应链和一组健康统计拆回它们的形成条件，并区分被测量的结果与仍未被看见的过程。",
    "connection": "五则故事共同说明：我们最后看见的成品、收入、原料或诊断率，都不是自然出现的数字；它们由生产现场、观看尺度、资格规则、检测制度和医疗可及性共同塑造。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 考古学 × 生产与贸易史",
        "image": "/story-images/roman-pottery-kilns.jpg",
        "imageAlt": "罗马陶窑剖面、陶片、完好器皿、烧制失败的变形器物和抽象贸易路线构成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释罗马陶器的生产、残次品与贸易网络，并非考古现场、真实文物、遗址复原图或历史照片",
        "title": "残次陶器不是废物：它让一座罗马作坊重新显形",
        "summary": "University of Vienna 在奥地利 Burgenland 发掘一处罗马时期陶器生产中心；两座陶窑、完整器皿与大量烧制失败品显示，这里曾面向超出本地需求的市场生产日用陶器。",
        "background": "罗马帝国的日常生活依赖碗、盘、杯和储藏罐等普通陶器。考古学家判断一处遗址是否为作坊，不能只看出土了多少漂亮器物，还要寻找陶窑、工作坑、取土坑、废料坑和烧制失败品，因为这些材料能把消费地点与生产地点区分开。",
        "happened": "University of Vienna 的教学发掘在 Hannersdorf 的 Burg 村附近发现两座罗马时期陶窑和工作坑。完整器皿、变形残次品与进口陶器同时出现，使研究团队把这里判断为一处规模较大、与更广贸易网络相连的日用陶器生产中心。",
        "facts": [
          "2021 年道路施工首先发现罗马陶片和陶窑遗迹。后续地磁调查识别出陶窑、建筑基础和被整平的墓冢。",
          "本次发掘由 University of Vienna 的 Basema Hamarneh 带领，前两周就在距地表约 40 厘米处记录两座陶窑、工作坑和可能的取土及废料坑。",
          "研究团队估计田地下可能仍有约 100 座陶窑。当前发掘持续至 2026 年 8 月 7 日。",
          "遗物年代约为公元 1 世纪中期至 2 世纪中期，产品包括碗、盘、杯和储藏器。",
          "大量完整器皿与烧制失败品共同出现。研究团队据此判断生产规模较大，而不只是为附近家庭零星供货。",
          "遗址同时出土进口的 terra sigillata 精细陶器。最近的重要罗马聚落 Savaria 距此约 16 公里。"
        ],
        "sourceName": "University of Vienna／Burgenland 罗马陶窑发掘公告",
        "sourceUrl": "https://www.newswise.com/articles/unprecedented-excavation-of-roman-era-pottery-kilns-in-burgenland",
        "sourceDate": "发掘公告 2026-07-30",
        "whyItMatters": "两座陶窑说明这里能够生产，完整器皿与残次品则进一步显示生产种类和失败环节；进口器物又把本地作坊放回更大的交换网络。普通器物和废料因此比单件“精品”更能重建经济生活。可以继续把一件陶器从取土、成形、烧制、失败、运输到使用画成材料履历，比较博物馆通常展示了哪一段、删去了哪一段。",
      },
      {
        "category": "艺术人文 × 装置艺术 × 昆虫与生态尺度",
        "image": "/story-images/insect-installation.jpg",
        "imageAlt": "抽象昆虫标本、叶片与土壤层围绕微小观众轮廓构成沉浸式展厅的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Jennifer Angus 的昆虫尺度与生态主题，并非艺术家作品复制、真实标本陈列、展览现场或自然纪录照片",
        "title": "把观众缩到昆虫大小，展厅才看见草原的三万种邻居",
        "summary": "Jennifer Angus 是以干燥昆虫标本制作沉浸式装置的艺术家。Great Plains Art Museum 将让观众想象自己缩至昆虫大小，以重新观看草原生态中近三万种通常藏在叶下、土壤和草丛里的物种。",
        "background": "Jennifer Angus 在 University of Wisconsin–Madison 教授设计研究，长期以已经死亡和干燥处理的昆虫标本制作现场特定装置。她的作品并不是自然史陈列，而是借比例、重复和不适感改变人类观看昆虫的方式，并讨论昆虫在生态系统中的作用。",
        "happened": "Great Plains Art Museum 宣布《Jennifer Angus: Like a Moth to the Flame》将于 8 月 7 日开放。展览把观众置于被大型昆虫雕塑包围的环境，要求他们从昆虫尺度理解 Great Plains 中平时不易看见却维持生态关系的物种。",
        "facts": [
          "展览将于 2026 年 8 月 7 日至 12 月 19 日在 University of Nebraska–Lincoln 的 Great Plains Art Museum 展出。",
          "Angus 使用已经死亡和干燥处理的昆虫标本，创作专门适配展厅的沉浸式装置。",
          "Great Plains 约有 30,000 种昆虫，多数生活在叶片下、土壤中或草丛之间，不像鹤、野牛等大型动物那样容易进入地区形象。",
          "展览让观众想象自己缩到昆虫大小，并由周围的大型雕塑改变身体尺度。",
          "项目与 University of Nebraska 的 CAREMI 合作。该计划连接研究者、工程师、艺术家、教育者、学生与社区成员。",
          "配套 Arthropodium 2026 活动将把演化生物学、艺术、工程和食物研究放在同一场讨论中。"
        ],
        "sourceName": "Great Plains Art Museum／《Like a Moth to the Flame》展览公告",
        "sourceUrl": "https://news.unl.edu/article/great-plains-art-museum-to-open-immersive-exhibition-focused-on-insect-world",
        "sourceDate": "展览公告 2026-07-27；计划开幕 2026-08-07",
        "whyItMatters": "近三万种昆虫与少数明星动物之间的可见度差异，说明生态想象也受身体尺度和展示传统支配。装置通过让人感到自己很小，把“重要但看不见”变成空间经验；跨学科合作则把昆虫从装饰图案带回研究与材料创新。可以继续比较自然史柜、艺术装置和草地实地观察怎样为同一种昆虫分配尺寸、名称、情感与生态角色。",
      },
      {
        "category": "社会科学 × 经济与政策 × 公共福利门槛",
        "image": "/story-images/benefits-cliff.jpg",
        "imageAlt": "上升工资阶梯穿过突然断裂的福利桥，儿童照护、食品、医疗和工作时间以抽象图形出现的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释收入增加与福利骤减之间的制度落差，并非真实家庭、政府表格、工资单或统计图表",
        "title": "加薪以后家庭反而更穷：福利悬崖把进步写成损失",
        "summary": "“福利悬崖”指收入略增却触发食品、医疗或儿童照护补助大幅减少。Washington University 的全国调查显示，约 22% 的低薪福利参与者曾减少工时、拒绝加薪或压低储蓄，以免家庭总资源下降。",
        "background": "美国的 SNAP 食品补助、Medicaid 医疗保障和儿童照护补助都有收入或资产资格线。如果福利在越过门槛时突然取消，而工资只小幅增加，家庭实际可用资源可能减少；政策研究把这种断点称为“福利悬崖”。",
        "happened": "Washington University in St. Louis 的 Center for Social Development 发布全国代表性调查结果。研究估计约 400 万低薪福利参与者曾主动限制收入或储蓄以保留资格，其中最常见的做法是拒绝额外工时；报告主张用逐步退出替代突然中止。",
        "facts": [
          "样本来自收入低于联邦贫困线 250% 的美国劳动者。对四口之家而言，这一上限为 82,500 美元。",
          "在至少参加一项公共福利计划的低薪劳动者中，近 22% 报告曾采取行动保留资格，折算约为全国 400 万人。",
          "最常见的选择是拒绝额外工时。其他选择包括把储蓄压在资产上限以下、拒绝加薪或晋升，以及放弃工作机会。",
          "报告以 St. Louis 一位有两个孩子的单亲母亲为例：时薪从 31 美元升至 33 美元，每年多赚 4,160 美元，却可能失去近 15,000 美元儿童照护补助。",
          "报告称，限制收入者每年放弃数百小时工作和数千美元工资。这些数字来自受访者自报。",
          "在 SNAP 或 Medicaid 参与者中，因规则而不敢增加工作或储蓄者报告心理负担的可能性约为其他参与者的 2.5 倍。"
        ],
        "sourceName": "Washington University Center for Social Development／福利悬崖政策简报",
        "sourceUrl": "https://www.newswise.com/articles/public-benefits-cliffs-can-trap-low-wage-workers-study-finds",
        "sourceDate": "政策简报解读 2026-07-29",
        "whyItMatters": "22% 的参与者不是拒绝改善生活，而是在工资、儿童照护、食品和医疗的合计结果之间避险。4,160 美元加薪与近 15,000 美元福利损失的例子显示，只看税前工资会把合理选择误写成缺乏上进心。可以继续绘制一条“收入—家庭净资源”曲线，分别标出工时、福利退出、交通和照护成本，比较逐步退出规则能否消除断崖。",
      },
      {
        "category": "社会科学 × 地理与供应链 × 矿业监测基础设施",
        "image": "/story-images/cobalt-uranium-supply-chain.jpg",
        "imageAlt": "钴矿石、加工容器、跨境运输路线、检测节点和尾矿池组成的供应链编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释钴矿中的伴生铀、检测与尾矿问题，并非真实矿场、运输记录、卫星图、核材料或企业设施",
        "title": "一块电池金属携带了另一种未申报的矿物",
        "summary": "刚果民主共和国的铜矿带是全球主要钴产区，铀会自然附着在当地钴矿物上。研究者估计，2000 至 2024 年间有 2,000 至 5,000 吨天然铀随钴氢氧化物出口，而公开申报和监管只覆盖其中很小一部分。",
        "background": "钴是锂离子电池的重要原料，刚果民主共和国的 Copperbelt 是全球主要来源。当地钴矿石常与铀共生；矿石被加工成钴氢氧化物并跨境运往精炼厂时，伴生元素也可能一路进入产品、废水和尾矿。",
        "happened": "University of Wisconsin–Madison 与 Princeton University 的研究团队把全国矿化数据、矿级贸易记录和化学加工模型结合起来，估算钴供应链中未被单独核算的铀流向。研究同时指出出口产品和矿山尾矿两处监测缺口，但没有证据证明企业为了取得铀而故意安排出口。",
        "facts": [
          "模型估计 2000 至 2024 年间有 2,000 至 5,000 吨天然铀随钴氢氧化物离开刚果民主共和国。",
          "研究者估计，公开申报并纳入国际保障监督的数量少于总估计量的 10%。",
          "大部分相关钴产品运往中国。中国拥有约 95% 的全球钴精炼能力。",
          "钴氢氧化物被精炼为金属钴时必须去除铀，因此伴生铀不会在供应链后端自动消失。",
          "研究估计另有 1,000 至 4,000 吨铀以化学上较易迁移的形态进入尾矿，可能增加矿工和周边社区的环境与健康风险。",
          "团队建议开展全国矿业审计、系统检测钴氢氧化物货物、监测工人辐射暴露，并在刚果民主共和国境内分离伴生铀。"
        ],
        "sourceName": "University of Wisconsin–Madison／Princeton University／钴供应链伴生铀研究",
        "sourceUrl": "https://www.newswise.com/articles/study-reveals-massive-quantities-of-undeclared-uranium-are-exported-from-the-drc",
        "sourceDate": "研究公告 2026-07-30",
        "whyItMatters": "出口估计量、不到 10% 的公开申报比例和尾矿估计共同表明，供应链只记录目标金属会漏掉伴生物质的安全与环境成本。研究提供的是基于地质、贸易和化学模型的区间估计，并未证明故意走私。可以继续从一块电池反向追踪矿石、钴氢氧化物、精炼、副产品和尾矿，在每个节点标出谁检测、谁申报、谁承担暴露风险。",
      },
      {
        "category": "女性主义 × 健康与诊断 × 医疗可及性",
        "image": "/story-images/gynecological-diagnosis-gap.jpg",
        "imageAlt": "三条妇科诊断路径、医疗保险门槛、收入阶梯和生育服务节点组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释子宫内膜异位症、多囊卵巢综合征和子宫肌瘤的诊断差异，并非真实患者、器官影像、病历界面或官方统计图",
        "title": "诊断率既在测疾病，也在测谁更容易被系统看见",
        "summary": "CDC 的全国报告比较子宫内膜异位症、多囊卵巢综合征和子宫肌瘤的既往诊断。收入、保险与种族群体间的差异并不只代表疾病分布，也可能反映症状被识别和获得检查的机会。",
        "background": "子宫内膜异位症是类似子宫内膜的组织生长在子宫外；多囊卵巢综合征与激素和代谢失衡有关；子宫肌瘤是子宫内或子宫壁上的非癌性生长。这三类常见妇科疾病都可能引起疼痛、生育困难和其他长期症状，但确诊通常需要患者进入医疗系统并获得针对性检查。",
        "happened": "美国 National Center for Health Statistics 首次以同一份全国调查并列报告三类疾病的诊断率及其与生育问题、服务使用的关系。结果显示三类疾病在不同种族、收入和保险群体中的已诊断比例并不相同；报告强调这些是双变量关联，不能把诊断差异直接当成疾病真实患病率差异。",
        "facts": [
          "报告使用 2022 至 2023 年 National Survey of Family Growth 中 4,856 名 20 至 49 岁女性受访者的数据，估计可代表美国同年龄家庭人口。",
          "曾被诊断为子宫内膜异位症者占 6.2%，多囊卵巢综合征占 8.7%，子宫肌瘤占 7.8%。",
          "子宫内膜异位症诊断率在非西班牙裔白人中为 8.1%。最高收入组为 7.1%，最低收入组为 4.4%。",
          "多囊卵巢综合征诊断率在非西班牙裔黑人中最低，为 4.4%。子宫肌瘤诊断率在同一群体中最高，为 12.5%。",
          "子宫肌瘤诊断率在私人保险者中为 8.8%，未保险者为 5.2%。较低诊断率不能据此解释为较低疾病负担。",
          "有诊断者报告当前生育问题的比例分别为 33.0%、45.2% 和 25.4%。对应的无诊断者比例为 18.6%、17.1% 和 19.0%。",
          "有三类诊断者曾使用生育服务的比例分别为 30.7%、34.5% 和 31.4%。无对应诊断者分别为 12.7%、11.7% 和 12.3%。"
        ],
        "sourceName": "CDC National Center for Health Statistics／三类妇科疾病全国统计",
        "sourceUrl": "https://www.cdc.gov/nchs/data/hestat/hestat121.htm",
        "sourceDate": "NCHS Health E-Stat 121，2026 年 7 月",
        "whyItMatters": "私人保险者的肌瘤诊断率高于未保险者，最高收入组的内膜异位症诊断率也高于最低收入组；这些对照提示“被诊断”同时包含疾病与医疗可及性。黑人女性的肌瘤诊断率最高、PCOS 诊断率却最低，更不能用单一生物解释概括。可以继续把症状、初诊、转诊、影像或手术、确诊与生育服务画成路径，比较不同群体最容易在哪一站失去记录。",
      }
    ]
  },
  {
    "date": "2026-07-29",
    "displayDate": "2026.07.29",
    "issueNo": "16",
    "theme": "经验如何成为公共证据：档案、信任、数据与照护",
    "intro": "本期从时装档案、亲密肖像、癌症研究信任、跨国幸福数据和产后哺乳支持出发，说明私人经验只有经过保存、协商、测量与照护，才会进入公共知识。",
    "learningGoal": "理解档案、研究设计和病房记录不是经验的被动容器，而是决定哪些人和结果能够被看见的基础设施。",
    "connection": "五则故事都追问同一件事：一段经验由谁保存、怎样记录、以什么关系进入公共讨论，以及制度遗漏会让谁继续不可见。",
    "uniqueCount": 5,
    "topics": [
      "艺术人文",
      "社会科学",
      "女性主义"
    ],
    "stories": [
      {
        "category": "艺术人文 × 时装史 × 档案与跨国文化",
        "image": "/story-images/sarmi-fashion-archive.jpg",
        "imageAlt": "佛罗伦萨与纽约的抽象城市轮廓、服装纸样、织物色块和档案盒由线索连接的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Ferdinando Sarmi 的跨国职业与分散档案，并非真实礼服、名人肖像、展览现场或历史照片",
        "title": "佛罗伦萨首个 Sarmi 专展把两座城市的时装档案重新拼合",
        "background": "Ferdinando Sarmi 是一位出生于意大利 Ravenna、后来在 New York 经营高级时装公司的设计师。他在 1950 年代进入美国时装业，曾为电影明星与美国第一夫人制作礼服。Sarmi 的衣物和职业文件后来分别留在 New York 与 Florence，使他的工作长期缺少一套完整的历史叙述。",
        "summary": "Palazzo Pitti 与 CUNY 的研究团队把 Ferdinando Sarmi 分散在 Florence 和 New York 的礼服、文件与口述史重新放在一起，补写他从意大利时装展示进入第五大道的职业路径。",
        "happened": "CUNY Graduate Center 于 7 月 28 日公布研究与教学团队参与成果，回应正在 Florence 展出的首个 Sarmi 专展。研究者让 New York 保存的礼服与 Sarmi 家族捐给 Palazzo Pitti 的档案重新相遇，并制作纪录片，补写他从 1951 年 Florence 时装展示到 1958 年创立 Sarmi New York 的职业路径。",
        "facts": [
          "《Ferdinando Sarmi New York — A Journey in Fashion From Florence to Fifth Avenue》是首个完全以 Sarmi 为主题的展览，展期为 2026 年 6 月 18 日至 12 月 31 日。",
          "展览把 New York 保存的礼服、Palazzo Pitti 的 Fondo Sarmi 档案和 1950 至 1960 年代配饰放在一起。",
          "展览覆盖 Sarmi 从 1950 年代初到 1970 年代初的职业生涯。",
          "Sarmi 接受过法律训练。1951 年，他的设计进入 Giovanni Battista Giorgini 在 Florence 组织的时装展示。",
          "Elizabeth Arden 邀请 Sarmi 前往 New York 主持服装线。Sarmi 于 1958 年创立 Sarmi New York。",
          "配套纪录片于 2026 年 6 月 18 日首映。展览由 Vanessa Gavioli 与 Eugenia Paulicelli 共同策划。"
        ],
        "sourceName": "Uffizi Galleries／CUNY Graduate Center",
        "sourceUrl": "https://www.uffizi.it/en/events/il-genio-di-sarmi-nuova-mostra-al-museo-del-costume",
        "sourceDate": "展览开幕 2026-06-18。研究项目更新 2026-07-28",
        "whyItMatters": "Sarmi 的礼服、纸样和商业文件分散在两座城市时，他的设计、生产与传播关系也被拆开了。把这些材料重新编目并互相解释，说明时装史上的“被遗忘”可能来自档案地理和研究资源，而不只是作品质量。继续追踪这件事，可以为一件礼服制作从草图、裁缝和客户到馆藏、杂志与口述史的双城档案地图。",
      },
      {
        "category": "艺术人文 × 女性主义 × 绘画、亲密关系与观看",
        "image": "/story-images/jenna-gribbon-entwined.jpg",
        "imageAlt": "两层半透明人物轮廓、画架、交叠凝视线与粉蓝色笔触构成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Jenna Gribbon 对亲密、凝视与共同身份的研究，并非艺术家作品复制、真实人物肖像、裸体图像或展览现场",
        "title": "Rose Art Museum 将举办 Jenna Gribbon 首个大型博物馆个展",
        "background": "Jenna Gribbon 是一位当代画家，长期把伴侣、朋友和自己纳入绘画。她经常描绘妻子 Mackenzie Scott；Scott 也是以 Torres 为艺名创作的音乐人。Gribbon 的作品关心的不只是人物外貌，也包括画家、被画者与观看者之间的亲密、同意和权力。",
        "summary": "《Jenna Gribbon: Entwined》将以四十余幅作品回看二十多年的创作，并通过三件新委托作品讨论亲密关系怎样改变肖像画中的凝视与共同身份。",
        "happened": "Brandeis University 于 7 月 28 日介绍将在 Rose Art Museum 举办的《Jenna Gribbon: Entwined》。展览从 2001 年的实验性绘画延伸到三件新委托作品，结尾肖像把 Gribbon 自己的面孔投射在 Mackenzie Scott 的面部之上，使“谁在看谁”成为作品内容。",
        "facts": [
          "《Jenna Gribbon: Entwined》将于 2026 年 8 月 19 日至 2027 年 1 月 3 日在 Rose Art Museum 展出。",
          "这是 Gribbon 首个大型博物馆个展，占用约 4,000 平方英尺的 Lois Foster Wing。",
          "展览汇集 40 余幅 2001 年至今的绘画。",
          "展览包含 3 件为此次个展委托的新作。",
          "Gribbon 经常描绘妻子 Mackenzie Scott。新委托作品把画家自己的面孔投射到 Scott 的肖像之上。",
          "展览由 Chad Sirois 与 Gannit Ankori 共同策划。免费公开开幕活动定于 2026 年 9 月 9 日。"
        ],
        "sourceName": "Rose Art Museum／Brandeis University",
        "sourceUrl": "https://www.brandeis.edu/rose/exhibitions/2026/jenna-gribbon.html",
        "sourceDate": "展览新闻 2026-07-28。计划开幕 2026-08-19",
        "whyItMatters": "四十余幅长期合作的肖像显示，被画者不是等待艺术家描绘的静止对象，而会通过姿势、公开范围和关系历史参与画面。亲密既提供接近身体与日常的机会，也要求作品说明同意与自我投射怎样被协商。继续追踪时，可以把同一场景分别从画家、被画者和未来观众的视角重画，比较三方能够决定什么。",
      },
      {
        "category": "社会科学 × 医疗社会学 × 信任与研究参与",
        "image": "/story-images/cancer-research-trust.jpg",
        "imageAlt": "社区圆桌、研究同意书、桥梁和保护盾组成的蓝绿与暖橙色编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释癌症研究参与中的制度信任，并非真实患者、医生、社区会议、临床试验或研究图表",
        "title": "南卡调查发现：对研究者信任越低，癌症研究参与意愿越低",
        "background": "癌症研究需要志愿者参加临床试验、接受筛查或遗传检测，也可能需要他们捐赠生物样本或允许研究者使用医疗记录。招募不足会使研究进度变慢，也会让试验样本不能代表实际患者。医学研究信任既包括个人对研究者诚实程度的判断，也涉及风险说明、资料保护和历史经验。",
        "summary": "MUSC 对 South Carolina 1,780 名成年人调查发现，中等或较低的医学研究信任与六类癌症研究中较低的参与意愿稳定相关。",
        "happened": "MUSC Hollings Cancer Center 于 7 月 28 日发布研究解读。不到三分之一受访者愿意参加临床试验，不到一半愿意参加遗传检测、癌症筛查或社区研究；中低信任者在所有研究类型上的参与意愿都低于高信任者。",
        "facts": [
          "研究调查 1,780 名 South Carolina 成年人，样本覆盖城市与乡村，并纳入不同年龄、教育和种族背景。",
          "信任以 12 个问题测量，内容包括研究者的诚实、沟通以及保护参与者的承诺。",
          "参与意愿被分别询问，范围包括临床试验、遗传检测、癌症筛查、社区研究、生物样本捐赠和医疗记录共享。",
          "不到三分之一受访者愿意参加临床试验。",
          "不到一半受访者愿意参加遗传检测、癌症筛查或社区研究。",
          "中等或较低信任与所有研究类型中较低的参与意愿稳定相关。研究为横截面调查，不能由此确定因果方向。"
        ],
        "sourceName": "MUSC Hollings Cancer Center／The Oncologist",
        "sourceUrl": "https://hollingscancercenter.musc.edu/content-hub/News/2026/07/28/trust-may-be-the-missing-ingredient-in-cancer-research-participation",
        "sourceDate": "研究解读 2026-07-28。论文在线发表 2026-04-30",
        "whyItMatters": "六类研究中都出现同方向的关联，说明招募问题不能只用公众是否“相信科学”解释。研究机构怎样说明风险、保护资料、回应社区历史并反馈结果，也会影响邀请是否可信。继续追踪时，可以把一次临床试验邀请拆成提问、风险说明、资料保管、时间成本、结果反馈和申诉六个节点，检查机构实际承担了哪些责任。",
      },
      {
        "category": "社会科学 × 跨文化心理学 × 开放数据基础设施",
        "image": "/story-images/global-flourishing-data.jpg",
        "imageAlt": "二十二个国家与一个地区的抽象节点、两轮时间波纹和开放数据门廊构成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Global Flourishing Study 的跨国纵向数据与开放获取，并非真实参与者、官方地图、调查界面或研究图表",
        "title": "Global Flourishing Study 向公众开放前两轮约二十万人数据",
        "background": "Global Flourishing Study 是一项跨文化纵向调查，由 Baylor University、Harvard University 与 Gallup 等机构合作。项目在 22 个国家和一个地区长期追踪约 200,000 人，并从健康、幸福、意义、关系、品格和物质稳定六个维度理解人们怎样生活得好。",
        "summary": "项目团队取消前两轮数据的一般预注册门槛，使研究者、记者和公众能够直接下载个体层面的跨国纵向数据与配套文档。",
        "happened": "Global Flourishing Study 团队于 7 月 29 日宣布，前两轮数据现在可通过 Center for Open Science 直接下载。开放资料已经支持九十余篇同行评审论文；第三轮仍需预注册，少数敏感变量仍要求机构伦理审查。",
        "facts": [
          "公开数据包含 Global Flourishing Study 的第 1 与第 2 轮，约有 200,000 名参与者。",
          "调查覆盖 22 个国家和一个地区。",
          "调查以纵向设计追踪同一批人，并覆盖 6 个繁荣维度。",
          "一般使用现在不再要求预注册。少数敏感变量仍需机构伦理审查。",
          "第 3 轮数据仍通过预注册申请获取。第 4 轮数据收集正在准备。",
          "已有研究报告年轻成年人常呈现较低的繁荣水平。国家财富与意义感呈负相关，宗教参与与较高繁荣相关。这些都是跨国统计关联，不等于单一因果解释。"
        ],
        "sourceName": "Global Flourishing Study／Baylor University／Harvard University／Gallup",
        "sourceUrl": "https://globalflourishingstudy.com/article/the-data-is-available-waves-1-and-2-of-the-global-flourishing-study-are-now-free-to-the-public/",
        "sourceDate": "数据公开公告 2026-07-29",
        "whyItMatters": "前两轮个体数据与文档同时开放后，更多人能够复核既有结论，并提出原团队没有预设的问题。不过跨文化“幸福”不是天然可比的统一数字，翻译、抽样、权重和生活条件都会改变同一回答的含义。继续追踪时，可以沿着一个变量画出问卷原文、翻译、国家样本、加权、图表与媒体标题的完整传播链。",
      },
      {
        "category": "女性主义 × 健康与照护 × 产后病房与服务公平",
        "image": "/story-images/lactation-support-equity.jpg",
        "imageAlt": "产后病房时间轴、每八小时照护节点、婴儿喂养路径与不同支持密度构成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释产后住院期间的哺乳支持与照护差异，并非真实产妇、婴儿、医院界面或研究数据",
        "title": "2.2 万人病历研究发现：住院哺乳支持越充分，纯母乳概率越高",
        "background": "哺乳支持是产后住院照护的一部分，包括帮助婴儿正确含乳、观察喂养过程和处理疼痛等问题。患者希望提供母乳，并不代表病房条件会自动让这个计划实现。护理人力、语言服务、婴儿健康和产妇恢复状况都会影响实际喂养过程。",
        "summary": "University of Minnesota 团队分析 22,857 名原本计划提供母乳者的电子病历，发现记录到的支持越接近或超过建议量，住院期间纯母乳喂养的概率越高。",
        "happened": "研究把每个八小时护理班次中的哺乳支持次数与建议次数相比。完全没有记录支持时，模型估计纯母乳喂养概率为 49%；达到最低建议量时为 78%；支持比达到两倍时为 91%，此后增益趋缓。",
        "facts": [
          "研究纳入 22,857 对产妇与婴儿，均计划提供母乳。",
          "分娩发生在 2018 至 2022 年的一个 Minnesota 学术医疗网络。",
          "91.1% 的患者原本计划纯母乳喂养，8.9% 计划母乳与配方奶混合。",
          "住院期间实际纯母乳喂养者占 71.0%。",
          "每八小时班次达到一次建议支持时，调整后的纯母乳喂养概率为 78%。完全没有支持记录时为 49%，支持比达到两倍时为 91%。",
          "需要翻译者获得低于建议支持量的调整后相对风险为 1.52。使用公共保险者为 1.25。",
          "相较白人患者，美洲原住民或 Alaska Native、Asian／Native Hawaiian／Other Pacific Islander、Black 患者获得低于建议支持量的调整后相对风险分别为 1.94、2.35 和 1.83。"
        ],
        "sourceName": "JAMA Network Open／University of Minnesota",
        "sourceUrl": "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2852073",
        "sourceDate": "论文在线发表 2026-07-24。2026-07-29 核验",
        "whyItMatters": "没有支持、达到建议量和两倍支持对应的估计概率从 49% 升至 78% 和 91%，说明喂养结果必须放回护理人力、语言服务和病房流程中理解。研究是一个医疗网络的观察性数据，显示关联而不是每一次帮助的直接因果效果。继续追踪时，可以把产后两天画成六个护理班次，检查支持、翻译、疼痛与临床状况怎样共同改变喂养计划。",
      }
    ]
  },
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
        "title": "墨尔本回顾 Brassaï：他如何把巴黎夜晚变成摄影经典",
        "background": "Brassaï（1899—1984），本名 Gyula Halász，是一位出生于当时奥匈帝国、后来长期在法国工作的摄影师。他 1924 年迁居巴黎，约在 1930 年开始摄影，1933 年出版的摄影集《Paris de nuit》（《夜巴黎》）令他成名。Brassaï 常在夜间拍摄桥梁、雾、雨、湿路上的灯光，以及咖啡馆、舞厅和街头人物。这些黑白照片把巴黎夜生活变成了现代摄影的重要题材。",
        "summary": "Heide Museum of Modern Art 以 150 余张原版照片回看 Brassaï：所谓“秘密巴黎”并非城市自动显影，而是夜行、取景、长曝光、印相和出版共同制造的观看方式。",
        "happened": "《Brassaï: Secret Paris》于 7 月 25 日在 Melbourne 开幕。展览以 1930 年代的巴黎夜景和城市人物为中心，同时纳入 Brassaï 与 Picasso 等先锋艺术家的交往、超现实主义实验及其持续拍摄的墙面涂鸦。",
        "facts": [
          "展期为 2026 年 7 月 25 日至 11 月 15 日，地点是 Melbourne 的 Heide Main Galleries。",
          "展览与 Brassaï 遗产管理方合作，汇集 150 余张原版照片，是其作品在澳大利亚迄今最全面的回顾之一。",
          "核心材料包括巴黎及其夜间人物、与 Picasso 等巴黎先锋艺术家的关系、超现实主义实验和墙面涂鸦摄影。",
          "Brassaï 出生于匈牙利，后来在法国工作。",
          "展览的策展人为 Emmanuelle de l’Ecotais、Lesley Harding 和 Philippe Ribeyrolles。"
        ],
        "sourceName": "Heide Museum of Modern Art",
        "sourceUrl": "https://www.heide.com.au/exhibitions/brassai/",
        "sourceDate": "展览开幕 2026-07-25。2026-07-28 核验",
        "whyItMatters": "这 150 余张照片不只记录巴黎夜晚，也显示 Brassaï 主动选择了咖啡馆、舞厅、街头人物和墙面涂鸦等题材。取景地点、长曝光和暗房印相共同塑造了观众今天认识的“夜巴黎”，所以这些照片既是城市记录，也是摄影师建立的一种观看方式。",
      },
      {
        "category": "社会科学 × 天文学 × 科研经费与公共基础设施",
        "image": "/story-images/jodrell-bank-funding.jpg",
        "imageAlt": "大型射电碟形天线、七个联网台站、信号波纹与经费时间线构成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 Jodrell Bank、e-MERLIN 与科研资金链，并非天文台实景、观测数据、预算文件或机构标识",
        "title": "英国停止续资 e-MERLIN，七台射电望远镜可能在 2028 年停运",
        "background": "e-MERLIN 是英国的一套射电望远镜网络，由分布在不同地点的 7 台望远镜共同接收来自宇宙的无线电信号。多台设备同步工作后，能够得到比单台望远镜更清晰的结果。网络的核心位于 Jodrell Bank Observatory，其中最醒目的设备是 1957 年建成的 Lovell Telescope。",
        "summary": "英国 STFC 决定不再续资以 Jodrell Bank 为核心的 e-MERLIN。现有经费将在 2028 年 3 月结束，若找不到替代支持，这套国家射电天文网络将停止观测。",
        "happened": "University of Manchester 于 7 月 27 日确认不续资决定，并表示将与政府、公共机构、产业和慈善资金方寻找出路。Jodrell Bank 游客中心仍开放，但科研网络与地标性的 Lovell Telescope 面临不同于场馆运营的资金危机。",
        "facts": [
          "e-MERLIN 是由 7 台射电望远镜组成的英国国家射电天文能力，核心设在 Jodrell Bank Observatory。",
          "STFC 决定不再续资，现有资金将在 2028 年 3 月结束。没有替代支持时观测将停止。",
          "Lovell Telescope 于 1957 年完成，当时是世界最大的射电望远镜，也是唯一能追踪 Sputnik 的设备。",
          "Jodrell Bank 同时是 UNESCO 世界遗产地，每年吸引超过 100,000 名访客。",
          "游客中心的运营与此次科研经费并非同一资金线。",
          "STFC 表示到 2030 年需节省 1.62 亿英镑。",
          "同期英国参与 Rubin Observatory 和 La Palma 观测的投入各削减 20%，BISON 太阳观测网络削减 40%。"
        ],
        "sourceName": "University of Manchester／The Guardian",
        "sourceUrl": "https://www.staffnet.manchester.ac.uk/news/display/?id=34217",
        "sourceDate": "大学回应 2026-07-27。资金影响分析 2026-07-28",
        "whyItMatters": "e-MERLIN 的清晰度来自七台望远镜同步工作，而不是某一面巨大碟形天线单独完成。现有经费结束后，受影响的是观测、工程维护、数据处理和人员训练组成的整条链条。因此科研网络停运与游客中心是否开放，是两件不同的事。",
      },
      {
        "category": "社会科学 × 心理学 × 梦境与计算语言研究",
        "image": "/story-images/dream-language-model.jpg",
        "imageAlt": "梦境碎片、词语语义网络、睡眠波形与清醒思维轨迹叠合的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释梦境报告、清醒经验与自然语言处理，并非真实参与者、梦境再现、脑部扫描或研究图表",
        "title": "一项 3,700 份文本研究发现：梦会重组白天的经验",
        "background": "梦境研究过去常依赖少量访谈或研究者逐篇阅读记录。这项研究改用自然语言处理，也就是让计算机比较大量文本中的词义和结构，同时把参与者写下的梦与白天经历放在一起分析。研究者想知道，梦是在重复现实，还是会把现实中的人物、地点和感受重新组合。",
        "summary": "研究者以自然语言处理比较 3,700 余份梦境与清醒经验报告，发现梦的内容同时受到心智游移、睡眠质量、个人对梦的重视和 COVID-19 封锁等共同经历影响。",
        "happened": "一项对 287 名成年人进行的研究发现，梦不会原样重播白天的生活，而会保留熟悉的人物、地点和感受，再把这些材料重新组合成新的场景。参与者的心智游移、睡眠质量、对梦的重视程度和 COVID-19 封锁经历，都与梦境报告的形式有关。",
        "facts": [
          "研究分析 3,700 余份梦境与清醒经验描述，参与者共 287 人，年龄为 18 至 70 岁。",
          "参与者连续两周记录梦与日常经验，研究者同时收集睡眠习惯、人格、认知和心理特征。",
          "自然语言处理用于测量报告中的语义结构，其结果与独立人工评估者达到相近准确度。",
          "心智游移较多者报告的梦更碎片化、场景切换更快。更重视梦者的报告通常更具感官细节，但研究只显示关联、不能证明因果。",
          "COVID-19 封锁期报告包含更强情绪，以及更多限制、屏障和禁闭主题。封锁结束后，这些模式逐渐减弱。",
          "论文发表于《Communications Psychology》，DOI 为 10.1038/s44271-026-00447-2。"
        ],
        "sourceName": "IMT School for Advanced Studies Lucca／Communications Psychology",
        "sourceUrl": "https://doi.org/10.1038/s44271-026-00447-2",
        "sourceDate": "研究报道 2026-07-27",
        "whyItMatters": "梦境记录与白天经历之间既有重合，也有明显的重新组合，因此梦更像是在加工近期经验，而不是把现实完整重播一遍。研究还发现，不同人的心智游移和睡眠状况会改变梦境报告的形式，这意味着解释一个梦时，不能脱离做梦者当时的生活与心理状态。",
      },
      {
        "category": "社会科学 × 社会心理学 × 政治极化与群体边界",
        "image": "/story-images/moderate-outgroup-effect.jpg",
        "imageAlt": "两组相对的政治阵营把中央的桥与中间人物同时推向对面的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释“温和派作为外群体”效应，并非真实选民、政党宣传、实验界面或研究数据",
        "title": "五项实验发现：政治两端都可能把温和派当成对手",
        "background": "政治立场通常被画成一条从左到右的直线，温和派位于中间。但现实中的人不一定把中间立场看成中立。当一个议题被视为严重威胁或道德问题时，支持一端的人可能认为“不完全支持我”就等于支持对手。这组心理学实验专门检验这种判断。",
        "summary": "五项在线实验发现，政治立场较强、感到对方威胁并把议题道德化的人，更容易把温和政策或平均支持两方者归入“对面”。",
        "happened": "超过 3,200 名美国参与者评估堕胎政策、以色列与巴勒斯坦议题，以及 2024 年美国总统选举中的假想立场。即使一项政策在形式上位于中间，两端参与者也常认为它在帮助对手。",
        "facts": [
          "研究包含 5 项在线实验，共有超过 3,200 名美国参与者。",
          "议题包括第一孕期堕胎政策、以色列与巴勒斯坦，以及 Donald Trump 与 Kamala Harris 在 2024 年总统选举中的选择。",
          "一项实验在 2024 年大选前 5 天进行，参与者评估一名同等支持 Trump 与 Harris 的假想人物。",
          "立场越极端、越感到对方带来威胁、越把议题视为道德问题，“温和派作为外群体”的效应越强。",
          "论文《Whoever Is Not With Me Is Against Me》于 2026 年 7 月 27 日在线发表于 Journal of Experimental Psychology: General。"
        ],
        "sourceName": "American Psychological Association／Journal of Experimental Psychology: General",
        "sourceUrl": "https://www.apa.org/pubs/journals/releases/xge-xge0001957.pdf",
        "sourceDate": "2026-07-27",
        "whyItMatters": "五项实验都发现，立场越极端、越把议题看成道德问题的人，越容易把温和派理解为在帮助对手。这说明政治极化不仅让两端互相敌视，也会压缩中间立场的空间，使妥协和不选边都被误读为背叛。",
      },
      {
        "category": "女性主义 × 性别 × 警务裁量与数据治理",
        "image": "/story-images/trans-police-stops.jpg",
        "imageAlt": "停车线、警务决策节点、主观性别分类与不同概率路径叠合的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释警员的性别感知如何进入搜查与逮捕数据，并非真实警务现场、跨性别者肖像、执法记录或统计图表",
        "title": "加州 460 万次拦停数据显示：警员的性别判断会影响搜查与逮捕",
        "background": "California Racial and Identity Profiling Act 是加州用于记录警察拦停情况的制度。警员每次拦停车辆或行人后，都要记录自己对当事人种族、年龄和性别等身份的判断。这里的性别记录不是当事人的自我认同，而是警员根据外表作出的主观判断。",
        "summary": "UCLA Williams Institute 分析加州 460 万次成年人警察拦停：被警员感知为跨性别者的人有 24%遭搜查、约 20%被逮捕，明显高于被感知为顺性别男性者的 14%和 10%。",
        "happened": "UCLA Williams Institute 分析约 460 万次加州警察拦停后发现，被警员感知为跨性别者的人遭搜查和逮捕的比例，都高于被感知为顺性别男性或女性者。被感知为跨性别者约有 24% 遭搜查、约 20% 被逮捕。被感知为顺性别男性者相应比例约为 14% 和 10%。",
        "facts": [
          "研究使用 California Racial and Identity Profiling Act 的 2023 年数据，并控制年龄与种族，再比较不同性别判断下的搜查、违禁品发现和逮捕结果。",
          "数据包含加州约 460 万次涉及成年人的车辆与行人拦停，其中 17,916 次涉及被警员感知为跨性别或性别不循规者。",
          "被感知为跨性别男性或女性者有 24% 遭搜查。被感知为顺性别男性者为 14%、顺性别女性者为 8%、性别不循规者为 11%。",
          "2023 年共记录 576,735 次搜查。被感知为跨性别、性别不循规或顺性别男性者的违禁品发现率均约为 27%，顺性别女性者为 26%。",
          "被感知为跨性别男性者的逮捕率为 19%、跨性别女性者为 20%。被感知为顺性别男性者为 10%、顺性别女性者为 7%、性别不循规者为 9%。"
        ],
        "sourceName": "Williams Institute at UCLA School of Law／University of California, Irvine",
        "sourceUrl": "https://williamsinstitute.law.ucla.edu/publications/ca-police-gender-stops/",
        "sourceDate": "2026-07-28",
        "whyItMatters": "被感知为跨性别者的人遭搜查和逮捕的比例更高，但搜查后发现违禁品的比例，与被感知为顺性别男性者几乎相同。也就是说，更频繁的搜查并没有对应更高的查获率。评估警务差异时不能只统计搜查次数，还要追问警员怎样判断性别，以及这种判断是否让某些群体承担了更多执法干预。",
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
        "background": "Andy Goldsworthy 是一位英国艺术家，以直接使用石头、树叶、冰、泥土等自然材料创作而闻名。他的作品经常会随天气和时间变化。《Red Flags》是一件由 50 面布旗组成的装置作品，旗帜的红色来自美国 50 个州分别采集的土壤。",
        "summary": "英国艺术家 Andy Goldsworthy 收集美国五十个州的土，把它们分别制成颜料，染在五十面布旗上。",
        "happened": "2026 年 7 月，FOR-SITE Foundation 在旧金山 Fort Mason 展出 Andy Goldsworthy 的《Red Flags》。这件作品由五十面红旗组成，每面旗帜都用美国一个州的土染色。这是作品第一次在美国西海岸展出。",
        "facts": [
          "展览于 2026 年 7 月 1 日至 30 日在 San Francisco 的 Fort Mason Gateway Pavilion 举行，免费开放。",
          "装置由 50 面旗帜组成，每面尺寸为 5×8 英尺。",
          "每面旗帜都使用一个州采集的土染色，旗面上没有州徽或其他图案。",
          "作品最初于 2020 年在纽约 Rockefeller Center 展出。2026 年的旧金山展览是它的美国西海岸首展。",
          "2026 年正好是 1776 年《独立宣言》通过 250 周年，主办方因此把作品放进关于美国土地与国家历史的讨论中。"
        ],
        "sourceName": "FOR-SITE Foundation",
        "sourceUrl": "https://www.for-site.org/andy-goldsworthy-red-flags",
        "sourceDate": "展期 2026-07-01 至 2026-07-30。2026-07-27 核验",
        "whyItMatters": "普通旗帜靠颜色和图案代表一个国家或地区。这些旗帜却直接使用真实土壤。五十面旗看起来都呈红色，但细看会发现颜色和颗粒并不完全相同。作品让人从“国家符号”重新注意到组成国家的具体土地。",
      },
      {
        "category": "艺术人文 × 女性主义 × 艺术、建筑与批评史",
        "image": "/story-images/okeeffe-ghost-ranch.jpg",
        "imageAlt": "沙岩地貌、房屋平面、窗框与工作台叠合成创作环境的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于阐释 Georgia O’Keeffe、Ghost Ranch 与创作环境，并非 O’Keeffe 作品、人物肖像、住宅照片或展览视觉",
        "title": "新展览把 Ghost Ranch 重新放回 O’Keeffe 的创作方法中",
        "background": "Georgia O’Keeffe（1887—1986）是美国现代主义画家，以放大的花朵、动物骨骼和新墨西哥州沙漠景观著称。Ghost Ranch 是新墨西哥州北部的一片庄园，O’Keeffe 从 1934 年起长期在那里生活和工作。当地的山崖、荒漠、骨骼和她日常步行看到的景物，反复进入她的绘画。",
        "summary": "Courtauld 将以 Georgia O’Keeffe 的 Ghost Ranch 住宅与周边景观组织新展，把沙漠从传记布景改写为影响取景、采集、尺度和系列创作的工作条件。",
        "happened": "7 月 27 日公布的《Georgia O’Keeffe: Ghost Ranch》计划于 2027 年 10 月开幕。展览将呈现近二十余件相关作品，其中 18 件从未在英国展出，并把室内陈设、动物骨骼、步行与附近地貌纳入作品理解。",
        "facts": [
          "《Georgia O’Keeffe: Ghost Ranch》计划于 2027 年 10 月在 London 的 Courtauld Gallery 开幕。",
          "展览标题公布时称将有 18 件作品首次在英国展出。报道同时指出全部展品接近两打。",
          "Ghost Ranch 位于 New Mexico 北部一片约 21,000 英亩的庄园中，O’Keeffe 于 1934 年开始在此居住。",
          "她在 New Mexico 另有一处 Abiquiú 住宅，位于牧场以南约 16 英里。",
          "约两打拟展作品中，此前只有 6 件曾在英国展出。",
          "1993 年英国男性评论家曾以“商业插画”等措辞贬低 O’Keeffe 的创作。"
        ],
        "sourceName": "The Guardian／The Courtauld Gallery",
        "sourceUrl": "https://www.theguardian.com/culture/2026/jul/27/new-exhibition-to-explore-how-georgia-okeeffes-desert-home-shaped-her-art",
        "sourceDate": "2026-07-27",
        "whyItMatters": "过去很多评论把 O’Keeffe 的作品简单解释成花朵、女性身体或孤独天才的表达。新展览把注意力转向她怎样利用住宅、沙漠景观和日常采集来安排创作。",
      },
      {
        "category": "社会科学 × 语言学 × 第二语言与声学测量",
        "image": "/story-images/language-vowel-cues.jpg",
        "imageAlt": "元音声波、频谱轮廓、抽象口腔几何与听说双向路径组成的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释英语元音的时长、频谱与感知—发音联系，并非真实参与者、实验界面、声谱图或研究数据",
        "title": "研究发现：母语会改变人们分辨外语元音时依赖的线索",
        "background": "人们分辨元音时会同时听声音持续多久，以及声音的频谱或音质。不同语言使用这些线索的方式不同，因此母语也可能影响一个人怎样听见和模仿外语发音。这项研究观察台湾华语母语者学习英语 beat、bit、bat 和 bet 等元音时，听觉判断与实际发音怎样相互联系。",
        "summary": "一项针对台湾华语英语学习者的实验发现，听辨与模仿的联系并非整体能力：beat–bit 主要依赖时长，bat–bet 则更依赖频谱与舌位形成的音质。",
        "happened": "25 名参与者先完成 490 次听觉分类，再完成 180 次语音模仿。研究者把元音的频谱与时长独立操纵，发现个体在听觉中给某条声学线索的权重，会预测其发音在同一维度上能拉开多大差异。",
        "facts": [
          "论文于 2026 年 7 月 19 日在线发表于《Second Language Research》，DOI 为 10.1177/02676583261461946。",
          "研究招募 25 名台湾华语母语者，其中 15 名女性、10 名男性，年龄为 20 至 37 岁。",
          "实验使用 beat–bit 与 bat–bet 两组英语元音对，并把频谱与时长分别做成 7 级连续体。",
          "每位参与者完成 490 次感知分类试次和 180 次模仿试次，整个实验约一小时。",
          "beat–bit 的听说联系主要出现在时长维度，bat–bet 则主要出现在频谱／音质维度。含混的 beat–bit 刺激还受到华语 /i/ 类别影响。"
        ],
        "sourceName": "Second Language Research／National Yang Ming Chiao Tung University",
        "sourceUrl": "https://journals.sagepub.com/doi/10.1177/02676583261461946",
        "sourceDate": "论文在线发表 2026-07-19。机构解读 2026-07-25",
        "whyItMatters": "参与者怎样听见差异，会影响他们怎样发出差异：beat–bit 主要依赖时长，bat–bet 则更依赖音质。外语发音训练因此不能只要求学习者反复模仿口型，还要先帮助他们听出每一组声音真正依赖的线索。",
      },
      {
        "category": "社会科学 × 天文学 × 观测分类与行星防御",
        "image": "/story-images/hidden-comet-tracking.jpg",
        "imageAlt": "细弱彗尾、轨道预测线、望远镜口径与偏离点叠成观测网络的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释 P/1998 SH2 的轨道偏差、微弱彗尾与多台望远镜协作，并非天文实拍、NASA 图示、雷达图或真实轨道数据",
        "title": "一颗被归为近地小行星的天体后来被确认是彗星",
        "background": "小行星主要由岩石或金属构成，彗星则通常含有会在靠近太阳时受热喷出的冰和尘埃。两者在很远处可能都只像一个小光点，分类要靠长期测量轨道和寻找彗尾等活动迹象。1998 SH2 最初被当作近地小行星，后来它的实际位置开始偏离只受引力影响的预测轨道。",
        "summary": "1998 SH2 在预计位置上没有出现。NASA 团队从非引力轨道偏差推断微弱喷气，再由三台大型望远镜找到几乎不可见的彗尾，将其增列为 P/1998 SH2。",
        "happened": "这颗天体在 2025 年 8 月以约 300 万公里距离安全掠过地球，但 Deep Space Network 雷达没能按预报位置捕捉它。研究者重算 1998 年以来的测量，怀疑太阳加热冰物质造成喷气推力。随后 Hawaii 与 Chile 的望远镜共同确认微弱彗尾。",
        "facts": [
          "1998 SH2 绕太阳一周约需 4.5 年，2025 年 8 月 28 日曾在约 200 万英里（300 万公里）外安全掠过地球。",
          "其轨道从 1998 至 2016 年已有追踪记录，但此后完成两次公转而没有新的望远镜观测，直到 2025 年雷达尝试。",
          "确认工作使用 3.6 米 Canada–France–Hawaii Telescope、1.5 米 ESO Danish Telescope 和 8.2 米 Very Large Telescope。",
          "观测得到微弱但清晰的彗尾后，天体新增彗星临时编号 P/1998 SH2。",
          "自 2016 年发现首颗“暗彗星”以来，约又识别出十余颗。NASA 认为持续精密测轨可帮助判断喷气如何影响近地天体风险。"
        ],
        "sourceName": "NASA Jet Propulsion Laboratory",
        "sourceUrl": "https://www.nasa.gov/solar-system/comets/nasa-study-finds-near-earth-asteroid-is-actually-comet/",
        "sourceDate": "2026-07-16",
        "whyItMatters": "雷达没有在预报位置发现 1998 SH2，而后续望远镜又拍到彗尾，说明原先只按小行星计算的轨道遗漏了喷气推力。把它重新归为彗星后，研究者必须把这种额外推力纳入测轨，才能更准确地判断它未来是否会接近地球。",
      },
      {
        "category": "女性主义 × 性别与健康 × 实验室数据基础设施",
        "image": "/story-images/gender-diverse-lab-data.jpg",
        "imageAlt": "血液样本、参考区间、器官清单与电子病历字段连接成个体化诊断路径的编辑插图",
        "imageCredit": "编辑插图 · AI 生成，用于解释性别多元患者的检验参考区间、器官清单与电子病历，不代表真实患者、检验报告、医院界面或医疗建议",
        "title": "实验室发布指南：参考区间不能只按法律性别划分",
        "background": "医学检验报告常用“参考区间”判断一个数值是否常见，例如血红蛋白、肌酐或激素水平。许多实验室系统会根据病历中的男性或女性标记自动选择区间，但性别肯定激素治疗、器官是否存在和接受过的手术都可能改变结果应该怎样解释。ADLM 是为检验医学专业人员制定标准和指引的美国机构。",
        "summary": "ADLM 发布美国首份广泛覆盖性别多元患者的检验医学与病理学指引，要求实验室把激素治疗、器官清单和信息系统能力纳入结果解释。",
        "happened": "指引聚焦稳定接受性别肯定激素治疗至少六个月的成年人，覆盖检验参考区间、输血、尸检、组织学和病理信息学五个领域。它建议电子病历记录器官是否存在及手术日期，并在证据不足时允许双重报告参考区间。",
        "facts": [
          "Association for Diagnostics & Laboratory Medicine 于 2026 年 7 月 1 日发布这份美国首个广泛覆盖该领域的专业指引。",
          "指引集中讨论 5 类问题：激素治疗影响的参考区间、输血、尸检与死亡调查、组织学，以及实验室信息学。",
          "主要证据对象为稳定接受性别肯定激素治疗至少 6 个月的成年人，因为更早阶段的数据仍很有限。",
          "指导表列出血红蛋白、肌酐、胱抑素 C、心肌肌钙蛋白、脂质、肝酶与激素等检验在不同治疗下的变化或证据缺口。",
          "建议电子病历设置器官清单。对部分指标可考虑同时报告女性与男性参考区间，尸检则应同时记录法律性别与确认的性别认同并使用正确姓名和代词。"
        ],
        "sourceName": "Association for Diagnostics & Laboratory Medicine",
        "sourceUrl": "https://myadlm.org/science-and-research/academy-guidance/gender-diversity",
        "sourceDate": "2026-07-01",
        "whyItMatters": "检验结果会受到激素治疗、现有器官和手术经历影响，单靠病历中的法律性别无法完整反映这些条件。指引要求记录器官清单，并在证据不足时同时显示两套参考区间，是为了让医生看见真实的生理信息，而不是让系统自动替患者作出错误分类。",
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
        "background": "Joiri Minaya 是一位出生于纽约、在多米尼加共和国长大的跨媒介艺术家。她使用纺织、摄影和行为艺术，研究旅游广告、植物图案和殖民图像怎样把加勒比等热带地区塑造成供外来者消费的“异国天堂”。她还会用自己设计的花布包裹殖民纪念物，让纪念物暂时无法被照常观看。",
        "summary": "Henry Art Gallery 为 Joiri Minaya 开设个展，以 Aloha 衬衫、花卉弹力布和包裹殖民纪念物的纺织实践，拆解“热带”如何从加勒比延伸为全球消费图像。",
        "happened": "展览于 7 月 25 日在西雅图开幕。Minaya 出生于纽约、在多米尼加共和国长大。她把自己定位为表演者与“破坏者”，用纺织、摄影和遮蔽动作对抗把热带地区及居民简化为异国幻想的视觉传统。",
        "facts": [
          "展期为 2026 年 7 月 25 日至 2027 年 5 月 2 日，地点是 University of Washington 的 Henry Art Gallery。",
          "Joiri Minaya 1990 年出生于纽约，在多米尼加共和国长大，创作横跨纺织、摄影与表演。",
          "展览从加勒比延伸到太平洋，讨论“全球热带”如何被制造为供消费的异国想象。",
          "展品线索包括艺术家的 Aloha 衬衫，以及她设计来包裹殖民纪念物的花卉弹力布。"
        ],
        "sourceName": "Henry Art Gallery",
        "sourceUrl"