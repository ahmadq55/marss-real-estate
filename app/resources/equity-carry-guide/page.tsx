import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/navbar";
import { Footer } from "@/footer";

export const metadata: Metadata = {
  title: "How Equity Carry Financing Works | Marss Real Estate",
  description: "A complete guide to Equity Carry financing for business sellers — how it works, why it delivers full value, and how it eliminates bank-dependent closing risk.",
};

export default function EquityCarryGuidePage() {
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

          <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Creative Financing</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            How Equity Carry Financing Works: A Complete Guide for Business Sellers
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-12 pb-12 border-b border-gray-800">
            <span>Ahmad Qawasmeh — MARSS Real Estate</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p className="text-lg">
              Most business sales fail at the finish line — not because of valuation disagreements, but because of financing contingencies. Bank appraisals come in low, lenders pull commitments, and sellers who had mentally moved on find themselves back at square one. Equity Carry financing was designed to eliminate that risk entirely.
            </p>

            <h2 className="text-2xl font-bold text-white pt-6">What Is Equity Carry Financing?</h2>
            <p>
              Equity Carry is a creative acquisition structure in which the seller receives a meaningful cash payment at closing and is simultaneously installed as a secured equity partner in the acquiring entity. Rather than receiving a single lump sum and exiting entirely, the seller carries a preferred equity position that generates ongoing income — structured, documented, and protected through the operating agreement.
            </p>
            <p>
              In practical terms: the seller does not take a discount. They receive full or near-full value — part in cash at closing, and the remainder structured as a preferred equity position within the LLC that owns the acquired business or property.
            </p>

            <h2 className="text-2xl font-bold text-white pt-6">How It Works: The Three Components</h2>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6">
              <h3 className="text-yellow-400 font-bold text-base mb-2">Component 1 — Cash at Close</h3>
              <p className="text-gray-400 text-sm leading-relaxed">A senior debt facility — typically covering the down payment, closing costs, and initial capital expenditures at up to 60% LTV of the real estate value — funds the immediate cash payment to the seller at closing. The structure is underwritten against the asset&apos;s verified trailing income, not projected performance.</p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6">
              <h3 className="text-yellow-400 font-bold text-base mb-2">Component 2 — Preferred Equity Position</h3>
              <p className="text-gray-400 text-sm leading-relaxed">The seller&apos;s remaining value is structured as a preferred equity stake in the LLC. This is a documented governance position with priority distributions, performance milestones, and step-in rights if the acquirer underperforms. The seller earns preferred returns tied to the business&apos;s actual cash flow — not a fixed promise from a buyer who may or may not perform.</p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6">
              <h3 className="text-yellow-400 font-bold text-base mb-2">Component 3 — Step-In Rights &amp; Governance Protection</h3>
              <p className="text-gray-400 text-sm leading-relaxed">The operating agreement includes documented protections: if net income falls below defined thresholds or debt service is not maintained, the seller&apos;s step-in rights activate within 60 days. The seller doesn&apos;t just exit and hope — they remain structurally protected with the right to resume operational control if performance declines.</p>
            </div>

            <h2 className="text-2xl font-bold text-white pt-6">Why Sellers Choose This Over a Traditional Sale</h2>
            <p>Traditional bank-dependent acquisitions carry three risks sellers frequently underestimate:</p>
            <ul className="space-y-3 mt-4">
              {[
                "Bank appraisals frequently come in 10–20% below agreed purchase price, forcing renegotiation after a seller has mentally committed to a number.",
                "Lenders impose operational conditions and due diligence requirements that delay close 60–120 days — during which businesses often experience performance degradation.",
                "Financing contingencies give buyers an exit mechanism that is not always used in good faith."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-yellow-500 font-bold mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Equity Carry eliminates all three. The deal closes on a defined timeline. The price is not subject to appraisal contingency. And the seller&apos;s ongoing equity position means their financial outcome is tied to the asset&apos;s actual performance.
            </p>

            <h2 className="text-2xl font-bold text-white pt-6">A Practical Example</h2>
            <p>
              A commercial laundromat is listed at $1.8M with verified trailing EBITDA of $310K. A traditional buyer offers $1.6M contingent on bank financing. The bank appraises at $1.55M. The deal falls apart after 90 days.
            </p>
            <p>
              Under an Equity Carry structure: the acquirer closes at the agreed price. Cash is funded at closing from senior debt secured against the real estate. The remaining balance is structured as a preferred equity position paying 6–8% preferred return, with distributions beginning in month 3 post-close as operations stabilize. The seller receives more total value over the hold period — with structural protections that a discounted all-cash offer cannot provide.
            </p>

            <h2 className="text-2xl font-bold text-white pt-6">Is Equity Carry Right for Your Situation?</h2>
            <p>This structure works best when:</p>
            <ul className="space-y-2 mt-4">
              {[
                "The seller is motivated by total value received, not solely speed of exit",
                "The business or property has verified, documentable trailing cash flow",
                "The seller has interest in tax-deferral — structured payments can defer income recognition",
                "The seller values certainty of close over maximizing the cash-at-close percentage"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-yellow-500 mt-1 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white pt-6">The Bottom Line</h2>
            <p>
              Equity Carry is not seller financing in the traditional sense. It is a sophisticated capital structure — adapted from private equity and institutional acquisition practices — applied to the operating business and commercial real estate market. It protects sellers, eliminates bank contingency risk, and delivers full or near-full asking value on a defined timeline.
            </p>
            <p>
              For sellers who have been disappointed by deals that fell apart at the bank, this structure offers a fundamentally different path to closing.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gray-900/80 border border-yellow-900/30 rounded-xl">
            <h3 className="text-white font-bold text-xl mb-2">Want the Full Deal Structure Template?</h3>
            <p className="text-gray-400 text-sm mb-5">Download the free Equity Carry deal framework — a one-pager explaining how the structure is documented, with governance provisions and step-in rights outlined. No cost, no obligation.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 text-sm" />
              <button type="submit" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg text-sm tracking-wide transition-colors whitespace-nowrap">Download Free</button>
            </form>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
            <Link href="/resources" className="text-gray-500 text-sm hover:text-yellow-400 transition-colors">← Back to Resources</Link>
            <Link href="/resources/ai-tools-2026" className="text-yellow-500 text-sm hover:text-yellow-400 font-medium">Next: AI Tools for 2026 →</Link>
          </div>

        </div>
      </article>
      <Footer />
    </main>
  );
}
