import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFaq } from "@/components/desktop-faq";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { countryCodes } from "@/lib/countryCodes";
import { ContactUsWidget } from "@/components/contact-forms";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Southern Marketing",
  description: "Get in touch with Southern Marketing for your next project.",
};

const ArrowUpRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 17V7H7" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"></path></svg>
);

export default function Contact() {
  return (
    <div style={{ zoom: 0.8 }}>
      {/* Mobile Version */}
      <div className="md:hidden w-full bg-[#fffff0]">
        <MobileNav />

        {/* Mobile Contact Hero */}
        <section className="w-full px-5 pt-28 pb-8 flex flex-col items-start relative z-10">
          <div className="flex flex-col items-start mb-8 w-full">
            <p className="font-medium text-[20px] mb-4 tracking-wide">
              <span className="text-[#ff5100]">[</span>
              <span className="text-black mx-2 uppercase tracking-[-0.6px]">Let's Connect</span>
              <span className="text-[#ff5100]">]</span>
            </p>
            
            <div className="w-full h-px bg-black/10 mb-4" />
            
            <h1 className="text-[50px] font-semibold text-black leading-[50px] tracking-tight">
              CONTACT US
            </h1>
          </div>

          <div className="w-full mb-8">
            <ContactUsWidget />
          </div>

          {/* Description and Tagline */}
          <div className="w-full flex flex-col gap-4 mt-4 pr-4">
            <p className="text-[26px] font-medium text-black leading-tight tracking-tight">
              Big ideas deserve better than average.
            </p>
            <p className="text-[18px] font-normal text-black/65 leading-snug">
              Need a website that converts? A brand that stands out? Marketing that actually gets noticed?
            </p>
          </div>
        </section>

        {/* Trusted By Section */}
        {/*
        <section className="w-full mt-8 mb-20 flex flex-col items-center overflow-hidden">
          <p className="text-[28px] font-medium text-black mb-8 tracking-tight">
            Trusted by many
          </p>
          <div className="w-full flex items-center justify-between relative overflow-hidden h-[100px]">
            <span className="text-[#ff5100] text-[75px] font-medium absolute left-0 z-30 leading-none -top-2 bg-[#fffff0] pr-2 pointer-events-none">[</span>
            
            <div className="w-full relative overflow-hidden h-full z-10 pl-[30px] pr-[30px]">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#fffff0] to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#fffff0] to-transparent z-20 pointer-events-none" />
              
              <div className="animate-logo-slide flex items-center w-max h-full">
                {Array.from({ length: 30 }).map((_, index) => {
                  const logoIndex = (index % 15) + 1;
                  return (
                    <div key={index} className="h-[56px] w-[196px] mx-[10px] relative flex items-center justify-center shrink-0 transition-all duration-300">
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

            <span className="text-[#ff5100] text-[75px] font-medium absolute right-0 z-30 leading-none -top-2 bg-[#fffff0] pl-2 pointer-events-none">]</span>
          </div>
        </section>
        */}

        <MobileFooter />
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block w-full min-h-screen bg-[#fffff0]">
        <DesktopNav />

        {/* Contact Us Hero Section */}
        <section className="w-full px-8 lg:px-[90px] pt-32 pb-10 flex flex-col items-start relative z-10 max-w-8xl mx-auto min-h-[calc(100vh-100px)]">
          <div className="flex flex-col items-start mb-12 w-full">
            <p className="font-medium text-[24px] mb-6 tracking-wide">
              <span className="text-[#ff5100]">[</span>
              <span className="text-black mx-2 uppercase">Let's Connect</span>
              <span className="text-[#ff5100]">]</span>
            </p>
            
            {/* Subtle divider line */}
            <div className="w-full h-px bg-black/10 mb-6" />
            
            <h1 className="text-[80px] lg:text-[90px] font-semibold text-black leading-none tracking-tight">
              CONTACT US
            </h1>
          </div>

          <div className="w-full mb-16">
            <ContactUsWidget />
          </div>
        </section>

        {/* Trusted By Section */}
        {/*
        <section className="w-full px-8 lg:px-[90px] mb-32 flex flex-col items-start max-w-[1500px] mx-auto">
          <p className="text-[28px] lg:text-[32px] font-medium text-black mb-10 tracking-tight">
            Trusted by many
          </p>
          <div className="w-full flex items-center justify-between relative overflow-hidden h-[100px] lg:h-[120px]">
            <span className="text-[#ff5100] text-[80px] lg:text-[96px] font-medium absolute left-0 z-30 leading-none -top-4 bg-[#fffff0] pr-4 pointer-events-none">[</span>
            
            <div className="w-full relative overflow-hidden h-full z-10 pl-[50px] pr-[50px]">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fffff0] to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fffff0] to-transparent z-20 pointer-events-none" />
              
              <div className="animate-logo-slide flex items-center w-max h-full">
                {Array.from({ length: 30 }).map((_, index) => {
                  const logoIndex = (index % 15) + 1;
                  return (
                    <div key={index} className="h-[60px] lg:h-[80px] w-[200px] mx-[10px] relative flex items-center justify-center shrink-0 transition-all duration-300">
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

            <span className="text-[#ff5100] text-[80px] lg:text-[96px] font-medium absolute right-0 z-30 leading-none -top-4 bg-[#fffff0] pl-4 pointer-events-none">]</span>
          </div>
        </section>
        */}

        <DesktopFaq />
        <DesktopFooter />
      </div>
    </div>
  );
}
