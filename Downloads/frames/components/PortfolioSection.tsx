"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, MapPin, Maximize2, Layers, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Living" | "Dining" | "Bedroom" | "Lounge";
  location: string;
  year: string;
  area: string;
  image: string;
  materials: string[];
  lighting: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: "living-zurich",
    title: "The Travertine Living Pavilion",
    subtitle: "Floor-to-ceiling glass sanctuary with flowing morning breeze",
    category: "Living",
    location: "Zurich, Switzerland",
    year: "2026",
    area: "340 m² / 3,660 sq ft",
    image: "/portfolio/living.jpg",
    materials: ["Roman Navona Travertine", "Smoked Oak Joinery", "Belgian Natural Linen", "Honed Bronze"],
    lighting: "Concealed perimeter LED cove & Viabizzuno architectural wash",
    description:
      "A monumental living pavilion oriented along the southern solar trajectory. Floor-to-ceiling minimal frame glazing opens to the forest terrace, letting morning breezes billow custom sheer drapery across handcrafted bouclé seating.",
  },
  {
    id: "dining-como",
    title: "Villa Solarium Dining Suite",
    subtitle: "Sculptural travertine table framed by misty woodland vistas",
    category: "Dining",
    location: "Lake Como, Italy",
    year: "2025",
    area: "185 m² / 1,990 sq ft",
    image: "/portfolio/dining.jpg",
    materials: ["Solid Honed Travertine", "Smoked Oak Armchairs", "Satin Brass Halo", "Textured Limewash"],
    lighting: "Custom minimalist circular brass pendant with calibrated 2400K warm glow",
    description:
      "A masterclass in tactile entertaining. A monolithic travertine dining slab anchors the room, illuminated by a custom ring pendant designed to cast warm candlelight levels of illumination onto hand-thrown ceramic dinnerware.",
  },
  {
    id: "bedroom-kyoto",
    title: "The Kyoto Zen Bedroom Suite",
    subtitle: "Low-profile linen platform bed bathed in diffuse dawn daylight",
    category: "Bedroom",
    location: "Higashiyama, Kyoto",
    year: "2025",
    area: "210 m² / 2,260 sq ft",
    image: "/portfolio/bedroom.jpg",
    materials: ["Raw Woven Belgian Linen", "Alabaster Sconces", "Hinoki Wood Trim", "Hand-troweled Plaster"],
    lighting: "Translucent alabaster cylinder lamps & floor-level low glare step wash",
    description:
      "Engineered for deep sensory restoration. Low-profile furniture keeps the visual horizon calm, while continuous textured linen drapery diffuses sunlight into an ethereal, warm amber morning glow.",
  },
  {
    id: "lounge-tribeca",
    title: "Tribeca Smoked Oak Lounge",
    subtitle: "Curved bouclé reading chair beside charcoal fireplace and library",
    category: "Lounge",
    location: "Manhattan, New York",
    year: "2026",
    area: "160 m² / 1,720 sq ft",
    image: "/portfolio/lounge.jpg",
    materials: ["Charcoal Basalt Hearth", "Custom Smoked French Oak", "Bouclé Wool", "Solid Aged Brass"],
    lighting: "Aged brass arch dome lamp and integrated bookshelf micro-ribbon LEDs",
    description:
      "A secluded intellectual retreat in the heart of downtown. Deep smoked oak joinery houses a rare art book collection, accented by a linear gas fireplace framed in flamed basalt stone.",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Living", "Dining", "Bedroom", "Lounge"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const scrollToInquiry = () => {
    setSelectedProject(null);
    const el = document.getElementById("inquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="relative py-32 px-6 md:px-12 bg-[#0a0a0a] text-zinc-100 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-amber-200/30 bg-amber-500/5 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-200/90">
              SELECTED PORTFOLIO
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-zinc-100">
              Complementary Spaces
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light mt-2 max-w-xl">
              Explore living rooms, dining suites, and private bedroom sanctuaries created for discerning clients across Europe, Asia, and North America.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-amber-200 text-zinc-950 font-medium"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950/60 hover:border-amber-200/50 transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Corner Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-zinc-700/60 text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-amber-200 group-hover:border-amber-200/50 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Location */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-200" />
                    <span>{project.location}</span>
                  </div>
                  <span className="text-zinc-400">{project.year}</span>
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl text-zinc-100 font-normal group-hover:text-amber-100 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                    {project.subtitle}
                  </p>
                </div>

                {/* Materials Tags */}
                <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center gap-2">
                  {project.materials.slice(0, 3).map((mat) => (
                    <span
                      key={mat}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-400"
                    >
                      {mat}
                    </span>
                  ))}
                  <span className="text-[10px] font-mono text-amber-200/80 ml-auto flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Specs <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Inspector */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 md:p-10 text-zinc-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8 bg-zinc-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-200 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedProject.location} · {selectedProject.year}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-zinc-100 font-normal">
                    {selectedProject.title}
                  </h3>
                  <div className="text-zinc-400 text-xs font-mono mt-1">
                    SURFACE AREA: {selectedProject.area}
                  </div>
                </div>

                <button
                  onClick={scrollToInquiry}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-200 text-zinc-950 font-medium text-xs font-mono tracking-wider hover:bg-amber-100 transition-all"
                >
                  <span>Inquire for Similar Space</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              {/* Architectural Specs Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-200/90 mb-3">
                    <Layers className="w-4 h-4" />
                    Curated Materials
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.materials.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-200/90 mb-3">
                    <Layers className="w-4 h-4" />
                    Lighting Choreography
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {selectedProject.lighting}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
