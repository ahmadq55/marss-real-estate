import { NextRequest, NextResponse } from "next/server";
import { buildIntakePayload, intakeTables, IntakeValidationError, type IntakeKind } from "@/lib/network-intake";
export async function POST(request: NextRequest, context: { params: Promise<{ kind: string }> }) {
  const { kind } = await context.params;
  if (!Object.prototype.hasOwnProperty.call(intakeTables, kind)) return NextResponse.json({ error: "Not found" }, { status: 404 });
  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > 20000) return NextResponse.json({ error: "Submission is too large" }, { status: 413 });
    data = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) throw Error();
  } catch { return NextResponse.json({ error: "Invalid submission" }, { status: 400 }); }
  if (data.website) return NextResponse.json({ ok: true });
  let payload;
  try { payload = buildIntakePayload(kind as IntakeKind, data); }
  catch (err) {
    if (err instanceof IntakeValidationError) return NextResponse.json({ error: err.message }, { status: 400 });
    throw err;
  }
  const token = process.env.BASEROW_API_TOKEN;
  if (!token) return NextResponse.json({ error: "Registration is temporarily unavailable" }, { status: 503 });
  try {
    const res = await fetch(`https://api.baserow.io/api/database/rows/table/${intakeTables[kind as IntakeKind]}/`, {
      method: "POST", headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload), cache: "no-store", signal: AbortSignal.timeout(12000)
    });
    if (!res.ok) {
      console.error("Network intake CRM error", kind, res.status);
      return NextResponse.json({ error: "Submission could not be saved. Please try again." }, { status: 502 });
    }
    const saved = await res.json();
    if (!Number.isInteger(saved?.id) || saved.id <= 0) throw Error("Missing saved row ID");
    return NextResponse.json({ ok: true });
  } catch {
    console.error("Network intake CRM connection failed", kind);
    return NextResponse.json({ error: "Submission could not be saved. Please try again." }, { status: 502 });
  }
}
