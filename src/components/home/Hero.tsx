import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 h-full">
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

        {/* Hero Visual - Showreel/Cinematic Fragments */}
        <div className="hidden lg:block w-[400px] h-[600px] relative rounded-2xl overflow-hidden shadow-2xl bg-near-black flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-near-black via-graphite to-accent opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center text-bone/50 font-display text-2xl">
            [ SHOWREEL ]
          </div>
          <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-bone/10 rounded-xl border border-bone/20 text-bone text-sm">
            <span className="block font-bold mb-1">Wild Jawai Safari</span>
            <span className="opacity-80">Cinematic Destination Experience</span>
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
