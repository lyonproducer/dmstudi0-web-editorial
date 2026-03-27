
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/app/shared/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const desktopLinks = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/about" },
  { name: "Monthly Packages", href: "/packages" },
  { name: "Booking", href: "/booking", primary: true }
];

const mobileLinks = [
  { name: "Home", href: "/", num: "01" },
  { name: "About", href: "/about", num: "02" },
  { name: "Services", href: "/services", num: "03" },
  { name: "Packages", href: "/packages", num: "04" },
  { name: "Gallery", href: "/services/photography", num: "05" }
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-primary/5 px-6 md:px-12 py-6 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image src="/logos/dm.webp" alt="DMStudio Logo" width={150} height={40} className="object-contain" priority />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
          {desktopLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            
            if (link.primary) {
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="bg-primary text-white px-6 py-3 hover:bg-cta transition-all"
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "hover:text-cta transition-colors",
                  isActive ? "text-cta" : "text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden text-primary p-2 hover:text-cta transition-colors focus:outline-hidden"
          aria-label="Open Menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#0c0a09] text-white flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <Image 
                src="/logos/dm.webp" 
                alt="Logo" 
                width={130} 
                height={35} 
                className="brightness-0 invert object-contain opacity-90" 
              />
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white hover:text-cta transition-colors p-2"
                aria-label="Close Menu"
              >
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-10 py-12">
              <ul className="space-y-8">
                {mobileLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-red-700 font-serif text-sm mt-1">{link.num}</span>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl font-bold uppercase tracking-tight hover:text-red-700 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="relative p-10 pb-16 border-t border-white/5 flex flex-col gap-8"
            >
              {/* Background Watermark */}
              <div className="absolute top-0 right-[-30%] -translate-y-1/2 opacity-[0.03] pointer-events-none scale-[2.5] origin-right">
                 <Image src="/logos/dm.webp" alt="DM" width={600} height={200} className="brightness-0 invert" />
              </div>

              <div className="relative z-10 grid grid-cols-1 gap-12 text-[10px] uppercase tracking-[0.2em] text-stone-400">
                 <div>
                   <h4 className="mb-4 text-white/40">Let&apos;s Talk</h4>
                   <p className="text-white">(470) 222-5711</p>
                 </div>
                 <div>
                   <h4 className="mb-4 text-white/40">Social</h4>
                   <div className="flex gap-6">
                     <a href="https://www.instagram.com/foodstudi0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                     <a href="#" className="hover:text-white transition-colors">Facebook</a>
                     <a href="#" className="hover:text-white transition-colors">Mail</a>
                   </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
