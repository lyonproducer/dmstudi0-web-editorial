"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Types
interface iIPicture {
  src: string;
  scale: MotionValue<number> | null;
}

interface ImmersiveScrollGalleryProps {
  images?: iIPicture[];
  className?: string;
  headline?: string;
}

const IMAGE_STYLES = [
  "w-[25vw] h-[25vh]",
  "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]",
  "w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]",
  "w-[25vw] h-[25vh] left-[27.5vw]",
  "w-[20vw] h-[30vh] top-[30vh] left-[5vw]",
  "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]",
  "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]",
];

const ImmersiveScrollGallery: React.FC<ImmersiveScrollGalleryProps> = ({
  images = [],
  className = "",
  headline = "Every frame tells a story that commands attention.",
}) => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const opacityImage   = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const opacitySection = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const scaleSection   = useTransform(scrollYProgress, [0.6, 0.85], [0.85, 1]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  const pictures = images.slice(0, 7).map((img, i) => ({
    ...img,
    scale: scales[i % 7],
  }));

  return (
    <div ref={container} className={`relative h-[200vh] ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden bg-background">

        {/* Zooming Images */}
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale: scale as MotionValue<number>, opacity: opacityImage }}
            className="absolute flex items-center justify-center w-full h-full top-0"
          >
            <div className={`relative ${IMAGE_STYLES[index % IMAGE_STYLES.length]}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}

        {/* Editorial Text Reveal */}
        <motion.div
          style={{ opacity: opacitySection, scale: scaleSection }}
          className="absolute inset-0 flex items-center justify-center px-8 pointer-events-none"
        >
          <div className="max-w-4xl text-center">
            <p className="subheadline mb-8">Featured Works</p>
            <h2
              className="font-editorial text-primary text-3xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tighter"
            >
              {headline}
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ImmersiveScrollGallery;
