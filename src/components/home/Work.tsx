"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "wild-jawai",
    title: "WILD JAWAI",
    sector: "TRAVEL & HOSPITALITY",
    desc: "A cinematic destination experience built around Jawai, wildlife, safaris and direct guest enquiry.",
    bg: "bg-near-black",
  },
  {
    id: "leopard-trails",
    title: "LEOPARD TRAILS",
    sector: "LUXURY HOSPITALITY",
    desc: "A visual hospitality experience designed around atmosphere, accommodation and safari discovery.",
    bg: "bg-graphite",
  },
  {
    id: "bros-bar",
    title: "BRO'S BAR",
    sector: "RESTAURANT & BAR",
    desc: "Fast billing and floor flow for high-volume service hours.",
    bg: "bg-accent",
  },
  {
    id: "deora-plaza",
    title: "DEORA PLAZA",
    sector: "HOSPITALITY OS",
    desc: "Full hospitality OS — hotel, cafe and floor ops behind a dark luxury entry.",
    bg: "bg-near-black",
  }
];

export function Work() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <section id="work" className="py-24 md:py-32 bg-bone">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display leading-[0.9]">
            THE WORK <br />
            DOES THE TALKING.
          </h2>
        </div>

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-12 min-h-[600px]">
          <div className="col-span-5 flex flex-col gap-6">
            {PROJECTS.map((project, idx) => (
              <button
                key={project.id}
                onMouseEnter={() => setActiveProject(project)}
                className={`text-left border-b border-soft-grey pb-6 transition-all duration-300 ${
                  activeProject.id === project.id ? "opacity-100 pl-4 border-near-black" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="text-sm font-semibold tracking-wider text-graphite mb-2">
                  0{idx + 1} {project.sector}
                </div>
                <h3 className="text-4xl font-display uppercase">{project.title}</h3>
              </button>
            ))}
            
            <div className="mt-8">
              <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors">
                VIEW ALL PROJECTS <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="col-span-7">
            <div className={`w-full h-full rounded-2xl ${activeProject.bg} text-bone p-12 flex flex-col justify-end transition-colors duration-500 relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center font-display text-4xl opacity-20 z-0">
                [ {activeProject.title} VISUAL ]
              </div>
              
              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-bold tracking-widest uppercase bg-bone text-near-black px-3 py-1 rounded-full mb-4 inline-block">
                  {activeProject.sector}
                </span>
                <h4 className="text-5xl font-display mb-4">{activeProject.title}</h4>
                <p className="text-lg text-bone/80 mb-8 max-w-md">
                  {activeProject.desc}
                </p>
                <Link
                  href={`/work/${activeProject.id}`}
                  className="inline-flex items-center gap-2 bg-bone text-near-black px-6 py-3 rounded-full text-sm font-medium hover:bg-bone/90 transition-colors"
                >
                  VIEW PROJECT <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="flex flex-col gap-12 lg:hidden">
          {PROJECTS.map((project) => (
            <div key={project.id} className="flex flex-col">
              <div className={`w-full aspect-[4/5] rounded-xl ${project.bg} mb-6 relative overflow-hidden flex items-end p-6`}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                 <div className="absolute inset-0 flex items-center justify-center font-display text-2xl text-bone opacity-20 z-0">
                  [ VISUAL ]
                 </div>
                 <div className="relative z-20">
                   <h4 className="text-4xl font-display text-bone mb-2">{project.title}</h4>
                   <p className="text-bone/80 text-sm mb-6">{project.desc}</p>
                   <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-2 bg-bone text-near-black px-5 py-2.5 rounded-full text-sm font-medium"
                  >
                    VIEW PROJECT
                  </Link>
                 </div>
              </div>
            </div>
          ))}
          <Link href="/work" className="inline-flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase border border-near-black px-6 py-4 rounded-full">
            VIEW ALL PROJECTS <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
