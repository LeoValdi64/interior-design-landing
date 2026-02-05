"use client";

import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-charcoal">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-brass/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] border border-brass/5 rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-brass" />
            <span className="text-brass-light text-xs tracking-[0.4em] uppercase font-light">
              Los Angeles, California
            </span>
            <div className="h-px w-12 bg-brass" />
          </div>
        </div>

        <h1 className="animate-fade-in-up font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] mb-6">
          Spaces That
          <br />
          <span className="text-brass-light italic">Inspire</span>
        </h1>

        <p className="animate-fade-in-up delay-200 text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Where refined aesthetics meet purposeful design. We craft extraordinary
          interiors that elevate the way you live, work, and gather.
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group bg-brass px-10 py-4 text-sm font-medium tracking-wider uppercase text-white transition-all duration-300 hover:bg-brass-dark"
          >
            Book a Consultation
          </a>
          <a
            href="#portfolio"
            className="border border-white/30 px-10 py-4 text-sm font-medium tracking-wider uppercase text-white transition-all duration-300 hover:border-brass hover:text-brass"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" aria-label="Scroll to services">
          <ArrowDown className="h-5 w-5 text-brass-light" />
        </a>
      </div>
    </section>
  );
}
