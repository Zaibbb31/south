"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <div className="w-full relative z-50" style={{ zoom: 0.8 }}>
      {/* Base Navbar (Always visible at the bottom layer) */}
      <div className="h-[68px] w-full flex items-center justify-between px-8 md:px-10 absolute top-0 left-0 z-40 bg-[rgba(255,255,240,0.1)]">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/sem_color.svg"
            alt="SEM Logo"
            width={42}
            height={42}
            className="h-9 w-9 cursor-pointer transition-transform hover:scale-105"
          />
        </Link>
        
        <button 
          type="button"
          className="flex items-center justify-center gap-4 cursor-pointer group p-3 -mr-3"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <p className="font-bold text-[15px] tracking-widest text-[#ff5100] pointer-events-none">
            MENU
          </p>
          {/* Burger Icon */}
          <div className="flex flex-col gap-[4px] w-8 pointer-events-none">
            <div className="h-[2px] w-full bg-[#ff5100]" />
            <div className="h-[2px] w-3/4 self-end bg-[#ff5100] transition-all group-hover:w-full" />
          </div>
        </button>
      </div>

      {/* Overlay Wrapper (Animates height from 0 to full to create the reveal effect) */}
      <div 
        className={`absolute top-0 left-0 w-full bg-[#ff5100] z-[60] overflow-hidden rounded-b-[40px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "shadow-2xl pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ height: isOpen ? '425px' : '0px' }}
      >
        {/* Inner Content - Fixed height prevents squishing during height transition */}
        <div className="w-full relative" style={{ height: '425px' }}>
          {/* White Header (perfectly overlays the base header) */}
          <div className="h-[68px] w-full flex items-center justify-between px-8 md:px-10 absolute top-0 left-0 z-50">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/SEM LOGO.svg"
                alt="SEM Logo"
                width={36}
                height={36}
                className="h-9 w-9 cursor-pointer transition-transform hover:scale-105"
              />
            </Link>
            
            <button 
              type="button"
              className="flex items-center justify-center gap-4 cursor-pointer group p-3 -mr-3"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <p className="font-bold text-[15px] tracking-widest text-white pointer-events-none">
                MENU
              </p>
              {/* White Burger Icon */}
              <div className="flex flex-col gap-[4px] w-8 pointer-events-none">
                <div className="h-[2px] w-full bg-white" />
                <div className="h-[2px] w-full bg-white transition-all" />
              </div>
            </button>
          </div>

          {/* Links Section */}
          <div className="absolute top-24 right-4 flex flex-col items-end gap-6 font-medium text-xl text-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-all ${
                    isActive 
                      ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
                      : "opacity-80 hover:opacity-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Footer Info Section */}
          <div className="absolute bottom-8 left-4 flex flex-col gap-4 items-start">
            <div className="flex flex-col font-medium gap-3 items-start text-white">
              <a href="tel:+919899238237" className="leading-tight text-2xl hover:opacity-85 transition-opacity">+91 9899238237</a>
            </div>
            <div className="flex gap-2.5 items-center">
              <a href="/contact" className="flex items-center justify-center rounded-full size-10 bg-white text-[#E1306C] hover:bg-white/90 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </a>
              <a href="/contact" className="flex items-center justify-center rounded-full size-10 bg-white text-[#0A66C2] hover:bg-white/90 transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer removed so hero section goes behind nav */}
    </div>
  );
}
