"use client";

/**
 * Reusable compliance disclaimers.
 * <AdviceDisclaimer /> — general "not advice" block for any section that
 * discusses deal structures, financing, or seller/investor outcomes.
 */
export function AdviceDisclaimer({
  variant = "block",
}: {
  variant?: "block" | "inline";
}) {
  const text =
    "The information provided on this website is for general informational and educational purposes only and does not constitute financial, investment, legal, accounting, or tax advice. Nothing herein is an offer to sell, a solicitation of an offer to buy, or a recommendation of any security, investment, or financial product; any such offer or solicitation will be made only through definitive transaction documents and in compliance with applicable law. Any structures described are illustrative only, and actual terms depend on the specific transaction and are subject to due diligence, negotiation, and definitive written agreements. Marss Real Estate is a private equity and real estate investment group and is not a licensed real estate brokerage, investment adviser, or law or accounting firm. No result, return, or outcome is promised or guaranteed, and past performance is not indicative of future results. You should consult your own attorney, certified public accountant, and financial advisor before making any decision. Marss Real Estate makes no representations or warranties as to the accuracy or completeness of any information on this website and assumes no liability for any reliance placed on it.";

  if (variant === "inline") {
    return (
      <p className="text-gray-400 text-xs leading-relaxed italic">{text}</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-14 rounded-xl border border-[#1a1a1a] bg-[#0b0b0b] px-6 py-5">
      <div className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
        Important Disclaimer
      </div>
      <p className="text-gray-400 text-xs leading-relaxed">{text}</p>
    </div>
  );
}
