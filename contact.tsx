"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, CheckCircle, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  assetType: string;
  dealSize: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    role: "",
    assetType: "",
    dealSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call 972.779.6787.");
      }
    } catch {
      setError("Connection error. Please try again or call 972.779.6787.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Get In Touch</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Submit a Deal or <span className="gold-gradient">Connect With Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Whether you have a qualified deal, want to explore a structure, or are looking to build a long-term
            partnership — we respond within 48 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <Image
                src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg"
                alt="Marss Real Estate"
                width={64}
                height={64}
                className="h-16 w-16 object-contain rounded-lg mb-4"
              />
              <h3 className="text-white text-xl font-bold mb-1">Marss Real Estate</h3>
              <p className="text-yellow-500 text-sm font-medium mb-3">Serious Capital. Creative Structures. Deals That Close.</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Active acquirers of commercial real estate and essential operating businesses across the Sunbelt.
                If you have a property or business that fits our criteria, let&apos;s talk.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:support@marssrealestate.com" className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors">
                  <Mail className="h-4 w-4 text-yellow-400" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-yellow-400 transition-colors">support@marssrealestate.com</span>
              </a>
              <a href="tel:9727796787" className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors">
                  <Phone className="h-4 w-4 text-yellow-400" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-yellow-400 transition-colors">972.779.6787</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                </div>
                <span className="text-gray-300 text-sm">Frisco, TX — Nationwide Sunbelt Focus</span>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-yellow-900/30 rounded-xl p-5">
              <div className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Response Commitment</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                All qualified deal submissions receive a response within{" "}
                <span className="text-white font-semibold">48 hours</span>.
                LOI issued within days on qualifying opportunities.
              </p>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-5">
              <div className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-3">We Accept</div>
              <div className="space-y-1">
                {["Offering Memoranda (OM)","T-12 / P&L Financials","Rent Roll","3-Year Tax Returns","EBITDA Summary","Franchise Agreement","Equipment List","Appraisal or BOV"].map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                    <span className="text-gray-500 text-xs">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-[#0f0f0f] border border-yellow-900/40 rounded-2xl p-12 text-center">
                <div className="h-16 w-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">Inquiry Received</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. A member of the Marss Real Estate team will respond within 48 hours.
                  For urgent matters, call <a href="tel:9727796787" className="text-yellow-400 hover:underline">972.779.6787</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">Full Name *</Label>
                    <Input required value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="John Smith"
                      className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">Email *</Label>
                    <Input required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="john@example.com"
                      className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">Phone</Label>
                    <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="(972) 000-0000"
                      className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">Your Role *</Label>
                    <Select onValueChange={(v) => handleChange("role", v)} required>
                      <SelectTrigger className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                        <SelectItem value="listing-agent">Listing Agent</SelectItem>
                        <SelectItem value="buyer-agent">Buyer&apos;s Agent</SelectItem>
                        <SelectItem value="broker">Broker / Intermediary</SelectItem>
                        <SelectItem value="property-seller">Property Seller</SelectItem>
                        <SelectItem value="business-seller">Business Seller</SelectItem>
                        <SelectItem value="jv-investor">JV Investor / Capital Partner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">Asset / Business Type</Label>
                    <Select onValueChange={(v) => handleChange("assetType", v)}>
                      <SelectTrigger className="bg-[#151515] border-[#252525] text-white focus:border-yellow-500/50">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
                        <SelectItem value="multifamily">Multi-Family (5+ units)</SelectItem>
                        <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                        <SelectItem value="commercial">Commercial / Retail</SelectItem>
                        <SelectItem value="gas-station">Gas Station / C-Store</SelectItem>
                        <SelectItem value="car-wash">Car Wash</SelectItem>
                        <SelectItem value="auto-dealer">Auto Dealership / Garage</SelectItem>
                        <SelectItem value="hvac">HVAC / Plumbing / Trades</SelectItem>
                        <SelectItem value="motel">Motel / Extended Stay</SelectItem>
                        <SelectItem value="laundromat">Laundromat</SelectItem>
                        <SelectItem value="light-mfg">Light Manufacturing</SelectItem>
                        <SelectItem value="self-storage">Self-Storage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">Deal Size (Approx.)</Label>
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
                  <Label className="text-gray-300 text-sm">Tell Us About the Deal *</Label>
                  <Textarea required value={form.message} onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Asset address, current EBITDA / NOI, asking price, timeline, what you need from the buyer..."
                    rows={4} className="bg-[#151515] border-[#252525] text-white placeholder:text-gray-600 focus:border-yellow-500/50 resize-none" />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <Button type="submit" disabled={loading}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-6 text-base tracking-wide">
                  {loading ? "Submitting..." : <><span>Submit Inquiry</span><Send className="ml-2 h-4 w-4" /></>}
                </Button>
                <p className="text-gray-600 text-xs text-center">By submitting, you agree to be contacted by Marss Real Estate. We never share your information.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
