"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const slides = [
  {
    id: 0,
    title: "WHEN I WAS A CHILD",
    text: `I was always curious about the world around me. I loved tracking my high scores, finding hidden secrets, and most of my questions began with "how" or "why". When I got my first video game console, something clicked. "How does the game track every single move I make?", "Why did the creators place that specific billboard right in the middle of the racing track?", "How do they use the data of how we play to make the next game even more addictive?"`,
    startYear: "2000",
    endYear: "2015",
    image: "/assets/kid.png"
  },
  {
    id: 1,
    title: "REACHING MY TEENAGE YEARS",
    text: `I was never someone who loved reading textbooks. Instead of playing by the traditional rules, I became an expert at finding the ultimate workarounds. Whether it was hunting down alternative sources for a passing grade or negotiating a strategic favor from my beloved, Aunt Tripta Bhatia, just to get me through, I learned early on how to hack the system. I didn't realize it then, but dodging the standard academic grind taught me the basics of problem-solving, resourcefulness, and efficiency skills that prepared me for any challenge ahead.`,
    startYear: "2015",
    endYear: "2021",
    image: "/assets/teen.png"
  },
  {
    id: 2,
    title: "TODAY",
    text: `I'm proud of the journey I've taken so far, but my eyes are still on tomorrow. Those early days of figuring out the fastest path to success evolved into a deep well of professional experience. Today, as a grown man juggling the responsibilities of B2B commercial operations and high level digital marketing strategies, I still rely on that same relentless resourcefulness. I continuously refine my strategies, dive into complex business challenges, and drive real revenue. I'm passionate, and since every great venture begins with a simple idea, feel free to reach out. I'd love to hear from you!`,
    startYear: "2021",
    endYear: "Present",
    image: "/assets/adult.png"
  }
];

export const DesktopAboutHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimerKey((k) => k + 1); // Ensure progress bar resets
    }, 10000); // 10 second duration per slide
    return () => clearInterval(timer);
  }, [timerKey, isHovered]);

  const handleManualChange = (direction: number) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
    setTimerKey(k => k + 1);
  };

  const textVariants: Variants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.6, ease: "easeIn" } }
  };

  const imageVariants: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeIn" } }
  };

  return (
    <div className="w-full min-h-[850px] md:min-h-[600px] h-[850px] md:h-[650px] relative overflow-hidden bg-[#0f0901]">
      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden md:block">
        <img 
          src="/assets/about-hero-bg.png" 
          alt="Dark room background" 
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      {/* Mobile Background Image & Blur Overlay */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        {/* Specific mobile crop/positioning matching Figma */}
        <div className="absolute h-[670px] w-[1537px] top-[-170px] left-1/2 -translate-x-[calc(50%+142px)]">
          <img 
            src="/assets/about-hero-bg.png" 
            alt="Dark room background" 
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        {/* Dark blur overlay to blend floor into solid black background for text */}
        <div className="absolute bg-[#0f0901] blur-[59px] h-[130px] w-[200%] -left-1/2 top-[453px] pointer-events-none" />
      </div>

      {/* Character Image Slider */}
      <div className="absolute h-[300px] md:h-[500px] w-[100px] md:w-[175px] left-1/2 md:left-auto -translate-x-1/2 md:-translate-x-0 right-auto md:right-[5%] lg:right-[15%] top-[60px] md:top-[100px] z-10">
        <AnimatePresence mode="wait">
          <motion.img 
            key={`img-${currentSlide}`}
            src={slides[currentSlide].image}
            alt="Character stage"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-contain pointer-events-none"
          />
        </AnimatePresence>
      </div>

      {/* Content Container (Draggable) */}
      <motion.div 
        className="relative z-20 w-full max-w-[1568px] mx-auto h-full px-4 md:px-[80px] cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.05}
        onDragEnd={(e, info) => {
          if (info.offset.x < -50) handleManualChange(1);
          else if (info.offset.x > 50) handleManualChange(-1);
        }}
      >
        
        {/* Timeline Top Slider */}
        <div className="absolute top-[380px] md:top-[100px] left-1/2 md:left-[80px] -translate-x-1/2 md:-translate-x-0 flex md:flex items-center w-[90%] md:w-auto justify-center md:justify-start">
          <AnimatePresence mode="popLayout">
            <motion.span 
              key={`start-${currentSlide}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-[24px] md:text-[30px] leading-[30px] text-white mr-6 cursor-pointer hover:text-[#ff5100] transition-colors"
              onClick={() => handleManualChange(-1)}
            >
              {slides[currentSlide].startYear}
            </motion.span>
          </AnimatePresence>
          
          <div className="flex items-center">
             <div className="w-[2px] h-[20px] md:h-[40px] bg-white transition-all duration-300" />
             <div className="h-[2px] w-[100px] md:w-[250px] bg-white transition-all duration-300 relative overflow-hidden">
                <motion.div 
                   key={`line-${currentSlide}-${timerKey}`}
                   initial={{ x: "-100%" }}
                   animate={{ x: isHovered ? "-100%" : 0 }}
                   transition={{ duration: 10, ease: "linear" }}
                   className="absolute inset-0 bg-[#ff5100]"
                />
             </div>
             <div className="w-[2px] h-[20px] md:h-[40px] bg-white transition-all duration-300" />
          </div>

          <AnimatePresence mode="popLayout">
            <motion.span 
              key={`end-${currentSlide}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-[24px] md:text-[30px] leading-[30px] text-white ml-6 cursor-pointer hover:text-[#ff5100] transition-colors"
              onClick={() => handleManualChange(1)}
            >
              {slides[currentSlide].endYear}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Text Content Slider */}
        <div className="absolute top-[450px] md:top-[280px] left-4 md:left-[80px] flex flex-col gap-[15px] md:gap-[30px] max-w-[1127px] w-[90%] md:w-[65%] text-center md:text-left mx-auto md:mx-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-[15px] md:gap-[30px]"
            >
              <h2 className="font-[family-name:var(--font-playball)] text-[28px] md:text-[36px] leading-[1.2] md:leading-[36px] text-white tracking-wide">
                {slides[currentSlide].title}
              </h2>
              <p className="font-normal text-[16px] md:text-[24px] leading-[1.6] md:leading-[32px] text-white opacity-95 drop-shadow-md">
                {slides[currentSlide].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
};
