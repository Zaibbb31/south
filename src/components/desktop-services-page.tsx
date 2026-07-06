"use client";

import React from "react";
import Link from "next/link";

export const DesktopServicesPage = () => {
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
    <section className="w-full bg-[#fffff0] pb-20 pt-0 px-8 lg:px-[90px] flex flex-col relative z-10 overflow-hidden">
      
      {/* Top Section: Title */}
      <div className="flex flex-col w-full mb-16 lg:mb-24 items-center relative pt-16 gap-8 md:gap-10">

        
        <div className="w-full h-px bg-black/10 relative" />
        
        <h2 className="text-[50px] md:text-[80px] lg:text-[130px] font-semibold text-black text-center w-full leading-[1.1] lg:leading-[130px] tracking-tight px-4 mt-12 lg:mt-16">
          SERVICES & EXPERTISE
        </h2>
      </div>

      {/* Bottom Section: Services List */}
      <div className="w-full flex flex-col relative z-10 gap-16 lg:gap-24">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col relative w-full pt-10">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-black/10" />

            <div className="flex flex-col xl:flex-row items-start w-full gap-8 xl:gap-12 py-8">
              {/* Left Column: Title */}
              <div className="w-full xl:w-[20%] shrink-0">
                <h3 className="text-[20px] xl:text-[24px] font-normal text-[#0f0f0f]">
                  {service.title}
                </h3>
              </div>

              {/* Middle Column: Image */}
              <div className="w-full xl:flex-1 h-[420px] rounded-[15px] overflow-hidden bg-[#e4e4e4] shrink-0 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Details */}
              <div className="w-full xl:w-[30%] flex flex-col pt-4">
                <p className="text-[16px] xl:text-[18px] leading-[1.5] text-[#828282] mb-12 text-left">
                  {service.description}
                </p>

                <div className="w-full h-px bg-black/10 mb-8" />

                <div className="flex justify-between items-center w-full mb-6">
                  <span className="text-[14px] xl:text-[16px] text-[#0f0f0f] font-medium">Timeline</span>
                  <div className="text-right">
                    <span className="text-[14px] xl:text-[16px] text-[#828282] font-normal">{service.timeline} </span>
                    <span className="text-[12px] xl:text-[13px] text-[#828282] font-normal">(Approximately)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full mb-12">
                  <span className="text-[14px] xl:text-[16px] text-[#0f0f0f] font-medium">Deliverables</span>
                  <span className="text-[14px] xl:text-[16px] text-[#828282] font-normal text-right">
                    {service.deliverables}
                  </span>
                </div>

                <div className="flex justify-between items-center w-full mt-auto">
                  <Link href="/contact">
                    <button className="bg-[#ff5100] text-white px-6 py-2.5 rounded-full font-medium text-[14px] xl:text-[16px] shadow-[inset_0px_-3px_13.8px_0px_rgba(232,232,232,0.76),inset_0px_4px_13.8px_0px_rgba(232,232,232,0.76)] flex items-center justify-center gap-[6px] hover:opacity-90 transition-opacity whitespace-nowrap">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                      <span>Start Now</span>
                    </button>
                  </Link>
                  <span className="text-[13px] xl:text-[14px] text-black/55 font-normal ml-6 whitespace-nowrap">
                    T&C Apply
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
