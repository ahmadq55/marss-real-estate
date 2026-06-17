import { NextRequest, NextResponse } from "next/server";

const PDF_URL = "https://marssrealestate.com/equity-carry-overview.pdf";

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

const AUTO_RESPONSE_HTML = (name: string) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; padding: 40px;">
  <div style="text-align: center; margin-bottom: 32px;">
    <div style="color: #EAB308; font-weight: 700; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 8px;">MARSS REAL ESTATE</div>
    <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 0 0 8px;">We Received Your Inquiry</h1>
    <p style="color: #9ca3af; font-size: 14px; margin: 0;">A member of our team will respond within 48 hours.</p>
  </div>

  <div style="background: #111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
    <p style="color: #d1d5db; font-size: 14px; line-height: 1.7; margin: 0;">
      Hi ${escapeHtml(name)},<br/><br/>
      Thank you for reaching out to Marss Real Estate. We&apos;ve received your inquiry and a member of our team will be in touch within <strong style="color: #fff;">48 hours</strong>.
      <br/><br/>
      For urgent matters, call us directly at <a href="tel:9727796787" style="color: #EAB308;">972.779.6787</a>.
    </p>
  </div>

  <div style="background: #0d0900; border: 1px solid #78350f; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
    <div style="color: #EAB308; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px;">Free Resource</div>
    <h2 style="color: #fff; font-size: 16px; font-weight: 700; margin: 0 0 8px;">Equity Carry Acquisition &mdash; Overview for Sellers</h2>
    <p style="color: #9ca3af; font-size: 13px; line-height: 1.6; margin: 0 0 16px;">
      How we close at full or near-full asking price using a preferred equity structure &mdash; including seller protections, how the capital stack is built, and how and when you receive your full payoff.
    </p>
    <a href="${PDF_URL}" style="display: inline-block; background: #EAB308; color: #000; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 6px; text-decoration: none;">&darr; Download PDF Overview</a>
  </div>

  <div style="text-align: center; padding-top: 24px; border-top: 1px solid #1f1f1f;">
    <p style="color: #9ca3af; font-size: 13px; margin: 0 0 4px;">Marss Real Estate &bull; Frisco, TX</p>
    <p style="color: #6b7280; font-size: 12px; margin: 0;">972.779.6787 &bull; support@marssrealestate.com &bull; marssrealestate.com</p>
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

  const name     = typeof body.name     === "string" ? body.name.trim().slice(0, 120)  : "";
  const email    = typeof body.email    === "string" ? body.email.trim().slice(0, 254)  : "";
  const phone    = typeof body.phone    === "string" ? body.phone.trim().slice(0, 30)   : "";
  const role     = typeof body.role     === "string" ? body.role.trim().slice(0, 80)    : "";
  const assetType = typeof body.assetType === "string" ? body.assetType.trim().slice(0, 120) : "";
  const dealSize = typeof body.dealSize === "string" ? body.dealSize.trim().slice(0, 80)  : "";
  const message  = typeof body.message  === "string" ? body.message.trim().slice(0, 4000) : "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  const internalHtml = `
    <div style="font-family:sans-serif;max-width:600px;">
      <h2 style="color:#EAB308;">New Deal Inquiry &mdash; Marss Real Estate</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Name:</strong></td><td style="padding:8px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Email:</strong></td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Phone:</strong></td><td style="padding:8px 0;">${escapeHtml(phone) || "Not provided"}</td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Role:</strong></td><td style="padding:8px 0;">${escapeHtml(role) || "Not specified"}</td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Asset Type:</strong></td><td style="padding:8px 0;">${escapeHtml(assetType) || "Not specified"}</td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Deal Size:</strong></td><td style="padding:8px 0;">${escapeHtml(dealSize) || "Not specified"}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#111;border-radius:8px;">
        <strong style="color:#EAB308;">Message:</strong>
        <p style="color:#d1d5db;margin-top:8px;white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  if (RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Marss Website <onboarding@resend.dev>",
          to: "support@marssrealestate.com",
          reply_to: email,
          subject: `New Deal Inquiry from ${name} — ${assetType || role || "Inquiry"}`,
          html: internalHtml,
        }),
      });

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Ahmad at Marss Real Estate <onboarding@resend.dev>",
          to: email,
          subject: `We received your inquiry — Marss Real Estate`,
          html: AUTO_RESPONSE_HTML(name),
        }),
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  } else {
    console.log(`[CONTACT LEAD] ${name} | ${email} | ${phone} | ${role} | ${assetType} | ${dealSize}`);
    console.log(`[CONTACT MESSAGE] ${message.slice(0, 200)}`);
    console.log("Add RESEND_API_KEY to Vercel environment variables to enable email delivery.");
  }

  return NextResponse.json({ ok: true });
}
