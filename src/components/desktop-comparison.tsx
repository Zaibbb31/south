"use client";

import React, { useState } from "react";

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M5 13L9 17L19 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M18 6L6 18M6 6L18 18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DesktopComparison = () => {
  const [isOn, setIsOn] = useState(true);

  const pros = [
    "Fast turnaround",
    "Strategic design",
    "Clear pricing",
    "Proactive updates",
    "Scalable solutions",
    "Dedicated partnership"
  ];

  const cons = [
    "Slow delivery",
    "Generic designs",
    "Hidden charges",
    "Poor communication",
    "Temporary fixes",
    "Basic support"
  ];

  const highlightClass = `transition-colors duration-300 ${isOn ? 'text-[#ff5100]' : 'text-gray-500'}`;

  return (
    <section className="w-full bg-[#fffff0] py-24 px-8 lg:px-[90px] flex flex-col items-start relative z-10">
      
      {/* Intro Text */}
      <div className="max-w-[1200px] mb-20">
        <h2 className="text-[32px] md:text-[38px] xl:text-[42px] leading-[1.3] text-black font-medium tracking-tight">
          We know choosing the right <span className={highlightClass}>digital partner</span> is difficult because many agencies <span className={highlightClass}>promise results</span> but few actually <span className={highlightClass}>deliver.</span>
        </h2>
        
        <div className="text-[32px] md:text-[38px] xl:text-[42px] leading-[1.3] text-black font-medium tracking-tight mt-6 flex flex-wrap items-center gap-x-3">
          <span>So we made it easy to</span>
          <span className={highlightClass}>compare</span>
          <span>what you get with us</span>
          
          {/* Custom Toggle Switch */}
          <div className="relative inline-flex items-center mx-2">
            <button 
              onClick={() => setIsOn(!isOn)}
              className={`relative w-[84px] h-[46px] rounded-full p-[3px] flex items-center shadow-inner cursor-pointer transition-colors duration-300 ${isOn ? 'bg-[#ff5100] hover:bg-[#e64a00]' : 'bg-gray-400 hover:bg-gray-500'}`}
              aria-label="Toggle comparison"
            >
              <div className={`w-[40px] h-[40px] bg-white rounded-full shadow-sm transition-transform duration-300 ${isOn ? 'translate-x-[38px]' : 'translate-x-[0px]'}`}></div>
            </button>
          </div>
          
          <span>versus what most agencies</span>
          <span className={highlightClass}>offer.</span>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[20px] shadow-sm flex overflow-hidden border border-black/5 min-h-[500px]">
        
        {/* Left Side: Other Agencies */}
        <div className={`w-1/2 p-10 lg:p-14 xl:p-16 flex flex-col transition-colors duration-300 ${!isOn ? 'bg-[#6b7282] text-white' : 'bg-transparent text-black'}`}>
          <h3 className="text-[32px] xl:text-[35px] font-medium mb-6">
            Other Agencies
          </h3>
          <div className={`w-full h-px mb-10 transition-colors duration-300 ${!isOn ? 'bg-white/20' : 'bg-black/10'}`}></div>
          
          <ul className="flex flex-col gap-6">
            {cons.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <CrossIcon />
                <span className="text-[20px] xl:text-[25px] font-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Southern Marketing */}
        <div className={`w-1/2 relative flex flex-col overflow-hidden rounded-[15px] m-1 my-1 shadow-xl transition-colors duration-300 ${isOn ? 'bg-black text-white' : 'bg-white text-black'}`}>
          {/* Subtle Orange Glow inside black card */}
          <div className={`absolute -bottom-[30%] -right-[10%] w-[80%] h-[80%] rounded-full mix-blend-screen filter blur-[120px] opacity-60 pointer-events-none transition-all duration-300 ${isOn ? 'bg-[#ff5100]' : 'opacity-0'}`}></div>
          
          <div className="relative z-10 p-9 lg:p-13 xl:p-15 flex flex-col h-full">
            <h3 className="text-[32px] xl:text-[35px] font-medium mb-6">
              Southern Marketing
            </h3>
            <div className={`w-full h-px mb-10 transition-colors duration-300 ${isOn ? 'bg-white/20' : 'bg-black/10'}`}></div>
            
            <ul className="flex flex-col gap-6">
              {pros.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <CheckIcon />
                  <span className="text-[20px] xl:text-[25px] font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
};
