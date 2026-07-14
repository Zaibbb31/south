"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Website Development",
  "Shopify Development",
  "Photography & Videography",
  "Branding",
  "App Development",
  "SEO",
  "Social Media Management"
];

const getNormalizedCategory = (category: string): string => {
  const cat = category.toLowerCase().trim();
  if (cat.includes("website") || cat.includes("web development") || cat.includes("web design")) {
    return "Website Development";
  }
  if (cat.includes("shopify")) {
    return "Shopify Development";
  }
  if (cat.includes("photography") || cat.includes("videography") || cat.includes("photoshoot")) {
    return "Photography & Videography";
  }
  if (cat.includes("app development")) {
    return "App Development";
  }
  if (cat.includes("branding")) {
    return "Branding";
  }
  if (cat.includes("seo")) {
    return "SEO";
  }
  if (cat.includes("social media")) {
    return "Social Media Management";
  }
  return category;
};

export const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getCategoryCount = (category: string) => {
    if (category === "All") return projects.length;
    return projects.filter(p => getNormalizedCategory(p.category) === category).length;
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => getNormalizedCategory(p.category) === selectedCategory);

  return (
    <section className="w-full bg-[#fffff0] px-6 md:px-10 lg:px-[90px] pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 max-w-[1440px] mx-auto">
      {/* Top tag: [ OUR WORK ] */}
      <div className="flex items-center gap-1 text-[11px] md:text-[13px] tracking-[0.2em] font-bold">
        <span className="text-[#ff5100] font-sans">[</span>
        <span className="text-[#30261C] uppercase font-sans">OUR WORK</span>
        <span className="text-[#ff5100] font-sans">]</span>
      </div>

      {/* Horizontal Line Divider */}
      <div className="w-full h-px bg-[#30261C]/15 my-5 md:my-6" />

      {/* Heading: PROJECTS */}
      <h1 className="text-[54px] sm:text-[72px] md:text-[90px] lg:text-[110px] xl:text-[130px] font-extrabold leading-[1] text-[#30261C] uppercase tracking-tighter mb-8 md:mb-12">
        PROJECTS
      </h1>

      {/* Filter Dropdown Container */}
      <div ref={dropdownRef} className="relative z-50 mb-12 md:mb-16 w-fit">
        <div className="flex items-center gap-3">
          {/* Pill Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-[52px] md:h-[56px] min-w-[130px] px-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff3c00] text-white text-[16px] md:text-[17px] font-bold tracking-wide shadow-[0_10px_25px_rgba(255,81,0,0.3)] hover:shadow-[0_14px_28px_rgba(255,81,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none cursor-pointer"
          >
            {selectedCategory}
          </button>

          {/* Circle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[52px] h-[52px] md:w-[56px] md:h-[56px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff3c00] text-white shadow-[0_10px_25px_rgba(255,81,0,0.3)] hover:shadow-[0_14px_28px_rgba(255,81,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none cursor-pointer shrink-0"
          >
            <svg
              className={`w-5 h-5 text-white transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-5-5m5 5l5-5" />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 mt-3 w-[300px] sm:w-[340px] bg-white border border-[#30261C]/15 rounded-[24px] shadow-[0_16px_40px_rgba(48,38,28,0.12)] z-50 overflow-hidden py-3"
            >
              <div className="max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
                {categories.map((category) => {
                  const isActive = selectedCategory === category;
                  const count = getCategoryCount(category);
                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-5 py-3 text-left transition-colors duration-200 hover:bg-[#ff5100]/5 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            isActive ? "bg-[#ff5100]" : "bg-transparent"
                          }`}
                        />
                        <span
                          className={`text-[15px] font-medium transition-colors duration-200 ${
                            isActive ? "text-[#ff5100] font-semibold" : "text-[#30261C]/60 hover:text-[#ff5100]"
                          }`}
                        >
                          {category}
                        </span>
                      </div>
                      <span className="text-[12px] font-semibold font-sans px-2 py-0.5 rounded-full bg-[#30261C]/5 text-[#30261C]/40">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12">
        {filteredProjects.map((project, index) => {
          return (
            <Link 
              href={`/projects/${project.slug}`}
              key={`${project.id}-${project.slug}-${index}`} 
              className="group flex flex-col w-full cursor-pointer bg-white border border-[#eaeaea] p-4 lg:p-5 rounded-[28px] lg:rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.045)] hover:border-neutral-200"
            >
              {/* Image Container with Inset padding and rounded corners */}
              <div className="w-full aspect-[4/3] rounded-[20px] lg:rounded-[24px] overflow-hidden mb-6 bg-neutral-50 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.01] transition-colors duration-500 ease-in-out"></div>
              </div>
              
              {/* Text Meta Container */}
              <div className="flex flex-col gap-4 px-1 pb-1">
                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#0f0f0f] leading-none transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Details Row: Category on left, Location & Year & Arrow on right */}
                <div className="flex justify-between items-center text-[12px] lg:text-[13px] font-sans text-neutral-400 font-semibold tracking-wider uppercase mt-1">
                  <span>
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2.5">
                    <span>
                      DUBAI • 2025
                    </span>
                    
                    {/* Circle Arrow Button */}
                    <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white shrink-0 group-hover:bg-[#ff5100] group-hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
