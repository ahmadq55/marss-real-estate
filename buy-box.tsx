"use client";

import { motion } from "framer-motion";
import { Warehouse, Tent, Building2, Hotel, MapPin, Layers, CheckCircle, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Warehouse,
    badge: "Primary Focus",
    title: "Self-Storage",
    items: [
      "Operating facilities with existing income",
      "Occupancy stabilization",
      "Rent and revenue management",
      "Operating expense improvements",
      "Expansion where justified",
      "Repositioning or improved management",
    ],
  },
  {
    icon: Tent,
    badge: "Primary Focus",
    title: "Mobile Home & RV Parks",
    items: [
      "Operating communities with existing income",
      "Occupancy improvements",
      "Lot rent adjustments",
      "Vacant-site infill",
      "Utility and operating efficiencies",
      "Property improvements and stabilization",
    ],
  },
  {
    icon: Building2,
    badge: "Active Focus",
    title: "Multifamily",
    items: [
      "Small and midsize apartment communities",
      "Garden-style and workforce housing",
      "Stabilized properties with attractive economics",
      "Value-add and underperforming properties",
      "Favorable assumable debt a plus",
      "Seller financing or other viable structures",
    ],
  },
  {
    icon: Hotel,
    badge: "Selective Focus",
    title: "Value-Add Hospitality",
    items: [
      "Fee-simple hotels and motels",
      "Renovation and repositioning",
      "Improved revenue management",
      "Reflagging or conversion",
      "Operational improvements",
      "Stabilization and value creation",
    ],
  },
];

const alsoConsidered = [
  "Commercial and mixed-use real estate",
  "Businesses with seller-owned real estate (target ~$500K+ EBITDA, exceptions considered)",
  "Other income-producing real estate",
  "Select residential and rental opportunities where compelling",
];

const dealQualifiers = [
  "Income-producing asset with verifiable financial performance",
  "Clear path to stabilization or value creation",
  "Owner or authorized representative engaged in the process",
  "No major environmental or title encumbrances",
  "Hospitality: fee-simple ownership",
  "Business targets include owned real estate",
];

const repositioningPhases = [
  {
    phase: "Phase 1",
    title: "Stabilize & Optimize",
    description:
      "Streamline operations, install strong management and execute targeted CapEx — driving ADR, occupancy and NOI from day one.",
  },
  {
    phase: "Phase 2",
    title: "Reposition",
    description:
      "Improve revenue management and, where the market supports it, reflag or reposition the asset under a stronger brand concept.",
  },
  {
    phase: "Phase 3",
    title: "Conversion Analysis",
    description:
      "If zoning and economic analysis support it, evaluate conversion to a higher and better use that maximizes the underlying real estate value.",
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
            We acquire income-producing and value-add assets in four principal
            categories. Texas-focused, with select opportunities nationwide.
          </p>
        </motion.div>

        {/* Four principal categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f0f0f] border border-[#1a1a1a] hover:border-yellow-900/50 rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 w-fit rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors">
                  <c.icon className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/30">
                  {c.badge}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-4 tracking-wide">{c.title}</h3>
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

        {/* Also considered + geography */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <Layers className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-base tracking-wide">Also Considered</h3>
            </div>
            <ul className="space-y-2.5">
              {alsoConsidered.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span className="text-gray-400 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <MapPin className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-base tracking-wide">Geography</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                "Primary focus: Texas",
                "Dallas–Fort Worth, Houston, San Antonio, Austin, Waco and surrounding markets",
                "Select opportunities across the Sunbelt and nationwide",
                "Nationwide reach through broker and investment partners",
              ].map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                  <span className="text-gray-400 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Hospitality repositioning */}
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
              We selectively acquire fee-simple hotels and motels with a disciplined
              three-phase playbook — from operational stabilization to repositioning,
              with a conversion analysis where the economics and zoning support it.
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
                Send what you have. We screen submissions against our criteria and
                follow up on opportunities that fit.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-colors">
                Submit a Deal <ArrowRight className="h-4 w-4" />
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
