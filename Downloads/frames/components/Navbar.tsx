"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Residences", href: "#sequence" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Selected Works", href: "#portfolio" },
    { name: "Materiality", href: "#materials" },
    { name: "Inquire", href: "#inquiry" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-800/80 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Studio Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 text-zinc-100 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-amber-200/40 flex items-center justify-center text-amber-200 font-serif text-sm group-hover:border-amber-200 transition-colors">
              AL
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.22em] text-sm md:text-base font-medium text-zinc-100 group-hover:text-amber-100 transition-colors">
                ATELIER LIVING
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400">
                Interior Architecture
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-amber-200 transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action / CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#inquiry"
              onClick={(e) => handleSmoothScroll(e, "#inquiry")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-200/30 bg-amber-500/10 hover:bg-amber-200 hover:text-zinc-950 text-amber-200 text-xs font-mono tracking-wider transition-all duration-300"
            >
              <span>Private Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-zinc-300 hover:text-amber-200 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-28 px-8 bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col justify-between pb-12 lg:hidden border-b border-zinc-800"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                Directory
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="font-serif text-3xl font-light tracking-wide text-zinc-200 hover:text-amber-200 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-zinc-800 flex flex-col gap-4">
              <a
                href="#inquiry"
                onClick={(e) => handleSmoothScroll(e, "#inquiry")}
                className="w-full text-center py-4 rounded-full bg-amber-200 text-zinc-950 font-medium text-sm tracking-wide"
              >
                Schedule Consultation
              </a>
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-500">
                <span>ZURICH · MILAN · NEW YORK</span>
                <span>© 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
