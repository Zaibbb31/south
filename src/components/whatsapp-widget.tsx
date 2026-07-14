"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function WhatsappWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5">
      {/* Text Callout Card - Hidden on very small screens, visible on md and up */}
      <div className="bg-[#f8f9fa] text-black rounded-lg py-2.5 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100 text-[13px] font-medium leading-tight font-sans whitespace-nowrap select-none select-none transition-all duration-300">
        Need Help? Chat with
        <br />
        us
      </div>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919899238237"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
      </a>
    </div>
  );
}
