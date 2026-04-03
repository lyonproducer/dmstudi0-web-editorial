"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  accent: string;
  imageUrl: string;
}

export function ScrollCarousel({ slides }: { slides: SlideData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine the active slide index by mapping 0..1 to 0..slides.length-1
    let index = Math.floor(latest * slides.length);
    if (index >= slides.length) index = slides.length - 1;
    if (index < 0) index = 0;
    setCurrentIndex(index);
  });

  const currentSlide = slides[currentIndex];

  return (
    <div
      ref={containerRef}
      style={{ height: `${slides.length * 100}vh`, position: "relative" }}
      className="relative w-full bg-[#050505]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background accent wash */}
        <div
          className="absolute inset-0 transition-colors duration-1000 ease-in-out opacity-40 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}20 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
            <div className="mb-4">
              <span className="text-white/40 font-mono text-sm tracking-[0.2em] uppercase">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="h-[280px] md:h-[320px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-x-0 top-0 flex flex-col gap-6"
                >
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-editorial font-bold text-white tracking-tighter leading-[1.1]">
                    {currentSlide.title}
                  </h2>

                  <p
                    className="text-xl md:text-2xl font-editorial italic"
                    style={{ color: currentSlide.accent }}
                  >
                    {currentSlide.subtitle}
                  </p>

                  <p className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed font-light">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 md:mt-8">
              <Button asChild variant="white">
                <Link href={currentSlide.href} className="group">
                  Explore {currentSlide.title}{" "}
                  <ArrowRightIcon className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Image Container */}
          <div className="w-full md:w-1/2 h-[45vh] md:h-[65vh] relative p-4">
            <div className="w-full h-full relative overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentSlide.imageUrl}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Image Overlay */}
                  <div
                    className="absolute inset-0 mix-blend-overlay"
                    style={{
                      background: `linear-gradient(135deg, ${currentSlide.accent}30 0%, transparent 60%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative corners */}
            <div
              className="absolute top-0 left-0 w-8 h-8 border-t border-l transition-colors duration-700 pointer-events-none"
              style={{ borderColor: currentSlide.accent }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 border-b border-r transition-colors duration-700 pointer-events-none"
              style={{ borderColor: currentSlide.accent }}
            />
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white">
            Scroll to discover
          </span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-white/50"
          />
        </div>
      </div>
    </div>
  );
}
