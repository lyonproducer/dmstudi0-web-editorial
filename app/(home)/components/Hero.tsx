"use client";

import React, { createContext, use } from "react";
import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { motion, AnimatePresence } from "framer-motion";

interface HeroContextValue {
  priority?: boolean;
}

const HeroContext = createContext<HeroContextValue | null>(null);

export function HeroRoot({ children, priority = true, className }: { children: React.ReactNode; priority?: boolean; className?: string }) {
  return (
    <HeroContext value={{ priority }}>
      <section className={cn("relative h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6 text-center", className)}>
        {children}
      </section>
    </HeroContext>
  );
}

export function HeroVisual({ src, alt, interval = 5000, randomize = false }: { src: string | string[]; alt: string; interval?: number; randomize?: boolean }) {
  const { priority } = use(HeroContext)!;
  const slides = Array.isArray(src) ? src : [src];
  const [index, setIndex] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);

  // Initial random pick to avoid starting at 0 every time
  React.useEffect(() => {
    setIsMounted(true);
    if (randomize && slides.length > 1) {
      setIndex(Math.floor(Math.random() * slides.length));
    }
  }, [randomize, slides.length]);

  React.useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (!randomize) return (prev + 1) % slides.length;
        
        // Random pick excluding current
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * slides.length);
        } while (nextIndex === prev && slides.length > 1);
        return nextIndex;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval, randomize]);

  // Prevent flash content if not mounted to avoid hydration issues with random index
  if (!isMounted && randomize) {
    return <div className="absolute inset-0 z-0 bg-black" />;
  }

  const currentSrc = slides[index];
  const isVideo = currentSrc?.toLowerCase().endsWith(".mp4");

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0"
        >
          {isVideo ? (
            <video
              src={currentSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={currentSrc}
              alt={alt}
              fill
              priority={priority}
              className="object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

export function HeroContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative z-10 flex flex-col items-center gap-6", className)}>
      {children}
    </div>
  );
}

export function HeroActions({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col md:flex-row gap-4 mt-8", className)}>
      {children}
    </div>
  );
}

export function HeroScrollLink() {
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

export default Hero;
