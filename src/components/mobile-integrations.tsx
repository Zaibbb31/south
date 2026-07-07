"use client";

import React from "react";

const logos = [
  // Row 1
  "/integrations/docker.png",
  "/integrations/meta.png",
  "/integrations/stripe.png",
  "/integrations/zapier.png",
  // Row 2
  "/integrations/sheets.png",
  "/integrations/google-calendar.png",
  "/integrations/wati.png",
  "/integrations/gmail.png", // Added to replace duplicate sheets
  "/integrations/openai.png",
  // Row 3
  "/integrations/payu.png",
  "/integrations/linkedin.png",
  "/integrations/whatsapp.png",
  "/integrations/github.png",
  // Row 4
  "/integrations/sparkle.png",
  "/integrations/zoho.png",
  "/integrations/gemini.png",
  // Row 5
  "/tik-tok_1.svg",
  "/integrations/snapchat.png",
  "/integrations/cursor.png",
  "/figma_1.svg",
];

const HexagonSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 178" fill="none" className="absolute inset-0 w-full h-full">
    <g filter="url(#filter0_d_347_694)">
      <path d="M72.8823 9.10961C77.5233 6.43012 83.2413 6.43012 87.8823 9.10961L142.164 40.4494C146.805 43.1289 149.664 48.0808 149.664 53.4397V116.119C149.664 121.478 146.805 126.43 142.164 129.11L87.8823 160.449C83.2413 163.129 77.5233 163.129 72.8823 160.449L18.6003 129.11C13.9593 126.43 11.1003 121.478 11.1003 116.119V53.4397C11.1003 48.0808 13.9593 43.1289 18.6003 40.4494L72.8823 9.10961Z" fill="#FFEDF8" fillOpacity="0.4" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter0_d_347_694" x="9.72748e-05" y="-1.90735e-06" width="160.764" height="177.559" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="5.55"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0.22 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_347_694"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_347_694" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const HexagonTile = ({ src, hasLogo }: { src?: string | null; hasLogo?: boolean }) => {
  const isBlackBg = src && (
    src.toLowerCase().includes('tiktok') || 
    src.toLowerCase().includes('tik-tok') || 
    src.toLowerCase().includes('cursor') || 
    src.toLowerCase().includes('figma')
  );
  const isCursor = src && src.toLowerCase().includes('cursor');
  return (
    <div className="relative group w-[74px] h-[80px] flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
      <HexagonSvg />
      {hasLogo && src && (
        <img 
          src={src} 
          alt="Integration Logo" 
          className={`object-contain relative z-10 filter drop-shadow-sm ${
            isCursor 
              ? 'w-[32px] h-[32px]' 
              : 'w-[36px] h-[36px]'
          } ${isBlackBg ? 'mix-blend-screen' : ''}`} 
        />
      )}
    </div>
  );
};

export function MobileIntegrations() {
  const rowsConfig = [
    { total: 4, logoIndices: [0, 1, 2, 3] },
    { total: 5, logoIndices: [0, 1, 2, 3, 4] },
    { total: 4, logoIndices: [0, 1, 2, 3] },
    { total: 5, logoIndices: [0, 1, 2, 3, 4] },
    { total: 4, logoIndices: [1, 2] },
  ];

  let currentLogoIndex = 0;

  return (
    <section className="w-full bg-[#fffff0] relative overflow-hidden flex flex-col items-center">
      
      {/* Honeycombs Section with Background */}
      <div 
        className="w-full relative flex justify-center pt-16 pb-10"
        style={{ background: "url('/bggrad.png') lightgray 50% / cover no-repeat" }}
      >
        {/* Bottom Fade Overlay to blend image smoothly into the bg color below */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fffff0] to-transparent pointer-events-none z-0" />
        
        <div className="max-w-[440px] mx-auto relative z-10 w-full flex flex-col items-center">
          <div className="flex flex-col items-center">
            {rowsConfig.map((row, rIdx) => (
              <div 
                key={rIdx} 
                className={`flex justify-center gap-[4px] ${
                  rIdx > 0 ? "-mt-[20px]" : ""
                }`}
              >
                {Array.from({ length: row.total }).map((_, cIdx) => {
                  const hasLogo = row.logoIndices.includes(cIdx);
                  
                  let src = null;
                  if (hasLogo) {
                    src = logos[currentLogoIndex % logos.length];
                    currentLogoIndex++;
                  }

                  return (
                    <HexagonTile 
                      key={`${rIdx}-${cIdx}`} 
                      src={src} 
                      hasLogo={hasLogo} 
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Details */}
      <div className="max-w-[440px] mx-auto relative z-20 w-full flex flex-col items-center pb-16 pt-4">
        <div className="text-center flex flex-col items-center">
          <h2 className="flex flex-col gap-0 uppercase text-center font-sans tracking-tight">
            <span className="text-[28px] leading-[1.1] font-semibold text-[#A1A1A1]">
              INTEGRATIONS THAT
            </span>
            <span className="text-[32px] leading-[1.1] font-semibold text-[#0F0F0F] mt-1">
              SCALE WITH YOU
            </span>
          </h2>
          <p className="max-w-[320px] text-[16px] leading-[22px] text-gray-600 font-normal font-sans mt-5 px-4">
            Seamlessly connecting platforms, automating processes, and building systems that grow with your business.
          </p>
        </div>
      </div>
    </section>
  );
}
