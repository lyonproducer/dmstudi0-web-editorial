import Link from "next/link";
import { PhotoGallery } from "../photography/components/PhotoGallery";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";
import { photosPodcastProduction } from "@/app/shared/constants";

export default function PodcastPage() {

  const categories = [
    { 
      id: "podcasts",
      title: "Podcast Production & Engineering", 
      desc: "Premium auditory and visual environments that elevate conversations. We provide full set design and multi-cam recording to broadcast premium network-level shows.", 
      items: photosPodcastProduction
    }
  ];

  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">Our Unique Edge</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif">Comprehensive <br /> Podcast Production.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                We don&apos;t just record; we design the perfect environment for your brand. From custom lighting to technical audio and professional video setup.
              </p>
            </Reveal>
          </div>

          <PhotoGallery categories={categories} />
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Full Service, <br /> Network Results.</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-stone-400 mb-16 max-w-2xl leading-relaxed mx-auto">
              We also offer basic training for internal teams and monthly maintenance options to keep your content consistent and professional.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              View Studio Plans
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
