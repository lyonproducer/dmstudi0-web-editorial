import Link from "next/link";
import { photos } from "../../shared/constants";
import { PodcastEnvironment } from "./components/PodcastEnvironment";
import { Reveal } from "@/components/cinematic/Reveal";

export default function PodcastPage() {
  const podcastPhotos = photos.slice(40, 43);

  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">Our Unique Edge</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl">Producción Integral <br /> de Podcasts.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                No solo grabamos; diseñamos el ambiente perfecto para tu marca. Desde la iluminación hasta la configuración técnica de audio y video profesional.
              </p>
            </Reveal>
          </div>

          <PodcastEnvironment photos={podcastPhotos} />
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Servicio completo, <br /> resultados de red.</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-stone-400 mb-16 max-w-2xl leading-relaxed mx-auto">
              Ofrecemos también entrenamiento básico para equipos internos y opciones de mantenimiento mensual para mantener tu contenido constante y profesional.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Ver Planes de Estudio
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2024 DMStudio Editorial. <Link href="/services" className="hover:text-cta ml-4">Todos los Servicios</Link></p>
      </footer>
    </main>
  );
}
