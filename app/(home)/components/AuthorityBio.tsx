import React from "react";
import { PerspectiveBook } from "@/components/cinematic/PerspectiveBook";
import { Reveal } from "@/components/cinematic/Reveal";
import { AuthorityStats } from "@/components/cinematic/AuthorityStats";

export function AuthorityBio() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-y border-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-24 md:gap-32 mb-20">

          {/* Credential Card */}
          <div className="flex-1 w-full flex justify-center py-12">
            <Reveal direction="left" delay={0.2} width="fit-content">
              <PerspectiveBook
                photo="/images/photos-array-behind-the-scenes/c68710c2037c7cb948a34d115325269c-cover.jpg"
                name="Daniel Martinez"
                role="Director & Visual Artist"
                studio="DMStudio Editorial"
                badgeId="DMS-001"
                size="lg"
                textured
              />
            </Reveal>
          </div>

          {/* Biography Content */}
          <div className="flex-1 max-w-lg">
            <Reveal direction="down">
              <span className="subheadline mb-8 block">The Visionary</span>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-editorial font-bold mb-10 leading-tight tracking-tight text-primary">
                Daniel Martinez
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="space-y-6 text-secondary text-lg leading-relaxed">
                <p>
                  As a director and visual artist, Daniel brings an uncompromising commitment to aesthetic discipline. His work lives at the intersection of high fashion, editorial narrative, and raw human emotion.
                </p>
                <p>
                  Choosing DMStudio means collaborating directly with an artist whose singular focus is extracting the absolute premium essence of your brand, elevating your presence to the standard of global campaigns.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="mt-12 flex items-center gap-4 border-l-2 border-cta pl-6">
                <p className="font-editorial italic text-primary/70 text-lg">
                  &quot;The difference between a picture and a portrait is the authority it commands.&quot;
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Dynamic Stats Component */}
        <AuthorityStats />
      </div>
    </section>
  );
}
