import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { articles, getArticleBySlug } from "@/data/articles";
import { ArticleContent } from "./ArticleContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Southern Marketing`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      {/* Navigation Headers */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-40 px-6 lg:px-[90px] pb-24">
        <ArticleContent article={article} />
      </main>

      {/* CTA and Footers */}
      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div style={{ zoom: 0.8 }}>
        <div className="block md:hidden"><MobileFooter /></div>
        <div className="hidden md:block"><DesktopFooter /></div>
      </div>
    </div>
  );
}
