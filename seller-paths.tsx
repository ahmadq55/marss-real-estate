"use client";

import { motion } from "framer-motion";
import { Star, Banknote, Building, RefreshCw, Handshake, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/button";

const paths = [
  {
    icon: Star,
    badge: "Preferred Method",
    badgeClass: "bg-yellow-500/20 border-yellow-500/40 text-yellow-400",
    title: "Equity Carry",
    tagline: "Full Value. Seller Stays In.",
    description: "You receive 20-50% cash at close. Your remaining equity converts to a secured preferred interest in the acquisition entity - earning passive income, deferring capital gains, and retaining governance step-in rights. No discount required.",
    bestFor: ["Commercial RE & businesses", "Value-add stabilization plays", "Sellers wanting price + income"],
    featured: true,
  },
  {
    icon: Banknote,
    badge: "Conventional",
    badgeClass: "bg-gray-700/50 border-gray-600/50 text-gray-300",
    title: "All-Cash / Traditional",
    tagline: "Clean Close. Immediate Liquidity.",
    description: "Conventional acquisition funded through institutional or direct capital. Clean title transfer, standard closing process, no financing contingency. Best fit for stabilized, income-producing assets with bankable financials.",
    bestFor: ["Stabilized income assets", "Clean title / no encumbrances", "Sellers needing speed"],
    featured: false,
  },
  {
    icon: RefreshCw,
    badge: "Seller Carry",
    badgeClass: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    title: "Owner / Seller Financing",
    tagline: "Monthly Income Stream.",
    description: "You act as the lender - holding a secured promissory note against the property or business assets. Negotiated rate, term, and payment schedule. Converts a lump-sum exit into a recurring passive income stream.",
    bestFor: ["Free-and-clear assets", "Sellers prioritizing monthly income", "Non-bankable or transitional assets"],
    featured: false,
  },
  {
    icon: Building,
    badge: "Occupier Finance",
    badgeClass: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    title: "Sale-Leaseback",
    tagline: "Unlock Capital. Stay Operating.",
    description: "Sell your real estate to Marss while simultaneously leasing it back under a long-term agreement. Unlock the equity trapped in owned real estate without disrupting a single day of operations.",
    bestFor: ["Owner-operators in trade businesses", "HVAC, auto, service businesses", "Operators wanting capital flexibility"],
    featured: false,
  },
  {
    icon: Handshake,
    badge: "Co-Ownership",
    badgeClass: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    title: "Joint Venture / Co-Ownership",
    tagline: "Partner Instead of Selling.",
    description: "Don't want a full exit? Stay in as a co-owner. Marss brings capital, acquisition expertise, and operational infrastructure while you retain meaningful equity and governance rights in the asset going forward.",
    bestFor: ["Sellers not ready for full exit", "Operators wanting a capital partner", "Family assets with ongoing involvement"],
    featured: false,
  },
];

export function SellerPaths() {
  return (
    <section id="sellers" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">For Sellers</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Multiple Ways to <span className="gold-gradient">Exit on Your Terms</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">Every seller&apos;s situation is different. We don&apos;t force one structure on every deal &mdash; we bring multiple paths to the table and select the one that delivers the best outcome for you.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">
          {paths.map((path, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-300 group hover:border-yellow-900/60 ${path.featured ? "bg-gradient-to-br from-[#110d00] via-[#0e0b00] to-[#0a0a0a] border-yellow-600/40" : "bg-[#111] border-[#1f1f1f]"}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 ${path.badgeClass}`}>{path.badge}</span>
                <div className={`p-2 rounded-lg border transition-colors ${path.featured ? "bg-yellow-500/15 border-yellow-500/30" : "bg-[#1a1a1a] border-[#2a2a2a] group-hover:bg-yellow-500/10 group-hover:border-yellow-500/20"}`}>
                  <path.icon className={`h-4 w-4 ${path.featured ? "text-yellow-400" : "text-gray-400 group-hover:text-yellow-400 transition-colors"}`} />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{path.title}</h3>
              <div className="text-yellow-500/80 text-xs font-medium tracking-wide uppercase mb-3">{path.tagline}</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{path.description}</p>
              <div className="border-t border-[#1f1f1f] pt-4">
                <div className="text-xs text-gray-600 uppercase tracking-widest mb-2 font-medium">Best For</div>
                <ul className="space-y-1.5">
                  {path.bestFor.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-yellow-600/70 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-[#0c0900] to-[#0a0a0a] p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Not sure which structure fits your situation?</h3>
            <p className="text-gray-400 text-sm">Tell us about your property or business and we&apos;ll identify the right approach together &mdash; no commitment required.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="#contact"><Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 whitespace-nowrap">Discuss Your Deal <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="#strategy"><Button variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 px-6 whitespace-nowrap">View Our Approach</Button></a>
          </div>
        </motion.div>
        <div className="section-divider" />
      </div>
    </section>
  );
}
