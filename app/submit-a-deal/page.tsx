import type { Metadata } from "next";
import { NetworkLanding } from "@/components/network-landing";
export const metadata: Metadata = {
  title: "Submit a Deal | Marss Real Estate",
  description: "Submit a residential, multifamily, commercial, or business and real estate opportunity for review.",
  alternates: { canonical: "https://marssrealestate.com/submit-a-deal" },
};
export default function Page() { return <NetworkLanding kind="deals" />; }
