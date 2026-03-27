import React from "react";
import { Reveal } from "@/components/cinematic/Reveal";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal direction="down">
          <span className="subheadline mb-8 block">Last Updated: March 2026</span>
        </Reveal>
        
        <Reveal direction="up" delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-editorial font-bold mb-16 text-primary tracking-tight">
            Terms & Conditions
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="space-y-12 text-secondary text-lg leading-relaxed font-light">
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">01. Service Scope</h2>
              <p>
                DMStudio Editorial provides specialized luxury production services, including photography, video production, podcast direction, and creative branding. Each engagement is governed by a specific project brief (the &quot;SOW&quot;) that outlines deliverables, timelines, and budgets.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">02. Booking & Retainers</h2>
              <p>
                To secure our cinematic resources and calendar space, a non-refundable retainer (50% for one-time projects, or first-month payment for monthly packages) is required. Full payment is due prior to the release of high-resolution final deliverables.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">03. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, DMStudio Editorial retains raw copyright of all captures. Clients are granted a wide-use commercial license for the edited final deliverables as specified in their contract. Any use beyond the agreed scope (e.g., global physical billboards for local-only licenses) requires additional licensing fees.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">04. Cancellations & Rescheduling</h2>
              <p>
                Rescheduling within 48 hours of a confirmed shoot or recording session will incur a &quot;Late Change&quot; fee. In the event of a total cancellation, only the retainer and any pre-production costs already incurred are forfeited.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">05. Deliverables</h2>
              <p>
                Standard delivery of high-resolution edits occurs within 7–14 business days from the selection date. Rush delivery can be requested for an additional fee. Raw files are not provided unless explicitly negotiated in the initial booking.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">06. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Georgia, USA. Any disputes arising from these terms or our services shall be resolved in the appropriate courts within Fulton County, Georgia.
              </p>
            </section>

            <section className="pt-12 border-t border-primary/5">
              <p className="text-sm italic">
                By booking a session or consultation, you agree to these Terms and Conditions. For detailed contract reviews, please contact <span className="text-primary font-medium">legal@dmstudio.com</span>.
              </p>
            </section>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
