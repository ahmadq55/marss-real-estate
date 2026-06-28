import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Analyze a Business Acquisition in Under 15 Minutes | Marss Real Estate",
  description: "A rapid-triage framework for screening service-based and cash-flow businesses — SDE and EBITDA extraction, valuation multiples, capital stack stress testing, and hard gates before due diligence.",
};

export default function AnalyzeBusinessAcquisitionPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-0.5 rounded-full">Underwriting Framework</span>
          <span className="text-gray-500 text-xs">10 min read</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">How to Analyze a Business Acquisition in Under 15 Minutes</h1>
        <p className="text-gray-400 text-lg leading-relaxed">Evaluating 10+ business acquisition opportunities a week demands a system. Here is the first-pass triage framework Marss uses to screen cash-flowing businesses — from CIM receipt to Go/No-Go in 15 minutes.</p>
      </div>

      <div className="prose prose-invert prose-yellow max-w-none space-y-10 text-gray-300">

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Asset Classes This Covers</h2>
          <p className="leading-relaxed text-gray-400 mb-4">This framework applies to essential operating businesses anchored by real estate. The real estate component is critical — it provides the downside floor that makes creative financing structures viable.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Gas Stations","Car Washes","Auto Dealerships","HVAC / Plumbing","Motels / Hotels","Laundromats","Self-Storage","Light Manufacturing"].map((t) => (
              <div key={t} className="border border-[#1f1f1f] bg-[#0d0d0d] rounded-lg px-3 py-2 text-center">
                <span className="text-gray-300 text-xs">{t}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Step 1: Extract the Right Financial Metric</h2>
          <p className="leading-relaxed text-gray-400 mb-4">The CIM will quote a number. Your job is to figure out which number it actually is and verify it independently.</p>
          <div className="space-y-4">
            {[{label:"Net Income",def:"Bottom-line after all expenses, taxes, interest, and depreciation. Starting point — not your valuation metric.",use:false},{label:"EBITDA",def:"Earnings Before Interest, Taxes, Depreciation, and Amortization. The primary institutional valuation metric. Removes non-cash and financing charges to reveal operating cash generation.",use:true},{label:"SDE (Seller's Discretionary Earnings)",def:"EBITDA plus owner compensation plus personal add-backs (owner car, personal insurance, etc.). Primary metric for owner-operated businesses under $2M revenue. Reflects total economic benefit to a single owner-operator.",use:true}].map((item) => (
              <div key={item.label} className="border border-[#1f1f1f] bg-[#0d0d0d] rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold">{item.label}</h3>
                  {item.use && <span className="text-xs text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full">Use This</span>}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
          <div className="border-l-2 border-yellow-500/40 pl-4 mt-6">
            <p className="text-gray-400 text-sm"><strong className="text-white">Reconcile immediately:</strong> Compare EBITDA or SDE from the CIM against trailing 12-month bank deposit statements. If they diverge by more than 5%, ask for the explanation before going further. Unexplained gaps are the most common source of post-close surprises.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Step 2: Validate Add-Backs</h2>
          <p className="leading-relaxed text-gray-400 mb-4">Add-backs inflate SDE and EBITDA. Not all add-backs are equal. Classify each one:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[{label:"Defensible Add-Backs",color:"border-green-900/40 bg-green-950/20",text:"text-green-400",items:["Owner salary above market replacement cost","One-time legal or accounting fees (documented)","Non-recurring equipment repair (documented)","Personal vehicle expensed to business (documented receipt)"]},{label:"Speculative Add-Backs — Flag",color:"border-red-900/40 bg-red-950/20",text:"text-red-400",items:["\"Cost savings we plan to implement\"","Revenue from contracts not yet executed","Owner salary below market replacement cost","Related-party rent below market rate"]}].map((box) => (
              <div key={box.label} className={`border ${box.color} rounded-xl p-5`}>
                <div className={`text-xs font-bold uppercase tracking-wide ${box.text} mb-3`}>{box.label}</div>
                <ul className="space-y-2">
                  {box.items.map((item) => <li key={item} className="text-gray-400 text-xs leading-relaxed">&#x2022; {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Step 3: Apply the Valuation Multiple</h2>
          <p className="leading-relaxed text-gray-400 mb-6">Compare the asking price against what the market actually pays for businesses in this category. Source your multiples — never guess.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1f1f1f]">
                  <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Business Type</th>
                  <th className="text-left py-3 pr-4 text-gray-400 font-semibold">SDE Multiple</th>
                  <th className="text-left py-3 text-gray-400 font-semibold">EBITDA Multiple</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {[["Gas Station / C-Store","1.5x – 2.5x SDE","3x – 4.5x EBITDA"],["Car Wash (tunnel)","4x – 6x EBITDA","(institutional scale)"],["Auto Dealership","2x – 3.5x SDE","3x – 5x EBITDA"],["HVAC / Plumbing Service","2x – 3.5x SDE","3x – 5x EBITDA"],["Motel / Limited-Service Hotel","4x – 6x EBITDA","(RE drives value)"],["Laundromat","2x – 3.5x SDE","3x – 4.5x EBITDA"],["Self-Storage","Cap rate basis","5x – 7x NOI"],["Light Manufacturing","2.5x – 4x SDE","3.5x – 5.5x EBITDA"]].map((row) => (
                  <tr key={row[0]}>
                    <td className="py-3 pr-4 text-gray-300">{row[0]}</td>
                    <td className="py-3 pr-4 text-gray-400">{row[1]}</td>
                    <td className="py-3 text-gray-400">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">Source: BizBuySell transaction data, IBBA Market Pulse, Pepperdine Private Capital Markets Report. Multiples vary by location, operator dependency, transferability, and revenue concentration.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Step 4: Run the Stress Test</h2>
          <p className="leading-relaxed text-gray-400 mb-4">Apply -10% and -20% revenue shocks to your EBITDA or SDE. At each stress level, confirm:</p>
          <div className="space-y-3">
            {["The deal still services senior debt at DSCR ≥ 1.20x","The deal generates positive cash flow without seller carry","The equity multiple at exit still clears your minimum threshold"].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1 shrink-0">&#10003;</span>
                <span className="text-gray-400 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Step 5: Operator Dependency Check</h2>
          <p className="leading-relaxed text-gray-400 mb-4">This is the most underweighted risk in small business acquisitions. Ask:</p>
          <div className="space-y-3">
            {[{q:"What percentage of revenue is relationship-dependent on the owner?",gate:"Hard gate: > 25% = conditional; > 40% = pass unless transition plan is documented",flag:true},{q:"What is the largest single customer concentration?",gate:"Hard gate: > 30% from one account = major risk",flag:true},{q:"Are licenses and permits transferable?",gate:"Required: Confirm with the relevant jurisdiction before LOI",flag:false},{q:"Who manages day-to-day operations?",gate:"If the answer is \"the owner\" with no documented second-in-command, quantify the replacement cost",flag:false}].map((item) => (
              <div key={item.q} className="border border-[#1f1f1f] bg-[#0d0d0d] rounded-xl p-5">
                <p className="text-white font-medium text-sm mb-2">{item.q}</p>
                <div className={`flex items-start gap-2 ${item.flag ? "text-red-400" : "text-yellow-400"}`}>
                  <span className="shrink-0 mt-0.5">{item.flag ? "&#9888;" : "&#10097;"}</span>
                  <span className="text-xs">{item.gate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Step 6: Go / No-Go Decision</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[{label:"GREEN — Proceed to LOI",color:"border-green-900/50 bg-green-950/30",text:"text-green-400",items:["EBITDA ≥ $500K on verified T-12","Asking price ≤ 5x EBITDA (or justified)","DSCR ≥ 1.40x at senior debt terms","Operator dependency < 25%","Licenses transferable confirmed"]},{label:"YELLOW — Conditional",color:"border-yellow-900/50 bg-yellow-950/20",text:"text-yellow-400",items:["EBITDA $350K–$499K with RE anchor","Price 5–6x EBITDA with strong thesis","DSCR 1.25–1.39x baseline","Dependency 25–35% with transition plan","One document missing"]},{label:"RED — Pass or Restructure",color:"border-red-900/50 bg-red-950/20",text:"text-red-400",items:["EBITDA < $350K","T-12 doesn't reconcile to deposits","Price > 6x EBITDA without justification","DSCR < 1.20x at -10% stress","Dependency > 40% undocumented"]}].map((box) => (
              <div key={box.label} className={`border ${box.color} rounded-xl p-5`}>
                <div className={`text-xs font-bold uppercase tracking-wide ${box.text} mb-3`}>{box.label}</div>
                <ul className="space-y-1.5">
                  {box.items.map((item) => <li key={item} className="text-gray-400 text-xs leading-relaxed">&#x2022; {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="border border-yellow-900/30 bg-gradient-to-br from-[#0d0900] to-[#0a0a0a] rounded-2xl p-8 mt-10">
          <div className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-2">Deal Scores Green or Yellow?</div>
          <h3 className="text-xl font-bold text-white mb-2">Submit to Marss for Full Underwriting</h3>
          <p className="text-gray-400 text-sm mb-5">We evaluate gas stations, car washes, auto dealerships, motels, HVAC businesses, laundromats, and more. LOI within 48 hours. Commission protected for brokers.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg text-sm transition-colors text-center">Submit a Deal</Link>
            <a href="tel:9727796787" className="inline-block border border-yellow-400/30 hover:border-yellow-400/60 text-yellow-400 font-semibold px-6 py-3 rounded-lg text-sm transition-colors text-center">Call 972.779.6787</a>
          </div>
        </div>
      </div>
    </article>
  );
}
