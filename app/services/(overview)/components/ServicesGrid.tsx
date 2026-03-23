"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface Service {
  title: string;
  id: string;
  desc: string;
  image: string;
}

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {services.map((service, index) => (
        <Reveal key={service.id} direction="up" delay={index * 0.1} width="100%">
          <Link
            href={`/services/${service.id}`}
            className="group relative aspect-3/4 overflow-hidden bg-stone-100 flex flex-col justify-end p-8 border border-primary/5 h-full w-full"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent transition-opacity" />

            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
              <span className="text-[10px] uppercase tracking-widest text-cta mb-2 block font-medium">0{index + 1}</span>
              <h2 className="text-3xl font-serif text-white mb-2">{service.title}</h2>
              <p className="text-white/60 text-sm mb-6 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {service.desc}
              </p>
              <span className="text-xs uppercase tracking-widest text-white border-b border-white/20 pb-1">Discover Service</span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
