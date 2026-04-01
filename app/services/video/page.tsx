import Link from "next/link";
import { VideoShowcase, Category } from "./components/VideoShowcase";
import { PhotoGallery } from "../photography/components/PhotoGallery";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";
import { photosPodcastProduction } from "@/app/shared/constants";

export default function VideoPage() {

  const categories: Category[] = [
    {
      id: "commercial",
      title: "Commercial Video",
      desc: "High-end cinematic video production for brands, campaigns, and corporate features. Delivered in pristine wide-screen 16:9 format.",
      items: [
        { src: "/videos/horizontal-videos/3B8BBFAA-4B33-465B-B10C-840B8E491482.mp4", type: "horizontal" },
        { src: "/videos/horizontal-videos/edit version 1 privatto.mp4", type: "horizontal" },
        { src: "/videos/horizontal-videos/IMG_1055.mp4", type: "horizontal" },
        { src: "/videos/horizontal-videos/Maternity BTS.mp4", type: "horizontal" },
        { src: "/videos/horizontal-videos/Vid Emanuel V2.mp4", type: "horizontal" }
      ],
      layout: "horizontal"
    },
    {
      id: "social-media",
      title: "Social Media Vertical",
      desc: "Short-form conversational vertical clips designed for organic reach on Instagram Reels, TikTok, and YouTube Shorts.",
      items: [
        { src: "/videos/vertical-videos/2FE88840-3851-4767-8F71-BC1EF69A2571.mp4", type: "vertical" },
        { src: "/videos/vertical-videos/3F236DB2-5DF4-453C-B75F-3B97AE55E860.mp4", type: "vertical" },
        { src: "/videos/vertical-videos/73DF1D57-9811-4E77-B984-482DD9E73CA4.mp4", type: "vertical" },
        { src: "/videos/vertical-videos/953AC413-D97E-4101-BA73-4ECF98081135.mp4", type: "vertical" },
        { src: "/videos/vertical-videos/D9590BDB-E71E-4549-9579-4A0D55F27332.mp4", type: "vertical" },
        { src: "/videos/vertical-videos/IMG_0959.mp4", type: "vertical" }
      ],
      layout: "vertical"
    }
  ];

  const podcastCategory = [
    {
      id: "podcasts",
      title: "Podcast Production & Set Design",
      desc: "Premium auditory and visual environments that elevate conversations. We provide full set design and multi-cam recording to broadcast premium network-level shows.",
      items: photosPodcastProduction
    }
  ];

  return (
    <main className="min-h-screen bg-background text-primary">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="mb-32">
            <Reveal direction="down">
              <span className="subheadline mb-4 block">Our Visual Agency</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="h1-editorial max-w-4xl font-serif">High-Impact <br /> Motion Visuals.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-12 text-secondary text-xl max-w-2xl leading-relaxed">
                Videos that don&apos;t just look good, but tell a story and connect with your audience. Professional recording, expert editing, and premium podcasting.
              </p>
            </Reveal>
          </div>

          <VideoShowcase categories={categories} />

          <div className="mt-48">
            <PhotoGallery categories={podcastCategory} startIndex={2} />
          </div>
        </div>
      </div>

      <section className="bg-primary text-white py-48 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-24 text-center md:text-left">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevating the visual standard of your content.</h3>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-xl text-stone-400 mb-16 max-w-lg leading-relaxed mx-auto md:mx-0">
                We design content strategies, handle full recording and editing, and provide optimized delivery to maximize your organic and paid reach.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2}>
            <Link href="/booking" className="inline-block bg-white text-primary px-16 py-7 uppercase font-bold tracking-[0.3em] text-[10px] transition-all duration-500 border border-white hover:bg-transparent hover:text-white hover:border-cta shadow-luxury-lg hover:shadow-cta/20 hover:-translate-y-1">
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
