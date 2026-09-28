import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ----------------------------------------------------------------
// MailerLite v3 helper — adds subscriber to "Checklist Leads" group
// Creates the group automatically if it doesn't exist yet
// IMPORTANT: This function is awaited so Vercel keeps the function
// alive until MailerLite responds before returning the response
// ----------------------------------------------------------------
async function addToMailerLite(name: string, email: string): Promise<void> {
  const API_KEY = process.env.MAILERLITE_API_KEY;
  if (!API_KEY) {
    console.log("[MailerLite] No API key set — skipping subscription");
    return;
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const BASE = "https://connect.mailerlite.com/api";
  const GROUP_NAME = "Checklist Leads";

  try {
    // 1. Find or create the group
    const groupsRes = await fetch(`${BASE}/groups?limit=100`, { headers });
    const groupsData = await groupsRes.json();
    let groupId: string | null = null;

    if (groupsData.data) {
      const found = groupsData.data.find(
        (g: { name: string; id: string }) => g.name === GROUP_NAME
      );
      if (found) groupId = found.id;
    }

    if (!groupId) {
      const createRes = await fetch(`${BASE}/groups`, {
        method: "POST",
        headers,
        body: JSON.stringify({ name: GROUP_NAME }),
      });
      const created = await createRes.json();
      groupId = created.data?.id ?? null;
      console.log(`[MailerLite] Created group "${GROUP_NAME}" — ID: ${groupId}`);
    }

    // 2. Upsert subscriber with group assignment
    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ") || "";

    const subRes = await fetch(`${BASE}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        fields: { name: firstName, last_name: lastName },
        groups: groupId ? [groupId] : [],
      }),
    });

    const subData = await subRes.json();
    if (subRes.ok || subRes.status === 409) {
      const subId = subData.data?.id;
      if (subId && groupId && subRes.status === 409) {
        await fetch(`${BASE}/subscribers/${subId}/groups/${groupId}`, {
          method: "POST",
          headers,
        });
      }
      console.log(`[MailerLite] Subscriber captured: ${email} — group "${GROUP_NAME}"`);
    } else {
      console.error("[MailerLite] Subscriber error:", subRes.status, JSON.stringify(subData));
    }
  } catch (err) {
    console.error("[MailerLite] Integration error:", err);
  }
}

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

  // Add to MailerLite — awaited so Vercel keeps function alive
  await addToMailerLite(name, email);

  console.log(`[CHECKLIST LEAD] Name: ${name} | Email: ${email}`);

  // Resend email delivery
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    try {
      // 1. Send PDF download link to the lead
      const leadRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Marss Real Estate <onboarding@resend.dev>",
          to: [email],
          subject: `${escapeHtml(name)}, here is your Deal Screening Checklist`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
              <h2 style="color:#1a1a1a;">Your Deal Screening Checklist</h2>
              <p>Hi ${escapeHtml(name)},</p>
              <p>Thank you for your interest in MARSS Real Estate. Your checklist is ready to download:</p>
              <p style="text-align:center;margin:32px 0;">
                <a href="https://marssrealestate.com/deal-screening-checklist.pdf"
                   style="background:#d4a017;color:#000;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:16px;">
                  Download Checklist (PDF)
                </a>
              </p>
              <p style="color:#666;font-size:13px;">MARSS Real Estate &mdash; Commercial &amp; Multifamily Acquisitions<br/>
              <a href="https://marssrealestate.com" style="color:#d4a017;">marssrealestate.com</a></p>
            </div>
          `,
        }),
      });
      const leadData = await leadRes.json();
      console.log(`[Resend] Lead email: HTTP ${leadRes.status} | ID: ${leadData.id || JSON.stringify(leadData)}`);

      // 2. Send lead notification to Ahmad
      const notifyRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "MARSS Website <onboarding@resend.dev>",
          to: ["marss.realestate@gmail.com"],
          subject: `New Lead: ${escapeHtml(name)} — Checklist Download`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
              <h3 style="color:#1a1a1a;">New Checklist Lead</h3>
              <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;border:1px solid #eee;"><strong>Name</strong></td><td style="padding:8px;border:1px solid #eee;">${escapeHtml(name)}</td></tr>
                <tr><td style="padding:8px;border:1px solid #eee;"><strong>Email</strong></td><td style="padding:8px;border:1px solid #eee;">${escapeHtml(email)}</td></tr>
                <tr><td style="padding:8px;border:1px solid #eee;"><strong>Time</strong></td><td style="padding:8px;border:1px solid #eee;">${new Date().toISOString()}</td></tr>
              </table>
              <p style="color:#666;font-size:12px;">Sent from marssrealestate.com</p>
            </div>
          `,
        }),
      });
      const notifyData = await notifyRes.json();
      console.log(`[Resend] Notify email: HTTP ${notifyRes.status} | ID: ${notifyData.id || JSON.stringify(notifyData)}`);
    } catch (err) {
      console.error("[Resend] Error:", err);
    }
  }

  return NextResponse.json({ ok: true, downloadUrl: "/deal-screening-checklist.pdf" });
}
