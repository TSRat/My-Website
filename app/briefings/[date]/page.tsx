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
  const briefing = briefings.find((item) => item.date === date);

  if (!briefing) notFound();

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
            <p className="hero-kicker">今日主题</p>
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
                <Image src={story.image} alt={story.imageAlt} fill sizes="(max-width: 760px) 100vw, 1060px" />
                <figcaption>{story.imageCredit}</figcaption>
              </figure>

              <div className="story-content-grid">
                <div className="story-prose">
                  <section>
                    <h3>发生了什么</h3>
                    <p>{story.happened}</p>
                  </section>
                  <section>
                    <h3>为什么重要</h3>
                    <p>{story.importance}</p>
                  </section>
                  <section className="creator-angle">
                    <h3>可创作角度</h3>
                    <p>{story.creatorAngle}</p>
                  </section>
                </div>
                <aside className="fact-file">
                  <p className="eyebrow">Fact File</p>
                  <ul>{story.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                  <a href={story.sourceUrl} rel="noreferrer" target="_blank">
                    查看来源：{story.sourceName} <span aria-hidden="true">↗</span>
                  </a>
                  <small>{story.sourceDate}</small>
                </aside>
              </div>
              <a className="back-to-top" href="#briefing-content">回到本期顶部 ↑</a>
            </article>
          ))}
        </div>

        <section className="issue-end page-frame">
          <p className="eyebrow">End of Issue No. {briefing.issueNo}</p>
          <h2>今天先读到这里，明天再为档案增加五条新线索。</h2>
          <div>
            <Link className="button button-primary" href="/#archive">返回全部日刊</Link>
            <Link className="button button-secondary" href="/#method">查看去重方法</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
