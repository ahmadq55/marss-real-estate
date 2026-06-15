"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Banknote,
  FileText,
  Building2,
  Users,
  Check,
  ArrowRight,
  Download,
} from "lucide-react";
import { Button } from "@/button";

const paths = [
  {
    badge: "★ Preferred Structure",
    badgeStyle: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40",
    icon: TrendingUp,
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
    iconColor: "text-yellow-400",
    title: "Equity Carry",
    tagline: "Full price. No bank. Your position is protected.",
    description:
      "We acquire at full or near-full asking price at closing. A portion of the purchase price is structured as a preferred equity position for you within the acquiring entity — giving you a protected ownership interest, priority distributions, governance rights, and step-in rights if we ever fail to perform.",
    best: [
      "Value-add or repositioning assets",
      "Sellers who want full price without a price cut",
      "Owners who want income during the hold period",
      "Anyone who wants protection stronger than a note",
    ],
    border: "border-yellow-900/50 hover:border-yellow-500/40",
    highlight: true,
    pdfUrl: "/equity-carry-overview.pdf",
  },
  {
    badge: "All-Cash Close",
    badgeStyle: "bg-gray-700/40 text-gray-300 border border-gray-600/30",
    icon: Banknote,
    iconBg: "bg-gray-700/30 border-gray-600/30",
    iconColor: "text-gray-300",
    title: "All-Cash / Traditional",
    tagline: "Clean, fast, no conditions.",
    description:
      "When the numbers support a conventional close — senior debt, clean title, clear income — we move quickly with no financing contingency, no appraisal risk, and an LOI within 48 hours of receiving the package.",
    best: [
      "Stabilized assets with strong T-12",
      "Sellers who need certainty of close",
      "Time-sensitive situations",
      "Estates, 1031 exchanges, partnership unwinds",
    ],
    border: "border-[#1f1f1f] hover:border-gray-600/40",
    highlight: false,
  },
  {
    badge: "Owner Finance",
    badgeStyle: "bg-blue-900/20 text-blue-300 border border-blue-800/30",
    icon: FileText,
    iconBg: "bg-blue-900/20 border-blue-800/30",
    iconColor: "text-blue-300",
    title: "Owner / Seller Financing",
    tagline: "You carry the note. We service it.",
    description:
      "You act as the lender, carrying a senior or mezzanine note secured against the asset. Structured to hit your income target while providing a clear payoff path tied to stabilization milestones or a defined refinance date.",
    best: [
      "Sellers seeking ongoing income",
      "Tax-deferred installment sale strategy",
      "Deals where bank financing is limited",
      "Sellers comfortable holding paper short-term",
    ],
    border: "border-[#1f1f1f] hover:border-blue-800/40",
    highlight: false,
  },
  {
    badge: "Sale-Leaseback",
    badgeStyle: "bg-purple-900/20 text-purple-300 border border-purple-800/30",
    icon: Building2,
    iconBg: "bg-purple-900/20 border-purple-800/30",
    iconColor: "text-purple-300",
    title: "Sale-Leaseback",
    tagline: "Sell the real estate. Stay in the building.",
    description:
      "You sell the real estate to us and immediately lease it back under a long-term agreement. You unlock capital from the asset while retaining operational use of the property — no relocation, no disruption, clean balance sheet.",
    best: [
      "Business owners who own their real estate",
      "Operators needing capital for growth",
      "Anyone who wants to separate RE from operations",
      "Tax efficiency on embedded gains",
    ],
    border: "border-[#1f1f1f] hover:border-purple-800/40",
    highlight: false,
  },
  {
    badge: "Joint Venture",
    badgeStyle: "bg-green-900/20 text-green-300 border border-green-800/30",
    icon: Users,
    iconBg: "bg-green-900/20 border-green-800/30",
    iconColor: "text-green-300",
    title: "Joint Venture / Co-Ownership",
    tagline: "You keep skin in the game.",
    description:
      "You roll equity into the new acquiring entity alongside us. You participate in the upside of improvements and appreciation while reducing your day-to-day operational burden. Best for sellers who believe in the asset’s potential and want to stay involved on their own terms.",
    best: [
      "Sellers who want ongoing upside participation",
      "Owners ready to step back from operations",
      "Situations with strong value-add potential",
      "Legacy assets with emotional or strategic value",
    ],
    border: "border-[#1f1f1f] hover:border-green-800/40",
    highlight: false,
  },
];

export function SellerPaths() {
  return (
    <section id="sellers" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            For Property &amp; Business Sellers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Multiple Ways to Exit{" "}
            <span className="gold-gradient">on Your Terms</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Every seller situation is different. We offer five exit structures designed to match your
            priorities — whether that&apos;s maximum price, monthly income, tax efficiency, or staying
            invested in the asset&apos;s upside.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {paths.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative bg-[#0f0f0f] border rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                path.highlight ? "md:col-span-2 xl:col-span-1" : ""
              } ${path.border}`}
            >
              {path.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
              )}

              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-2.5 rounded-xl border ${
                    path.iconBg
                  } shrink-0`}
                >
                  <path.icon className={`h-5 w-5 ${path.iconColor}`} />
                </div>
                <span
                  className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                    path.badgeStyle
                  }`}
                >
                  {path.badge}
                </span>
              </div>

              <h3 className="text-white text-xl font-bold mb-1">{path.title}</h3>
              <p className="text-yellow-400/80 text-sm font-medium mb-3">{path.tagline}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{path.description}</p>

              <div className="mb-4">
                <div className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">
                  Best For
                </div>
                <ul className="space-y-1.5">
                  {path.best.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-yellow-600/70 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {path.pdfUrl && (
                <a
                  href={path.pdfUrl}
                  download="Equity-Carry-Acquisition-Overview.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button
                    variant="outline"
                    className="w-full border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 text-xs font-semibold tracking-wide"
                  >
                    <Download className="h-3.5 w-3.5 mr-2" />
                    Download Overview PDF
                  </Button>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Not sure which structure fits?</h3>
            <p className="text-gray-400 text-sm">
              Most sellers find the right path in a single 30-minute conversation. No pressure, no
              commitment — just a clear answer.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="#contact">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 whitespace-nowrap">
                Discuss Your Deal <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#strategy">
              <Button
                variant="outline"
                className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 whitespace-nowrap"
              >
                View Our Approach
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
