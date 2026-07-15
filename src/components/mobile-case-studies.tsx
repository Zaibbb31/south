"use client";

import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  duration: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, title, category, duration, image }) => {
  return (
    <Link 
      href={`/projects/${slug}`}
      className="group flex flex-col w-full cursor-pointer"
    >
      {/* Image Container with rounded corners */}
      <div className="w-full aspect-[3/2] rounded-[16px] md:rounded-[24px] overflow-hidden mb-5 bg-[#eaeaea] relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
        />
        
        {/* Category Pill Overlay on Bottom Right */}
        <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 px-3 py-1.5 rounded-full bg-[#1b1b1b]/35 border border-white/10 text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase">
          {category}
        </div>
      </div>
      
      {/* Text Details below the image */}
      <div className="flex flex-col gap-1 px-1 pb-4">
        <span className="text-[12px] md:text-[13px] font-semibold text-[#30261C]/50 font-sans tracking-wide">
          {duration}
        </span>
        <h3 className="text-[20px] md:text-[24px] font-bold text-[#30261C] tracking-tight uppercase leading-none">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export const MobileCaseStudies = () => {
  const selectedProjects = [
    {
      slug: "ama",
      title: "AMA Legal Solutions",
      category: "Website Development",
      duration: "6 weeks",
      image: "/project/AMA.svg"
    },
    {
      slug: "the-fat-cookie",
      title: "The Fat Cookie",
      category: "Shopify",
      duration: "8 weeks",
      image: "/project/The_fat_cookie.svg"
    },
    {
      slug: "sage-perfume",
      title: "Sage Perfume",
      category: "Photography",
      duration: "5 weeks",
      image: "/SAGE_Perfumes/1.jpg"
    },
    {
      slug: "jsv",
      title: "JSV Branding",
      category: "Branding",
      duration: "6 weeks",
      image: "/JSV/5.jpg"
    }
  ];

  return (
    <section className="w-full bg-[#fffff0] px-6 md:px-10 lg:px-[90px] py-16 md:py-24 max-w-[1440px] mx-auto">
      {/* Top Header */}
      <div className="flex flex-col items-center mb-16 w-full">
        <p className="font-medium text-[20px] lg:text-[24px] mb-8 tracking-wide">
          <span className="text-[#ff5100]">[</span>
          <span className="text-black mx-2">PROJECTS</span>
          <span className="text-[#ff5100]">]</span>
        </p>
        
        {/* Subtle divider line across the screen */}
        <div className="w-full h-px bg-black/5 mb-10 max-w-[1200px]" />
        
        <h2 className="text-[60px] lg:text-[80px] xl:text-[104px] font-semibold text-black leading-none tracking-tight text-center uppercase">
          CASE STUDIES
        </h2>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {/* Row 1 */}
        <div className="pb-8 border-b border-[#30261C]/15 md:border-b-0">
          <ProjectCard {...selectedProjects[0]} />
        </div>
        <div className="pb-8 border-b border-[#30261C]/15 md:border-b-0">
          <ProjectCard {...selectedProjects[1]} />
        </div>

        {/* Row 1 Divider for Desktop */}
        <div className="hidden md:block col-span-2 h-px bg-[#30261C]/15 -mt-6 mb-2" />

        {/* Row 2 */}
        <div className="pb-8 border-b border-[#30261C]/15 md:border-b-0">
          <ProjectCard {...selectedProjects[2]} />
        </div>
        <div className="pb-8 border-b border-[#30261C]/15 md:border-b-0">
          <ProjectCard {...selectedProjects[3]} />
        </div>

        {/* Row 2 Divider for Desktop */}
        <div className="hidden md:block col-span-2 h-px bg-[#30261C]/15 -mt-6 mb-2" />
      </div>
    </section>
  );
};

