# Marss network integration — review only

Branch: `feature/marss-network-intake`. No merge or publication authorized.

## Website connection

| Website path | Server endpoint | Destination |
| --- | --- | --- |
| /wholesalers | POST /api/network/wholesalers | Wholesalers |
| /buyers | POST /api/network/buyers | Buyers |
| /submit-deal | POST /api/network/deals | Deals |

The server mappings were checked against the live CRM schema. Each valid submission creates a new row; the endpoint has no update or delete operation. Existing records were preserved.

`BASEROW_API_TOKEN` is server only. The approved credential was verified as Create-only for the three intake tables and configured privately for local testing. It is not committed, printed or sent to visitors. Hosting configuration is still pending. Table and field mappings are in `lib/network-intake.ts`; the previous environment-based field maps are no longer used.

Contact details, receipt dates, initial intake stages and consent are retained. Free-text buy boxes, financing, income and debt narratives remain labeled notes rather than guessed numeric/select values. Unsupported asset categories preserve the original answer in notes. Buyer classification and wholesaler linking remain manual. Visitors cannot set internal qualifications, POF, decisions, links or formulas.

## Verification

- 20 simulated submission and error-handling checks passed.
- TypeScript checking and production build passed.
- On 2026-10-21 all three local page routes returned HTTP 200.
- The built website's three server endpoints each returned HTTP 200 after real CRM saves using synthetic test submissions.
- Persisted test records were independently inspected in the signed-in CRM. Test records remain clearly marked for owner review; existing records were not modified or deleted.
- Detailed record identifiers and CRM evidence are kept out of this public report.

These are successful live server-to-CRM integration tests, not complete browser-click E2E tests. The cloud browser could not reach the isolated local server. Browser rendering, form clicking and success-message verification require an approved preview environment.

## Remaining blockers

Vercel denied access to the project's team settings. The credential is configured locally only; hosting still needs secure server-side configuration. A hosted preview and final browser tests require owner approval. No preview or production deployment was created, and nothing was merged.

`vercel.json` disables automatic Git deployment for this development branch. Do not override it or deploy without approval. Before public launch, review privacy wording and add suitable rate limiting/bot protection. The current honeypot is basic protection; retrying an ambiguous timeout can create a duplicate because durable idempotency is not yet implemented.
