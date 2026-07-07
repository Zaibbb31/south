"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleContentProps {
  article: Article;
}

const parseInlineMarkdown = (text: string) => {
  const parts = text.split("**");
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-bold text-[#30261C]">
          {part}
        </strong>
      );
    }
    return part;
  });
};

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [activeId, setActiveId] = useState("");
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const [isMobileDragging, setIsMobileDragging] = useState(false);
  const [mobileStartX, setMobileStartX] = useState(0);
  const [mobileScrollLeft, setMobileScrollLeft] = useState(0);

  const handleMobileMouseDown = (e: React.MouseEvent) => {
    if (!mobileSliderRef.current) return;
    setIsMobileDragging(true);
    setMobileStartX(e.pageX - mobileSliderRef.current.offsetLeft);
    setMobileScrollLeft(mobileSliderRef.current.scrollLeft);
  };

  const handleMobileMouseLeave = () => {
    setIsMobileDragging(false);
  };

  const handleMobileMouseUp = () => {
    setIsMobileDragging(false);
  };

  const handleMobileMouseMove = (e: React.MouseEvent) => {
    if (!isMobileDragging || !mobileSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - mobileSliderRef.current.offsetLeft;
    const walk = (x - mobileStartX) * 1.5;
    mobileSliderRef.current.scrollLeft = mobileScrollLeft - walk;
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Parse sections (h3 headers) for TOC
  const sections = useMemo(() => {
    return article.content
      .split("\n")
      .filter((line) => line.trim().startsWith("###"))
      .map((line) => {
        const text = line.trim().replace("###", "").trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        return { id, title: text };
      });
  }, [article.content]);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleShare = (platform: string) => {
    const title = article.title;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = (key: string | number) => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p
            key={`p-${key}`}
            className="text-[16px] md:text-[18px] leading-[1.7] text-[#30261C]/85 mb-6 font-normal font-sans"
          >
            {parseInlineMarkdown(currentParagraph.join(" "))}
          </p>
        );
        currentParagraph = [];
      }
    };

    const flushList = (key: string | number) => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${key}`} className="list-disc pl-6 mb-6 text-[#30261C]/80 space-y-2 text-[16px] md:text-[18px] font-normal font-sans">
            {currentList.map((item, idx) => (
              <li key={idx}>{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("###")) {
        flushParagraph(index);
        flushList(index);

        const text = trimmed.replace("###", "").trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        elements.push(
          <h3
            key={`h3-${index}`}
            id={id}
            className="text-[22px] md:text-[26px] font-bold text-[#30261C] mt-8 mb-4 font-sans scroll-mt-28"
          >
            {text}
          </h3>
        );
      } else if (trimmed.startsWith("-")) {
        flushParagraph(index);
        const itemText = trimmed.substring(1).trim();
        currentList.push(itemText);
      } else if (trimmed === "") {
        flushParagraph(index);
        flushList(index);
      } else {
        flushList(index);
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph("final");
    flushList("final");

    return elements;
  };

  return (
    <div className="w-full">
      {/* Hero Header with Premium Dark / Orange Gradient */}
      <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#1b1a15] to-[#2c1d10] py-20 lg:py-32 px-6 lg:px-[90px] rounded-[36px] mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#ff5100]/10">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-[#ff5100]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square rounded-full bg-[#ff5100]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1000px] relative z-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-[#ff5100] font-bold mb-4">
            <span>[</span>
            <span>Insight & Strategy</span>
            <span>]</span>
          </div>
          
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-extrabold leading-[1.1] text-white tracking-tight mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-white/50 text-[14px] md:text-[16px] font-light">
            <span>Published: {article.publishedAt}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 xl:gap-12 items-start max-w-[1440px] mx-auto px-1">
        
        {/* Left Sidebar - Table of Contents */}
        <aside className="hidden lg:block sticky top-28 w-full border-r border-[#30261C]/5 pr-4">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#30261C]/40 mb-6 font-sans">
            ON THIS PAGE
          </h4>
          <nav className="flex flex-col gap-3">
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" });
                    setActiveId(sec.id);
                  }}
                  className={`text-[14px] font-medium leading-[1.4] transition-all duration-300 border-l-2 pl-3 ${
                    isActive
                      ? "text-[#ff5100] border-[#ff5100] font-semibold"
                      : "text-[#30261C]/50 border-transparent hover:text-[#30261C]"
                  }`}
                >
                  {sec.title}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Middle Column - Content */}
        <div className="w-full min-w-0">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-8 text-[13px] md:text-[14px] font-regular text-[#30261C]/55">
            <Link href="/" className="hover:text-[#ff5100] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#ff5100] transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-[#30261C] font-regular truncate max-w-[200px] md:max-w-xs">{article.title}</span>
          </div>

          {/* Mobile Table of Contents Slider */}
          {sections.length > 0 && (
            <div className="lg:hidden w-full mb-8">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#30261C]/60 mb-3 font-sans">
                On This Page
              </h4>
              <div
                ref={mobileSliderRef}
                onMouseDown={handleMobileMouseDown}
                onMouseLeave={handleMobileMouseLeave}
                onMouseUp={handleMobileMouseUp}
                onMouseMove={handleMobileMouseMove}
                className="w-full overflow-x-auto flex gap-3 pb-3 cursor-grab active:cursor-grabbing select-none scrollbar-none scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {sections.map((sec) => {
                  const isActive = activeId === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById(sec.id);
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                          setActiveId(sec.id);
                        }
                      }}
                      className={`shrink-0 px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-[#ff5100] text-white shadow-[0_4px_15px_rgba(255,81,0,0.25)] border border-transparent"
                          : "bg-white/40 border border-[#30261C]/15 text-[#30261C] hover:bg-white/60"
                      }`}
                    >
                      {sec.title}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Article Box */}
          <article className="w-full bg-white/40 border border-[#30261C]/10 rounded-[28px] p-6 md:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] backdrop-blur-sm">
            <div className="prose max-w-none text-[#30261C] font-sans">
              {renderContent(article.content)}
            </div>

            {/* Share Post */}
            <div className="border-t border-[#30261C]/10 mt-12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span className="text-[14px] md:text-[16px] font-regular text-[#30261C]/70">
                Share this insight:
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShare("facebook")}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[#30261C]/15 hover:border-[#ff5100] text-[#30261C] hover:text-[#ff5100] transition-all duration-300"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 0 0-4 4v2z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[#30261C]/15 hover:border-[#ff5100] text-[#30261C] hover:text-[#ff5100] transition-all duration-300"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.56a9.83 9.83 0 0 1-2.83.77 4.93 4.93 0 0 0 2.17-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.98 13.98 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.92 4.92 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10 10 0 0 0 24 4.56z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[#30261C]/15 hover:border-[#ff5100] text-[#30261C] hover:text-[#ff5100] transition-all duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Right Sidebar - About Agency & Contact Card */}
        <aside className="w-full lg:sticky lg:top-28 space-y-6">
          
          {/* Company Bio Card */}
          <div className="bg-[#ff5100] rounded-[24px] p-6 text-white shadow-[0_12px_24px_rgba(255,81,0,0.15)] border border-[#ff5100]/25 relative overflow-hidden group">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-white/10 blur-[30px] pointer-events-none" />
            <h3 className="text-[18px] font-bold mb-3 uppercase tracking-wide">
              Southern Edge Marketing
            </h3>
            <p className="text-[14px] text-white/90 leading-relaxed mb-6 font-light">
              We design, build, and optimize high-converting digital storefronts, corporate portals, and brand systems for ambitious companies.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white border-b border-white/50 hover:border-white transition-all pb-0.5"
            >
              Learn about us ↗
            </Link>
          </div>

          {/* Need Marketing Help Card */}
          <div className="bg-white/40 border border-[#30261C]/10 rounded-[24px] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.02)] backdrop-blur-sm">
            <h3 className="text-[18px] font-bold text-[#30261C] mb-3 uppercase tracking-wide">
              Start Your Digital Journey
            </h3>
            <p className="text-[14px] text-[#30261C]/75 leading-relaxed mb-6 font-light">
              Get in touch with our team to discuss custom Next.js engineering, Shopify architectures, or modern digital strategies.
            </p>
            <div className="flex flex-col gap-3">
              
              <Link
                href="/contact"
                className="w-full border border-[#30261C]/15 hover:bg-white text-[#30261C] text-center py-3 rounded-xl font-bold text-[14px] md:text-[15px] transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};
