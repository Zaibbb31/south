"use client";

import React, { useState } from "react";

interface PhoneQrButtonProps {
  phoneNumber: string;
  className?: string;
}

export function PhoneQrButton({ phoneNumber, className }: PhoneQrButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Strip spaces and keep leading + if present.
  const telUrl = `tel:${phoneNumber.replace(/\s+/g, "")}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(telUrl)}`;

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`${className} cursor-pointer text-left focus:outline-none`}
      >
        {phoneNumber}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={handleClose}
        >
          <div
            className="bg-[#fffff0] rounded-[32px] p-8 max-w-[360px] w-full mx-4 relative flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-black/10 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-black/40 hover:text-black hover:scale-105 transition-all p-1"
              aria-label="Close"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Content */}
            <h3 className="text-[22px] font-bold text-black mb-2 mt-2 tracking-tight">
              Scan to Call
            </h3>
            <p className="text-[14px] text-black/60 mb-6 text-center leading-normal">
              Scan this QR code with your phone camera to call us instantly.
            </p>

            {/* QR Code Container */}
            <div className="bg-white p-5 rounded-[24px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] border border-black/5 mb-6 flex items-center justify-center">
              <img
                src={qrCodeUrl}
                alt={`QR code to call ${phoneNumber}`}
                width={180}
                height={180}
                className="w-[180px] h-[180px] object-contain select-none"
              />
            </div>

            {/* Phone Number Link */}
            <a
              href={telUrl}
              className="text-[20px] font-bold text-[#ff5100] hover:opacity-80 transition-opacity tracking-wide mb-1"
            >
              {phoneNumber}
            </a>
            <span className="text-[12px] text-black/40 font-medium">
              Or click to call from your device
            </span>
          </div>
        </div>
      )}
    </>
  );
}
