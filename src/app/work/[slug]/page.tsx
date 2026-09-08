import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Mock data, normally fetched from a CMS
const WORKS = {
  "wild-jawai": { 
    title: "WILD JAWAI", 
    sector: "TRAVEL & HOSPITALITY", 
    status: "LIVE PROJECT",
    overview: "A cinematic destination experience built around Jawai, wildlife, safaris and direct guest enquiry.",
    need: "The client needed a platform that truly captured the raw beauty of Jawai while making safari bookings frictionless.",
    direction: "We went with a cinematic, highly visual approach. Large typographic elements paired with immersive photography of leopards and the granite landscape.",
    link: "https://wildjawai.in/"
  },
  "leopard-trails": { 
    title: "LEOPARD TRAILS", 
    sector: "LUXURY HOSPITALITY", 
    status: "LIVE PROJECT",
    overview: "A cinematic luxury resort site for Leopard Trails Jawai — granite-hill safaris, plunge-pool suites, bush dining and concierge booking.",
    need: "A premium digital presence matching their ultra-luxury physical experience.",
    direction: "Elegant, muted tones, serif typography, and unhurried interactions to convey luxury.",
    link: "https://leopardtrails.vercel.app"
  },
  // Adding fallbacks for others
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = WORKS[slug as keyof typeof WORKS] || {
    title: slug.toUpperCase().replace("-", " "),
    sector: "DIGITAL EXPERIENCE",
    status: "LIVE PROJECT",
    overview: "A custom digital experience built for performance and conversion.",
    need: "Business required a digital overhaul.",
    direction: "Modern, clean, and conversion-focused.",
    link: "#"
  };

  return (
    <div className="min-h-screen bg-bone">
      {/* Project Hero */}
      <div className="pt-32 pb-16 px-4 md:px-8 container mx-auto">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-graphite uppercase hover:text-near-black mb-12">
          <ArrowLeft size={16} /> BACK TO WORK
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs font-bold tracking-widest text-near-black uppercase border border-near-black/20 px-4 py-2 rounded-full">
                {project.sector}
              </span>
              <span className="text-xs font-bold tracking-widest text-accent uppercase border border-accent/20 px-4 py-2 rounded-full">
                {project.status}
              </span>
            </div>
          </div>
          {project.link !== "#" && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-near-black text-bone px-8 py-4 rounded-full text-sm font-medium hover:bg-near-black/90 flex-shrink-0"
            >
              VISIT WEBSITE <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Hero Visual */}
      <div className="w-full aspect-video bg-near-black flex items-center justify-center text-bone/20 font-display text-4xl mb-24">
        [ HERO VISUAL ]
      </div>

      {/* Case Study Content */}
      <div className="container mx-auto px-4 md:px-8 max-w-4xl mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold tracking-widest uppercase text-graphite mb-4">OVERVIEW</h3>
          </div>
          <div className="md:col-span-2">
            <p className="text-2xl md:text-3xl font-display leading-relaxed">
              {project.overview}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold tracking-widest uppercase text-graphite mb-4">THE NEED</h3>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-graphite leading-relaxed">
              {project.need}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold tracking-widest uppercase text-graphite mb-4">DIRECTION</h3>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-graphite leading-relaxed">
              {project.direction}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Gallery */}
      <div className="container mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="aspect-[4/5] bg-soft-grey rounded-2xl flex items-center justify-center text-graphite/40 font-display text-2xl">[ DESKTOP VIEW ]</div>
          <div className="aspect-[4/5] bg-graphite rounded-2xl flex items-center justify-center text-bone/40 font-display text-2xl">[ MOBILE VIEW ]</div>
        </div>
        <div className="w-full aspect-video bg-near-black rounded-2xl flex items-center justify-center text-bone/40 font-display text-2xl">
          [ INTERACTION RECORDING ]
        </div>
      </div>

      {/* Next Project */}
      <div className="border-t border-soft-grey">
        <Link href="/work" className="block py-24 text-center group hover:bg-soft-grey/30 transition-colors">
          <span className="text-sm font-bold tracking-widest uppercase text-graphite block mb-6">NEXT PROJECT</span>
          <h2 className="text-5xl md:text-7xl font-display group-hover:text-accent transition-colors">EXPLORE MORE WORK</h2>
        </Link>
      </div>
    </div>
  );
}
