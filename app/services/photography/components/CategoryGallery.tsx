"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Reveal } from "@/components/cinematic/Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryGalleryProps {
  title: string;
  items: string[];
  largeImages?: boolean;
}

export function CategoryGallery({ title, items, largeImages = false }: CategoryGalleryProps) {
  // Lightbox State
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  // Lightbox Handlers
  const nextSlide = useCallback(() => {
    setLightbox(prev => {
      if (!prev) return null;
      return { index: (prev.index + 1) % items.length };
    });
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setLightbox(prev => {
      if (!prev) return null;
      return { index: (prev.index - 1 + items.length) % items.length };
    });
  }, [items.length]);

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [lightbox]);

  return (
    <>
      <div className="w-full">
        <div className={`grid ${largeImages ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"}`}>
          {items.map((photo, j) => (
            <Reveal key={j} direction="up" delay={(j % (largeImages ? 2 : 4)) * 0.1} width="100%">
              <div 
                className={`relative ${largeImages ? "aspect-square md:aspect-4/5" : "aspect-4/5"} overflow-hidden bg-stone-100 group cursor-pointer`}
                onClick={() => setLightbox({ index: j })}
              >
                <Image
                  src={photo}
                  alt={`${title} photo ${j + 1}`}
                  fill
                  sizes={largeImages ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] uppercase tracking-[0.2em] border border-white/40 px-3 py-1 bg-black/20 backdrop-blur-sm">View Full Res</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl">
          <button 
            onClick={() => setLightbox(null)}
            className="absolute top-8 right-8 text-primary/60 hover:text-primary transition-colors cursor-pointer z-50 bg-white/10 p-2 rounded-full backdrop-blur-md"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:left-12 text-primary/60 hover:text-primary transition-colors cursor-pointer z-50 bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-md hover:scale-110"
          >
            <ChevronLeft size={36} strokeWidth={1} />
          </button>

          <div className="relative w-[85vw] h-[85vh] max-w-7xl">
             <Image
                src={items[lightbox.index]}
                alt={`${title} enlarged`}
                fill
                className="object-contain"
                
                priority
             />
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-4 md:right-12 text-primary/60 hover:text-primary transition-colors cursor-pointer z-50 bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-md hover:scale-110"
          >
            <ChevronRight size={36} strokeWidth={1} />
          </button>

          <div className="absolute bottom-8 text-[11px] uppercase tracking-[0.3em] font-medium text-primary/60 flex items-center gap-4">
             <span>{title}</span>
             <div className="w-1 h-1 bg-primary/40 rounded-full" />
             <span>{lightbox.index + 1} / {items.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
