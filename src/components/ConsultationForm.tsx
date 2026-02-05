"use client";

import { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const serviceOptions = [
  "Residential Design",
  "Commercial Design",
  "Kitchen & Bath",
  "Color Consulting",
  "Space Planning",
  "Home Staging",
];

export function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-brass" />
            <span className="text-brass text-xs tracking-[0.4em] uppercase font-medium">
              Get in Touch
            </span>
            <div className="h-px w-12 bg-brass" />
          </div>
          <h2
            className={`font-serif text-4xl md:text-5xl font-medium text-white leading-tight mb-6 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Begin Your Design Journey
          </h2>
          <p className="text-white/60 font-light leading-relaxed">
            Schedule a complimentary consultation and let us discover how we can
            transform your space into something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 ${
              isInView ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-2xl font-medium text-white mb-8">
                  Visit Our Studio
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-brass mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-light">
                        8432 Melrose Avenue, Suite 200
                      </p>
                      <p className="text-white/60 font-light">
                        Los Angeles, CA 90069
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-brass flex-shrink-0" />
                    <a
                      href="tel:+13105550147"
                      className="text-white font-light hover:text-brass transition-colors duration-300"
                    >
                      (310) 555-0147
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-brass flex-shrink-0" />
                    <a
                      href="mailto:hello@atelierluxeinteriors.com"
                      className="text-white font-light hover:text-brass transition-colors duration-300"
                    >
                      hello@atelierluxeinteriors.com
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-brass mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-light">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-white/60 font-light">
                        Sat: By Appointment Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:block">
                <div className="w-full h-px bg-white/10 my-8" />
                <p className="text-white/40 text-sm font-light italic leading-relaxed">
                  &ldquo;Design is not just what it looks like and feels like.
                  Design is how it works.&rdquo;
                </p>
                <p className="text-brass/60 text-sm font-light mt-2">
                  &mdash; Steve Jobs
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 ${
              isInView ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            {isSubmitted ? (
              <div className="bg-charcoal-light border border-brass/20 p-16 text-center">
                <CheckCircle className="h-16 w-16 text-brass mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-white mb-4">
                  Thank You
                </h3>
                <p className="text-white/60 font-light">
                  We have received your inquiry and will be in touch within 24
                  hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/80 text-sm font-light tracking-wider uppercase mb-3"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-brass transition-colors duration-300 placeholder:text-white/30"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/80 text-sm font-light tracking-wider uppercase mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-brass transition-colors duration-300 placeholder:text-white/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white/80 text-sm font-light tracking-wider uppercase mb-3"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-brass transition-colors duration-300 placeholder:text-white/30"
                      placeholder="(310) 555-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-white/80 text-sm font-light tracking-wider uppercase mb-3"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-brass transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-charcoal">
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-charcoal"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 text-sm font-light tracking-wider uppercase mb-3"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light focus:outline-none focus:border-brass transition-colors duration-300 placeholder:text-white/30 resize-none"
                    placeholder="Describe your vision, timeline, and any inspiration..."
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 bg-brass px-12 py-4 text-sm font-medium tracking-wider uppercase text-white transition-all duration-300 hover:bg-brass-dark flex items-center gap-3"
                >
                  Request Consultation
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
