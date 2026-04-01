import Link from "next/link";
import { VideoShowcase, Category } from "../video/components/VideoShowcase";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";
import { photos } from "@/app/shared/constants";

export default function PostProductionPage() {

  const categories: Category[] = [
    { 
      id: "post-production",
      title: "Editing & Post-Production", 
      desc: "Transforming raw footage into a masterpiece. Editing, Color Grading, and Sound Design to industry-leading editorial standards.", 
      items: [
        { src: "/videos/3B8BBFAA-4B33-465B-B10C-840B8E491482.mp4", type: "vertical", label: "Color Grading Ex." },
        { src: "/videos/73DF1D57-9811-4E77-B984-482DD9E73CA4.mp4", type: "horizontal", label: "Cinematic Editing" },
        { src: photos[45] || photos[0], type: "image", label: "Studio Suite" }
      ] 
    }
  ];

  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">The Art of Finishing</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif">Excellence in <br /> Post-Production.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                Transforming raw footage into a masterpiece. Editing, Color Grading, and Sound Design to industry-leading editorial standards.
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
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevating every frame of your vision.</h3>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-xl text-stone-400 mb-16 max-w-lg leading-relaxed">
                Our process ensures your final content has the visual impact and authority required to stand out in luxury markets.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Quote Your Project
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
