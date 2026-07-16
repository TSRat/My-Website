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
            <h1 id="hero-title">把今天的文化新闻，变成明天的思考素材</h1>
            <span className="title-stroke" />
            <p className="hero-deck">
              每天 5 个值得停留的故事，沿着艺术人文、社会科学与女性主义三条线索展开。
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href={`/briefings/${latest.date}`}>
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
              <span className="archive-stamp">2026<br />07.14<br />No.01</span>
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

        <section className="method-section page-frame" id="method" aria-labelledby="method-title">
          <div className="method-title-block">
            <p className="eyebrow">Editorial Method</p>
            <h2 id="method-title">“不重复”不只是标题不同</h2>
          </div>
          <div className="method-copy">
            <p>
              每天发布前，候选内容会与历期的<strong>人物、作品、事件、核心判断和创作角度</strong>逐项比较。
              同一事件只有出现实质性进展，并能提出新的问题时，才会再次进入简报。
            </p>
            <ol>
              <li><span>1</span>生成 5 条候选内容并核验来源。</li>
              <li><span>2</span>逐条与全部历史日刊进行语义比对。</li>
              <li><span>3</span>替换实质重复项，再重新检查一次。</li>
              <li><span>4</span>发布独立日刊页，并把入口写回首页。</li>
            </ol>
            <details>
              <summary>查看首期已登记的历史基线</summary>
              <p>{knownHistoryTopics.join("；")}。这些主题不会仅靠改写标题再次出现。</p>
            </details>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="page-frame about-grid">
            <p className="about-mark" aria-hidden="true">TS鼠</p>
            <div>
              <p className="eyebrow">About This Archive</p>
              <h2>给好奇心一处可反复回来的房间</h2>
            </div>
            <p>
              这不是信息流，也不是把五条新闻压缩成五个结论。它保留事实、结构与冲突，
              再为内容创作留下一个可继续追问的入口。
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
