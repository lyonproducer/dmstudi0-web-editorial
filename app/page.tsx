"use client";

import Link from "next/link";
import Image from "next/image";
import { photos } from "@/app/shared/constants";
import { Hero } from "./(home)/components/Hero";
import { AuthorityStrip } from "./(home)/components/AuthorityStrip";
import { Gallery } from "./(home)/components/FeaturedGallery";
import { Services } from "./(home)/components/ServicesPreview";
import { Reveal } from "@/components/cinematic/Reveal";

export default function Home() {
  const heroPhoto = photos[0];
  const featuredWorks = [
    { src: photos[1], title: "Editorial Muse", category: "Fashion Editorial" },
    { src: photos[2], title: "Modern Professional", category: "Personal Branding" },
    { src: photos[3], title: "Cinematic Narrative", category: "Brand Story" },
    { src: photos[4], title: "Studio Essence", category: "Portraiture" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Cinematic Hero Section */}
      <Hero.Root priority>
        <Hero.Visual src={heroPhoto} alt="Luxury Editorial Photography Studio" />
        <Hero.Content>
          <Reveal direction="down">
            <span className="subheadline text-white/80 mb-6 block">Luxury Portrait & Video Production</span>
          </Reveal>
          <Reveal direction="left" delay={0.2}>
            <h1 className="h1-editorial text-white max-w-6xl">
              Capturing the Essence of &apos;Premium&apos; Thinking.
            </h1>
          </Reveal>
          <Hero.Actions>
            <Link href="/booking" className="bg-white text-primary px-10 py-5 uppercase font-medium tracking-[0.2em] transition-all duration-500 hover:bg-cta hover:text-white">
              Book a Consultation
            </Link>
            <Link href="/services" className="bg-transparent text-white border border-white hover:bg-white hover:text-primary px-10 py-5 uppercase font-medium tracking-[0.2em] transition-all duration-500">
              Explore Services
            </Link>
          </Hero.Actions>
        </Hero.Content>
        <Hero.ScrollLink />
      </Hero.Root>

      {/* 2. Authority Endorsements */}
      <AuthorityStrip />

      {/* 3. Featured Exhibition (Masonry Gallery) */}
      <Gallery.Root layout="masonry">
        <Gallery.Header>
          <Gallery.Title 
            label="Featured Exhibition" 
            title="A curated look at our most cinematic productions." 
          />
          <Link href="/services/photography" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-medium border-b border-primary/20 pb-4">
            Explore All Works
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </Gallery.Header>

        <Gallery.Grid>
          {featuredWorks.map((work, index) => (
            <Gallery.Item 
              key={index} 
              index={index} 
              src={work.src} 
              title={work.title} 
              category={work.category} 
            />
          ))}
        </Gallery.Grid>
      </Gallery.Root>

      {/* 4. Services Preview (High Contrast Dark Section) */}
      <Services.Root theme="dark">
        <Services.Summary 
          label="Our Capabilities"
          title="Beyond the Shutter."
          desc="From high-fashion editorial portraits to strategic podcast production, we provide the brain before the beauty."
          ctaText="View all Services"
          ctaHref="/services"
        />
        <Services.Grid>
          {[
            { title: "Photography", desc: "Editorial, Lifestyle & Professional Branding.", href: "/services/photography" },
            { title: "Video Production", desc: "Cinematic Storytelling & Social Content.", href: "/services/video" },
            { title: "Podcasts", desc: "Creative Direction, Setup & Environment Build-out.", href: "/services/podcast" },
            { title: "Design", desc: "High-End Web & Narrative Experiences.", href: "/services/design" }
          ].map((service, i) => (
            <Services.Item 
              key={i}
              index={i}
              title={service.title}
              desc={service.desc}
              href={service.href}
            />
          ))}
        </Services.Grid>
      </Services.Root>

      {/* 5. Minimalist Footer */}
      <footer className="py-32 px-6 border-t border-primary/5 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="md:col-span-2">
            <Image src="/logos/dm.webp" alt="DMStudio Logo" width={180} height={50} className="object-contain mb-8 opacity-80" />
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
    </main>
  );
}
