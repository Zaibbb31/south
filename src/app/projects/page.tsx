import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { Cta } from "@/components/cta";
import { ProjectsGrid } from "@/components/projects-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Southern Marketing",
  description: "Explore our latest web development, branding, and design projects.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full min-h-screen bg-[#fffff0]">
        <MobileNav />
        <div className="w-full pt-28 pb-4 px-6">
          <h1 className="text-[40px] font-medium leading-[1.1] text-[#30261C] mb-4">
            Selected <br /><span className="text-[#ff5100] italic">Work</span>
          </h1>
          <p className="text-[16px] text-[#30261C]/70">
            A showcase of our recent projects, highlighting our expertise in design and development.
          </p>
        </div>
        <ProjectsGrid />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}><MobileFooter /></div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block w-full min-h-screen bg-[#fffff0]">
        <DesktopNav />
        <div className="w-full pt-36 pb-8 px-[90px] flex justify-between items-end">
          <div className="max-w-[600px]">
            <h1 className="text-[64px] xl:text-[80px] font-medium leading-[1.1] text-[#30261C]">
              Selected <span className="text-[#ff5100] italic">Work</span>
            </h1>
          </div>
          <div className="max-w-[400px] pb-4">
            <p className="text-[18px] xl:text-[20px] text-[#30261C]/70 font-light">
              A showcase of our recent projects, highlighting our expertise in creating impactful digital experiences.
            </p>
          </div>
        </div>
        <ProjectsGrid />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}><DesktopFooter /></div>
      </div>
    </>
  );
}
