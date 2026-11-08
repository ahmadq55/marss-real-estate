"use client";

import { motion } from "framer-motion";
import {
  Lock,
  Briefcase,
  Wallet,
  Scale,
  SlidersHorizontal,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/button";

const reasons = [
  {
    icon: Lock,
    title: "Confidential Inquiries",
    description: "Private, discreet conversations from the start",
  },
  {
    icon: Briefcase,
    title: "Retirement & Succession",
    description: "Plan a transition on your own timeline",
  },
  {
    icon: Wallet,
    title: "Liquidity & Portfolio Moves",
    description: "Support for liquidity events and portfolio changes",
  },
  {
    icon: Scale,
    title: "Less Operating Burden",
    description: "Reduce day-to-day management responsibility",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Evaluation",
    description: "Each transaction is evaluated on its own economics",
  },
  {
    icon: MessageSquare,
    title: "Simple First Conversation",
    description: "No full diligence package needed to get started",
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
            For Property &amp; Business Owners
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            A Straightforward{" "}
            <span className="gold-gradient">Path to Sell</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Considering a sale, retirement, management transition or change in
            investment strategy? Start with a confidential conversation. We
            will tell you plainly whether your asset fits and what a transaction
            could look like.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0f0f0f] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="p-2.5 w-fit rounded-xl border bg-yellow-500/10 border-yellow-500/20 mb-4 group-hover:bg-yellow-500/15 transition-colors">
                <r.icon className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
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
            <h3 className="text-white font-bold text-xl mb-1">Ready to talk?</h3>
            <p className="text-gray-400 text-sm">
              Share your name, the property and what you have in mind. No pressure and
              no obligation. No outcome is promised until it is documented in a signed
              agreement.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="#contact">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 whitespace-nowrap">
                Submit a Deal <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#strategy">
              <Button
                variant="outline"
                className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 whitespace-nowrap"
              >
                View Deal Structures
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
