"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AdviceDisclaimer } from "@/disclaimer";

const faqs = [
  {
    q: "Will I get full price for my property or business?",
    a: "Our structures are designed so sellers can transact at full or near-full asking price rather than accepting a discounted all-cash offer. The exact figure depends on the asset, its verified cash flow, and the structure we agree on. We don't force discounts as a starting point — but no specific price or outcome is promised until it is documented in a signed agreement.",
  },
  {
    q: "What is Equity Carry, in plain terms?",
    a: "It's a structure where, instead of selling entirely for cash, the seller keeps a secured position in the entity that acquires the asset — receiving income over time and participating in future upside, with governance protections and step-in rights. It is one of several structures we use, and we select the right one per deal. See our Equity Carry guide in Resources for a full walkthrough.",
  },
  {
    q: "How is this different from a normal sale?",
    a: "A traditional sale is a single cash event. Our structures can spread proceeds across time, which may create income and potential tax advantages (for example, installment sale treatment) while keeping the seller in a protected position. Whether that is right for you depends entirely on your goals and your own advisors' guidance.",
  },
  {
    q: "Are there tax advantages?",
    a: "Depending on the structure, proceeds received across multiple tax years may qualify for installment sale treatment under IRS rules, which can spread capital gains liability. This is general information, not tax advice — your CPA should evaluate what applies to your specific situation.",
  },
  {
    q: "How fast can you move?",
    a: "We respond to qualified deal submissions within 48 hours and can issue an LOI within days on opportunities that fit our criteria. Actual closing timelines vary with diligence, title, and the specifics of each transaction.",
  },
  {
    q: "What types of assets do you acquire?",
    a: "Commercial real estate, multi-family (5+ units), mixed-use, and essential operating businesses — gas stations, car washes, auto dealerships, motels, laundromats, light manufacturing, self-storage, and more — primarily across Texas and the broader Sunbelt.",
  },
  {
    q: "I'm a broker or agent — is my commission protected?",
    a: "Yes. Your commission is structured into the transaction and documented at LOI, not negotiated afterward. We work to build repeat relationships with the professionals who bring us deals.",
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
