"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, TrendingUp, Shield, DollarSign, Layers, Banknote } from "lucide-react";

const problems = [
  "Traditional buyers demand steep discounts to offset their all-in capital outlay",
  "Under-occupied or transitional assets fail conventional underwriting",
  "Sellers lose long-term upside on assets with strong stabilization potential",
  "Traditional closings create adversarial buyer-seller dynamics",
];

const strategies = [
  {
    icon: Shield,
    title: "Equity Carry",
    badge: "Flagship",
    featured: true,
    description:
      "Marss brings institutional capital to the closing table. The seller converts equity into a secured preferred equity position in the deal entity — earning passive income, deferring capital gains, and retaining governance protections and step-in rights throughout the hold period.",
    bestFor: ["Commercial RE & businesses", "Value-add & stabilization plays", "Sellers seeking price + income"],
  },
  {
    icon: Banknote,
    title: "Owner / Seller Financing",
    badge: "Direct Income",
    featured: false,
    description:
      "The seller extends structured financing directly to Marss — converting a lump-sum exit into a recurring monthly income stream. Negotiated rate, term, and schedule. No bank dependency. Preferred where sellers own assets free-and-clear or with minimal existing debt.",
    bestFor: ["Free-and-clear assets", "Short-term rentals & pad splits", "Sellers prioritizing monthly income"],
  },
  {
    icon: Layers,
    title: "Hybrid Capital Stack",
    badge: "Maximum Flexibility",
    featured: false,
    description:
      "Multiple financing layers precisely engineered for each asset — institutional DSCR debt, seller carry, preferred equity tranches, and performance-linked earnouts. Each layer sized to verified cash flow. Deployed where a single structure leaves value on the table.",
    bestFor: ["STR portfolios & co-living", "Complex multi-asset deals", "Custom seller income requirements"],
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Full or Near-Full Value",
    description:
      "No adversarial discount demands. Sellers receive full or near-full asking value — and continue participating in the asset's upside through the hold period.",
    tag: "Strong pricing, no forced haircut",
  },
  {
    icon: Shield,
    title: "Equity Protection",
    description:
      "Seller retains a legally structured preferred equity interest — not an unsecured note — protecting their capital with governance rights and step-in protections through the hold period.",
    tag: "Secured position, not a promise",
  },
  {
    icon: TrendingUp,
    title: "Tax Deferral",
    description:
      "Capital gains are deferred until actual cash is received, providing significant tax planning advantages vs. an immediate lump-sum sale.",
    tag: "Installment sale treatment applies",
  },
];

export function Strategy() {
  return (
    <section id="strategy" className="py-24 bg-[#080808]">
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
            Acquisition Strategy
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Creative Financing{" "}
            <span className="gold-gradient">Strategy Suite</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            No single structure fits every deal. Marss deploys three complementary
            acquisition strategies — each applied where it creates the most value
            for sellers, brokers, and all parties at the closing table.
          </p>
        </motion.div>

        {/* Challenge vs. Strategy Suite */}
        <div className="grid lg:grid-cols-5 gap-6 mb-16">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-[#0f0f0f] border border-red-900/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="h-4 w-4 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                Traditional Financing
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Strategy Suite */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 grid gap-4"
          >
            {strategies.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className={`relative rounded-xl border p-5 ${
                    s.featured
                      ? "border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-[#0f0f0f]"
                      : "border-[#1f1f1f] bg-[#0f0f0f]"
                  }`}
                >
                  {s.featured && (
                    <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest uppercase bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                      Flagship
                    </span>
                  )}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 shrink-0">
                      <Icon className="h-4 w-4 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-yellow-400/70 mb-0.5">{s.badge}</div>
                      <h4 className="text-white font-bold text-base">{s.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.bestFor.map((tag) => (
                      <span key={tag} className="text-[10px] bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* VS Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#0f0f0f] via-[#141209] to-[#0f0f0f] border border-yellow-900/30 rounded-2xl p-8 mb-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-red-950/50 border border-red-800/40 rounded-lg px-6 py-3 text-red-400 font-bold">
              ✗ TRADITIONAL: One-Size, Win-Lose
            </div>
            <div className="text-yellow-500 font-black text-xl">VS</div>
            <div className="bg-green-950/50 border border-green-800/40 rounded-lg px-6 py-3 text-green-400 font-bold">
              ✓ MARSS: Deal-Fitted, Win-Win
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Marss selects and engineers the right structure for each deal —
            aligning buyer, seller, and broker toward one goal: maximum value,
            minimum friction, certain close.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f0f0f] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-6 group transition-all duration-300"
            >
              <div className="p-3 w-fit rounded-lg bg-yellow-500/10 border border-yellow-500/20 mb-4 group-hover:bg-yellow-500/15 transition-colors">
                <benefit.icon className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>
              <div className="text-yellow-500 text-xs font-semibold tracking-wide">
                {benefit.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
