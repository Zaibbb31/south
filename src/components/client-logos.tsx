"use client";

import React from "react";

export const DesktopClientLogos = () => {
  return (
    <div className="w-full relative overflow-hidden py-28 z-10">
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
  );
};

export const MobileClientLogos = () => {
  return (
    <div className="w-full relative overflow-hidden py-16 z-10">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fffff0] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fffff0] to-transparent z-20 pointer-events-none" />
      <div className="animate-logo-slide flex items-center w-max">
        {Array.from({ length: 30 }).map((_, index) => {
          const logoIndex = (index % 15) + 1;
          return (
            <div key={index} className="h-20 w-32 mx-[12px] relative flex items-center justify-center shrink-0 gap-4">
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
  );
};
