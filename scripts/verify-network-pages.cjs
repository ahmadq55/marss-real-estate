const fs = require('node:fs');
const assert = require('node:assert/strict');
const config = require('../next.config.js');
const pages = [
 ['wholesaler-registration', 'Wholesaler Registration', 'q3TRxlduWfiMI0w6Dyia4nuhuXsh5jl_V9EgVe1WbJY'],
 ['buyer-registration', 'Buyer Registration', 'QyzFVsdXDFro5HFxNZIm3_tLXYTpk94hbSMyAgMiIzA'],
 ['submit-a-deal', 'Deal Submission', 'RkMZKLM-_sDjQwRQtHF3hLskwa-FKh9_aJ5_asCi1_I'],
];
(async () => {
 for (const [route, title, slug] of pages) {
  const html = fs.readFileSync(`.next/server/app/${route}.html`, 'utf8');
  assert.equal((html.match(/<iframe\b/g) || []).length, 1, route);
  assert(html.includes(`src="https://baserow.io/form/${slug}"`), route);
  assert(html.includes(`title="${title} form"`), route);
  assert(html.includes(`href="https://baserow.io/form/${slug}"`), route);
  assert(html.includes(`href="https://marssrealestate.com/${route}"`), route);
  assert(html.includes('Network navigation') && html.includes('What happens next'), route);
  assert(html.includes('MARSS') && html.includes('REAL ESTATE'), route);
  assert(!html.includes('BASEROW_TOKEN') && !html.includes('Authorization: Token'), route);
  console.log(`PASS ${route}: expected embed, fallback, canonical, branding, accessible title`);
 }
 const headers = await config.headers();
 const csp = headers.find(h => h.source === '/(.*)').headers.find(h => h.key === 'Content-Security-Policy').value;
 assert(csp.includes('frame-src https://baserow.io;'));
 assert(csp.includes("connect-src 'self';") && csp.includes("frame-ancestors 'none';"));
 const existing = ['index.html', 'resources.html', 'resources/equity-carry-guide.html', 'acquisitions/multifamily.html'];
 for (const route of existing) assert(fs.existsSync(`.next/server/app/${route}`), route);
 console.log('PASS CSP allows only Baserow frames; original routes still built');
})().catch(error => { console.error(error); process.exitCode = 1; });
