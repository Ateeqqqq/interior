import React from "react";
import Navbar from "@/components/Navbar";
import InteriorCanvasScroll from "@/components/InteriorCanvasScroll";
import PhilosophySection from "@/components/PhilosophySection";
import PortfolioSection from "@/components/PortfolioSection";
import MaterialitySection from "@/components/MaterialitySection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-amber-200/20 selection:text-amber-100">
      {/* Editorial Floating Navbar */}
      <Navbar />

      {/* Main Feature: 400vh Scroll-Linked Canvas Scrollytelling Experience */}
      <section id="sequence" className="relative w-full">
        <InteriorCanvasScroll />
      </section>

      {/* Philosophy & Architectural Ethos */}
      <PhilosophySection />

      {/* Selected Portfolio of Complementary Spaces */}
      <PortfolioSection />

      {/* Interactive Tactile Materiality & Finishes Explorer */}
      <MaterialitySection />

      {/* Private Commission Inquiry & Consultation */}
      <InquirySection />

      {/* Editorial Consultation Footer */}
      <Footer />
    </main>
  );
}
