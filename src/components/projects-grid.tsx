"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Website development",
  "Branding",
  "Photoshoot",
  "Shopify stores",
  "Meta Ads"
];

export const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="w-full bg-[#fffff0] px-6 lg:px-[90px] py-16 lg:py-24">
      {/* Dropdown Filter Button Container */}
      <div className="relative mb-16 z-50 flex items-center">
        {/* Backdrop for closing dropdown when clicking outside */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40 cursor-default" 
            onClick={() => setIsOpen(false)}
          />
        )}
        
        <div className="relative z-50 flex items-center gap-3">
          {/* Pill Button (Category Label) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="px-8 py-3 bg-gradient-to-r from-[#ff5100] to-[#e04400] text-white font-medium text-[16px] rounded-full shadow-[0_8px_25px_-5px_rgba(255,81,0,0.45)] hover:shadow-[0_12px_30px_-5px_rgba(255,81,0,0.6)] transition-all duration-300 min-w-[120px] text-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] outline-none border-none"
          >
            {selectedCategory}
          </button>
          
          {/* Circular Arrow Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#ff5100] to-[#e04400] text-white rounded-full shadow-[0_8px_25px_-5px_rgba(255,81,0,0.45)] hover:shadow-[0_12px_30px_-5px_rgba(255,81,0,0.6)] transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] outline-none border-none"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-xl border border-white/50 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3.5 text-[15px] transition-colors duration-200 first:rounded-t-[20px] last:rounded-b-[20px] cursor-pointer outline-none border-none ${
                    selectedCategory === cat 
                      ? 'text-[#ff5100] bg-[#ff5100]/5 font-semibold' 
                      : 'text-[#30261c]/80 hover:bg-[#30261c]/5 hover:text-[#30261c]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-12 lg:gap-y-16">
        {filteredProjects.map((project, index) => {
          // Add a slight top margin to the second column on larger screens to create a staggered masonry feel
          const isEven = index % 2 !== 0;
          return (
            <Link 
              href={`/projects/${project.slug}`}
              key={project.id} 
              className={`group flex flex-col w-full cursor-pointer ${isEven ? 'md:mt-16' : ''}`}
            >
              {/* Image Container with Overflow Hidden for the scale effect */}
              <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-[#30261c]/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />
                
                {/* Optional dark overlay on hover for extra premium feel */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-in-out"></div>
              </div>
              
              {/* Text Meta Container */}
              <div className="flex flex-col gap-1 px-2">
                <h3 className="text-[22px] lg:text-[26px] font-medium text-[#30261C] group-hover:text-[#ff5100] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[15px] lg:text-[17px] text-[#30261C]/60 font-light">
                  {project.category}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
