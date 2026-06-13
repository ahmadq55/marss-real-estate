"use client";

const links = {
  Company: ["About", "Strategy", "Buy Box", "How It Works"],
  Services: ["Advisory", "For Brokers", "For Agents", "Submit a Deal"],
};

export function Footer() {
  const anchorMap: Record<string, string> = {
    Advisory: "#advisory",
    "For Brokers": "#for-brokers",
    "For Agents": "#for-agents",
    "Submit a Deal": "#contact",
    About: "#about",
    Strategy: "#strategy",
    "Buy Box": "#buy-box",
    "How It Works": "#process",
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg"
                alt="Marss Real Estate"
                className="h-10 w-10 object-contain rounded"
              />
              <div>
                <div className="text-white font-bold tracking-widest text-sm">
                  MARSS REAL ESTATE
                </div>
                <div className="text-yellow-500 text-xs">
                  Transforming Property Into Possibilities
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A real estate and business-backed investment firm specializing in
              Equity Carry Financing for value-add commercial and multi-family
              acquisitions.
            </p>
            <p className="text-gray-600 text-xs mt-4 italic">
              For discussion purposes only — not an offer to sell securities.
              Consult a licensed financial and legal advisor before making
              investment decisions.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {group}
              </div>
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

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Marss Real Estate. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Structured Finance · Equity Carry · Value-Add Acquisitions
          </p>
        </div>
      </div>
    </footer>
  );
}
