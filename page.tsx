"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Strategy } from "@/components/strategy";
import { BuyBox } from "@/components/buy-box";
import { Process } from "@/components/process";
import { ForAgents } from "@/components/for-agents";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Strategy />
      <BuyBox />
      <Process />
      <ForAgents />
      <Contact />
      <Footer />
    </main>
  );
}
