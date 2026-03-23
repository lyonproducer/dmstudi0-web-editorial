"use client";

import { Services } from "./ServicesPreview";

export function Capabilities() {
  const servicesList = [
    { title: "Photography", desc: "Editorial, Lifestyle & Professional Branding.", href: "/services/photography" },
    { title: "Video Production", desc: "Cinematic Storytelling & Social Content.", href: "/services/video" },
    { title: "Podcasts", desc: "Creative Direction, Setup & Environment Build-out.", href: "/services/podcast" },
    { title: "Design", desc: "High-End Web & Narrative Experiences.", href: "/services/design" }
  ];

  return (
    <Services.Root theme="dark">
      <Services.Summary
        label="The Creative Edge"
        title="The Brain Before the Beauty."
        desc="We don't just capture images; we build narrative frameworks. Every frame is a strategic decision designed to command authority and evoke premium emotion."
        ctaText="Explore All Capabilities"
        ctaHref="/services"
      />
      <Services.Grid>
        {servicesList.map((service, i) => (
          <Services.Item
            key={i}
            index={i}
            title={service.title}
            desc={service.desc}
            href={service.href}
          />
        ))}
      </Services.Grid>
    </Services.Root>
  );
}
