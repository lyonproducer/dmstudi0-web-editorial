"use client";

import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface Category {
  title: string;
  desc: string;
  items: string[];
}

export function PhotoGallery({ categories }: { categories: Category[] }) {
  return (
    <div className="space-y-48">
      {categories.map((category, i) => (
        <section key={i} className="reveal-up">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-t border-primary/10 pt-12">
            <div className="md:w-1/3">
              <Reveal direction="down">
                <span className="text-[10px] uppercase tracking-widest text-cta mb-2 block font-medium">0{i + 1}</span>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <h2 className="text-4xl font-serif mb-6">{category.title}</h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-secondary text-sm leading-relaxed max-w-sm">{category.desc}</p>
              </Reveal>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-1">
              {category.items.map((photo, j) => (
                <Reveal key={j} direction="up" delay={j * 0.1} width="100%">
                  <div className="relative aspect-square overflow-hidden bg-stone-100 group">
                    <Image
                      src={photo}
                      alt={`${category.title} photo ${j + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-[10px] uppercase tracking-[0.2em] border border-white/40 px-3 py-1 bg-black/20 backdrop-blur-sm">Aesthetic View</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
