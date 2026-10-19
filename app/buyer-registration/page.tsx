import type { Metadata } from "next";
import { NetworkLanding } from "@/components/network-landing";
export const metadata: Metadata = {
  title: "Buyer Registration | Marss Real Estate",
  description: "Register your target markets, asset classes, budget, and financing preferences with Marss Real Estate.",
  alternates: { canonical: "https://marssrealestate.com/buyer-registration" },
};
export default function Page() { return <NetworkLanding kind="buyers" />; }
