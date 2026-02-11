"use client";

import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "Pacific Palisades Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Nobu Malibu Suite",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Beverly Hills Penthouse",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Melrose Design Studio",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Brentwood Estate Kitchen",
    category: "Kitchen & Bath",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Santa Monica Loft",
    category: "Staging",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  },
];

export function Portfolio() {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-charcoal" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-brass" />
            <span className="text-brass text-xs tracking-[0.4em] uppercase font-medium">
              Portfolio
            </span>
            <div className="h-px w-12 bg-brass" />
          </div>
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-6 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Selected Projects
          </h2>
          <p className="text-white/60 font-light leading-relaxed">
            A curated collection of our most distinguished work across
            residential, commercial, and hospitality design.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative aspect-[4/5] overflow-hidden cursor-pointer ${
                isInView ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-brass text-xs tracking-[0.3em] uppercase font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-light opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span>View Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
