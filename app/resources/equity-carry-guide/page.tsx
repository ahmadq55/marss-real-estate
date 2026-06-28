import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Equity Carry Financing Works | Marss Real Estate",
  description: "A complete guide to Equity Carry financing for business sellers — how it delivers full or near-full asking price, how seller protections are documented, and how and when you get paid.",
};

export default function EquityCarryGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-0.5 rounded-full">Seller Guide</span>
          <span className="text-gray-500 text-xs">8 min read</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">How Equity Carry Financing Works — A Complete Guide for Business Sellers</h1>
        <p className="text-gray-400 text-lg leading-relaxed">Most business sales fail at the finish line — not because of valuation, but because of bank contingencies. Equity Carry eliminates that risk. Here is exactly how it works.</p>
      </div>

      <div className="prose prose-invert prose-yellow max-w-none space-y-10 text-gray-300">

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Problem With Traditional Business Sales</h2>
          <p className="leading-relaxed mb-4">When a buyer depends on a bank loan to acquire your business, you are not really selling to the buyer — you are selling to the bank. The lender controls the timeline, the appraisal, the underwriting criteria, and the final approval. Deals that are fully negotiated and under contract routinely collapse after 60–90 days because:</p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">&#x2022;</span>The appraisal comes in below the negotiated price</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">&#x2022;</span>The lender changes its underwriting criteria mid-process</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">&#x2022;</span>The buyer&apos;s credit profile shifts or DSCR comes in short</li>
            <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">&#x2022;</span>The bank adds conditions the seller won&apos;t accept</li>
          </ul>
          <p className="leading-relaxed mt-4">Sellers who mentally moved on find themselves back at square one — having lost months, potentially lost other buyers, and often having disclosed sensitive financials to a buyer who never closed.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Is Equity Carry?</h2>
          <p className="leading-relaxed mb-4">Equity Carry is Marss Real Estate&apos;s flagship acquisition structure. Instead of asking you to discount your price to accommodate bank financing constraints, we close at full or near-full asking price and convert your equity into a <strong className="text-white">secured preferred equity position</strong> inside the acquiring entity.</p>
          <p className="leading-relaxed">You are not a lender. There is no promissory note. There is no deed of trust. You become an equity partner — with governance rights, performance milestones, and step-in rights — in the same entity that now owns your business or property.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Capital Stack</h2>
          <p className="leading-relaxed mb-6">Every Equity Carry transaction is structured across three layers:</p>
          <div className="space-y-4">
            <div className="border border-[#1f1f1f] bg-[#0d0d0d] rounded-xl p-6">
              <div className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-1">Layer 1 — Senior Debt</div>
              <h3 className="text-white font-bold text-lg mb-2">Bank Financing (35–45% LTV)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Marss secures a senior bank loan at a conservative loan-to-value ratio. This provides immediate liquidity at close for both parties and establishes institutional-grade underwriting on the deal. The lender holds the senior secured position.</p>
            </div>
            <div className="border border-yellow-900/40 bg-[#0d0900] rounded-xl p-6">
              <div className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-1">Layer 2 — Seller Preferred Equity (Flagship)</div>
              <h3 className="text-white font-bold text-lg mb-2">Your Equity Position</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Your equity converts to a preferred equity position inside the acquiring LLC. You hold governance rights — including approval rights on major asset decisions, performance milestone requirements, and step-in rights that activate within 60 days if Marss fails to perform. You earn passive income from operations and participate in the eventual sale or refinance.</p>
            </div>
            <div className="border border-[#1f1f1f] bg-[#0d0d0d] rounded-xl p-6">
              <div className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-1">Layer 3 — Buyer Equity</div>
              <h3 className="text-white font-bold text-lg mb-2">Marss Operating Capital</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Marss contributes its own capital to fund operational improvements, stabilization, and any deferred capital expenditures. This aligns our incentives: we only earn our return if the asset performs and your equity carries its full value.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How and When You Get Paid</h2>
          <p className="leading-relaxed mb-6">Your payoff happens across a defined, documented schedule — not on a vague &quot;future date.&quot; Here is the typical timeline:</p>
          <div className="space-y-0">
            {[{phase:"Close",label:"Day 1",desc:"Cash proceeds from senior debt layer delivered at closing table. This covers the agreed cash-at-close component of your price — typically 35–50% of agreed value, funded by the bank."},{phase:"Stabilization",label:"Months 1–24",desc:"Marss executes the value-add or stabilization plan. Preferred equity earns a documented preferred return (typically 6–9% annualized) that accrues during this period. Distributions begin when cash flow supports them — often from month one on stabilized assets."},{phase:"Refinance",label:"Year 2–4",desc:"Marss executes a refinance at the stabilized valuation. Net proceeds from the refinance are used to redeem seller preferred equity at the agreed full price — delivering your remaining balance in a single lump sum."},{phase:"Sale Exit",label:"Alternative Path",desc:"If Marss sells the asset before refinancing, seller preferred equity is redeemed from sale proceeds with full priority over Marss equity. You receive your full balance before Marss captures any equity profit."}].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
                  {i < 3 && <div className="w-0.5 bg-yellow-500/20 flex-1 mt-1" />}
                </div>
                <div className="pb-8">
                  <div className="text-yellow-400 text-xs font-bold uppercase tracking-wide">{item.phase} &bull; {item.label}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Seller Protections — Built Into the Operating Agreement</h2>
          <div className="grid gap-4">
            {[{t:"Governance Rights",d:"You hold approval rights on major decisions: asset sale, additional debt beyond agreed thresholds, changes to the business operating model, and distributions above the agreed waterfall."},{t:"Step-In Rights",d:"If Marss misses performance milestones or fails to make required preferred distributions within 60 days of due date, your step-in rights activate. You can re-assume operational control without additional cost."},{t:"Priority Waterfall",d:"Your preferred equity position is senior to all Marss equity in both distributions and liquidation. You get paid before Marss captures any profit."},{t:"Full Accounting",d:"Quarterly financial reporting is required under the OA. You receive full visibility into revenue, expenses, debt service, and asset performance."}].map((item, i) => (
              <div key={i} className="border border-[#1f1f1f] bg-[#0d0d0d] rounded-xl p-5">
                <h3 className="text-white font-bold mb-1">{item.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Tax Advantage — Installment Sale Treatment</h2>
          <p className="leading-relaxed text-gray-400">Because your proceeds arrive across multiple tax years (cash at close + accrued preferred return + refinance/sale redemption), the transaction may qualify for installment sale treatment under IRS rules — spreading your capital gains tax liability across the periods in which you actually receive cash. This can meaningfully reduce your effective tax rate versus a single-year lump-sum sale. Consult your CPA for specifics applicable to your situation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Is Equity Carry Right for You?</h2>
          <div className="space-y-3">
            <p className="text-gray-400 leading-relaxed"><strong className="text-white">Best for:</strong> Sellers who want full or near-full asking price, don&apos;t want to accept a forced discount from traditional financing constraints, and are willing to receive a portion of proceeds over a 2–5 year documented schedule.</p>
            <p className="text-gray-400 leading-relaxed"><strong className="text-white">Not ideal for:</strong> Sellers who need 100% of their proceeds at close and have no flexibility on timeline. In that case, Owner Financing or a Hybrid Capital Stack may be a better fit — and Marss offers both.</p>
          </div>
        </section>

        <div className="border border-yellow-900/30 bg-gradient-to-br from-[#0d0900] to-[#0a0a0a] rounded-2xl p-8 mt-10">
          <div className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-2">Free Resource</div>
          <h3 className="text-xl font-bold text-white mb-2">Download the Full Overview PDF</h3>
          <p className="text-gray-400 text-sm mb-5">Plain-language explanation of the Equity Carry structure, seller protections, capital stack, and payoff timeline — formatted for your attorney or financial advisor to review.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/equity-carry-overview.pdf" download className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg text-sm transition-colors text-center">&darr; Download PDF Overview</a>
            <Link href="/#contact" className="inline-block border border-yellow-400/30 hover:border-yellow-400/60 text-yellow-400 font-semibold px-6 py-3 rounded-lg text-sm transition-colors text-center">Discuss Your Deal &rarr;</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
