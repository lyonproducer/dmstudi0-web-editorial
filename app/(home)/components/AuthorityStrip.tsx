import React from "react";
import { cn } from "@/app/shared/utils";

const agencies = [
  "VOGUE",
  "Harper's BAZAAR",
  "GQ",
  "ELLE",
  "Architectural Digest",
];

export function AuthorityStrip({ className }: { className?: string }) {
  return (
    <section className={cn("bg-primary py-16 px-6 border-y border-white/5 overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 sm:gap-16 lg:gap-24 opacity-30 grayscale transition-all duration-700 hover:grayscale-0 hover:opacity-100">
        {agencies.map((name) => (
          <span
            key={name}
            className="text-white font-serif italic text-2xl md:text-3xl tracking-tighter whitespace-nowrap select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
