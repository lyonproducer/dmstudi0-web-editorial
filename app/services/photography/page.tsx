import Link from "next/link";
import { photos } from "../../shared/constants";
import { PhotoGallery } from "./components/PhotoGallery";
import { Reveal } from "@/components/cinematic/Reveal";

export default function PhotographyPage() {
  const editorialPhotos = photos.slice(7, 13);
  const lifestylePhotos = photos.slice(14, 20);
  const brandingPhotos = photos.slice(21, 27);

  const categories = [
    { title: "Fotografía Editorial", desc: "Portadas de revista, campañas publicitarias, concepto, styling y dirección completa de arte.", items: editorialPhotos },
    { title: "Fotografía Lifestyle", desc: "Personal branding para abogados, agentes de seguros, realtors y pequeños negocios.", items: lifestylePhotos },
    { title: "Photography Branding", desc: "Headshots modernos, fotos de equipo y contenido estratégico para redes y web.", items: brandingPhotos }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Headline Section */}
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">Our Main Capability</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl">Fotografía Profesional <br /> de Alto Nivel.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                Ayudo a negocios a verse premium y atraer más clientes con contenido visual de alto nivel, producido con meticulosa atención al detalle.
              </p>
            </Reveal>
          </div>

          <PhotoGallery categories={categories} />
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-white py-48 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-24 text-center md:text-left">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Impulsa tu marca personal hoy mismo.</h3>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-xl text-stone-400 mb-16 max-w-lg leading-relaxed">
                Trabajamos con celebridades, directores de revistas y agencias para capturar imágenes que hablen de autoridad y elegancia.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Solicitar una Cotización
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
