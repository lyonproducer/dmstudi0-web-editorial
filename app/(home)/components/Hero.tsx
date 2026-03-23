"use client";

import React, { createContext, use } from "react";
import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface HeroContextValue {
  priority?: boolean;
}

const HeroContext = createContext<HeroContextValue | null>(null);

function HeroRoot({ children, priority = true, className }: { children: React.ReactNode; priority?: boolean; className?: string }) {
  return (
    <HeroContext value={{ priority }}>
      <section className={cn("relative h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6 text-center", className)}>
        {children}
      </section>
    </HeroContext>
  );
}

function HeroVisual({ src, alt }: { src: string; alt: string }) {
  const { priority } = use(HeroContext)!;
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-2000 hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

function HeroContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative z-10 flex flex-col items-center gap-6", className)}>
      {children}
    </div>
  );
}

function HeroActions({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 mt-8", className)}>
      {children}
    </div>
  );
}

function HeroScrollLink() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce cursor-pointer">
      <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <div className="w-px h-12 bg-white/20" />
    </div>
  );
}

export const Hero = {
  Root: HeroRoot,
  Visual: HeroVisual,
  Content: HeroContent,
  Actions: HeroActions,
  ScrollLink: HeroScrollLink,
};
