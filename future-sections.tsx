"use client";

/**
 * UNPUBLISHED LAYOUTS — built and ready, intentionally NOT rendered in page.tsx.
 * Populate with real, verifiable content, then import into the page when approved.
 *
 * FTC NOTE: Testimonials must be real and unedited. If any endorser received
 * compensation or an incentive, that must be clearly disclosed on the card.
 */

import { motion } from "framer-motion";
import { Quote, MapPin, TrendingUp } from "lucide-react";

// ─── CASE STUDIES (unpublished) ───────────────────────────────────────────
const caseStudyPlaceholders = [
  {
    assetType: "[Asset Type — e.g. Car Wash]",
    location: "[City, State]",
    structure: "[Structure — e.g. Equity Carry]",
    summary: "[1–2 sentence factual summary of the situation and how it was structured. No return figures unless documented and verifiable.]",
    metrics: [
      { label: "Close Timeline", value: "[e.g. 21 days]" },
      { label: "Asset Class", value: "[e.g. Retail C-Store]" },
      { label: "Structure", value: "[e.g. Owner Financing]" },
    ],
  },
  {
    assetType: "[Asset Type]",
    location: "[City, State]",
    structure: "[Structure]",
    summary: "[Factual summary placeholder — populate only with verifiable detail.]",
    metrics: [
      { label: "Close Timeline", value: "[__ days]" },
      { label: "Asset Class", value: "[____]" },
      { label: "Structure", value: "[____]" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Selected Transactions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Case <span className="gold-gradient">Studies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Representative transactions. All figures are illustrative placeholders
            until replaced with documented, verifiable detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudyPlaceholders.map((c, i) => (
            <div key={i} className="rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] p-7">
              <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">
                <TrendingUp className="h-3.5 w-3.5" /> {c.structure}
              </div>
              <h3 className="text-white text-xl font-bold mb-1">{c.assetType}</h3>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-4">
                <MapPin className="h-3.5 w-3.5" /> {c.location}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{c.summary}</p>
              <div className="grid grid-cols-3 gap-px bg-yellow-900/20 rounded-lg overflow-hidden">
                {c.metrics.map((m, j) => (
                  <div key={j} className="bg-[#0b0b0b] px-3 py-3 text-center">
                    <div className="text-yellow-400 text-sm font-bold">{m.value}</div>
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS (unpublished) ───────────────────────────────────────────
const testimonialPlaceholders = [
  {
    quote: "[Verbatim testimonial from a real, identifiable person. Do not fabricate or edit for tone.]",
    name: "[Full Name]",
    role: "[Role — e.g. Broker, Metro Brokers of Oklahoma]",
    location: "[City, State]",
    disclosure: "", // if compensated/incentivized, set to e.g. "Compensated endorsement."
  },
  {
    quote: "[Second verified testimonial placeholder.]",
    name: "[Full Name]",
    role: "[Role]",
    location: "[City, State]",
    disclosure: "",
  },
];

export function TestimonialsLayout() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            What Partners Say
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            In Their <span className="gold-gradient">Own Words</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonialPlaceholders.map((t, i) => (
            <div key={i} className="rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] p-8">
              <Quote className="h-6 w-6 text-yellow-500/50 mb-4" />
              <p className="text-gray-300 text-base leading-relaxed mb-6">{t.quote}</p>
              <div className="text-white font-bold text-sm">{t.name}</div>
              <div className="text-gray-400 text-xs">{t.role} · {t.location}</div>
              {t.disclosure && (
                <div className="text-gray-400 text-[11px] mt-2 italic">{t.disclosure}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
