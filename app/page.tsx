import { HeroRoot, HeroVisual, HeroContent, HeroActions, HeroScrollLink } from "./(home)/components/Hero";
import { AuthorityStrip } from "./(home)/components/AuthorityStrip";
import { AuthorityBio } from "./(home)/components/AuthorityBio";
import { Exhibition } from "./(home)/components/Exhibition";
import { Capabilities } from "./(home)/components/Capabilities";
import { CallToActionSection } from "@/components/blocks/CTA";
import { Footer } from "@/components/blocks/Footer";
import { Reveal } from "@/components/cinematic/Reveal";
import ImmersiveScrollGallery from "@/components/ui/immersive-scroll-gallery";
import { photosBabySofia, photosRyan, photosBodaElSalvador, photosJaycito, photosNYFashionWeek, photosAtlantaAutos, photosCorporateHeadshots } from "@/app/shared/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Cinematic Hero Section */}
      <HeroRoot priority>
        <HeroVisual
          src="/videos/IMG_1324-compressed.mp4"
          alt="DMStudio Editorial Cinematic Reel"
        />
        <HeroContent>
          <Reveal direction="down" width="100%">
            <span className="subheadline hover:text-white! text-grey-500 tracking-normal transition-all duration-500 mb-6 block">Luxury Portrait & Video Production</span>
          </Reveal>
          <Reveal direction="left" delay={0.2} width="100%">
            <h1 className="h1-editorial text-white! max-w-6xl">
              Images with purpose.
            </h1>
          </Reveal>
          <HeroActions>
            <Link href="/booking" className="inline-block bg-white text-primary px-12 py-6 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Book a Consultation
            </Link>
            <Link href="/services/photography" className="inline-block bg-transparent text-white border border-white/30 px-12 py-6 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 hover:border-cta hover:text-cta hover:-translate-y-1">
              Explore Services
            </Link>
          </HeroActions>
        </HeroContent>
        <HeroScrollLink />
      </HeroRoot>

      {/* 3. Authority Endorsements */}
      <AuthorityStrip />


      {/* 2. Immersive Scroll Gallery */}
      <ImmersiveScrollGallery
        images={[
          photosBodaElSalvador[9], photosBabySofia[5], photosJaycito[0], photosAtlantaAutos[5],
          photosNYFashionWeek[4], photosAtlantaAutos[0], photosCorporateHeadshots[0],
        ].map((src) => ({ src, scale: null }))}
        headline="Every frame tells a story that commands attention."
      />

      {/* 3. The Eye - Visual Bio */}
      <AuthorityBio />

      {/* 4. Featured Exhibition (Masonry Gallery) */}
      <Exhibition />

      {/* 4. Services Preview (High Contrast Dark Section) */}
      <Capabilities />

      {/* 5. Final Call to Action */}
      <CallToActionSection
        title="Transform Your Vision into a Living Narrative."
        description="Experience the standard of luxury production. Limited bookings available each month."
      />

      {/* 6. Minimalist Footer */}
      <Footer />
    </main>
  );
}
