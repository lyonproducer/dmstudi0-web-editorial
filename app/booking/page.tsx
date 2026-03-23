import Link from "next/link";
import { BookingForm } from "./components/BookingForm";
import { Reveal } from "@/components/cinematic/Reveal";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="mb-32 text-center">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">The First Engagement</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif mx-auto">Luxury Inquiry <br /> Application.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed mx-auto">
                Nuestro tiempo es limitado para garantizar una calidad editorial inigualable. Inicia tu proceso de reserva hoy mismo para asegurar tu fecha de producción.
              </p>
            </Reveal>
          </div>

          <BookingForm />
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevamos el estándar de cada proyecto.</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-stone-400 mb-16 max-w-2xl leading-relaxed mx-auto">
              Cada aplicación es revisada minuciosamente. Nuestro objetivo es asegurar una visión artística compartida para lograr resultados de excelencia mundial.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link href="/" className="bg-white text-primary px-12 py-6 uppercase font-medium tracking-[0.2em] transition-all duration-500 hover:bg-cta hover:text-white">
              Volver al Inicio
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2024 DMStudio Editorial. <Link href="/" className="hover:text-cta ml-4">Volver al Inicio</Link></p>
      </footer>
    </main>
  );
}
