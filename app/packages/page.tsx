import { PackageCard } from "./components/PackageCard";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";
import { CallToActionSection } from "@/components/blocks/CTA";

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

      <CallToActionSection
        title={
          <>
            Elevate your brand <br /> with technical perfection.
          </>
        }
        description="Each package includes comprehensive creative direction, ensuring your investment translates into undeniable visual authority in the market."
        primaryButtonText="Custom Subscription"
        primaryButtonHref="/booking"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />

      <Footer />
    </main>
  );
}
