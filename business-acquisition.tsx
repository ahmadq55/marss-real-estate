"use client";

import { motion } from "framer-motion";
import { CheckCircle, BarChart3, FileText, Target, Shield, TrendingUp, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/button";

const businessTypes = [
  { name: "Gas Stations / C-Stores", detail: "Fuel margin, inside sales, volume history" },
  { name: "Car Washes", detail: "Cars/day, avg ticket, subscription mix" },
  { name: "Auto Dealerships", detail: "Inventory turn, GP margin, service revenue" },
  { name: "HVAC / Plumbing / Trades", detail: "Rev/tech, contract ratio, call conversion" },
  { name: "Motels / Extended Stay", detail: "RevPAR, ADR, occupancy, franchise terms" },
  { name: "Laundromats", detail: "Revenue/washer, card vs. coin mix, CapEx" },
  { name: "Light Manufacturing", detail: "EBITDA margin, capacity utilization, contracts" },
  { name: "Self-Storage", detail: "Occupancy, rent/SF, WALT, expansion potential" },
];

const financialDocs = [
  "T-12 Income Statement (verified line-by-line)",
  "3-Year P&L and Tax Returns",
  "12-Month Bank & Merchant Statements",
  "EBITDA Bridge (add-back documentation)",
  "Rent Roll or Lease Agreements (if RE included)",
  "Equipment List & Condition Assessment",
  "Franchise Agreement (if applicable)",
  "Environmental Phase I Report",
];

const metrics = [
  { label: "Min. EBITDA", value: "$500K", note: "Trailing 12, verified" },
  { label: "DSCR Floor", value: "1.40x", note: "Senior debt only" },
  { label: "Owner Dependency", value: "< 25%", note: "Revenue portable" },
  { label: "Revenue Concentration", value: "< 30%", note: "No single customer" },
  { label: "EBITDA Multiple", value: "3x–6x", note: "Sourced, not invented" },
  { label: "RE Cap Rate", value: "≥ 6.0%", note: "Valued independently" },
];

const redFlags = [
  "Add-backs exceeding 25% of stated EBITDA",
  "Revenue concentration > 30% in a single customer",
  "Owner-operator critical to revenue generation",
  "Undisclosed environmental liability or litigation",
  "Lease non-assignable or at above-market terms",
  "Bank deposits materially below reported revenue",
];

const underwritingSteps = [
  {
    n: "01",
    title: "Financial Extraction",
    body: "We extract Net Income, EBITDA, and SDE from source documents — never from the seller's summary. Every add-back is sourced and categorized: defensible vs. speculative. We reconcile against bank deposits.",
    icon: FileText,
  },
  {
    n: "02",
    title: "Valuation Range",
    body: "We apply sourced EBITDA multiples from BizBuySell, IBBA, and Pepperdine data specific to your asset class. Real estate is valued separately on cap rate and never blended with business income.",
    icon: BarChart3,
  },
  {
    n: "03",
    title: "Capital Stack Design",
    body: "We structure a capital stack that closes the deal at full price. Equity Carry allows the seller to stay in as a secured preferred partner. DSCR is stress-tested at −10% and −20% revenue without seller payments counting toward coverage.",
    icon: Target,
  },
  {
    n: "04",
    title: "Risk Map & Go / No-Go",
    body: "Every deal gets a formal risk map: operator dependency, license transferability, revenue concentration, environmental, CapEx, and refinance/exit feasibility. IC-grade memo issued before LOI.",
    icon: Shield,
  },
];

export function BusinessAcquisition() {
  return (
    <section id="business-acquisitions" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Business Acquisitions</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            We Underwrite Businesses at{" "}
            <span className="gold-gradient">Institutional Standards.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            When you bring a business deal to Marss, you&apos;re not dealing with a retail buyer guessing at multiples.
            You&apos;re dealing with a team that extracts EBITDA from source documents, stress-tests the capital stack,
            and builds an IC-grade acquisition memo before issuing a single LOI.
          </p>
        </motion.div>

        {/* Business Types Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h3 className="text-white font-bold text-lg mb-6 text-center">Business Types We Acquire</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-4 group transition-all duration-300">
                <div className="text-white text-sm font-semibold mb-1 group-hover:text-yellow-300 transition-colors">{b.name}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{b.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">All targets require a real estate component (owned real estate or eligible for sale-leaseback). Minimum $500K EBITDA.</p>
        </motion.div>

        {/* Underwriting Process */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h3 className="text-white font-bold text-lg mb-8 text-center">Our Underwriting Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {underwritingSteps.map((step, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 shrink-0">
                    <step.icon className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span className="text-yellow-500/50 font-black text-2xl leading-none">{step.n}</span>
                </div>
                <h4 className="text-white font-bold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Metrics + Docs side by side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Key Metrics */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20"><TrendingUp className="h-5 w-5 text-yellow-400" /></div>
              <h3 className="text-white font-bold text-lg">Our Underwriting Thresholds</h3>
            </div>
            <div className="space-y-3">
              {metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-[#1a1a1a] last:border-0">
                  <div>
                    <div className="text-gray-300 text-sm font-medium">{m.label}</div>
                    <div className="text-gray-600 text-xs">{m.note}</div>
                  </div>
                  <div className="text-yellow-400 font-bold text-lg tabular-nums">{m.value}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-4 italic">These are our hard gates. Deals below threshold are passed or restructured — not rationalized.</p>
          </motion.div>

          {/* Docs + Red Flags */}
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20"><FileText className="h-4 w-4 text-yellow-400" /></div>
                <h3 className="text-white font-bold">Documents We Analyze</h3>
              </div>
              <ul className="space-y-2">
                {financialDocs.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-yellow-600/70 mt-0.5 shrink-0" />
                    <span className="text-gray-400 text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0f0000] border border-red-900/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20"><AlertTriangle className="h-4 w-4 text-red-400" /></div>
                <h3 className="text-white font-bold">Automatic Red Flags</h3>
              </div>
              <ul className="space-y-2">
                {redFlags.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 mt-1.5 shrink-0" />
                    <span className="text-gray-400 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-[#0c0900] to-[#0a0a0a] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Have a Business + Real Estate Deal?</h3>
            <p className="text-gray-400 text-sm max-w-xl">Bring us the financials. We&apos;ll screen it in under 48 hours and give you a clear Go / No-Go with sourced reasoning — not a vague counter.
              <span className="text-yellow-400 font-medium"> No fishing. No retrades. Just a straight answer.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="#contact"><Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 whitespace-nowrap">Submit a Business Deal <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="tel:9727796787"><Button variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 px-8 whitespace-nowrap">Call 972.779.6787</Button></a>
          </div>
        </motion.div>

        <div className="section-divider" />
      </div>
    </section>
  );
}
