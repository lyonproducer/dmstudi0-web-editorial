"use client";

import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface Detail {
  title: string;
  desc: string;
}

const details: Detail[] = [
  {
    title: "Precision Editing",
    desc: "Cortes con ritmo editorial, narrativa fluida y atención microscópica al detalle para que cada frame cuente una historia."
  },
  {
    title: "Cinematic Color",
    desc: "Color grading profesional que eleva el valor de producción, creando una estética única y coherente para tu marca."
  },
  {
    title: "Immersive Sound",
    desc: "Diseño sonoro y limpieza de audio que garantiza una experiencia envolvente y profesional en cualquier dispositivo."
  }
];

export function EditingSuite({ photos }: { photos: string[] }) {
  return (
    <div className="space-y-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <Reveal direction="left">
          <div className="relative aspect-4/5 md:h-[600px] overflow-hidden group shadow-luxury-2xl bg-primary">
            <Image
              src={photos[0]}
              alt="Post Production Suite"
              fill
              className="object-cover opacity-60 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 p-12 bg-linear-to-t from-primary to-transparent">
              <span className="text-cta text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">Technical Mastery</span>
              <h3 className="text-white text-3xl font-serif">The Final Polish.</h3>
            </div>
          </div>
        </Reveal>

        <div className="space-y-12">
          {details.map((detail, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1}>
              <div className="border-l border-cta/30 pl-8 transition-colors hover:border-cta">
                <h4 className="text-2xl font-serif mb-4">{detail.title}</h4>
                <p className="text-secondary text-base leading-relaxed">{detail.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 md:px-0">
        {photos.slice(1, 4).map((photo, j) => (
          <Reveal key={j} direction="up" delay={j * 0.1} width="100%">
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src={photo}
                alt={`Process detail ${j + 1}`}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
