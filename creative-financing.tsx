"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Shield,
  TrendingUp,
  Layers,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  Building2,
  Banknote,
  Home,
  Wifi,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const structures = [
  {
    icon: Banknote,
    title: "Owner / Seller Financing",
    label: "Seller Acts as Lender",
    description:
      "Marss acquires the asset using seller-extended financing — eliminating bank dependency and creating a recurring monthly income stream for the seller. Negotiated rate, term, and payment schedule. No institutional timeline. The seller's cash flow starts immediately from day one of the deal, funded directly by the asset's own operating income.",
    benefits: [
      "Monthly income without management obligations",
      "Negotiated rate, term, and payment schedule",
      "No bank approval required — faster closing",
      "Expanded buyer pool vs. traditional listing",
      "Ideal for free-and-clear assets with strong cash flow",
    ],
    deployedFor: ["Short-Term Rentals (STR)", "Pad Split / Co-Living", "Free-and-Clear SFRs", "Small commercial RE"],
    accent: "from-yellow-400/20 to-yellow-400/5",
  },
  {
    icon: Shield,
    title: "Equity Carry Structure",
    label: "Marss Flagship — Secured Preferred Equity",
    description:
      "Marss brings institutional capital to the closing table — no appraisal contingency, no bank approval delay. The seller converts their equity into a secured preferred equity position within the deal entity: earning passive income, deferring capital gains through installment sale treatment, and retaining governance protections and step-in rights. The highest-value structure for commercial and business acquisitions.",
    benefits: [
      "Full or near-full asking price at close",
      "Secured preferred equity — not a subordinated note",
      "Passive income with documented governance protections",
      "Capital gains deferral via installment sale treatment",
      "Step-in rights activate if performance milestones aren't met",
    ],
    deployedFor: ["Commercial RE & mixed-use", "Operating businesses", "Multi-family (5+)", "Hotels & hospitality"],
    accent: "from-yellow-400/30 to-yellow-400/10",
    featured: true,
  },
  {
    icon: Layers,
    title: "Hybrid Capital Stack",
    label: "Custom Multi-Layer Structure",
    description:
      "Not every deal fits a single template. Hybrid structures combine multiple financing layers — institutional DSCR debt, seller carry, preferred equity tranches, and performance-linked earnouts — engineered to the seller's specific income requirements, tax situation, and risk tolerance. Particularly effective for STR portfolios and co-living properties where verified room-level cash flows support multiple debt layers.",
    benefits: [
      "Custom-engineered to seller's income goals",
      "DSCR loan qualifies on verified rental cash flow",
      "Multiple capital layers for full deal coverage",
      "Performance milestones tied to real NOI",
      "Ideal for high-cash-flow alternative asset classes",
    ],
    deployedFor: ["STR portfolios", "Pad split acquisitions", "Large multi-asset deals", "Complex seller requirements"],
    accent: "from-yellow-400/20 to-yellow-400/5",
  },
];

const assetMatrix = [
  { asset: "Commercial RE & Businesses", ownerFin: false, equityCarry: true, hybrid: true, flagship: true },
  { asset: "Multi-Family (5+ units)", ownerFin: false, equityCarry: true, hybrid: true, flagship: true },
  { asset: "Short-Term Rentals (STR)", ownerFin: true, equityCarry: true, hybrid: true, flagship: false },
  { asset: "Pad Split / Co-Living", ownerFin: true, equityCarry: true, hybrid: true, flagship: false },
  { asset: "Hotels & Hospitality", ownerFin: false, equityCarry: true, hybrid: true, flagship: true },
  { asset: "Mixed-Use Properties", ownerFin: false, equityCarry: true, hybrid: true, flagship: true },
];

const audienceBenefits = [
  {
    icon: Building2,
    audience: "Sellers",
    points: [
      "Immediate liquidity at the closing table — Day 1",
      "No forced discount or adversarial negotiation",
      "Convert equity to passive income stream",
      "Capital gains tax deferral through structured payments",
      "Governance protections and step-in rights retained",
      "More qualified buyers — no financing contingency risk",
    ],
  },
  {
    icon: Users,
    audience: "Brokers & Agents",
    points: [
      "Commission fully protected — paid at close",
      "Higher certainty of close vs. bank-dependent deals",
      "No appraisal risk collapsing the transaction",
      "Faster timeline from offer to closing table",
      "Institutional documentation — no surprises",
      "Deal structure that brokers can confidently present",
    ],
  },
  {
    icon: TrendingUp,
    audience: "Investors & JV Partners",
    points: [
      "Preferred equity access with institutional governance",
      "Scalable deal flow: commercial, STR, and co-living",
      "Performance-linked return structure",
      "Co-investment opportunities in stabilized assets",
      "Tax-efficient structure via entity design",
      "Quarterly reporting and transparent operations",
    ],
  },
];

