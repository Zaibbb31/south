"use client";

import React from "react";
import { CountUp } from "@/components/count-up";

export function MobileStats() {
  return (
    <section className="w-full px-4 pb-16 bg-[#fffff0] flex justify-center">
      <div className="w-full max-w-[440px] rounded-3xl backdrop-blur-[2px] bg-white/20 shadow-[3px_4px_30px_rgba(0,0,0,0.05)] border border-white/30 p-6 flex flex-col relative z-10">
        
        {/* Heading Row */}
        <div className="flex justify-center mb-8 text-center">
          <h2 className="text-[26px] leading-[1.2] font-semibold text-[#30261C] font-sans tracking-tight">
            Digital Success,<br/>
            <span className="text-[#ff5100]">Delivered</span>
          </h2>
        </div>

        {/* Counters Row */}
        <div className="flex flex-row justify-between items-start gap-1">
          <div className="flex flex-col items-center text-center w-1/4 px-1">
            <span className="text-[18px] sm:text-[20px] font-semibold text-[#30261C] font-sans"><CountUp to={1500} suffix="+" /></span>
            <span className="text-[10px] sm:text-[12px] leading-tight text-[#30261C]/75 font-sans mt-1">Projects Delivered</span>
          </div>
          
          <div className="flex flex-col items-center text-center w-1/4 px-1">
            <span className="text-[18px] sm:text-[20px] font-semibold text-[#30261C] font-sans"><CountUp to={95} suffix="%" /></span>
            <span className="text-[10px] sm:text-[12px] leading-tight text-[#30261C]/75 font-sans mt-1">Client Retention</span>
          </div>
          
          <div className="flex flex-col items-center text-center w-1/4 px-1">
            <span className="text-[18px] sm:text-[20px] font-semibold text-[#30261C] font-sans"><CountUp to={20} suffix="+" /></span>
            <span className="text-[10px] sm:text-[12px] leading-tight text-[#30261C]/75 font-sans mt-1">Industry Specialists</span>
          </div>
          
          <div className="flex flex-col items-center text-center w-1/4 px-1">
            <span className="text-[18px] sm:text-[20px] font-semibold text-[#30261C] font-sans"><CountUp to={8} suffix="+" /></span>
            <span className="text-[10px] sm:text-[12px] leading-tight text-[#30261C]/75 font-sans mt-1">Years Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
}
