import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const WORKS = [
  { slug: "wild-jawai", title: "WILD JAWAI", sector: "TRAVEL & HOSPITALITY", status: "LIVE PROJECT" },
  { slug: "leopard-trails", title: "LEOPARD TRAILS", sector: "LUXURY HOSPITALITY", status: "LIVE PROJECT" },
  { slug: "bros-bar", title: "BRO'S BAR", sector: "RESTAURANT & BAR", status: "LIVE PROJECT" },
  { slug: "deora-plaza", title: "DEORA PLAZA", sector: "HOSPITALITY OS", status: "LIVE SYSTEM" },
  { slug: "theo-media", title: "THEOMEDIA", sector: "DIGITAL STUDIO", status: "SISTER BRAND" }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-bone">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display mb-24">
          SELECTED WORK
        </h1>
        
        <div className="flex flex-col border-t border-soft-grey">
          {WORKS.map((work) => (
            <Link 
              key={work.slug} 
              href={`/work/${work.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-soft-grey hover:bg-soft-grey/30 transition-colors px-4 -mx-4"
            >
              <div className="mb-4 md:mb-0">
                <span className="text-xs font-bold tracking-widest text-graphite uppercase block mb-4">
                  {work.sector} · {work.status}
                </span>
                <h2 className="text-4xl md:text-6xl font-display group-hover:text-accent transition-colors">
                  {work.title}
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full border border-soft-grey flex items-center justify-center group-hover:bg-near-black group-hover:text-bone group-hover:border-near-black transition-all">
                <ArrowUpRight size={24} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
