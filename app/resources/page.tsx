import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/navbar";
import { Footer } from "@/footer";

export const metadata: Metadata = {
  title: "Resources | Marss Real Estate",
  description: "Free educational resources, deal analysis tools, and guides for commercial real estate investors and business sellers.",
};

const articles = [
  {
    slug: "equity-carry-guide",
    title: "How Equity Carry Financing Works: A Complete Guide for Business Sellers",
    excerpt: "A practical breakdown of the Equity Carry structure — how it protects sellers, eliminates bank risk, and delivers full value at the closing table.",
    category: "Creative Financing",
    readTime: "8 min read",
  },
  {
    slug: "ai-tools-2026",
    title: "5 AI Tools Every Commercial Real Estate Investor Is Using in 2026",
    excerpt: "From deal sourcing to due diligence, these AI-powered platforms are cutting analysis time from days to minutes. Here's what top operators are using.",
    category: "Technology",
    readTime: "6 min read",
  },
  {
    slug: "analyze-commercial-deal",
    title: "How to Analyze a Multifamily or Commercial Real Estate Deal in Under 15 Minutes",
    excerpt: "A step-by-step screening framework for income-producing properties with tenants — multifamily, retail, office, and industrial assets — covering NOI, DSCR, cap rate, and red flag identification.",
    category: "Deal Analysis — Real Estate",
    readTime: "7 min read",
  },
  {
    slug: "analyze-business-acquisition",
    title: "How to Analyze a Business Acquisition in Under 15 Minutes",
    excerpt: "Rapid-triage framework for screening service-based and cash flow businesses — SDE, EBITDA multiples, operator dependency risk, and hard gates before committing to full due diligence.",
    category: "Deal Analysis — Business",
    readTime: "8 min read",
  },
];

const tools = [
  {
    title: "Commercial Deal Screening Checklist",
    description: "The T-12, rent roll, and red flag checklist used to evaluate commercial acquisitions. Free PDF download.",
    type: "PDF Checklist",
  },
  {
    title: "Cap Rate & DSCR Quick Reference Card",
    description: "One-page reference for calculating Cap Rate, Cash-on-Cash Return, and DSCR on any commercial deal.",
    type: "Reference Card",
  },
  {
    title: "Equity Carry Deal Structure Overview",
    description: "A simplified one-pager explaining how seller equity carry positions are documented and protected.",
    type: "PDF Guide",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Free Resources</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Insights &amp; Tools for<br />
              <span className="text-yellow-400">Serious Operators</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Practical deal analysis frameworks, creative financing breakdowns, and AI tool recommendations — built for commercial real estate investors and business owners navigating acquisitions.
            </p>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Insights</span>
            <h2 className="text-3xl font-bold text-white">Educational Articles</h2>
            <p className="text-gray-500 mt-2 text-sm">Deal analysis, creative financing, and acquisition strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link key={a.slug} href={`/resources/${a.slug}`} className="group block">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-full hover:border-yellow-900/50 transition-all duration-200 hover:bg-gray-900/80">
                  <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">{a.category}</span>
                  <h3 className="text-white font-bold text-base mt-3 mb-3 group-hover:text-yellow-400 transition-colors leading-snug">{a.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-xs">{a.readTime}</span>
                    <span className="text-yellow-500 text-xs font-bold group-hover:text-yellow-400">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Guides */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Tools &amp; Guides</span>
            <h2 className="text-3xl font-bold text-white">Downloadable Resources</h2>
            <p className="text-gray-500 mt-2 text-sm">Checklists, templates, and reference cards — enter your email below to access all downloads free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tools.map((t, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-yellow-900/40 transition-all">
                <span className="inline-block bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-wide px-3 py-1 rounded mb-4">{t.type}</span>
                <h3 className="text-white font-bold text-base mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{t.description}</p>
                <a href="#email-form" className="text-yellow-500 text-sm font-bold hover:text-yellow-400 transition-colors">Download Free →</a>
              </div>
            ))}
          </div>

          {/* Email Capture */}
          <div id="email-form" className="max-w-xl mx-auto bg-gray-900/80 border border-yellow-900/30 rounded-xl p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-2">Access All Free Resources</h3>
            <p className="text-gray-400 text-sm mb-6">Enter your email to download the complete toolkit. No spam — just deal intelligence.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 text-sm"
              />
              <button type="submit" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg text-sm tracking-wide transition-colors whitespace-nowrap">
                Get Free Access
              </button>
            </form>
            <p className="text-gray-600 text-xs mt-3">By submitting, you agree to receive occasional updates from MARSS Real Estate.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
