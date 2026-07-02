import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/navbar";
import { Footer } from "@/footer";
import { AdviceDisclaimer } from "@/disclaimer";

type Market = {
  name: string;
  h1: string;
  intro: string;
  why: string[];
  criteria: string[];
};

const MARKETS: Record<string, Market> = {
  "gas-stations": {
    name: "Gas Stations & C-Stores",
    h1: "We Acquire Gas Stations & Convenience Stores",
    intro:
      "Marss Real Estate acquires fuel and convenience retail across Texas and the Sunbelt — real estate plus the operating business — using structures built around the asset's verified cash flow.",
    why: [
      "Real estate anchors the downside; fuel + inside sales drive the income",
      "We underwrite to trailing financials, not projections",
      "Structures that let owners exit at full or near-full value",
    ],
    criteria: [
      "Fee-simple real estate (owned, not leased land preferred)",
      "Verifiable fuel volume and inside-sales margin",
      "Environmental compliance / clean Phase I where applicable",
      "Minimum ~$500K EBITDA for business-backed deals",
    ],
  },
  "car-washes": {
    name: "Car Washes",
    h1: "We Acquire Car Washes",
    intro:
      "Express, flex, and full-service car wash operations with strong recurring revenue and real estate we can underwrite to the numbers.",
    why: [
      "Membership / unlimited-plan revenue creates durable cash flow",
      "Equipment and site condition factored into every structure",
      "Owner can stay on or exit cleanly, structured to their goals",
    ],
    criteria: [
      "Owned real estate with the wash operation",
      "Documented membership base and monthly recurring revenue",
      "Equipment age and maintenance history",
      "Minimum ~$500K EBITDA",
    ],
  },
  multifamily: {
    name: "Multi-Family (5+ Units)",
    h1: "We Acquire Multi-Family Properties",
    intro:
      "Value-add and stabilized multi-family (5+ units) across the Sunbelt, underwritten to T-12 actuals, rent rolls, and verified operating expenses.",
    why: [
      "Institutional-grade underwriting on every deal",
      "Structures that avoid forcing a discounted sale",
      "Long-term hold horizon (3–10 years) aligned with sellers",
    ],
    criteria: [
      "5+ units, Texas / Sunbelt markets",
      "T-12, rent roll, and bank statements available",
      "Clear value-add or stabilization path",
      "Realistic in-place cap rate on verified NOI",
    ],
  },
  "self-storage": {
    name: "Self-Storage",
    h1: "We Acquire Self-Storage Facilities",
    intro:
      "Self-storage assets with stable occupancy and expansion or management-upside potential.",
    why: [
      "Low operational intensity, durable demand",
      "Underwritten to actual occupancy and rate history",
      "Management and revenue-management upside identified pre-LOI",
    ],
    criteria: [
      "Owned real estate",
      "Occupancy and rate roll history",
      "Expansion land or lease-up upside a plus",
      "Sunbelt / Texas focus",
    ],
  },
  "auto-dealerships": {
    name: "Auto Dealerships & Garages",
    h1: "We Acquire Auto Dealerships & Service Garages",
    intro:
      "Independent dealerships, service garages, and auto-service operations anchored by real estate.",
    why: [
      "Service and parts revenue add income durability",
      "Real estate provides downside protection",
      "Owner transition structured to preserve operations",
    ],
    criteria: [
      "Owned real estate preferred",
      "Verifiable service, parts, and unit-sales financials",
      "Clean title and licensing",
      "Minimum ~$500K EBITDA",
    ],
  },
  motels: {
    name: "Motels & Extended-Stay",
    h1: "We Acquire Motels & Extended-Stay Properties",
    intro:
      "Independent and flagged motels and extended-stay assets with real estate and repositioning upside.",
    why: [
      "Real estate plus operating income in one asset",
      "Repositioning and revenue-management upside",
      "Structures aligned to the seller's timing and tax goals",
    ],
    criteria: [
      "Owned real estate",
      "Occupancy, ADR, and RevPAR history",
      "PIP / capex needs documented",
      "Sunbelt / Texas focus",
    ],
  },
  laundromats: {
    name: "Laundromats",
    h1: "We Acquire Laundromats",
    intro:
      "Card- and coin-operated laundromats with steady cash flow and real estate we can underwrite.",
    why: [
      "Recession-resistant, cash-flow-forward operations",
      "Equipment condition factored into structure",
      "Passive-leaning operations suit multiple structures",
    ],
    criteria: [
      "Owned real estate or long assignable lease",
      "Verifiable revenue (card system data preferred)",
      "Equipment age and utility cost history",
      "Texas / Sunbelt focus",
    ],
  },
  "light-manufacturing": {
    name: "Light Manufacturing",
    h1: "We Acquire Light Manufacturing Businesses",
    intro:
      "Essential light-manufacturing operations backed by real estate, with durable customer relationships and transferable operations.",
    why: [
      "Real estate anchors a business-backed acquisition",
      "Underwritten to trailing financials and customer concentration",
      "Owner-transition and key-employee retention structured up front",
    ],
    criteria: [
      "Owned real estate preferred",
      "3-year P&L, tax returns, and customer concentration detail",
      "Transferable operations and workforce",
      "Minimum ~$500K EBITDA",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(MARKETS).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const m = MARKETS[type];
  if (!m) return { title: "Acquisitions | Marss Real Estate" };
  return {
    title: `${m.name} Acquisitions | Marss Real Estate`,
    description: m.intro,
  };
}

export default async function AcquisitionLanding({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const m = MARKETS[type];
  if (!m) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <section className="relative pt-36 pb-20 bg-[#080808] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #C9A84C22 1px, transparent 1px), linear-gradient(to bottom, #C9A84C22 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#buy-box"
            className="text-yellow-500/70 hover:text-yellow-400 text-xs font-semibold tracking-widest uppercase"
          >
            ← All Asset Classes
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-4 mb-5">
            {m.h1}
          </h1>
          <p className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-8">
            {m.intro}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-7 py-4 rounded tracking-wide"
          >
            Submit a Deal →
          </Link>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Why Marss
            </div>
            <ul className="space-y-3">
              {m.why.map((w, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              What We Look For
            </div>
            <ul className="space-y-3">
              {m.criteria.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <AdviceDisclaimer />
        </div>
      </section>
      <Footer />
    </main>
  );
}
