"use client";

import React, { useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";

export const DesktopFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="w-full bg-gradient-to-b from-[#fffff0] to-[#ff5100] pt-10 pb-6 px-8 lg:px-[90px] relative z-10 overflow-hidden flex flex-col" style={{ zoom: 0.8 }}>
      
      {/* Top Row: Logo & Contact */}
      <div className="flex w-full justify-between items-start mb-10">
        {/* Left: Logo & Description */}
        <div className="flex flex-col max-w-[800px]">
          <h2 className="text-[70px] lg:text-[85px] xl:text-[104px] font-bold leading-[0.9] tracking-tight mb-8">
            <span className="text-[#ff5100]">SOUTHERN</span>
            <br />
            <span className="text-black">MARKETING</span>
          </h2>
          <p className="text-[18px] lg:text-[21px] xl:text-[24px] text-black/65 leading-[1.4] max-w-[650px]">
            Building brands, websites, and growth strategies that help ambitious businesses stand out, scale faster, and stay ahead in a digital-first world.
          </p>
        </div>

        {/* Right: Direct Contact */}
        <div className="flex flex-col items-end text-right pt-4">
          <p className="text-[16px] lg:text-[20px] text-black/65 font-medium mb-2">
            Let's Build Something Great
          </p>
          <a 
            href="mailto:info@southernedgemarketing.com" 
            className="text-[16px] lg:text-[22px] text-black font-normal hover:text-white transition-colors duration-300"
          >
            info@southernedgemarketing.com
          </a>
        </div>
      </div>

      {/* Middle Row: Links & Social */}
      <div className="flex w-full justify-end items-start mb-12">
        
        {/* Right: Lists */}
        <div className="flex gap-16 lg:gap-32 text-right">

          {/* Navigation */}
          <div className="flex flex-col items-end">
            <p className="text-[18px] lg:text-[24px] text-black/65 mb-6">Navigation</p>
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                Projects
              </Link>
              <Link 
                href="/blogs" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                Blogs
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-end">
            <p className="text-[18px] lg:text-[24px] text-black/65 mb-6">Legal</p>
            <nav className="flex flex-col gap-4">
              <Link 
                href="/terms" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/privacy" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-end">
            <p className="text-[18px] lg:text-[24px] text-black/65 mb-6">Social</p>
            <nav className="flex flex-col gap-4">
              {['Instagram', 'LinkedIn', 'X'].map((link) => (
                <a 
                  key={link} 
                  href="/contact" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
        </div>
      </div>

      {/* Bottom Row: Explore More */}
      <div className="flex flex-col w-full gap-6 mt-6">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center w-full gap-8 cursor-pointer outline-none border-none bg-transparent text-left group"
        >
          <span className="text-[24px] lg:text-[28px] text-black font-semibold shrink-0 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
            Explore More
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-black group-hover:text-white'}`}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
            </svg>
          </span>
          <div className="h-px bg-black/20 w-full group-hover:bg-white/40 transition-colors duration-300" />
        </button>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-12 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1200px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/explore-more/${article.slug}`}
              className="flex flex-col gap-2 p-6 rounded-[20px] bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 group/item"
            >
              <h4 className="text-[20px] lg:text-[22px] font-medium text-black group-hover/item:text-white transition-colors duration-300 leading-tight">
                {article.title}
              </h4>
              <p className="text-[14px] lg:text-[15px] text-black/60 group-hover/item:text-white/70 transition-colors duration-300 font-light font-sans line-clamp-2">
                {article.excerpt}
              </p>
              <span className="text-[14px] font-semibold text-[#ff5100] group-hover/item:text-white flex items-center gap-1.5 mt-auto pt-2">
                Read Article
                <svg className="w-4 h-4 transform group-hover/item:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
