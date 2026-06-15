"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, BarChart3, FileText, TrendingUp, Users, CheckCircle, Send } from "lucide-react";
import { Button } from "@/button";
import { Input } from "@/input";
import { Label } from "@/label";
import { Textarea } from "@/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/select";

const packages = [
  {
    icon: FileText,
    name: "Deal Screening Review",
    tag: "One-time · Single Deal",
    features: [
      "OM / CIM review",
      "Red flag identification",
      "Go / No-Go recommendation",
      "Cap Rate, DSCR, CoC check",
      "Written summary report",
    ],
  },
  {
    icon: BarChart3,
    name: "Underwriting Deep Dive",
    tag: "One-time · Full Analysis",
    features: [
      "Full T-12 & rent roll analysis",
      "NOI stress test (−10% / −20%)",
      "Cap stack recommendation",
      "Exit cap sensitivity analysis",
      "IC-ready underwriting memo",
    ],
    featured: true,
  },
  {
    icon: TrendingUp,
    name: "Monthly Advisory Retainer",
    tag: "Ongoing · Priority Access",
    features: [
      "Up to 10 deals/mo screened",
      "Priority 48-hr turnaround",
      "Capital stack structuring",
      "Negotiation strategy support",
      "Direct access to Ahmad",
    ],
  },
];

const whoWeServe = [
  "Private equity sponsors screening Sunbelt assets",
  "Family offices evaluating $1M–$10M acquisitions",
  "Syndicators underwriting first or second deal",
  "Operators assessing business + real estate combos",
  "Brokers who need fast validation before LOI",
  "Investors evaluating gas stations, car washes, auto dealers",
  "Out-of-state buyers entering Texas markets",
  "Anyone needing a second opinion before committing capital",
];

interface AdvisoryForm {
  name: string;
  email: string;
  phone: string;
  role: string;
  service: string;
  assetType: string;
  dealSize: string;
  message: string;
}

export function Advisory() {
  const [form, setForm] = useState<AdvisoryForm>({
    name: "", email: "", phone: "", role: "",
    service: "", assetType: "", dealSize: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof AdvisoryForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="advisory" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Advisory &amp; Consulting
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Institutional-Grade Deal Analysis.{" "}
            <span className="gold-gradient">Without the Institutional Overhead.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Fee-based advisory services for investors, family offices, and operators who
            need senior-level acquisition analysis and deal structuring — without hiring
            a full-time analyst.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#advisory-contact">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-5 text-base tracking-wide">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-yellow-900/20 rounded-2xl overflow-hidden border border-yellow-900/30 mb-20"
        >
          {[
            { value: "10+", label: "Asset Classes Analyzed" },
            { value: "48 Hr", label: "Avg. Deal Turnaround" },
            { value: "$1M–$10M+", label: "Deal Size Range" },
            { value: "Sunbelt", label: "Primary Market Focus" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0f0f0f] px-6 py-6 text-center">
              <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Service packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Service Packages
            </div>
            <h3 className="text-3xl font-bold text-white">Choose Your Engagement</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl p-7 border transition-all duration-300 ${
                  pkg.featured
                    ? "bg-[#111] border-yellow-500/40 shadow-lg shadow-yellow-900/10"
                    : "bg-[#0f0f0f] border-[#1f1f1f] hover:border-yellow-900/40"
                }`}
              >
                <div
                  className={`border-t-[3px] ${
                    pkg.featured ? "border-yellow-400" : "border-yellow-900/60"
                  } -mt-7 mb-6`}
                />
                <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 inline-block mb-4">
                  <pkg.icon className="h-5 w-5 text-yellow-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{pkg.name}</h4>
                <p className="text-gray-500 text-xs mb-5">{pkg.tag}</p>
                <ul className="space-y-2.5 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#advisory-contact">
                  <Button
                    variant="outline"
                    className="w-full border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 text-sm"
                  >
                    Contact for Pricing
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who we serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-10 mb-20"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-5 w-5 text-yellow-400" />
            <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">
              Who We Serve
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Built for Operators and Investors Who Move Fast
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-2xl">
            Marss Advisory is designed for principals who are evaluating multiple deals
            per week and need institutional-quality analysis on a deal-timeline — not a
            consulting-firm timeline. Every engagement is handled directly by Ahmad
            Qawasmeh.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {whoWeServe.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Advisory contact form */}
        <motion.div
          id="advisory-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Get Started
            </div>
            <h3 className="text-3xl font-bold text-white">Request a Consultation</h3>
          </div>

          {submitted ? (
            <div className="bg-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-12 text-center max-w-lg mx-auto">
              <div className="h-16 w-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">Request Received</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you — we will respond within 48 hours to discuss your advisory needs.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-8 space-y-5 max-w-2xl mx-auto"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Full Name *</Label>
                  <Input required value={form.name} onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Smith"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Email *</Label>
                  <Input required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Phone</Label>
                  <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(555) 000-0000"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Your Role *</Label>
                  <Select onValueChange={(v) => handleChange("role", v)} required>
                    <SelectTrigger className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                      <SelectItem value="private-investor">Private Investor</SelectItem>
                      <SelectItem value="family-office">Family Office</SelectItem>
                      <SelectItem value="syndicator">Syndicator</SelectItem>
                      <SelectItem value="broker">Broker</SelectItem>
                      <SelectItem value="operator">Operator</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Service Interest *</Label>
                  <Select onValueChange={(v) => handleChange("service", v)} required>
                    <SelectTrigger className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                      <SelectItem value="screening">Deal Screening Review</SelectItem>
                      <SelectItem value="deep-dive">Underwriting Deep Dive</SelectItem>
                      <SelectItem value="retainer">Monthly Advisory Retainer</SelectItem>
                      <SelectItem value="unsure">Not Sure — Let's Talk</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Approximate Deal Size</Label>
                  <Select onValueChange={(v) => handleChange("dealSize", v)}>
                    <SelectTrigger className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
                      <SelectValue placeholder="Deal size" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                      <SelectItem value="500k-1m">$500K – $1M</SelectItem>
                      <SelectItem value="1m-3m">$1M – $3M</SelectItem>
                      <SelectItem value="3m-5m">$3M – $5M</SelectItem>
                      <SelectItem value="5m-10m">$5M – $10M</SelectItem>
                      <SelectItem value="10m+">$10M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300 text-sm">
                  Tell Us About Your Situation *
                </Label>
                <Textarea required value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Describe the deal, asset class, timeline, and what you need."
                  rows={4}
                  className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50 resize-none" />
              </div>

              <Button type="submit" disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-6 text-base tracking-wide">
                {loading ? "Submitting..." : (
                  <><span>Request a Consultation</span><Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
              <p className="text-gray-600 text-xs text-center">
                We respond within 48 hours. Your information is never shared.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
