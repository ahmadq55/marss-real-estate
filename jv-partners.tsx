"use client";

import { motion } from "framer-motion";
import {
  Target,
  BarChart3,
  Handshake,
  Eye,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/button";

const benefits = [
  {
    icon: Target,
    title: "Deal-by-Deal Participation",
    description:
      "You choose the specific acquisition you want exposure to — a single named asset, not a blind pool or open-ended fund commitment.",
  },
  {
    icon: BarChart3,
    title: "Institutional Underwriting",
    description:
      "Every opportunity is underwritten to Investment Committee standards — T-12 actuals, rent rolls, and bank statements verified, then stress-tested at –10% and –20% revenue.",
  },
  {
    icon: Handshake,
    title: "Aligned Interests",
    description:
      "Marss co-invests and operates the asset alongside you. Returns are structured through a secured equity position with transparent, milestone-based reporting.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Review the underwriting model, the business plan, and the full risk map before you commit a dollar. No black boxes, no pressure.",
  },
];

const steps = [
  {
    n: "01",
    title: "Express Interest",
    body: "Tell us your target asset classes, check size, and hold horizon. We add you to the partner list for matching deals.",
  },
  {
    n: "02",
    title: "Review the Deal Package",
    body: "When a specific acquisition fits, you receive the full underwriting model, business plan, and risk assessment to evaluate on your own terms.",
  },
  {
    n: "03",
    title: "Co-Invest on the Deal",
    body: "Partner with Marss on that specific asset through a secured equity structure with defined governance and reporting rights.",
  },
];

export function JvPartners() {
  return (
    <section id="jv-partners" className="py-24 bg-[#0a0a0a]">
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
            For JV &amp; Capital Partners
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Co-Invest on a{" "}
            <span className="gold-gradient">Specific Deal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            For investors who want to partner with Marss on a single, named
            acquisition — backed by institutional underwriting and aligned
            operator capital. Deal-by-deal, never blind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#contact">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-5 text-base tracking-wide">
                Request Deal Access
              </Button>
            </a>
            <a href="#buy-box">
              <Button
                variant="outline"
                className="border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 px-8 py-5 text-base tracking-wide"
              >
                View Deal Criteria
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-7 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors shrink-0">
                  <b.icon className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-10 mb-16"
        >
          <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            How JV Participation Works
          </div>
          <h3 className="text-2xl font-bold text-white mb-10">
            Three Steps From Interest to Co-Investment
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="text-yellow-400/30 text-4xl font-bold mb-3">
                  {s.n}
                </div>
                <h4 className="text-white font-bold mb-2">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-3 max-w-3xl mx-auto text-center justify-center"
        >
          <p className="text-gray-600 text-xs leading-relaxed">
            Participation is offered only to qualified investors and is subject
            to definitive documentation and individual deal terms. This is not
            an offer to sell securities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
