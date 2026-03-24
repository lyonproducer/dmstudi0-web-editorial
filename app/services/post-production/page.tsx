import Link from "next/link";
import { photos } from "../../shared/constants";
import { EditingSuite } from "./components/EditingSuite";
import { Reveal } from "@/components/cinematic/Reveal";

export default function PostProductionPage() {
  const editingPhotos = photos.slice(45, 49);

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

          <EditingSuite photos={editingPhotos} />
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

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2026 DMStudio Editorial. <Link href="/services" className="hover:text-cta ml-4">View All Services</Link></p>
      </footer>
    </main>
  );
}
