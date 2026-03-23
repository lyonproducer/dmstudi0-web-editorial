"use client";

import React, { createContext, use } from "react";
import Link from "next/link";
import { cn } from "@/app/shared/utils";
import { Reveal } from "@/components/cinematic/Reveal";

interface ServicesContextValue {
  theme?: "dark" | "light";
}

const ServicesContext = createContext<ServicesContextValue | null>(null);

function ServicesRoot({ children, theme = "dark", className }: { children: React.ReactNode; theme?: "dark" | "light"; className?: string }) {
  const bg = theme === "dark" ? "bg-primary text-white" : "bg-background text-primary";
  return (
    <ServicesContext value={{ theme }}>
      <section className={cn("py-48 px-6 overflow-hidden", bg, className)}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-32 items-start">
            {children}
          </div>
        </div>
      </section>
    </ServicesContext>
  );
}

function ServicesSummary({ label, title, desc, ctaText, ctaHref }: { label: string; title: string; desc: string; ctaText: string; ctaHref: string }) {
  const { theme } = use(ServicesContext)!;
  const sublabelColor = theme === "dark" ? "text-cta" : "text-secondary";
  const descColor = theme === "dark" ? "text-stone-400" : "text-secondary";
  const btnVariant = theme === "dark" ? "outline" : "primary";

  return (
    <div className="lg:col-span-1">
      <Reveal direction="down" delay={0.1}>
        <span className={cn("subheadline mb-6 block", sublabelColor)}>{label}</span>
      </Reveal>
      <Reveal direction="left" delay={0.2}>
        <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-[0.95] text-pretty">{title}</h3>
      </Reveal>
      <Reveal direction="up" delay={0.3}>
        <p className={cn("text-lg mb-16 leading-relaxed max-w-sm", descColor)}>
          {desc}
        </p>
      </Reveal>
      <Reveal direction="up" delay={0.4}>
        <Link 
          href={ctaHref} 
          className={cn(
            "inline-flex items-center justify-center px-10 py-5 uppercase font-medium tracking-[0.2em] transition-all duration-500",
            theme === "dark" ? "bg-white text-primary hover:bg-cta hover:text-white" : "bg-primary text-white hover:bg-cta"
          )}
        >
          {ctaText}
        </Link>
      </Reveal>
    </div>
  );
}

function ServicesGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5", className)}>
      {children}
    </div>
  );
}

function ServicesItem({ title, desc, href, index }: { title: string; desc: string; href: string; index: number }) {
  const { theme } = use(ServicesContext)!;
  const borderColor = theme === "dark" ? "border-white/5" : "border-primary/5";
  const hoverBg = theme === "dark" ? "hover:bg-white/5" : "hover:bg-stone-50";

  return (
    <Reveal direction="up" delay={index * 0.1}>
      <Link href={href} className={cn("group p-12 lg:p-16 border transition-all h-full flex flex-col justify-between", borderColor, hoverBg)}>
        <div>
          <span className="text-cta font-mono text-xs mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
          <h4 className="text-4xl font-serif mb-6 group-hover:text-cta transition-colors">{title}</h4>
          <p className="text-stone-500 text-sm leading-relaxed mb-12 max-w-xs">{desc}</p>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-cta transition-all self-start border-b border-transparent group-hover:border-cta pb-1 mt-auto">
          Discover Capability
        </span>
      </Link>
    </Reveal>
  );
}

export const Services = {
  Root: ServicesRoot,
  Summary: ServicesSummary,
  Grid: ServicesGrid,
  Item: ServicesItem,
};
