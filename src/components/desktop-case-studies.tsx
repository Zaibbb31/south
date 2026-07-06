"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, PanInfo } from "framer-motion";

const ArrowRightIcon = () => (
  <svg className="w-[16px] h-[16px] text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const images = [
  "/website.jpg",
  "/meta.jpg",
  "/photoshoot.jpg"
];

export const DesktopCaseStudies = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = offset.x;
    if (swipe < -50) {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (swipe > 50) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="w-full relative h-[1120px] bg-[#f6f6f6] overflow-hidden">
      
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto py-12 px-8 bg-white/60 backdrop-blur-2xl rounded-[32px] border border-white/50 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center z-10 text-center pointer-events-none">
        
        {/* Text Group */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-baseline gap-2 justify-center">
            <span className="text-[72px] leading-[1] font-bold text-[#0f0f0f] tracking-tight">1500+</span>
          </div>
          <span className="text-[40px] leading-[1] font-semibold text-[#0f0f0f] tracking-tight mt-2">Projects</span>
          <span className="text-[40px] leading-[1] font-semibold text-[#0f0f0f] tracking-tight mt-1">Delivered</span>
        </div>

        {/* Explore Projects Button */}
        <Link href="/contact" className="pointer-events-auto">
          <button 
            className="flex items-center justify-center gap-3 w-[220px] h-[56px] rounded-full bg-gradient-to-r from-[#ff5100] to-[#ff7300] shadow-[0_4px_14px_rgba(255,81,0,0.4)] hover:shadow-[0_8px_24px_rgba(255,81,0,0.6)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            aria-label="Explore Projects"
          >
            <span className="font-semibold text-[16px] text-white tracking-wide">
              Explore Projects
            </span>
            <div className="transform group-hover:translate-x-1.5 transition-transform duration-300">
              <ArrowRightIcon />
            </div>
          </button>
        </Link>

      </div>
    </section>
  );
};
