"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Feather, ShieldCheck, Sparkles } from "lucide-react";

export default function PhilosophySection() {
  const pillars = [
    {
      icon: Sun,
      number: "01",
      title: "Temporal Lighting",
      description:
        "Every floorplan begins with solar path tracing. We sculpt apertures and drapery so that changing daylight breathes dynamic emotion into the architecture from dawn till dusk.",
      tag: "SOLAR CHOREOGRAPHY",
    },
    {
      icon: Feather,
      number: "02",
      title: "Tactile Materiality",
      description:
        "We source unhoned Italian travertine, solid European smoked oak, and natural Belgian bouclé that age with dignity—surfaces that invite physical touch and awaken sensory calm.",
      tag: "HONEST TEXTURES",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Spatial Stillness",
      description:
        "True luxury is acoustic peace. Behind clean minimalist plaster lies decoupled wall assemblies, concealed sound-absorbing baffles, and pure, uninterrupted quietude.",
      tag: "ACOUSTIC SANCTUARY",
    },
  ];

  return (
    <section id="philosophy" className="relative py-32 px-6 md:px-12 bg-[#0a0a0a] text-zinc-100 border-t border-zinc-800/60 overflow-hidden">
      {/* Subtle ambient lighting blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-amber-200/30 bg-amber-500/5 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-200/90">
            <Sparkles className="w-3 h-3 text-amber-200" />
            STUDIO PHILOSOPHY
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-100 leading-[1.15] mb-8">
            “Architecture is not merely the construction of walls, but the{" "}
            <span className="italic text-amber-200/90 font-normal">orchestration of daylight</span>, shadow, and quiet contemplation.”
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Atelier Living rejects transient interior trends. We design architectural residences as living organisms that respond to climate, daylight, and the private rituals of those who dwell within.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 md:p-10 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-amber-200/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-amber-200/80">
                      [{pillar.number}]
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-200 mb-6 group-hover:scale-110 group-hover:border-amber-200/50 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl text-zinc-100 font-normal mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>ATELIER STANDARD</span>
                  <span>VERIFIED 2026</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Numbers / Proof Bar */}
        <div className="p-8 md:p-12 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          <div className="pt-4 lg:pt-0">
            <div className="font-serif text-4xl md:text-5xl text-zinc-100 font-light mb-1">
              48
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              Private Sanctuaries Built
            </div>
          </div>
          <div className="pt-4 lg:pt-0">
            <div className="font-serif text-4xl md:text-5xl text-amber-200/90 font-light mb-1">
              14
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              Global Design Accolades
            </div>
          </div>
          <div className="pt-4 lg:pt-0">
            <div className="font-serif text-4xl md:text-5xl text-zinc-100 font-light mb-1">
              100%
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              Bespoke Artisan Joinery
            </div>
          </div>
          <div className="pt-4 lg:pt-0">
            <div className="font-serif text-4xl md:text-5xl text-amber-200/90 font-light mb-1">
              -34<span className="text-2xl">dB</span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              Average Acoustic Quietude
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
