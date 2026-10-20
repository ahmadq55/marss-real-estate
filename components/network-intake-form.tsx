"use client";
import { useState, type FormEvent } from "react";
type Field = { name: string; label: string; required?: boolean; multiline?: boolean; placeholder?: string };
export function NetworkIntakeForm({ kind, fields }: { kind: "wholesalers" | "buyers" | "deals"; fields: Field[] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending"); setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(`/api/network/${kind}`, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, consent: data.consent === "on" }) });
      const result = await res.json();
      if (!res.ok || !result.ok) throw new Error(result.error || "Submission failed");
      setStatus("success"); form.reset();
    } catch (err) { setStatus("error"); setError(err instanceof Error ? err.message : "Please try again."); }
  }
  return <form onSubmit={send} className="space-y-5 rounded-xl border border-yellow-700/30 bg-zinc-950 p-6 md:p-8">
    <div className="hidden" aria-hidden="true"><label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    {fields.map(f => <label key={f.name} className="block text-sm font-medium text-gray-200">
      {f.label}{f.required && <span className="text-yellow-500"> *</span>}
      {f.multiline ? <textarea name={f.name} rows={3} required={f.required} maxLength={1500} placeholder={f.placeholder} className="mt-2 w-full rounded-md border border-zinc-700 bg-black p-3 text-white" />
        : <input type={f.name === "email" ? "email" : "text"} name={f.name} required={f.required} maxLength={500} placeholder={f.placeholder} className="mt-2 w-full rounded-md border border-zinc-700 bg-black p-3 text-white" />}
    </label>)}
    <label className="flex items-start gap-3 text-sm text-gray-300"><input name="consent" type="checkbox" required className="mt-1" />
      <span>I confirm I am authorized to provide this information and agree to be contacted about my submission. Registration does not establish a brokerage relationship, compensation agreement, or promise of investment returns.</span></label>
    <button disabled={status === "sending"} className="rounded-md bg-yellow-500 px-6 py-3 font-bold text-black disabled:opacity-50">{status === "sending" ? "Submitting…" : "Submit"}</button>
    {status === "success" && <p role="status" className="text-green-400">Your information was saved successfully.</p>}
    {status === "error" && <p role="alert" className="text-red-400">{error}</p>}
  </form>;
}
