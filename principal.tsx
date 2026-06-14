"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  MapPin,
  Briefcase,
  TrendingUp,
  Building,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const expertise = [
  { icon: Building, label: "Multi-Family & Commercial Real Estate" },
  { icon: Briefcase, label: "Operating Business Acquisitions (gas stations, car washes, auto dealers, motels, light manufacturing)" },
  { icon: TrendingUp, label: "Creative Capital Structures — Equity Carry, Owner Financing, Hybrid Stack" },
];

const stats = [
  { value: "10–12", label: "Deals Screened Weekly" },
  { value: "DFW+", label: "Primary Market" },
  { value: "3–10Y", label: "Hold Horizon" },
  { value: "Texas", label: "Base Market" },
];

export function Principal() {
  return (
    <section
      id="principal"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050505 0%, #0a0800 50%, #050505 100%)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=60&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            The Principal
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Who You're{" "}
            <span className="gold-gradient">Dealing With</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-lg">
            Institutional-grade analysis and acquisition execution — without the committee delays.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#111] border border-yellow-900/40 rounded-2xl p-8 text-center">
              <div className="relative inline-block mb-5">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-yellow-500/30 to-yellow-900/30 border-2 border-yellow-500/50 flex items-center justify-center mx-auto">
                  <span className="text-3xl font-black text-yellow-400 tracking-tight">AQ</span>
                </div>
                <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-green-500 border-2 border-[#111] flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
              </div>
              <h3 className="text-white font-black text-xl tracking-wide mb-1">Ahmad Qawasmeh</h3>
              <div className="text-yellow-500 text-sm font-semibold mb-1">Principal — Acquisition Specialist</div>
              <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs mb-6">
                <MapPin className="h-3.5 w-3.5" />
                Frisco, Texas
              </div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {stats.map((s, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 rounded-lg p-3">
                    <div className="text-yellow-400 font-bold text-lg leading-tight">{s.value}</div>
                    <div className="text-gray-600 text-[10px] uppercase tracking-wide mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/in/ahmadqawasmeh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 border border-[#0A66C2]/40 rounded-lg px-4 py-2.5 text-blue-400 text-sm font-semibold transition-all group"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-7"
          >
            <div className="border-l-2 border-yellow-500 pl-6">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Ahmad Qawasmeh is a multifamily, commercial real estate, and
                business acquisition specialist based in Frisco, Texas. He
                evaluates value-add and stabilized properties across Texas and
                surrounding markets — screening 10–12 deals weekly against
                rigorous financial metrics and a clear investment thesis.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Unlike institutional buyers who move through committee approvals and
                financing contingencies, Ahmad brings the speed of a principal
                operator with the analytical discipline of an institutional
                underwriter. Sellers and brokers get direct access, fast decisions,
                and deal structures engineered to deliver maximum value on both
                sides of the table.
              </p>
            </div>
            <div>
              <div className="text-yellow-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">Acquisition Focus</div>
              <div className="space-y-3">
                {expertise.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-yellow-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed pt-1.5">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-white font-bold mb-1">Evaluating a sale? Raise your hand.</div>
                <div className="text-gray-400 text-sm">Direct access. 48-hour response. No committee.</div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-lg text-sm shrink-0 transition-colors"
              >
                Talk to Ahmad
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
