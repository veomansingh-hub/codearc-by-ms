"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: "need",
    title: "WHAT DO YOU NEED?",
    options: ["New Website", "Website Redesign", "Ecommerce", "Booking / Enquiry System", "Web Application", "Business Software", "Not Sure"]
  },
  {
    id: "business",
    title: "WHAT TYPE OF BUSINESS?",
    options: ["Hospitality", "Restaurant / Cafe", "Travel", "Healthcare", "Automotive", "Education", "Construction / Trades", "Ecommerce", "Professional Services", "Other"]
  },
  {
    id: "matters",
    title: "WHAT MATTERS MOST?",
    options: ["Better presentation", "More enquiries", "Bookings", "Selling online", "Replacing an old website", "Custom functionality", "Internal workflow", "Not sure"]
  },
  {
    id: "stage",
    title: "PROJECT STAGE",
    options: ["Exploring", "Planning", "Ready to begin", "Existing website needs replacement"]
  }
];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    need: "",
    business: "",
    matters: "",
    stage: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
  });

  const handleSelect = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    nextStep();
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const renderStep = () => {
    if (step < 4) {
      const current = STEPS[step];
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl md:text-5xl font-display mb-12">{current.title}</h2>
          <div className="flex flex-col gap-4">
            {current.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(current.id, opt)}
                className={cn(
                  "text-left px-6 py-4 rounded-xl border transition-all text-lg font-medium",
                  formData[current.id as keyof typeof formData] === opt
                    ? "border-near-black bg-near-black text-bone"
                    : "border-soft-grey hover:border-near-black bg-bone text-near-black"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 4) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl md:text-5xl font-display mb-12">CONTACT DETAILS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              placeholder="Name"
              className="px-6 py-4 rounded-xl border border-soft-grey bg-transparent outline-none focus:border-near-black text-lg"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="text"
              placeholder="Business / Company"
              className="px-6 py-4 rounded-xl border border-soft-grey bg-transparent outline-none focus:border-near-black text-lg"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="px-6 py-4 rounded-xl border border-soft-grey bg-transparent outline-none focus:border-near-black text-lg"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Phone / WhatsApp"
              className="px-6 py-4 rounded-xl border border-soft-grey bg-transparent outline-none focus:border-near-black text-lg"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <button 
            onClick={nextStep}
            disabled={!formData.name || !formData.email}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-near-black text-bone px-8 py-4 rounded-full text-lg font-medium disabled:opacity-50"
          >
            CONTINUE <ArrowRight size={20} />
          </button>
        </div>
      );
    }

    if (step === 5) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl md:text-5xl font-display mb-12">THE PROJECT</h2>
          <p className="text-graphite mb-6">Tell us briefly what you&apos;re trying to build.</p>
          <textarea
            rows={5}
            placeholder="A few sentences is enough..."
            className="w-full px-6 py-4 rounded-xl border border-soft-grey bg-transparent outline-none focus:border-near-black text-lg mb-8 resize-none"
            value={formData.project}
            onChange={(e) => setFormData({...formData, project: e.target.value})}
          />
          <button 
            onClick={nextStep}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-near-black text-bone px-8 py-4 rounded-full text-lg font-medium"
          >
            REVIEW ENQUIRY <ArrowRight size={20} />
          </button>
        </div>
      );
    }

    if (step === 6) {
      const emailBody = `Need: ${formData.need}%0D%0A` +
        `Business: ${formData.business}%0D%0A` +
        `Matters Most: ${formData.matters}%0D%0A` +
        `Stage: ${formData.stage}%0D%0A%0D%0A` +
        `Name: ${formData.name}%0D%0A` +
        `Company: ${formData.company}%0D%0A` +
        `Email: ${formData.email}%0D%0A` +
        `Phone: ${formData.phone}%0D%0A%0D%0A` +
        `Project details: ${formData.project}`;
        
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl md:text-5xl font-display mb-12">REVIEW & SEND</h2>
          
          <div className="bg-soft-grey/30 p-8 rounded-2xl mb-8 flex flex-col gap-4 text-graphite">
            <p><strong>Need:</strong> {formData.need}</p>
            <p><strong>Business:</strong> {formData.business}</p>
            <p><strong>Goal:</strong> {formData.matters}</p>
            <p><strong>Stage:</strong> {formData.stage}</p>
            <p className="mt-4 pt-4 border-t border-soft-grey">
              <strong>Contact:</strong> {formData.name} ({formData.company}) - {formData.email}
            </p>
            <p className="mt-4 pt-4 border-t border-soft-grey">
              <strong>Notes:</strong> {formData.project || "None provided"}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href={`mailto:hello@codearc.co.in?subject=New Project Enquiry: ${formData.company}&body=${emailBody}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-near-black text-bone px-8 py-4 rounded-full text-lg font-medium hover:bg-near-black/90"
            >
              SEND VIA EMAIL <ArrowRight size={20} />
            </a>
            <a 
              href={`https://wa.me/919983721179?text=${emailBody}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-near-black text-near-black px-8 py-4 rounded-full text-lg font-medium hover:bg-soft-grey"
            >
              SEND VIA WHATSAPP
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-bone">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="flex items-center gap-4 mb-16">
          {step > 0 && (
            <button onClick={prevStep} className="p-2 hover:bg-soft-grey rounded-full transition-colors">
              <ArrowLeft size={24} />
            </button>
          )}
          <span className="text-sm font-bold tracking-widest text-graphite uppercase">
            Step {step + 1} of 7
          </span>
          <div className="flex-1 h-1 bg-soft-grey rounded-full overflow-hidden">
            <div 
              className="h-full bg-near-black transition-all duration-300"
              style={{ width: `${((step + 1) / 7) * 100}%` }}
            />
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  );
}
