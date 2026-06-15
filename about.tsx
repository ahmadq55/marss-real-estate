"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Building, Briefcase, Globe, Linkedin, Facebook, ExternalLink } from "lucide-react";

const credentials = [
  "Real estate and business acquisition firm — not a wholesaler or retail flipper",
  "Specializes in value-add commercial real estate and essential operating businesses",
  "Creative Financing Suite — Equity Carry (flagship), Owner Financing, Sale-Leaseback, and JV structures",
  "Aligned incentives: buyer and seller win together at every closing",
  "Transparent milestone-based performance tracking — no black boxes",
  "Active across gas stations, car washes, auto dealerships, motels, light manufacturing, and more",
];

const pillars = [
  { icon: Building, title: "Real Estate Expertise", description: "Deep knowledge of commercial, multi-family, mixed-use, and business-backed asset classes — deal structures, value-add execution, and stabilization strategy." },
  { icon: Briefcase, title: "Business-Backed Capital", description: "Our investment activity is supported by active business operations, providing operational credibility and stable deal execution across real estate and business acquisitions." },
  { icon: Globe, title: "Strategic Partnerships", description: "We build long-term relationships with sellers, agents, brokers, and capital partners — not one-off transactions. Repeat business is how we measure success." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-block text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Who We Are</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">A Different Kind of <span className="gold-gradient">Acquisition Firm</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">Marss Real Estate was built on the belief that sellers, brokers, and capital partners don&apos;t have to be on opposite sides of the table.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="border-l-2 border-yellow-500 pl-6 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">We are a real estate and business acquisition firm actively acquiring commercial real estate and essential operating businesses &mdash; gas stations, car washes, auto dealerships, motels, light manufacturing, and more &mdash; using a suite of <span className="text-yellow-400 font-semibold">creative financing structures</span> engineered around verified cash flow. Equity Carry is our flagship approach, but we select the right structure for each deal based on the asset, the seller&apos;s goals, and the numbers.</p>
              <p className="text-gray-400 leading-relaxed">Sellers receive immediate liquidity, ongoing passive income, and capital gains tax deferral. Brokers get commission protection and a repeat buyer who closes. Capital partners get deal-level co-investment access with institutional-grade underwriting.</p>
            </div>
            <ul className="space-y-3">
              {credentials.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-[#111] border border-[#1f1f1f] hover:border-yellow-900/50 rounded-xl p-6 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/15 transition-colors shrink-0">
                    <pillar.icon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-[#0c0900] via-[#0a0a0a] to-[#060606] p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-6 shrink-0">
              <Image
                src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg"
                alt="Marss Real Estate"
                width={80}
                height={80}
                className="h-20 w-20 object-contain rounded-lg"
              />
              <div className="h-16 w-px bg-yellow-400/20" />
              <Image
                src="https://galaxy-prod.tlcdn.com/view/user_372EAGt89yD821sKcMySYfKrZna/bde94d41e1ab40ffa00d7e9c10ac56d9.png"
                alt="Ahmad Qawasmeh"
                width={80}
                height={80}
                className="h-20 w-20 object-cover object-top rounded-full border border-yellow-400/30 grayscale"
              />
            </div>
            <div className="flex-1">
              <div className="text-white font-bold text-lg tracking-widest mb-0.5">MARSS REAL ESTATE</div>
              <p className="text-yellow-500 text-sm mb-3">Ahmad Qawasmeh &mdash; Founder &amp; Managing Principal</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-2xl">This platform exists to connect Marss Real Estate with the people who move deals: property and business sellers seeking a credible buyer, brokers and agents who want a repeat partner that closes, and capital partners who want deal-level investment access.</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Property Sellers", "Business Sellers", "Brokers & Agents", "Capital Partners", "JV Investors"].map((a) => (
                  <span key={a} className="text-xs font-medium text-yellow-300/90 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1">{a}</span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/ahmadqawasmeh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors group"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  Connect on LinkedIn
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <span className="text-gray-700 text-sm hidden sm:inline">&bull;</span>
                <a
                  href="https://www.facebook.com/people/Marss-Real-Estate/61590642727358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors group"
                >
                  <Facebook className="h-4 w-4 shrink-0" />
                  Marss Real Estate on Facebook
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
