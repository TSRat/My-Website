import fs from 'fs';

const html = fs.readFileSync('THE-LIVING-ATLAS/index.html', 'utf8');

// 1. Swap titles in Sites section
let indexHtml = html
  .replace(
    /<p class="metadata">IVORY ARCHIVE<\/p>\s*<h4>Knowledge Archive<\/h4>/,
    '<p class="metadata">Knowledge Archive</p>\n              <h4>IVORY ARCHIVE</h4>'
  )
  .replace(
    /<p class="metadata">HYPATIA<\/p>\s*<h4>Daughters of Time<\/h4>/,
    '<p class="metadata">Daughters of Time</p>\n              <h4>HYPATIA</h4>'
  )
  .replace(
    /<p class="metadata">ENHEDUANNA<\/p>\s*<h4>Daughters of Time<\/h4>/,
    '<p class="metadata">Daughters of Time</p>\n              <h4>ENHEDUANNA</h4>'
  )
  .replace(
    /<p class="metadata">MELROMARC SISTERS<\/p>\s*<h4>Fan-Created Story Archive<\/h4>/,
    '<p class="metadata">Fan-Created Story Archive</p>\n              <h4>MELROMARC SISTERS</h4>'
  );

// Add language switcher to indexHtml
indexHtml = indexHtml.replace(
  '<a href="https://github.com/TSRat" target="_blank" class="social-link">GitHub</a>',
  '<a href="https://github.com/TSRat" target="_blank" class="social-link">GitHub</a>\n      <a href="zh.html" class="social-link" style="margin-left: 1rem; color: var(--c-cobalt);">中 / EN</a>'
);

// 2. Create zh.html by replacing text in indexHtml
let zhHtml = indexHtml
  .replace(
    '<a href="zh.html" class="social-link" style="margin-left: 1rem; color: var(--c-cobalt);">中 / EN</a>',
    '<a href="index.html" class="social-link" style="margin-left: 1rem; color: var(--c-cobalt);">EN / 中</a>'
  )
  .replace('NO SINGLE<br>\n            DISCIPLINE<br>\n            IS ENOUGH.', '单一学科远未足够 ｜<br>NO SINGLE<br>DISCIPLINE<br>IS ENOUGH.')
  .replace('History · Feminism · Psychology<br>\n            Design · Technology · Literature', '历史 · 女性主义 · 心理学<br>设计 · 技术 · 文学')
  .replace('>Worlds<', '>创作宇宙 ｜ Worlds<')
  .replace('>Archive<', '>全站档案 ｜ Archive<')
  .replace('>Knowledge<', '>知识图谱 ｜ Knowledge<')
  .replace('>Works<', '>代表作品 ｜ Works<')
  .replace('>Now<', '>最近状态 ｜ Now<')
  .replace('>NOW / JUL 2026<', '>最近状态 ｜ NOW / JUL 2026<')
  .replace('>WRITING<', '>写作中 ｜ WRITING<')
  .replace('>BUILDING<', '>建设中 ｜ BUILDING<')
  .replace('>WORKING ON<', '>进行中 ｜ WORKING ON<')
  .replace('>004 / DAUGHTERS OF TIME<', '>004 / 时间的女儿 ｜ DAUGHTERS OF TIME<')
  .replace('She did not die<br>\n              to become a symbol.', '她的死亡不是为了成为一个符号。<br>She did not die to become a symbol.')
  .replace('Alexandria<br>\n              c. 355–415 CE', '亚历山大里亚 ｜ Alexandria<br>约公元 355–415')
  .replace('>ENTER THE STORY →<', '>进入故事 ｜ ENTER THE STORY →<')
  .replace('<h3>Historical Women</h3>', '<h3>历史女性 ｜ Historical Women</h3>')
  .replace('<h3>Knowledge & Culture</h3>', '<h3>知识与文化 ｜ Knowledge & Culture</h3>')
  .replace('<h3>Stories & Worlds</h3>', '<h3>故事与世界 ｜ Stories & Worlds</h3>')
  .replace('<h3>Visual Systems</h3>', '<h3>视觉系统 ｜ Visual Systems</h3>')
  .replace('<h3>AI & Engineering</h3>', '<h3>AI与工程 ｜ AI & Engineering</h3>')
  .replace('<h3>Interactive Projects</h3>', '<h3>交互项目 ｜ Interactive Projects</h3>')
  .replace('>EXPLORE KNOWLEDGE<', '>探索知识库 ｜ EXPLORE KNOWLEDGE<')
  .replace('>Arts & Humanities<', '>艺术与人文 ｜ Arts & Humanities<')
  .replace('>Psychology & Society<', '>心理学与社会 ｜ Psychology & Society<')
  .replace('>Feminism & Women<', '>女性主义 ｜ Feminism & Women<')
  .replace('>Design<', '>设计 ｜ Design<')
  .replace('>Technology & AI<', '>技术与AI ｜ Technology & AI<')
  .replace('>Culture & Internet<', '>文化与互联网 ｜ Culture & Internet<')
  .replace('>SITES / 012<', '>独立网站 ｜ SITES / 012<')
  .replace('>LATEST<', '>最新动态 ｜ LATEST<')
  .replace('>Hypatia website updated<', '>希帕蒂娅主页更新 ｜ Hypatia website updated<')
  .replace('>New note: Feminism and terminology<', '>新笔记：女性主义与术语 ｜ New note: Feminism and terminology<')
  .replace('>THE INDEX<', '>总索引 ｜ THE INDEX<')
  .replace('>View full index →<', '>查看完整索引 ｜ View full index →<')
  .replace('>Return to root Hub<', '>返回全站总入口 ｜ Return to root Hub<')
  .replace('Search ⌘K', '搜索 ｜ Search ⌘K');

fs.writeFileSync('THE-LIVING-ATLAS/index.html', indexHtml);
fs.writeFileSync('THE-LIVING-ATLAS/zh.html', zhHtml);
console.log('Done generating localization!');
