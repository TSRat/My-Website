import { readFile, writeFile } from 'node:fs/promises';

async function main() {
  let content = await readFile('scripts/build-github-pages.mjs', 'utf8');

  // Insert THE-LIVING-ATLAS into staticSites
  const insertIndex = content.indexOf('];', content.indexOf('const staticSites'));
  if (insertIndex > -1 && !content.includes('THE-LIVING-ATLAS')) {
    const newSite = `
  {
    slug: "THE-LIVING-ATLAS",
    className: "living-atlas",
    artLabel: "ATLAS",
    eyebrow: "TSRAT · MAIN HUB",
    title: "The Living Atlas 开放档案馆",
    description: "在算法与人性之间建立桥梁：历史、女性主义、心理学、设计、技术与文学的公共档案馆主站。",
    metadata: [["类型", "主页 (Hub)"], ["架构", "Editorial Digital Archive"]],
  },
`;
    content = content.slice(0, insertIndex) + newSite + content.slice(insertIndex);
  }

  // Add a prominent link in hubPage()
  const hubPageMarker = '<header class="masthead">';
  const mastheadEnd = '</header>';
  const mastheadEndIndex = content.indexOf(mastheadEnd, content.indexOf(hubPageMarker));
  
  if (mastheadEndIndex > -1 && !content.includes('👉 进入全新主站')) {
    const linkHtml = `\n      <a class="button" href="THE-LIVING-ATLAS/" style="margin-top: 1.5rem; display: inline-block; background: #0047AB; color: white; padding: 0.8rem 1.5rem; border-radius: 4px; text-decoration: none; font-weight: bold;">👉 进入全新主站：The Living Atlas 开放档案馆</a>`;
    content = content.slice(0, mastheadEndIndex) + linkHtml + content.slice(mastheadEndIndex);
  }

  await writeFile('scripts/build-github-pages.mjs', content);
  console.log('Patched scripts/build-github-pages.mjs successfully!');
}

main().catch(console.error);
