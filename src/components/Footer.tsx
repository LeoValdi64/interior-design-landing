"use client";

import { Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Residential Design", href: "#services" },
    { label: "Commercial Design", href: "#services" },
    { label: "Kitchen & Bath", href: "#services" },
    { label: "Color Consulting", href: "#services" },
    { label: "Space Planning", href: "#services" },
    { label: "Home Staging", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="group inline-flex flex-col mb-6">
              <span className="font-serif text-xl font-semibold tracking-wider text-white">
                ATELIER LUXE
              </span>
              <span className="text-[10px] font-light tracking-[0.35em] uppercase text-brass">
                Interiors
              </span>
            </a>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8 max-w-xs">
              Los Angeles&apos; premier luxury interior design studio. Crafting
              extraordinary spaces since 2008.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 hover:border-brass hover:text-brass"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm font-light hover:text-brass transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm font-light hover:text-brass transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-6">
              Design Inspiration
            </h4>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
              Subscribe to receive curated design inspiration, project
              highlights, and studio news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border-b border-white/20 py-2.5 text-white text-sm font-light focus:outline-none focus:border-brass transition-colors duration-300 placeholder:text-white/30"
              />
              <button
                type="submit"
                className="ml-3 text-brass hover:text-brass-light transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowUp className="h-4 w-4 rotate-45" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light tracking-wider">
            {new Date().getFullYear()} Atelier Luxe Interiors. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/30 text-xs font-light tracking-wider hover:text-brass transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/30 text-xs font-light tracking-wider hover:text-brass transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        className="fixed bottom-8 right-8 w-12 h-12 bg-brass flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:bg-brass-dark hover:-translate-y-1 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </footer>
  );
}
