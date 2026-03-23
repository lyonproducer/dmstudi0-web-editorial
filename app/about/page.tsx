import Link from "next/link";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { Reveal } from "@/components/cinematic/Reveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">The Creative Philosophy</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif leading-tight">Beyond Content. <br /> High-End Narratives.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                DMStudio Editorial is more than a production house; it&apos;s a space for creative thinking for those seeking a premium presence and high-end clients.
              </p>
            </Reveal>
          </div>

          <ProcessTimeline />
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Ready to start your <br /> editorial journey?</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-stone-400 mb-16 max-w-2xl leading-relaxed mx-auto">
              Every project is an opportunity to redefine your brand&apos;s visual standard. We work with agencies, celebrities, and brands pursuing excellence.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Book a Session
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-primary/5 text-center text-[10px] uppercase tracking-[0.3em] text-secondary">
        <p>© 2024 DMStudio Editorial. <Link href="/" className="hover:text-cta ml-4">Back to Studio</Link></p>
      </footer>
    </main>
  );
}
