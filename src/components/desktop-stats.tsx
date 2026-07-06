"use client";

import React from "react";
import { CountUp } from "@/components/count-up";

export const DesktopStats = () => {
  const stats = [
    { value: "1500+", label: "Projects Delivered" },
    { value: "95%", label: "Client Retention" },
    { value: "20+", label: "Industry Specialists" },
    { value: "8+", label: "Years Experience" },
  ];

  return (
    <section className="w-full relative z-30">
      {/* We use a slight shadow and a subtle background to separate it from the sections above and below */}
      <div className="w-full border-y border-black/5 bg-[#fffff0] shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-md">
        <div className="w-full px-6 lg:px-[90px] py-8 lg:py-12 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-8">
          
          {/* Main Title */}
          <div className="flex-shrink-0 max-w-[300px]">
            <h3 className="text-[28px] lg:text-[36px] xl:text-[40px] font-medium leading-[1.1] text-[#30261c] tracking-tight">
              Digital Success,<br /><span className="text-[#ff5100]">Delivered</span>
            </h3>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full gap-8 lg:gap-4 xl:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start gap-1 min-w-[140px] xl:min-w-[180px]">
                <p className="text-[36px] lg:text-[42px] xl:text-[46px] font-semibold text-[#30261c] leading-none">
                  {typeof stat.value === 'string' && stat.value.includes('+') ? (
                    <CountUp to={parseInt(stat.value)} suffix="+" />
                  ) : typeof stat.value === 'string' && stat.value.includes('%') ? (
                    <CountUp to={parseInt(stat.value)} suffix="%" />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-[16px] lg:text-[18px] xl:text-[22px] text-[#30261c]/70 font-light whitespace-nowrap mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
