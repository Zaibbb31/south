"use client";

import React from "react";
import Link from "next/link";

export const MobileServicesPage = () => {
  const services = [
    {
      title: "Website Revamp",
      description: "We modernize your existing site with improved functionality, faster load speeds, and fresh aesthetics.",
      timeline: "2-3 Weeks",
      deliverables: "Redesign • Optimization",
      image: "/services/website-revamp.png"
    },
    {
      title: "Branding & Creative Strategy",
      description: "Create memorable brand identities, impactful visuals, and consistent messaging that drive growth.",
      timeline: "2 – 4 Weeks",
      deliverables: "Brand Identity • Brand Guidelines",
      image: "/services/branding.png"
    },
    {
      title: "Photography & Videography",
      description: "Create high-quality visual content that captures attention, builds trust, and drives engagement.",
      timeline: "1 – 3 Weeks",
      deliverables: "High-Res Photos • Promo Videos",
      image: "/services/photography.png"
    },
    {
      title: "Performance Marketing",
      description: "We drive measurable growth and high-quality leads through targeted, data-driven ad campaigns.",
      timeline: "2-3 Weeks",
      deliverables: "Ad Campaigns • Analytics Reports",
      image: "/services/performance-marketing.png"
    },
    {
      title: "SEO",
      description: "We boost your search rankings and drive consistent organic traffic with proven strategies.",
      timeline: "3-4 Weeks",
      deliverables: "Keyword Strategy • Traffic Growth",
      image: "/services/seo.png"
    },
    {
      title: "Application Development",
      description: "We engineer robust, intuitive mobile and web applications tailored to your business goals.",
      timeline: "5-6 Weeks",
      deliverables: "iOS/Android Apps • Web Apps",
      image: "/services/app-development.png"
    },
    {
      title: "Social Media Management",
      description: "We build vibrant online communities through engaging content and strategic brand storytelling.",
      timeline: "1-2 Weeks",
      deliverables: "Content Calendar • Community Engagement",
      image: "/services/social-media.png"
    }
  ];

  return (
    <div className="w-full relative bg-[#fffff0] pt-16 pb-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-16 gap-6 w-full z-10 relative mt-4">

        
        <div className="w-[150vw] -ml-[25vw] h-px bg-black/10 relative" />
        
        <h2 className="text-[40px] leading-[1.1] font-semibold text-black text-center w-full px-4 mt-10">
          SERVICES & EXPERTISE
        </h2>
      </div>

      <div className="px-5 relative z-10">
        {/* Services List */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-full relative pt-2">
              
              {/* Title */}
              <h3 className="text-[28px] font-medium text-[#0f0f0f] mb-4">
                {service.title}
              </h3>

              {/* Image */}
              <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-[#e4e4e4] mb-6 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Line under image */}
              <div className="w-full h-[2px] bg-black/5 mb-6" />

              {/* Details */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between items-start w-full">
                  <span className="text-[18px] text-[#0f0f0f]">Timeline</span>
                  <span className="text-[18px] text-[#828282] font-medium text-right">{service.timeline}</span>
                </div>

                <div className="flex justify-between items-start w-full">
                  <span className="text-[18px] text-[#0f0f0f]">Deliverables</span>
                  <span className="text-[18px] text-[#828282] font-medium text-right max-w-[60%]">
                    {service.deliverables}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[18px] leading-[1.4] text-[#828282] mb-8 text-justify hyphens-auto tracking-tight break-words" lang="en">
                {service.description}
              </p>

              {/* Action row */}
              <div className="flex flex-row justify-between items-center w-full mb-8">
                <Link href="/contact" className="w-full mr-4">
                  <button className="w-full bg-[#ff5100] text-white px-6 py-3.5 rounded-full font-semibold text-[16px] shadow-[inset_0px_-3px_13.8px_0px_rgba(232,232,232,0.76),inset_0px_4px_13.8px_0px_rgba(232,232,232,0.76)] flex items-center justify-center gap-[6px] hover:opacity-90 transition-opacity whitespace-nowrap">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                    <span>Start Now</span>
                  </button>
                </Link>
                <span className="text-[16px] text-black/55 font-normal whitespace-nowrap ml-4">
                  T&C Apply
                </span>
              </div>

              {/* Bottom Line */}
              <div className="w-full h-[2px] bg-black/5 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
