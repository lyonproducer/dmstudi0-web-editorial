"use client";

import Link from "next/link";
import { Gallery } from "./FeaturedGallery";
import { photos } from "@/app/shared/constants";

export function Exhibition() {
  const featuredWorks = [
    { src: photos[1], title: "Editorial Muse", category: "Fashion Editorial" },
    { src: photos[2], title: "Modern Professional", category: "Personal Branding" },
    { src: photos[3], title: "Cinematic Narrative", category: "Brand Story" },
    { src: photos[4], title: "Studio Essence", category: "Portraiture" },
  ];

  return (
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
  );
}
