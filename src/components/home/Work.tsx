"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "wild-jawai-brand",
    title: "WILD JAWAI",
    sector: "TRAVEL & HOSPITALITY",
    link: "https://wildjawai.in",
    desktop: "/projects/wild-jawai-brand-desktop.jpg",
    mobile: "/projects/wild-jawai-brand-mobile.jpg",
  },
  {
    id: "leopard-trails",
    title: "LEOPARD TRAILS",
    sector: "LUXURY HOSPITALITY",
    link: "https://leopardtrails.vercel.app",
    desktop: "/projects/leopard-trails-desktop.jpg",
    mobile: "/projects/leopard-trails-mobile.jpg",
  },
  {
    id: "bros-bar",
    title: "BRO'S BAR",
    sector: "RESTAURANT & BAR",
    link: "https://brosbar.vercel.app",
    desktop: "/projects/bros-bar-desktop.jpg",
    mobile: "/projects/bros-bar-mobile.jpg",
  },
  {
    id: "deora-plaza",
    title: "DEORA PLAZA",
    sector: "HOSPITALITY OS",
    link: "https://deora.vercel.app",
    desktop: "/projects/deora-plaza-desktop.jpg",
    mobile: "/projects/deora-plaza-mobile.jpg",
  },
  {
    id: "wild-jawai-safari",
    title: "WILD JAWAI SAFARI",
    sector: "DESTINATION EXPERIENCE",
    link: "https://wild-jawai.vercel.app",
    desktop: "/projects/wild-jawai-safari-desktop.jpg",
    mobile: "/projects/wild-jawai-safari-mobile.jpg",
  }
];

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);
  const progressRef = useRef(0);
  const mouseOffset = useRef({ x: 0, y: 0 });
  const isVisible = useRef(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const totalItems = PROJECTS.length;
  const loops = 5;
  const logicalItems = Array.from({ length: totalItems * loops }, (_, i) => i);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);

    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Subtle pointer depth influence (4-8px) for desktop only
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseOffset.current = { x: nx * 8, y: ny * 6 };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Pause animation when out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let lastTime = performance.now();
    const itemWidth = isMobile ? 440 : 920;
    const totalWidth = totalItems * itemWidth;

    const animate = (time: number) => {
      const delta = Math.min(time - lastTime, 40); // clamp delta to prevent giant leaps on tab switch
      lastTime = time;

      if (!isVisible.current) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      let speed = isMobile ? 0.05 : 0.09;
      
      const currentPos = progressRef.current;
      const centerItemFloat = currentPos / itemWidth;
      const distanceToCenter = Math.min(
        centerItemFloat - Math.floor(centerItemFloat),
        Math.ceil(centerItemFloat) - centerItemFloat
      );
      
      // Gentle deceleration near exact center
      if (distanceToCenter < 0.18) {
        speed *= 0.35 + (distanceToCenter / 0.18) * 0.65; 
      }

      progressRef.current += speed * delta;
      
      // Loop seamlessly
      if (progressRef.current >= totalWidth) {
        progressRef.current -= totalWidth;
      }

      // The logical item index currently at center
      const exactActiveIdx = Math.round(progressRef.current / itemWidth) % totalItems;
      if (exactActiveIdx !== activeIdx) {
        setActiveIdx(exactActiveIdx);
      }

      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('.strand-item');
        const wrapWidth = totalWidth * loops; 
        const centerOffset = wrapWidth / 2;
        const mx = mouseOffset.current.x;
        const my = mouseOffset.current.y;

        items.forEach((el: any) => {
          const index = parseInt(el.dataset.index);
          const strand = parseInt(el.dataset.strand); // 0 or 1
          
          let x = (index * itemWidth) - progressRef.current;
          
          while (x < -centerOffset) x += wrapWidth;
          while (x > centerOffset) x -= wrapWidth;

          const normX = x / itemWidth;
          const phase = strand === 1 ? Math.PI : 0;
          
          const yAmp = isMobile ? 45 : 150;
          const zAmp = isMobile ? 180 : 480;
          
          const y = Math.sin(normX * Math.PI + phase) * yAmp + my;
          const z = Math.cos(normX * Math.PI + phase) * zAmp + mx;
          
          const isFront = z > 0;
          const absX = Math.abs(normX);
          
          let opacity = 0;
          let blur = 0;
          let scale = 1;
          
          if (absX < 1.6) {
            opacity = isFront ? Math.max(0, 1 - absX * 0.65) : Math.max(0, 0.14 * (1 - absX));
            blur = isFront ? (absX * 10) : 12;
            scale = isFront ? 1 + (1 - absX) * 0.15 : 0.72;
          } else {
            opacity = 0;
            blur = 20;
          }

          opacity = Math.max(0, Math.min(1, opacity));
          
          let rotateY = isFront ? -normX * 18 : -normX * 36; 
          
          // Flatten front text when near center
          if (strand === 0 && absX < 0.2) {
             rotateY = -normX * 6;
          }

          el.style.transform = `translate3d(${x + mx}px, ${y}px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`;
          el.style.opacity = opacity.toString();
          el.style.filter = `blur(${blur}px)`;
          el.style.zIndex = Math.round(z + 1000).toString();
          
          if (strand === 0 && absX < 0.22) {
            el.classList.add('is-active-center');
          } else {
            el.classList.remove('is-active-center');
          }
        });
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile, totalItems, reducedMotion, activeIdx]);

  const activeProject = PROJECTS[activeIdx] || PROJECTS[0];

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className="relative h-[100svh] min-h-[620px] w-full bg-near-black overflow-hidden flex items-center justify-center select-none"
    >
      {/* Layer 1: Active Project Full-Bleed Backgrounds */}
      {PROJECTS.map((project, idx) => (
        <div
          key={`bg-${project.id}`}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: activeIdx === idx ? 1 : 0, zIndex: 0 }}
        >
          <Image
            src={isMobile ? project.mobile : project.desktop}
            alt={project.title}
            fill
            className="object-cover object-center scale-[1.02] transition-transform duration-1000"
            priority={idx === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Layer 2: Readability Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-near-black/50 via-near-black/60 to-near-black/90 z-10 pointer-events-none" />
      
      {/* Intro Header */}
      <div className="absolute top-8 md:top-12 left-6 md:left-12 z-20 pointer-events-none">
        <h2 className="text-bone/50 text-xs tracking-[0.25em] uppercase font-semibold mb-2">
          Selected Work
        </h2>
        <p className="text-bone text-2xl md:text-3xl font-display leading-tight">
          The work<br/>does the talking.
        </p>
      </div>

      {/* Center Clickable Link Overlay for Active Visual */}
      <a 
        href={activeProject.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${activeProject.title} live site`}
        className="absolute inset-0 z-20 cursor-pointer"
      />

      {/* Layer 3 & 4: Helix Typography */}
      {reducedMotion ? (
        <div className="relative z-30 flex flex-col items-center justify-center h-full w-full max-w-4xl px-4 gap-6 pointer-events-none">
          {PROJECTS.map((project, idx) => (
            <button
              key={`rm-${project.id}`}
              onClick={() => setActiveIdx(idx)}
              className={`font-display text-4xl md:text-7xl uppercase transition-all duration-300 pointer-events-auto ${
                activeIdx === idx ? "text-bone scale-110" : "text-bone/30 hover:text-bone/60"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      ) : (
        <div 
          ref={containerRef}
          className="relative z-30 w-full h-full flex items-center justify-center [perspective:1200px] pointer-events-none"
        >
          <div className="relative w-0 h-0 [transform-style:preserve-3d]">
            {logicalItems.map((logicalIndex) => {
              const projectIdx = logicalIndex % totalItems;
              const projectA = PROJECTS[projectIdx];
              const projectB = PROJECTS[(projectIdx + 2) % totalItems];
              
              return (
                <div key={`group-${logicalIndex}`}>
                  {/* Strand A (Front at Center) */}
                  <div
                    data-index={logicalIndex}
                    data-strand={0}
                    className="strand-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center will-change-transform whitespace-nowrap"
                    style={{ opacity: 0 }}
                  >
                    <span className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10.5rem] uppercase tracking-tight text-bone/40 transition-colors duration-300">
                      {projectA.title}
                    </span>
                  </div>
                  
                  {/* Strand B (Intertwined Ribbon) */}
                  <div
                    data-index={logicalIndex}
                    data-strand={1}
                    className="strand-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center will-change-transform whitespace-nowrap"
                    style={{ opacity: 0 }}
                  >
                    <span className="font-display text-4xl sm:text-6xl md:text-[8rem] lg:text-[10.5rem] uppercase tracking-tight text-bone/15 transition-colors duration-300">
                      {projectB.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Layer 5: Active Project Info & Direct Link */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-40 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
        <div>
          <h3 className="text-bone text-2xl sm:text-3xl md:text-5xl font-display uppercase mb-1">
            {activeProject.title}
          </h3>
          <span className="text-bone/70 text-xs sm:text-sm tracking-widest uppercase font-semibold">
            {activeProject.sector}
          </span>
        </div>
        
        <a 
          href={activeProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-2 bg-bone text-near-black px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-bone/90 hover:scale-105 active:scale-95 transition-all shadow-lg flex-shrink-0"
        >
          VIEW LIVE SITE <ArrowUpRight size={16} />
        </a>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .is-active-center span {
          color: #f3f0e8 !important;
          text-shadow: 0 10px 40px rgba(0,0,0,0.85);
          letter-spacing: -0.02em;
        }
      `}} />
    </section>
  );
}
