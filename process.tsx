"use client";

import { motion } from "framer-motion";
import { Building, TrendingUp, Activity, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building,
    title: "Acquisition",
    subtitle: "No Cash at Close",
    description:
      "Buyer takes title. Seller equity is converted to a carried interest with clearly defined terms and milestones. No immediate full-price financing required.",
    highlights: [
      "Title transfers to buyer at close",
      "Seller equity becomes structured carried interest",
      "Terms documented in legally binding agreement",
    ],
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Stabilization",
    subtitle: "Active Management",
    description:
      "Buyer executes the value-add plan — leasing, renovation, or repositioning the asset to reach target occupancy and NOI.",
    highlights: [
      "Leasing, renovation, repositioning",
      "Active property management",
      "Progress tracked against milestones",
    ],
  },
  {
    number: "03",
    icon: Activity,
    title: "Performance",
    subtitle: "Milestone-Linked",
    description:
      "Seller carry accrues based on NOI growth, occupancy, or agreed performance milestones. Performance is transparently tracked and reported.",
    highlights: [
      "Carry tied to NOI / occupancy milestones",
      "Transparent reporting to seller",
      "Regular performance updates",
    ],
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Exit",
    subtitle: "Full Realization",
    description:
      "Asset is sold or refinanced at stabilized value. Seller carry pays out at full value — no discounts, no haircuts. Aligned exit for all parties.",
    highlights: [
      "Sale or refinance triggers payout",
      "Seller receives full carry value",
      "No forced discounts at exit",
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-[#080808]">
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
            The Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How It <span className="gold-gradient">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            A clear, four-phase framework from acquisition to full value
            realization — no surprises, no games.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-900/40 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-yellow-500/10 border-2 border-yellow-500/40 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center">
                      <span className="text-black text-[9px] font-black">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow — between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 z-10">
                    <ArrowRight className="h-4 w-4 text-yellow-800" />
                  </div>
                )}

                {/* Card */}
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] hover:border-yellow-900/50 rounded-xl p-6 transition-all duration-300 group">
                  <div className="text-center mb-4">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {step.title}
                    </h3>
                    <div className="inline-block border border-yellow-900/50 rounded-full px-3 py-0.5 text-yellow-600 text-xs font-semibold tracking-wide">
                      {step.subtitle}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 text-center">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
                        <span className="text-gray-500 text-xs">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
