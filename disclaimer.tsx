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
    "The information on this website is provided for general educational purposes only and does not constitute financial, legal, investment, or tax advice. It is not an offer to sell, or a solicitation of an offer to buy, any security. Every transaction is different; outcomes depend on the specific asset, structure, and facts involved. No result, return, or outcome is promised or guaranteed. Sellers, brokers, and investors should consult their own attorney, CPA, and financial advisor before making any decision.";

  if (variant === "inline") {
    return (
      <p className="text-gray-600 text-xs leading-relaxed italic">{text}</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-14 rounded-xl border border-[#1a1a1a] bg-[#0b0b0b] px-6 py-5">
      <div className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
        Important Disclaimer
      </div>
      <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
    </div>
  );
}
