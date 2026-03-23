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
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-24 lg:gap-32 items-start">
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

  return (
    <div className="lg:col-span-1 lg:pr-12">
      <Reveal direction="down" delay={0.1} width="100%">
        <div className="flex items-center gap-4 mb-8">
          <div className={cn("w-8 h-px", theme === "dark" ? "bg-cta/50" : "bg-primary/20")} />
          <span className={cn("subheadline mb-0!", sublabelColor)}>{label}</span>
        </div>
      </Reveal>
      <Reveal direction="left" delay={0.2} width="100%">
        <h3 className="text-6xl md:text-8xl font-serif mb-14 leading-[0.9] tracking-tighter text-pretty">
          {title}
        </h3>
      </Reveal>
      <Reveal direction="up" delay={0.3} width="100%">
        <p className={cn("text-xl mb-16 leading-relaxed font-light max-w-sm", descColor)}>
          {desc}
        </p>
      </Reveal>
      <Reveal direction="up" delay={0.4} width="100%">
        <Link 
          href={ctaHref} 
          className={cn(
            "group inline-flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold transition-all",
            theme === "dark" ? "text-white hover:text-cta" : "text-primary hover:text-cta"
          )}
        >
          <span>{ctaText}</span>
          <div className="relative w-16 h-px bg-current overflow-hidden">
            <div className="absolute inset-0 bg-cta -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </div>
        </Link>
      </Reveal>
    </div>
  );
}

function ServicesGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  const { theme } = use(ServicesContext)!;
  const lineColor = theme === "dark" ? "bg-white/10" : "bg-primary/10";
  return (
    <div className={cn("lg:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-px", lineColor, className)}>
      {children}
    </div>
  );
}

function ServicesItem({ title, desc, href, index }: { title: string; desc: string; href: string; index: number }) {
  const { theme } = use(ServicesContext)!;
  const itemBg = theme === "dark" ? "bg-primary" : "bg-background";
  const hoverBg = theme === "dark" ? "hover:bg-white/[0.03]" : "hover:bg-stone-50";

  return (
    <Reveal direction="up" delay={index * 0.1} width="100%" height="100%">
      <Link href={href} className={cn("group p-12 lg:p-16 transition-all h-full flex flex-col justify-between", itemBg, hoverBg)}>
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
