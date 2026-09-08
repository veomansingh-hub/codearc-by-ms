"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const HERO_PROJECTS = [
  { img: "/wild-jawai.png",      label: "Wild Jawai",      sub: "Travel & Hospitality" },
  { img: "/leopard-trails.png",  label: "Leopard Trails",  sub: "Luxury Hospitality" },
  { img: "/bros-bar.png",        label: "Bro's Bar",       sub: "Restaurant & Bar" },
  { img: "/deora-plaza.png",     label: "Deora Plaza",     sub: "Hospitality OS" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % HERO_PROJECTS.length);
        setFading(false);
      }, 400);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const project = HERO_PROJECTS[current];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 h-full">
        {/* Copy */}
        <div className="flex-1 w-full max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.2em] font-semibold uppercase text-graphite border border-graphite/20 px-3 py-1 rounded-full">
              CODEARC
            </span>
            <span className="text-xs tracking-[0.2em] font-semibold uppercase text-graphite">
              DIGITAL STUDIO · INDIA
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] font-display mb-8">
            WE BUILD WEBSITES <br />
            THAT MAKE BUSINESSES <br />
            <span className="text-accent">HARD TO IGNORE.</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl text-graphite mb-12 leading-relaxed">
            Distinctive websites, ecommerce experiences and digital systems for ambitious businesses across India.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link
              href="#work"
              className="bg-near-black text-bone px-8 py-4 rounded-full text-sm font-medium hover:bg-near-black/90 transition-colors"
            >
              VIEW OUR WORK
            </Link>
            <Link
              href="/contact"
              className="border-2 border-near-black text-near-black px-8 py-4 rounded-full text-sm font-medium hover:bg-near-black hover:text-bone transition-colors"
            >
              START A WEBSITE
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-graphite hover:text-near-black transition-colors underline underline-offset-4"
            >
              EXPLORE SOFTWARE
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-3 text-sm text-graphite font-medium">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full border border-bone bg-soft-grey" />
              <span className="w-8 h-8 rounded-full border border-bone bg-graphite" />
              <span className="w-8 h-8 rounded-full border border-bone bg-accent" />
            </div>
            Custom-built · Mobile-first · Direct access
          </div>
        </div>

        {/* Hero Visual — cycling real project screenshots */}
        <div className="hidden lg:block w-[400px] h-[580px] relative rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
          {/* Current image */}
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: fading ? 0 : 1, transition: "opacity 0.4s ease" }}
          >
            <Image
              src={project.img}
              alt={project.label}
              fill
              className="object-cover object-top"
              sizes="400px"
              priority
            />
          </div>

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />

          {/* Label card */}
          <div
            className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-black/40 rounded-xl border border-white/10 text-bone text-sm z-20"
            style={{ opacity: fading ? 0 : 1, transition: "opacity 0.4s ease" }}
          >
            <span className="block font-bold mb-1">{project.label}</span>
            <span className="opacity-70 text-xs uppercase tracking-widest">{project.sub}</span>
          </div>

          {/* Dot indicators */}
          <div className="absolute top-5 right-5 flex gap-1.5 z-20">
            {HERO_PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-bone w-4" : "bg-bone/40"}`}
                aria-label={`Show project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-graphite">
        <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
