"use client";

import { motion } from "framer-motion";
import { Building, MapPin, DollarSign, Package, CheckCircle, ArrowRight, Hotel } from "lucide-react";

const criteria = [
  {
    icon: Building,
    title: "Asset Types",
    items: [
      "Multi-family (5+ units)",
      "Short-Term Rentals (STR / vacation rental)",
      "Pad Split / Co-Living properties",
      "Self-Storage facilities",
      "RV Parks / RV Resorts",
      "Mixed-use & commercial / retail",
      "Office, light industrial & warehousing",
      "Hotels, motels & hospitality (value-add)",
      "Operating businesses backed by real estate",
    ],
  },
  {
    icon: Package,
    title: "Asset Condition",
    items: [
      "Value-add opportunities",
      "Under-occupied or mismanaged",
      "Transitional or repositioning plays",
      "Light to moderate distress",
      "Stabilization upside required",
      "STR-conversion or co-living-conversion ready",
    ],
  },
  {
    icon: DollarSign,
    title: "Deal Size",
    items: [
      "Minimum: $300,000 (STR & pad split)",
      "Minimum: $500,000 (commercial & business)",
      "Preferred: $1M – $10M+",
      "Larger deals considered case-by-case",
      "Creative structure — equity carry, owner financing, or hybrid",
    ],
  },
  {
    icon: MapPin,
    title: "Geography",
    items: [
      "Primary: Texas (DFW, Houston, Austin, SA)",
      "Sunbelt & Southeast growth markets",
      "Emerging & secondary markets welcome",
      "STR: high-tourism & business travel corridors",
      "National reach via partner network",
    ],
  },
];

const dealQualifiers = [
  "Seller open to creative financing — equity carry, owner financing, or hybrid capital stack",
  "Asset has clear value-add, STR-conversion, or stabilization path",
  "No major environmental or title encumbrances",
  "Motivated seller aligned on structured, long-term payout",
  "Agent / broker fully representing the transaction",
  "STR & pad split: local STR regulations permit short-term or shared-housing operations",
];

const repositioningPhases = [
  {
    phase: "Phase 1",
    title: "Stabilize & Optimize",
    description:
      "Streamline operations for improved efficiency under current branding. Recruit and install top-tier management talent. Execute targeted CapEx for renovation and property improvements — driving ADR, occupancy, and NOI from day one.",
  },
  {
    phase: "Phase 2",
    title: "Boutique Repositioning",
    description:
      "Reposition the asset as a boutique hotel or motel under Marss proprietary branding. Curate a distinct guest experience that commands premium rates and repeat bookings in the local market.",
  },
  {
    phase: "Phase 3",
    title: "Conversion Analysis",
    description:
      "If zoning and economic analysis support it, evaluate conversion to multifamily residential — unlocking a higher and better use that maximizes the underlying real estate value.",
  },
];

export function BuyBox() {
  return (
    <section id="buy-box" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Acquisition Criteria
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="gold-gradient">Buy Box</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            We are active acquirers across commercial real estate, operating businesses,
            short-term rentals, self-storage, RV parks, and pad split properties. If your deal matches
            these criteria, we want to hear from you — fast.
          </p>
        </motion.div>

        {/* Criteria Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f0f0f] border border-[#1a1a1a] hover:border-yellow-900/50 rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="p-3 w-fit rounded-lg bg-yellow-500/10 border border-yellow-500/20 mb-4 group-hover:bg-yellow-500/15 transition-colors">
                <c.icon className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-base mb-4 tracking-wide">
                {c.title}
              </h3>
              <ul className="space-y-2.5">
                {c.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                    <span className="text-gray-400 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Hotel / Motel Repositioning Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-[#0f0d08] to-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <Hotel className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">
                  Featured Strategy
                </div>
                <h3 className="text-white text-2xl font-bold">
                  Hotel & Motel Repositioning
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-3xl">
              Marss acquires underperforming hotels and motels with a disciplined three-phase repositioning
              playbook — from operational stabilization to boutique brand repositioning, with a multifamily
              conversion pathway where the economics and zoning support it.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {repositioningPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#111111] border border-[#222222] rounded-xl p-6 relative overflow-hidden"
                >
                  <div className="text-yellow-500/40 text-5xl font-black absolute top-3 right-4 select-none">
                    {i + 1}
                  </div>
                  <div className="text-yellow-500 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    {phase.phase}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">{phase.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Deal Qualifiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0f0d08] to-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/3">
              <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Deal Qualifiers
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">
                Does Your Deal Fit?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We move quickly on deals that match our criteria. A qualifying
                deal can be under LOI within days, not months.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-colors">
                Submit Your Deal <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="lg:w-2/3">
              <ul className="space-y-4">
                {dealQualifiers.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
