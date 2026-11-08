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
    title: "Clear Acquisition Criteria",
    description:
      "Four principal asset categories, Texas-focused with select markets nationwide. Know before you submit whether a deal fits.",
  },
  {
    icon: Clock,
    title: "Fast Preliminary Screening",
    description:
      "A defined review and response process. Qualified submissions are screened promptly; no outcome is promised before adequate review.",
  },
  {
    icon: Repeat,
    title: "Professional Communication",
    description:
      "A repeat buyer with an active pipeline. Straightforward updates and clear next steps from the first submission.",
  },
  {
    icon: Wrench,
    title: "Structures From Real Economics",
    description:
      "Cash, financing, seller financing, loan assumptions, Equity Carry or hybrids, with access to acquisition and capital partners.",
  },
];

const qualifiers = [
  "Income-producing asset in one of our four principal categories",
  "Clear value-add or stabilization path",
  "Financial summary available (T-12, rent roll or P&L)",
  "Existing financing or assumability details, if known",
  "Business-backed deals: ~$500K+ EBITDA with owned real estate",
  "No major environmental or title encumbrances",
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
  propertyName: string;
  financing: string;
  summary: string;
}

export function BrokerPartner() {
  const [form, setForm] = useState<BrokerForm>({
    name: "", brokerage: "", email: "", phone: "",
    representing: "", assetType: "", dealSize: "",
    askingPrice: "", propertyName: "", financing: "", summary: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: keyof BrokerForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const message = [
      "Source: Broker / Deal Source form",
      `Brokerage / firm: ${form.brokerage || "Not provided"}`,
      `Representing: ${form.representing || "Not specified"}`,
      `Property name and location: ${form.propertyName || "Not provided"}`,
      `Asking price: ${form.askingPrice || "Not provided"}`,
      `Existing financing / assumability: ${form.financing || "Not provided"}`,
      "",
      form.summary,
    ].join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          role: "Broker / Deal Source",
          assetType: form.assetType,
          dealSize: form.dealSize,
          message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call 972.694.6407.");
      }
    } catch {
      setError("Connection error. Please try again or call 972.694.6407.");
    } finally {
      setLoading(false);
    }
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
            Clear Criteria.{" "}
            <span className="gold-gradient">Fast Review.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Brokers and agents bring us income-producing opportunities and get a capable group that evaluates them efficiently. We publish clear acquisition criteria, screen deals quickly and communicate professionally. Transaction structures are based on each deal's actual economics.
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
            What Makes a Deal a Fit?
          </h3>
          <p className="text-gray-400 text-sm mb-8">
            Deals that match these criteria are prioritized for deeper review.
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
            <p className="text-gray-400 text-sm mt-2">
              Send us what you have. Qualified submissions are screened against our criteria.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-12 text-center max-w-lg mx-auto">
              <div className="h-16 w-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">Deal Received</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you. We have received your submission and will follow up after review.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-8 space-y-5 max-w-2xl mx-auto"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="broker-1" className="text-gray-300 text-sm">Your Full Name *</Label>
                  <Input id="broker-1" required value={form.name} onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Jane Smith"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-400 focus:border-yellow-500/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="broker-2" className="text-gray-300 text-sm">Brokerage / Firm</Label>
                  <Input id="broker-2" value={form.brokerage} onChange={(e) => handleChange("brokerage", e.target.value)}
                    placeholder="ABC Realty Group"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-400 focus:border-yellow-500/50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="broker-3" className="text-gray-300 text-sm">Email *</Label>
                  <Input id="broker-3" required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="jane@brokerage.com"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-400 focus:border-yellow-500/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="broker-4" className="text-gray-300 text-sm">Phone *</Label>
                  <Input id="broker-4" required value={form.phone} onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(555) 000-0000"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-400 focus:border-yellow-500/50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="broker-5" className="text-gray-300 text-sm">Representing *</Label>
                  <Select onValueChange={(v) => handleChange("representing", v)} required>
                    <SelectTrigger id="broker-5" className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
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
                  <Label htmlFor="broker-6" className="text-gray-300 text-sm">Asset Type *</Label>
                  <Select onValueChange={(v) => handleChange("assetType", v)} required>
                    <SelectTrigger id="broker-6" className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
                      <SelectValue placeholder="Asset type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                      <SelectItem value="self-storage">Self-Storage</SelectItem>
                      <SelectItem value="mhp-rv">Mobile Home / RV Park</SelectItem>
                      <SelectItem value="multifamily">Multifamily</SelectItem>
                      <SelectItem value="hospitality">Hotel / Motel / Hospitality</SelectItem>
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
                  <Label htmlFor="broker-7" className="text-gray-300 text-sm">Approximate Deal Size</Label>
                  <Select onValueChange={(v) => handleChange("dealSize", v)}>
                    <SelectTrigger id="broker-7" className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
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
                  <Label htmlFor="broker-8" className="text-gray-300 text-sm">Asking Price</Label>
                  <Input id="broker-8" value={form.askingPrice} onChange={(e) => handleChange("askingPrice", e.target.value)}
                    placeholder="e.g. $2,400,000"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-400 focus:border-yellow-500/50" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="broker-9" className="text-gray-300 text-sm">Property Name &amp; Location</Label>
                  <Input id="broker-9" value={form.propertyName} onChange={(e) => handleChange("propertyName", e.target.value)}
                    placeholder="Name, city, state"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-400 focus:border-yellow-500/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="broker-10" className="text-gray-300 text-sm">Existing Financing / Assumability</Label>
                  <Input id="broker-10" value={form.financing} onChange={(e) => handleChange("financing", e.target.value)}
                    placeholder="If known"
                    className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-400 focus:border-yellow-500/50" />
                </div>
              </div>


              <div className="space-y-2">
                <Label htmlFor="broker-11" className="text-gray-300 text-sm">Deal Summary *</Label>
                <Textarea id="broker-11" required value={form.summary}
                  onChange={(e) => handleChange("summary", e.target.value)}
                  placeholder="Describe the asset, location, financials, and what you are looking for from us."
                  rows={4}
                  className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-400 focus:border-yellow-500/50 resize-none" />
              </div>

              <Button type="submit" disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-6 text-base tracking-wide">
                {loading ? "Submitting..." : (
                  <><span>Submit a Deal</span><Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <p className="text-gray-400 text-xs text-center">
                We never share your information. Broker compensation, where applicable, is discussed and documented in writing.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
