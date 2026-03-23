import Link from "next/link";
import { photos } from "../../shared/constants";
import { DesignGrid } from "./components/DesignGrid";
import { Reveal } from "@/components/cinematic/Reveal";

export default function DesignPage() {
  const designServices = [
    {
      title: "Web Production",
      desc: "Creating digital experiences that tell your brand's story. Responsive, aesthetic, and conversion-optimized design.",
      image: photos[50],
      points: ["Next.js React", "SEO Ready", "Editorial UX", "Brand Narratives"]
    },
    {
      title: "Graphic Design",
      desc: "Visual identity, full branding, and social media materials that capture your brand's essence with a premium aesthetic.",
      image: photos[51],
      points: ["Brand Identity", "Editorial Layout", "Social Systems", "Ad Creative"]
    }
  ];

  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">Visual Identity House</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif">Web Production <br /> & Graphic Narratives.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                We fuse graphic design with web technology to create brands that don&apos;t just exist, but stand out with elegance and authority.
              </p>
            </Reveal>
          </div>

          <DesignGrid services={designServices} />
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Your digital presence <br /> is your introduction.</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-stone-400 mb-16 max-w-2xl leading-relaxed mx-auto">
              Every visual element should reflect the quality of your work. We make sure it does in every pixel.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Consult with a Designer
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2024 DMStudio Editorial. <Link href="/services" className="hover:text-cta ml-4">All Services</Link></p>
      </footer>
    </main>
  );
}
