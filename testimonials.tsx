"use client";

import { motion } from "framer-motion";
import { Quote, Phone } from "lucide-react";

const testimonials = [
  {
    quote:
      "Marss moved faster than any buyer I’ve worked with. LOI was in my inbox within 48 hours, my commission was never in question, and the deal closed on structure. I send them every deal that fits their box.",
    name: "Jonathan Filinto",
    title: "Broker",
    company: "Metro Brokers Of Oklahoma — Einstein Group LLC",
    location: "Oklahoma City, OK",
    phone: "405.406.1126",
    role: "broker",
  },
  {
    quote:
      "The Equity Carry structure was explained clearly from day one. No pressure, no discount demands, and the milestone-based reporting kept me informed throughout. Exactly what was promised.",
    name: "Mark Fontana",
    title: "Owner",
    company: "Car Wash",
    location: "Denton, TX",
    role: "seller",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            What Partners Say
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built on Relationships.{" "}
            <span className="gold-gradient">Proven on Deals.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-8"
            >
              <div className="border-t-[3px] border-yellow-500/60 -mt-8 mb-7" />
              <Quote className="h-6 w-6 text-yellow-500/40 mb-5" />
              <p className="text-gray-300 text-base leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-[#1f1f1f] pt-5">
                <div className="font-bold text-sm text-white">{t.name}</div>
                <div className="text-yellow-500 text-xs mt-0.5 font-medium">
                  {t.title} &mdash; {t.company}
                </div>
                <div className="text-gray-500 text-xs mt-0.5">{t.location}</div>
                {t.phone && (
                  <a
                    href={`tel:${t.phone.replace(/\./g, "")}`}
                    className="inline-flex items-center gap-1.5 mt-2 text-gray-600 hover:text-yellow-400 transition-colors text-xs"
                  >
                    <Phone className="h-3 w-3" />
                    {t.phone}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
