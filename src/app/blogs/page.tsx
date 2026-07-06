import { MobileNav } from "@/components/mobile-nav";
import { MobileBlogs } from "@/components/mobile-blogs";
import { MobileFooter } from "@/components/mobile-footer";

import { DesktopNav } from "@/components/desktop-nav";
import { DesktopBlogs } from "@/components/desktop-blogs";
import { DesktopFooter } from "@/components/desktop-footer";

import { Cta } from "@/components/cta";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Southern Marketing",
  description: "Read our latest articles and insights at Southern Marketing.",
};

export default function BlogsPage() {
  return (
    <>
      {/* Mobile Version - Visible only on mobile screens (< 768px) */}
      <div className="block md:hidden w-full min-h-screen bg-[#fffff0]">
        <MobileNav />
        <MobileBlogs />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}><MobileFooter /></div>
      </div>

      {/* Desktop Version - Visible only on desktop screens (>= 768px) */}
      <div className="hidden md:block w-full min-h-screen bg-[#fffff0]">
        <DesktopNav />
        <DesktopBlogs />
        <div style={{ zoom: 0.8 }}><Cta /></div>
        <div style={{ zoom: 0.8 }}><DesktopFooter /></div>
      </div>
    </>
  );
}
