import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { ProjectsGrid } from "@/components/projects-grid";
import { DesktopFaq } from "@/components/desktop-faq";
import { MobileFaq } from "@/components/mobile-faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Southern Marketing",
  description: "Explore our latest web development, branding, and design projects.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      {/* Navigation */}
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      {/* Main Content */}
      <main className="w-full">
        <ProjectsGrid />
      </main>

      {/* Footer & CTA */}
      <div style={{ zoom: 0.8 }}><Cta /></div>
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
