"use client";

import { Navbar } from "@/navbar";
import { Hero } from "@/hero";
import { About } from "@/about";
import { Strategy } from "@/strategy";
import { CreativeFinancing } from "@/creative-financing";
import { BuyBox } from "@/buy-box";
import { Process } from "@/process";
import { Advisory } from "@/advisory";
import { BrokerPartner } from "@/broker-partner";
import { ForAgents } from "@/for-agents";
import { Testimonials } from "@/testimonials";
import { Contact } from "@/contact";
import { EmailOptin } from "@/email-optin";
import { Footer } from "@/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Strategy />
      <CreativeFinancing />
      <BuyBox />
      <Process />
      <Advisory />
      <BrokerPartner />
      <ForAgents />
      <Testimonials />
      <Contact />
      <EmailOptin />
      <Footer />
    </main>
  );
}
