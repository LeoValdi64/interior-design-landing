"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex flex-col">
            <span
              className={`font-serif text-xl font-semibold tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}
            >
              ATELIER LUXE
            </span>
            <span
              className={`text-[10px] font-light tracking-[0.35em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-brass" : "text-brass-light"
              }`}
            >
              Interiors
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wider uppercase transition-colors duration-300 hover:text-brass ${
                  isScrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+13105550147"
              className="ml-4 flex items-center gap-2 border border-brass px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-brass transition-all duration-300 hover:bg-brass hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              (310) 555-0147
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-cream/95 backdrop-blur-md rounded-sm border border-cream-medium p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-light tracking-wider uppercase text-charcoal transition-colors duration-300 hover:text-brass py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+13105550147"
              className="flex items-center gap-2 border border-brass px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-brass transition-all duration-300 hover:bg-brass hover:text-white w-fit mt-4"
            >
              <Phone className="h-3.5 w-3.5" />
              (310) 555-0147
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
