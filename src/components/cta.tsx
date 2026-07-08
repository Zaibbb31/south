import React from 'react';
import Link from 'next/link';

export const Cta = () => {
  return (
    <div className="w-full px-4 md:px-[60px] py-10 md:py-20 flex justify-center bg-[#fffff0]">
      <div className="relative w-full max-w-[1568px]">
        {/* Outer wrapper that provides the 20px padding and gray border/inset shadow effect */}
        <div className="w-full h-full relative rounded-[25px] md:rounded-[45px] p-[10px] md:p-[20px] shadow-[0px_15px_60px_-15px_rgba(0,0,0,0.1)]">
          
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[25px] md:rounded-[45px] bg-[rgba(243,243,243,0.65)]" />
          <div className="absolute inset-0 pointer-events-none rounded-[25px] md:rounded-[45px] shadow-[inset_0px_0px_8.1px_0px_rgba(0,0,0,0.35)]" />

          {/* Inner Orange Container */}
          <div className="bg-[#ffc59b] relative overflow-hidden rounded-[15px] md:rounded-[25px] flex flex-col lg:flex-row items-center justify-between p-[15px] md:p-12 lg:p-16 lg:py-[60px] gap-[30px] md:gap-10 min-h-[429px] md:min-h-[480px]">
            
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden rounded-[25px]">
              {/* Added impactful gradient from bottom right */}
              <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_bottom_right,_rgba(255,81,0,0.35)_0%,_rgba(255,81,0,0.15)_30%,_transparent_70%)] pointer-events-none z-0 translate-x-[20%] translate-y-[20%]" />
              
              <div className="absolute h-[543px] w-[1188px] left-[calc(100%-449px)] top-[229px] z-10">
                <img alt="" className="block max-w-none size-full" src="/assets/vector9.svg" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-[714px] h-[714px] top-[-547px] z-10">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ellipse6.svg" />
              </div>
              <div className="absolute left-[calc(50%+467px)] -translate-x-1/2 w-[714px] h-[714px] top-[348px] z-10">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/ellipse6.svg" />
              </div>
            </div>

            {/* Left Content */}
            <div className="flex flex-col items-start relative z-10 w-full lg:w-[750px] lg:pl-[40px] pt-[15px] md:pt-0">
              <p className="font-semibold leading-[15px] md:leading-[24px] text-[15px] md:text-[24px] text-[rgba(0,0,0,0.65)] tracking-[0.3px] md:tracking-[0.48px] uppercase mb-[10px] md:mb-5">
                LET'S BUILD SOMETHING AMAZING
              </p>
              <p className="font-medium leading-[40px] md:leading-[75px] text-[35px] md:text-[75px] text-black tracking-[0.7px] md:tracking-[1.5px] max-w-[650px]">
                Ready to grow your business online?
              </p>
            </div>

            {/* Right Content - Card */}
            <div className="bg-white rounded-[10px] md:rounded-[20px] md:p-[15px] relative z-10 w-full lg:w-[568px] lg:-mr-[10px] shrink-0 md:shadow-sm">
              <div className="bg-white rounded-[10px] px-[15px] py-[15px] md:px-[30px] md:py-[30px] flex flex-col items-start w-full md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]">
                
                <div className="flex flex-col gap-[5px] md:gap-[15px] mb-[20px] md:mb-[30px]">
                  {/* Top row */}
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-green-500 shrink-0 animate-pulse" />
                    <p className="font-medium text-[16px] leading-[16px] text-green-600 tracking-[0.32px]">
                      AVAILABLE FOR PROJECT
                    </p>
                  </div>
                  
                  {/* Profile row */}
                  <div className="flex items-center mt-[20px] md:mt-0">
                    <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-[1000px] bg-[#3c3c3c] overflow-hidden flex-shrink-0 relative">
                      <div className="absolute h-full w-[150%] md:h-[90px] md:w-[135px] top-1/2 left-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2">
                        <img 
                          src="/assets/chatgpt-profile.png"
                          alt="Profile" 
                          className="absolute inset-0 size-full max-w-none object-cover pointer-events-none"
                        />
                      </div>
                    </div>
                    <span className="font-light text-[30px] leading-[30px] text-[rgba(0,0,0,0.55)] tracking-[0.6px] mx-[10px]">
                      +
                    </span>
                    <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-[1000px] bg-black flex items-center justify-center flex-shrink-0 relative">
                      <span className="font-medium text-[26px] leading-[26px] tracking-[0.52px] text-white">
                        You
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom section */}
                <div className="flex flex-col gap-[15px] md:gap-[20px] w-full">
                  <div className="flex flex-col gap-[5px] md:gap-[10px]">
                    <p className="font-medium text-[22px] md:text-[25px] leading-[22px] md:leading-[25px] tracking-[0.44px] md:tracking-[0.5px] text-black">
                      Quick 15-minute call
                    </p>
                    <p className="font-normal text-[16px] md:text-[20px] leading-[16px] md:leading-[20px] tracking-[0.32px] md:tracking-[0.4px] text-[rgba(0,0,0,0.65)]">
                      Pick a time that works for you
                    </p>
                  </div>
                  
                  <Link href="/contact" className="w-full mt-2">
                    <button 
                      className="relative w-full h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
                      aria-label="Start Now"
                    >
                      {/* Inner Left Pill with right shadow */}
                      <div className="absolute left-[0px] top-0 w-[calc(100%-60px)] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                        <span className="font-medium text-[18px] md:text-[20px] text-white tracking-tight whitespace-nowrap">
                          Start Now
                        </span>
                      </div>
                      
                      {/* Right Arrow Icon */}
                      <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                        <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
