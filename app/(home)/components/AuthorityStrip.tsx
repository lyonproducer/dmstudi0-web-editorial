import React from "react";
import { cn } from "@/app/shared/utils";
import { Marquee } from "@/components/cinematic/Marquee";

const agencies = [
  "Grazia",
  "Element",
  "L'Officiel",
  "Hollyway",
  "Glamour",
  "Celebrity",
  "Fashion & Lux for Gents FLG",
  "Architectural Digest",
];

export function AuthorityStrip({ className }: { className?: string }) {
  return (
    <section className={cn("bg-primary py-16 border-y border-white/5 overflow-hidden", className)}>
      <div className="max-w-[100vw] mx-auto opacity-40 grayscale transition-all duration-700 hover:grayscale-0 hover:opacity-100">
        <Marquee duration={25} gap="6rem" pauseOnHover>
          {agencies.map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              className="text-white font-editorial italic text-3xl md:text-4xl tracking-tighter whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
