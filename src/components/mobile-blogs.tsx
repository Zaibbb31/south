"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BlogItem } from "./desktop-blogs";

export const MobileBlogs = ({ blogs = [] }: { blogs?: BlogItem[] }) => {
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
    <div className="w-full relative bg-[#fffff0] pt-24 pb-16 overflow-hidden">
      
      {/* Hero Section */}
      <div className="flex flex-col items-start w-full px-6 gap-6 mb-10 z-10 relative">
        <span className="text-[12px] font-bold tracking-[1.5px] uppercase text-orange-500">
          SOUTHERN EDGE MARKETING BLOGS
        </span>
        
        <h1 className="text-[36px] leading-[1.1] font-bold text-black tracking-tight mt-1">
          Ideas that build<br />
          better digital experiences
        </h1>
        
        <p className="text-black/60 text-[14px] leading-relaxed text-justify mb-4">
          Anything and everything you're looking for to protect your brand, trademarks, and intellectual property rights.
        </p>

        {/* Featured Card */}
        <Link 
          href={`/blogs/${featuredBlog.slug}`}
          className="group flex flex-col w-full text-left cursor-pointer bg-white rounded-[24px] p-4 border border-black/5 shadow-sm"
        >
          <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden relative shadow-sm">
            <img 
              src={featuredBlog.image} 
              alt={featuredBlog.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          <h3 className="font-semibold text-[18px] leading-[1.3] text-black mt-4 mb-2">
            {featuredBlog.title}
          </h3>
          <span className="text-[12px] text-black/50 font-medium">
            {featuredBlog.date}
          </span>
        </Link>
      </div>

      {/* Horizontal Line Divider */}
      <div className="w-[150vw] -ml-[25vw] h-px bg-black/10 relative mb-8" />

      {/* Filter and Sort Bar */}
      <div className="w-full px-6 flex flex-col gap-5 mb-8 text-left">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2.5 rounded-full text-[12px] font-medium transition-all duration-300 cursor-pointer ${
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
        <div className="flex items-center gap-2 self-end">
          <span className="text-[12px] text-black/45 font-medium whitespace-nowrap">
            Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border border-black/10 rounded-xl px-3 py-1.5 text-[12px] font-medium text-black focus:outline-none focus:border-black/40 cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Remaining Blogs List */}
      <div className="w-full px-6 flex flex-col gap-8 relative z-10">
        {filteredAndSortedBlogs.length > 0 ? (
          filteredAndSortedBlogs.map((blog, index) => (
            <Link 
              key={index} 
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col w-full text-left cursor-pointer"
            >
              {/* Thumbnail Image */}
              <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden shadow-sm transition-all duration-500 relative z-10">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Metadata Row */}
              <div className="text-[12px] text-black/45 font-semibold mt-4 mb-2 flex items-center gap-2 flex-wrap">
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
              <h3 className="font-semibold text-[17px] leading-[1.3] text-black">
                {blog.title}
              </h3>
            </Link>
          ))
        ) : (
          <div className="py-12 text-center text-black/40 font-medium">
            No articles found in this category.
          </div>
        )}
      </div>

    </div>
  );
};

