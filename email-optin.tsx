"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, CheckCircle, ArrowRight, FileText, BarChart3, Target } from "lucide-react";
import { Button } from "@/button";
import { Input } from "@/input";
import { Label } from "@/label";

const checklistItems = [
  { icon: FileText, text: "25-Point Deal Screen (Go / No-Go Framework)" },
  { icon: BarChart3, text: "EBITDA / SDE Extraction & Normalization Guide" },
  { icon: Target, text: "Asset-Class Benchmarks & Red Flag Thresholds" },
  { icon: Download, text: "Capital Stack Templates & DSCR Stress Tests" },
];

export default function EmailOptin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email support@marssrealestate.com");
      }
    } catch {
      setError("Connection error. Please email support@marssrealestate.com to request the checklist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="checklist" className="py-20 bg-[#050505] border-t border-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: value prop */}
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-6">
                <Download className="h-3.5 w-3.5 text-yellow-400" />
                <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">Free Resource</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Deal Screening Checklist &mdash;{" "}
                <span className="gold-gradient">Download Free</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The exact framework Marss Real Estate uses to screen every deal in under 60 minutes.
                25 questions. Go / No-Go scoring. Covers commercial real estate, gas stations, car washes,
                auto dealers, HVAC businesses, and more.
              </p>
              <div className="space-y-3">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-yellow-500/10 border border-yellow-500/30">
                      <item.icon className="h-3.5 w-3.5 text-yellow-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div className="bg-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-10 text-center">
                  <div className="h-14 w-14 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-7 w-7 text-yellow-400" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Your Checklist Is Ready</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Thanks, <span className="text-yellow-400">{name}</span>. Click below to download your
                    25-point Deal Screening Checklist instantly.
                  </p>
                  <a
                    href="/deal-screening-checklist.pdf"
                    download="Deal-Screening-Checklist-MARSS.pdf"
                    className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download Checklist (PDF)
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-8 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-400 text-xs uppercase tracking-wide">First Name *</Label>
                    <Input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ahmad"
                      className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-400 text-xs uppercase tracking-wide">Email *</Label>
                    <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                      className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                  </div>
                  {error && <p className="text-red-400 text-xs">{error}</p>}
                  <Button type="submit" disabled={loading}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold tracking-wide w-full py-5">
                    {loading ? "Sending..." : <><span>Get Free Download</span><ArrowRight className="ml-2 h-4 w-4" /></>}
                  </Button>
                  <p className="text-gray-600 text-xs">Instant access. No spam. Your information is never shared.</p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
