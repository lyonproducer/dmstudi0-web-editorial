"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

export interface VideoItem {
  src: string;
  type: "horizontal" | "vertical" | "image";
  label?: string;
}

export interface Category {
  id: string;
  title: string;
  desc: string;
  items: VideoItem[];
  layout?: "horizontal" | "vertical" | "mixed";
}

function HoverVideo({ item }: { item: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignore autoplay policy errors if any
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={item.src}
        playsInline
        loop
        muted
        // Play is triggered on hover, so no autoPlay here!
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Play Icon - Visible initially, fades out on hover */}
      <div className="absolute inset-0 bg-black/10 transition-colors flex items-center justify-center opacity-100 group-hover:opacity-0 pointer-events-none">
        <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-md">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent translate-x-1" />
        </div>
      </div>
      
      {/* Label - Appears on hover */}
      {item.label && (
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-end pointer-events-none z-10">
          <span className="text-white text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
        </div>
      )}
    </div>
  );
}

export function VideoShowcase({ categories }: { categories: Category[] }) {
  return (
    <div className="space-y-48">
      {categories.map((category, i) => (
        <section key={i} id={category.id} className="scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-t border-primary/10 pt-12">
            <div className="md:w-1/3 sticky top-32">
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
            
            <div 
              className={cn(
                category.layout === "horizontal" 
                  ? "md:w-2/3 grid grid-cols-1 gap-6" 
                  : category.layout === "vertical"
                  ? "md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-2"
                  : "md:w-2/3 columns-1 md:columns-2 gap-4 space-y-4"
              )}
            >
              {category.items.map((item, j) => {
                const isVertical = item.type === "vertical";
                
                return (
                  <Reveal key={j} direction="up" delay={j * 0.1} width="100%" className={category.layout === "mixed" ? "break-inside-avoid" : ""}>
                    <div 
                      className={cn(
                        "relative flex overflow-hidden bg-stone-100 group rounded-xs",
                        isVertical ? "aspect-9/16" : "aspect-video"
                      )}
                    >
                      {item.type === "image" ? (
                        <>
                          <Image
                            src={item.src}
                            alt={item.label || `${category.title} image`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {item.label && (
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-end pointer-events-none z-10">
                              <span className="text-white text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <HoverVideo item={item} />
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
