"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, TrendingUp, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const agentBenefits = [
  {
    icon: DollarSign,
    title: "Your Commission, Protected",
    description:
      "We never circumvent agent relationships. Your commission is built into the deal structure from day one — no fee negotiations after LOI.",
  },
  {
    icon: TrendingUp,
    title: "Repeat Buyer Relationship",
    description:
      "We're not one-and-done. Agents who bring us qualified deals become long-term partners in our acquisition pipeline.",
  },
  {
    icon: Users,
    title: "Quick Decision-Making",
    description:
      "No committee approvals, no endless underwriting delays. Qualified deals receive a response within 48 hours and LOI within days.",
  },
  {
    icon: Star,
    title: "Creative Deal Structures",
    description:
      "When conventional offers fall short, we have tools others don't. Bring us the deals that didn't close elsewhere.",
  },
];

const sellerBenefits = [
  "Receive full market value — no discount required",
  "Equity carry structured as a secured legal instrument",
  "Capital gains tax deferral via installment sale treatment",
  "Transparent, milestone-based performance reporting",
  "No adversarial negotiations or pressure tactics",
  "Exit on favorable terms when the asset is stabilized",
];

const brokerTabs = [
  {
    role: "Listing Agents & Brokers",
    description:
      "You have a seller who can't get full price through conventional channels. We offer a creative alternative that gets the deal done and your commission paid.",
    items: [
      "We close on deals traditional buyers walk away from",
      "Commission fully protected and documented in LOI",
      "Preferred partnership status for repeat deal flow",
      "Fast turnaround — no drawn-out financing contingencies",
    ],
  },
  {
    role: "Seller Representatives",
    description:
      "Your client deserves full value. Our Equity Carry structure ensures they don't have to choose between closing the deal and getting what the property is worth.",
    items: [
      "Full value realization at stabilized exit",
      "Legally structured equity interest — not a promise",
      "Tax advantages vs. immediate discounted sale",
      "Aligned incentives — we win only when they win",
    ],
  },
];

export function ForAgents() {
  return (
    <section id="for-agents" className="py-24 bg-[#0a0a0a]">
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
            For Agents, Brokers & Sellers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Work With{" "}
            <span className="gold-gradient">Marss Real Estate</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            We build lasting relationships with the professionals who bring
            us deals — not transactional interactions.
          </p>
        </motion.div>

        {/* Agent Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {agentBenefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f0f0f] border border-[#1a1a1a] hover:border-yellow-900/50 rounded-xl p-6 flex gap-4 group transition-all duration-300"
            >
              <div className="p-3 h-fit rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors shrink-0">
                <b.icon className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seller Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0f0d08] to-[#0f0f0f] border border-yellow-900/30 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                For Sellers
              </div>
              <h3 className="text-white text-3xl font-bold mb-4">
                You Deserve Full Value
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Traditional buyers offer discounts because their financing
                requires it. We don't. Our Equity Carry structure lets you
                close the deal today while capturing the full upside at
                stabilization — on your terms.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-colors">
                Talk to Us About Your Property <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="space-y-3.5">
              {sellerBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Broker/Agent Role Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {brokerTabs.map((tab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-7"
            >
              <div className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">
                {tab.role}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {tab.description}
              </p>
              <ul className="space-y-2.5 mb-6">
                {tab.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 w-full"
                >
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
