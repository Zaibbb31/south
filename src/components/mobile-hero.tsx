"use client";

import Link from "next/link";
import ColorBends from "./ColorBends";

export function MobileHero() {
  return (
    <div className="w-full flex flex-col items-center pt-[100px] pb-6 relative overflow-hidden">
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

      {/* Background blurred elements (as seen in the design code) */}
      <div className="absolute bg-[#ff5100]/20 blur-[60px] h-[200px] left-0 top-[60%] w-[100px] rounded-full pointer-events-none" />
      <div className="absolute bg-[#ff5100]/20 blur-[60px] h-[200px] right-0 top-[20%] w-[100px] rounded-full pointer-events-none" />

      {/* Hero Text */}
      <div className="flex flex-col items-center text-center px-4 mt-6 w-full max-w-sm mx-auto z-10 text-black">
        <p className="font-semibold text-base tracking-wide mb-3 text-black">MORE THAN JUST DIGITAL</p>
        <h1 className="font-extrabold text-[32px] leading-[1.1] tracking-tight text-black">
          <span className="text-[#ff5100] block mb-1">WE TURN</span>
          <span className="block">ATTENTION</span>
          <span className="block">INTO ACTION</span>
        </h1>
      </div>

      {/* CTA Button */}
      <div className="mt-6 z-10">
        <Link href="/contact" className="w-full relative z-20">
          <button 
            className="w-full relative h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] group cursor-pointer"
            aria-label="Start Growing"
          >
            {/* Inner Left Pill */}
            <div className="absolute left-[0px] top-0 w-[calc(100%-60px)] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] z-10">
              <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
              <span className="font-medium text-[18px] text-white tracking-tight whitespace-nowrap">
                Start Growing
              </span>
            </div>
            
            {/* Right Arrow Icon */}
            <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center z-0">
              <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </button>
        </Link>
      </div>

      {/* Info Text & Ratings (Bottom Section) */}
      <div className="w-full px-6 mt-8 flex flex-col gap-5 z-10">
        {/* Left side text */}
        <div className="flex items-start gap-2 max-w-[220px]">
          <svg className="w-6 h-6 text-[#ff5100] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <p className="text-[15px] font-medium text-black leading-snug">
            Strategy, design, development, and marketing that actually drives business.
          </p>
        </div>

        {/* Right side rating */}
        <div className="flex flex-col items-end text-right self-end mt-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex text-[#ffb800] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[15px] text-black">
              <span className="font-semibold">5.0</span> <span>rating</span>
            </p>
          </div>
          <p className="text-[15px] text-black">
            Helped over <span className="font-semibold">100+ businesses</span>
          </p>
        </div>
      </div>

      {/* Logo Ticker */}
      <div className="w-full relative overflow-hidden mt-8 pb-4 z-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fffff0] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fffff0] to-transparent z-20 pointer-events-none" />
        <div className="animate-logo-slide flex items-center w-max">
          {Array.from({ length: 30 }).map((_, index) => {
            const logoIndex = (index % 15) + 1;
            return (
              <div key={index} className="h-16 w-32 mx-[12px] relative flex items-center justify-center shrink-0">
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
}
