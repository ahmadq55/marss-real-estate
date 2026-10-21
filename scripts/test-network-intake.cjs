const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
function load(file, overrides = {}) {
  const code = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const exports = {};
  vm.runInNewContext(code, { exports, require: key => overrides[key] || require(key), crypto, process, TextEncoder, AbortSignal, console: { error() {} }, fetch: (...args) => mockFetch(...args) }, { filename: file });
  return exports;
}
let mockFetch = async () => { throw Error('Unexpected network request'); };
const mapping = load('lib/network-intake.ts');
const { POST } = load('app/api/network/[kind]/route.ts', { '@/lib/network-intake': mapping });
const base = { name: 'TEST ONLY - Marss connection QA', email: 'crm-test@example.com', markets: 'Houston TX', consent: true };
const samples = {
  wholesalers: { ...base, company: 'TEST ONLY', assetFocus: 'Residential 1–4', experience: 'Five completed deals', sellerAccess: 'TEST ONLY - no real contract' },
  buyers: { ...base, assetFocus: 'Residential 1–4 and business + RE', priceRange: '$300k–$2m', funding: 'Seller carry / equity', experience: 'TEST ONLY' },
  deals: { ...base, address: 'TEST ONLY - no actual property', assetType: 'Residential 1–4', askingPrice: '$325,000.00', income: '$4,000 monthly rent', debt: 'Unknown; ask seller', financing: 'Not confirmed', notes: 'TEST ONLY', control: 'No actual assignment' }
};
async function post(kind, data) { return POST(new Request('http://localhost/api/network/' + kind, { method: 'POST', body: typeof data === 'string' ? data : JSON.stringify(data) }), { params: Promise.resolve({ kind }) }); }
(async () => {
  let checks = 0;
  process.env.BASEROW_API_TOKEN = 'test-only-placeholder';
  for (const [kind, data] of Object.entries(samples)) {
    let calls = 0;
    mockFetch = async (url, init) => {
      calls++; assert.equal(url, `https://api.baserow.io/api/database/rows/table/${mapping.intakeTables[kind]}/`);
      assert.equal(init.method, 'POST');
      const body = JSON.parse(init.body);
      assert.ok(Object.keys(body).every(k => /^field_\d+$/.test(k)));
      if (kind === 'wholesalers') { assert.equal(body.field_11658739, base.name); assert.equal(body.field_11659019, 'Prospect'); assert.match(body.field_11658757, /Five completed deals/); assert.equal(body.field_11659018, undefined); }
      if (kind === 'buyers') { assert.equal(body.field_11658935, base.name); assert.match(body.field_11658950, /Residential 1–4 and business \+ RE/); assert.equal(body.field_11658945, undefined); assert.equal(body.field_11658940, undefined); }
      if (kind === 'deals') { assert.match(body.field_11658963, /crm-test@example.com/); assert.equal(body.field_11658964, '325000.00'); assert.equal(body.field_11658962, 'Other'); assert.match(body.field_11658978, /Residential 1–4/); assert.match(body.field_11658978, /monthly rent/); assert.equal(body.field_11658966, undefined); assert.equal(body.field_11658980, undefined); }
      return Response.json({ id: 123 });
    };
    const res = await post(kind, data); assert.equal(res.status, 200); assert.equal((await res.json()).ok, true); assert.equal(calls, 1); checks++;
  }
  mockFetch = async () => { throw Error('Must not reach CRM'); };
  for (const [kind, data] of Object.entries(samples)) {
    assert.equal((await post(kind, { ...data, consent: false })).status, 400); checks++;
    assert.equal((await post(kind, { ...data, email: 'bad' })).status, 400); checks++;
  }
  assert.equal((await post('deals', { ...samples.deals, askingPrice: '325k–400k' })).status, 400); checks++;
  assert.equal((await post('buyers', '{bad')).status, 400); checks++;
  assert.equal((await post('buyers', '[]')).status, 400); checks++;
  assert.equal((await post('toString', base)).status, 404); checks++;
  assert.equal((await post('buyers', JSON.stringify({ padding: 'a'.repeat(21000) }))).status, 413); checks++;
  assert.equal((await post('buyers', { website: 'spam' })).status, 200); checks++;
  delete process.env.BASEROW_API_TOKEN;
  assert.equal((await post('buyers', samples.buyers)).status, 503); checks++;
  process.env.BASEROW_API_TOKEN = 'test-only-placeholder';
  for (const response of [Response.json({ error: 'denied' }, { status: 403 }), Response.json({}), Response.json({ id: 0 })]) {
    mockFetch = async () => response;
    assert.equal((await post('buyers', samples.buyers)).status, 502); checks++;
  }
  mockFetch = async () => { throw Error('timeout'); };
  assert.equal((await post('buyers', samples.buyers)).status, 502); checks++;
  console.log(`${checks} checks passed. CRM responses simulated; no live rows created.`);
})().catch(err => { console.error(err); process.exitCode = 1; });
