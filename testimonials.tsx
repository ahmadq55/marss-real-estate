"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Marss moved faster than any buyer I've worked with. LOI was in my inbox within 48 hours, my commission was never in question, and the deal closed on structure. I send them every deal that fits their box.",
    name: "[Broker Name]",
    title: "[Title]",
    company: "[Brokerage], [City, TX]",
    placeholder: true,
  },
  {
    quote:
      "The Equity Carry structure was explained clearly from day one. No pressure, no discount demands, and the milestone-based reporting kept me informed throughout. Exactly what was promised.",
    name: "[Seller Name]",
    title: "[Seller / Operator]",
    company: "[Asset Type], [City, TX]",
    placeholder: true,
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
                <div
                  className={`font-bold text-sm ${
                    t.placeholder ? "text-gray-500 italic" : "text-white"
                  }`}
                >
                  {t.name}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    t.placeholder ? "text-gray-600 italic" : "text-yellow-500"
                  }`}
                >
                  {t.title} · {t.company}
                </div>
                {t.placeholder && (
                  <div className="text-xs text-gray-700 mt-2 italic">
                    [Placeholder — replace with real testimonial]
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
