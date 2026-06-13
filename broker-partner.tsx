"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Shield, Clock, Repeat, Wrench, CheckCircle, Send } from "lucide-react";
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

const features = [
  {
    icon: Shield,
    title: "Your Commission, Protected From Day One",
    description:
      "Your commission is baked into the deal structure at LOI — not negotiated after. We have never cut a broker out of a transaction and never will.",
  },
  {
    icon: Clock,
    title: "48-Hour Response. LOI in Days.",
    description:
      "No committee approvals, no endless underwriting cycles. A qualifying submission gets a response within 48 hours and a formal LOI within days.",
  },
  {
    icon: Repeat,
    title: "We Are a Repeat Buyer",
    description:
      "Brokers who bring us one deal become priority partners for every future deal. We maintain an active pipeline and are constantly acquiring across the Sunbelt.",
  },
  {
    icon: Wrench,
    title: "We Close the Hard Deals",
    description:
      "Bank financing fell through? Seller needs a creative structure? Bring us the deals that didn't close elsewhere — our Equity Carry approach works where traditional finance fails.",
  },
];

const qualifiers = [
  "Seller willing to consider equity carry or seller financing",
  "Asset has a clear value-add or stabilization path",
  "Business-backed deals: minimum $500K EBITDA with real estate",
  "No major environmental or title encumbrances",
  "Motivated seller aligned on long-term outcome",
  "Agent / broker fully representing the transaction",
];

interface BrokerForm {
  name: string;
  brokerage: string;
  email: string;
  phone: string;
  representing: string;
  assetType: string;
  dealSize: string;
  askingPrice: string;
  summary: string;
}

export function BrokerPartner() {
  const [form, setForm] = useState<BrokerForm>({
    name: "", brokerage: "", email: "", phone: "",
    representing: "", assetType: "", dealSize: "",
    askingPrice: "", summary: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof BrokerForm, value: string) => {
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
    <section id="for-brokers" className="py-24 bg-[#080808]">
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
            For Agents, Brokers &amp; Deal Originators
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Commission Is Protected.{" "}
            <span className="gold-gradient">Your Relationship Is Valued.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Marss Real Estate is a repeat buyer — not a one-time transaction. Brokers
            who bring us qualified deals become long-term partners in our active
            acquisition pipeline. We never circumvent your relationship, and your fee
            is structured into the deal from day one.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#broker-submit">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-5 text-base tracking-wide">
                Submit a Deal
              </Button>
            </a>
            <a href="#buy-box">
              <Button variant="outline" className="border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 px-8 py-5 text-base tracking-wide">
                View Deal Criteria
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-7 transition-all duration-300 group"
            >
              <div className="border-t-[3px] border-yellow-500/60 -mt-7 mb-6" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors shrink-0">
                  <feat.icon className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{feat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deal qualifiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-10 mb-20"
        >
          <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Deal Qualifiers
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            What Makes a Deal Fast-Track?
          </h3>
          <p className="text-gray-400 text-sm mb-8">
            Deals that match these criteria can be under LOI within days, not months.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {qualifiers.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Broker contact form */}
        <motion.div
          id="broker-submit"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Broker / Agent Portal
            </div>
            <h3 className="text-3xl font-bold text-white">Submit a Deal for Review</h3>
            <p className="text-gray-500 text-sm mt-2">
              Your commission is protected from the moment you submit.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-12 text-center max-w-lg mx-auto">
              <div className="h-16 w-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">Deal Received</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                You will hear from us within 48 hours. Your commission is protected.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-8 space-y-5 max-w-2xl mx-auto"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Your Full Name *</Label>
                  <Input required value={form.name} onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Jane Smith"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Brokerage / Firm</Label>
                  <Input value={form.brokerage} onChange={(e) => handleChange("brokerage", e.target.value)}
                    placeholder="ABC Realty Group"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Email *</Label>
                  <Input required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="jane@brokerage.com"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Phone *</Label>
                  <Input required value={form.phone} onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(555) 000-0000"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Representing *</Label>
                  <Select onValueChange={(v) => handleChange("representing", v)} required>
                    <SelectTrigger className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                      <SelectItem value="seller">Seller</SelectItem>
                      <SelectItem value="buyer">Buyer</SelectItem>
                      <SelectItem value="both">Both Parties</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Asset Type *</Label>
                  <Select onValueChange={(v) => handleChange("assetType", v)} required>
                    <SelectTrigger className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
                      <SelectValue placeholder="Asset type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                      <SelectItem value="multifamily">Multi-Family (5+ units)</SelectItem>
                      <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                      <SelectItem value="commercial">Commercial / Retail</SelectItem>
                      <SelectItem value="gas-station">Gas Station / Fueling Center</SelectItem>
                      <SelectItem value="car-wash">Car Wash</SelectItem>
                      <SelectItem value="auto-dealer">Auto Dealership / Garage</SelectItem>
                      <SelectItem value="industrial">Industrial / Warehouse</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
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
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Asking Price</Label>
                  <Input value={form.askingPrice} onChange={(e) => handleChange("askingPrice", e.target.value)}
                    placeholder="e.g. $2,400,000"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300 text-sm">Deal Summary *</Label>
                <Textarea required value={form.summary}
                  onChange={(e) => handleChange("summary", e.target.value)}
                  placeholder="Describe the asset, location, financials, and what you are looking for from us."
                  rows={4}
                  className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50 resize-none" />
              </div>

              <Button type="submit" disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-6 text-base tracking-wide">
                {loading ? "Submitting..." : (
                  <><span>Submit Deal for Review</span><Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
              <p className="text-gray-600 text-xs text-center">
                Your commission is protected from submission. We never share your information.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
