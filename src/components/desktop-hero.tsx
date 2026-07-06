"use client";

import React from "react";
import Link from "next/link";
import ColorBends from "./ColorBends";

export const DesktopHero = () => {
  return (
    <div className="w-full flex flex-col bg-[#fffff0]">
      {/* Hero Content Full Screen Wrapper */}
      <div className="w-full relative flex flex-col items-center min-h-screen pt-[245px] pb-12 overflow-hidden">
        {/* Background ColorBends */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <ColorBends
            rotation={90}
            speed={0.7}
            colors={["#e25309"]}
            transparent
            autoRotate={0}
            scale={1}
            frequency={1}
            warpStrength={0.98}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.15}
            iterations={1}
            intensity={1.2}
            bandWidth={10.5}
          />
        </div>

        {/* Background blurred elements */}
        <div className="absolute bg-[#ff5100]/20 blur-[100px] h-[400px] left-[-100px] top-[30%] w-[400px] rounded-full pointer-events-none" />
        <div className="absolute bg-[#ff5100]/20 blur-[100px] h-[400px] right-[-100px] top-[10%] w-[400px] rounded-full pointer-events-none" />

        <div className="flex-1 flex flex-col items-center justify-center w-full z-10">
          {/* Hero Text */}
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto px-6">
            <p className="font-semibold text-[20px] lg:text-[28px] xl:text-[32px] tracking-wide mb-4 text-black uppercase">
              More than just digital
            </p>
            <h1 className="font-extrabold text-[48px] lg:text-[64px] xl:text-[76px] leading-[1.05] tracking-tight text-black flex flex-col uppercase">
              <span className="text-[#ff5100] mb-1">We turn</span>
              <span>Attention into action</span>
            </h1>
          </div>

          {/* CTA Button */}
          <div className="mt-14">
            <Link href="/contact">
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

        {/* Info Text & Ratings (Bottom Section) */}
        <div className="w-full px-8 md:px-12 mt-16 flex items-end justify-between z-10">
          {/* Left side text */}
          <div className="flex items-start gap-3 max-w-[300px]">
            <svg className="w-6 h-6 text-[#ff5100] shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <p className="text-[14px] xl:text-[18px] font-medium text-black/70 leading-[1.3]">
              Strategy, design, development, and marketing that actually drives business.
            </p>
          </div>

          {/* Right side rating */}
          <div className="flex flex-col items-end text-right">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-[#ffb800] gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] xl:text-[18px] text-black/70 font-sans">
                <span className="font-semibold text-black">5.0</span> rating
              </p>
            </div>
            <p className="text-[14px] xl:text-[18px] text-black/70 font-sans">
              Helped over <span className="font-semibold text-black">100+ businesses</span>
            </p>
          </div>
        </div>
      </div>

      {/* Logo Ticker */}
      <div className="w-full relative overflow-hidden pb-6 pt-4 z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fffff0] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fffff0] to-transparent z-20 pointer-events-none" />
        <div className="animate-logo-slide flex items-center w-max">
          {Array.from({ length: 30 }).map((_, index) => {
            const logoIndex = (index % 15) + 1;
            return (
              <div key={index} className="h-[70px] lg:h-[90px] w-[250px] mx-[20px] relative flex items-center justify-center shrink-0">
                <img 
                  src={`/clientlogo/logo-${logoIndex}.png`} 
                  alt={`Client Logo ${logoIndex}`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
