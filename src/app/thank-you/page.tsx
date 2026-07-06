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

          <Link href="/" className="bg-black text-white rounded-full px-8 py-4 text-[16px] font-medium tracking-wide hover:scale-105 transition-transform">
            Return to Home
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

          <Link href="/" className="bg-black text-white rounded-full px-10 py-5 text-[18px] lg:text-[20px] font-medium tracking-wide hover:bg-[#ff5100] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
            Return to Homepage
          </Link>
        </section>

        <DesktopFooter />
      </div>
    </>
  );
}
