import Link from "next/link";
import {
  photosBabySofia,
  photosBabyEzra,
  photosRyan,
  photosLisaForGlamour,
  photosNYFashionWeek,
  photosBodaElSalvador,
  photosBodaAnayLucas,
  photosJaycito,
  photosAtlantaAutos,
  photosCorporateHeadshots
} from "../../shared/constants";
import { PhotoGallery } from "./components/PhotoGallery";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";

export default function PhotographyPage() {
  const categories = [
    {
      id: "maternity",
      title: "Maternity",
      desc: "Graceful, high-end maternity sessions capturing the beauty and elegance of your journey.",
      items: [...photosBabySofia, ...photosBabyEzra]
    },
    {
      id: "editorial",
      title: "Editorial",
      desc: "Magazine covers, advertising campaigns, concept development, styling, and full art direction.",
      items: [...photosRyan, ...photosLisaForGlamour]
    },
    {
      id: "wedding",
      title: "Wedding",
      desc: "Iconic, cinematically captured moments that turn your wedding day into a timeless narrative.",
      items: [...photosBodaElSalvador, ...photosBodaAnayLucas]
    },
    {
      id: "events",
      title: "Events",
      desc: "Elite coverage for luxury parties, private events, and high-profile gatherings.",
      items: photosNYFashionWeek
    },
    {
      id: "personal-branding",
      title: "Personal Branding",
      desc: "Premium personal branding for attorneys, realtors, entrepreneurs, and luxury businesses.",
      items: photosJaycito
    },
    {
      id: "commercial",
      title: "Commercial",
      desc: "High-end product and commercial photography designed for luxury brand campaigns.",
      items: photosAtlantaAutos
    },
    {
      id: "corporate-headshots",
      title: "Corporate Headshots",
      desc: "Modern headshots, team portraits, and strategic visual content for social and web presence.",
      items: photosCorporateHeadshots
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-48 pb-24 px-6 md:px-12">
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

          <PhotoGallery categories={categories} />
        </div>
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
