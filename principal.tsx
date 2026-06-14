"use client";

import { motion } from "framer-motion";
import { Linkedin, MapPin, ArrowRight, CheckCircle2, BarChart3, Building2, Layers, Zap } from "lucide-react";

const credentials = [
  {
    icon: BarChart3,
    title: "Institutional-Grade Underwriting",
    body: "Every deal is stress-tested across Cap Rate, DSCR, IRR, CoC, and equity multiples — evaluated against T-12 actuals, rent rolls, and bank statements before any commitment.",
  },
  {
    icon: Layers,
    title: "Creative Capital Architecture",
    body: "Equity Carry, owner financing, hybrid stacks, and OpCo/PropCo structures deployed where each fits best. Built to close — not contingent on bank timelines.",
  },
  {
    icon: Building2,
    title: "Multi-Asset Class Coverage",
    body: "Multifamily · Commercial · Gas Stations · Car Washes · Auto Dealers · Motels & Hotels · Self-Storage · RV Parks · Pad Splits · Light Manufacturing",
  },
  {
    icon: Zap,
    title: "Direct Principal. Fast Decisions.",
    body: "No investment committee cycles. No fund approval layers. Ahmad underwrites every deal personally and moves at the speed operators demand — typically within 48 hours.",
  },
];

const stats = [
  { value: "10–12+", label: "Deals Screened Weekly" },
  { value: "5+", label: "Asset Classes Covered" },
  { value: "3–10 Yr", label: "Hold Horizon" },
  { value: "IC-Ready", label: "Underwriting Standard" },
];

const assetClasses = [
  "Multifamily (5+ Units)",
  "NNN & Mixed-Use Commercial",
  "Gas Stations & C-Stores",
  "Car Washes",
  "Auto Dealers & Garages",
  "Motels & Hotels",
  "Self-Storage",
  "RV Parks",
  "Pad Splits / STR",
  "Light Manufacturing",
  "HVAC & Plumbing Firms",
  "Laundromats",
];

export function Principal() {
  return (
    <section
      id="principal"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060606 0%, #0c0900 40%, #060606 100%)" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* HERO STRIP */}
      <div className="relative grid lg:grid-cols-5 min-h-[80vh]">
        {/* LEFT - Large Photo Column */}
        <div className="relative lg:col-span-2 min-h-[50vh] lg:min-h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage:
                "url('https://galaxy-prod.tlcdn.com/view/user_372EAGt89yD821sKcMySYfKrZna/bde94d41e1ab40ffa00d7e9c10ac56d9.png')",
              filter: "grayscale(100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 60%, #060606 100%), linear-gradient(to top, #060606 0%, transparent 40%)",
            }}
          />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-2"
            >
              Founder & Managing Principal
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white text-3xl lg:text-4xl font-bold tracking-tight leading-none mb-1"
            >
              Ahmad Qawasmeh
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-sm flex items-center gap-1.5 mt-2"
            >
              <MapPin className="w-3.5 h-3.5 text-yellow-500/70" />
              Frisco, Texas · Sunbelt Markets
            </motion.p>
          </div>
        </div>

        {/* RIGHT - Bio & Credentials */}
        <div className="relative lg:col-span-3 flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-400/80 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Investor · Operator · Deal Architect
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative border-l-2 border-yellow-400 pl-6 mb-10"
          >
            <p className="text-white text-xl lg:text-2xl font-light leading-relaxed">
              &ldquo;I don&rsquo;t just buy properties and businesses — I engineer acquisitions that work for both sides of the table. My edge is structure, speed, and the conviction to close without contingencies.&rdquo;
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 mb-10"
          >
            <p className="text-zinc-300 text-base leading-relaxed">
              Ahmad Qawasmeh is the Founder and Managing Principal of Marss Real Estate, a Frisco-based acquisition platform targeting commercial real estate and cash-flowing operating businesses across Texas and the broader Sunbelt. He leads every deal from initial screen through close — personally underwriting each opportunity to institutional Investment Committee standards.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              With a pipeline that spans multifamily, NNN commercial, gas stations, car washes, auto dealerships, motels, self-storage, and light manufacturing, Ahmad applies the same rigorous analytical framework to a $1M business acquisition as to a $15M commercial asset — stress-testing every deal at –10% and –20% revenue scenarios, verifying T-12 actuals against bank statements, and modeling exit feasibility at multiple cap rate scenarios before committing a dollar.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              His proprietary Equity Carry structure enables sellers to close at full or near-full asking price, receive a secured equity position in the acquiring entity, and participate in long-term upside — without the delays and uncertainty of traditional bank-financed transactions. This positions Marss as a differentiated buyer in markets where certainty of close and deal complexity are what separate real offers from noise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-yellow-400/10 rounded-lg overflow-hidden mb-10"
          >
            {stats.map((s, i) => (
              <div key={i} className="bg-zinc-950/60 px-4 py-4 text-center">
                <p className="text-yellow-400 text-lg font-bold tracking-tight">{s.value}</p>
                <p className="text-zinc-500 text-[11px] uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/ahmadqawasmeh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold px-6 py-3 rounded transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-400 text-sm font-medium transition-colors duration-200"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* CREDENTIAL PILLARS */}
      <div className="relative border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              What Sets Marss Apart
            </p>
            <h3 className="text-white text-2xl lg:text-3xl font-bold">
              Four Reasons Sellers &amp; Investors Choose Ahmad
            </h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 hover:border-yellow-400/40 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/10 mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h4 className="text-white text-sm font-bold mb-2 leading-snug">{c.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{c.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ASSET CLASS COVERAGE */}
      <div
        className="relative border-t border-zinc-800/60"
        style={{ background: "linear-gradient(90deg, #0a0800 0%, #080808 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">
            <div className="lg:w-72 shrink-0">
              <p className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Buy Box</p>
              <h3 className="text-white text-xl font-bold leading-snug mb-4">Asset Classes Under Active Coverage</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Marss evaluates acquisitions across a broad multi-asset mandate — prioritizing cash flow, asset security, and value-add potential in Texas and Sunbelt markets.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {assetClasses.map((ac, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 bg-zinc-900/50 border border-zinc-800/60 rounded px-3 py-2.5 hover:border-yellow-400/30 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400/70 shrink-0" />
                  <span className="text-zinc-300 text-xs font-medium leading-tight">{ac}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA BAND */}
      <div className="relative border-t border-zinc-800/60 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-white text-lg font-bold mb-1">Considering a Sale or Partnership?</p>
              <p className="text-zinc-500 text-sm">
                Ahmad reviews every qualified opportunity personally. Initial conversations are confidential and commitment-free.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2.5 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-sm px-8 py-3 rounded transition-all duration-200"
            >
              Raise Your Hand
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
