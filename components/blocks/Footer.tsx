"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-primary/5 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
        <div className="md:col-span-2">
          <Image src="/logos/dm.webp" alt="DMStudio Logo" width={180} height={50} style={{ height: "auto" }} className="object-contain mb-8 opacity-80" />
          <p className="text-secondary text-lg leading-relaxed max-w-sm">
            Atlanta&apos;s premier luxury production house. Specialized in celebrity portraiture, editorial campaigns, and technical podcast environments.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-10 text-primary/40">Studio</h4>
          <ul className="space-y-6 text-sm font-medium">
            <li><Link href="/services" className="hover:text-cta transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-cta transition-colors">Process</Link></li>
            <li><Link href="/packages" className="hover:text-cta transition-colors">Monthly Packages</Link></li>
            <li><Link href="/booking" className="hover:text-cta transition-colors">Book Consultation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-10 text-primary/40">Connect</h4>
          <ul className="space-y-6 text-sm font-medium">
            <li><a href="#" className="hover:text-cta transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-cta transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-cta transition-colors">YouTube</a></li>
            <li><a href="#" className="hover:text-cta transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-medium text-secondary">
        <p>© 2024 DMStudio Editorial. All rights reserved.</p>
        <div className="flex gap-12">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