export function CreativeFinancing() {
  return (
    <section className="py-24 px-4 bg-[#080808] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
              Active Acquisition Strategies
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            The Structures We
            <span className="block text-yellow-400">Deploy on Every Deal</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            These are not educational concepts — they are the three acquisition
            structures Marss actively deploys across commercial real estate,
            operating businesses, short-term rentals, and pad split properties.
            Each is selected based on the asset, the seller’s goals, and the
            deal’s verified cash flow profile.
          </motion.p>
        </motion.div>

        {/* Structure Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {structures.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className={`relative rounded-2xl border ${
                  s.featured
                    ? "border-yellow-400/50 bg-gradient-to-b from-yellow-400/10 to-[#111111]"
                    : "border-white/8 bg-[#111111]"
                } p-8 flex flex-col`}
              >
                {s.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow-400 text-black text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                      Flagship Structure
                    </span>
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center mb-5 border border-yellow-400/20`}
                >
                  <Icon className="w-5 h-5 text-yellow-400" />
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-yellow-400/70">
                    {s.label}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{s.title}</h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {s.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">Deployed For</div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.deployedFor.map((tag) => (
                      <span key={tag} className="text-[10px] bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Strategy Fit Matrix */}
        <motion.div
          className="rounded-2xl border border-yellow-400/20 bg-[#111111] p-8 md:p-10 mb-20 overflow-x-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-1">Strategy Fit by Asset Class</h3>
            <p className="text-gray-500 text-sm">Which structure Marss deploys for each acquisition target. ★ = Primary fit.</p>
          </div>
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-400 font-medium py-3 pr-4">Asset Class</th>
                <th className="text-center text-yellow-400 font-semibold py-3 px-3">Owner Financing</th>
                <th className="text-center text-yellow-400 font-semibold py-3 px-3">Equity Carry</th>
                <th className="text-center text-yellow-400 font-semibold py-3 px-3">Hybrid Stack</th>
              </tr>
            </thead>
            <tbody>
              {assetMatrix.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-4 text-white font-medium">{row.asset}</td>
                  <td className="py-3 px-3 text-center">
                    {row.ownerFin ? <span className="text-yellow-400">★ Primary</span> : <span className="text-gray-600">—</span>}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {row.equityCarry ? (
                      row.flagship
                        ? <span className="text-yellow-400">★ Flagship</span>
                        : <span className="text-green-400">✓ Available</span>
                    ) : <span className="text-gray-600">—</span>}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {row.hybrid ? <span className="text-green-400">✓ Available</span> : <span className="text-gray-600">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Why Creative Financing Banner */}
        <motion.div
          className="rounded-2xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/5 to-transparent p-8 md:p-12 mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Why Sellers Choose
                <span className="text-yellow-400"> Creative Structures</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                A traditional sale offers one outcome: cash at close, a capital
                gains tax hit, and zero ongoing return on an asset you spent
                years building. Creative financing gives sellers a third path —
                one that delivers immediate liquidity{" "}
                <span className="text-white font-medium">and</span> a continuing
                income stream, with the same legal protections a secured lender
                would demand.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Sellers who work with Marss don’t have to choose between price
                and certainty. Our structures are engineered to deliver both —
                full or near-full asking price at the closing table, passive
                income ongoing, and governance protections that activate the
                moment performance milestones aren’t met.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: DollarSign, label: "Immediate Liquidity", sub: "Cash at closing — Day 1" },
                { icon: Clock, label: "Passive Income", sub: "Ongoing without management" },
                { icon: Shield, label: "Protected Equity", sub: "Governance + step-in rights" },
                { icon: TrendingUp, label: "Tax Efficiency", sub: "Installment sale treatment" },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-[#0a0a0a] rounded-xl p-4 border border-white/8"
                  >
                    <ItemIcon className="w-5 h-5 text-yellow-400 mb-2" />
                    <div className="text-white text-sm font-semibold">{item.label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Audience Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Built for Every{" "}
              <span className="text-yellow-400">Stakeholder</span>
            </h3>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Marss structures are designed so sellers, brokers, and investment
              partners all win at the same closing table.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audienceBenefits.map((group) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  key={group.audience}
                  variants={fadeUp}
                  className="bg-[#111111] rounded-2xl border border-white/8 p-7"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                      <GroupIcon className="w-4 h-4 text-yellow-400" />
                    </div>
                    <h4 className="text-white font-bold text-lg">{group.audience}</h4>
                  </div>
                  <ul className="space-y-3">
                    {group.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <ArrowRight className="w-3.5 h-3.5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-400 text-sm leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-400 text-sm mb-4">
            Ready to explore which structure fits your asset?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
          >
            Start the Conversation <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-gray-600 text-xs mt-4">
            *Installment sale treatment subject to IRS regulations. Not an offer to sell securities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
