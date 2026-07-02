"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Phone, Mail } from "lucide-react";

const company = [
  { label: "About", href: "/#about" },
  { label: "Our Approach", href: "/#strategy" },
  { label: "Buy Box", href: "/#buy-box" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

const audiences = [
  { label: "For Sellers", href: "/#sellers" },
  { label: "For Brokers & Agents", href: "/#for-brokers" },
  { label: "Invest & Partner", href: "/#jv-partners" },
  { label: "Advisory", href: "/#advisory" },
  { label: "Submit a Deal", href: "/#contact" },
];

const resources = [
  { label: "All Resources", href: "/resources" },
  { label: "Equity Carry Guide", href: "/resources/equity-carry-guide" },
  { label: "Gas Stations", href: "/acquisitions/gas-stations" },
  { label: "Car Washes", href: "/acquisitions/car-washes" },
  { label: "Multi-Family", href: "/acquisitions/multifamily" },
];

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg"
                alt="Marss Real Estate"
                width={40}
                height={40}
                className="h-10 w-10 object-contain rounded"
              />
              <div>
                <div className="text-white font-bold tracking-widest text-sm">
                  MARSS REAL ESTATE
                </div>
                <div className="text-yellow-500 text-xs">
                  Private Equity &amp; Real Estate Investment Group
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-5">
              Active acquirer of commercial real estate and essential operating
              businesses across Texas and the Sunbelt, using creative capital
              structures built around verified cash flow.
            </p>
            <div className="space-y-2">
              <a href="tel:9727796787" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                <Phone className="h-3.5 w-3.5" /> 972.779.6787
              </a>
              <a href="mailto:support@marssrealestate.com" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                <Mail className="h-3.5 w-3.5" /> support@marssrealestate.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a href="https://www.linkedin.com/in/ahmadqawasmeh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-yellow-400 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590642727358" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-yellow-400 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div>
            <div className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Company</div>
            <ul className="space-y-2.5">
              {company.map((l) => (
                <li key={l.label}><a href={l.href} className="text-gray-500 hover:text-gray-200 text-sm transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Who We Serve</div>
            <ul className="space-y-2.5">
              {audiences.map((l) => (
                <li key={l.label}><a href={l.href} className="text-gray-500 hover:text-gray-200 text-sm transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Resources</div>
            <ul className="space-y-2.5">
              {resources.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-gray-500 hover:text-gray-200 text-sm transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Credibility / registration block — populate placeholders when available */}
        <div className="section-divider mb-6" />
        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-xs">
          <div className="rounded-lg border border-[#161616] bg-[#0b0b0b] px-4 py-3">
            <div className="text-gray-600 font-bold tracking-widest uppercase mb-1">Entity</div>
            <div className="text-gray-500">ARMSS LLC — a subsidiary of Marss LLC</div>
          </div>
          <div className="rounded-lg border border-[#161616] bg-[#0b0b0b] px-4 py-3">
            <div className="text-gray-600 font-bold tracking-widest uppercase mb-1">Registration / EIN</div>
            <div className="text-gray-500">Texas Registered Company</div>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-3 mb-8">
          <p className="text-gray-600 text-xs leading-relaxed">
            <span className="text-gray-500 font-semibold">General information only.</span>{" "}
            The content on this website is provided for general educational purposes and does not
            constitute financial, legal, investment, or tax advice. It is not an offer to sell, or a
            solicitation of an offer to buy, any security. No result, return, or outcome is promised
            or guaranteed. Consult your own attorney, CPA, and financial advisor before making any decision.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            <span className="text-gray-500 font-semibold">Not a licensed real estate brokerage.</span>{" "}
            Marss Real Estate is a private equity and real estate investment group that acquires
            assets for its own account. It does not provide brokerage services or represent buyers
            or sellers as a licensed real estate broker or agent.
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            <span className="text-gray-500 font-semibold">Equal Opportunity.</span>{" "}
            Marss Real Estate supports the Fair Housing Act and equal opportunity. We do not
            discriminate on the basis of race, color, religion, sex, disability, familial status,
            national origin, or any other protected class.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Marss Real Estate. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Frisco, Texas · Sunbelt Markets · Commercial &amp; Business Acquisitions
          </p>
        </div>
      </div>
    </footer>
  );
}
