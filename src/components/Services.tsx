"use client";

import {
  Home,
  Building2,
  Bath,
  Palette,
  Ruler,
  Armchair,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description:
      "Full-service interior design for luxury homes, from concept to completion. We create living spaces that reflect your unique lifestyle with meticulous attention to detail.",
  },
  {
    icon: Building2,
    title: "Commercial Design",
    description:
      "Sophisticated environments for boutique hotels, restaurants, corporate offices, and retail spaces that leave lasting impressions on every visitor.",
  },
  {
    icon: Bath,
    title: "Kitchen & Bath",
    description:
      "Bespoke kitchen and bathroom design combining premium materials, expert craftsmanship, and timeless aesthetics for the most essential rooms in your home.",
  },
  {
    icon: Palette,
    title: "Color Consulting",
    description:
      "Expert color analysis and palette development to establish the perfect mood and cohesion throughout your entire space with intentional chromatic harmony.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description:
      "Strategic spatial design that optimizes flow, function, and proportion. We transform underutilized areas into purposeful, beautifully balanced environments.",
  },
  {
    icon: Armchair,
    title: "Home Staging",
    description:
      "Curated staging that showcases your property at its finest. Our approach highlights architectural features and creates aspirational lifestyle vignettes.",
  },
];

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-brass" />
            <span className="text-brass text-xs tracking-[0.4em] uppercase font-medium">
              What We Do
            </span>
            <div className="h-px w-12 bg-brass" />
          </div>
          <h2
            className={`font-serif text-4xl md:text-5xl font-medium text-charcoal leading-tight mb-6 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Our Design Services
          </h2>
          <p className="text-charcoal-muted font-light leading-relaxed">
            From initial concept to final reveal, we offer a comprehensive suite
            of interior design services tailored to your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Brass accent line */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-brass transition-all duration-500 group-hover:w-full" />

              <service.icon className="h-8 w-8 text-brass mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-serif text-xl font-medium text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal-muted font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
