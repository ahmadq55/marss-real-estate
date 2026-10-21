// Server mappings inspected against Baserow database 597084 on 2026-10-20.
export const intakeTables = { wholesalers: 1269267, buyers: 1269283, deals: 1269285 } as const;
export type IntakeKind = keyof typeof intakeTables;
export class IntakeValidationError extends Error {}
const assetOptions = ["Multifamily", "Office", "Retail", "Industrial", "Mixed Use", "Land", "Self-Storage", "Hospitality", "Other"];
export function buildIntakePayload(kind: IntakeKind, data: Record<string, unknown>, now = new Date(), id = crypto.randomUUID()) {
  const text = (key: string, max = 1500) => {
    const value = data[key];
    if (value === undefined || value === "") return "";
    if (typeof value !== "string" || value.length > max) throw new IntakeValidationError(`Check ${key}`);
    return value.trim();
  };
  const required = kind === "deals" ? ["name", "email", "address", "assetType"] : ["name", "email", "markets"];
  for (const key of required) if (!text(key, 500)) throw new IntakeValidationError("Complete the required fields");
  const name = text("name", 500), email = text("email", 500), phone = text("phone", 500);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || data.consent !== true) throw new IntakeValidationError("Enter a valid email and agree to be contacted");
  const date = now.toISOString().slice(0, 10);
  const notes = [`Website intake: ${kind}`, `Received: ${now.toISOString()}`, "Contact consent: confirmed; intake notice version 2026-10-20"];
  const note = (label: string, key: string) => { const value = text(key); if (value) notes.push(`${label}: ${value}`); };
  const payload: Record<string, string | number | boolean | string[]> = {};
  const set = (field: number, value: string) => { if (value) payload[`field_${field}`] = value; };
  if (kind === "wholesalers") {
    set(11658737, `WEB-W-${id}`); set(11658739, name); set(11658740, text("company", 500));
    set(11658741, email); set(11658742, phone); set(11658745, text("markets", 500));
    set(11658746, text("assetFocus")); set(11658749, text("sellerAccess"));
    set(11658747, "Marss website"); set(11659013, date); set(11659019, "Prospect");
    // General experience is not a verified numeric count or creative-finance rating.
    note("Completed deals / relevant experience", "experience"); set(11658757, notes.join("\n"));
  } else if (kind === "buyers") {
    set(11658929, `WEB-B-${id}`); set(11658934, date); set(11658935, name);
    set(11658936, text("company", 500)); set(11658937, email); set(11658938, phone);
    set(11658939, text("markets", 500)); set(11658947, "Prospect");
    // Preserve narratives; do not guess select values, POF verification, or price limits.
    note("Asset classes and buy box", "assetFocus"); note("Purchase price range", "priceRange");
    note("Financing approach / buying capacity", "funding"); note("Acquisition experience", "experience");
    set(11658950, notes.join("\n"));
  } else {
    set(11658931, `WEB-D-${id}`); set(11658958, date); set(11658959, text("address", 500));
    const asset = text("assetType", 500);
    set(11658962, assetOptions.find(x => x.toLowerCase() === asset.toLowerCase()) ?? "Other");
    set(11658963, [name, email, phone].filter(Boolean).join(" | "));
    const price = text("askingPrice", 500);
    if (price) {
      if (!/^\$?\s*(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(price)) throw new IntakeValidationError("Enter one asking price in dollars, such as 325000 or 325,000.00");
      const amount = price.replace(/[$,\s]/g, "");
      if (Number(amount) > 999999999999) throw new IntakeValidationError("Check the asking price");
      set(11658964, amount);
    }
    set(11658970, text("control")); set(11658973, "Received");
    notes.push(`Original asset category: ${asset}`);
    note("Current NOI, SDE, or rent (as supplied; basis unverified)", "income");
    note("Loan balance and assumability (as supplied)", "debt");
    note("Seller financing potential (as supplied)", "financing"); note("Description and condition", "notes");
    set(11658978, notes.join("\n"));
  }
  // Only create new rows; visitors cannot set links, formulas, POF or decisions.
  return payload;
}
