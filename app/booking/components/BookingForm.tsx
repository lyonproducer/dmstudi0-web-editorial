"use client";

import { useState } from "react";
import { cn } from "@/app/shared/utils";

const projectTypes = [
  "Editorial Photography",
  "Commercial Video",
  "Podcast Build-out",
  "Web Production",
  "Design & Branding",
  "Monthly Subscription"
];

export function BookingForm() {
  const [selectedType, setSelectedType] = useState<string>("");

  return (
    <div className="max-w-4xl mx-auto py-24 px-12 md:px-24 bg-white border border-primary/5 shadow-luxury-2xl">
      <div className="mb-24 text-center">
        <span className="text-cta text-[10px] uppercase tracking-widest font-bold block mb-4">The Inquiry</span>
        <h2 className="text-5xl font-serif mb-8 text-primary uppercase">Reserve your session.</h2>
        <p className="text-secondary text-base max-w-lg mx-auto leading-relaxed">Each project is evaluated to ensure DMStudio Editorial is the perfect fit for your narrative vision.</p>
      </div>

      <form className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-primary/10 py-4 focus:border-cta transition-colors outline-hidden font-serif text-2xl"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-primary/10 py-4 focus:border-cta transition-colors outline-hidden font-serif text-2xl"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="space-y-8">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Project Specialty</label>
          <div className="flex flex-wrap gap-4">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={cn(
                  "px-6 py-3 border text-[10px] uppercase tracking-widest font-bold transition-all duration-300",
                  selectedType === type ? "bg-primary text-white border-primary" : "border-primary/10 hover:border-cta text-stone-500"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Brief Inquiry</label>
          <textarea 
            rows={4}
            className="w-full bg-transparent border-b border-primary/10 py-4 focus:border-cta transition-colors outline-hidden font-serif text-2xl resize-none shrink-0 overflow-y-auto"
            placeholder="Tell us about your narrative vision..."
          />
        </div>

        <div className="flex justify-center pt-8">
          <button className="bg-primary text-white border border-primary px-16 py-6 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 hover:bg-cta hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
