"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export function AboutIntro() {
  const headingText = "Hello! We're Southern Edge Marketing, a results-driven digital marketing agency helping businesses grow, scale, and succeed in the digital world.";
  const words = headingText.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="w-full bg-[#fffff0] px-4 pt-2 pb-8 md:pt-0 md:pb-12 flex justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-start">
        <div className="w-full">
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[14px] md:text-[16px] tracking-widest font-medium mb-4"
          >
            <span className="text-[#ff5100]">[</span>
            <span className="text-black mx-2">ABOUT US</span>
            <span className="text-[#ff5100]">]</span>
          </motion.div>
          
          {/* Divider */}
          <motion.hr 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full border-t border-[#000000]/10 mb-10 md:mb-12 origin-left" 
          />

          <div className="w-full max-w-[950px]">
            {/* Heading paragraph with Word-by-Word Animation */}
            <motion.p 
              className="text-[22px] md:text-[32px] leading-[1.4] text-[#4a4a4a] flex flex-wrap gap-x-[8px]"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {words.map((word, index) => {
                const isBold = word.includes("We're") || word.includes("Southern") || word.includes("Edge") || word.includes("Marketing,");
                return (
                  <motion.span 
                    key={index} 
                    variants={child}
                    className={isBold ? "text-[#ff5100] font-semibold" : ""}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.p>

            {/* Body paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[16px] md:text-[18px] leading-[1.6] text-[#4a4a4a] mt-6 md:mt-8"
            >
              At Southern Edge Marketing, we partner with brands across the globe to create impactful digital experiences that drive measurable results. From stunning website development and high-converting performance marketing campaigns to strategic social media management, SEO, branding, and professional video & photography production, we provide end-to-end marketing solutions tailored to your business goals.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
