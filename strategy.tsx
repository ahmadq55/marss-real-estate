"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, TrendingUp, Shield, DollarSign, ArrowRight } from "lucide-react";

const problems = [
  "Traditional buyers demand steep discounts to offset their all-in capital outlay",
  "Under-occupied or transitional assets fail conventional underwriting",
  "Sellers lose long-term upside on assets with strong stabilization potential",
  "Traditional closings create adversarial buyer-seller dynamics",
];

const benefits = [
  {
    icon: DollarSign,
    title: "Full Value Realization",
    description:
      "No forced discounting. Seller receives full market value upon stabilization and exit rather than a distressed sale price.",
    tag: "Fair market exit guaranteed",
  },
  {
    icon: Shield,
    title: "Equity Protection",
    description:
      "Seller retains a legally structured equity interest — not an unsecured note — protecting their capital through the hold period.",
    tag: "Secured instrument, not a promise",
  },
  {
    icon: TrendingUp,
    title: "Tax Deferral",
    description:
      "Capital gains are deferred until actual cash is received, providing significant tax planning advantages vs. an immediate sale.",
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
            Investment Strategy
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Equity Carry{" "}
            <span className="gold-gradient">Financing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            A structured deal approach that aligns buyer and seller toward one
            shared goal — maximizing the stabilized asset value.
          </p>
        </motion.div>

        {/* Challenge vs. Solution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f0f0f] border border-red-900/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="h-4 w-4 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                The Problem with Traditional Financing
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

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                The Equity Carry Solution
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A{" "}
              <span className="text-yellow-400 font-semibold">
                senior loan up to 60% LTV
              </span>{" "}
              covers the down payment, closing costs, and initial CapEx at
              close. The seller carries the remaining balance as secured
              preferred equity in the deal entity — tied directly to asset
              performance, with full value realization at exit.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "0%", label: "Upfront Price Discount" },
                { value: "100%", label: "Upside Participation" },
                { value: "3–5 Yrs", label: "Typical Hold Period" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-center"
                >
                  <div className="text-yellow-400 font-bold text-lg">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
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
              ✗ TRADITIONAL: Win-Lose
            </div>
            <div className="text-yellow-500 font-black text-xl">VS</div>
            <div className="bg-green-950/50 border border-green-800/40 rounded-lg px-6 py-3 text-green-400 font-bold">
              ✓ EQUITY CARRY: Win-Win
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Unlike a distressed sale or seller financing, Equity Carry aligns
            the buyer and seller toward a single shared goal — eliminating
            adversarial dynamics entirely.
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
