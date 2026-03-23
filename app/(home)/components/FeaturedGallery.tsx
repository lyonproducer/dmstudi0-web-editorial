"use client";

import React, { createContext, use } from "react";
import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface GalleryContextValue {
  layout?: "grid" | "masonry";
}

const GalleryContext = createContext<GalleryContextValue | null>(null);

function GalleryRoot({ children, layout = "masonry", className }: { children: React.ReactNode; layout?: "grid" | "masonry"; className?: string }) {
  return (
    <GalleryContext value={{ layout }}>
      <section className={cn("py-32 px-6 md:px-12 bg-background", className)}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </section>
    </GalleryContext>
  );
}

function GalleryHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col md:flex-row justify-between items-end mb-24 gap-12", className)}>
      {children}
    </div>
  );
}

function GalleryTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <Reveal direction="down" delay={0.1} width="100%">
        <span className="subheadline mb-4 block">{label}</span>
      </Reveal>
      <Reveal direction="left" delay={0.2} width="100%">
        <h2 className="text-4xl md:text-7xl font-serif font-light leading-none text-pretty">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

function GalleryGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32", className)}>
      {children}
    </div>
  );
}

function GalleryItem({ 
  src, 
  title, 
  category, 
  year = "2024",
  index = 0,
  className 
}: { 
  src: string; 
  title: string; 
  category: string; 
  year?: string; 
  index?: number;
  className?: string;
}) {
  const { layout } = use(GalleryContext)!;
  const isOffset = layout === "masonry" && index % 2 !== 0;

  return (
    <div className={cn("reveal-up group cursor-pointer", isOffset && "md:mt-48", className)}>
      <Reveal direction={isOffset ? "right" : "left"} delay={index * 0.1}>
        <div className="relative aspect-4/5 overflow-hidden bg-stone-200">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium border border-white/40 px-6 py-2 backdrop-blur-sm">View Work</span>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-start">
          <div>
            <h3 className="font-serif text-3xl mb-2">{title}</h3>
            <p className="text-secondary text-xs uppercase tracking-widest">{category} • {year}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export const Gallery = {
  Root: GalleryRoot,
  Header: GalleryHeader,
  Title: GalleryTitle,
  Grid: GalleryGrid,
  Item: GalleryItem,
};
