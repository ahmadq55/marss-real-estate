import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Analyze a Commercial Real Estate Deal in Under 15 Minutes | Marss Real Estate",
  description: "A step-by-step framework for rapid triage of multifamily and commercial real estate deals — Cap Rate, NOI stress testing, DSCR hard gates, and a disciplined Go/No-Go decision.",
};

export default function AnalyzeCommercialDealPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-0.5 rounded-full">Underwriting Framework</span>
          <span className="text-gray-500 text-xs">10 min read</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">How to Analyze a Multifamily or Commercial Real Estate Deal in Under 15 Minutes</h1>
        <p className="text-gray-400 text-lg leading-relaxed">You can&apos;t start fresh with every OM. You need a first-pass filter that eliminates deals on fundamentals before you invest serious time or capital. Here is the 6-step triage framework Marss uses to screen income-producing properties.</p>
      </div>

      <div className="prose prose-invert prose-yellow max-w-none space-y-10 text-gray-300">

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What This Framework Covers</h2>
          <p className="leading-relaxed text-gray-400">This is a screening framework for income-producing properties with tenants — multifamily (5+ units), retail, office, industrial, and mixed-use. It is designed for first-pass triage: identify whether a deal clears your hard gates before you spend time on site visits, third-party reports, or full underwriting models.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
            {["Multifamily 5+ units","Retail / Strip","Office","Light Industrial","Mixed-Use","Self-Storage"].map((t) => (
              <div key={t} className="border border-[#1f1f1f] bg-[#0d0d0d] rounded-lg px-3 py-2 text-center">
                <span className="text-gray-300 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {[{step:"1",title:"Calculate Trailing 12-Month NOI",content:"Start with the T-12 financials. Net Operating Income = Gross Rental Income (actual collected, not pro forma) minus Vacancy (actual, not market assumption) minus Operating Expenses (taxes, insurance, maintenance, management, utilities). Do NOT use projected rents or pro forma occupancy for your baseline NOI. If the broker is quoting you a \"stabilized\" or \"market\" NOI that is higher than trailing actuals, flag it — the trailing number is your underwriting anchor.",hardgate:"Require T-12 actuals and reconcile to bank deposit statements. If the seller cannot provide bank statements, pass."},{step:"2",title:"Validate the Entry Cap Rate",content:"Entry Cap Rate = Trailing NOI ÷ Asking Price. Your minimum: 6.0% on verified trailing NOI. A 6% cap rate means the property produces $1 of NOI for every $16.70 of purchase price. Below 6%, you are depending on future rent growth or cost reductions to justify the price — that is a bet, not a buy. Calculate both the in-place cap rate (trailing NOI) and the broker-quoted cap rate. If they differ by more than 50–75 basis points, ask for the reconciliation.",hardgate:"Entry cap rate < 6.0% on verified T-12 NOI = conditional or pass, unless there is a documented, near-term path to 6.0%+."},{step:"3",title:"Stress NOI at -10% and -20%",content:"Apply two revenue shocks before you run any return metrics. Stress 1: NOI × 0.90 — vacancy up 500 bps or rents down 5%. Stress 2: NOI × 0.80 — vacancy up 1,000 bps or rents down 10%. Now re-run DSCR and cash-on-cash return at both stress scenarios. A deal that only works at full occupancy and market rents is fragile. A deal that works at -20% NOI has real margin of safety.",hardgate:"If the deal does not produce positive cash flow after debt service at -10% NOI, it does not pass without a compelling value-add thesis backed by executed leases."},{step:"4",title:"Calculate DSCR",content:"DSCR = NOI ÷ Annual Debt Service. Use your actual proposed loan terms — not broker assumptions. If you do not have terms yet, use a conservative proxy: 7.25% rate, 25-year amortization, 65% LTV. Target: 1.40x at baseline NOI. Floor: 1.20x at -10% stress. Seller carry payments and any subordinate debt should NEVER count toward NOI in your DSCR calculation — senior debt service is covered only by operating NOI.",hardgate:"DSCR < 1.20x at -10% stress scenario = pass unless seller carry is structured to subordinate below senior debt with income-contingent terms."},{step:"5",title:"Benchmark Against the Market",content:"Pull comp cap rates for the submarket. If your entry cap rate is at or below market, you have no valuation cushion. Check: average market occupancy vs. subject property, rent/SF vs. comparable properties, expense ratio vs. market norms (expense ratios above 50% of EGI for multifamily or 40% for NNN-adjacent retail are red flags), and supply pipeline — new inventory within 1 mile under construction.",hardgate:"If the subject property is occupancy-lagging the market by 500+ bps without a documented operational reason, investigate before proceeding."},{step:"6",title:"Go / No-Go Decision",content:"",hardgate:""}].map((item) => (
          <section key={item.step}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shrink-0">
                <span className="text-yellow-400 font-bold text-sm">{item.step}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            </div>
            {item.content && <p className="leading-relaxed text-gray-400 mb-4">{item.content}</p>}
            {item.step === "6" && (
              <div className="grid sm:grid-cols-3 gap-4">
                {[{label:"GREEN — Proceed to LOI",color:"border-green-900/50 bg-green-950/30",text:"text-green-400",items:["Cap rate ≥ 6.0% on T-12 NOI","DSCR ≥ 1.40x baseline","DSCR ≥ 1.20x at -10% stress","T-12 reconciles to bank statements","At or below market cap rate"]},{label:"YELLOW — Conditional",color:"border-yellow-900/50 bg-yellow-950/20",text:"text-yellow-400",items:["Cap rate 5.5–5.9% with clear value-add","DSCR 1.25–1.39x baseline","Occupancy below market by 300–500 bps","Missing one financial document","Expense ratio slightly elevated"]},{label:"RED — Pass or Restructure",color:"border-red-900/50 bg-red-950/20",text:"text-red-400",items:["Cap rate < 5.5% with no value-add","DSCR < 1.20x at -10% stress","T-12 doesn't reconcile to deposits","No bank statements available","Occupancy 500+ bps below market"]}].map((box) => (
                  <div key={box.label} className={`border ${box.color} rounded-xl p-5`}>
                    <div className={`text-xs font-bold uppercase tracking-wide ${box.text} mb-3`}>{box.label}</div>
                    <ul className="space-y-1.5">
                      {box.items.map((item) => <li key={item} className="text-gray-400 text-xs leading-relaxed">&#x2022; {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {item.hardgate && (
              <div className="border-l-2 border-red-500/50 pl-4 mt-4">
                <div className="text-red-400 text-xs font-bold uppercase tracking-wide mb-1">Hard Gate</div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.hardgate}</p>
              </div>
            )}
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Red Flags That Auto-Fail a Deal</h2>
          <div className="space-y-2">
            {["Seller cannot provide T-12 financials or bank statements","Trailing NOI is materially lower than asking price implies (cap rate < 4.5%)","Occupancy > 20% below market with no operational explanation","Undisclosed liens, pending litigation, or title defects","Environmental issues not in disclosed Phase I","Lease rollover > 40% in next 24 months with no renewal probability","Major deferred CapEx exceeding 2 years of NOI"].map((flag) => (
              <div key={flag} className="flex items-start gap-3 border border-red-900/30 bg-red-950/10 rounded-lg px-4 py-3">
                <span className="text-red-500 mt-0.5 shrink-0">&#9888;</span>
                <span className="text-gray-400 text-sm">{flag}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border border-yellow-900/30 bg-gradient-to-br from-[#0d0900] to-[#0a0a0a] rounded-2xl p-8 mt-10">
          <div className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-2">Have a Deal That Clears the Gates?</div>
          <h3 className="text-xl font-bold text-white mb-2">Submit to Marss for a Full Underwriting Review</h3>
          <p className="text-gray-400 text-sm mb-5">We screen, underwrite, and issue a Go/No-Go with LOI within 48 hours. Commission protected for brokers from day one.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg text-sm transition-colors text-center">Submit a Deal</Link>
            <a href="tel:9727796787" className="inline-block border border-yellow-400/30 hover:border-yellow-400/60 text-yellow-400 font-semibold px-6 py-3 rounded-lg text-sm transition-colors text-center">Call 972.779.6787</a>
          </div>
        </div>
      </div>
    </article>
  );
}
