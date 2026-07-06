import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { DesktopFaq } from "@/components/desktop-faq";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { MobileFaq } from "@/components/mobile-faq";
import { DesktopAboutHero } from "@/components/desktop-about-hero";
import { DesktopAboutTeam } from "@/components/desktop-about-team";
import { AboutPageHero } from "@/components/about-page-hero";
import { AboutIntro } from "@/components/about-intro";
import { Cta } from "@/components/cta";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Southern Marketing",
  description: "Learn more about Southern Marketing and our team.",
};

export default function About() {
  return (
    <div className="w-full bg-[#fffff0] min-h-screen flex flex-col">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow">
        <AboutPageHero />
        <AboutIntro />
        {/* <DesktopAboutHero /> */}
        <DesktopAboutTeam />
      </main>

      <div style={{ zoom: 0.8 }}>
        <Cta />
      </div>

      <div className="hidden md:block" style={{ zoom: 0.8 }}>
        <DesktopFaq />
        <DesktopFooter />
      </div>
      <div className="md:hidden" style={{ zoom: 0.8 }}>
        <MobileFaq />
        <MobileFooter />
      </div>
    </div>
  );
}
