"use client";

import React, { useRef, MouseEvent, useState, useEffect } from "react";
import { cn } from "@/app/shared/utils";
import { motion, AnimatePresence } from "framer-motion";

interface PerspectiveBookProps {
  children?: React.ReactNode;
  className?: string;
  photo?: string;
  name?: string;
  role?: string;
  studio?: string;
  badgeId?: string;
  size?: "sm" | "default" | "lg";
  textured?: boolean;
}

const sizeMap = {
  sm: { w: "w-52", h: "h-72", depth: "6px" },
  default: { w: "w-64", h: "h-96", depth: "8px" },
  lg: { w: "w-80", h: "h-[28rem]", depth: "10px" },
};

const BEHIND_SCENES_PHOTOS = [
  "/images/photos-array-behind-the-scenes/234ce3ccfba8ac414c67ee661944a758-large.jpg",
  "/images/photos-array-behind-the-scenes/3d25fdef2a767f7f3528dcd0e351b792-large.jpg",
  "/images/photos-array-behind-the-scenes/6dff244ea9ac3e448544313f62765cf6-large.jpg",
  "/images/photos-array-behind-the-scenes/c68710c2037c7cb948a34d115325269c-cover.jpg",
  "/images/photos-array-behind-the-scenes/c88962ceb2184b658eada01022d7a28b-large.jpg",
  "/images/photos-array-behind-the-scenes/d82033a2eedf460ba54fe084bb25d5fd-large.jpg",
  "/images/photos-array-behind-the-scenes/d88648b019439e2b434a92d800170f60-large.jpg",
  "/images/photos-array-behind-the-scenes/eabd76d85032bfe91bdf3bb15fe6bffc-large.jpg",
  "/images/photos-array-behind-the-scenes/f529da6bf4479df41364a9714c3361ca-large.jpg",
  "/images/photos-array-behind-the-scenes/fec836e3170382045c87182decc69749-large.jpg",
];

export function PerspectiveBook({
  children,
  className,
  photo,
  name = "Daniel Martinez",
  role = "Director & Visual Artist",
  studio = "DMStudio Editorial",
  badgeId = "DMS-001",
  size = "default",
  textured = false,
}: PerspectiveBookProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { w, h, depth } = sizeMap[size];
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (photo) return; // don't cycle if a static photo was passed
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % BEHIND_SCENES_PHOTOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [photo]);

  /* Interactive tilt calculation */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateY(${xPct * 40}deg)
      rotateX(${yPct * -25}deg)
      scale3d(1.05, 1.05, 1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateY(0deg)
      rotateX(0deg)
      scale3d(1, 1, 1)
    `;
  };

  const currentPhoto = photo || BEHIND_SCENES_PHOTOS[photoIndex];

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer select-none"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          width: "fit-content",
          transformStyle: "preserve-3d",
          transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
        }}
      >
        {/* ── CARD THICKNESS (Left Edge) ───────────────────────────── */}
        <div
          className="absolute top-0 left-0 h-full bg-stone-800 origin-right"
          style={{
            width: depth,
            transform: `translateX(-100%) rotateY(-90deg)`,
            transformOrigin: "right",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-y-0 left-0 w-px bg-cta/50" />
        </div>

        {/* ── CARD FRONT ────────────────────────────────────────────── */}
        <div
          className={cn(
            "relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)] border border-white/10",
            w, h,
            className ?? "bg-[#0c0a09]"
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Top Brand Stripe */}
          <div className="absolute top-0 inset-x-0 h-1 bg-cta z-20" />

          {/* Holographic Shimmer Effect */}
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-[0.08]"
            style={{
              background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
              animation: "shimmer 4s ease-in-out infinite",
            }}
          />

          {/* Texture Grain Overlay */}
          {textured && (
            <div
              className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none z-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />
          )}

          {/* Headshot Photo Section */}
          <div className="relative w-full overflow-hidden" style={{ height: "68%" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhoto}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                src={currentPhoto}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-grayscale duration-700"
              />
            </AnimatePresence>
            {/* Soft fade to body */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0c0a09] z-10" />
          </div>

          {/* Content Details */}
          <div className="relative z-10 px-6 pb-6 flex flex-col justify-end h-[32%]">
            <h3 className="font-editorial text-white text-3xl font-bold leading-tight tracking-tight">
              {name}
            </h3>
            <p className="text-cta text-[10px] uppercase tracking-[0.3em] font-semibold mt-1">
              {role}
            </p>

            <div className="w-full h-px bg-white/10 my-4" />

            <div className="flex items-end justify-between">
              <div>
                <p className="text-white/30 text-[8px] uppercase tracking-[0.25em] mb-1">Studio</p>
                <p className="text-white text-[10px] font-medium tracking-widest">{studio}</p>
              </div>
              <div className="text-right">
                <p className="text-white/30 text-[8px] uppercase tracking-[0.25em] mb-1">Badge</p>
                <p className="text-white/60 font-mono text-[9px]">{badgeId}</p>
              </div>
            </div>

            {/* Support for children in case extra info is needed */}
            {children && <div className="mt-4">{children}</div>}
          </div>
        </div>

        {/* ── CARD THICKNESS (Right Edge) ──────────────────────────── */}
        <div
          className={cn("absolute top-0 right-0 bg-stone-700", h)}
          style={{
            width: depth,
            transform: `translateX(100%) rotateY(90deg)`,
            transformOrigin: "left",
            backfaceVisibility: "hidden",
          }}
        />
      </div>
    </div>
  );
}
