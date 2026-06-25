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
// ----------------------------------------------------------------
async function addToMailerLite(name: string, email: string): Promise<void> {
  const API_KEY = process.env.MAILERLITE_API_KEY;
  if (!API_KEY) {
    console.log("[MailerLite] No API key set — skipping subscription");
    return;
  }

  const headers = {
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
      // Create the group
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
      // 409 = subscriber already exists — still update their group
      const subId = subData.data?.id;
      if (subId && groupId && subRes.status === 409) {
        await fetch(`${BASE}/subscribers/${subId}/groups/${groupId}`, {
          method: "POST",
          headers,
        });
      }
      console.log(`[MailerLite] Subscriber added: ${email} → group "${GROUP_NAME}"`);
    } else {
      console.error("[MailerLite] Subscriber error:", JSON.stringify(subData));
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

  // Add to MailerLite (non-blocking — don't fail the request if ML is down)
  void addToMailerLite(name, email);

  // Log the lead
  console.log(`[CHECKLIST LEAD] Name: ${name} | Email: ${email}`);

  // Optional: Resend email delivery (if RESEND_API_KEY is set)
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
          subject: `${escapeHtml(name)}, here's your Deal Screening Checklist — Marss Real Estate`,
          html: `<p>Hi ${escapeHtml(name)},</p><p>Download your checklist here: <a href="https://marssrealestate.com/deal-screening-checklist.pdf">Deal Screening Checklist (PDF)</a></p>`,
        }),
      });
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Marss Website <onboarding@resend.dev>",
          to: "support@marssrealestate.com",
          subject: `New Checklist Lead: ${escapeHtml(name)} <${escapeHtml(email)}>`,
          html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br/><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        }),
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  }

  return NextResponse.json({ ok: true, downloadUrl: "/deal-screening-checklist.pdf" });
}
