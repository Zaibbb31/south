"use client";

import React from "react";

const StarIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M15 0L17.5 10L27.5 12.5L17.5 15L15 25L12.5 15L2.5 12.5L12.5 10L15 0Z" fill="white"/>
  </svg>
);

export const DesktopMarquee = () => {
  const blackStripItems = [
    "Trusted by Global Startups",
    "Conversion-First Approach",
    "Built for Scale",
    "Fast Turnaround",
    "Results That Matter",
  ];

  const orangeStripItems = [
    "Web Development",
    "UI/UX Design",
    "Conversion-Focused Design",
    "Digital Marketing",
    "Branding",
    "High-Performance Websites",
  ];

  // We multiply the items to ensure the strip is wide enough to scroll without gaps
  const multipliedBlackItems = [...blackStripItems, ...blackStripItems, ...blackStripItems, ...blackStripItems];
  const multipliedOrangeItems = [...orangeStripItems, ...orangeStripItems, ...orangeStripItems, ...orangeStripItems];

  return (
    <section className="w-full bg-[#fffff0] h-[500px] relative flex items-center justify-center overflow-hidden z-10 mt-[44px] mb-20">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Background Dark Strip (-6.5deg) */}
      <div 
        className="absolute w-[120%] bg-[#2a2a2a] shadow-[0px_10px_20px_rgba(0,0,0,0.3)] py-5 z-0 flex whitespace-nowrap"
        style={{ transform: "rotate(-6.5deg)" }}
      >
        <div 
          className="flex items-center gap-[40px] w-max px-4" 
          style={{ animation: 'marquee 40s linear infinite' }}
        >
          {multipliedBlackItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-white text-[32px] lg:text-[38px] font-bold tracking-wide">
                {item}
              </span>
              <StarIcon />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Foreground Orange Strip (4.6deg) */}
      <div 
        className="absolute w-[120%] bg-[#ff5100] shadow-[0px_10px_30px_rgba(0,0,0,0.4)] py-5 z-10 flex whitespace-nowrap"
        style={{ transform: "rotate(4.6deg)" }}
      >
        <div 
          className="flex items-center gap-[40px] w-max px-4" 
          style={{ animation: 'marquee-reverse 50s linear infinite' }}
        >
          {multipliedOrangeItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-white text-[32px] lg:text-[38px] font-bold tracking-wide">
                {item}
              </span>
              <StarIcon />
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};
