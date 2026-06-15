"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Building, Users, TrendingUp } from "lucide-react";
import { Button } from "@/button";

const stats = [
  { label: "LOI Commitment", value: "48-Hr" },
  { label: "Active Markets", value: "Sunbelt" },
  { label: "Asset Classes", value: "10+" },
  { label: "Min. EBITDA", value: "$500K+" },
];

const audiencePaths = [
  {
    icon: Building,
    label: "Selling a Property or Business",
    sub: "Multiple exit structures — full value, no forced discount",
    href: "#sellers",
  },
  {
    icon: Users,
    label: "Broker or Agent with a Deal",
    sub: "Commission protected from Day 1. LOI in days.",
    href: "#for-brokers",
  },
  {
    icon: TrendingUp,
    label: "Investor or Capital Partner",
    sub: "Deal-level co-investment and advisory access",
    href: "#jv-partners",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C9A84C22 1px, transparent 1px), linear-gradient(to bottom, #C9A84C22 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-yellow-600/5 blur-[120px] pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-8"
        >
          <Shield className="h-3.5 w-3.5 text-yellow-400" />
          <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
            Active Acquirer · Sunbelt Markets · 10+ Asset Classes
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Serious Capital.{" "}
          <span className="gold-gradient">Creative Structures.</span>
          <br className="hidden sm:block" />
          <span className="text-white">Your Asset&apos;s Full Value &#8212;&nbsp;</span>
          <span className="gold-gradient">Delivered.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed mb-10"
        >
          Your business or property is worth full value. We don&apos;t force
          discounts &#8212; we engineer{" "}
          <span className="text-yellow-400 font-medium">acquisition structures</span>{" "}
          that deliver full value to sellers, commission certainty to brokers,
          and deal-level access to capital partners.{" "}
          <span className="text-white font-medium">We have a path for you.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a href="#contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-6 text-base tracking-wide">
              Submit a Deal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#strategy">
            <Button size="lg" variant="outline" className="border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 px-8 py-6 text-base tracking-wide">
              Our Approach
            </Button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-16"
        >
          {audiencePaths.map((path, i) => (
            <a
              key={i}
              href={path.href}
              className="group flex items-start gap-3 bg-[#111] hover:bg-[#161616] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-4 text-left transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 shrink-0 group-hover:bg-yellow-500/15 transition-colors mt-0.5">
                <path.icon className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold leading-snug mb-0.5 group-hover:text-yellow-200 transition-colors">{path.label}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{path.sub}</div>
              </div>
            </a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-yellow-900/20 rounded-2xl overflow-hidden border border-yellow-900/30"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0f0f0f] px-6 py-6 text-center group hover:bg-[#141414] transition-colors">
              <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
