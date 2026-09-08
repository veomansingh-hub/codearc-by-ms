import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

type Product = {
  title: string;
  tagline: string;
  status: string;
  bg: string;
  features: string[];
  link: string;
  textDark?: boolean;
};

const PRODUCTS: Record<string, Product> = {
  "restrosuite": { 
    title: "RESTROSUITE", 
    tagline: "Restaurant POS & Operations", 
    status: "LIVE",
    bg: "bg-near-black",
    features: ["Offline-first billing", "Kitchen Order Tickets (KOT)", "Inventory Management", "WhatsApp Receipts", "Multi-terminal sync", "Daily Sales Analytics"],
    link: "https://restrosuite.codearc.co.in"
  },
  "staysuite": { 
    title: "STAYSUITE", 
    tagline: "Hospitality Property Management", 
    status: "EARLY ACCESS",
    bg: "bg-graphite",
    features: ["Room Management", "Guest Folios", "Housekeeping Status", "Room Service Billing", "Direct Booking Sync", "Rate Management"],
    link: "#"
  },
  "medisuite": { 
    title: "MEDISUITE", 
    tagline: "Clinic & OPD Console", 
    status: "EARLY ACCESS",
    bg: "bg-soft-grey",
    textDark: true,
    features: ["Patient Queue Management", "Appointment Booking", "Prescription Generation", "Consultation Billing", "Patient History", "Staff Management"],
    link: "#"
  }
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = PRODUCTS[slug as keyof typeof PRODUCTS] || PRODUCTS["restrosuite"];

  const textColor = product.textDark ? "text-near-black" : "text-bone";
  const mutedColor = product.textDark ? "text-graphite" : "text-soft-grey";
  const borderColor = product.textDark ? "border-graphite/20" : "border-graphite";

  return (
    <div className={`min-h-screen pt-32 pb-24 ${product.bg} ${textColor}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <Link href="/products" className={`inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:opacity-70 mb-12 ${mutedColor}`}>
          <ArrowLeft size={16} /> ALL SOFTWARE
        </Link>
        
        <div className="mb-16">
          <span className={`text-xs font-bold tracking-widest uppercase border px-4 py-2 rounded-full mb-8 inline-block ${borderColor} ${product.status === 'LIVE' && !product.textDark ? 'text-accent border-accent/30' : ''}`}>
            {product.status}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display mb-6">{product.title}</h1>
          <p className={`text-2xl md:text-3xl font-display ${mutedColor}`}>{product.tagline}</p>
        </div>

        {/* Dashboard Visual Placeholder */}
        <div className={`w-full aspect-video rounded-2xl flex items-center justify-center font-display text-2xl mb-24 border ${borderColor} ${product.textDark ? 'bg-bone/50' : 'bg-black/30 text-bone/40'}`}>
          [ {product.title} DASHBOARD INTERFACE ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-display mb-8">Engineered for real workflows.</h2>
            <p className={`text-lg leading-relaxed ${mutedColor}`}>
              We built {product.title} by sitting with actual businesses and watching where their existing software failed. It is designed to be fast, reliable, and require zero training for new staff.
            </p>
            
            {product.link !== "#" && (
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-12 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-colors ${product.textDark ? 'bg-near-black text-bone hover:bg-near-black/90' : 'bg-bone text-near-black hover:bg-bone/90'}`}
              >
                VISIT {product.title} <ArrowUpRight size={18} />
              </a>
            )}
          </div>
          
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">KEY FEATURES</h3>
            <ul className="flex flex-col gap-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className={product.textDark ? 'text-near-black' : 'text-accent'} />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
