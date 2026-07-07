import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Southern Edge Marketing",
  description: "Terms and conditions governing our software partnership.",
};

export default function Terms() {
  return (
    <div className="w-full bg-[#fffff0] min-h-screen flex flex-col">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow pt-32 pb-16 px-5 md:px-20 max-w-5xl mx-auto w-full">
        <h4 className="text-[#ff5100] text-sm font-semibold tracking-wider uppercase mb-2">Legal Framework</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">Terms & Conditions</h1>
        
        <p className="text-lg text-[#828282] mb-12">
          Read the corporate regulations, intellectual property protections, and service agreements governing our software partnership. Last revised: May 19, 2026.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">Service Agreement Principles</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Welcome to the development services platform of <span className="font-bold">Southern Edge Marketing</span>. By contracting our team for custom Next.js development, e-commerce engineering, headless architectures, or user experience design, you consent to comply with the terms set forth below. These terms regulate our delivery standards, code handoff conditions, payment structures, and legal rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">1. Agreement to Terms</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            By accessing our website, contracting our software development services, or registering for client portals provided by <span className="font-bold">Southern Edge Marketing</span>, you agree to be fully bound by these Terms & Conditions. If you do not agree to all provisions within this document, you are explicitly prohibited from using our site and services and must cease interaction immediately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">2. Intellectual Property Rights</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Unless otherwise specified in custom project agreement riders, all creative assets, proprietary source codebases, visual elements, graphics, user interface designs, and architectural frameworks engineered by <span className="font-bold">Southern Edge Marketing</span> are our exclusive intellectual property. Client deliverables (such as compiled final HTML, CSS, custom Next.js builds, or Shopify configurations) are transferred to client ownership only upon receipt of complete and final project milestone payments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">3. Payment Milestones & Fees</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Client projects are executed under standard milestone-based payment schedules. Retainers and deposit fees are strictly non-refundable and serve to reserve engineering bandwidth. Subsequent payments must be settled within 14 calendar days of milestone completion. Late payments are subject to a standard 1.5% compounding monthly surcharge, and we reserve the right to temporarily suspend project hosting or active support in the event of default.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">4. Limitation of Liability</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Under no circumstances shall <span className="font-bold">Southern Edge Marketing</span>, its developers, directors, or partners be liable for any indirect, consequential, special, or punitive damages—including lost business profits, data leakage, hosting service disruptions, or hardware malfunctions—arising from the use of our services or developed code bases. Our absolute maximum cumulative liability shall not exceed the total fees paid by the client under their respective service contract.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">5. Dispute Resolution & Governing Law</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            These Terms & Conditions are governed by and construed in accordance with the laws of the jurisdiction of our corporate registration. Any legal disputes, claims, or regulatory disagreements arising from these provisions shall be settled exclusively through binding corporate arbitration before courts of competent jurisdiction, with the prevailing party entitled to recover reasonable legal and attorney fees.
          </p>
        </section>

        <p className="text-sm text-[#828282] mt-16 pt-8 border-t border-black/10">
          © 2026 Southern Edge Marketing. All corporate rights reserved. Registered development partner code: SEM-TERMS-2026-V1.
        </p>
      </main>

      <div className="hidden md:block mt-auto">
        <DesktopFooter />
      </div>
      <div className="md:hidden mt-auto">
        <MobileFooter />
      </div>
    </div>
  );
}
