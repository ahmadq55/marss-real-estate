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
  "T-12 Income Statement",
  "3-Year P&L and Tax Returns",
  "12-Month Bank & Merchant Statements",
  "EBITDA Bridge (add-back documentation)",
  "Rent Roll or Lease Agreements for the included real estate",
  "Equipment List & Condition Assessment",
  "Franchise Agreement (if applicable)",
  "Environmental Phase I Report",
];

const metrics = [
  { label: "Target EBITDA", value: "~$500K+", note: "Exceptions considered based on combined economics" },
  { label: "Debt Coverage", value: "Per deal", note: "Senior debt, seller payments and other financing obligations" },
  { label: "Owner Dependency", value: "Assessed", note: "Management continuity and operational risk" },
  { label: "Revenue Concentration", value: "Assessed", note: "Customer mix and earnings durability" },
  { label: "Business Valuation", value: "Market-based", note: "Relevant evidence, earnings and risk" },
  { label: "Real Estate Value", value: "Separate", note: "Avoid double-counting property income" },
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
    body: "Initial screening may begin with a financial summary. During underwriting and diligence, we review source financials, evaluate add-backs and reconcile reported performance against supporting records as available. Seller claims, verified results and projections are identified separately.",
    icon: FileText,
  },
  {
    n: "02",
    title: "Valuation Range",
    body: "We assess business earnings and real estate value separately, then evaluate the combined acquisition economics. Valuation considers relevant market evidence, operating risk, capital requirements and transaction structure. We avoid double-counting income attributable to the real estate.",
    icon: BarChart3,
  },
  {
    n: "03",
    title: "Capital Stack Design",
    body: "We evaluate existing debt, required payoff, transfer restrictions and available capital before proposing terms. Coverage analysis considers senior debt, seller payments and other recurring financing obligations, with downside scenarios appropriate to the asset.",
    icon: Target,
  },
  {
    n: "04",
    title: "Preliminary LOI and Diligence",
    body: "A qualified opportunity may receive a conditional preliminary LOI once decision-critical facts support price and structure. Detailed financial, title, operational and property verification continues through diligence.",
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
            Business Acquisitions With{" "}
            <span className="gold-gradient">Owned Real Estate</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            We evaluate operating businesses where the seller-owned real estate is included in the acquisition. Our initial review focuses on actual earnings, property value, existing debt, capital needs and the seller’s objectives.
          </p>
        </motion.div>

        {/* Business Types Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h3 className="text-white font-bold text-lg mb-6 text-center">Business Types We Acquire</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-4 group transition-all duration-300">
                <div className="text-white text-sm font-semibold mb-1 group-hover:text-yellow-300 transition-colors">{b.name}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{b.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">Seller-owned underlying real estate must be included in the sale. We generally target businesses with approximately $500,000 or more in EBITDA, with exceptions considered based on the combined business and property economics.</p>
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
              <h3 className="text-white font-bold text-lg">Underwriting Considerations</h3>
            </div>
            <div className="space-y-3">
              {metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-[#1a1a1a] last:border-0">
                  <div>
                    <div className="text-gray-300 text-sm font-medium">{m.label}</div>
                    <div className="text-gray-400 text-xs">{m.note}</div>
                  </div>
                  <div className="text-yellow-400 font-bold text-lg tabular-nums">{m.value}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4 italic">We assess actual earnings, debt coverage, owner dependence, customer concentration, property value, capital needs and exit feasibility. Targets and assumptions vary by asset and transaction; no single valuation multiple or cap rate applies to every opportunity.</p>
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
            <p className="text-gray-400 text-sm max-w-xl">Share the location, price guidance, actual income or earnings, occupancy where relevant, existing debt details if known and major capital needs. A full diligence package is not required for an initial review. Any preliminary proposal remains subject to diligence and definitive agreements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="#contact"><Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 whitespace-nowrap">Submit a Business Deal <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="tel:9726946407"><Button variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 px-8 whitespace-nowrap">Call 972.694.6407</Button></a>
          </div>
        </motion.div>

        <div className="section-divider" />
      </div>
    </section>
  );
}
