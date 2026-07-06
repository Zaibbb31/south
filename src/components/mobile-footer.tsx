"use client";

import React, { useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";

export const MobileFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="w-full bg-gradient-to-b from-[#fffff0] to-[#ff5100] px-5 pt-5 pb-4 flex flex-col relative overflow-hidden" style={{ zoom: 0.8 }}>
      
      {/* Brand & Intro */}
      <div className="flex flex-col gap-3 mb-6">
        <h2 className="text-[56px] leading-[0.95] font-bold text-black flex flex-col tracking-tight">
          <span className="text-[#ff5100]">SOUTHERN</span>
          <span>MARKETING</span>
        </h2>
        <p className="text-[18px] leading-[1.4] text-black/75 mt-3 pr-4 font-sans">
          Building brands, websites, and growth strategies that help ambitious businesses stand out, scale faster, and stay ahead in a digital-first world.
        </p>
      </div>

      {/* Email Callout */}
      <div className="flex flex-col items-end text-right mb-6 pr-2">
        <p className="text-[16px] font-medium text-black/65 mb-1 font-sans">
          Let's Build Something Great
        </p>
        <a href="mailto:info@southernedgemarketing.com" className="text-[17px] text-black leading-none font-sans hover:text-white transition-colors duration-300">
          info@southernedgemarketing.com
        </a>
      </div>



      {/* Navigation */}
      <div className="flex flex-col items-end text-right mb-6 pr-2">
        <p className="text-[25px] text-black/65 mb-4 font-sans">Navigation</p>
        <nav className="flex flex-col items-end gap-3">
          <Link href="/" className="text-[16px] text-black leading-none font-sans hover:-translate-x-2 transition-transform duration-300 w-fit">
            Home
          </Link>
          <Link href="/about" className="text-[16px] text-black leading-none font-sans hover:-translate-x-2 transition-transform duration-300 w-fit">
            About Us
          </Link>
          <Link href="/services" className="text-[16px] text-black leading-none font-sans hover:-translate-x-2 transition-transform duration-300 w-fit">
            Services
          </Link>
          <Link href="/projects" className="text-[16px] text-black leading-none font-sans hover:-translate-x-2 transition-transform duration-300 w-fit">
            Projects
          </Link>
          <Link href="/blogs" className="text-[16px] text-black leading-none font-sans hover:-translate-x-2 transition-transform duration-300 w-fit">
            Blogs
          </Link>
        </nav>
      </div>

      {/* Social */}
      <div className="flex flex-col items-end text-right mb-6 pr-2">
        <p className="text-[25px] text-black/65 mb-4 font-sans">Social</p>
        <nav className="flex flex-col items-end gap-3">
          {["Instagram", "LinkedIn", "X"].map((item) => (
            <a key={item} href="/contact" className="text-[16px] text-black leading-none font-sans hover:-translate-x-2 transition-transform duration-300 w-fit">
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Legal Links Row */}
      <div className="flex flex-row items-center gap-6 mt-8 mb-4 w-full pl-1">
        <Link href="/terms" className="text-[16px] text-black leading-none font-sans hover:underline">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="text-[16px] text-black leading-none font-sans hover:underline">
          Privacy Policy
        </Link>
      </div>

      {/* Footer Bottom: Explore More */}
      <div className="flex flex-col gap-4 mt-6 w-full pl-2">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-6 w-full cursor-pointer outline-none border-none bg-transparent text-left group"
        >
          <span className="text-[25px] font-semibold text-black whitespace-nowrap flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            Explore More
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-black group-hover:text-white'}`}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
            </svg>
          </span>
          <div className="flex-1 h-[1px] bg-[#b03000]/60 mt-1" />
        </button>

        <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}`}>
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/explore-more/${article.slug}`}
              className="flex flex-col gap-1 p-4 rounded-[16px] bg-white/5 border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <h4 className="text-[18px] font-medium text-black leading-tight">
                {article.title}
              </h4>
              <p className="text-[13px] text-black/60 font-light font-sans line-clamp-2">
                {article.excerpt}
              </p>
              <span className="text-[13px] font-semibold text-[#b03000] flex items-center gap-1 mt-1">
                Read Article
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
