import Link from "next/link";
import Image from "next/image";
import { photographyCategories } from "../../shared/categories";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-48 pb-24 px-6 md:px-12 block">
        <div className="max-w-7xl mx-auto">
          {/* Headline Section */}
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">Our Core Capability</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif">High-End <br /> Professional Photography.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                Elevating brands through high-end visual content produced with meticulous attention to detail and artistic intent.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Category Hero Sections */}
      <div className="flex flex-col w-full">
        {photographyCategories.map((category) => (
          <Link
            key={category.id}
            href={`/services/photography/${category.id}`}
            className="group relative w-full h-[70vh] md:h-[80vh] overflow-hidden block"
          >
            <Image
              src={category.items[0]}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/50" />
            
            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              <Reveal direction="down">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest uppercase mb-8 drop-shadow-xl">{category.title}</h2>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <div className="inline-block border border-white/70 text-white px-8 py-4 uppercase font-bold tracking-[0.2em] text-[10px] backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-black">
                  View Gallery
                </div>
              </Reveal>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-white py-48 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-24 text-center md:text-left">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Amplify your personal brand today.</h3>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-xl text-stone-400 mb-16 max-w-lg leading-relaxed">
                Collaborating with celebrities, editorial directors, and elite agencies to capture images that command authority and elegance.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Request a Quote
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
