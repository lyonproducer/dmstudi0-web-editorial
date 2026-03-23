import Link from "next/link";
import { photos } from "../../shared/constants";
import { VideoShowcase } from "./components/VideoShowcase";
import { Reveal } from "@/components/cinematic/Reveal";

export default function VideoPage() {
  const socialVideoPhotos = photos.slice(30, 33);
  const commercialVideoPhotos = photos.slice(34, 37);

  const categories = [
    { title: "Contenido para Redes", desc: "Reels para Instagram, TikTok / Shorts, Videos virales y storytelling con edición optimizada.", items: socialVideoPhotos },
    { title: "Video Comercial / Web", desc: "Videos corporativos para una página web, YouTube profesional y videos promocionales de marca.", items: commercialVideoPhotos }
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
              <h1 className="h1-editorial max-w-4xl">Producción de Video <br /> de Alto Impacto.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                Videos que no solo se ven bien, sino que cuentan una historia y conectan con tu audiencia. Grabación profesional, edición experta y entrega optimizada para cada plataforma.
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
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevamos el estándar visual de tu contenido.</h3>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-xl text-stone-400 mb-16 max-w-lg leading-relaxed mx-auto md:mx-0">
                Diseñamos estrategias de contenido, grabación, edición completa y entrega optimizada para maximizar tu alcance orgánico y pagado.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2}>
            <Link href="/booking" className="bg-white text-primary px-12 py-6 uppercase font-medium tracking-[0.2em] transition-all duration-500 hover:bg-cta hover:text-white">
              Inicia tu Proyecto
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2024 DMStudio Editorial. <Link href="/services" className="hover:text-cta ml-4">Todos los Servicios</Link></p>
      </footer>
    </main>
  );
}
