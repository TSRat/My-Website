import type { Metadata } from "next";
import "./globals.css";

const siteBasePath =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH ??
  "/My-Website/sartre-nausea-guide";

export const metadata: Metadata = {
  title: "《恶心》入门｜当世界不再替你解释自己",
  description: "为初读者设计的萨特《恶心》互动导读：故事、人物、恶心时刻、偶然性、阅读实验与学习路线。",
  icons: {
    icon: `${siteBasePath}/favicon.svg`,
    shortcut: `${siteBasePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
