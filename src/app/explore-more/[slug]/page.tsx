import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { articles, getArticleBySlug } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
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

  // Helper to split markdown text into simple formatted blocks
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, index) => {
      if (block.startsWith("###")) {
        return (
          <h3 
            key={index} 
            className="text-[24px] md:text-[28px] font-semibold text-[#30261C] mt-8 mb-4 font-sans"
          >
            {block.replace("###", "").trim()}
          </h3>
        );
      } else if (block.startsWith("-")) {
        const items = block.split("\n").map(li => li.replace("-", "").trim());
        return (
          <ul key={index} className="list-disc pl-6 mb-6 text-[#30261C]/80 space-y-2 text-[16px] md:text-[18px] font-light font-sans">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      }
      return (
        <p 
          key={index} 
          className="text-[16px] md:text-[18px] leading-[1.6] text-[#30261C]/80 mb-6 font-light font-sans"
        >
          {block.trim()}
        </p>
      );
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      {/* Navigation Headers */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-48 px-6 lg:px-[90px] pb-24">
        {/* Breadcrumb back to projects */}
        <div className="mb-8 lg:mb-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-[#ff5100] hover:text-black font-medium transition-colors duration-300 gap-2 text-[16px]"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Article Hero Container */}
        <div className="max-w-[900px] mb-12 lg:mb-16">
          <p className="text-[14px] md:text-[16px] uppercase tracking-wider text-[#ff5100] font-semibold mb-3">
            Insight & Strategy
          </p>
          <h1 className="text-[36px] md:text-[60px] lg:text-[72px] font-medium leading-[1.1] text-[#30261C] tracking-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-[#30261C]/50 text-[14px] md:text-[16px]">
            <span>Published: {article.publishedAt}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-black/10 mb-12" />

        {/* Content Body */}
        <div className="max-w-[800px] mx-auto">
          {renderContent(article.content)}
        </div>
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
