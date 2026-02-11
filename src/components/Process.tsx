"use client";

import { ClipboardList, PenTool, Hammer, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Discovery",
    description:
      "We begin with an in-depth consultation to understand your lifestyle, aesthetic preferences, and vision for the space. Every detail matters.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design Concept",
    description:
      "Our team develops comprehensive mood boards, floor plans, material palettes, and 3D renderings that bring your vision to life before construction begins.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Implementation",
    description:
      "We manage every aspect of procurement, custom fabrication, and installation with precision. Our trusted artisans and contractors ensure flawless execution.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "The Reveal",
    description:
      "The moment everything comes together. We style every surface, fluff every pillow, and ensure your space exceeds every expectation you held.",
  },
];

export function Process() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="py-24 md:py-32 bg-cream-dark" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-brass" />
            <span className="text-brass text-xs tracking-[0.4em] uppercase font-medium">
              How We Work
            </span>
            <div className="h-px w-12 bg-brass" />
          </div>
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal leading-tight mb-6 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Our Design Process
          </h2>
          <p className="text-charcoal-muted font-light leading-relaxed">
            A refined four-step journey from initial inspiration to the final
            unveiling of your transformed space.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-brass/30" />
              )}

              <div className="text-center">
                {/* Icon Container */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                  <div className="absolute inset-0 border border-brass/20 rounded-full" />
                  <div className="absolute inset-2 border border-brass/10 rounded-full" />
                  <step.icon className="h-8 w-8 text-brass" />
                </div>

                {/* Step Number */}
                <div className="text-brass/40 font-serif text-5xl font-bold mb-4">
                  {step.number}
                </div>

                <h3 className="font-serif text-xl font-medium text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-charcoal-muted font-light text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
