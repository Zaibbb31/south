import { MobileNav } from "@/components/mobile-nav";
import { MobileHero } from "@/components/mobile-hero";
import { MobileIntegrations } from "@/components/mobile-integrations";
import { MobileClientLogos, DesktopClientLogos } from "@/components/client-logos";

import { MobileStats } from "@/components/mobile-stats";
import { MobileComparison } from "@/components/mobile-comparison";
import { MobileCaseStudies } from "@/components/mobile-case-studies";
import { MobileServices } from "@/components/mobile-services";
import { MobileFaq } from "@/components/mobile-faq";
import { MobileFooter } from "@/components/mobile-footer";

import { DesktopNav } from "@/components/desktop-nav";
import { DesktopHero } from "@/components/desktop-hero";
import { DesktopIntegrations } from "@/components/desktop-integrations";
import { DesktopStats } from "@/components/desktop-stats";
import { DesktopComparison } from "@/components/desktop-comparison";
import { DesktopCaseStudies } from "@/components/desktop-case-studies";
import { DesktopServices } from "@/components/desktop-services";
import { DesktopFaq } from "@/components/desktop-faq";
import { DesktopMarquee } from "@/components/desktop-marquee";
import { DesktopFooter } from "@/components/desktop-footer";

import { Cta } from "@/components/cta";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Southern Marketing",
  description: "Welcome to Southern Marketing.",
};

export default function Home() {
  return (
    <>
      {/* Mobile Version - Visible only on mobile screens (< 768px) */}
      <div className="block md:hidden w-full min-h-screen bg-[#fffff0]">
        <MobileNav />
        <MobileHero />
        <div style={{ zoom: 0.8 }}>
          <MobileIntegrations />
          <MobileClientLogos />
          <MobileStats />
          <MobileComparison />
          <MobileCaseStudies />
          <MobileServices />
          <Cta />
          <MobileFaq />
          <MobileFooter />
        </div>
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-[#fffff0]">
        <DesktopNav />
        <DesktopHero />
        <div style={{ zoom: 0.8 }}>
          <DesktopIntegrations />
          <DesktopClientLogos />
          <DesktopStats />
          <DesktopComparison />
          <DesktopCaseStudies />
          <DesktopServices />
          <Cta />
          <DesktopFaq />
          <DesktopMarquee />
          <DesktopFooter />
        </div>
      </div>
    </>
  );
}
