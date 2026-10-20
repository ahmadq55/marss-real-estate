# Marss network integration — preview setup

This branch adds /wholesalers, /buyers and /submit-deal with a server-only Baserow API endpoint.

## Required Vercel environment variables (preview first)
- BASEROW_API_TOKEN: scoped Baserow database token with create-row permission for the three tables (never expose to browser).
- BASEROW_WHOLESALERS_TABLE_ID, BASEROW_BUYERS_TABLE_ID, BASEROW_DEALS_TABLE_ID: actual table IDs, not view IDs.
- BASEROW_WHOLESALERS_FIELD_MAP, BASEROW_BUYERS_FIELD_MAP, BASEROW_DEALS_FIELD_MAP: JSON mapping form input keys to *actual Baserow column names*, e.g. {"name":"Contact Name","email":"Email","phone":"Phone","markets":"Markets Covered","company":"Company"}.

Match all mappings to current live table field names/types. A Baserow field whose type is select/link/date needs its expected schema; do not map free-text fields to those types without conversion. Include required inputs. Do not enable public recruitment until test records appear in the correct tables.

## Validation steps
1. Deploy a preview branch (no production merge).
2. Verify page rendering, desktop/mobile and navigational links.
3. In preview, submit one distinct test record to each form.
4. Confirm each record appears in the corresponding Baserow table, then remove test records.
5. Confirm errors don't return false success.
6. Confirm consent, bot protection/rate limiting and privacy-policy review prior to launch.

Security note: honeypot is basic. Add IP-based rate limiting or Turnstile for public launch. CRM configuration has not been verified in this branch; no secrets are included.
