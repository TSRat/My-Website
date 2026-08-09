import Link from "next/link";
import Image from "next/image";

export function SiteHeader({ active }: { active?: "home" | "briefing" }) {
  return (
    <header className="site-header page-frame">
      <Link className="brand" href="/" aria-label="每日思想简报首页">
        <Image className="brand-logo" src="/tsrat-logo.png" alt="TS鼠 Logo" width={1104} height={293} unoptimized priority />
        <span className="brand-copy"><strong>每日思想简报</strong><em>Daily Thought Briefing</em></span>
      </Link>
      <nav aria-label="主导航">
        <Link className={active === "home" ? "active" : ""} href="/">首页</Link>
        <Link className={active === "briefing" ? "active" : ""} href="/#archive">日刊</Link>
        <Link href="/#topics">主题索引</Link>
        <Link href="/#method">阅读方法</Link>
        <Link data-analytics-event="data_entry_opened" data-analytics-target="header" href="/#data">Data</Link>
        <Link href="/#about">关于</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-frame footer-grid">
        <div className="footer-identity">
          <a className="portfolio-home-link" href="../THE-LIVING-ATLAS/" aria-label="前往 The Living Atlas 主页">
            <Image className="footer-logo portfolio-home-logo portfolio-home-logo--light" src="/tsrat-logo.png" alt="TSRat Logo" width={1104} height={293} unoptimized />
          </a>
          <p className="footer-brand">TS鼠 · 每日思想简报</p>
          <p>先介绍人物与概念，再讲事件、细节和影响，让第一次接触的人也能读懂。</p>
        </div>
        <div className="footer-links">
          <Link href="/#today">今日五则</Link>
          <Link href="/#archive">全部日刊</Link>
          <Link href="/#method">阅读方法</Link>
          <Link data-analytics-event="data_entry_opened" data-analytics-target="footer" href="/#data">Data</Link>
        </div>
        <p className="footer-note">Ivory Archive · 始于 2026</p>
      </div>
    </footer>
  );
}
