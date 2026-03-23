"use client";

import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface Package {
  name: string;
  price: string;
  desc: string;
  features: string[];
  isPopular?: boolean;
}

const packages: Package[] = [
  {
    name: "Editorial Basic",
    price: "$2,500/mo",
    desc: "Perfect for emerging brands needing regular, professional-grade visual storytelling.",
    features: [
      "1 Monthly Production Day",
      "15 High-End Retouched Photos",
      "3 Cinematic Social Reels",
      "Full Creative Strategy",
      "Standard Turnaround"
    ]
  },
  {
    name: "Production Pro",
    price: "$5,000/mo",
    desc: "The standard for agencies and celebrities seeking consistent high-impact content.",
    features: [
      "2 Monthly Production Days",
      "30 High-End Retouched Photos",
      "8 Cinematic Social Reels",
      "Monthly Branding Update",
      "Priority Refinement",
      "Pre-Production Support"
    ],
    isPopular: true
  },
  {
    name: "Director's Circle",
    price: "Custom",
    desc: "Exclusive tailor-made production for high-budget campaigns and editorial covers.",
    features: [
      "Unlimited Production Days",
      "Full Editorial Campaign Build",
      "High-Resolution Commercial Video",
      "Podcast Room Exclusive",
      "Dedicated Creative Director",
      "On-Set Styling & Direction"
    ]
  }
];

export function PackageCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10 border border-primary/10">
      {packages.map((pkg, i) => (
        <Reveal key={i} direction="up" delay={i * 0.1} width="100%">
          <div className={cn(
            "bg-background p-12 md:p-16 h-full flex flex-col items-center text-center",
            pkg.isPopular && "border-2 border-cta/30 relative z-10 scale-105"
          )}>
            {pkg.isPopular && (
              <span className="bg-cta text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1 absolute -top-4 left-1/2 -translate-x-1/2">Highly Requested</span>
            )}
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-6 block">{pkg.name}</span>
            <div className="text-5xl md:text-6xl font-serif mb-8 text-primary">{pkg.price}</div>
            <p className="text-secondary text-sm leading-relaxed mb-12 max-w-xs">{pkg.desc}</p>
            
            <div className="w-12 h-px bg-primary/20 mb-12" />
            
            <ul className="space-y-6 text-xs uppercase tracking-widest font-medium text-stone-500 mb-16 h-full">
              {pkg.features.map((feature, j) => (
                <li key={j} className="flex flex-col items-center gap-2">
                  <div className="w-1 h-1 bg-cta/40 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={cn(
              "w-full py-5 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 border",
              pkg.isPopular ? "bg-primary text-white hover:bg-cta" : "border-primary/20 hover:bg-primary hover:text-white"
            )}>
              Inquire Now
            </button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
