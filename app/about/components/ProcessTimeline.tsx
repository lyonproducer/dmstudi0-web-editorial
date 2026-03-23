"use client";

import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface Step {
  title: string;
  desc: string;
  image: string;
}

const steps: Step[] = [
  {
    title: "Creative Inquiry",
    desc: "Comenzamos con una consulta profunda para entender tu visión, objetivos y la narrativa que queremos capturar. Definimos el moodboard y la dirección artística.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Production",
    desc: "Ejecución técnica de alto nivel. Ya sea en set, locación o estudio, cuidamos cada detalle de iluminación, composición y dirección para asegurar resultados premium.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "The Editorial Polish",
    desc: "Post-producción meticulosa. Refinamos cada imagen y frame para que cumpla con los estándares de la industria del lujo, entregando resultados listos para impactar.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  }
];

export function ProcessTimeline() {
  return (
    <div className="space-y-48">
      {steps.map((step, i) => (
        <Reveal key={i} direction="up" delay={i * 0.1} width="100%">
          <div className={cn(
            "flex flex-col gap-12 lg:gap-24 w-full",
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}>
            <div className="w-full lg:w-1/2 min-w-0">
              <div className="relative aspect-4/5 lg:aspect-square overflow-hidden group shadow-luxury-2xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-10 left-10 text-white font-serif text-8xl opacity-10 font-bold">{i + 1}</div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 min-w-0 flex flex-col justify-center space-y-8">
              <span className="text-cta text-[10px] uppercase tracking-widest font-bold block mb-4">Phase 0{i + 1}</span>
              <h3 className="text-4xl md:text-5xl font-serif mb-6">{step.title}</h3>
              <p className="text-secondary text-base leading-relaxed max-w-lg mb-12">{step.desc}</p>
              
              <div className="w-12 h-px bg-primary/20" />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
