"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  height?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = "100%", 
  height = "fit-content",
  delay = 0,
  direction = "up",
  duration = 0.8,
  className
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const directions = {
    up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  };

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        position: "relative", 
        width, 
        height, 
        overflow: hasAnimated ? "visible" : "hidden", 
        display: "block" 
      }}
    >
      <motion.div
        variants={directions[direction]}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ width, height, display: "block" }}
        transition={{ 
          duration, 
          delay, 
          ease: [0.23, 1, 0.32, 1] 
        }}
        onAnimationComplete={() => setHasAnimated(true)}
      >
        {children}
      </motion.div>
    </div>
  );
};
