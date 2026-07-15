"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { CountUp } from "@/components/count-up";

export const DesktopServicesPage = () => {
  return (
    <section className="w-full bg-[#fffff0] pb-10 pt-0 px-8 lg:px-[90px] flex flex-col relative z-10 overflow-hidden">
      
      {/* Top Section: Title & Breadcrumbs */}
      <div className="flex flex-col w-full mb-16 lg:mb-20 items-start relative pt-32 lg:pt-36 gap-6 md:gap-8 max-w-[1280px] mx-auto">
        {/* Breadcrumbs */}
       

        {/* Main Heading */}
        <h1 className="text-[56px] md:text-[80px] lg:text-[85px] font-medium text-black leading-[1.05] tracking-tight">
          Six capabilities.<br />
          <span className="text-[#ff5100]">One system.</span>
        </h1>

        {/* Sub-heading & CTA Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 mt-2">
          <p className="text-black/70 text-[16px] md:text-[18px] lg:text-[18px] leading-relaxed max-w-[620px] text-justify md:text-left">
            We don't offer isolated services. Every capability we practice is engineered to compound with the others, creating a growth system that gets smarter and more profitable with every passing month.
          </p>
          <Link href="/contact" className="shrink-0 mt-4 md:mt-0">
            <button 
              className="relative w-[280px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
              aria-label="Book a strategy call"
            >
              {/* Inner Left Pill with right shadow */}
              <div className="absolute left-[0px] top-0 w-[215px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
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

        {/* Horizontal Divider */}

        {/* Stats Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 pt-8">
          <div className="flex flex-col items-start gap-1">
            <p className="text-[44px] md:text-[50px] lg:text-[64px] font-semibold text-black leading-none tracking-tight">
              <CountUp to={250} suffix="+" />
            </p>
            <p className="text-[12px] md:text-[13px] lg:text-[14px] text-black/50 font-bold uppercase tracking-wider">
              Brands Grown
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[44px] md:text-[50px] lg:text-[64px] font-semibold text-black leading-none tracking-tight">
              <CountUp to={3} suffix="x" />
            </p>
            <p className="text-[12px] md:text-[13px] lg:text-[14px] text-black/50 font-bold uppercase tracking-wider">
              Average Revenue Uplift
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[44px] md:text-[50px] lg:text-[64px] font-semibold text-black leading-none tracking-tight">
              <CountUp to={10} suffix="+" />
            </p>
            <p className="text-[12px] md:text-[13px] lg:text-[14px] text-black/50 font-bold uppercase tracking-wider">
              Years Building Growth Systems
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-[44px] md:text-[50px] lg:text-[64px] font-semibold text-black leading-none tracking-tight">
              <CountUp to={97} suffix="%" />
            </p>
            <p className="text-[12px] md:text-[13px] lg:text-[14px] text-black/50 font-bold uppercase tracking-wider">
              Client Retention Rate
            </p>
          </div>
        </div>
      </div>

      {/* Services Cards List */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10 pb-20">
        {services.map((service, index) => (
          <Link
            href={`/services/${service.slug}`}
            key={index} 
            className="group block w-full bg-orange-500/5 rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-14 flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-12 relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:scale-[1.005] border border-black/5 cursor-pointer"
          >
            {/* 1. Left Column: Index indicator */}
            <div className="flex flex-col items-start gap-1.5 shrink-0 pt-2">
              <span className="text-[20px] md:text-[24px] font-medium text-[#ff5100] leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              
            </div>

            {/* 2. Center Column: Main Content */}
            <div className="flex-1 flex flex-col justify-between items-start">
              <div>
                {/* Title and Tagline */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4 md:mb-5">
                  <h3 className="text-black text-[28px] md:text-[34px] font-medium tracking-tight leading-none">
                    {service.title}
                  </h3>
                  {service.tagline && (
                    <span className="text-[#ff5100] italic text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-none">
                      {service.tagline}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-black/70 text-[16px] md:text-[18px] leading-relaxed mb-6 max-w-[700px]">
                  {service.description1}
                </p>

                {/* Callout */}
                {service.callout && (
                  <div className="flex items-stretch border-l-[3px] border-[#ff5100]/40 pl-4 mb-8 max-w-[700px]">
                    <p className="text-[#ff5100]/70 text-[14px] md:text-[16px] italic leading-relaxed">
                      {service.callout}
                    </p>
                  </div>
                )}
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-4 py-2 border border-orange-500 rounded-full text-black/50 text-[13px] md:text-[14px] font-medium cursor-default  transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Right Column: Stat and Arrow button */}
            <div className="w-full md:w-[240px] flex flex-col justify-between items-end shrink-0 pt-2 pb-1 text-right">
              {/* Stat Indicator */}
              {service.statValue && (
                <div className="flex flex-col items-end">
                  <span className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-black leading-none tracking-tight">
                    <CountUp to={service.statValue} />
                  </span>
                  <span className="text-[10px] md:text-[11px] text-black/45 font-bold uppercase tracking-wider mt-2 max-w-[200px]">
                    {service.statLabel}
                  </span>
                </div>
              )}
              
              {/* Arrow Button */}
              <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] text-white flex items-center justify-center shadow-[0px_4px_12px_rgba(255,81,0,0.25)] transition-all duration-300 group-hover:scale-105 shrink-0 mt-8">
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
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

    </section>
  );
};


