"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Reveal } from "@/components/cinematic/Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  id: string;
  title: string;
  desc: string;
  items: string[];
}

export function PhotoGallery({ categories, startIndex = 0 }: { categories: Category[], startIndex?: number }) {
  // State to track expanded categories by index
  const [expandedCats, setExpandedCats] = useState<Record<number, boolean>>({});
  
  // Lightbox State
  const [lightbox, setLightbox] = useState<{ items: string[], index: number, title: string } | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCats(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Lightbox Handlers
  const nextSlide = useCallback(() => {
    setLightbox(prev => {
      if (!prev) return null;
      return { ...prev, index: (prev.index + 1) % prev.items.length };
    });
  }, []);

  const prevSlide = useCallback(() => {
    setLightbox(prev => {
      if (!prev) return null;
      return { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length };
    });
  }, []);

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
      <div className="space-y-48">
        {categories.map((category, i) => {
          const isExpanded = expandedCats[i];
          const displayLimit = 6;
          const visibleItems = isExpanded ? category.items : category.items.slice(0, displayLimit);
          const hasMoreToDisplay = category.items.length > displayLimit;

          return (
            <section key={i} id={category.id} className="reveal-up scroll-mt-32">
              <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-t border-primary/10 pt-12">
                <div className="md:w-1/3 sticky top-32">
                  <Reveal direction="down">
                    <span className="text-[10px] uppercase tracking-widest text-cta mb-2 block font-medium">0{startIndex + i + 1}</span>
                  </Reveal>
                  <Reveal direction="left" delay={0.1}>
                    <h2 className="text-4xl font-serif mb-6">{category.title}</h2>
                  </Reveal>
                  <Reveal direction="up" delay={0.2}>
                    <p className="text-secondary text-sm leading-relaxed max-w-sm">{category.desc}</p>
                  </Reveal>
                  
                  {hasMoreToDisplay && (
                    <Reveal direction="up" delay={0.3}>
                      <button 
                        onClick={() => toggleExpand(i)}
                        className="mt-8 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-primary/20 pb-1 hover:border-cta hover:text-cta transition-colors cursor-pointer"
                      >
                        {isExpanded ? "Collapse Viewing" : `View All ${category.items.length} Photos`}
                      </button>
                    </Reveal>
                  )}
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
                    {visibleItems.map((photo, j) => (
                      <Reveal key={j} direction="up" delay={(j % 6) * 0.1} width="100%">
                        {/* We use j directly as it always aligns with the start of category.items slice */}
                        <div 
                          className="relative aspect-4/5 overflow-hidden bg-stone-100 group cursor-pointer"
                          onClick={() => setLightbox({ items: category.items, index: j, title: category.title })}
                        >
                          <Image
                            src={photo}
                            alt={`${category.title} photo ${j + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-[10px] uppercase tracking-[0.2em] border border-white/40 px-3 py-1 bg-black/20 backdrop-blur-sm">View Full Res</span>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  
                  {isExpanded && hasMoreToDisplay && (
                    <div className="mt-12 flex justify-center">
                      <button 
                        onClick={() => {
                          toggleExpand(i);
                          document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-[10px] uppercase tracking-[0.2em] font-bold px-8 py-4 border border-primary/20 hover:border-cta hover:text-cta transition-colors cursor-pointer"
                      >
                        Collapse Viewing
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
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
                src={lightbox.items[lightbox.index]}
                alt={`${lightbox.title} enlarged`}
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
             <span>{lightbox.title}</span>
             <div className="w-1 h-1 bg-primary/40 rounded-full" />
             <span>{lightbox.index + 1} / {lightbox.items.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
