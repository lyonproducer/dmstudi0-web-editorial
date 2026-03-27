"use client";

import Link from "next/link";
import { Gallery } from "./FeaturedGallery";
import { photos } from "@/app/shared/constants";
import ScrollVelocity from "@/components/cinematic/ScrollVelocity";

export function Exhibition() {
  const featuredWorks = [
    { src: photos[1], title: "Editorial Muse", category: "Fashion Editorial" },
    { src: photos[2], title: "Modern Professional", category: "Personal Branding" },
    { src: photos[3], title: "Cinematic Narrative", category: "Brand Story" },
    { src: photos[4], title: "Studio Essence", category: "Portraiture" },
  ];

  return (
    <>
      <section className="pt-24 pb-12 bg-background overflow-x-hidden" id="exhibition">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Gallery.Root layout="masonry">
            <Gallery.Header>
              <Gallery.Title
                label="Featured Exhibition"
                title="A curated look at our most cinematic productions."
              />
              <Link href="/services/photography" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-medium border-b border-primary/20 pb-4">
                Explore All Works
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </Gallery.Header>

            <Gallery.Grid>
              {featuredWorks.map((work, index) => (
                <Gallery.Item
                  key={index}
                  index={index}
                  src={work.src}
                  title={work.title}
                  category={work.category}
                />
              ))}
            </Gallery.Grid>
          </Gallery.Root>
        </div>
      </section>

      {/* Independent Full-Width Marquee */}
      <section className="w-full overflow-hidden bg-background border-b border-primary/5 pb-12">
        <div className="w-full opacity-60 select-none pointer-events-none">
          <ScrollVelocity
            texts={['PHOTOGRAPHY PORTRAIT EDITORIAL HIGH FASHION CINEMATIC']}
            velocity={-40}
            className="text-primary/30 tracking-widest"
          />
        </div>
      </section>
    </>
  );
}
