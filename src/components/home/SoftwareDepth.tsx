import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SoftwareDepth() {
  return (
    <section className="py-32 bg-near-black text-bone">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display leading-[0.95] mb-8">
            SOMETIMES <br />
            THE WEBSITE <br />
            IS ONLY THE FRONT DOOR.
          </h2>
          <p className="text-xl md:text-2xl text-soft-grey max-w-2xl">
            When the business needs more, we build the systems behind it. Not just designers. We engineer production-ready software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* RestroSuite */}
          <div className="border border-graphite rounded-3xl p-8 lg:p-12 bg-black/20 flex flex-col">
            <div className="flex items-center justify-between mb-16">
              <span className="text-sm font-bold tracking-widest uppercase">RESTROSUITE</span>
              <span className="text-xs font-semibold px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                LIVE
              </span>
            </div>
            
            <div className="flex-1 mb-12">
              <h3 className="text-3xl font-display mb-4">Restaurant POS / operations</h3>
              <p className="text-soft-grey">
                Offline-first restaurant OS. Billing, KOT, inventory, and WhatsApp receipts — built to run even when the internet drops.
              </p>
            </div>
            
            <Link href="/products/restrosuite" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest hover:text-accent transition-colors mt-auto">
              EXPLORE RESTROSUITE <ArrowRight size={16} />
            </Link>
          </div>

          {/* StaySuite */}
          <div className="border border-graphite rounded-3xl p-8 lg:p-12 bg-black/20 flex flex-col">
            <div className="flex items-center justify-between mb-16">
              <span className="text-sm font-bold tracking-widest uppercase">STAYSUITE</span>
              <span className="text-xs font-semibold px-3 py-1 bg-soft-grey/10 text-soft-grey rounded-full border border-soft-grey/30">
                EARLY ACCESS
              </span>
            </div>
            
            <div className="flex-1 mb-12">
              <h3 className="text-3xl font-display mb-4">Hospitality PMS</h3>
              <p className="text-soft-grey">
                Room management, guest folios, and seamless service flow. Designed around actual hotel operations.
              </p>
            </div>
            
            <Link href="/products/staysuite" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest hover:text-bone transition-colors mt-auto opacity-70 hover:opacity-100">
              EXPLORE STAYSUITE <ArrowRight size={16} />
            </Link>
          </div>

          {/* MediSuite */}
          <div className="border border-graphite rounded-3xl p-8 lg:p-12 bg-black/20 flex flex-col">
            <div className="flex items-center justify-between mb-16">
              <span className="text-sm font-bold tracking-widest uppercase">MEDISUITE</span>
              <span className="text-xs font-semibold px-3 py-1 bg-soft-grey/10 text-soft-grey rounded-full border border-soft-grey/30">
                EARLY ACCESS
              </span>
            </div>
            
            <div className="flex-1 mb-12">
              <h3 className="text-3xl font-display mb-4">Clinic / OPD system</h3>
              <p className="text-soft-grey">
                Patient queues, appointment booking, and clinic billing focused on speed and simplicity.
              </p>
            </div>
            
            <Link href="/products/medisuite" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest hover:text-bone transition-colors mt-auto opacity-70 hover:opacity-100">
              EXPLORE MEDISUITE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
