"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent("Hi CodeArc, I've been looking through your work and I'd like to discuss a new website for my business.");
  const whatsappUrl = `https://wa.me/919983721179?text=${whatsappMessage}`;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col gap-3 bg-bone/80 backdrop-blur-md p-2 rounded-full border border-soft-grey shadow-lg">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-near-black text-bone flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href="tel:+919983721179"
          className="w-10 h-10 rounded-full bg-soft-grey text-near-black flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Call CodeArc"
        >
          <Phone size={18} />
        </a>
      </div>
    </div>
  );
}
