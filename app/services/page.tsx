import Link from "next/link";
import { photos } from "../shared/constants";
import { ServicesGrid } from "./(overview)/components/ServicesGrid";
import { Reveal } from "@/components/cinematic/Reveal";

const services = [
  {
    title: "Professional Photography",
    id: "photography",
    desc: "Editorial, Lifestyle, and Professional Branding.",
    image: photos[2]
  },
  {
    title: "Video Production",
    id: "video",
    desc: "Social Content, Commercial, and Web Storytelling.",
    image: photos[3]
  },
  {
    title: "Podcast Production",
    id: "podcast",
    desc: "Technical setup, recording, and creative direction.",
    image: photos[4]
  },
  {
    title: "Post-Production",
    id: "post-production",
    desc: "Editing, Color Grading, and Sound Design.",
    image: photos[5]
  },
  {
    title: "Design & Branding",
    id: "design",
    desc: "Web Design and High-End Narrative Experiences.",
    image: photos[6]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal-up">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">Our Capabilities</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial">Professional Production Portfolio.</h1>
            </Reveal>
          </div>

          <ServicesGrid services={services} />
        </div>
      </div>

      {/* Conversion Section */}
      <section className="bg-primary py-48 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Ready to elevate <br /> your image?</h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl text-stone-400 mb-16 leading-relaxed max-w-2xl mx-auto">
              Every project begins with a creative consultation to ensure your vision is executed with technical perfection and artistic intelligence.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Schedule a Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2024 DMStudio Editorial. <Link href="/" className="hover:text-cta ml-4">Back to Studio</Link></p>
      </footer>
    </main>
  );
}
