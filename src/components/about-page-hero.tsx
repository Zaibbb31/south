import React from "react";
import Link from "next/link";

export function AboutPageHero() {
  return (
    <section className="w-full min-h-[90vh] pt-36 pb-20 md:pt-56 md:pb-32 lg:pt-64 lg:pb-40 px-4 flex justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>


      
      <div className="max-w-[1200px] w-full flex flex-col items-start relative z-10">
        <h1 className="text-[40px] sm:text-[55px] md:text-[75px] leading-[1.1] md:leading-[1.05] font-semibold tracking-[-0.02em] text-[#0f0f0f] w-full max-w-[1100px]">
          We shape <span className="font-[family-name:var(--font-playball)] font-normal text-[45px] sm:text-[65px] md:text-[85px] inline-block text-[#0f0f0f] align-baseline px-2">Brands</span><br className="hidden sm:block" />
          <span className="inline-block mt-2">that build lasting connections</span>
        </h1>
        
        <div className="flex items-start gap-4 mt-8 md:mt-10 max-w-[550px]">
          <div className="mt-[2px] flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#2db57d">
              <path d="M12 2.5C12 8 16 12 21.5 12C16 12 12 16 12 21.5C12 16 8 12 2.5 12C8 12 12 8 12 2.5Z" />
            </svg>
          </div>
          <p className="text-[18px] md:text-[20px] leading-[1.5] text-[#0f0f0f]">
            We craft brands and digital experiences that build trust, inspire growth, and leave a lasting impact.
          </p>
        </div>

        <div className="mt-12">
          <Link href="/contact">
            <button 
              className="relative w-[260px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
              aria-label="Let's Work Together"
            >
              {/* Inner Left Pill with right shadow */}
              <div className="absolute left-[0px] top-0 w-[200px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[8px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                <span className="font-medium text-[17px] text-white tracking-tight whitespace-nowrap">
                  Let's Work Together
                </span>
              </div>
              
              {/* Right Arrow Icon */}
              <div className="absolute right-[22px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
