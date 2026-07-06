import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Design N Code",
  description: "Learn how Design N Code collects, manages, processes, and protects your corporate data inputs.",
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-[#fffff0] min-h-screen flex flex-col">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow pt-32 pb-16 px-5 md:px-20 max-w-5xl mx-auto w-full">
        <h4 className="text-[#ff5100] text-sm font-semibold tracking-wider uppercase mb-2">Compliance & Legal</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-6">Privacy Policy</h1>
        
        <p className="text-lg text-[#828282] mb-12">
          Learn how Southern Edge Marketing collects, manages, processes, and protects your corporate data inputs. Last revised: May 19, 2026.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">Our Commitment to Your Privacy</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            At Southern Edge Marketing, trust is the foundation of our engineering partnerships. We build state-of-the-art digital storefronts, Next.js applications, and custom enterprise portals with security as a native, non-negotiable architectural layer. This Privacy Policy documents how we process customer information when you use our website, custom client dashboards, or consult with our development team.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">1. Information We Collect</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            At Southern Edge Marketing, we collect information that you directly provide to us when interacting with our platform, submitting project inquiries, or engaging with our digital resources. This includes personally identifiable information such as your name, corporate email address, business telephone number, and company name. We also automatically gather standard analytical metadata, including device type, operating system, IP address, referral sources, and browse duration, to evaluate application performance and speed configurations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">2. How We Use Your Information</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            The gathered datasets are processed exclusively to optimize your business engagement and deliver state-of-the-art web products. We use your data to respond to customized software requests, send project updates, process transactions, perform system diagnostic analyses, and improve client-side interactivity on our Next.js platforms. We do not sell, rent, or lease your private personal details to third-party brokers under any circumstances.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">3. Data Retention & Security</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            We implement robust enterprise-grade security protocols, including Transport Layer Security (TLS/HTTPS) encryption, to safeguard all data inputs. Your personal database records are retained only for as long as necessary to fulfill the legal requirements of your custom service agreements or to resolve technical audits. Client source files, design layouts, and production code bases are securely isolated and protected from unauthorized external access.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">4. Third-Party Integrations</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Our services utilize standard third-party tools (such as Google Analytics, Vercel performance monitoring, and secure payment processing gateways) to maintain site scalability. These tools handle data strictly in accordance with their respective compliance policies. If you interact with our integrated WhatsApp community linkages, your phone number and chat identifiers are governed directly by WhatsApp's native security policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">5. Contact & Regulatory Rights</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            You hold the absolute right to request access to, correction of, or erasure of any personal records stored within our databases. If you wish to execute your data protection rights, or if you have questions regarding this Privacy Policy statement, please contact our data compliance officer directly at info@southernedgemarketing. We will respond to and address your requests within 10 business days.
          </p>
        </section>

        <p className="text-sm text-[#828282] mt-16 pt-8 border-t border-black/10">
          © 2026 Design N Code. All corporate rights reserved.
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
