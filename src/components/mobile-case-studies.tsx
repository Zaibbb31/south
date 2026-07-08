"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, PanInfo } from "framer-motion";

const ArrowRightIcon = () => (
  <svg className="w-[14px] h-[14px] text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const images = [
  "/website.jpg",
  "/meta.jpg",
  "/photoshoot.jpg"
];

export const MobileCaseStudies = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = offset.x;
    if (swipe < -40) {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (swipe > 40) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="w-full relative h-[600px] bg-[#f6f6f6] overflow-hidden">
      
      {/* Draggable Slider Background */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-full h-full flex cursor-grab active:cursor-grabbing"
      >
        {images.map((img, i) => (
          <div 
            key={i} 
            className="min-w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </motion.div>

      {/* Center Box Content - Glassmorphism Square */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-auto py-10 px-6 bg-white/60 backdrop-blur-2xl rounded-[24px] border border-white/50 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center z-10 text-center pointer-events-none">
        
        {/* Text Group */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-[48px] leading-[1] font-bold text-[#0f0f0f] tracking-tight">1500+</span>
          </div>
          <span className="text-[28px] leading-[1] font-semibold text-[#0f0f0f] tracking-tight mt-1">Projects</span>
          <span className="text-[28px] leading-[1] font-semibold text-[#0f0f0f] tracking-tight mt-1">Delivered</span>
        </div>

        {/* Explore Projects Button */}
        <Link href="/projects" className="pointer-events-auto">
          <button 
            className="relative w-[222px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
            aria-label="Explore Projects here"
          >
            {/* Inner Left Pill with right shadow */}
            <div className="absolute left-[0px] top-0 w-[165px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
              <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
              <span className="font-medium text-[13px] text-white tracking-tight whitespace-nowrap">
                Explore Projects here
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
    </section>
  );
};
