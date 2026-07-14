const sources = [
  {
    code: "S01",
    type: "博物馆藏品",
    title: "Disc of Enheduanna — B16665",
    org: "Penn Museum",
    note: "圆盘的年代、出土地、材质、尺寸与馆藏编号。",
    href: "https://collections.penn.museum/collections/object/293415",
  },
  {
    code: "S02",
    type: "数字展览",
    title: "Disk of Enheduanna",
    org: "The Morgan Library & Museum",
    note: "圆盘图像、铭文转写与祭祀场景解释。",
    href: "https://www.themorgan.org/exhibitions/online/she-who-wrote/disk-enheduanna",
  },
  {
    code: "S03",
    type: "原始文本",
    title: "The Exaltation of Inana — ETCSL 4.07.2",
    org: "University of Oxford",
    note: "《伊南娜的晋升》的苏美尔文本、英文翻译与行号。",
    href: "https://etcsl.orinst.ox.ac.uk/section4/tr4072.htm",
  },
  {
    code: "S04",
    type: "学术版本",
    title: "The Exaltation of Inanna",
    org: "Hallo & van Dijk, Yale, 1968",
    note: "奠定现代研究基础的完整整理与翻译。",
    href: "https://babylonian-collection.yale.edu/sites/default/files/files/Hallo_Van%20Dijk%20%281968%29%20-%20Exaltation%20of%20Inanna_YNER%203.pdf",
  },
  {
    code: "S05",
    type: "专题研究",
    title: "She Who Wrote",
    org: "Penn Museum × The Morgan",
    note: "把恩赫杜安娜放回美索不达米亚女性、劳动与权力的历史。",
    href: "https://www.penn.museum/sites/expedition/goddesses-mothers-rulers/",
  },
  {
    code: "S06",
    type: "争议综述",
    title: "The Struggle to Unearth the World’s First Author",
    org: "The New Yorker",
    note: "梳理作者归属之争，以及现代学术中的性别视角。",
    href: "https://www.newyorker.com/books/page-turner/the-struggle-to-unearth-the-worlds-first-author",
  },
  {
    code: "S07", type: "完整译本",
    title: "Enheduana: The Complete Poems of the World’s First Author",
    org: "Sophus Helle · Yale University Press",
    note: "完整英译、历史背景、诗歌结构，以及作者、权力、战争与性别的专题论述。",
    href: "https://yalebooks.yale.edu/book/9780300276763/enheduana/",
  },
  {
    code: "S08", type: "逐行注释",
    title: "The Exaltation of Inana: Annotated Translation",
    org: "Enheduana.org · Sophus Helle",
    note: "逐行提供楔形文字、转写、读音重建、逐词释义、译文与评论。",
    href: "https://enheduana.org/exaltation/",
  },
  {
    code: "S09", type: "论文",
    title: "The Birth of the Author: Co-creating Authorship",
    org: "Sophus Helle · Orbis Litterarum, 2020",
    note: "解释作者如何由女神、歌者、抄写员与读者共同创造，而非孤立天才。",
    href: "https://pure.au.dk/portal/en/publications/the-birth-of-the-author-co-creating-authorship-in-enheduanas-exal/",
  },
  {
    code: "S10", type: "历史背景",
    title: "Mesopotamia, 8000–2000 B.C.",
    org: "The Metropolitan Museum of Art",
    note: "城市、灌溉、楔形文字、苏美尔城邦与阿卡德帝国的时间框架。",
    href: "https://www.metmuseum.org/toah/ht/02/wam.html",
  },
  {
    code: "S11", type: "专题研究",
    title: "Art of the First Cities in the Third Millennium B.C.",
    org: "The Metropolitan Museum of Art",
    note: "苏美尔与阿卡德人口、语言、城市文化以及 Sargon 帝国的关系。",
    href: "https://www.metmuseum.org/essays/art-of-the-first-cities-in-the-third-millennium-b-c",
  },
  {
    code: "S12", type: "原始文本",
    title: "Inana’s Descent to the Netherworld",
    org: "University of Oxford · ETCSL",
    note: "伊南娜下冥界、七道门、死亡与复归的苏美尔文本和英译。",
    href: "https://etcsl.orinst.ox.ac.uk/section1/tr141.htm",
  },
  {
    code: "S13", type: "宗教背景",
    title: "Mesopotamian Deities",
    org: "The Metropolitan Museum of Art",
    note: "诸神等级、城邦守护神，以及 Inanna 与 Akkadian Ishtar 的关系。",
    href: "https://www.metmuseum.org/essays/mesopotamian-deities",
  },
  {
    code: "S14", type: "考古档案",
    title: "The Ziggurat of Ur",
    org: "Penn Museum",
    note: "乌尔塔庙的发掘记录、历史照片与神庙城市的空间背景。",
    href: "https://www.penn.museum/sites/journal/1235/",
  },
  {
    code: "S15", type: "授权图像",
    title: "Standard of Ur — Peace Panel",
    org: "Wikimedia Commons · Juan Carlos Fonseca Mata",
    note: "背景页所用乌尔军旗和平面照片；约前2600—2400年，CC BY-SA 4.0。",
    href: "https://commons.wikimedia.org/wiki/File:Standard_of_Ur_-_Peace_Panel_-_Sumer.jpg",
  },
  {
    code: "S16", type: "原始文本",
    title: "The Temple Hymns — ETCSL 4.80.1",
    org: "University of Oxford",
    note: "《神庙赞歌》42首文本、英文翻译与结尾署名。",
    href: "https://etcsl.orinst.ox.ac.uk/section4/tr4801.htm",
  },
  {
    code: "S17", type: "现代视觉文化",
    title: "Fate/Grand Order: Absolute Demonic Front — Babylonia",
    org: "TYPE-MOON / FGO7 ANIME PROJECT",
    note: "伊什塔尔现代流行文化形象的参照；网页使用的是AI生成同人插图，并非历史复原。",
    href: "https://anime.fate-go.us/ep7-tv/",
  },
];

