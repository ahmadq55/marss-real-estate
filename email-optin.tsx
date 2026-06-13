"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/button";
import { Input } from "@/input";
import { Label } from "@/label";

export function EmailOptin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="checklist" className="py-20 bg-[#050505] border-t border-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-6">
            <Download className="h-3.5 w-3.5 text-yellow-400" />
            <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
              Free Resource
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Deal Screening Checklist —{" "}
            <span className="gold-gradient">Download Free</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            The exact criteria Marss Real Estate uses to screen every deal in under
            60 minutes. 25 questions. Go / No-Go framework. Covers multifamily,
            commercial, and business-backed assets.
          </p>

          {submitted ? (
            <div className="bg-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-10 text-center">
              <div className="h-14 w-14 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-7 w-7 text-yellow-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">You're on the list.</h3>
              <p className="text-gray-400 text-sm">
                The checklist will be in your inbox within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-8"
            >
              <div className="grid sm:grid-cols-3 gap-4 items-end">
                <div className="space-y-2 text-left">
                  <Label className="text-gray-400 text-xs uppercase tracking-wide">
                    First Name *
                  </Label>
                  <Input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ahmad"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <Label className="text-gray-400 text-xs uppercase tracking-wide">
                    Email *
                  </Label>
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold tracking-wide w-full"
                >
                  {loading ? "Sending..." : (
                    <><span>Send Me the Checklist</span><ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </div>
              <p className="text-gray-600 text-xs mt-4">
                No spam. Unsubscribe anytime. Your information is never shared.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
