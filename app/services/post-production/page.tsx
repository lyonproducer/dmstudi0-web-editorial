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
              <h1 className="h1-editorial max-w-4xl">Post-Producción <br /> de Excelencia.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                Transformamos el material crudo en una obra maestra. Edición, Color Grading y Sound Design con estándares de la industria editorial.
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
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevamos cada frame de tu visión.</h3>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-xl text-stone-400 mb-16 max-w-lg leading-relaxed">
                Nuestro proceso garantiza que tu contenido final tenga el impacto visual y la autoridad necesarios para destacar en mercados de lujo.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2}>
            <Link href="/booking" className="bg-white text-primary px-12 py-6 uppercase font-medium tracking-[0.2em] transition-all duration-500 hover:bg-cta hover:text-white">
              Cotiza tu Proyecto
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