const works = [
  {
    no: "01",
    title: "《伊南娜的晋升》",
    en: "The Exaltation of Inanna / Nin-me-sara",
    label: "核心作品",
    body: "一首约154行的长诗。叙述者赞颂伊南娜，也讲述自己遭到卢加尔-安涅驱逐、向南纳求告无果，继而在黑夜中借诗歌重建权威的经历。",
    status: "明确出现‘我，恩赫杜安娜’；作者归属仍被讨论。",
  },
  {
    no: "02",
    title: "《神庙赞歌集》",
    en: "The Sumerian Temple Hymns",
    label: "宗教地理",
    body: "通常统计为42篇赞歌，把多座城邦的神庙编织进同一套神圣秩序。它既是文学地图，也可能服务于阿卡德帝国的整合。",
    status: "结语把编纂者指认为恩赫杜安娜；现存抄本较晚。",
  },
  {
    no: "03",
    title: "《伊南娜与埃比赫》",
    en: "Inanna and Ebih",
    label: "女神叙事",
    body: "伊南娜要求埃比赫山臣服；在安拒绝支持后，她仍独自发动攻击。作品让女神成为会愤怒、决断并亲自行动的主体。",
    status: "依据主题和风格归于她名下，证据弱于前两类。",
  },
  {
    no: "04",
    title: "南纳与伊南娜赞歌",
    en: "Hymns to Nanna and Inanna",
    label: "归属作品群",
    body: "若干残篇和赞歌扩展了她作为神学组织者、祭司与诗人的形象，也显示文本在不同抄写传统中不断变化。",
    status: "归属、年代与文本边界均存在不同学术意见。",
  },
];

const rediscovery = [
  ["1927", "伍利团队在乌尔神庙区发现圆盘碎片。铭文写明她是南纳的最高女祭司、萨尔贡之女，但它起初只被当作王室与宗教史的次要材料。"],
  ["1950年代", "Adam Falkenstein 等学者逐渐把圆盘、仆从印章与文学泥板上的 Enheduanna 拼接成同一个历史人物。"],
  ["1968", "William Hallo 与 J. J. A. van Dijk 出版《伊南娜的晋升》的重要整理和英译，她的作者身份由此进入更广泛的学术视野。"],
  ["1970年代以后", "女性主义研究、现代伊拉克诗人、艺术家与博物馆不断重读她：她既成为女性文学史的先驱，也成为流亡者跨越四千年的同伴。"],
];

