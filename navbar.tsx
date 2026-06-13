"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/button";
import { cn } from "@/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#advisory", label: "Advisory" },
  { href: "#for-brokers", label: "For Brokers" },
  { href: "#strategy", label: "Strategy" },
  { href: "#buy-box", label: "Buy Box" },
  { href: "#process", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-yellow-900/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://galaxy-prod.tlcdn.com/gen/user_372EAGt89yD821sKcMySYfKrZna/e9ff5e89-f497-406d-a231-3ce92bbf61ab.jpg"
              alt="Marss Real Estate"
              className="h-11 w-11 object-contain rounded"
            />
            <div>
              <div className="text-white font-bold text-base tracking-widest leading-tight">
                MARSS
              </div>
              <div className="text-yellow-500 text-xs tracking-[0.2em] font-medium">
                REAL ESTATE
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-yellow-400 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold tracking-wide px-5"
              >
                Submit a Deal
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-5 border-t border-gray-800 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2.5 px-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                Submit a Deal
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
