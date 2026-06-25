"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const resources = [
  { label: "VIP Algo Trading Indicators", href: "https://321997590gs9mlj89dndotfvft.hop.clickbank.net", tag: "Investors" },
  { label: "Grant & Free Capital Finder", href: "https://6a89466x-9dcjnlkhn4ashlefn.hop.clickbank.net", tag: "Free Capital" },
  { label: "RE Career & Deal Prep Suite", href: "https://12a7ec05z4idkkh8w6-im01p5i.hop.clickbank.net", tag: "Education" },
  { label: "GnosisFi — Financial Intelligence", href: "https://042a2641pdr8pmh4x807v1uy0v.hop.clickbank.net", tag: "Tools" },
];

export function ResourceStrip() {
  return (
    <div className="bg-[#060606] border-y border-[#131313] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="text-gray-600 text-[10px] font-bold tracking-[0.2em] uppercase shrink-0 hidden sm:inline">
            Recommended Tools
          </span>
          {resources.map((r, i) => (
            <a
              key={i}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 group"
            >
              <span className="text-yellow-600/50 text-[10px] font-bold uppercase tracking-wider hidden md:inline">{r.tag}</span>
              <span className="text-gray-600 hidden md:inline">·</span>
              <span className="text-gray-400 text-xs hover:text-yellow-400 transition-colors group-hover:underline underline-offset-2">
                {r.label}
              </span>
              <ArrowRight className="h-2.5 w-2.5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
          <Link
            href="/resources"
            className="text-yellow-500/60 hover:text-yellow-400 text-xs transition-colors font-medium"
          >
            All Resources →
          </Link>
        </div>
      </div>
    </div>
  );
}
