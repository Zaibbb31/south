"use client";

import React, { useState } from "react";

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M1.5 1.5L16.5 16.5M1.5 16.5L16.5 1.5" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M1.5 8L8 14.5L20.5 1.5" stroke="#00D200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300"/>
  </svg>
);

export const MobileComparison = () => {
  const [isOn, setIsOn] = useState(true);

  const highlightClass = `font-medium transition-colors duration-300 ${isOn ? 'text-[#ff5100]' : 'text-gray-500'}`;

  return (
    <div className="w-full px-5 py-12 relative bg-[#fffff0]">
      {/* Intro Text Block 1 */}
      <p className="text-[26px] leading-[34px] font-sans font-normal text-black mb-6">
        We know choosing the right{" "}
        <span className={highlightClass}>digital partner</span>{" "}
        is difficult because many agencies{" "}
        <span className={highlightClass}>promise results</span>{" "}
        but few actually{" "}
        <span className={highlightClass}>deliver.</span>
      </p>

      {/* Intro Text Block 2 */}
      <p className="text-[26px] leading-[34px] font-sans font-normal text-black mb-12">
        So we made it easy to{" "}
        <span className={highlightClass}>compare</span>{" "}
        what you get with us{" "}
        <span className="inline-flex items-center mx-1 align-middle translate-y-[-2px]">
          <button 
            onClick={() => setIsOn(!isOn)}
            className={`relative w-[76px] h-[38px] rounded-full overflow-hidden block transition-colors duration-300 ${isOn ? 'bg-[#ff5100]' : 'bg-gray-400'}`}
            aria-label="Toggle comparison"
          >
            <span className={`absolute top-[4px] left-0 w-[30px] h-[30px] bg-white rounded-full block shadow-sm transition-transform duration-300 ${isOn ? 'translate-x-[42px]' : 'translate-x-[4px]'}`}></span>
          </button>
        </span>{" "}
        versus what most agencies{" "}
        <span className={highlightClass}>offer.</span>
      </p>

      {/* Comparison Cards Wrapper */}
      <div className="rounded-[20px] overflow-hidden flex flex-col shadow-sm border border-gray-100/50">
        
        {/* Other Agencies Card */}
        <div className={`p-6 pt-7 pb-10 transition-colors duration-300 ${!isOn ? 'bg-[#6b7282] text-white' : 'bg-white text-black'}`}>
          <h3 className="text-[28px] font-medium mb-4">Other Agencies</h3>
          <div className={`w-full h-[1px] mb-6 transition-colors duration-300 ${!isOn ? 'bg-white/30' : 'bg-gray-300'}`}></div>
          
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <XIcon />
              <span className="text-[18px] font-sans">Slow delivery</span>
            </li>
            <li className="flex items-center gap-4">
              <XIcon />
              <span className="text-[18px] font-sans">Generic designs</span>
            </li>
            <li className="flex items-center gap-4">
              <XIcon />
              <span className="text-[18px] font-sans">Hidden charges</span>
            </li>
            <li className="flex items-center gap-4">
              <XIcon />
              <span className="text-[18px] font-sans">Poor communication</span>
            </li>
            <li className="flex items-center gap-4">
              <XIcon />
              <span className="text-[18px] font-sans">Temporary fixes</span>
            </li>
            <li className="flex items-center gap-4">
              <XIcon />
              <span className="text-[18px] font-sans">Basic support</span>
            </li>
          </ul>
        </div>

        {/* Southern Marketing Card */}
        <div className={`relative p-6 pt-8 pb-10 rounded-t-[20px] -mt-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] transition-colors duration-300 ${isOn ? 'bg-[#0F0F0F] text-white' : 'bg-white text-black'}`}>
          {/* Glow effect at bottom */}
          <div className={`absolute -bottom-24 -right-24 w-[350px] h-[350px] blur-[80px] rounded-full pointer-events-none transition-all duration-300 ${isOn ? 'bg-[#ff5100] opacity-[0.35]' : 'opacity-0'}`}></div>
          
          <div className="relative z-10">
            <h3 className="text-[28px] font-medium mb-4">Southern Marketing</h3>
            <div className={`w-full h-[1px] mb-6 transition-colors duration-300 ${isOn ? 'bg-white/30' : 'bg-gray-300'}`}></div>
            
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-[18px] font-sans">Fast turnaround</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-[18px] font-sans">Strategic design</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-[18px] font-sans">Clear pricing</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-[18px] font-sans">Proactive updates</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-[18px] font-sans">Scalable solutions</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-[18px] font-sans">Dedicated partnership</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};
