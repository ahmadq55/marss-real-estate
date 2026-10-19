# Marss network intake — unpublished review

Status: draft; no website deployment or production-branch changes authorized.

## Proposed routes

| Page | Route after approval | CRM destination |
| --- | --- | --- |
| Wholesaler Registration | /wholesaler-registration | Wholesalers, table 1269267 |
| Buyer Registration | /buyer-registration | Buyers, table 1269283 |
| Deal Submission | /submit-a-deal | Deals, table 1269285 |

Each page uses the existing Marss logo, Inter typography, black/gold palette and footer. Existing pages and contact forms remain in place. Three footer links and sitemap entries make the new pages discoverable after release. The shared shell embeds native Baserow forms; there are no API keys or browser-side database credentials. A new-tab link is available if an iframe cannot load. CSP permits frames only from baserow.io and retains existing connection and framing restrictions.

## Form configuration and test results — 2026-10-18

| Form | Test | Observed CRM result |
| --- | --- | --- |
| Existing Wholesaler Registration | Submitted native form | Row 107; contact, email, Houston/TX, Texas markets and asset focus matched |
| Existing Buyer Registration | Submitted native form | Row 7; contact, email, min price 100000 and max price 500000 matched |
| New Deal Submission Form (Draft), view 2533124 | Submitted signed-in native preview while public=false | Row 7; address, Houston/TX, Multifamily, contact, asking 325000, annual NOI/SDE 42000, existing debt 75000, authority statement and notes matched |

All submissions displayed a success confirmation. Tests used clearly labeled fictional records and example.com emails. After read-back, all three QA rows were moved to recoverable Trash. Final counts: 100 original blank Wholesalers rows; zero Buyers and zero Deals. The deal form remains public=false. No original rows were changed.

## Validation

- `npm run build`: passed; existing and three new routes generated.
- TypeScript: passed.
- `node scripts/verify-network-pages.cjs`: passed for form URLs, one iframe per page, descriptive iframe titles, fallback links, canonical metadata, branding, CSP, and representative original routes.
- React review: shared server component; no added hooks, client data fetching, API credentials or custom submission endpoint. Responsive layout, semantic headings, current-page navigation and skip link included.

## Verification limits

The branded website-to-iframe submission path has NOT been exercised in a rendered browser. This environment has no supported managed local preview browser skill; no preview or production deployment was created. The direct native-form-to-CRM paths were exercised, including signed-in access to the private deal form. Anonymous deal submissions and mobile/desktop visual QA remain pending an approved preview or release. Do not describe the website as fully end-to-end tested yet.

The Baserow registration forms use manual IDs and qualification/follow-up fields. Registration does not automatically qualify contacts, assign IDs, set dates, link a source wholesaler, or send email notifications. Blank intake dates remain blank. The existing optional debt-assumption and seller-finance checkboxes store unchecked as false; unknown financing details should be clarified during screening.

## Approval and release

1. Review this draft and page copy.
2. Approve preview/release and public sharing of Deal Submission Form (Draft).
3. Enable the deal form's share link, then test anonymous submission through each branded page in the deployed preview, including validation and desktop/mobile rendering.
4. Remove only the new labeled QA submissions after testing.
5. Merge/release to production only after approval. Existing main branch and deployed pages are preserved.

The draft branch is explicitly excluded from automatic Vercel deployment in `vercel.json`. Other branches retain their existing default behavior. Do not deploy this draft or enable the deal form until approval.

## Review and publication status

On 2026-10-19, the owner approved uploading this draft branch to the public GitHub repository for review. This approval does not authorize website deployment, merging into main, or public sharing of the deal form. Automatic deployment remains disabled for the draft branch. Branded-page browser tests remain pending an approved preview.
