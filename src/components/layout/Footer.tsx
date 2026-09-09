import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-near-black text-bone pt-24 pb-8 px-4 md:px-8 border-t border-graphite">
      <div className="container mx-auto">
        {/* Campaign Moment */}
        <div className="mb-24 md:mb-32 max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-8">
            YOUR NEXT CUSTOMER <br />
            MAY MEET YOUR WEBSITE <br />
            BEFORE THEY MEET YOU. <br />
            <span className="text-accent">MAKE IT COUNT.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xl md:text-2xl font-medium hover:text-accent transition-colors"
          >
            START A PROJECT <ArrowUpRight size={28} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-bone rounded-tl-lg rounded-br-lg flex items-center justify-center">
                <span className="text-near-black font-bold text-xs font-sans">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">CodeArc</span>
            </div>
            <p className="text-soft-grey text-sm mb-6 max-w-xs leading-relaxed">
              Digital experiences and business systems for ambitious companies across India.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="flex flex-col gap-3 text-sm text-soft-grey">
              <li><Link href="/work" className="hover:text-bone transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-bone transition-colors">Services</Link></li>
              <li><Link href="/industries" className="hover:text-bone transition-colors">Industries</Link></li>
              <li><Link href="/products" className="hover:text-bone transition-colors">Software</Link></li>
              <li><Link href="/studio" className="hover:text-bone transition-colors">Studio</Link></li>
              <li><Link href="/blog" className="hover:text-bone transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wider uppercase">Capabilities</h3>
            <ul className="flex flex-col gap-3 text-sm text-soft-grey">
              <li><Link href="/services/websites" className="hover:text-bone transition-colors">Websites</Link></li>
              <li><Link href="/services/ecommerce" className="hover:text-bone transition-colors">Ecommerce</Link></li>
              <li><Link href="/services/web-applications" className="hover:text-bone transition-colors">Web Apps</Link></li>
              <li><Link href="/products/restrosuite" className="hover:text-bone transition-colors">RestroSuite</Link></li>
              <li><Link href="/products/staysuite" className="hover:text-bone transition-colors">StaySuite</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-soft-grey">
              <li><a href="mailto:hello@codearc.co.in" className="hover:text-bone transition-colors">hello@codearc.co.in</a></li>
              <li><a href="tel:+919983721179" className="hover:text-bone transition-colors">+91 99837 21179</a></li>
              <li><a href="https://wa.me/919983721179" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition-colors">WhatsApp</a></li>
              <li className="mt-4 pt-4 border-t border-graphite">Rajasthan · Working across India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-graphite text-xs text-soft-grey gap-4">
          <p>© {new Date().getFullYear()} CodeArc</p>
          <div className="flex gap-6">
            <span className="hidden md:inline">CODEARC — INDIA</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-bone transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-bone transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
