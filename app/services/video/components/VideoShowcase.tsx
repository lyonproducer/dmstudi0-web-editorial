"use client";

import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface Category {
  title: string;
  desc: string;
  items: string[];
}

export function VideoShowcase({ categories }: { categories: Category[] }) {
  return (
    <div className="space-y-48">
      {categories.map((category, i) => (
        <section key={i}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-t border-primary/10 pt-12">
            <div className="md:w-1/3">
              <Reveal direction="down">
                <span className="text-[10px] uppercase tracking-widest text-cta mb-2 block font-medium">0{i + 1}</span>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <h2 className="text-4xl font-serif mb-6">{category.title}</h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-secondary text-sm leading-relaxed max-w-sm mb-12">{category.desc}</p>
                <div className="space-y-4">
                  {["4K High-Res Recording", "Professional Color Grading", "Storytelling Focus"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-cta rounded-full" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((photo, j) => (
                <Reveal key={j} direction="up" delay={j * 0.1} width="100%">
                  <div className="relative aspect-video overflow-hidden bg-stone-100 group">
                    <Image
                      src={photo}
                      alt={`${category.title} thumbnail ${j + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-40 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent translate-x-0.5" />
                      </div>
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
