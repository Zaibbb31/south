import { MobileNav } from "@/components/mobile-nav";
import { MobileServicesPage } from "@/components/mobile-services-page";
import { MobileFaq } from "@/components/mobile-faq";
import { MobileFooter } from "@/components/mobile-footer";

import { DesktopNav } from "@/components/desktop-nav";
import { DesktopServicesPage } from "@/components/desktop-services-page";
import { DesktopFaq } from "@/components/desktop-faq";
import { DesktopFooter } from "@/components/desktop-footer";

import { Cta } from "@/components/cta";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Southern Marketing",
  description: "Explore the services we offer at Southern Marketing.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Mobile Version - Visible only on mobile screens (< 768px) */}
      <div className="block md:hidden w-full min-h-screen bg-[#fffff0]">
        <MobileNav />
        <MobileServicesPage />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}>
          <MobileFaq />
          <MobileFooter />
        </div>
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-[#fffff0]">
        <DesktopNav />
        <DesktopServicesPage />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}>
          <DesktopFaq />
          <DesktopFooter />
        </div>
      </div>
    </>
  );
}
