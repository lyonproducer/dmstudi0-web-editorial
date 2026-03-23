"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/app/shared/utils";

const links = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/about" },
  { name: "Monthly Packages", href: "/packages" },
  { name: "Booking", href: "/booking", primary: true }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/5 px-6 md:px-12 py-6 flex justify-between items-center">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image src="/logos/dm.webp" alt="DMStudio Logo" width={150} height={40} className="object-contain" />
      </Link>
      
      <div className="flex items-center gap-8 md:gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
        {links.map((link) => {
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
    </nav>
  );
}
