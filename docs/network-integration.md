# Marss network integration — review only

Branch: `feature/marss-network-intake`. No merge or publication authorized.

## Live inspection

Database 597084: Marss Real Estate Network CRM. Full 75-field inventory, IDs, types and select options: [baserow-schema.md](baserow-schema.md). Inspected through signed-in Baserow generated API documentation on 2026-10-20. Existing 100 wholesaler rows remain intact; no records or schemas were modified by this work.

| Website path | Server endpoint | CRM table |
| --- | --- | --- |
| /wholesalers | POST /api/network/wholesalers | Wholesalers 1269267 |
| /buyers | POST /api/network/buyers | Buyers 1269283 |
| /submit-deal | POST /api/network/deals | Deals 1269285 |

## Connection configuration

`lib/network-intake.ts` contains the verified field-ID mappings. No table-ID or field-map environment variables are required anymore; stale BASEROW_*_TABLE_ID and BASEROW_*_FIELD_MAP variables are ignored. Only the server-only `BASEROW_API_TOKEN` is required. Configure it securely in development or a separately approved preview, with create-row permission limited to these three tables. Never place it in NEXT_PUBLIC variables, source control, logs or chat. Baserow Database tokens settings showed no existing tokens, and no token was available to this workspace; Vercel environment inspection returned 403 for team ahmad-qawasmeh-s-projects. The response explicitly requests a team grant for the connector. No CLI credentials were available as a fallback.

Each submission creates one new row via POST. There is no update/delete code. Primary IDs use WEB-W/B/D plus a UUID, with dates and initial Prospect/Received stages. Contact details and every existing form answer are mapped or retained as labeled Notes. Contact consent, notice version and received time are retained in Notes. Internal qualifications, POF, decisions, links and formulas cannot be supplied by visitors.

- Wholesalers: contact/company/email/phone/markets, asset focus, seller access, website source, typed date and stage. General experience goes in Notes rather than a verified deal count or creative-finance score.
- Buyers: contact/company/email/phone/markets/date/stage; free-text buy box, price range, financing and experience go in Notes. Structured price/select fields remain unset pending screening.
- Deals: address, date, asset category, combined name/email/phone in Seller / Source, validated Asking Price, control and stage. A single dollar amount is accepted; ranges/prose are rejected. The form combines city/state into its address answer, which is preserved intact. Income may be rent, NOI or SDE with an unspecified period; it is preserved in Notes, not assumed to be annual NOI. Debt and seller finance narratives also remain in Notes; unknown boolean answers are not falsely asserted by the integration.
- Unsupported categories (including residential 1–4, RV/MHP and business+RE) use the existing Other selection with the original category preserved in Notes. Buyer classification and Source Wholesaler linking remain manual to avoid linking the wrong record.

## Verification and blockers

`node scripts/test-network-intake.cjs`: 20 passing checks, including all three submission payloads, correct table destinations, contact preservation, numeric conversion, consent/email validation, malformed/oversize input, unavailable credentials, CRM permission failures, malformed success responses and timeouts. These tests simulate CRM responses; they do not establish live connectivity or create Baserow records.

`npm run build` passed (24 generated pages), TypeScript checking passed, and `git diff --check` passed.

Live website → endpoint → Baserow tests remain BLOCKED: no server token was available, and Vercel denied team access. No new live QA records were created. Native Baserow form tests from earlier work do not prove this branch's custom API integration.

`vercel.json` disables automatic Git deployment for this branch. Do not override it, deploy a preview, merge or publish without owner approval. Before any remote branch update, verify the guard is included in that same commit.

Remaining launch work: securely supply the scoped token; grant the Vercel connector team access if it is needed to configure preview settings; obtain approval for a preview; submit one clearly labeled test through each website form and verify its persisted values in Baserow. Review rate limiting/bot protection and privacy wording before public recruitment. The existing honeypot is basic protection only. Retrying after an ambiguous network timeout can create a duplicate row; there is no durable idempotency store yet.
