import Link from "next/link";
import { PackageCard } from "./components/PackageCard";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">The Investment of Value</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif">Curated Monthly <br /> Production Tiers.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                Our monthly packages are designed for brands seeking visual and narrative consistency. Premium results with the flexibility of a high-end subscription.
              </p>
            </Reveal>
          </div>

          <PackageCard />
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevate your brand <br /> with technical perfection.</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-stone-400 mb-16 max-w-2xl leading-relaxed mx-auto">
              Each package includes comprehensive creative direction, ensuring your investment translates into undeniable visual authority in the market.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Custom Subscription
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
