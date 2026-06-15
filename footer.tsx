"use client";

import Image from "next/image";

const links = {
  "For You": ["For Sellers", "For Brokers", "Invest & Partner", "Advisory"],
  Company: ["About", "Our Approach", "Buy Box", "How It Works"],
  Connect: ["Submit a Deal", "Contact"],
};

export function Footer() {
  const anchorMap: Record<string, string> = {
    "For Sellers": "#sellers",
    "For Brokers": "#for-brokers",
    "Invest & Partner": "#jv-partners",
    Advisory: "#advisory",
    About: "#about",
    "Our Approach": "#strategy",
    "Buy Box": "#buy-box",
    "How It Works": "#process",
    "Submit a Deal": "#contact",
    Contact: "#contact",
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
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
                <div className="text-white font-bold tracking-widest text-sm">MARSS REAL ESTATE</div>
                <div className="text-yellow-500 text-xs">Serious Capital. Creative Structures. Deals That Close.</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A real estate and business acquisition firm actively acquiring commercial real estate and essential operating businesses across the Sunbelt — with multiple structures to close on your terms.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              <span className="text-gray-600 text-xs">972.779.6787</span>
              <span className="text-gray-600 text-xs">support@marssrealestate.com</span>
            </div>
            <p className="text-gray-700 text-xs mt-4 italic">
              For discussion purposes only — not an offer to sell securities. Consult a licensed financial and legal advisor before making investment decisions.
            </p>
          </div>
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">{group}</div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={anchorMap[item] ?? `#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-500 hover:text-gray-200 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Marss Real Estate. All rights reserved. · Frisco, Texas</p>
          <p className="text-gray-700 text-xs">Sellers · Brokers · Investors · Advisory Partners</p>
        </div>
      </div>
    </footer>
  );
}
