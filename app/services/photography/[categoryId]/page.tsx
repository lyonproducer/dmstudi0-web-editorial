import { photographyCategories } from "@/app/shared/categories";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/cinematic/Reveal";
import { Footer } from "@/components/blocks/Footer";
import { CategoryGallery } from "../components/CategoryGallery";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function generateStaticParams() {
  return photographyCategories.map((cat) => ({
    categoryId: cat.id,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  const category = photographyCategories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="down">
            <Link
              href="/services/photography"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-secondary hover:text-cta transition-colors mb-16 font-medium"
            >
              <ChevronLeft size={14} /> Back to Categories
            </Link>
          </Reveal>

          <div className="mb-24">
            <Reveal direction="down" delay={0.1}>
              <span className="subheadline mb-4 block">Photography Collection</span>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <h1 className="h1-editorial max-w-4xl font-serif">{category.title}.</h1>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="mt-8 text-secondary text-xl max-w-2xl leading-relaxed">
                {category.desc}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="w-full pb-32">
        <CategoryGallery title={category.title} items={category.items} />
      </div>

      <Footer />
    </main>
  );
}
