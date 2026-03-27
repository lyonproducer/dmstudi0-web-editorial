import { ScrollCarousel, SlideData } from "@/components/ui/scroll-carousel";
import { photos } from "@/app/shared/constants";
import { Reveal } from "@/components/cinematic/Reveal";
import ScrollVelocity from "@/components/cinematic/ScrollVelocity";

const servicesData: SlideData[] = [
  {
    title: "Photography",
    subtitle: "Editorial, Lifestyle & Professional Branding",
    description: "We don't just capture images; we build narrative frameworks. Every frame is a strategic decision designed to command authority and evoke premium emotion.",
    href: "/services/photography",
    accent: "#D4A955", // Gold
    imageUrl: photos[3],
  },
  {
    title: "Video Production",
    subtitle: "Cinematic Storytelling & Social Content",
    description: "Dynamic motion that captures the essence of your brand, built for modern distribution without sacrificing cinematic quality.",
    href: "/services/video",
    accent: "#8BA7B8", // Cinematic blue
    imageUrl: photos[1],
  },
  {
    title: "Podcasts",
    subtitle: "Creative Direction & Set Build-out",
    description: "High-end auditory and visual environments that elevate conversations and transform ordinary discussions into premium shows.",
    href: "/services/podcast",
    accent: "#C4956A", // Warm amber/copper
    imageUrl: photos[10],
  },
  {
    title: "Production Design",
    subtitle: "High-End Web & Narrative Experiences",
    description: "Immersive digital set designs and styling that provide the perfect foundation for luxury storytelling and brand elevation.",
    href: "/services/design",
    accent: "#7A9E7E", // Olive/sage
    imageUrl: photos[8],
  }
];

export function Capabilities() {
  return (
    <>
      {/* Independent Full-Width Marquee as Cinema Divider */}
      <section className="w-full overflow-hidden bg-[#050505] pt-12">
        <div className="w-full opacity-80 select-none pointer-events-none">
          <ScrollVelocity
            texts={['PHOTOGRAPHY PORTRAIT EDITORIAL HIGH FASHION CINEMATIC']}
            velocity={40}
            className="text-white/40 tracking-widest"
          />
        </div>
      </section>

      <section className="relative w-full z-10 bg-[#050505] overflow-x-hidden" id="capabilities">
        {/* Intro Header before the carousel starts */}
        <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl flex flex-col items-center">
            <Reveal direction="down">
              <span className="subheadline mb-4 block text-cta">The Creative Edge</span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial font-bold leading-tight tracking-tight text-white mb-6">
                The Brain Before the Beauty.
              </h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-16">
                Explore our comprehensive suite of creative capabilities, designed to bring your vision to life with uncompromising quality.
              </p>
            </Reveal>

            {/* Elegant Section Divider / Scroll Indicator */}
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-col items-center gap-6 mt-4 opacity-70">
                <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-cta">
                  Discover
                </span>
                <div className="w-px h-24 bg-linear-to-b from-cta to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>

        <ScrollCarousel slides={servicesData} />
      </section>
    </>
  );
}
