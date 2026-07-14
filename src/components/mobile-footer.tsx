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
  <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 text-white/70" />
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const MobileFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="w-full bg-[#30261c] text-[#a3a3a3] px-6 pt-12 pb-8 flex flex-col relative overflow-hidden font-sans" style={{ zoom: 0.8 }}>
      
      {/* Brand & Intro */}
      <div className="flex flex-col gap-4 mb-8">
        <Link href="/" className="inline-block w-fit">
          <Image
            src="/svg (1).svg"
            alt="Southern Edge Marketing Logo"
            width={140}
            height={73}
            className="h-auto w-36 object-contain hover:opacity-90 transition-opacity"
          />
        </Link>
        <p className="text-[16px] leading-relaxed text-white/70">
          The revenue growth agency. <br />
          Dubai, Manchester & Miami.
        </p>
        
        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
            <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
            <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
            <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5 h-3.5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
            <FontAwesomeIcon icon={faYoutube} className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Grid of Link Columns */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-8 text-[15px]">
        {/* Capabilities */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-white tracking-wide">Capabilities</h3>
          <ul className="flex flex-col gap-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors duration-300">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Company */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-white tracking-wide">Company</h3>
          <ul className="flex flex-col gap-2.5">
            <li><Link href="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors duration-300">Projects</Link></li>
            <li><Link href="/blogs" className="hover:text-white transition-colors duration-300">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Blogs</Link></li>
          </ul>
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-white tracking-wide">Locations</h3>
          <ul className="flex flex-col gap-2.5">
            <li><Link href="/contact" className="hover:text-white transition-colors duration-300">All Locations</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Delhi</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Dubai</Link></li>
          </ul>
        </div>
      </div>

      {/* Contact Column */}
      <div className="flex flex-col gap-4 mb-8 pt-6 border-t border-white/10 text-[15px]">
        <h3 className="text-[16px] font-bold text-white tracking-wide">Contact</h3>
        <div className="flex flex-col gap-3">
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
            <span className="leading-tight">Dubai, UAE • Delhi, INDIA</span>
          </div>
        </div>
        
        {/* Social Icons inside Contact Column */}
        <div className="flex items-center gap-3 mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
            <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
            <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
            <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5 h-3.5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300">
            <FontAwesomeIcon icon={faYoutube} className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Legal Links & Copyright */}
      <div className="flex flex-col gap-4 pt-6 border-t border-white/10 text-[14px] text-white/40 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <span className="text-white/10">|</span>
          <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
          <span className="text-white/10">|</span>
          <Link href="/privacy" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
        </div>
        <div>
          <span>© Southern Edge Marketing | Built for businesses that intend to lead.</span>
        </div>
      </div>

      {/* Explore More Accordion */}
      <div className="flex flex-col gap-4 mt-4 w-full pt-4 border-t border-white/10">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-6 w-full cursor-pointer outline-none border-none bg-transparent text-left group"
        >
          <span className="text-[20px] font-semibold text-white/75 whitespace-nowrap flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            Explore More
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ff5100]' : 'text-white/50'}`}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
            </svg>
          </span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </button>

        <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}`}>
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/explore-more/${article.slug}`}
              className="flex flex-col gap-1 p-4 rounded-[16px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h4 className="text-[18px] font-medium text-white leading-tight">
                {article.title}
              </h4>
              <p className="text-[13px] text-white/60 font-light font-sans line-clamp-2">
                {article.excerpt}
              </p>
              <span className="text-[13px] font-semibold text-[#ff5100] flex items-center gap-1 mt-1">
                Read Article
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
