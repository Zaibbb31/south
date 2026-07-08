import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Southern Marketing",
  description: "Thank you for getting in touch with us.",
};

export default function ThankYou() {
  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden w-full bg-[#fffff0] min-h-screen flex flex-col">
        <MobileNav />

        <section className="w-full px-5 pt-40 pb-20 flex-1 flex flex-col items-center justify-center text-center relative z-10">
          <div className="w-20 h-20 bg-[#00ff00]/10 rounded-full flex items-center justify-center mb-8">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          
          <h1 className="text-[50px] font-semibold text-black leading-tight tracking-tight mb-6">
            THANK YOU
          </h1>
          
          <p className="text-[18px] font-normal text-black/70 leading-snug max-w-[300px] mx-auto mb-12">
            We have received your message and our team will get back to you shortly to discuss your project!
          </p>

          <Link 
            href="/" 
            className="relative inline-flex w-[222px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
            aria-label="Return to Home"
          >
            {/* Inner Left Pill with right shadow */}
            <div className="absolute left-[0px] top-0 w-[157px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
              <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
              <span className="font-medium text-[16px] text-white tracking-tight whitespace-nowrap">
                Return to Home
              </span>
            </div>
            
            {/* Right Arrow Icon */}
            <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
              <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </Link>
        </section>

        <MobileFooter />
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex w-full min-h-screen bg-[#fffff0] flex-col">
        <DesktopNav />

        <section className="w-full px-8 lg:px-[90px] pt-48 pb-32 flex-1 flex flex-col items-center justify-center text-center relative z-10 max-w-[1500px] mx-auto">
          <div className="w-24 h-24 bg-[#00ff00]/10 rounded-full flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(0,255,0,0.15)]">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1 className="text-[80px] lg:text-[104px] font-semibold text-black leading-none tracking-tight mb-8">
            THANK YOU
          </h1>
          
          <p className="text-[22px] lg:text-[26px] font-normal text-black/65 leading-snug max-w-[600px] mx-auto mb-16">
            We've successfully received your project details. A member of our strategy team will reach out to you within the next 24 hours.
          </p>

          <Link 
            href="/" 
            className="relative inline-flex w-[222px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
            aria-label="Return to Homepage"
          >
            {/* Inner Left Pill with right shadow */}
            <div className="absolute left-[0px] top-0 w-[165px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
              <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
              <span className="font-medium text-[13px] text-white tracking-tight whitespace-nowrap">
                Return to Homepage
              </span>
            </div>
            
            {/* Right Arrow Icon */}
            <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
              <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </Link>
        </section>

        <DesktopFooter />
      </div>
    </>
  );
}
