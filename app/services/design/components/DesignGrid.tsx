"use client";

import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface DesignService {
  title: string;
  desc: string;
  image: string;
  points: string[];
}

export function DesignGrid({ services }: { services: DesignService[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-primary/10 border border-primary/10">
      {services.map((service, i) => (
        <Reveal key={i} direction="up" delay={i * 0.1} width="100%">
          <div className="bg-background p-12 md:p-16 h-full flex flex-col justify-center">
            <span className="text-cta text-[10px] uppercase tracking-widest font-bold mb-6 block">Capability 0{i + 1}</span>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">{service.title}</h3>
            <p className="text-secondary text-base leading-relaxed mb-12 max-w-lg">{service.desc}</p>
            
            <div className="relative aspect-video mb-12 overflow-hidden bg-stone-100 group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {service.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cta/40 group-hover:bg-cta transition-colors" />
                  <span className="text-[10px] uppercase tracking-widest font-medium opacity-70 group-hover:opacity-100 transition-opacity">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
