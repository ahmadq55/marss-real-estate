"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Building,
  Briefcase,
  Globe,
  Linkedin,
  ExternalLink,
  MapPin,
  ArrowRight,
} from "lucide-react";

const credentials = [
  "Real estate investor backed by business operations",
  "Specializes in value-add, STR, pad split, and commercial acquisitions",
  "Creative Financing Suite — Equity Carry (flagship), Owner Financing, and Hybrid Capital Stacks",
  "Aligned incentives: buyer and seller win together at every closing",
  "Transparent milestone-based performance tracking",
  "Acquires real estate and operating businesses — gas stations, car washes, auto dealerships, motels, light manufacturing & more",
];

const pillars = [
  {
    icon: Building,
    title: "Real Estate Expertise",
    description:
      "Deep knowledge of commercial, multi-family, short-term rental, and co-living asset classes, deal structures, and value-add execution strategies.",
  },
  {
    icon: Briefcase,
    title: "Business-Backed Capital",
    description:
      "Our investment activity is supported by active business operations, providing operational credibility and stable deal execution across real estate and business acquisitions.",
  },
  {
    icon: Globe,
    title: "Strategic Partnerships",
    description:
      "We build long-term relationships with agents, brokers, and sellers — not one-off transactions. Repeat business is how we measure success.",
  },
];

const founderStats = [
  { value: "10–12+", label: "Deals Screened Weekly" },
  { value: "5+", label: "Asset Classes Covered" },
  { value: "3–10 Yr", label: "Hold Horizon" },
  { value: "IC-Ready", label: "Underwriting Standard" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
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
            Who We Are
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            A Different Kind of{" "}
            <span className="gold-gradient">Real Estate Investor</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Marss Real Estate was founded on the belief that sellers, agents,
            and investors don’t have to be on opposite sides of the table.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-2 border-yellow-500 pl-6 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We are a real estate and business acquisition firm actively
                acquiring commercial real estate, operating businesses backed
                by real estate, short-term rentals, and co-living properties —
                including gas stations, car washes, auto dealerships, motels,
                light manufacturing, and more — using a suite of{" "}
                <span className="text-yellow-400 font-semibold">
                  creative financing structures
                </span>{" "}
                with Equity Carry as our flagship approach. We select the
                right structure for each deal: Equity Carry, Owner Financing,
                or a Hybrid Capital Stack — based on the asset type, seller’s
                goals, and verified cash flow profile.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Sellers receive immediate liquidity, ongoing passive income,
                and capital gains tax deferral. Brokers get commission
                protection and a repeat buyer who closes. When you work with
                Marss Real Estate, you’re working with a partner committed
                to delivering full or near-full value — not forcing discounts
                or playing adversarial games.
              </p>
            </div>

            {/* Credentials checklist */}
            <ul className="space-y-3">
              {credentials.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-[#111] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors shrink-0">
                    <pillar.icon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Logo + Links panel */}
            <div className="bg-[#111] border border-yellow-900/30 rounded-xl p-6">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg"
                  alt="Marss Real Estate"
                  className="h-16 w-16 object-contain rounded-lg"
                />
                <div>
                  <div className="text-white font-bold text-lg tracking-widest">
                    MARSS REAL ESTATE
                  </div>
                  <div className="text-yellow-500 text-sm italic">
                    Transforming Property Into Possibilities
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 border-t border-white/8 pt-4">

                <a
                  href="https://www.linkedin.com/in/ahmadqawasmeh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors group"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  Connect on LinkedIn
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── FOUNDER SUMMARY ── (merged from former Principal section) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-[#0c0900] via-[#0a0a0a] to-[#060606] overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Photo column */}
            <div className="relative lg:col-span-2 min-h-[340px] lg:min-h-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{
                  backgroundImage:
                    "url('https://galaxy-prod.tlcdn.com/view/user_372EAGt89yD821sKcMySYfKrZna/bde94d41e1ab40ffa00d7e9c10ac56d9.png')",
                  filter: "grayscale(100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 55%, #0a0a0a 100%), linear-gradient(to top, #0a0a0a 0%, transparent 45%)",
                }}
              />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                <p className="text-yellow-400 text-[11px] font-bold tracking-[0.25em] uppercase mb-2">
                  Founder & Managing Principal
                </p>
                <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight leading-none mb-2">
                  Ahmad Qawasmeh
                </h3>
                <p className="text-zinc-400 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-yellow-500/70" />
                  Frisco, Texas · Sunbelt Markets
                </p>
              </div>
            </div>

            {/* Bio column */}
            <div className="lg:col-span-3 flex flex-col justify-center px-7 py-10 lg:px-10 lg:py-12">
              <p className="text-yellow-400/80 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
                Investor · Operator · Deal Architect
              </p>

              <blockquote className="border-l-2 border-yellow-400 pl-5 mb-7">
                <p className="text-white text-lg lg:text-xl font-light leading-relaxed">
                  “I don’t just buy properties and businesses — I engineer
                  acquisitions that work for both sides of the table. My edge is
                  structure, speed, and the conviction to close without
                  contingencies.”
                </p>
              </blockquote>

              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                Ahmad Qawasmeh is the Founder and Managing Principal of Marss
                Real Estate, a Frisco-based acquisition platform targeting
                commercial real estate and cash-flowing operating businesses
                across Texas and the broader Sunbelt. He leads every deal from
                initial screen through close — personally underwriting each
                opportunity to institutional Investment Committee standards.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-7">
                His proprietary Equity Carry structure lets sellers close at
                full or near-full asking price, take a secured equity position
                in the acquiring entity, and participate in long-term upside —
                without the delays and uncertainty of conventional acquisition
                timelines.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-yellow-400/10 rounded-lg overflow-hidden mb-7">
                {founderStats.map((s, i) => (
                  <div key={i} className="bg-zinc-950/60 px-4 py-3.5 text-center">
                    <p className="text-yellow-400 text-base font-bold tracking-tight">
                      {s.value}
                    </p>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/ahmadqawasmeh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold px-6 py-3 rounded transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-400 text-sm font-medium transition-colors duration-200"
                >
                  Start the Conversation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="section-divider" />
      </div>
    </section>
  );
}
