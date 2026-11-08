"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AdviceDisclaimer } from "@/disclaimer";

const faqs = [
  {
    q: "How do you arrive at a price?",
    a: "We evaluate every transaction on the asset's actual operating performance, real estate value, existing debt and capital requirements. We don't use a one-size-fits-all pricing formula, and no specific price or outcome is promised until it is documented in a signed agreement.",
  },
  {
    q: "What deal structures do you use?",
    a: "Cash acquisitions, traditional or third-party financing, first-position seller financing, existing loan assumptions, Equity Carry and other hybrid structures. The right one depends on the seller's objectives, existing debt, the property's economics and available capital, and terms are negotiated per transaction.",
  },
  {
    q: "What happens after I submit an inquiry?",
    a: "We acknowledge the inquiry, screen it against our acquisition criteria and may ask for a few basic details. Opportunities that fit move to deeper review. Timing varies, and no offer or outcome is promised before adequate review.",
  },
  {
    q: "Do I need to prepare financials first?",
    a: "No. Owners can start with a short conversation: your contact details, the property, and what you have in mind. More detailed financial information is requested only after initial qualification.",
  },
  {
    q: "Are there tax implications?",
    a: "Tax treatment depends on the structure and your individual situation. This is general information, not tax advice. Please consult your CPA about what applies to you.",
  },
  {
    q: "What types of assets do you acquire?",
    a: "Our principal categories are self-storage, mobile home and RV parks, multifamily and value-add hospitality (fee-simple hotels and motels). We also consider commercial and mixed-use real estate, businesses with seller-owned real estate and other income-producing assets. We are Texas-focused, with select opportunities nationwide.",
  },
  {
    q: "I'm a broker or agent. How does compensation work?",
    a: "We welcome deals from brokers and agents who represent a transaction. Any broker compensation is discussed directly and documented in writing; nothing is promised before it is agreed.",
  },
  {
    q: "Is any of this an investment offering?",
    a: "No. This website is general information about how we acquire assets. It is not an offer to sell, or a solicitation to buy, any security or investment. Any actual transaction is governed solely by definitive written agreements reviewed by each party's own counsel.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#1a1a1a] rounded-xl bg-[#0f0f0f] overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-[#141414] transition-colors"
      >
        <span className="text-white font-semibold text-sm sm:text-base">{q}</span>
        <span className="shrink-0 text-yellow-400">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 -mt-1">
          <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Answers for <span className="gold-gradient">Sellers &amp; Partners</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Straight answers to the questions we hear most. Have one that isn&apos;t
            here? Reach out — we respond within 48 hours.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Item q={f.q} a={f.a} />
            </motion.div>
          ))}
        </div>

        <AdviceDisclaimer />
      </div>
    </section>
  );
}
