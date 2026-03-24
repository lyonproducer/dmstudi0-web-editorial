import Link from "next/link";
import { photos } from "../../shared/constants";
import { VideoShowcase } from "./components/VideoShowcase";
import { Reveal } from "@/components/cinematic/Reveal";

export default function VideoPage() {
  const socialVideoPhotos = photos.slice(30, 33);
  const commercialVideoPhotos = photos.slice(34, 37);

  const categories = [
    { title: "Social Media Content", desc: "Instagram Reels, TikTok / Shorts, viral videos, and storytelling with optimized editing.", items: socialVideoPhotos },
    { title: "Commercial / Web Video", desc: "Corporate videos for websites, professional YouTube presence, and brand promotional videos.", items: commercialVideoPhotos }
  ];

  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">Our Visual Agency</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif">High-Impact <br /> Video Production.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                Videos that don&apos;t just look good, but tell a story and connect with your audience. Professional recording, expert editing, and optimized delivery for every platform.
              </p>
            </Reveal>
          </div>

          <VideoShowcase categories={categories} />
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-24 text-center md:text-left">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevating the visual standard of your content.</h3>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-xl text-stone-400 mb-16 max-w-lg leading-relaxed mx-auto md:mx-0">
                We design content strategies, handle full recording and editing, and provide optimized delivery to maximize your organic and paid reach.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2026 DMStudio Editorial. <Link href="/services" className="hover:text-cta ml-4">All Services</Link></p>
      </footer>
    </main>
  );
}
