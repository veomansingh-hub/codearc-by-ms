import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  { slug: "restrosuite", title: "RESTROSUITE", desc: "Offline-first restaurant POS. Billing, KOT, inventory.", status: "LIVE" },
  { slug: "staysuite", title: "STAYSUITE", desc: "Hospitality PMS. Room management, guest folios.", status: "EARLY ACCESS" },
  { slug: "medisuite", title: "MEDISUITE", desc: "Clinic / OPD system. Patient queues, billing.", status: "EARLY ACCESS" }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-near-black text-bone">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display leading-[0.95] mb-8">
            BUSINESS <br /> SOFTWARE.
          </h1>
          <p className="text-xl md:text-2xl text-soft-grey max-w-2xl">
            We don&apos;t just design websites. We engineer production-ready systems that run the core operations of hospitality and healthcare businesses.
          </p>
        </div>
        
        <div className="flex flex-col border-t border-graphite">
          {PRODUCTS.map((product) => (
            <Link 
              key={product.slug} 
              href={`/products/${product.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-graphite hover:bg-black/30 transition-colors px-4 -mx-4"
            >
              <div className="mb-4 md:mb-0 max-w-xl">
                <span className={`text-xs font-bold tracking-widest uppercase block mb-4 ${product.status === 'LIVE' ? 'text-accent' : 'text-soft-grey'}`}>
                  {product.status}
                </span>
                <h2 className="text-4xl md:text-6xl font-display group-hover:text-bone text-bone/90 transition-colors mb-4">
                  {product.title}
                </h2>
                <p className="text-soft-grey group-hover:text-bone/80 transition-colors">
                  {product.desc}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border border-graphite flex items-center justify-center group-hover:bg-bone group-hover:text-near-black group-hover:border-bone transition-all">
                <ArrowRight size={24} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
