"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, motion, animate } from "framer-motion";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function Counter({ value, label, suffix = "+", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-secondary font-medium leading-tight max-w-[140px]">
        ({label})
      </span>
      <div className="text-4xl md:text-5xl font-editorial font-bold text-primary tracking-tighter">
        {count}
        {suffix}
      </div>
    </div>
  );
}

export function AuthorityStats() {
  const stats = [
    { value: 8, label: "Years of global industry experience", suffix: "+" },
    { value: 120, label: "Creative directions & shoot concepts", suffix: "+" },
    { value: 45, label: "Recognized artists & global celebrities", suffix: "+" },
    { value: 90, label: "Visual identities created for top brands", suffix: "%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-start justify-between w-full mt-24 pt-16 border-t border-primary/10">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.8 }}
        >
          <Counter 
            value={stat.value} 
            label={stat.label} 
            suffix={stat.suffix} 
          />
        </motion.div>
      ))}
    </div>
  );
}
