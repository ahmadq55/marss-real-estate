import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Marss Real Estate",
  description: "Free institutional-grade resources for commercial real estate investors, business sellers, and acquisition professionals — deal analysis frameworks, financing guides, and market tools.",
};

const articles = [
  {
    href: "/resources/equity-carry-guide",
    tag: "Seller Guide",
    title: "How Equity Carry Financing Works",
    description: "A complete guide to the Equity Carry acquisition structure for business sellers — how it delivers full or near-full asking price, how seller protections are documented, and when and how you get paid.",
    readTime: "8 min read",
  },
  {
    href: "/resources/analyze-commercial-deal",
    tag: "Underwriting Framework",
    title: "How to Analyze a Multifamily or Commercial Deal in Under 15 Minutes",
    description: "A rapid-triage framework for income-producing properties — Cap Rate validation, NOI stress testing at -10% and -20%, DSCR hard gates, and a disciplined Go / No-Go decision before committing to full diligence.",
    readTime: "10 min read",
  },
  {
    href: "/resources/analyze-business-acquisition",
    tag: "Underwriting Framework",
    title: "How to Analyze a Business Acquisition in Under 15 Minutes",
    description: "A rapid-triage framework for screening service-based and cash-flow businesses — SDE and EBITDA extraction, valuation multiple sanity check, capital stack stress testing, and hard gates before full due diligence.",
    readTime: "10 min read",
  },
  {
    href: "/resources/ai-tools-2026",
    tag: "Tools & Technology",
    title: "5 AI Tools Every Commercial Real Estate Investor Is Using in 2026",
    description: "From deal screening to financial extraction, these AI-powered platforms are cutting commercial real estate analysis time from days to minutes — with practical integration into your acquisition workflow.",
    readTime: "7 min read",
  },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Free Resources</div>
        <h1 className="text-4xl font-bold text-white mb-4">Institutional-Grade Guides for Serious Investors</h1>
        <p className="text-gray-400 text-lg max-w-2xl">Built for commercial real estate professionals and business acquisition specialists. No course. No upsell. Practical frameworks you can deploy on your next deal.</p>
      </div>
      <div className="space-y-6">
        {articles.map((article) => (
          <Link key={article.href} href={article.href} className="block group">
            <div className="border border-[#1f1f1f] hover:border-yellow-900/50 bg-[#0d0d0d] hover:bg-[#111] rounded-xl p-7 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-0.5 rounded-full">{article.tag}</span>
                    <span className="text-gray-600 text-xs">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">{article.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{article.description}</p>
                </div>
                <div className="shrink-0 text-gray-600 group-hover:text-yellow-400 transition-colors mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-16 bg-gradient-to-br from-[#0d0900] to-[#0a0a0a] border border-yellow-900/30 rounded-2xl p-8 text-center">
        <div className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-3">Have a Deal?</div>
        <h3 className="text-2xl font-bold text-white mb-3">Get a Second Set of Eyes Before You Commit</h3>
        <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Submit your deal to Marss Real Estate. We screen, underwrite, and respond with a Go / No-Go and LOI within 48 hours.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/#contact" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg text-sm transition-colors">Submit a Deal</Link>
          <a href="tel:9727796787" className="inline-block border border-yellow-400/30 hover:border-yellow-400/60 text-yellow-400 font-semibold px-6 py-3 rounded-lg text-sm transition-colors">Call 972.779.6787</a>
        </div>
      </div>
    </div>
  );
}
