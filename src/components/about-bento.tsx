"use client";

import React from "react";
import { motion, PanInfo } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const GreenCrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1">
    <path d="M12 4V20M4 12H20" stroke="#00ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MissionCard = ({ isMobile = false }) => (
  <div className={`bg-[#111111] rounded-[24px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-sm h-full ${!isMobile ? 'min-h-[220px]' : ''}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#000000] to-[#111111] pointer-events-none" />
    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    
    <div className="relative z-10">
      <h2 className="text-white text-[28px] md:text-[32px] font-semibold mb-4 tracking-tight">Our Mission</h2>
      <p className="text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-[90%] font-light">
        To empower businesses with innovative marketing strategies, creative storytelling, and data-driven solutions that increase visibility, generate quality leads, and accelerate sustainable growth.
      </p>
    </div>
  </div>
);

const VisionCard = ({ isMobile = false }) => (
  <div className={`bg-[#111111] rounded-[24px] p-8 md:p-10 flex flex-col relative overflow-hidden shadow-sm h-full ${!isMobile ? 'min-h-[280px]' : ''}`}>
    <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-3xl pointer-events-none" />
    
    <div className="relative z-10">
      <h2 className="text-white text-[28px] md:text-[32px] font-semibold mb-4 tracking-tight">Our Vision</h2>
      <p className="text-gray-400 text-[16px] md:text-[18px] leading-relaxed font-light">
        To become a globally trusted marketing partner recognized for delivering exceptional digital experiences, measurable business outcomes, and long-term brand success.
      </p>
    </div>
  </div>
);

const WhyUsCard = ({ isMobile = false }) => (
  <div className="bg-white rounded-[24px] p-8 md:p-10 flex flex-col h-full shadow-sm border border-black/5">
    <h2 className="text-[#0f0f0f] text-[28px] md:text-[32px] font-semibold mb-6 tracking-tight">Why Choose Us</h2>
    <ul className="flex flex-col gap-4">
      {[
        "Data-Driven Strategy",
        "Creative Excellence",
        "Performance Focused",
        "Dedicated Support",
        "Transparent Communication"
      ].map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <GreenCrossIcon />
          <span className="text-[#0f0f0f] text-[16px] md:text-[17px] font-medium tracking-tight">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WhatWeDoCard = ({ isMobile = false }) => (
  <div className={`bg-[#111111] rounded-[24px] p-8 md:p-10 flex flex-col relative overflow-hidden shadow-sm h-full ${!isMobile ? 'min-h-[500px] xl:col-span-1' : ''}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] pointer-events-none" />
    
    <div className="relative z-10 flex flex-col h-full">
      <h2 className="text-white text-[28px] md:text-[32px] font-semibold mb-4 tracking-tight">What We Do</h2>
      <p className="text-gray-400 text-[16px] font-light leading-relaxed mb-8">
        We help brands grow through strategic marketing, creative content, and high-performing digital experiences designed to drive measurable results.
      </p>
      
      <ul className="flex flex-col gap-4 mb-10 flex-grow">
        {[
          "Website Design & Development",
          "Social Media Management",
          "Performance Marketing",
          "Search Engine Optimization",
          "Branding & Creative Design",
          "Video & Photography Production",
          "Lead Generation & Growth Marketing"
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <GreenCrossIcon />
            <span className="text-gray-300 text-[15px] md:text-[16px] font-normal leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact" className="mt-auto">
        <button 
          className="relative w-[222px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
          aria-label="Start Growing"
        >
          {/* Inner Left Pill with right shadow */}
          <div className="absolute left-[0px] top-0 w-[157px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
            <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
            <span className="font-medium text-[18px] text-white tracking-tight whitespace-nowrap">
              Start Growing
            </span>
          </div>
          
          {/* Right Arrow Icon */}
          <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
            <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </button>
      </Link>
    </div>
  </div>
);

export const AboutBento = () => {
  const [index, setIndex] = useState(0);
  const totalCards = 4;

  const handleDragEnd = (e: any, { offset }: PanInfo) => {
    const swipe = offset.x;
    if (swipe < -40 && index < totalCards - 1) {
      setIndex((prev) => prev + 1);
    } else if (swipe > 40 && index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-0 md:px-10 py-8 md:py-16 bg-[#fffff0] overflow-hidden">
      
      {/* Desktop Layout (CSS Grid) */}
      <div className="hidden md:grid grid-cols-1 xl:grid-cols-3 gap-6 w-full px-4 md:px-0">
        <div className="xl:col-span-2 flex flex-col gap-6">
          <MissionCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <VisionCard />
            <WhyUsCard />
          </div>
        </div>
        <WhatWeDoCard />
      </div>

      {/* Mobile Layout (Framer Motion Carousel) */}
      <div className="md:hidden relative w-full pt-2 pb-10">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full cursor-grab active:cursor-grabbing items-stretch"
        >
          <div className="min-w-full px-5 pb-4">
            <MissionCard isMobile />
          </div>
          <div className="min-w-full px-5 pb-4">
            <VisionCard isMobile />
          </div>
          <div className="min-w-full px-5 pb-4">
            <WhyUsCard isMobile />
          </div>
          <div className="min-w-full px-5 pb-4">
            <WhatWeDoCard isMobile />
          </div>
        </motion.div>

        {/* Dot Indicators */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === index ? 'bg-[#ff5100]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};
