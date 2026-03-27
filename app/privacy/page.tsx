import React from "react";
import { Reveal } from "@/components/cinematic/Reveal";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal direction="down">
          <span className="subheadline mb-8 block">Last Updated: March 2026</span>
        </Reveal>
        
        <Reveal direction="up" delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-editorial font-bold mb-16 text-primary tracking-tight">
            Privacy Policy
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="space-y-12 text-secondary text-lg leading-relaxed font-light">
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">01. Overview</h2>
              <p>
                DMStudio Editorial (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our luxury production services.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">02. Media & Content</h2>
              <p>
                As a production studio, we handle high-resolution visual and auditory media. Raw files, edited captures, and behind-the-scenes content are stored on secure, encrypted servers. We do not use client media for promotional purposes without explicit written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">03. Data Collection</h2>
              <p>
                We collect information you provide directly to us during consultations, bookings, or through our contact forms. This may include your name, contact details, project briefs, and payment information processed through secure third-party gateways.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">04. Cookies & Analytics</h2>
              <p>
                We use minimal, high-performance cookies to ensure the cinematic experience of our site works flawlessly across all devices. We use anonymized analytics to understand how visitors interact with our portfolio.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">05. Your Rights</h2>
              <p>
                You have the right to request access to your data, ask for corrections, or request the deletion of your personal information from our archives, subject to certain legal and contractual obligations related to production deliverables.
              </p>
            </section>

            <section className="pt-12 border-t border-primary/5">
              <p className="text-sm italic">
                For any inquiries regarding your privacy, please contact our studio directly at <span className="text-primary font-medium">privacy@dmstudio.com</span>.
              </p>
            </section>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
