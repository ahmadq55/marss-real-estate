import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, role, assetType, dealSize, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  const internalHtml = `
    <div style="font-family:sans-serif;max-width:600px;">
      <h2 style="color:#EAB308;">New Deal Inquiry — Marss Real Estate</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Name:</strong></td><td style="padding:8px 0;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Email:</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Phone:</strong></td><td style="padding:8px 0;">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Role:</strong></td><td style="padding:8px 0;">${role || "Not specified"}</td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Asset Type:</strong></td><td style="padding:8px 0;">${assetType || "Not specified"}</td></tr>
        <tr><td style="padding:8px 0;color:#9ca3af;"><strong style="color:#fff;">Deal Size:</strong></td><td style="padding:8px 0;">${dealSize || "Not specified"}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#111;border-radius:8px;">
        <strong style="color:#EAB308;">Message:</strong>
        <p style="color:#d1d5db;margin-top:8px;">${message}</p>
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
    } catch (err) {
      console.error("Resend error:", err);
    }
  } else {
    console.log(`[CONTACT LEAD] ${name} | ${email} | ${phone} | ${role} | ${assetType} | ${dealSize}`);
    console.log(`[CONTACT MESSAGE] ${message}`);
    console.log("Add RESEND_API_KEY to Vercel environment variables to enable email delivery.");
  }

  return NextResponse.json({ ok: true });
}
