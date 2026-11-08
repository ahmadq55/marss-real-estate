"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Building, Users, TrendingUp, Warehouse, Tent, Building2, Hotel } from "lucide-react";
import { Button } from "@/button";

const categories = [
  { icon: Warehouse, label: "Self-Storage", sub: "Occupancy and revenue upside" },
  { icon: Tent, label: "MHP / RV Parks", sub: "Lot rent, infill and stabilization" },
  { icon: Building2, label: "Multifamily", sub: "Value-add and stabilized communities" },
  { icon: Hotel, label: "Hospitality", sub: "Fee-simple hotels and motels" },
];

const audiencePaths = [
  {
    icon: Building,
    label: "Property or Business Owner",
    sub: "A confidential, no-obligation conversation",
    href: "#sellers",
  },
  {
    icon: Users,
    label: "Broker or Agent",
    sub: "Fast preliminary deal screening",
    href: "#for-brokers",
  },
  {
    icon: TrendingUp,
    label: "Investor or JV Partner",
    sub: "Deal-level partnership opportunities",
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 38%, rgba(202,168,76,0.07), transparent 55%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={false}
          className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-8"
        >
          <Shield className="h-3.5 w-3.5 text-yellow-400" />
          <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
            Texas-Focused · Select Markets Nationwide
          </span>
        </motion.div>
        <motion.h1
          initial={false}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Real Estate{" "}
          <span className="gold-gradient">Acquisitions</span>
        </motion.h1>
        <motion.p
          initial={false}
          className="max-w-3xl mx-auto text-xl text-yellow-400 font-medium leading-relaxed mb-4"
        >
          Texas-focused acquisitions. Select opportunities nationwide.
        </motion.p>
        <motion.p
          initial={false}
          className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed mb-10"
        >
          Marss Real Estate sources, underwrites and acquires income-producing
          and value-add real estate, including businesses with seller-owned real estate included in the acquisition, with a transaction structure built around
          each asset and each owner&apos;s goals.
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
          <a href="#buy-box">
            <Button size="lg" variant="outline" className="border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 px-8 py-6 text-base tracking-wide">
              View Acquisition Criteria
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
                <div className="text-gray-400 text-xs leading-relaxed">{path.sub}</div>
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
          {categories.map((cat, i) => (
            <a key={i} href="#buy-box" className="bg-[#0f0f0f] px-6 py-6 text-center group hover:bg-[#141414] transition-colors">
              <cat.icon className="h-6 w-6 text-yellow-400 mx-auto mb-3" />
              <div className="text-lg lg:text-xl font-bold text-white mb-1">{cat.label}</div>
              <div className="text-xs text-gray-400 leading-relaxed">{cat.sub}</div>
            </a>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
