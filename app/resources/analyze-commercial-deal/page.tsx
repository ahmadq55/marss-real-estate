import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/navbar";
import { Footer } from "@/footer";

export const metadata: Metadata = {
  title: "How to Analyze a Multifamily or Commercial Real Estate Deal in Under 15 Minutes | Marss Real Estate",
  description: "A step-by-step framework for screening multifamily and commercial real estate — income-producing properties with tenants — covering NOI, cap rate, DSCR, and red flag identification.",
};

const steps = [
  {
    time: "0–2 min",
    title: "First Filter: Price, Location, Asset Class",
    description: "Before opening a single financial document, answer three questions: Is the asking price within your target range? Is the asset class in your buy box? Is the market one you understand or can research quickly? If any answer is no, stop here. Time spent underwriting a deal outside your criteria is time not spent on deals that fit.",
    keyAction: "Compare asking price to your target acquisition range. Confirm asset class matches your buy box. Check market fundamentals at a 30,000-foot level.",
  },
  {
    time: "2–5 min",
    title: "NOI Calculation from the T-12",
    description: "Request the trailing 12-month (T-12) financial statement. If it isn't provided immediately, that is itself a signal. Calculate Net Operating Income: Gross Revenue minus Operating Expenses (excluding debt service and depreciation). Do not use the broker's stated NOI — calculate it yourself from the line items. Add back only defensible, transferable income. Remove owner compensation and any non-recurring revenue.",
    keyAction: "NOI = Gross Revenue − Operating Expenses. Verify each revenue line is transferable. Challenge any add-back not supported by documentation.",
  },
  {
    time: "5–7 min",
    title: "Cap Rate Check Against Market",
    description: "Divide your calculated NOI by the asking price to get the in-place cap rate. Compare this against current market cap rates for the asset class and submarket — pull benchmarks from LoopNet or CoStar. A cap rate significantly below market means you're being asked to pay a premium on projected performance, not trailing reality. That premium requires justification.",
    keyAction: "In-Place Cap Rate = NOI ÷ Asking Price. If cap rate is below market, identify the specific thesis that justifies the premium. If no clear thesis exists, flag as a red flag.",
  },
  {
    time: "7–10 min",
    title: "DSCR Quick Calculation",
    description: "Estimate the senior debt service based on current lending rates for the asset class — assume 6.5–7.5% for most commercial deals in the current rate environment, 25-year amortization, 70% LTV. Divide your NOI by the estimated annual debt service. Target: 1.40x or higher for the senior position. If DSCR falls below 1.20x, the deal doesn't survive a moderate NOI stress test. Stop unless there is a documented short path to NOI improvement.",
    keyAction: "DSCR = NOI ÷ Annual Debt Service. Must clear 1.40x target. 1.20x is the floor. Below 1.20x = no-go unless extraordinary circumstances are documented.",
  },
  {
    time: "10–13 min",
    title: "Red Flag Scan",
    description: "Quickly scan for the five most common deal-killers: (1) Revenue concentration — does more than 30% of revenue come from a single tenant, customer, or contract? (2) Deferred maintenance signals — are CapEx needs visible in the financials or property description? (3) Lease rollover risk — what percentage of leases expire within 24 months? (4) Environmental or regulatory exposure — any mentions of remediation, zoning changes, or license dependencies? (5) Operator dependency — can the business operate without the current owner's relationships or licenses?",
    keyAction: "Score each flag: Low / Medium / High probability of materializing. One high-severity flag with no clear mitigation = conditional go at best.",
  },
  {
    time: "13–15 min",
    title: "Decision: Go / No-Go / Conditional",
    description: "Based on the above, assign one of three outcomes. Go: financials are clean, cap rate is market or better, DSCR clears 1.40x, no material red flags — proceed to request full due diligence package. No-Go: any hard gate is missed, red flags are unresolvable, or the deal structure doesn't fit your criteria — decline politely and move on. Conditional Go: financials require verification, one flag is present but manageable — proceed to a discovery call but do not commit time or capital until the condition is resolved.",
    keyAction: "Document your reasoning in two sentences. This note becomes the basis for your LOI or decline communication.",
  },
];

export default function AnalyzeCommercialDealPage() {
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

          <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Deal Analysis — Real Estate</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            How to Analyze a Multifamily or Commercial Real Estate Deal in Under 15 Minutes
          </h1>
          <p className="text-gray-500 text-base mt-2 mb-6 italic">For income-producing properties with tenants — multifamily, retail, office, industrial, and mixed-use assets. Analyzing a business acquisition? <Link href="/resources/analyze-business-acquisition" className="text-yellow-500 hover:text-yellow-400 transition-colors">See that framework here.</Link></p>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-12 pb-12 border-b border-gray-800">
            <span>Ahmad Qawasmeh — MARSS Real Estate</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p className="text-lg">
              Screening 10 or more commercial real estate deals per week is not possible if each deal takes half a day to evaluate. This framework applies specifically to income-producing real estate — multifamily, retail, office, industrial, and mixed-use properties with active tenants generating rental income. It compresses the initial screening process to 15 minutes — enough to make a confident go/no-go decision on whether a deal deserves deeper due diligence.
            </p>
            <p>
              This is not a replacement for full underwriting. It is a rapid triage system designed to protect your most valuable resource: time.
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

            <h2 className="text-2xl font-bold text-white pt-6">What This Framework Is Not</h2>
            <p>
              This 15-minute screen is a triage tool, not a substitute for site visits, bank statement verification, environmental review, or a full lease abstract. Its purpose is to eliminate the 80% of deals that don&apos;t meet baseline criteria before you invest significant time — so you can concentrate full underwriting effort on the 20% that might actually close.
            </p>

            <h2 className="text-2xl font-bold text-white pt-6">Hard Gates — Non-Negotiable</h2>
            <p>The following thresholds are not starting points for negotiation. They are the minimum baseline for proceeding:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                { label: "Entry Cap Rate", value: "≥ 6.0% on verified trailing NOI" },
                { label: "Senior DSCR Target", value: "≥ 1.40x" },
                { label: "Senior DSCR Floor", value: "1.20x minimum" },
                { label: "NOI Stress Test", value: "Must survive −10% NOI" },
                { label: "T-12 Requirement", value: "Required within 48 hours" },
                { label: "Bank Statements", value: "Required pre-LOI" },
              ].map((gate, i) => (
                <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-lg p-4">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wide block mb-1">{gate.label}</span>
                  <span className="text-yellow-400 text-sm font-semibold">{gate.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gray-900/80 border border-yellow-900/30 rounded-xl">
            <h3 className="text-white font-bold text-xl mb-2">Download the Deal Screening Checklist</h3>
            <p className="text-gray-400 text-sm mb-5">The complete commercial deal screening checklist — T-12 review, rent roll analysis, red flag identification, and hard gate reference. Formatted for rapid use during broker calls.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 text-sm" />
              <button type="submit" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg text-sm tracking-wide transition-colors whitespace-nowrap">Download Free</button>
            </form>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
            <Link href="/resources/ai-tools-2026" className="text-gray-500 text-sm hover:text-yellow-400 transition-colors">← AI Tools for 2026</Link>
            <Link href="/resources/analyze-business-acquisition" className="text-yellow-500 text-sm hover:text-yellow-400 font-medium">Next: Analyzing a Business →</Link>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}
