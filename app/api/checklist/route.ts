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
          html: `<p>Hi ${escapeHtml(name)},</p><p>Download your checklist here: <a href="https://marssrealestate.com/deal-screening-checklist.pdf">Deal Screening Checklist (PDF)</a></p>`,
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
  }

  return NextResponse.json({ ok: true, downloadUrl: "/deal-screening-checklist.pdf" });
}
