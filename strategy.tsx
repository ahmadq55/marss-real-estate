"use client";

import { motion } from "framer-motion";
import { Banknote, Landmark, FileText, Repeat, Handshake, Layers } from "lucide-react";

const structures = [
  {
    icon: Banknote,
    title: "Cash",
    description: "A clean, direct purchase when the numbers support it",
  },
  {
    icon: Landmark,
    title: "Third-Party Financing",
    description: "Conventional or institutional debt alongside equity",
  },
  {
    icon: FileText,
    title: "Seller Financing",
    description: "First-position seller financing where it fits",
  },
  {
    icon: Repeat,
    title: "Loan Assumption",
    description: "Taking over existing debt on favorable terms",
  },
  {
    icon: Handshake,
    title: "Equity Carry",
    description: "An available option for select transactions",
  },
  {
    icon: Layers,
    title: "Hybrid Structures",
    description: "Combined approaches tailored to the deal",
  },
];

export function Strategy() {
  return (
    <section id="strategy" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Acquisition Structures
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Flexible{" "}
            <span className="gold-gradient">Deal Structures</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Structure follows the asset, the seller and the numbers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {structures.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0f0f0f] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-6 group transition-all duration-300"
            >
              <div className="p-3 w-fit rounded-lg bg-yellow-500/10 border border-yellow-500/20 mb-4 group-hover:bg-yellow-500/15 transition-colors">
                <s.icon className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
          The right structure depends on seller objectives, existing debt, property
          economics and available capital. Specific terms are negotiated per
          transaction, and nothing here is a promise of price, tax treatment or
          closing timeline.
        </p>
      </div>
    </section>
  );
}
