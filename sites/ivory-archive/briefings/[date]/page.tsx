import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { briefings } from "../../briefings";
import { SiteFooter, SiteHeader } from "../../site-shell";

export function generateStaticParams() {
  return briefings.map((briefing) => ({ date: briefing.date }));
}

export default async function BriefingPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const briefingIndex = briefings.findIndex((item) => item.date === date);
  const briefing = briefings[briefingIndex];

  if (!briefing) notFound();

  const newer = briefingIndex > 0 ? briefings[briefingIndex - 1] : null;
  const older = briefingIndex < briefings.length - 1 ? briefings[briefingIndex + 1] : null;

  return (
    <div className="site-shell briefing-page">
      <a className="skip-link" href="#briefing-content">跳到正文</a>
      <SiteHeader active="briefing" />
      <main id="briefing-content">
        <header className="briefing-hero page-frame">
          <div className="briefing-meta-column">
            <Link href="/#archive">← 返回日刊档案</Link>
            <p className="eyebrow">Daily Issue</p>
            <strong>NO. {briefing.issueNo}</strong>
            <span>{briefing.displayDate}</span>
            <div className="mini-stamp">IVORY<br />ARCHIVE</div>
          </div>
          <div className="briefing-title-column">
            <p className="hero-kicker">本期要理解的事</p>
            <h1>{briefing.theme}</h1>
            <p>{briefing.intro}</p>
            <div className="briefing-topic-row">
              {briefing.topics.map((topic) => <span key={topic}>{topic}</span>)}
            </div>
          </div>
          <aside className="issue-index" aria-label="本期目录">
            <p className="eyebrow">In This Issue</p>
            <ol>
              {briefing.stories.map((story, index) => (
                <li key={story.title}>
                  <a href={`#story-${index + 1}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{story.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </header>

        <section className="issue-quick-read page-frame" aria-labelledby="quick-read-title">
          <div>
            <p className="eyebrow">3-Minute Brief</p>
            <h2 id="quick-read-title">先用三分钟掌握本期</h2>
            <p>{briefing.learningGoal}</p>
          </div>
          <ol>
            {briefing.stories.map((story, index) => (
              <li key={story.title}>
                <a href={`#story-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{story.title}</strong>
                  <p>{story.summary}</p>
                </a>
              </li>
            ))}
          </ol>
          <aside>
            <p className="eyebrow">五则怎样连在一起</p>
            <p>{briefing.connection}</p>
          </aside>
        </section>

        <div className="briefing-stories page-frame">
          {briefing.stories.map((story, index) => (
            <article className="long-story" id={`story-${index + 1}`} key={story.title}>
              <header className="long-story-header">
                <span className="long-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <span className="topic-tag">{story.category}</span>
                  <h2>{story.title}</h2>
                  <p>{story.summary}</p>
                </div>
              </header>

              <figure className="long-story-image">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 1060px"
                  unoptimized
                  loading="lazy"
                />
                <figcaption>{story.imageCredit}</figcaption>
              </figure>

              <div className="story-learning-flow">
                <section className="story-section">
                  <p className="section-step">01 · Background</p>
                  <h3>背景</h3>
                  <p>{story.background}</p>
                </section>

                <section className="story-section happened-block">
                  <p className="section-step">02 · Event</p>
                  <h3>事件</h3>
                  <p>{story.happened}</p>
                </section>

                <section className="story-section background-block">
                  <p className="section-step">03 · Details</p>
                  <h3>细节</h3>
                  <ul>{story.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                </section>

                <section className="story-section why-block">
                  <p className="section-step">04 · Analysis</p>
                  <h3>分析</h3>
                  <p>{story.whyItMatters}</p>
                  <aside className="story-source-register">
                    <a
                      data-analytics-event="source_opened"
                      data-analytics-target={`${briefing.date}:${index + 1}:analysis`}
                      href={story.sourceUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {story.sourceName}｜{story.title} <span aria-hidden="true">↗</span>
                    </a>
                    <small className="source-url">{story.sourceDate} · 点开即可阅读原文</small>
                  </aside>
                </section>
              </div>
              <a className="back-to-top" href="#briefing-content">回到本期顶部 ↑</a>
            </article>
          ))}
        </div>

        <section className="issue-synthesis page-frame">
          <p className="eyebrow">Issue Synthesis</p>
          <h2>读完五则之后，记住这一条连接</h2>
          <p>{briefing.connection}</p>
        </section>

        <nav className="issue-navigation page-frame" aria-label="前后期刊">
          {older ? (
            <Link href={`/briefings/${older.date}`}><span>← 上一期</span><strong>第 {older.issueNo} 期 · {older.theme}</strong></Link>
          ) : <span />}
          {newer ? (
            <Link href={`/briefings/${newer.date}`}><span>下一期 →</span><strong>第 {newer.issueNo} 期 · {newer.theme}</strong></Link>
          ) : <Link href="/#archive"><span>已到最新一期</span><strong>返回全部日刊</strong></Link>}
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
