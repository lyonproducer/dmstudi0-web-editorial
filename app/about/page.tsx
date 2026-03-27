import { ProcessTimeline } from "./components/ProcessTimeline";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";
import { CallToActionSection } from "@/components/blocks/CTA";

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

      <CallToActionSection
        title={
          <>
            Ready to start your <br /> editorial journey?
          </>
        }
        description="Every project is an opportunity to redefine your brand's visual standard. We work with agencies, celebrities, and brands pursuing excellence."
        primaryButtonText="Book a Session"
        primaryButtonHref="/booking"
        secondaryButtonText="View Packages"
        secondaryButtonHref="/packages"
      />

      <Footer />
    </main>
  );
}
