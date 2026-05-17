"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Investment Strategy", value: "Equity Carry" },
  { label: "Seller Discount Required", value: "0%" },
  { label: "Typical Hold Period", value: "3–5 Yrs" },
  { label: "Upside Participation", value: "100%" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C9A84C22 1px, transparent 1px), linear-gradient(to bottom, #C9A84C22 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-yellow-600/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-8"
        >
          <Shield className="h-3.5 w-3.5 text-yellow-400" />
          <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
            Trusted Real Estate Investment Partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Transforming Property
          <br />
          <span className="gold-gradient">Into Possibilities</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-10"
        >
          Marss Real Estate partners with agents, brokers, and sellers to create
          win-win real estate transactions through innovative{" "}
          <span className="text-yellow-400 font-medium">
            Equity Carry Financing
          </span>{" "}
          — no forced discounts, full value realization, aligned incentives.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a href="#strategy">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-6 text-base tracking-wide"
            >
              Our Strategy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 px-8 py-6 text-base tracking-wide"
            >
              Submit a Deal
            </Button>
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-yellow-900/20 rounded-2xl overflow-hidden border border-yellow-900/30"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] px-6 py-6 text-center group hover:bg-[#141414] transition-colors"
            >
              <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
