import Link from "next/link";
import Image from "next/image";
import { BookingForm } from "./components/BookingForm";
import { Reveal } from "@/components/cinematic/Reveal";
import { photos } from "@/app/shared/constants";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background text-primary overflow-hidden">
      {/* Cinematic Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={photos[18]}
            alt="DMStudio Editorial Workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-linear-to-b from-stone-900/40 via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-6">
          <Reveal direction="down">
            <span className="subheadline mb-8 block text-white/60">The First Engagement</span>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <h1 className="h1-editorial text-white max-w-4xl mx-auto font-serif">
              Inquire for <br /> Application.
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="-mt-32 pb-32 px-6 md:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up" delay={0.3} width="100%">
            <BookingForm />
          </Reveal>
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevating the standard of <br /> every project.</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-stone-400 mb-16 max-w-2xl leading-relaxed mx-auto">
              Each application is meticulously reviewed to ensure an aligned artistic vision and the pursuit of world-class excellence.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link href="/" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Return to Studio
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2026 DMStudio Editorial. <Link href="/" className="hover:text-cta ml-4">Back to Start</Link></p>
      </footer>
    </main>
  );
}
