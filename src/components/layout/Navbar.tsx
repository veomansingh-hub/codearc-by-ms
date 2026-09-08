"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Software", href: "/products" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-bone/90 backdrop-blur-md py-4 border-b border-soft-grey" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-50">
          {/* Logo mark placeholder */}
          <div className="w-8 h-8 bg-near-black rounded-tl-lg rounded-br-lg flex items-center justify-center">
            <span className="text-bone font-bold text-xs font-sans">C</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-near-black">
            CodeArc
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite hover:text-near-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-near-black text-bone px-5 py-2.5 rounded-full text-sm font-medium hover:bg-near-black/90 transition-colors"
          >
            Start a Project <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-near-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-bone z-40 flex flex-col justify-center px-8 transition-transform duration-500 ease-in-out lg:hidden",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <nav className="flex flex-col gap-6 text-3xl font-display">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-near-black hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 bg-near-black text-bone px-6 py-3 rounded-full text-lg font-medium hover:bg-near-black/90 transition-colors"
            >
              Start a Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