export default function Home() {
  return (
    <main id="top">
      <aside className="spine" aria-label="档案编号">
        <a className="spine-mark" href="#top" aria-label="返回顶部">TS</a>
        <span className="spine-name">ENHEDUANNA · UR · NIN-ME-SARA</span>
        <span className="spine-index">004</span>
      </aside>

      <header className="topbar">
        <a className="brand" href="#top"><img src="./tsrat-logo.png" alt="TS鼠 Logo" /><b>时间的女儿 · 004</b></a>
        <nav aria-label="主导航">
          <a href="#world"><b>01</b> 世界</a>
          <a href="#life"><b>02</b> 神庙</a>
          <a href="#hymns"><b>02B</b> 赞歌</a>
          <a href="#exile"><b>03</b> 流放</a>
          <a href="#goddess"><b>04</b> 女神</a>
          <a href="#voice"><b>05</b> “我”</a>
        </nav>
        <details className="menu">
          <summary>目录</summary>
          <div>
            <a href="#world">美索不达米亚</a>
            <a href="#life">乌尔神庙生活</a>
            <a href="#hymns">《神庙赞歌》</a>
            <a href="#exile">Lugal-Ane 与流放</a>
            <a href="#goddess">南纳、伊南娜与伊什塔尔</a>
            <a href="#voice">诗歌与“我”</a>
            <a href="#return">归来与遗忘</a>
            <a href="#rediscovery">考古与现代研究</a>
            <a href="#works">作品</a>
            <a href="#debate">作者争议</a>
            <a href="#silence">沉默传统</a>
            <a href="#sources">来源</a>
          </div>
        </details>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ENHEDUANNA / THE FIRST NAMED AUTHOR</p>
          <h1>恩赫杜安娜：<em>第一人</em></h1>
          <p className="hero-lede"><b>欢迎回到“时间的女儿”系列，这里是TS鼠。</b>第004期，我们认识恩赫杜安娜——已知最早把自己的名字与文学作品联系在一起的女性。</p>
          <div className="hero-meta" aria-label="时代与地点">
            <span><small>时代</small><b>约公元前23世纪</b></span>
            <span><small>区域</small><b>美索不达米亚</b></span>
            <span><small>城市</small><b>乌尔</b></span>
            <span><small>身份</small><b>阿卡德王女 · 南纳最高女祭司</b></span>
          </div>
          <div className="fact-line" aria-label="核心信息">
            <span>公主</span><i>/</i><span>祭司</span><i>/</i>
            <span>作者</span><i>/</i><span>先驱</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#intro">开始她的故事 <span>→</span></a>
            <a className="button secondary" href="#watch">观看完整视频 <span>▶</span></a>
          </div>
          <p className="hero-caveat">“第一位作者”是被广泛采用的称呼；现存文学抄本晚于她的时代，因此作品归属仍是严肃的学术问题。</p>
        </div>

        <div className="hero-art" aria-label="恩赫杜安娜线描肖像">
          <img src="./enheduanna-portrait.png" alt="TS鼠绘制的恩赫杜安娜线描头像" />
          <span className="art-note">ENHEDUANNA · PORTRAIT DETAIL<br />TS鼠 · 2026</span>
        </div>

        <a className="next-chapter" href="#intro">
          <strong>00</strong><span><b>先认识她</b><small>从时代、身份以及她与乌尔的关系开始</small></span><i>↓</i>
        </a>
      </section>

      <section className="thesis section-pad" id="intro">
        <div className="section-tag"><span>00</span> WHO IS SHE?</div>
        <div className="thesis-grid">
          <div className="quick-profile">
            <p className="profile-date">约公元前2300年</p>
            <p className="profile-role"><span>阿卡德王女</span><span>乌尔大祭司</span><span>苏美尔语诗人</span></p>
            <p className="profile-summary">她跨越了王室、神庙与文学三个世界。理解她，要从这三重身份怎样连在一起开始。</p>
          </div>
          <div className="quick-intro">
            <p className="kicker">QUICK INTRODUCTION</p>
            <h2>花一分钟认识<br />恩赫杜安娜。</h2>
            <div className="quick-answers">
              <article>
                <span>01</span>
                <div><h3>她是谁？</h3><p>她生活在约公元前23世纪的美索不达米亚，大致相当于今天的伊拉克。她是建立阿卡德帝国的萨尔贡之女；至于她出生在哪里、原本叫什么、活了多少岁，我们都不知道。</p></div>
              </article>
              <article>
                <span>02</span>
                <div><h3>她怎么做大祭司？</h3><p>萨尔贡征服苏美尔南方后，把女儿任命为乌尔月神南纳的最高女祭司。乌尔不是阿卡德帝国的都城，也未必是她的故乡，而是一座古老、富有并拥有巨大宗教影响力的苏美尔城市。她在神庙区的 Gipar 居住和履职，以王女和祭司的双重身份连接阿卡德王室与乌尔本地传统。</p></div>
              </article>
              <article>
                <span>03</span>
                <div><h3>她又怎么成为作家？</h3><p>作为最高女祭司，她主持仪式、管理神庙资源，也处在赞歌、神学传统与书吏网络的中心。后世泥板抄本把《伊南娜的晋升》《神庙赞歌集》等苏美尔语作品与她的名字联系起来。尤其在流放危机中，她不只向女神求救，还把自己的名字、身份、痛苦和创作过程写进诗里，并把诗歌称为自己“生下”的作品——一种前所未见的作者意识由此觉醒。</p></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="world-origin section-pad" id="world">
        <div className="section-head">
          <div className="section-tag"><span>01</span> BEFORE ENHEDUANNA</div>
          <div><p className="kicker">RIVERS · CITIES · GODS · WRITING</p><h2>在认识她之前，<br />先进入两河之间的世界。</h2></div>
        </div>

        <div className="origin-intro">
          <p className="origin-word">MESO<br />POTAMIA</p>
          <div>
            <h3>美索不达米亚不是一个国家。</h3>
            <p>这个名字的意思是“河流之间的土地”，主要指 Tigris（底格里斯河）与 Euphrates（幼发拉底河）流域，大体覆盖今天的 Iraq（伊拉克）及周边地区。南部平原降雨有限，却有两条大河带来的水与冲积土；人们修建渠道、组织灌溉，也因此需要共同管理土地、粮食和劳动力。城市正是在这种环境中成长起来的。</p>
          </div>
        </div>

        <div className="origin-grid">
          <article><span>01 / 城邦</span><h3>一座城，就是一个政治世界</h3><p>约前2900—2350年，南方由 Ur、Uruk、Lagash 等彼此竞争的城邦组成。它们有自己的统治者、军队与神庙，也会争夺水道、土地和贸易路线。所谓 Sumer 并不是一个统一国家，而是共享苏美尔语言与文化传统的一组城市。</p></article>
          <article><span>02 / 宗教</span><h3>每座城市都有自己的主神</h3><p>Ur 的主神是月神 Nanna，Uruk 与 Inanna 关系密切，Lagash 则崇奉 Ningirsu。神庙不仅供人祈祷，还拥有土地、粮仓、牲畜和劳动者，是宗教中心，也是经济与行政机构。因此，最高祭司从来不只是主持仪式的人。</p></article>
          <article><span>03 / 文字</span><h3>楔形文字先记录粮食，后来记录灵魂</h3><p>约前四千纪末，管理者开始用削成斜角的芦苇笔在湿泥上压出符号，记录粮食、牲畜和劳役。随着书吏教育发展，同一套楔形文字也被用来书写法律、神话、赞歌与私人祈祷——账本的载体最终成为文学的载体。</p></article>
          <article><span>04 / 语言</span><h3>Sumerian 与 Akkadian 并不是同一种语言</h3><p>Sumerian（苏美尔语）是一种目前无法确认亲属语言的语言，主要扎根于南方；Akkadian（阿卡德语）属于 Semitic（闪米特语族），与后来的 Hebrew、Arabic 有较远亲缘。两种语言长期共存，也都使用楔形文字。政治上的征服没有让苏美尔文化立刻消失。</p></article>
        </div>

        <figure className="ziggurat-panel city-state-panel" id="city-states">
          <img src="./standard-of-ur.jpg" alt="约前2600至2400年的乌尔军旗和平面：人物运送谷物、鱼类和牲畜，上层举行宴饮" />
          <figcaption>
            <span>AFTER THE CITY-STATES</span>
            <h3>萨尔贡征服了苏美尔的城市，<br />却无法征服它们的宗教。</h3>
            <p>前24世纪，Sargon 从北方的 Akkad 向南扩张，击败多个苏美尔城邦。但军队可以夺取城门，不能命令 Ur 人忘记 Nanna，也不能让经营土地、粮仓与劳动者的神庙突然失去权威。要让帝国真正稳定，他还需要在宗教上连接阿卡德王室与苏美尔传统。</p>
            <small>图为“乌尔军旗”和平面，约前2600—2400年，比恩赫杜安娜略早，更接近她所继承的苏美尔城邦世界。人物、牲畜、物资与宴饮也提醒我们：城市秩序由生产、分配、仪式与权力共同组成。图片：Juan Carlos Fonseca Mata，CC BY-SA 4.0。</small>
          </figcaption>
        </figure>

        <div className="origin-timeline">
          <div><time>约前3500—3000</time><b>城市与文字出现</b><p>Uruk 等南方城市扩张，行政记录逐渐发展为楔形文字。</p></div>
          <i>→</i>
          <div><time>约前2900—2350</time><b>苏美尔城邦时代</b><p>Ur、Uruk、Lagash 等城市竞争，每座城都有自己的政治与神圣中心。</p></div>
          <i>→</i>
          <div><time>约前2350以后</time><b>Sargon 建立 Akkadian Empire</b><p>他征服南方城邦，却无法绕过苏美尔神庙的权威；帝国仍需要宗教上的连接。</p></div>
          <i>→</i>
          <div className="timeline-arrival"><time>约前2300</time><b>一位王女来到 Ur</b><p>为了把北方王朝与南方最古老的宗教传统连接起来，Sargon 任命女儿担任 Nanna 的最高女祭司。她就是 Enheduanna。</p></div>
        </div>

        <a className="world-next" href="#life"><span>下一章</span><b>现在，恩赫杜安娜登场。</b><i>↓</i></a>
      </section>

      <section className="life section-pad" id="life">
        <div className="section-head">
          <div className="section-tag"><span>02</span> INSIDE THE GIPAR</div>
          <div><p className="kicker">ARRIVAL · OFFICE · DAILY LIFE</p><h2>她来到乌尔，<br />成为怎样的大祭司？</h2></div>
        </div>

        <div className="arrival-lede">
          <p className="arrival-number">EN<br />ḪEDU<br />ANA</p>
          <div>
            <h3>一个阿卡德王女，进入了苏美尔最古老的宗教中心之一。</h3>
            <p>萨尔贡任命女儿为乌尔月神南纳的最高女祭司。她在此获得苏美尔语名号 En-hedu-ana，通常解释为“最高女祭司，天神的装饰”。这既是王朝安排，也是一次漫长的文化学习：她必须使用当地语言、遵守当地礼仪，并让乌尔人相信，她不是站在神庙之外的征服者。</p>
          </div>
        </div>

        <div className="gipar-grid">
          <article className="identity-card lead-card">
            <p className="card-no">A / RESIDENCE</p>
            <h3>住在 Gipar</h3>
            <p>Gipar 是她的住所，也是宗教、行政与墓葬空间。文稿依据发掘布局把它分为私人生活区、宁伽尔神庙和历代女祭司墓区：她不是偶尔到神庙主持典礼，而是生活在整套祭司制度内部。</p>
          </article>
          <article className="identity-card">
            <p className="card-no">B / RITUAL</p>
            <h3>照料神与死者</h3>
            <p>净化身体、准备食物、献酒、主持节庆，并向地下长眠的历代女祭司举行亡灵祭祀。她以“南纳之妻”的神圣身份连接月神、宁伽尔与乌尔城，也继承了前任女祭司的古老法统。</p>
          </article>
          <article className="identity-card blue-card">
            <p className="card-no">C / ADMINISTRATION</p>
            <h3>管理一座机构</h3>
            <p>神庙拥有土地、粮仓、牲畜与劳动者。她需要统筹农业生产、谷物仓储、食物和祭品分配，并依靠书吏把数量、边界与劳役写进泥板。最高女祭司并非与现实隔绝的宗教象征，而是庞大经济实体的管理者。</p>
          </article>
          <article className="identity-card red-card">
            <p className="card-no">D / WRITING</p>
            <h3>在神庙中写作</h3>
            <p>赞歌、仪式与政治在这里彼此交叠。她可能口述、编排并指挥书吏完成文本；《神庙赞歌集》把不同城市的神庙编进同一神圣秩序，也把帝国整合变成一项文学工程。</p>
          </article>
        </div>

        <div className="temple-ledger">
          <div className="ledger-title"><span>THE TEMPLE AS AN ECONOMY</span><h3>她的日常，不只有祈祷。</h3><p>祭司工作要求她同时理解土地、水、数字、季节与食物。后来进入诗歌的“计量绳”“粮仓”“烤炉”和“食物篮”，都来自这种极务实的神庙经验。</p></div>
          <article><b>01</b><h4>农业与仓储</h4><p>监督神庙土地、收成和谷物入仓，确保祭祀与城市供给。</p></article>
          <article><b>02</b><h4>分配与供养</h4><p>安排口粮、面包、牲畜和祭品，维持劳动者与神庙共同体。</p></article>
          <article><b>03</b><h4>水利与测量</h4><p>指导运河开凿、土地边界勘测，使用绳索、几何与度量。</p></article>
          <article><b>04</b><h4>历法与节庆</h4><p>观察天象、确定月份和仪式时间，让农业周期与神圣秩序对齐。</p></article>
        </div>

        <div className="artifact-strip">
          <figure className="artifact-visual">
            <img src="./enheduanna-disc.jpg" alt="恩赫杜安娜圆盘正面：圆形方解石浮雕中央是一列正在举行祭酒仪式的人物，恩赫杜安娜位于画面右侧中央，头戴多层边饰头巾" />
            <figcaption>Penn Museum B16665 · 圆盘正面实物图</figcaption>
          </figure>
          <div className="artifact-copy">
            <p className="kicker">OBJECT B16665 · PENN MUSEUM</p>
            <h3>圆盘让我们看见她如何工作。</h3>
            <p><b>它是一件约前2300年的圆形方解石浮雕与铭文纪念物，</b>并不是书写诗歌的泥板。考古队在乌尔神庙区的 Gipar 发现其碎片；今天看到的是拼合和修复后的圆盘，直径约25厘米。</p>
            <p><b>正面像一帧被石头冻结的神庙生活。</b>祭液从器皿流入高脚容器，恩赫杜安娜朝向祭坛，身形大于随从，头戴标志最高女祭司身份的多层边饰头巾。她不是在王宫中摆出公主姿态，而是在亲自主持献酒仪式。</p>
            <p><b>背面铭文把这一场景落实到一个具体的人。</b>它写出她的名字，并称她为南纳的最高女祭司、萨尔贡之女。圆盘因此首先是她神庙职位与仪式生活的证据；它能证明她确有其人、确实在乌尔履职，却不能单独证明后世传抄的每一首诗都由她创作。</p>
            <div className="artifact-meta"><span>约前2300</span><span>乌尔 · Gipar</span><span>石灰岩 / 方解石</span><span>B16665</span></div>
            <a className="text-link" href="https://collections.penn.museum/collections/object/293415" target="_blank" rel="noreferrer">查看博物馆藏品记录 ↗</a>
            <small className="image-credit">图片：Penn Museum，藏品 B16665；其网站允许非营利教育与个人非商业用途分享。</small>
          </div>
        </div>
        <p className="context-note"><b>需要避免的现代想象：</b>我们无法证明她像现代作家一样独自在桌前逐字刻板。古代“创作”可能包含口述、编排、指挥书吏与集体传抄；“作者”不等于“亲手写下每个符号的人”。</p>
      </section>

      <section className="temple-hymns section-pad" id="hymns">
        <div className="section-head">
          <div className="section-tag"><span>02B</span> THE TEMPLE HYMNS</div>
          <div><p className="kicker">42 TEMPLES · ONE SACRED MAP</p><h2>她已经署名，<br />却还没有让“我”出现。</h2></div>
        </div>

        <div className="hymn-thesis">
          <p className="hymn-count">42</p>
          <div><h3>《神庙赞歌》把苏美尔的地方传统，编织成一张帝国尺度的宗教地图。</h3><p>这组短诗依次赞颂各城邦神庙：先向建筑本身说话，再转向居住其中的神，最后用近似固定的叠句让神明“在神圣庭院中建起家园，并在宝座上就座”。它可能承担了整合帝国信仰的政治功能；但它没有简单抹去地方神，而是让每座城在统一形式中保留自己的神圣身份。</p></div>
        </div>

        <div className="material-poetry" id="hymn-materials">
          <div className="material-intro"><p className="kicker">THE ADMINISTRATOR INSIDE THE POEM</p><h3>务实的神庙经验，藏在华丽意象里。</h3><p>这些句子既是宗教隐喻，也来自一个管理者熟悉的物质世界：测量、粮食加工、储藏与分配。</p></div>
          <div className="material-lines">
            <blockquote><span>计量绳 · 第42首</span><p>“She applies the measure to heaven and places the measuring rope upon the earth.”</p><small>她丈量高天，并在大地上放置计量绳。</small></blockquote>
            <blockquote><span>食物篮 · 第8首</span><p>“Ur, you are a basket filled with food, feeding all the lands.”</p><small>乌尔，你是装满食物、哺育所有土地的篮子。</small></blockquote>
            <blockquote><span>祭品篮 · 《伊南娜的晋升》</span><p>“I am Enheduana, I am the high priestess. I carried the basket of offerings; I sang the hymns of joy.”</p><small>我曾带着装满祭品的篮子，高唱欢乐的赞歌。</small></blockquote>
            <blockquote><span>烤炉 · 第1首</span><p>“Yours is the oven that is full of food, of basketfuls of bread.”</p><small>你的烤炉装满食物，装满一篮篮面包。</small></blockquote>
            <blockquote><span>储藏室 · 第40首</span><p>“House of Inana, of silver and lapis lazuli, storehouse built of gold.”</p><small>伊南娜之屋，以白银和青金石建成，以黄金筑成的储藏室。</small></blockquote>
            <blockquote><span>粮仓 · 第23首</span><p>“A firmly founded storehouse.”</p><small>一座根基牢固的储藏室。</small></blockquote>
          </div>
        </div>

        <div className="hymn-formula">
          <div className="formula-copy">
            <p className="kicker">THE AUTHOR WHO STAYS OUTSIDE</p>
            <h3>五座城市，五次庄严发声；<br />真正的“她”仍然缺席。</h3>
            <p>在这些赞歌中，她使用第二、第三人称和礼仪化模板，尽职地扮演神庙与神明的发言工具。下面五个原文例子都在建造权威，却不讲她个人的痛苦、欲望或处境。</p>
          </div>
          <ol className="formula-examples">
            <li><span>01 / ERIDU</span><p>“Eunir, the first temple mound … foundation of heaven and earth, you stand high in the sacred precinct.”</p></li>
            <li><span>02 / NIPPUR</span><p>“House of the Mountain, house which decrees the fates … Enlil has erected a house in your holy precinct.”</p></li>
            <li><span>07 / KESH</span><p>“O Kesh, you are the image of heaven and earth … like a great poisonous snake in the desert, inspiring fear.”</p></li>
            <li><span>08 / UR</span><p>“House of Nanna … your front is a king, your rear is a throne; your banquet is a song.”</p></li>
            <li><span>16 / URUK</span><p>“House of Heaven, house with seven corners, lifting seven fires in the deep night, surveying seven pleasures.”</p></li>
          </ol>
        </div>

        <div className="weaver-signature" id="weaver-signature">
          <span>第42首 · 献给书写与测算女神 NISABA</span>
          <blockquote>“The weaver of the tablet was Enheduana.<br />My king! Something has been born which had not been born before.”</blockquote>
          <p>直到结尾，她才像在一件宏大的编纂工程上落款。但这里仍是第三人称的“泥板编织者”，不是后来那个会说“我是恩赫杜安娜”、会受伤、控诉并把诗歌称作自己分娩之物的“我”。<b>在精美的文字里，真正的她依然缺席。</b></p>
        </div>
      </section>

      <section className="voice exile" id="exile">
        <div className="voice-grid">
          <div className="voice-title">
            <div className="section-tag light"><span>03</span> LUGAL-ANE</div>
            <p className="kicker">CROWN · THRESHOLD · THORNS · WILDERNESS</p>
            <h2>从神庙的最高处，<br />跌入荒野。</h2>
          </div>
          <div className="exile-despair">
            <b>她失去的，不只是一份职位。</b>
            <p>冠饰被剥去，Gipar 的门在身后关闭，主持城市祭祀的人被赶进布满荆棘的山野。她从有住所、有随从、有公共声音的最高女祭司，变成一只“从窗中飞走的燕子”——没有神回应，也没有制度保护。</p>
          </div>
        </div>

        <div className="lugal-profile">
          <div className="lugal-name"><span>THE REBEL</span><b>LUGAL<br />ANE</b></div>
          <div className="lugal-aim">
            <p className="kicker">THE CRISIS BEHIND THE DOOR</p>
            <h3>反叛只是背景；Lugal-Ane 才是进入她生命的人。</h3>
            <p>Sargon 死后，王朝经历继承危机；Naram-Sin 时期南方再次反叛。控制 Ur 与 Uruk 的 Lugal-Ane 不只想夺下城市，还要神庙承认新秩序：迫使最高女祭司以 Nanna 之名替他的统治背书。</p>
          </div>
          <div className="lugal-answer">
            <span>HER ANSWER</span>
            <b>拒绝</b>
            <p>她没有用祭司身份替他完成这场合法化。冲突由政治要求转为对她身体、语言和神圣职位的报复。</p>
          </div>
        </div>

        <blockquote className="violation-quote">
          <span>THE VIOLATION / 81–90</span>
          <p>“他改变了那里的仪式，<br />像平等的伴侣一样闯进我面前；<br />又因欲望与嫉妒，竟敢靠近我。”</p>
          <cite>《伊南娜的晋升》81–90行 · 依据不同英译合译；“approached”一词的性侵害意味存在译释差异</cite>
        </blockquote>

        <div className="crisis-sequence">
          <article><b>01</b><span>门槛被越过</span><p>他闯入本应受保护的祭司空间。政治征服因此进入她的身体、住所与宗教身份。</p></article>
          <article><b>02</b><span>声音被摧毁</span><p>“我如蜜的嘴变得有毒；我安抚人心的能力消失了。”对祭司而言，这是权力来源被公开羞辱。</p></article>
          <article><b>03</b><span>冠饰换成刀</span><p>他递给她刀与匕首：“这些是适合你的饰物。”神圣冠饰被暴力工具取代，死亡威胁压过祭司身份。</p></article>
          <article><b>04</b><span>荒野取代神庙</span><p>她被逐出 Gipar，像燕子飞出窗户，穿过山中荆棘。流放不是结尾，而是那个第一人称“我”即将诞生的地方。</p></article>
        </div>

        <blockquote className="exile-primary-quote">
          <p>“他让我像燕子一样从窗中飞走；<br />我的生命力已经耗尽。<br />他让我穿过山中的荆棘，<br />剥去了我作为最高女祭司的合法冠饰。”</p>
          <cite>《伊南娜的晋升》91–108行 · 据 Oxford ETCSL 英译转译</cite>
        </blockquote>
      </section>

      <section className="goddess-pivot section-pad" id="goddess">
        <div className="section-head">
          <div className="section-tag"><span>04</span> A GODDESS REMADE</div>
          <div><p className="kicker">NANNA · INANNA · ISHTAR</p><h2>南纳沉默以后，<br />她转向伊南娜。</h2></div>
        </div>

        <div className="nanna-silence">
          <div><span>THE GOD WHO DID NOT ANSWER</span><h3>“我的南纳没有理会我。”</h3></div>
          <p>南纳是乌尔的主神，也是她祭司职位的来源。诗中，他没有为她裁决，甚至把 Lugal-Ane 交给伊南娜处理。对 Enheduanna 来说，这不只是祈祷失败：支撑她一生的制度正在承认胜利者。她需要的，不再是一位维持现状的地方神，而是一位能打破现状的神。</p>
        </div>

        <figure className="inanna-reveal" id="inanna">
          <div className="inanna-name"><span>THE GODDESS WHO ANSWERS</span><b>INANNA</b><strong>伊南娜</strong><p>不是替她维持旧秩序的神，<br />而是能穿越死亡、颠倒等级、重新分配力量的神。</p></div>
          <img src="./ishtar-babylonia.png" alt="受《Fate/Grand Order：绝对魔兽战线 巴比伦尼亚》伊什塔尔形象启发的AI同人插图：黑发红眼的女神站在金色八芒星前" />
          <figcaption>现代视觉文化中的 Ishtar：AI生成同人插图，受《Fate/Grand Order: Absolute Demonic Front — Babylonia》角色视觉启发；并非历史复原。</figcaption>
        </figure>

        <div className="goddess-intro">
          <div className="goddess-star" aria-hidden="true">✦</div>
          <div>
            <p className="kicker">WHO WAS INANNA?</p>
            <h3>她是乌鲁克的女神，也是战争、欲望、变革与悖论的力量。</h3>
            <p>Inanna 与金星相连，象征爱欲、丰饶、战争、王权和危险的转变。她可以使城邦繁盛，也可以令敌人的城门燃烧；她既拥有诱惑力，也拥有令人恐惧的光辉。她不是温顺的安慰者，而是一位会主动越界、挑战秩序的女神。</p>
          </div>
        </div>

        <div className="descent-story">
          <div className="descent-title"><p className="kicker">THE DESCENT</p><h3>她甚至走进过“无人归返之地”。</h3><p>《伊南娜下冥界》让她成为跨越天地与生死的女神，也解释了为什么一个被放逐的人会在她身上看见出路。</p></div>
          <ol>
            <li><span>01</span><b>主动下行</b><p>伊南娜离开天与地，带着七种“密”走向姐姐 Ereshkigal 统治的冥界。</p></li>
            <li><span>02</span><b>七道门</b><p>每经过一道门，她都被剥去一件权力标志，最终赤裸地面对冥界法则。</p></li>
            <li><span>03</span><b>死亡</b><p>七位审判者判她有罪；她被杀死，尸体悬挂在钩上三日三夜。</p></li>
            <li><span>04</span><b>复归</b><p>Enki 以生命之水和生命之草救回她；但离开冥界仍要付出替代者的代价。</p></li>
          </ol>
        </div>

        <div className="syncretism">
          <div className="syncretism-name"><span>SUMERIAN</span><b>INANNA</b></div>
          <i>×</i>
          <div className="syncretism-name"><span>AKKADIAN</span><b>ISHTAR</b></div>
          <div className="syncretism-copy">
            <h3>帝国要求融合；她把融合写成了神学。</h3>
            <p>后世常把 Inanna 与 Ishtar 简化为“同一位女神的苏美尔名和阿卡德名”，但这种等同本身经历了历史建构。两位女神的对应并非 Enheduanna 凭空创造，阿卡德王室却推动了这种官方融合；她的作品则成为这项融合最有力量的文学工程之一。她没有简单地用 Ishtar 取代 Inanna，而是从 Inanna 的暴力、欲望、金星、战争和越界神话中，找到两者能够合一的共同核心。</p>
          </div>
        </div>

        <div className="junior-queen">
          <blockquote><p>“你生来只是较年轻的女王；<br />如今，你却高踞伟大的诸神之上。”</p><cite>《伊南娜的晋升》109–121行 · “junior queen”</cite></blockquote>
          <div>
            <h3>在她之前，伊南娜重要，却不是最高的神。</h3>
            <p>她早已是乌鲁克的强大神祇，但传统等级中仍服从天空神 An 等更高权威；在《伊南娜与埃比赫》中，她甚至先向 An 请求许可。Enheduanna 在流放中改变了这一点：她称伊南娜掌握所有“密”，让诸神俯伏在她脚下，并把她写得“比 An 更伟大”。</p>
            <p><b>她们互相托举：</b>诗人把一位“小女王”提升为宇宙性的最高女神；这位被重新塑造的女神，又让被逐出的祭司获得超越现实政局的权威。</p>
          </div>
        </div>
      </section>

      <section className="awakening section-pad" id="voice">
        <div className="awakening-silhouette" aria-hidden="true"><img src="./enheduanna-silhouette.png" alt="" /></div>
        <div className="section-head">
          <div className="section-tag"><span>05</span> THE BIRTH OF “I”</div>
          <div><p className="kicker">NIN-ME-SARA · THE EXALTATION OF INANNA</p><h2>《伊南娜的晋升》：<br />作者如何被“生”出来。</h2></div>
        </div>

        <div className="awakening-quote">
          <blockquote><p>“我是恩赫杜安娜，<br />我是最高女祭司。”</p><cite>《伊南娜的晋升》 / The Exaltation of Inanna / Nin-me-sara</cite></blockquote>
          <p>她没有把自己藏在无名的宗教传统后面。诗中的“我”说出名字、职位、被驱逐的经历和正在完成的创作，使个人生命第一次如此清晰地进入已知文学史。</p>
        </div>

        <div className="awakening-grid">
          <article><span>01 / 女神</span><h3>伊南娜成为行动者</h3><p>她把伊南娜写成能够愤怒、战斗、颠覆秩序并最终恢复正义的女神。赞美女神，也是为自己的反抗寻找力量和合法性。</p></article>
          <article><span>02 / 诗歌</span><h3>私人痛苦成为公共作品</h3><p>流放不再只是她个人遭遇的灾难。她把它组织成可以被歌者传唱、被书吏抄写、被后人记住的诗，让失语转化为新的公共声音。</p></article>
          <article><span>03 / 作者</span><h3>她知道这是“我的作品”</h3><p>她不仅出现在诗里，还把写作比作分娩，称自己为伊南娜“生下”了这首诗。作者不再只是作品背后的名字，而成为清楚意识到自己正在创造、并要求作品被传承的人。</p></article>
        </div>

        <div className="birth-quote">
          <span className="moon" aria-hidden="true"></span>
          <p>“痛苦充满了我，淹没了我。<br />女王，女士！为了你，我生下了它。”</p>
          <small>这里的“它”指诗歌。身份被政治剥夺后，她以创造行为重新定义自己。</small>
        </div>

        <div className="birth-symbolism">
          <div><span>01 / PAIN</span><h3>诗从痛苦中分娩</h3><p>她没有把作品说成一份冷静完成的神庙公文，而把漫长黑夜、绝望与身体痛苦写成“生产”的过程。诗不是危机的旁观记录，而是由危机逼出的生命。</p></div>
          <div><span>02 / WORK</span><h3>作品与作者同时出生</h3><p>当她说“我为你生下了它”，她不仅承认诗是自己的创造物，也把自己放在创造行为的中心。作品获得母亲，署名者则第一次成为有创伤、有意志的作者。</p></div>
          <div><span>03 / RETURN</span><h3>被剥夺的身份被重新创造</h3><p>Lugal-Ane 可以夺走冠饰和住所，却不能撤销她与作品的关系。祭司身份需要制度承认；作者身份却在她说出“我”、生下诗歌的瞬间，被她自己重新建立。</p></div>
        </div>

        <div className="poem-map">
          <div>
            <p className="kicker">NIN-ME-SARA / READING MAP</p>
            <h3>《伊南娜的晋升》不是单纯的自传。</h3>
            <p>它同时是一篇赞歌、一份政治申诉、一套重新排列神权的论证，以及一次关于创作本身的宣言。个人声音并没有脱离集体传统，而是借用了传统最强大的形式。</p>
          </div>
          <ol>
            <li><span>1–65行</span><b>赞颂伊南娜</b><small>确立女神掌握“密”与毁灭叛乱的力量</small></li>
            <li><span>66–121行</span><b>“我”进入文本</b><small>陈述祭司身份、流放、失语与求告</small></li>
            <li><span>122–143行</span><b>“让人们知道”</b><small>连续祈使把私人哀诉转为公共宣告</small></li>
            <li><span>144–154行</span><b>祈祷生效</b><small>视角转向“她”，以赞美伊南娜作结</small></li>
          </ol>
        </div>

        <div className="analysis-gateway">
          <div className="analysis-image poem-visual" aria-label="《伊南娜的晋升》抽象文字构图">
            <span className="poem-cuneiform">𒀭<br />𒈹</span>
            <strong>NIN<br />ME<br />SARA</strong>
            <small>THE EXALTATION OF INANNA · 153 / 154 LINES</small>
          </div>
          <div className="analysis-copy">
            <p className="kicker">LINE-BY-LINE READING / NIN-ME-SARA</p>
            <h3>从第一行“所有神圣力量的女王”，<br />读到最后一行“赞美伊南娜”。</h3>
            <p>这一配套资源由 Sophus Helle 建立，与《Enheduana: The Complete Poems of the World’s First Author》相互补充。它不是只有一篇现代英译，而是把全诗逐行拆开：楔形文字、拉丁转写、语音重建、逐词释义、直译和文学评论彼此对照。</p>
            <div className="analysis-facts">
              <span><b>153</b> 行</span><span><b>6</b> 个结构段</span><span><b>5+</b> 层语言信息</span>
            </div>
            <a className="button primary" href="https://enheduana.org/exaltation/" target="_blank" rel="noreferrer">进入逐句完整解析 <span>↗</span></a>
            <small>注：Oxford ETCSL 的整理计为154行；Helle 的诗译与配套网站采用153行编号。差异来自版本划分，并非少了一句。</small>
          </div>
        </div>
      </section>

      <section className="return-oblivion section-pad" id="return">
        <div className="section-head compact">
          <div className="section-tag"><span>07</span> RETURN &amp; OBLIVION</div>
          <div><p className="kicker">HOME · REVERENCE · SILENCE</p><h2>她回到了乌尔，<br />然后消失在历史里。</h2></div>
        </div>

        <div className="return-grid">
          <article className="return-lead"><span>01 / RETURN</span><h3>叛乱失败，她恢复了职位。</h3><p>Naram-Sin 最终镇压“大叛乱”，Lugal-Ane 被俘。Enheduanna 得以重返 Ur 与 Gipar，重新担任最高女祭司。此后的她不再留下同样清晰的自述；我们知道她回来，却不知道她如何度过余生，也不知道她确切的死亡时间。</p></article>
          <article><span>02 / REVERENCE</span><h3>作品被尊崇，她本人也受到纪念。</h3><p>文稿依据后世祭司传统重建：她死后可能葬于 Gipar 的女祭司墓区，接受类似神格化的纪念。后继女祭司修缮墓区、抄录破损圆盘铭文，让她继续存在于乌尔的宗教记忆中。</p></article>
          <article><span>03 / THE TABLET HOUSE</span><h3>无名书吏一遍遍抄写她。</h3><p>到古巴比伦时期，苏美尔语已逐渐退出日常生活，却作为学校和学术语言继续存在。《伊南娜的晋升》等作品成为高级书吏训练文本；今天能读到的版本，主要来自这些晚数百年的课堂泥板。</p></article>
        </div>

        <div className="oblivion-band">
          <span>THE LONG SILENCE</span>
          <h3>作品曾经被反复传抄，<br />作者的名字仍然被世界忘记。</h3>
          <div>
            <p>随着书吏学校重组、苏美尔语和楔形文字消亡，乌尔也逐渐废弃。她的文本退出活的文化记忆，埋入泥土。</p>
            <p>此后两千多年，抒情诗与女性写作在别处继续发展，却没有人知道这位更早的作者。保存她的，只剩下被战争火焰意外烘硬的泥板、破碎圆盘和地下建筑。</p>
          </div>
        </div>
      </section>

      <section className="rediscovery section-pad" id="rediscovery">
        <div className="section-head">
          <div className="section-tag"><span>08</span> REDISCOVERY</div>
          <div><p className="kicker">EXCAVATION · NEGLECT · READING AGAIN</p><h2>考古发现了她，<br />却没有立刻看见她。</h2></div>
        </div>

        <div className="woolley-file">
          <div className="file-stamp"><span>UR / 1927</span><b>CASE<br />B16665</b><small>FRAGMENTS / INSCRIPTION / GIPAR</small></div>
          <div>
            <h3>Leonard Woolley 找到了圆盘，却低估了它的意义。</h3>
            <p>圆盘铭文已经写出 Enheduanna 的名字、职位和父亲。但在以男性君王和《圣经》世界为中心的发掘叙事中，Woolley 主要把她看作 Sargon 的女儿；他还用“尼姑庵”或“后宫”一类现代标签描述 Gipar，遮蔽了最高女祭司真实的政治、经济与宗教权力。</p>
            <p>这种忽视也发生在发掘现场本身：Katharine Woolley 参与绘图、筹资与管理，甚至在丈夫离开时主持工作，却长期被压缩成“考古学家的妻子”。一位古代女性与一位现代女性，在同一处遗址上遭遇了相似的边缘化。</p>
          </div>
        </div>

        <div className="legacy-list rediscovery-list">
          {rediscovery.map(([year, item], index) => (
            <article key={year}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <time>{year}</time>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="works section-pad" id="works">
        <div className="section-head">
          <div className="section-tag"><span>06</span> WORKS</div>
          <div><p className="kicker">AFTER REDISCOVERY · ATTRIBUTED CORPUS</p><h2>她写了什么？<br />我们又有多确定？</h2></div>
        </div>
        <div className="works-grid">
          {works.map((work) => (
            <article className="work-card" key={work.no}>
              <div className="work-top"><span>{work.no}</span><b>{work.label}</b></div>
              <h3>{work.title}</h3>
              <p className="work-en">{work.en}</p>
              <p>{work.body}</p>
              <small>{work.status}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="debate section-pad" id="debate">
        <div className="section-head">
          <div className="section-tag"><span>09</span> DEBATE</div>
          <div><p className="kicker">WHAT CAN WE CLAIM?</p><h2>“第一位作者”是一条结论，<br />也是一个问题。</h2></div>
        </div>
        <div className="debate-grid">
          <article>
            <div className="verdict yes">为什么许多学者接受</div>
            <ul>
              <li><b>人物可证：</b>圆盘与印章证明王女和最高女祭司确有其人。</li>
              <li><b>文本自称：</b>《伊南娜的晋升》的叙述者明确说“我，恩赫杜安娜”。</li>
              <li><b>经验贴合：</b>祭司职位、政治冲突与性别化暴力构成高度具体的叙述。</li>
              <li><b>古代归属：</b>古巴比伦书吏传统已把这些作品与她联系起来。</li>
            </ul>
          </article>
          <article>
            <div className="verdict caution">为什么仍必须谨慎</div>
            <ul>
              <li><b>原本缺失：</b>现存文学手稿大多比她晚约数百年。</li>
              <li><b>语言较晚：</b>抄本反映后世苏美尔语形态，文本可能经过改写。</li>
              <li><b>第一人称≠作者：</b>古代文本也可能借历史人物之口建立权威。</li>
              <li><b>创作是协作：</b>口述、书吏记录、编辑和传抄之间的边界无法完全复原。</li>
            </ul>
          </article>
        </div>
        <details className="scholar-note">
          <summary>网站采用什么表述？ <span>+</span></summary>
          <div>
            <p><b>推荐：</b>“人类历史上第一位已知署名作者”或“最早被作品指名的作者之一”。</p>
            <p><b>避免：</b>把她写成已经毫无争议地独自刻写所有现存泥板的人，或直接称为现代意义的女权主义者。</p>
            <p><b>理由：</b>这样既承认她对世界文学史的震撼意义，也不抹去手稿年代、集体创作和现代学术争论。</p>
          </div>
        </details>
      </section>

      <section className="silent-tradition section-pad" id="silence">
        <div className="section-head">
          <div className="section-tag light"><span>10</span> THE SILENT TRADITION</div>
          <div><p className="kicker">ONE VOICE · MANY HANDS</p><h2>第一人，<br />从来不是一个人。</h2></div>
        </div>

        <div className="silence-manifesto">
          <p className="giant-i">I</p>
          <div>
            <p className="manifesto-lede">她继承了一片匿名的海洋，<br />然后第一次把“我”说得如此响亮。</p>
            <p>在她之前，神庙里的祭司、书吏、歌者与工匠已经创造了漫长的书写传统。他们记录粮食、神话、法律与哀歌，却很少把自己的名字放进作品。Enheduanna 能够发声，正因为无数沉默的人已经替她造好了语言、体裁、泥板和神庙。</p>
          </div>
        </div>

        <figure className="voices-lift-figure" id="voices-lift">
          <img src="./voices-lift.png" alt="抽象剪影：许多无名者伸出手，共同托举一位古代女性；一条细红线把众人的身体与声音连接起来" />
          <figcaption><span>ONE VOICE / MANY HANDS</span> 她被无数沉默者托举；她留下的“我”，又让更多人学会举手发声。</figcaption>
        </figure>

        <div className="voices-kept">
          <article><span>BEFORE HER</span><h3>沉默者创造了传统</h3><p>没有名字的书吏发展楔形文字，祭司保存仪式，歌者让诗歌进入公共生活。她的“第一声”不是从真空中诞生。</p></article>
          <article><span>AFTER HER</span><h3>沉默者保存了她</h3><p>后继女祭司修缮遗迹，学生反复抄写，考古工人挖出碎片，学者重组文本，泥土与火焰保存了本应消失的声音。</p></article>
          <article><span>BECAUSE OF HER</span><h3>沉默者开始发声</h3><p>女性主义学者、伊拉克流亡诗人和无数普通读者在她的“我”中看见自己的处境，用她留下的语言说出此前无法说出的经验。</p></article>
        </div>

        <blockquote className="final-echo"><p>她是“第一人”；<br />那些守住这声回音的人，同样是第一人。</p><cite>据《恩赫杜安娜：第一人》文稿结尾改写</cite></blockquote>
      </section>

      <section className="watch section-pad" id="watch">
        <div className="watch-copy">
          <div className="section-tag light"><span>11</span> WATCH</div>
          <p className="kicker">TS鼠 · 时间的女儿</p>
          <h2>听完整的故事，<br />再回到泥板。</h2>
          <p>视频以“第一人”为线索，串联美索不达米亚的书写传统、阿卡德帝国、女祭司权力、流放创伤与现代再发现。网页则把证据、争议和来源拆开，方便继续查阅。</p>
          <div className="watch-actions">
            <a className="button blue" href="https://www.bilibili.com/video/BV1o3XXBgEU2/" target="_blank" rel="noreferrer">在 Bilibili 观看 ↗</a>
            <a className="button ink" href="https://www.xiaohongshu.com/explore/69db63fd0000000023025b5d" target="_blank" rel="noreferrer">阅读小红书文案 ↗</a>
          </div>
        </div>
        <div className="video-frame">
          <iframe
            src="https://player.bilibili.com/player.html?bvid=BV1o3XXBgEU2&page=1&high_quality=1&danmaku=0"
            title="恩赫杜安娜：第一人 — TS鼠"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="sources section-pad" id="sources">
        <div className="section-head compact">
          <div className="section-tag"><span>12</span> SOURCES</div>
          <div><p className="kicker">READ FURTHER</p><h2>证据从哪里来？</h2></div>
        </div>
        <p className="source-intro">以下优先列出博物馆藏品记录、原始文本语料库、学术版本与图像授权页。来源之间存在冲突时，正文保留不确定性，并区分历史证据、现代解释与视觉再创作。</p>
        <div className="source-list">
          {sources.map((source) => (
            <a href={source.href} target="_blank" rel="noreferrer" key={source.code}>
              <span>{source.code}</span>
              <small>{source.type}</small>
              <div><b>{source.title}</b><em>{source.org}</em></div>
              <p>{source.note}</p>
              <i>↗</i>
            </a>
          ))}
        </div>
        <a className="notebook-link" href="https://notebooklm.google.com/notebook/607c3089-e539-4491-b567-ad63822d9e24" target="_blank" rel="noreferrer">
          <span>NOTEBOOKLM</span><b>打开 Enheduanna 研究笔记本</b><i>↗</i>
        </a>
      </section>

      <footer>
        <div className="footer-brand"><img src="./tsrat-logo.png" alt="TS鼠 Logo" /><b>时间的女儿 / DAUGHTERS OF TIME</b></div>
        <p>写给那些留下名字的人，也写给所有替她们保存回音的无名者。</p>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </main>
  );
}
