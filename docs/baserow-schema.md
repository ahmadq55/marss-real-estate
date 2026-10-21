# Live Baserow schema inventory

Inspected 2026-10-20 using the signed-in, generated API documentation for database 597084, Marss Real Estate Network CRM. All 75 fields below were inspected. Types distinguish API decimals, select fields and links; no schema or records were changed.

## Wholesalers (1269267)

| Field ID | Exact name | Type |
| --- | --- | --- |
| 11658737 | Wholesaler ID | text |
| 11658738 | Date Added | text |
| 11658739 | Contact Name | text |
| 11658740 | Company | text |
| 11658741 | Email | text |
| 11658742 | Phone | text |
| 11658743 | City | text |
| 11658744 | State | text |
| 11658745 | Markets Covered | text |
| 11658746 | Asset Focus | text |
| 11658747 | Lead Source | text |
| 11658748 | Deals Closed | text |
| 11658749 | Control / Seller Access | text |
| 11658750 | Creative Finance Experience | text |
| 11658751 | Qualification Score | text |
| 11658752 | Tier | text |
| 11658753 | Status | text |
| 11658754 | Last Contact | text |
| 11658755 | Next Follow-up | text |
| 11658756 | Deals Submitted | text |
| 11658757 | Notes | text |
| 11658981 | Deals | link_row → 1269285 |
| 11658991 | Activities | link_row → 1269286 |
| 11659013 | Date Added (Date) | date |
| 11659014 | Last Contact (Date) | date |
| 11659015 | Next Follow-up (Date) | date |
| 11659016 | Deals Closed (Number) | number |
| 11659017 | Deals Submitted (Number) | number |
| 11659018 | Qualification Score (Number) | number |
| 11659019 | Qualification Stage | single_select |
| 11659020 | Qualification Tier | formula (read only) |

## Buyers (1269283)

| Field ID | Exact name | Type |
| --- | --- | --- |
| 11658929 | Buyer ID | text |
| 11658934 | Date Added | date |
| 11658935 | Buyer / Contact | text |
| 11658936 | Company | text |
| 11658937 | Email | text |
| 11658938 | Phone | text |
| 11658939 | Target Markets | long_text (rich text) |
| 11658940 | Asset Classes | multiple_select |
| 11658941 | Min Price | decimal (2 places) |
| 11658942 | Max Price | decimal (2 places) |
| 11658943 | Financing Preference | single_select |
| 11658944 | Required Return | decimal (2 places) |
| 11658945 | POF Verified | boolean |
| 11658946 | Buyer Type | single_select |
| 11658947 | Status | single_select |
| 11658948 | Last Contact | date |
| 11658949 | Next Follow-up | date |
| 11658950 | Notes | long_text |
| 11658993 | Activities | link_row → 1269286 |
| 11659005 | Deal Matches | link_row → 1269287 |

## Deals (1269285)

| Field ID | Exact name | Type |
| --- | --- | --- |
| 11658931 | Deal ID | text |
| 11658958 | Date Received | date |
| 11658959 | Property Address | text |
| 11658960 | City | text |
| 11658961 | State | text |
| 11658962 | Asset Type | single_select |
| 11658963 | Seller / Source | text |
| 11658964 | Asking Price | decimal (2 places) |
| 11658965 | Contract Price | decimal (2 places) |
| 11658966 | Estimated NOI / SDE | decimal (2 places) |
| 11658967 | Existing Debt | decimal (2 places) |
| 11658968 | Assumable? | boolean |
| 11658969 | Seller Finance? | boolean |
| 11658970 | Control / Assignment Rights | long_text |
| 11658971 | Underwriting Model | text |
| 11658972 | Decision | single_select |
| 11658973 | Pipeline Stage | single_select |
| 11658974 | Investor Price | decimal (2 places) |
| 11658975 | Next Action Date | date |
| 11658978 | Notes | long_text |
| 11658980 | Source Wholesaler | link_row → 1269267 |
| 11658995 | Activities | link_row → 1269286 |
| 11659003 | Deal Matches | link_row → 1269287 |
| 11659025 | Gross Assignment Spread | formula (read only) |

## Select options relevant to intake

- Wholesaler Qualification Stage and Buyer Status: Prospect, Contacted, Qualifying, Qualified, Active, Nurture, Disqualified.
- Buyer Asset Classes / Deal Asset Type: Multifamily, Office, Retail, Industrial, Mixed Use, Land, Self-Storage, Hospitality, Other.
- Buyer Financing Preference: All Cash, Conventional, Bridge, Creative Finance, Seller Finance, Other.
- Buyer Type: Institutional, Private Investor, Family Office, Developer, Fund, Other.
- Deal Decision: Pursue, Further Diligence, Pass.
- Deal Pipeline Stage: Received, Screening, Underwriting, LOI Submitted, Under Contract, Disposition, Closed, Passed.

Residential 1–4, RV/MHP and business-with-real-estate are not dedicated select options in the existing tables. The draft preserves original deal category in Notes and uses Other for unsupported categories. Buyer narratives stay in Notes for manual classification. No options or existing records were overwritten.
