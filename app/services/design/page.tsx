import Link from "next/link";
import { photos } from "../../shared/constants";
import { DesignGrid } from "./components/DesignGrid";
import { Reveal } from "@/components/cinematic/Reveal";

export default function DesignPage() {
  const designServices = [
    {
      title: "Web Production",
      desc: "Creamos experiencias digitales que cuentan la historia de tu marca. Diseño responsivo, estético y optimizado para la conversión.",
      image: photos[50],
      points: ["Next.js React", "SEO Ready", "Editorial UX", "Brand Narratives"]
    },
    {
      title: "Graphic Design",
      desc: "Identidad visual, branding completo y materiales para redes que capturan la esencia de tu marca con una estética premium.",
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
                Fusionamos el diseño gráfico con la tecnología web para crear marcas que no solo existen, sino que destacan con elegancia y autoridad.
              </p>
            </Reveal>
          </div>

          <DesignGrid services={designServices} />
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Tu presencia digital <br /> es tu carta de presentación.</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-stone-400 mb-16 max-w-2xl leading-relaxed mx-auto">
              Cada elemento visual debe reflejar la calidad de tu trabajo. Nosotros nos encargamos de que sea así en cada píxel.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link href="/booking" className="bg-white text-primary px-12 py-6 uppercase font-medium tracking-[0.2em] transition-all duration-500 hover:bg-cta hover:text-white">
              Consultar con un Diseñador
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
