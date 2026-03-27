import React from "react";
import { cn } from "@/app/shared/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
  duration?: number;
  gap?: string;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  repeat = 4,
  duration = 40,
  gap = "4rem",
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden w-full flex-row gap-(--gap)",
        className
      )}
      style={{
        "--duration": `${duration}s`,
        "--gap": gap,
      } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex flex-row shrink-0 justify-around gap-(--gap) animate-marquee", {
              "[animation-direction:reverse]": reverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
