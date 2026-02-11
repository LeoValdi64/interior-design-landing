"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Victoria Harrington",
    role: "Homeowner, Pacific Palisades",
    text: "Atelier Luxe completely transformed our home beyond anything we could have imagined. Their ability to blend modern sophistication with warmth and livability is truly unmatched. Every room tells a story.",
    rating: 5,
  },
  {
    name: "James & Elise Whitmore",
    role: "Homeowners, Beverly Hills",
    text: "From the very first consultation, we knew we were in extraordinary hands. The team listened intently to our vision and delivered a penthouse that feels both grand and intimately personal. Impeccable taste.",
    rating: 5,
  },
  {
    name: "Michael Thornton",
    role: "CEO, Thornton Hospitality Group",
    text: "They designed our boutique hotel lobby and restaurant spaces with incredible attention to the guest experience. The result has been featured in Architectural Digest. Simply world-class work.",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "Homeowner, Brentwood",
    text: "Our kitchen renovation was flawless from start to finish. Atelier Luxe sourced the most beautiful Calacatta marble and custom cabinetry. It has become the heart of our home and the envy of every guest.",
    rating: 5,
  },
  {
    name: "David Castellano",
    role: "Real Estate Developer",
    text: "We have partnered with Atelier Luxe on multiple staging projects and the results speak for themselves. Properties sell faster and for significantly more. Their eye for what buyers want is unparalleled.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-cream"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-brass" />
            <span className="text-brass text-xs tracking-[0.4em] uppercase font-medium">
              Client Stories
            </span>
            <div className="h-px w-12 bg-brass" />
          </div>
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal leading-tight ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Words from Our Clients
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`max-w-4xl mx-auto ${
            isInView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="relative bg-white p-6 sm:p-10 md:p-16">
            {/* Quote Icon */}
            <Quote className="h-12 w-12 text-brass/20 mb-8" />

            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-brass text-brass"
                />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed mb-10 min-h-[100px] sm:min-h-[120px]">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-serif text-lg font-medium text-charcoal">
                  {testimonial.name}
                </div>
                <div className="text-charcoal-muted text-sm font-light mt-1">
                  {testimonial.role}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 border border-cream-medium flex items-center justify-center transition-all duration-300 hover:border-brass hover:text-brass"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 border border-cream-medium flex items-center justify-center transition-all duration-300 hover:border-brass hover:text-brass"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Brass accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brass-dark via-brass to-brass-light" />
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brass w-8"
                    : "bg-cream-medium hover:bg-brass/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
