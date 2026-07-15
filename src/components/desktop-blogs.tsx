"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export interface BlogItem {
  title: string;
  category: string;
  slug: string;
  image: string;
  date: string;
  excerpt?: string;
}

export const DesktopBlogs = ({ blogs = [] }: { blogs?: BlogItem[] }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Use first blog as featured, or fallback if none exist
  const featuredBlog = blogs[0] || {
    title: "Trademark Registration in June 2026: A Comprehensive Guide",
    category: "SOUTHERN EDGE MARKETING BLOGS",
    slug: "trademark-registration-in-june-2026-a-comprehensive-guide",
    image: "/assets/trademark-guide.png",
    date: "Jun 20, 2026",
    excerpt: "A Comprehensive Guide to Understanding Trademark Signatures and Claims in India"
  };

  const remainingBlogs = blogs.length > 0 ? blogs.slice(1) : [];

  const filters = ["All", "AI Agents", "AI Trends & News", "Tutorials"];

  // Filter and sort remaining blogs
  const filteredAndSortedBlogs = useMemo(() => {
    let result = [...remainingBlogs];
    
    // 1. Filter
    if (activeFilter !== "All") {
      result = result.filter(
        (blog) => blog.category.toLowerCase() === activeFilter.toLowerCase()
      );
    }
    
    // 2. Sort
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });
    
    return result;
  }, [remainingBlogs, activeFilter, sortBy]);

  return (
    <section className="w-full bg-[#fffff0] pb-32 pt-0 px-8 lg:px-[90px] flex flex-col relative z-10 overflow-hidden">
      
      {/* Hero Section: Two-Column Layout */}
      <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 pt-32 lg:pt-36 mb-16 max-w-[1280px] mx-auto items-start">
        {/* Left Side: Brand Text */}
        <div className="flex flex-col w-full lg:w-[50%] justify-center pt-2">
          <span className="text-[13px] md:text-[14px] font-bold tracking-[2px] uppercase text-orange-500 mb-5 block">
            SOUTHERN EDGE MARKETING BLOGS
          </span>
          <h1 className="text-[52px] md:text-[70px] lg:text-[65px] font-medium text-black leading-[1.05] tracking-tight mb-8">
            Ideas that build<br />
            better digital experiences
          </h1>
          <p className="text-black/60 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[500px]">
Explore articles on UI/UX design, modern web development, branding, performance, and the strategies behind successful digital products.          </p>
        </div>

        {/* Right Side: Featured Blog Card */}
        <div className="w-full lg:w-[40%] flex justify-end">
          <Link 
            href={`/blogs/${featuredBlog.slug}`}
            className="group flex flex-col w-full max-w-[580px] text-left cursor-pointer"
          >
            {/* Featured Image with rounded corners and scale animation */}
            <div className="w-full aspect-[16/10] rounded-[24px] md:rounded-[22px] overflow-hidden shadow-sm group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 relative z-20">
              <img 
                src={featuredBlog.image} 
                alt={featuredBlog.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" 
              />
            </div>
            {/* Featured Title */}
            <h3 className="font-semibold text-[22px] md:text-[26px] leading-[1.25] text-black mt-6 mb-3 transition-colors duration-300 group-hover:text-[#ff5100]">
              {featuredBlog.title}
            </h3>
            {/* Featured Date */}
            <span className="text-[14px] md:text-[16px] text-black/50 font-medium">
              {featuredBlog.date}
            </span>
          </Link>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div className="w-full h-px bg-black/10 max-w-[1280px] mx-auto mb-12" />

      {/* Filter and Sort Bar */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-[13px] md:text-[14px] font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-orange-500 text-white  border-transparent shadow-sm"
                    : "bg-transparent text-black/70 border border-black/10 hover:border-black/35"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <span className="text-[13px] md:text-[14px] text-black/45 font-medium whitespace-nowrap">
            Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border border-black/10 rounded-xl px-4 py-2 text-[13px] md:text-[14px] font-medium text-black focus:outline-none focus:border-black/40 cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
        {filteredAndSortedBlogs.length > 0 ? (
          filteredAndSortedBlogs.map((blog, index) => (
            <Link 
              key={index} 
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col w-full text-left cursor-pointer"
            >
              {/* Thumbnail Image */}
              <div className="w-full aspect-[16/10] rounded-[20px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] relative z-10">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>

              {/* Metadata Row */}
              <div className="text-[13px] md:text-[14px] text-black/45 font-semibold mt-4 mb-2 flex items-center gap-2 flex-wrap">
                <span className="uppercase tracking-wider">{blog.category}</span>
                <span className="text-black/15 select-none">|</span>
                <span>{blog.date}</span>
                {blog.excerpt && (
                  <>
                    <span className="text-black/15 select-none">|</span>
                    <span className="line-clamp-1 text-black/40 font-medium">{blog.excerpt}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[18px] md:text-[21px] leading-[1.3] text-black transition-colors duration-300 group-hover:text-[#ff5100]">
                {blog.title}
              </h3>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-16 text-center text-black/40 font-medium">
            No articles found in this category.
          </div>
        )}
      </div>

    </section>
  );
};
