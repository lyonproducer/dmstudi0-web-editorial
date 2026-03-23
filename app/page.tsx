import { HeroRoot, HeroVisual, HeroContent, HeroActions, HeroScrollLink } from "./(home)/components/Hero";
import { AuthorityStrip } from "./(home)/components/AuthorityStrip";
import { Exhibition } from "./(home)/components/Exhibition";
import { Capabilities } from "./(home)/components/Capabilities";
import { Footer } from "@/components/blocks/Footer";
import { Reveal } from "@/components/cinematic/Reveal";
import { photos } from "@/app/shared/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Cinematic Hero Section */}
      <HeroRoot priority>
        <HeroVisual
          src={[photos[0], photos[11], photos[18], photos[33]]}
          alt="Luxury Editorial Photography Studio"
          randomize={true}
        />
        <HeroContent>
          <Reveal direction="down" width="100%">
            <span className="subheadline hover:text-white! tracking-normal transition-all duration-500 mb-6 block">Luxury Portrait & Video Production</span>
          </Reveal>
          <Reveal direction="left" delay={0.2} width="100%">
            <h1 className="h1-editorial text-white! max-w-6xl">
              Capturing the Essence of &apos;Premium&apos; Thinking.
            </h1>
          </Reveal>
          <HeroActions>
            <Link href="/booking" className="inline-block bg-white text-primary px-12 py-6 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Book a Consultation
            </Link>
            <Link href="/services" className="inline-block bg-transparent text-white border border-white/30 px-12 py-6 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 hover:border-cta hover:text-cta hover:-translate-y-1">
              Explore Services
            </Link>
          </HeroActions>
        </HeroContent>
        <HeroScrollLink />
      </HeroRoot>

      {/* 2. Authority Endorsements */}
      <AuthorityStrip />

      {/* 3. Featured Exhibition (Masonry Gallery) */}
      <Exhibition />

      {/* 4. Services Preview (High Contrast Dark Section) */}
      <Capabilities />

      {/* 5. Minimalist Footer */}
      <Footer />
    </main>
  );
}
