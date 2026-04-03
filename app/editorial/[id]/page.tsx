import { editorialCategories } from "@/app/shared/categories";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";
import { CategoryGallery } from "@/app/services/photography/components/CategoryGallery";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  return editorialCategories.map((cat) => ({
    id: cat.id,
  }));
}

export default async function EditorialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const editorial = editorialCategories.find((c) => c.id === id);

  if (!editorial) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="down">
            <Link
              href="/#exhibition"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-secondary hover:text-cta transition-colors mb-16 font-medium"
            >
              <ChevronLeft size={14} /> Back to Exhibition
            </Link>
          </Reveal>

          <div className="mb-24">
            <Reveal direction="down" delay={0.1}>
              <span className="subheadline mb-4 block">Archive / {editorial.category}</span>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <h1 className="h1-editorial max-w-4xl font-serif">{editorial.title}.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="mt-8 text-secondary text-xl max-w-2xl leading-relaxed">
                {editorial.desc}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="w-full pb-32">
        <CategoryGallery title={editorial.title} items={editorial.items} largeImages={true} />
      </div>

      <Footer />
    </main>
  );
}
