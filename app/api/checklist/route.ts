import { NextRequest, NextResponse } from "next/server";

/** Escape user input before embedding in HTML emails */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/** Basic email format check */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const CHECKLIST_HTML = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; padding: 40px;">
  <div style="text-align: center; margin-bottom: 32px;">
    <div style="color: #EAB308; font-weight: 700; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 8px;">MARSS REAL ESTATE</div>
    <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0 0 8px;">Deal Screening Checklist</h1>
    <p style="color: #9ca3af; font-size: 14px; margin: 0;">25-Point Go / No-Go Framework &bull; Commercial RE + Business Acquisitions</p>
  </div>

  <div style="background: #111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #EAB308; font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 16px;">Section 1 &mdash; Deal Fundamentals</h2>
    <ol style="color: #d1d5db; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
      <li>Does the deal include a real estate component (owned or eligible for sale-leaseback)?</li>
      <li>Is trailing 12-month EBITDA (or NOI for RE) &ge; $500K based on actual financials?</li>
      <li>Do T-12 financials reconcile to bank deposit statements within &pm;5%?</li>
      <li>Has the seller provided 3 years of tax returns or equivalent?</li>
      <li>Is the asking price &le; 6x EBITDA (business) or &le; 16.7x NOI (RE cap rate &ge; 6%)?</li>
    </ol>
  </div>

  <div style="background: #111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #EAB308; font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 16px;">Section 2 &mdash; Financial Validation</h2>
    <ol start="6" style="color: #d1d5db; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
      <li>Are add-backs documented and defensible (not wishful projections)?</li>
      <li>Is owner compensation normalized to market-rate replacement cost?</li>
      <li>Does DSCR &ge; 1.40x at senior debt terms (senior only, no seller carry in coverage)?</li>
      <li>Does the deal survive a &minus;10% revenue stress with DSCR still &ge; 1.20x?</li>
      <li>Are there no material off-book liabilities, related-party transactions, or undisclosed liens?</li>
    </ol>
  </div>

  <div style="background: #111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #EAB308; font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 16px;">Section 3 &mdash; Operational Risk</h2>
    <ol start="11" style="color: #d1d5db; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
      <li>Is operator/owner dependency &lt; 25% of revenue (business can operate without seller)?</li>
      <li>Is customer / revenue concentration &lt; 30% for any single account?</li>
      <li>Are all licenses, permits, and franchises transferable without consent of counter-party?</li>
      <li>Is deferred CapEx quantified and within budget tolerance (&le; 1 year of EBITDA)?</li>
      <li>Is there a clear, documented value-add or stabilization path post-acquisition?</li>
    </ol>
  </div>

  <div style="background: #111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #EAB308; font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 16px;">Section 4 &mdash; Legal &amp; Environmental</h2>
    <ol start="16" style="color: #d1d5db; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
      <li>Is title clean? No pending litigation, judgment liens, or mechanic&apos;s liens?</li>
      <li>Phase I environmental complete or not required for asset class?</li>
      <li>Is zoning confirmed for current and intended use?</li>
      <li>Are leases (if any) assignable and above-market or at-market?</li>
      <li>Is the seller willing to provide a seller rep warranty for 12&ndash;24 months post-close?</li>
    </ol>
  </div>

  <div style="background: #111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #EAB308; font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 16px;">Section 5 &mdash; Deal Structure &amp; Exit</h2>
    <ol start="21" style="color: #d1d5db; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
      <li>Is the seller aligned on a creative structure (Equity Carry, SLB, JV) vs. all-cash only?</li>
      <li>Is the seller motivated (not just testing the market)? Timeline confirmed?</li>
      <li>Does a 3&ndash;5 year exit at a conservative cap rate / EBITDA multiple produce &ge; 1.5x equity multiple?</li>
      <li>Can the asset be refinanced at Leg 3 at &ge; 1.25x DSCR under +200 bps stress?</li>
      <li>Is there a clear institutional buyer pool or refinance path at exit?</li>
    </ol>
  </div>

  <div style="background: #0d0900; border: 1px solid #78350f; border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
    <p style="color: #fbbf24; font-size: 13px; font-weight: 700; margin: 0 0 4px;">SCORING: 20&ndash;25 = GREEN (proceed to LOI) &bull; 15&ndash;19 = YELLOW (conditional) &bull; &lt;15 = RED (pass or restructure)</p>
    <p style="color: #9ca3af; font-size: 12px; margin: 0;">This framework is for initial screening only. Full underwriting required before LOI issuance.</p>
  </div>

  <div style="text-align: center; padding-top: 24px; border-top: 1px solid #1f1f1f;">
    <p style="color: #9ca3af; font-size: 13px; margin: 0 0 8px;">Have a deal that scores 15+? Submit it at <a href='https://marssrealestate.com/#contact' style='color:#EAB308;'>marssrealestate.com</a></p>
    <p style="color: #6b7280; font-size: 12px; margin: 0;">Marss Real Estate &bull; Frisco, TX &bull; 972.779.6787 &bull; support@marssrealestate.com</p>
  </div>
</div>
`;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name  = typeof body.name  === "string" ? body.name.trim().slice(0, 120) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 254) : "";

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Marss Real Estate <onboarding@resend.dev>",
          to: email,
          subject: `${escapeHtml(name)}, here’s your Deal Screening Checklist — Marss Real Estate`,
          html: `<p style="font-family:sans-serif;color:#e5e5e5;background:#0a0a0a;padding:20px;">Hi ${escapeHtml(name)},</p>
                 <p style="font-family:sans-serif;color:#9ca3af;padding:0 20px;">Thanks for requesting our Deal Screening Checklist. Here it is:</p>
                 ${CHECKLIST_HTML}`,
        }),
      });

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Marss Website <onboarding@resend.dev>",
          to: "support@marssrealestate.com",
          subject: `New Checklist Lead: ${escapeHtml(name)} <${escapeHtml(email)}>`,
          html: `<p>New checklist download request:</p><p><strong>Name:</strong> ${escapeHtml(name)}<br/><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        }),
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  } else {
    console.log(`[CHECKLIST LEAD] Name: ${name} | Email: ${email}`);
    console.log("Add RESEND_API_KEY to Vercel environment variables to enable email delivery.");
  }

  return NextResponse.json({ ok: true });
}
