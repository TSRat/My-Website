import Image from "next/image";
import Link from "next/link";
import { ArchiveExplorer } from "./archive-explorer";
import { briefings, knownHistoryTopics } from "./briefings";
import { SiteFooter, SiteHeader } from "./site-shell";

export default function Home() {
  const latest = briefings[0];
  const latestCounts = {
    humanities: latest.stories.filter((story) => story.category.includes("艺术人文")).length,
    socialScience: latest.stories.filter((story) => story.category.includes("社会科学")).length,
    feminism: latest.stories.filter((story) => story.category.includes("女性主义")).length,
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        跳到正文
      </a>
      <SiteHeader active="home" />

      <main id="main-content">
        <section className="hero page-frame" aria-labelledby="hero-title">
          <aside className="hero-ledger" aria-label="本期档案信息">
            <p className="eyebrow">Issue / Date</p>
            <p className="ledger-date">{latest.displayDate} · 第 {latest.issueNo} 期</p>
            <span className="ledger-rule" />
            <p className="eyebrow">Archive No.</p>
            <p className="archive-code">A-{latest.date.replaceAll("-", "")}-0001</p>
            <span className="dotted-rule" />
            <p className="eyebrow">Ivory Archive</p>
            <p className="ledger-cn">纸上博物馆</p>
            <span className="specimen-icon" aria-hidden="true">❦</span>
          </aside>

          <div className="hero-copy">
            <p className="hero-kicker">每日思想简报 · Daily Thought Briefing</p>
            <h1 id="hero-title">从“发生了什么”开始，读懂文化与社会新闻</h1>
            <span className="title-stroke" />
            <p className="hero-deck">
              15 期、75 则新闻都按同一条初学者路径重写：先说明事情，再补背景、解释原因，
              分开事实与分析，最后留下可以继续思考的问题。
            </p>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                data-analytics-event="briefing_opened"
                data-analytics-target={latest.date}
                href={`/briefings/${latest.date}`}
              >
                阅读今日简报 <span aria-hidden="true">→</span>
              </Link>
              <a className="button button-secondary" href="#archive">
                浏览全部日刊
              </a>
            </div>
            <p className="unique-status">
              <span aria-hidden="true">✓</span>
              {latest.uniqueCount}/{latest.stories.length} 今日选题与历史档案无实质重复
            </p>
          </div>

          <div className="hero-art" aria-label="植物标本式档案插图">
            <div className="paper paper-back" />
            <div className="paper paper-middle" />
            <div className="paper paper-front">
              <p className="vertical-label">IVORY ARCHIVE</p>
              <Image
                src="/ivory-botanical-archive.png"
                alt="森林绿色的植物标本枝叶"
                width={800}
                height={1000}
                unoptimized
                priority
              />
              <span className="archive-stamp">
                {latest.date.slice(0, 4)}<br />
                {latest.date.slice(5, 7)}.{latest.date.slice(8, 10)}<br />
                No.{latest.issueNo}
              </span>
            </div>
          </div>
        </section>

        <section className="today page-frame" id="today" aria-labelledby="today-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Today&apos;s Index · No. {latest.issueNo}</p>
              <h2 id="today-title">今日五则</h2>
            </div>
            <p>{latest.theme}</p>
          </div>

          <div className="story-card-grid">
            {latest.stories.map((story, index) => (
              <Link
                className={`story-card card-tone-${(index % 3) + 1}`}
                data-analytics-event="briefing_opened"
                data-analytics-target={`${latest.date}#story-${index + 1}`}
                href={`/briefings/${latest.date}#story-${index + 1}`}
                key={story.title}
              >
                <div className="story-card-image">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 45vw"
                    unoptimized
                    loading="eager"
                  />
                </div>
                <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="card-body">
                  <span className="topic-tag">{story.category}</span>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                  <span className="read-more">展开阅读 <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="archive-section" id="archive" aria-labelledby="archive-title">
          <div className="page-frame">
            <div className="section-heading section-heading-light">
              <div>
                <p className="eyebrow">Daily Archive</p>
                <h2 id="archive-title">日刊档案</h2>
              </div>
              <p>每一期都是独立入口，也会回到同一张不断生长的知识地图。</p>
            </div>
            <ArchiveExplorer briefings={briefings} />
          </div>
        </section>

        <section className="topic-index page-frame" id="topics" aria-labelledby="topics-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Topic Index</p>
              <h2 id="topics-title">三条长期线索</h2>
            </div>
            <p>不是把新闻塞进分类，而是持续追问同一批问题如何改变形状。</p>
          </div>
          <div className="topic-columns">
            <article>
              <span>01</span>
              <h3>艺术人文</h3>
              <p>艺术、设计、电影、音乐、文学、建筑、戏剧、历史、哲学、宗教与文化史。</p>
              <a href="#archive">本期 {latestCounts.humanities} 则 →</a>
            </article>
            <article>
              <span>02</span>
              <h3>社会科学</h3>
              <p>心理学、社会学、人类学、语言学、传播学、天文学与地理学等，并关注科学发现背后的制度、技术基础设施和社会影响。</p>
              <a href="#archive">本期 {latestCounts.socialScience} 则 →</a>
            </article>
            <article>
              <span>03</span>
              <h3>女性主义</h3>
              <p>女性历史、性别、女性主义理论、健康、照护与权力结构。</p>
              <a href="#archive">本期 {latestCounts.feminism} 则 →</a>
            </article>
          </div>
        </section>

        <section className="data-section" id="data" aria-labelledby="data-title">
          <div className="page-frame data-grid">
            <div className="data-heading">
              <p className="eyebrow">Data / Analytics</p>
              <h2 id="data-title">档案如何观察自己的使用</h2>
              <p>
                这里只公开测量边界，不展示尚不存在的访问量，也不把阅读质量压缩成停留时长。
              </p>
            </div>
            <dl className="data-status" aria-label="当前分析状态">
              <div>
                <dt>Provider</dt>
                <dd>None</dd>
              </div>
              <div>
                <dt>Signals</dt>
                <dd>搜索、筛选、打开日刊</dd>
              </div>
              <div>
                <dt>Privacy</dt>
                <dd>无 Cookie、无持久存储、无身份、无原始搜索文本</dd>
              </div>
            </dl>
            <p className="data-note">
              事件契约已经就绪；只有在明确数据来源、会话定义、保留期限与使用目的之后，才会接入分析供应商。
              <a href="/ivory-site-manifest.json">查看机器可读 manifest →</a>
            </p>
          </div>
        </section>

        <section className="method-section page-frame" id="method" aria-labelledby="method-title">
          <div className="method-title-block">
            <p className="eyebrow">Editorial Method</p>
              <h2 id="method-title">先分清事实、分析与反思</h2>
          </div>
          <div className="method-copy">
            <p>
              每则内容都先给出可核对的<strong>原始来源</strong>，再把编辑解释明确标出。
              你不需要听说过人物、机构或专业术语，也能沿着固定顺序读完。
            </p>
            <ol>
              <li><span>1</span><strong>发生了什么：</strong>先用普通语言说明事件与参与者。</li>
              <li><span>2</span><strong>为什么值得关注：</strong>解释它会改变谁、什么制度或哪种理解。</li>
              <li><span>3</span><strong>证据与边界：</strong>列出来源能证明的内容，也说明不能证明什么。</li>
              <li><span>4</span><strong>分析与反思：</strong>把编辑判断与事实分开，并给出继续追问的练习。</li>
            </ol>
            <details>
              <summary>查看选题去重方法</summary>
              <p>
                发布前会比较历期的人物、作品、事件、核心判断和创作角度。
                历史基线包括：{knownHistoryTopics.join("；")}。同一事件只有出现实质进展并提出新问题时才会再次进入简报。
              </p>
            </details>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="page-frame about-grid">
            <p className="about-mark" aria-hidden="true">TS鼠</p>
            <div>
              <p className="eyebrow">About This Archive</p>
              <h2>没学过这个领域，也应该能从第一页开始</h2>
            </div>
            <p>
              这不是默认读者已经懂行的信息流。每期先给三分钟摘要，再用背景、证据、分析和反思逐层展开；
              原始来源同时放在文章开头与结尾，方便随时核对。
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
