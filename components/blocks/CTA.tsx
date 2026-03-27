"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/cinematic/Reveal";
import Link from "next/link";
import React from "react";

export interface CallToActionProps {
  subheadline?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CallToActionSection({
  subheadline = "Ready to Begin?",
  title = "Transform Your Vision into a Living Narrative.",
  description = "Experience the standard of luxury production. Limited bookings available each month.",
  primaryButtonText = "Book Consultation",
  primaryButtonHref = "/booking",
  secondaryButtonText = "Our Process",
  secondaryButtonHref = "/about",
}: CallToActionProps) {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="relative bg-[#050505] hover:bg-[#f2f2ef] transition-colors duration-700 ease-in-out group mx-auto flex w-full max-w-5xl flex-col justify-between gap-y-12 px-8 py-20 md:py-32 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

        {/* Paper Texture Overlays */}
        <div
          className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.08] pointer-events-none mix-blend-screen group-hover:mix-blend-multiply transition-all duration-700"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.04] pointer-events-none transition-all duration-700"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' /%3E%3CfeDisplacementMap in='SourceAlpha' scale='20' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.2'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Elegant Frame Corners inner padding & transitioning accent */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-cta group-hover:border-black transition-colors duration-700 pointer-events-none" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-cta group-hover:border-black transition-colors duration-700 pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-cta group-hover:border-black transition-colors duration-700 pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-cta group-hover:border-black transition-colors duration-700 pointer-events-none" />

        {/* Decorative Side Lines */}
        <div className="-inset-y-12 pointer-events-none absolute left-0 w-px border-l border-white/10 group-hover:border-black/20 transition-colors duration-700" />
        <div className="-inset-y-12 pointer-events-none absolute right-0 w-px border-r border-white/10 group-hover:border-black/20 transition-colors duration-700" />

        {/* Central Vertical Dashed Line */}
        <div className="-z-1 absolute top-0 left-1/2 h-full border-l border-dashed border-white/5 group-hover:border-black/10 transition-colors duration-700 hidden md:block" />

        <div className="space-y-6 text-center z-10 transition-colors duration-700">
          {subheadline && (
            <Reveal direction="down">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-cta group-hover:text-black transition-colors duration-700 mb-6 block">
                {subheadline}
              </span>
            </Reveal>
          )}

          <Reveal direction="up" delay={0.1}>
            <h2 className="font-editorial font-bold text-4xl md:text-5xl lg:text-7xl text-white group-hover:text-black transition-colors duration-700 leading-[1.1] tracking-tighter max-w-3xl mx-auto">
              {title}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-white/70 group-hover:text-black/70 transition-colors duration-700 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light group-hover:font-medium">
              {description}
            </p>
          </Reveal>
        </div>

        <div className="flex justify-center z-10 w-full transition-colors duration-700">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {secondaryButtonText && secondaryButtonHref && (
              <Reveal direction="up" delay={0.3} width="fit-content">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-white/20 text-white hover:border-cta hover:text-cta group-hover:border-black/20 group-hover:text-black transition-colors duration-700"
                  asChild
                >
                  <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
                </Button>
              </Reveal>
            )}

            {primaryButtonText && primaryButtonHref && (
              <Reveal direction="up" delay={0.4} width="fit-content">
                <Button
                  asChild
                  variant="white"
                  className="w-full md:w-auto group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors duration-700"
                >
                  <Link href={primaryButtonHref} className="group/btn">
                    {primaryButtonText} <ArrowRightIcon className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </Reveal>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

