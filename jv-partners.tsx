"use client";

import { motion } from "framer-motion";
import { Target, BarChart3, Handshake, Eye, CheckCircle, ArrowRight, Users, Shield, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/button";

const investorBenefits = [
  { icon: Target, title: "Deal-by-Deal Co-Investment", description: "You choose the specific acquisition you want exposure to — a single named asset, not a blind pool. Full underwriting package provided before you commit." },
  { icon: BarChart3, title: "Institutional Underwriting Standards", description: "Every opportunity is underwritten to Investment Committee standards — T-12 actuals, rent rolls, and bank statements verified, stress-tested at -10% and -20% revenue." },
  { icon: Handshake, title: "Aligned Interests", description: "Marss co-invests and operates the asset alongside you. Returns structured through a secured equity position with transparent, milestone-based reporting." },
  { icon: Eye, title: "Full Transparency", description: "Review the underwriting model, business plan, and full risk map before you commit a dollar. No black boxes, no pressure, no surprises after close." },
];

const advisoryBenefits = [
  { icon: FileText, title: "Deal Underwriting Collaboration", description: "Participate as an active underwriting advisor on specific acquisitions — contribute financial analysis, market intelligence, or asset-class expertise in exchange for preferred economic participation." },
  { icon: TrendingUp, title: "Early Deal Flow Access", description: "Advisory partners receive first look at vetted, pre-LOI opportunities before deals reach broader distribution. Access to off-market and proprietary deal flow across the Sunbelt." },
  { icon: Shield, title: "Governance & Protection Rights", description: "Advisory board participation comes with documented governance protections — step-in rights, negative control provisions, and monthly reporting covenants built into every structure." },
  { icon: Users, title: "Build Long-Term Partnership", description: "This isn't a one-deal relationship. Advisory partners grow with our acquisition pipeline — preferential access, preferred economics, and a direct seat at the underwriting table on future deals." },
];

const steps = [
  { n: "01", title: "Express Interest", body: "Tell us your target asset classes, check size, hold horizon, and whether you want co-investment, advisory, or both. We add you to the partner list for matching opportunities." },
  { n: "02", title: "Review the Deal Package", body: "When a specific acquisition matches your profile, you receive the full underwriting model, business plan, and risk assessment — no pressure." },
  { n: "03", title: "Co-Invest or Advise", body: "Partner with Marss on that specific asset through a secured equity structure with defined governance, reporting rights, and milestone-linked returns." },
];

const partnerTypes = [
  "Accredited investors deploying $100K-$2M+ per deal",
  "Real estate professionals seeking passive co-investment exposure",
  "Experienced operators with asset-class expertise (gas stations, car washes, auto)",
  "Family offices evaluating $1M-$10M Sunbelt acquisitions",
  "Private equity sponsors screening deal flow with advisory capacity",
  "Business owners seeking structured real estate co-investment",
];

export function JvPartners() {
  return (
    <section id="jv-partners" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Invest &amp; Partner</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Co-Invest. Advise. Build <span className="gold-gradient">Deal Flow Together.</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">Marss operates two partnership tracks: deal-level co-investment for capital partners, and an advisory board role for experienced operators and underwriters who want skin in the game.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-yellow-900/40 bg-gradient-to-br from-[#0d0a00] to-[#0a0a0a] p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-yellow-500/15 border border-yellow-500/30"><Target className="h-5 w-5 text-yellow-400" /></div>
              <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Track 1</span>
            </div>
            <h3 className="text-white font-bold text-2xl mb-2">Capital Co-Investment</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Invest alongside Marss on specific, named acquisitions. You pick the deal — no blind pools. Minimum $100K per deal. Secured equity structure with full underwriting visibility before commitment.</p>
            <div className="space-y-4">
              {investorBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-yellow-500/10 shrink-0 mt-0.5"><b.icon className="h-3.5 w-3.5 text-yellow-400" /></div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-0.5">{b.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-[#2a2a2a] bg-[#0f0f0f] p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20"><BarChart3 className="h-5 w-5 text-blue-400" /></div>
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Track 2</span>
            </div>
            <h3 className="text-white font-bold text-2xl mb-2">Advisory Board Role</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">For experienced operators, underwriters, and industry specialists — contribute your expertise to Marss deal analysis and acquisitions in exchange for preferred economic participation and early deal flow access.</p>
            <div className="space-y-4">
              {advisoryBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-blue-500/10 shrink-0 mt-0.5"><b.icon className="h-3.5 w-3.5 text-blue-400" /></div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-0.5">{b.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-[#1f1f1f] bg-[#111] p-8 mb-14">
          <h3 className="text-white font-bold text-xl mb-6">Who We Partner With</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {partnerTypes.map((type, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <h3 className="text-white font-bold text-xl mb-8 text-center">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-6">
                  <div className="text-yellow-500/30 font-black text-5xl leading-none mb-4">{step.n}</div>
                  <h4 className="text-white font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10 items-center">
                    <ArrowRight className="h-5 w-5 text-yellow-700/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-[#0c0900] to-[#0a0a0a] p-10">
          <h3 className="text-white font-bold text-2xl mb-3">Ready to Put Capital to Work?</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-6">Whether you want to co-invest on a specific deal, join our advisory board, or get on the deal flow list — reach out and tell us what you&apos;re looking for.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact"><Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8">Express Interest <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="#advisory"><Button variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 px-8">View Advisory Services</Button></a>
          </div>
        </motion.div>
        <div className="section-divider" />
      </div>
    </section>
  );
}
