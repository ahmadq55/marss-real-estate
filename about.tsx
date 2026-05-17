"use client";

import { motion } from "framer-motion";
import { CheckCircle, Building, Briefcase, Globe } from "lucide-react";

const credentials = [
  "Real estate investor backed by business operations",
  "Specializes in value-add and transitional commercial assets",
  "Innovative Equity Carry Financing structure — no traditional lender required",
  "Aligned incentives: buyer and seller win together",
  "Transparent milestone-based performance tracking",
  "Experienced in multi-family, mixed-use, and commercial acquisitions",
];

const pillars = [
  {
    icon: Building,
    title: "Real Estate Expertise",
    description:
      "Deep knowledge of commercial and multi-family asset classes, deal structures, and value-add execution strategies.",
  },
  {
    icon: Briefcase,
    title: "Business-Backed Capital",
    description:
      "Our investment activity is supported by active business operations, providing operational credibility and stable deal execution.",
  },
  {
    icon: Globe,
    title: "Strategic Partnerships",
    description:
      "We build long-term relationships with agents, brokers, and sellers — not one-off transactions.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
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
            Who We Are
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            A Different Kind of{" "}
            <span className="gold-gradient">Real Estate Investor</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Marss Real Estate was founded on the belief that sellers, agents,
            and investors don't have to be on opposite sides of the table.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-2 border-yellow-500 pl-6 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We are a real estate and business-backed investment firm
                actively acquiring commercial and multi-family assets using a
                proprietary{" "}
                <span className="text-yellow-400 font-semibold">
                  Equity Carry Financing
                </span>{" "}
                approach that eliminates the friction of traditional
                transactions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When sellers, agents, and brokers bring deals to Marss Real
                Estate, they're working with an investor who is transparent,
                credible, and committed to delivering full value — not forcing
                discounts or playing adversarial games.
              </p>
            </div>

            {/* Credentials checklist */}
            <ul className="space-y-3">
              {credentials.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-[#111] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors shrink-0">
                    <pillar.icon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Logo panel */}
            <div className="bg-[#111] border border-yellow-900/30 rounded-xl p-6 flex items-center gap-5">
              <img
                src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg"
                alt="Marss Real Estate"
                className="h-16 w-16 object-contain rounded-lg"
              />
              <div>
                <div className="text-white font-bold text-lg tracking-widest">
                  MARSS REAL ESTATE
                </div>
                <div className="text-yellow-500 text-sm italic">
                  Transforming Property Into Possibilities
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="section-divider" />
      </div>
    </section>
  );
}
