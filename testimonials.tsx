"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Layers, Building2, MapPin, Handshake } from "lucide-react";

// Neutral, factual credibility points about how Marss operates.
// No quotes and no third-party endorsements — those will be added only when
// real, attributable, consented testimonials are available (FTC-compliant).
const points = [
  {
    icon: ShieldCheck,
    title: "Principal Buyer — Not a Wholesaler",
    body: "We acquire for our own account and close on the structures we present. No assignment fees, no daisy chains.",
  },
  {
    icon: Building2,
    title: "Institutional Underwriting",
    body: "Every opportunity is underwritten in-house to Investment Committee standards — real T-12s, rent rolls, and financials, stress-tested before we commit.",
  },
  {
    icon: Clock,
    title: "48-Hour Response",
    body: "Qualified deal submissions receive a response within 48 hours, with an LOI in days on opportunities that fit our criteria.",
  },
  {
    icon: Layers,
    title: "Structures Selected Per Deal",
    body: "Equity Carry, Owner Financing, and Hybrid Capital Stacks — chosen for the asset, the seller's goals, and verified cash flow.",
  },
  {
    icon: MapPin,
    title: "Texas & the Sunbelt",
    body: "Active in commercial real estate and essential operating businesses across Texas and the broader Sunbelt.",
  },
  {
    icon: Handshake,
    title: "Built for Repeat Relationships",
    body: "Commission protection for brokers and aligned outcomes for sellers — we measure success by the partners who come back.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Why Work With Marss
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built on Relationships.{" "}
            <span className="gold-gradient">Grounded in Discipline.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            How we operate — the standards sellers, brokers, and capital partners
            can count on from first call to close.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0f0f0f] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-7 transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-yellow-500/10 border border-yellow-500/20 mb-4 group-hover:bg-yellow-500/15 transition-colors">
                <p.icon className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
