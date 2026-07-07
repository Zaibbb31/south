"use client";

import React from "react";

const desktopLogos = [
  // Row 1 (6)
  "/integrations/google.png",
  "/integrations/stripe.png",
  "/integrations/docker.png",
  "/integrations/zapier.png",
  "/integrations/openai.png",
  "/integrations/meta.png",
  "/tik-tok_1.svg",
  // Row 2 (6)
  "/integrations/razorpay.png",
  "/integrations/sheets.png",
  "/integrations/gmail.png",
  "/integrations/google-calendar.png",
  "/integrations/gemini.png",
  "/integrations/snapchat.png",
  // Row 3 (5)
  "/integrations/payu.png",
  "/integrations/whatsapp.png",
  "/integrations/linkedin.png",
  "/integrations/sparkle.png",
  "/integrations/cursor.png",
  // Row 4 (4)
  "/integrations/zoho.png",
  "/integrations/wati.png",
  "/integrations/github.png",
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
    <div className="relative group w-[100px] h-[110px] md:w-[130px] md:h-[143px] flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
      <div className={`absolute inset-0 transition-opacity duration-500 ${hasLogo ? 'opacity-100' : 'opacity-40 group-hover:opacity-60'}`}>
        <HexagonSvg />
      </div>
      {hasLogo && src && (
        <img 
          src={src} 
          alt="Integration Logo" 
          className={`object-contain relative z-10 filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300 ${
            isCursor 
              ? 'w-[38px] h-[38px] md:w-[52px] md:h-[52px]' 
              : 'w-[45px] h-[45px] md:w-[60px] md:h-[60px]'
          } ${isBlackBg ? 'mix-blend-screen' : ''}`} 
        />
      )}
    </div>
  );
};

export const DesktopIntegrations = () => {
  const rowsConfig = [
    { total: 9, logoIndices: [1, 2, 3, 4, 5, 6, 7] },
    { total: 10, logoIndices: [2, 3, 4, 5, 6, 7] },
    { total: 9, logoIndices: [2, 3, 4, 5, 6] },
    { total: 10, logoIndices: [3, 4, 5, 6] },
  ];

  let currentLogoIndex = 0;

  return (
    <section className="w-full bg-[#fffff0] relative flex flex-col items-center rounded-t-[45px] overflow-hidden -mt-8 pt-8 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      
      {/* Background Graphic Blend */}
      <div className="w-full absolute top-0 left-0 h-[800px] pointer-events-none overflow-hidden">
         <img src="/bggradi.png" alt="Background gradient" className="absolute top-0 left-0 w-full h-full object-cover object-top" />
         {/* Overlay to ensure smooth fade into the background color at the bottom */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#fffff0] via-[#fffff0]/50 to-transparent" />
      </div>

      <div className="w-full relative flex justify-center pt-20 pb-12 z-10">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
          <div className="flex flex-col items-center">
            {rowsConfig.map((row, rIdx) => (
              <div 
                key={rIdx} 
                className={`flex justify-center gap-[6px] md:gap-[10px] ${
                  rIdx > 0 ? "-mt-[28px] md:-mt-[35px]" : ""
                }`}
              >
                {Array.from({ length: row.total }).map((_, cIdx) => {
                  const hasLogo = row.logoIndices.includes(cIdx);
                  
                  let src = null;
                  if (hasLogo && currentLogoIndex < desktopLogos.length) {
                    src = desktopLogos[currentLogoIndex];
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
      <div className="w-full max-w-[900px] mx-auto relative z-20 flex flex-col items-center pb-24 pt-6">
        <div className="text-center flex flex-col items-center">
          <h2 className="flex flex-col gap-0 uppercase text-center font-sans tracking-tight">
            <span className="text-[40px] lg:text-[54px] xl:text-[64px] leading-[1.1] font-semibold text-[#A1A1A1]">
              INTEGRATIONS THAT
            </span>
            <span className="text-[40px] lg:text-[54px] xl:text-[64px] leading-[1.1] font-semibold text-[#0F0F0F] mt-1">
              SCALE WITH YOU
            </span>
          </h2>
          <p className="max-w-[700px] text-[18px] lg:text-[22px] xl:text-[25px] leading-[1.4] text-gray-600 font-normal font-sans mt-6 px-4">
            Seamlessly connecting platforms, automating processes, and building systems that grow with your business.
          </p>
        </div>
      </div>
    </section>
  );
};
