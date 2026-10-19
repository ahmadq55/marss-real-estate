import type { Metadata } from "next";
import { NetworkLanding } from "@/components/network-landing";
export const metadata: Metadata = {
  title: "Wholesaler Registration | Marss Real Estate",
  description: "Join the Marss Real Estate wholesaler network. Share your markets, asset focus, and seller relationships.",
  alternates: { canonical: "https://marssrealestate.com/wholesaler-registration" },
};
export default function Page() { return <NetworkLanding kind="wholesalers" />; }
