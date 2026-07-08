"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ name, role1, role2, image, linkedinUrl, heightClass = "h-[320px] lg:h-[350px]", imageClassName = "" }: { name: string, role1: string, role2?: string, image: string, linkedinUrl?: string, heightClass?: string, imageClassName?: string }) => (
  <div className={`bg-gradient-to-b from-white via-white to-[#ffd1b8] rounded-[20px] ${heightClass} w-full relative overflow-hidden flex flex-col justify-end group shrink-0 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.6)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.8)] hover:-translate-y-3 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] border border-black/5`}>
    <img 
      src={image} 
      alt={name} 
      className={`absolute inset-0 w-full h-full object-cover object-top grayscale transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 ${imageClassName}`} 
    />
    {/* Very soft peach/orange gradient overlay matching the uploaded shading */}
    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#ffd1b8] via-[#ffe4d6]/90 to-transparent pointer-events-none transition-opacity duration-300" />
    
    {/* LinkedIn Icon on Hover */}
    <a 
      href={linkedinUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-6 right-6 z-20 w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center opacity-0 transform translate-y-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110"
      onClick={(e) => {
        if (!linkedinUrl) e.preventDefault();
      }}
    >
      <FontAwesomeIcon icon={faLinkedinIn} className="text-[#ff5100] text-[20px]" />
    </a>

    <div className="relative z-10 p-6 lg:p-8 w-full transition-transform duration-500 group-hover:translate-y-[-4px]">
      <h4 className="text-[#0f0f0f] text-[28px] lg:text-[32px] font-medium leading-tight mb-1">{name}</h4>
      <p className="text-[#0f0f0f]/80 text-[16px] lg:text-[18px] leading-snug">{role1}</p>
      {role2 && <p className="text-[#0f0f0f]/70 text-[13px] lg:text-[14px] leading-snug">{role2}</p>}
    </div>
  </div>
);

export const DesktopAboutTeam = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-10 pt-10 pb-20 bg-[#fffff0]">
      {/* Header */}
      <div className="w-full flex flex-col items-start">
        <p className="font-medium text-[24px] lg:text-[21px] text-black uppercase tracking-tight">
          <span className="text-[#ff5100]">[</span>
          <span className="mx-3 tracking-[-0.48px]">Team</span>
          <span className="text-[#ff5100]">]</span>
        </p>
        
        <div className="w-full h-[2px] bg-black/10 mt-[28px] mb-[28px]" />

        <div className="flex flex-col gap-[30px] w-full mb-[56px]">
          <h2 className="text-[60px] lg:text-[91px] font-semibold leading-[1] text-black tracking-tight">
            MEET THE CREW
          </h2>
          <p className="text-[20px] lg:text-[21px] font-normal leading-snug text-black/65 max-w-[800px]">
            Working directly with people fuels my creativity and pushes me to achieve remarkable experiences for the end user. Partners.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <TeamCard 
            name="Ameet Nangia" 
            role1="Founder" 
            role2="Digital/Performance Marketer" 
            image="/assets/team/ameet.png"
            linkedinUrl="https://linkedin.com/"
          />
          <TeamCard 
            name="Ankita Malik" 
            role1="Website Developer" 
            image="/assets/team/ankita.png"
            linkedinUrl="https://linkedin.com/"
            imageClassName="scale-[1.3] group-hover:!scale-[1.35] origin-bottom"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Card 3: Ready to grow */}
          <div className="bg-[#ff5100] rounded-[20px] w-full flex flex-col justify-between p-6 lg:p-8 text-white shrink-0 h-auto lg:h-[240px]">
            <div>
              <h3 className="text-[28px] lg:text-[32px] font-bold leading-tight mb-2 uppercase">READY TO GROW?</h3>
              <p className="text-[15px] lg:text-[16px] font-normal leading-snug opacity-95 max-w-[95%]">
                Bring your vision to life with creative strategies, stunning design, and technology built for real business results.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="w-full h-px " />
              <Link href="/contact" className="w-fit">
                <button 
                  className="relative w-[200px] h-[58px] rounded-full bg-white/20 overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.25)] transition-shadow group cursor-pointer border border-white/20"
                  aria-label="Start Now"
                >
                  {/* Inner Left Pill with right shadow */}
                  <div className="absolute left-[0px] top-0 w-[140px] h-[58px] rounded-full bg-white drop-shadow-[2px_0px_4px_rgba(0,0,0,0.15)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                    <span className="font-semibold text-[14px] text-[#ff5100] tracking-wide whitespace-nowrap">
                      Start Now
                    </span>
                  </div>
                  
                  {/* Right Arrow Icon */}
                  <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                    <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          
          {/* Bottom Row: Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-full">
            <TeamCard 
              name="Bhavya Jain" 
              role1="Software Developer" 
              image="/assets/team/bhavya.png"
              linkedinUrl="https://linkedin.com/"
              heightClass="h-[320px] lg:h-full lg:min-h-[460px]"
            />
            <TeamCard 
              name="Zaib" 
              role1="UX/UI Designer" 
              image="/assets/team/zaib.png"
              linkedinUrl="https://linkedin.com/"
              heightClass="h-[320px] lg:h-full lg:min-h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
