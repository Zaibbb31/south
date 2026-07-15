"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Local SVGs for pixel-perfect vector representation without extra deps
const EnvelopeIcon = () => (
  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-white/75" />
);

const MapPinIcon = () => (
  <svg className="w-5 h-5 text-white/75" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 text-white/75" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const DesktopFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="w-full bg-[#30261c] text-[#ffffff] pt-16 pb-12 px-8 lg:px-[90px] relative z-10 overflow-hidden flex flex-col font-sans" style={{ zoom: 0.8 }}>
      <div className="w-full max-w-[1840px] mx-auto flex flex-col">
        
        {/* 6-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16 border-b border-white/10 pb-16">
          
          {/* Column 1: Brand (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/SEM_LOGO_FOOTER.svg"
                alt="Southern Edge Marketing Logo"
                width={160}
                height={84}
                className="h-auto w-40 object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
            
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-[17px] text-white font-medium leading-relaxed">
                The revenue growth agency.
              </p>
              <p className="text-[17px] text-white/70 font-light leading-relaxed">
                Dubai, Delhi.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.instagram.com/southernedgemarketing?igsh=MXF2bTlpNHZpbzlt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590949122507" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/southernedgemarketing/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
              </a>
              
            </div>
          </div>

          {/* Column 2: Capabilities (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-[22px] font-bold text-white tracking-wide">Capabilities</h3>
            <ul className="flex flex-col gap-3 text-[18px]">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors duration-300">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Column 4: Locations (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-[22px] font-bold text-white tracking-wide">Locations</h3>
            <ul className="flex flex-col gap-3 text-[18px]">
              <li><Link href="/contact" className="hover:text-white transition-colors duration-300">All Locations</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Delhi</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Dubai</Link></li>
            </ul>
          </div>

          {/* Column 5: Company (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-[22px] font-bold text-white tracking-wide">Company</h3>
            <ul className="flex flex-col gap-3 text-[18px]">
              <li><Link href="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors duration-300">Projects</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 6: Contact (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-[22px] font-bold text-white tracking-wide">Contact</h3>
            <div className="flex flex-col gap-3.5 text-[18px]">
              
            
              <a href="https://wa.me/919899238237" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 flex items-center gap-2 mt-1">
                <WhatsAppIcon />
                <span>Start a conversation</span>
              </a>
              <a href="mailto:info@southernedgemarketing.com" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                <EnvelopeIcon />
                <span>info@southernedgemarketing.com</span>
              </a>
              <div className="flex items-start gap-2 text-white/80">
                <span className="mt-0.5 shrink-0"><MapPinIcon /></span>
                <span className="leading-tight text-[14px]">Dubai, UAE • Delhi, INDIA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 text-[14px] text-white/40 pb-6">
          <div>
            <span>© Southern Edge Marketing | Built for businesses that intend to lead.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>

        {/* Explore More Section */}
        <div className="flex flex-col w-full gap-6 mt-6 pt-6 border-t border-white/10">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center w-full gap-8 cursor-pointer outline-none border-none bg-transparent text-left group"
          >
            <span className="text-[24px] lg:text-[28px] text-white/70 font-semibold shrink-0 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              Explore More
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ff5100]' : 'text-white/50 group-hover:text-white'}`}
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
            </span>
            <div className="h-px bg-white/10 w-full group-hover:bg-white/30 transition-colors duration-300" />
          </button>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-12 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1200px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
            {articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/explore-more/${article.slug}`}
                className="flex flex-col gap-2 p-6 rounded-[20px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item"
              >
                <h4 className="text-[20px] lg:text-[22px] font-medium text-white group-hover/item:text-[#ff5100] transition-colors duration-300 leading-tight">
                  {article.title}
                </h4>
                <p className="text-[14px] lg:text-[15px] text-white/60 group-hover/item:text-white/80 transition-colors duration-300 font-light font-sans line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-[14px] font-semibold text-[#ff5100] group-hover/item:text-white flex items-center gap-1.5 mt-auto pt-2">
                  Read Article
                  <svg className="w-4 h-4 transform group-hover/item:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
