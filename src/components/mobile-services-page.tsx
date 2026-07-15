"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { CountUp } from "@/components/count-up";

export const MobileServicesPage = () => {
  return (
    <div className="w-full relative bg-[#fffff0] pt-24 pb-8 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col w-full px-6 items-start gap-6 z-10 relative mb-12">
        {/* Breadcrumbs */}
        

        {/* Main Heading */}
        <h1 className="text-[38px] leading-[1.1] font-bold text-black tracking-tight mt-2">
          Six capabilities.<br />
          <span className="text-[#ff5100]">One system.</span>
        </h1>

        {/* Paragraph & CTA Button */}
        <div className="flex flex-col items-start w-full gap-6">
          <p className="text-black/70 text-[14px] leading-relaxed text-justify">
            We don't offer isolated services. Every capability we practice is engineered to compound with the others, creating a growth system that gets smarter and more profitable with every passing month.
          </p>
          <Link href="/contact" className="w-full">
            <button 
              className="w-full relative h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] group cursor-pointer"
              aria-label="Book a strategy call"
            >
              {/* Inner Left Pill with right shadow */}
              <div className="absolute left-[0px] top-0 w-[calc(100%-60px)] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                <span className="font-medium text-[16px] md:text-[18px] text-white tracking-tight whitespace-nowrap">
                  Book a strategy call
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

        {/* Stats Grid */}
        <div className="w-full grid grid-cols-2 gap-y-6 gap-x-4 pt-4">
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-[32px] font-bold text-black leading-none tracking-tight">
              <CountUp to={250} suffix="+" />
            </p>
            <p className="text-[11px] text-black/50 font-bold uppercase tracking-wider leading-tight">
              Brands Grown
            </p>
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-[32px] font-bold text-black leading-none tracking-tight">
              <CountUp to={3} suffix="x" />
            </p>
            <p className="text-[11px] text-black/50 font-bold uppercase tracking-wider leading-tight">
              Average Revenue Uplift
            </p>
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-[32px] font-bold text-black leading-none tracking-tight">
              <CountUp to={10} suffix="+" />
            </p>
            <p className="text-[11px] text-black/50 font-bold uppercase tracking-wider leading-tight">
              Years Building Growth Systems
            </p>
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-[32px] font-bold text-black leading-none tracking-tight">
              <CountUp to={97} suffix="%" />
            </p>
            <p className="text-[11px] text-black/50 font-bold uppercase tracking-wider leading-tight">
              Client Retention Rate
            </p>
          </div>
        </div>
      </div>

      {/* Services Cards List */}
      <div className="w-full px-6 flex flex-col gap-6 pb-16">
        {services.map((service, index) => (
          <Link
            href={`/services/${service.slug}`}
            key={index} 
            className="group block w-full bg-orange-500/5 rounded-[24px] p-6 flex flex-col gap-5 relative overflow-hidden border border-black/5 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.015)]"
          >
            {/* Top Row: Index/Dot on left, Stat on right */}
            <div className="flex justify-between items-start w-full">
              {/* Index */}
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-medium text-[#ff5100]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
              </div>
              
              {/* Stat */}
              {service.statValue && (
                <div className="flex flex-col items-end text-right">
                  <span className="text-[32px] font-bold text-black leading-none tracking-tight">
                    <CountUp to={service.statValue} />
                  </span>
                  <span className="text-[9px] text-black/45 font-bold uppercase tracking-wider mt-1">
                    {service.statLabel}
                  </span>
                </div>
              )}
            </div>

            {/* Title & Tagline & Description */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <h3 className="text-black text-[22px] font-medium tracking-tight">
                  {service.title}
                </h3>
                {service.tagline && (
                  <span className="text-[#ff5100] italic text-[14px] font-normal">
                    {service.tagline}
                  </span>
                )}
              </div>
              
              <p className="text-black/70 text-[14px] leading-relaxed text-justify">
                {service.description1}
              </p>

              {/* Callout */}
              {service.callout && (
                <div className="flex items-stretch border-l-[3px] border-[#ff5100]/40 pl-3 mt-1">
                  <p className="text-[#ff5100]/70 text-[13px] italic leading-relaxed text-justify">
                    {service.callout}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Row: Pills & Arrow Button */}
            <div className="flex justify-between items-end w-full gap-4 mt-2">
              {/* Pills */}
              <div className="flex flex-wrap gap-1.5 flex-1">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1.5 border border-orange-500 rounded-full text-black/50 text-[12px] font-medium cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Arrow */}
              <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] text-white flex items-center justify-center shadow-[0px_3px_8px_rgba(255,81,0,0.2)] transition-all duration-300 group-hover:scale-105 shrink-0">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2.5} 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


