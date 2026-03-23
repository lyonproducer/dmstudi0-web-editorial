"use client";

import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface Feature {
  label: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    label: "The Workspace",
    title: "Diseño de Set y Estética.",
    desc: "Branding visual, iluminación profesional y estética personalizada que garantiza que tu podcast se vea tan bien como suena."
  },
  {
    label: "The Technicals",
    title: "Instalación de Equipo.",
    desc: "Configuración técnica de audio, cámaras 4K, switches de video y grabación multicanal para una calidad de exportación impecable."
  },
  {
    label: "The Delivery",
    title: "Edición y Entrega.",
    desc: "Recortes optimizados para redes (Reels/Shorts), limpieza de audio y entrega lista para todas las plataformas de distribución."
  }
];

export function PodcastEnvironment({ photos }: { photos: string[] }) {
  return (
    <div className="space-y-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
        <div className="space-y-16">
          {features.map((feature, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1}>
              <div>
                <span className="text-cta uppercase tracking-widest text-[10px] block mb-4 font-bold">{feature.label}</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">{feature.title}</h3>
                <p className="text-secondary text-base leading-relaxed">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal direction="right" delay={0.3}>
          <div className="relative aspect-square md:aspect-auto md:h-[700px] overflow-hidden group shadow-luxury-xl">
            <Image
              src={photos[0]}
              alt="Podcast Studio Setup"
              fill
              className="object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 border-24 border-background/20 pointer-events-none" />
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, j) => (
          <Reveal key={j} direction="up" delay={j * 0.1} width="100%">
            <div className="border-b border-primary/10 pb-12">
              <div className="relative aspect-4/3 overflow-hidden mb-8 group">
                <Image
                  src={photo}
                  alt={`Podcast Setup ${j + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="font-serif text-2xl mb-2 text-pretty">High-End Control {j + 1}</h4>
              <p className="text-secondary text-[10px] uppercase tracking-widest font-medium">Configuration & Audio</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
