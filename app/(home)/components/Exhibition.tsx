"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { editorialCategories } from "@/app/shared/categories";
import { Reveal } from "@/components/cinematic/Reveal";
import ScrollVelocityMarquee from "@/components/cinematic/ScrollVelocity";

type WorkItem = {
  id: string;
  title: string;
  category: string;
  cover: string;
  desc: string;
  items: string[];
};

const SCATTER_POSITIONS: Record<number, string> = {
  0: "md:w-[90%] lg:w-[80%] md:mr-auto md:-translate-x-4 md:-rotate-2 md:mt-12",
  1: "md:w-[90%] lg:w-[80%] md:mx-auto md:rotate-[1deg] md:translate-y-[10vh]",
  2: "md:w-[90%] lg:w-[80%] md:ml-auto md:translate-x-4 md:rotate-3",
  3: "md:w-[90%] lg:w-[80%] md:mr-auto md:-translate-x-6 md:-rotate-1 md:translate-y-[5vh]",
  4: "md:w-[90%] lg:w-[80%] md:mx-auto md:-rotate-2 md:translate-y-[15vh]",
  5: "md:w-[90%] lg:w-[80%] md:ml-auto md:translate-x-6 md:rotate-[2deg] md:translate-y-[5vh]",
  6: "md:w-[90%] lg:w-[80%] md:mr-auto md:-translate-x-8 md:rotate-1 md:translate-y-[10vh]",
  7: "md:w-[90%] lg:w-[80%] md:mx-auto md:-rotate-[3deg] md:translate-y-[25vh]",
};

function ExhibitionCard({ work, index }: { work: WorkItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const positionClass = SCATTER_POSITIONS[index] ?? "";

  return (
    <motion.div
      ref={ref}
      className={`w-full relative mb-16 md:mb-0 ${positionClass}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link
        href={`/editorial/${work.id}`}
        className="group block relative w-full aspect-[3/4] md:aspect-[4/5] hover:z-50 transition-transform duration-700 hover:scale-[1.03] shadow-2xl"
      >
        <Image
          src={work.cover}
          alt={work.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Permanent vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
          <span className="text-[10px] uppercase tracking-widest text-cta mb-2 font-bold">{work.category}</span>
          <h3 className="text-3xl md:text-5xl font-serif text-white">{work.title}</h3>
          <span className="mt-8 text-[10px] uppercase tracking-widest text-white border border-white px-6 py-3 w-max backdrop-blur-sm">View Editorial</span>
        </div>

        {/* Static label always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-[10px] uppercase tracking-widest text-white/60 block mb-1">{work.category}</span>
          <p className="text-white font-serif text-xl md:text-2xl leading-tight">{work.title}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export function Exhibition() {
  return (
    <>
      <section className="pt-32 pb-48 bg-background relative overflow-hidden" id="exhibition">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <Reveal direction="down">
            <span className="text-[10px] uppercase tracking-widest text-secondary block font-medium mb-4">Featured Exhibition</span>
          </Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <Reveal direction="left" delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-serif max-w-2xl leading-tight">A curated look at our most cinematic productions.</h2>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <Link
                href="/editorial"
                className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-b border-primary/20 pb-2 hover:border-cta hover:text-cta transition-colors"
              >
                Explore All Works
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Falling Magazines — breaks out of max-w container */}
        <div className="w-full relative mt-12 md:mt-32 px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full relative pb-64 lg:pb-72">
            {editorialCategories.map((work, index) => (
              <ExhibitionCard key={work.id} work={work} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Marquee */}
      <section className="w-full overflow-hidden bg-background border-b border-primary/5 pb-12">
        <div className="w-full opacity-60 select-none pointer-events-none">
          {ScrollVelocityMarquee && (
            <ScrollVelocityMarquee
              texts={["PHOTOGRAPHY PORTRAIT EDITORIAL HIGH FASHION CINEMATIC"]}
              velocity={-40}
              className="text-primary/30 tracking-widest"
            />
          )}
        </div>
      </section>
    </>
  );
}
