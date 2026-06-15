import dynamic from "next/dynamic";
import { Navbar } from "@/navbar";
import { Hero } from "@/hero";
import { About } from "@/about";
import { SellerPaths } from "@/seller-paths";
import { BusinessAcquisition } from "@/business-acquisition";

const Strategy = dynamic(() => import("@/strategy").then((m) => m.Strategy));
const CreativeFinancing = dynamic(() => import("@/creative-financing").then((m) => m.CreativeFinancing));
const BuyBox = dynamic(() => import("@/buy-box").then((m) => m.BuyBox));
const Process = dynamic(() => import("@/process").then((m) => m.Process));
const Advisory = dynamic(() => import("@/advisory").then((m) => m.Advisory));
const BrokerPartner = dynamic(() => import("@/broker-partner").then((m) => m.BrokerPartner));
const JvPartners = dynamic(() => import("@/jv-partners").then((m) => m.JvPartners));
const Testimonials = dynamic(() => import("@/testimonials").then((m) => m.Testimonials));
const Contact = dynamic(() => import("@/contact").then((m) => m.Contact));
const EmailOptin = dynamic(() => import("@/email-optin").then((m) => m.EmailOptin));
const Footer = dynamic(() => import("@/footer").then((m) => m.Footer));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <SellerPaths />
      <BusinessAcquisition />
      <Strategy />
      <CreativeFinancing />
      <BuyBox />
      <Process />
      <Advisory />
      <BrokerPartner />
      <JvPartners />
      <Testimonials />
      <Contact />
      <EmailOptin />
      <Footer />
    </main>
  );
}
