import { NextRequest, NextResponse } from "next/server";

const configs: Record<string, { table: string; map: string; required: string[] }> = {
  wholesalers: { table: "BASEROW_WHOLESALERS_TABLE_ID", map: "BASEROW_WHOLESALERS_FIELD_MAP", required: ["name", "email", "markets"] },
  buyers: { table: "BASEROW_BUYERS_TABLE_ID", map: "BASEROW_BUYERS_FIELD_MAP", required: ["name", "email", "markets"] },
  deals: { table: "BASEROW_DEALS_TABLE_ID", map: "BASEROW_DEALS_FIELD_MAP", required: ["name", "email", "address", "assetType"] },
};
const emailOk = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
export async function POST(request: NextRequest, context: { params: Promise<{ kind: string }> }) {
  const { kind } = await context.params;
  const config = configs[kind];
  if (!config) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const token = process.env.BASEROW_API_TOKEN;
  const table = process.env[config.table];
  const mapping = process.env[config.map];
  if (!token || !table || !mapping) return NextResponse.json({ error: "Registration is temporarily unavailable" }, { status: 503 });
  let data: Record<string, unknown>;
  try { data = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid submission" }, { status: 400 }); }
  if (!data || typeof data !== "object" || Array.isArray(data)) return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  // Honeypot: silently reject bot traffic, without storing personal information.
  if (data.website) return NextResponse.json({ ok: true });
  if (config.required.some(key => typeof data[key] !== "string" || !(data[key] as string).trim()) ||
      !emailOk(String(data.email ?? "")) || data.consent !== true) {
    return NextResponse.json({ error: "Complete the required fields and consent" }, { status: 400 });
  }
  let fields: Record<string, string>;
  try {
    const parsed: unknown = JSON.parse(mapping);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw Error();
    fields = parsed as Record<string, string>;
  } catch { return NextResponse.json({ error: "Registration is temporarily unavailable" }, { status: 503 }); }
  const payload: Record<string, string> = {};
  for (const [inputName, baserowField] of Object.entries(fields)) {
    if (!/^[\w -]{1,100}$/.test(baserowField)) continue;
    const value = data[inputName];
    if (typeof value === "string" && value.trim()) payload[baserowField] = value.trim().slice(0, 1500);
  }
  if (!Object.keys(payload).length) return NextResponse.json({ error: "Registration is temporarily unavailable" }, { status: 503 });
  try {
    const res = await fetch(`https://api.baserow.io/api/database/rows/table/${encodeURIComponent(table)}/?user_field_names=true`, {
      method: "POST", headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload), cache: "no-store", signal: AbortSignal.timeout(12000)
    });
    if (!res.ok) {
      console.error("Network intake CRM error", kind, res.status);
      return NextResponse.json({ error: "Submission could not be saved. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    console.error("Network intake CRM connection failed", kind);
    return NextResponse.json({ error: "Submission could not be saved. Please try again." }, { status: 502 });
  }
}
