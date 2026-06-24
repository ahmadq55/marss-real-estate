import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/navbar";
import { Footer } from "@/footer";

export const metadata: Metadata = {
  title: "How to Analyze a Business Acquisition in Under 15 Minutes | Marss Real Estate",
  description: "A rapid-triage framework for screening service-based and cash flow businesses — covering SDE, EBITDA multiples, operator dependency risk, and hard gates before committing to full due diligence.",
};

const steps = [
  {
    time: "0–2 min",
    title: "First Filter: Business Type, Industry, and EBITDA Floor",
    description: "Before requesting a single document, apply three hard filters: Does the business type fall within your acquisition criteria — car washes, laundromats, self-storage, HVAC, auto, gas stations, light manufacturing, hospitality? Does the trailing EBITDA meet your minimum threshold? Is there real estate anchoring the downside? If any of these fail, decline immediately. Time spent evaluating businesses outside your criteria is time taken from deals that fit.",
    keyAction: "Confirm business type is within your buy box. Verify EBITDA minimum from the listing or broker summary. Identify whether real estate is attached or available. If no to any — stop.",
  },
  {
    time: "2–5 min",
    title: "Extract SDE and EBITDA from the Financials",
    description: "Request the trailing 12-month P&L. Separate two distinct metrics: SDE (Seller's Discretionary Earnings) = Net Income + Owner Compensation + Personal Add-Backs + Depreciation/Amortization. EBITDA = Earnings Before Interest, Taxes, Depreciation, and Amortization — the institutional metric used for larger, professionally managed operations. Do not accept the broker's stated SDE or EBITDA — extract it yourself from line items. Challenge every add-back: is it documented, recurring, and defensible? Normalize out related-party transactions, owner perks, and non-transferable revenue streams.",
    keyAction: "SDE = Net Income + Owner Comp + Add-Backs. EBITDA = Operating Income + D&A. Reconcile against T-12, bank deposits, and tax returns. Flag add-backs without documentation.",
  },
  {
    time: "5–7 min",
    title: "Valuation Multiple Sanity Check",
    description: "Divide the asking price by your verified EBITDA (or SDE for owner-operated businesses) to get the implied multiple. Benchmark against current transaction data: SDE multiples for owner-operated businesses typically fall in the 1.5x–3.5x range depending on size, transferability, and operator dependency. EBITDA multiples for institutionally managed operations run 3x–6x or higher. Separately value any real estate on a cap rate basis — never blend it with the business income multiple. If the implied multiple significantly exceeds market comps without a clear justification, that gap is the negotiation.",
    keyAction: "Implied Multiple = Asking Price ÷ EBITDA (or SDE). Compare to BizBuySell and IBBA comps for the industry. Flag if multiple exceeds market range without documented justification.",
  },
  {
    time: "7–10 min",
    title: "Capital Stack and Debt Service Capacity",
    description: "Structure a preliminary capital stack and stress-test debt coverage. For the senior position, assume 35–45% LTV against the real estate value if real estate is present, or apply commercial lending terms against normalized EBITDA. Calculate estimated annual debt service. Divide verified EBITDA by total annual debt service — including senior note and any seller carry — to confirm DSCR. Target: 1.40x or higher on the senior position alone. The business must survive a 10% revenue decline without requiring seller distributions to cover debt service.",
    keyAction: "DSCR = EBITDA ÷ Annual Debt Service. Senior position target: 1.40x minimum. 1.20x is the floor. Stress at −10% revenue — deal must survive on senior debt alone without seller carry contributing to coverage.",
  },
  {
    time: "10–13 min",
    title: "Red Flag Scan: Five Acquisition Killers",
    description: "Screen rapidly for the five most common deal-killers in business acquisitions: (1) Operator dependency — does the business revenue depend on the current owner's personal relationships, licenses, or technical skills that cannot transfer? (2) Revenue concentration — does more than 30% of revenue come from a single customer, contract, or location? (3) Transferability gaps — are key contracts, licenses, permits, or franchise agreements assignable to a new owner without renegotiation? (4) Deferred maintenance or equipment liability — does the asset list reveal aging equipment with significant replacement cost? (5) Regulatory or environmental exposure — any pending actions, violations, or compliance issues that survive a sale?",
    keyAction: "Rate each flag: Low / Medium / High probability and severity. One high-severity unresolvable flag = No-Go. High-severity flag with a documented mitigation path = Conditional.",
  },
  {
    time: "13–15 min",
    title: "Decision: Go / No-Go / Conditional",
    description: "Assign one of three outcomes. Go: financials are clean, multiple is within market range, DSCR clears 1.40x, no material red flags, real estate anchors the downside — proceed to request the full due diligence package: 3-year P&L, tax returns, bank statements, equipment list, lease agreements, and customer contracts. No-Go: any hard gate is missed, red flags are unresolvable, or the business is operator-dependent with no clear succession path — decline and move on. Conditional Go: the deal has merit but one variable requires verification — proceed to a discovery call, do not commit capital until the condition is confirmed.",
    keyAction: "Document your decision in two sentences. This note becomes the basis for your LOI terms or decline communication. Never proceed to full underwriting on a Conditional without first resolving the condition.",
  },
];

export default function AnalyzeBusinessAcquisitionPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-10">
            <Link href="/resources" className="hover:text-yellow-400 transition-colors">Resources</Link>
            <span>›</span>
            <span>Insights</span>
          </div>

          <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Deal Analysis — Business Acquisition</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            How to Analyze a Business Acquisition in Under 15 Minutes
          </h1>
          <p className="text-gray-500 text-base mt-2 mb-6 italic">For service-based and cash flow businesses — car washes, laundromats, HVAC, self-storage, gas stations, hospitality, auto, and light manufacturing. Analyzing a real estate deal? <Link href="/resources/analyze-commercial-deal" className="text-yellow-500 hover:text-yellow-400 transition-colors">See that framework here.</Link></p>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-12 pb-12 border-b border-gray-800">
            <span>Ahmad Qawasmeh — MARSS Real Estate</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p className="text-lg">
              Evaluating 10 or more business acquisition opportunities per week demands a system — not a process that starts fresh with every CIM. The framework below is designed for rapid triage: enough rigor to make a confident go/no-go decision in 15 minutes, and disciplined enough to protect your time from deals that will never close on your terms.
            </p>
            <p>
              This is not a replacement for full underwriting, site visits, or verified financials. It is a first-pass filter designed to eliminate the deals that fail on fundamentals before you invest significant time or capital in the evaluation.
            </p>

            <div className="space-y-6 mt-8">
              {steps.map((step, i) => (
                <div key={i} className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-gray-900/60 px-6 py-4 flex items-center gap-4 border-b border-gray-800">
                    <span className="bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-wide px-3 py-1 rounded whitespace-nowrap">{step.time}</span>
                    <h2 className="text-white font-bold text-base">{step.title}</h2>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    <div className="bg-black/40 rounded-lg p-4">
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">Key Action</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{step.keyAction}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white pt-6">What This Framework Does Not Replace</h2>
            <p>
              This 15-minute screen eliminates the deals that fail on obvious fundamentals. It does not replace: a full three-year P&amp;L review with bank statement reconciliation, site visit and equipment inspection, lease and contract review, environmental or regulatory due diligence, or a qualified business valuation. Its purpose is to protect your time — so full underwriting effort is reserved for the minority of opportunities that clear every gate.
            </p>

            <h2 className="text-2xl font-bold text-white pt-6">Hard Gates — Non-Negotiable</h2>
            <p>The following thresholds are the minimum baseline for proceeding to full due diligence. None are starting points for negotiation:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                { label: "EBITDA Minimum", value: "Verified trailing EBITDA on file" },
                { label: "Real Estate Anchor", value: "Required for downside protection" },
                { label: "Senior DSCR Target", value: "≥ 1.40x on business income alone" },
                { label: "Senior DSCR Floor", value: "1.20x minimum" },
                { label: "Revenue Stress Test", value: "Must survive −10% revenue decline" },
                { label: "T-12 + Bank Statements", value: "Required within 48 hours of interest" },
                { label: "3-Year P&L", value: "Required pre-LOI" },
                { label: "Tax Returns", value: "Required to validate add-backs" },
              ].map((gate, i) => (
                <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-lg p-4">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">{gate.label}</span>
                  <span className="text-yellow-400 text-sm font-semibold">{gate.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Affiliate Resource */}
          <div className="mt-10 p-6 bg-gray-900/40 border border-gray-800 rounded-lg flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <span className="text-yellow-500 text-lg font-bold">↗</span>
            </div>
            <div>
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-1">Recommended Resource</span>
              <h4 className="text-white font-bold text-sm mb-1">FXLIFE — VIP Algos Trading Indicators</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">Proprietary algorithmic trading indicators designed for investors actively managing capital alongside their acquisition portfolio. Overlay your acquisition strategy with precision market signals across equities and currency pairs.</p>
              <a href="https://321997590gs9mlj89dndotfvft.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-yellow-500 text-sm font-bold hover:text-yellow-400 transition-colors">Explore FXLIFE →</a>
            </div>
          </div>
          {/* CTA */}
          <div className="mt-16 p-8 bg-gray-900/80 border border-yellow-900/30 rounded-xl">
            <h3 className="text-white font-bold text-xl mb-2">Download the Business Acquisition Screening Checklist</h3>
            <p className="text-gray-400 text-sm mb-5">The complete business acquisition triage checklist — SDE/EBITDA extraction, add-back validation, red flag scoring, and hard gate reference. Formatted for rapid use during broker calls and CIM reviews.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 text-sm" />
              <button type="submit" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg text-sm tracking-wide transition-colors whitespace-nowrap">Download Free</button>
            </form>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
            <Link href="/resources/analyze-commercial-deal" className="text-gray-500 text-sm hover:text-yellow-400 transition-colors">← Real Estate Deal Analysis</Link>
            <Link href="/resources" className="text-yellow-500 text-sm hover:text-yellow-400 font-medium">Back to Resources →</Link>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}
