"use client";

import React, { useState } from "react";

const ArrowDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col transition-all duration-300">
      <button 
        type="button"
        className="flex items-center justify-between py-4 cursor-pointer w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <p className="font-sans text-[18px] text-[#0f0f0f] leading-tight pr-4">
          {question}
        </p>
        <div 
          className={`shrink-0 w-[42px] h-[42px] rounded-full bg-[#ff5100] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{
            boxShadow: "0px 10px 16px rgba(0,0,0,0.15), inset 0px 4px 6px rgba(255,255,255,0.4)"
          }}
          aria-hidden="true"
        >
          <ArrowDownIcon />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100 pb-2 mt-2' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-[#ff5100] rounded-[16px] p-5 mb-2">
          <p className="text-white text-[16px] leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const MobileFaq = () => {
  const faqs = [
    {
      question: "Who do you usually work with?",
      answer: "We work with ambitious brands and businesses looking to scale their digital presence through strategic design and marketing."
    },
    {
      question: "How long does a project take?",
      answer: "Most website projects take 4-8 weeks from kickoff to launch, depending on complexity and features required."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we offer monthly retainers for SEO, marketing, and website maintenance to ensure your continued growth."
    }
  ];

  return (
    <div className="w-full bg-[#fffff0] px-5 pt-16 pb-6 relative flex flex-col items-center" style={{ zoom: 1.08 }}>
      
      {/* Header */}
      <p className="text-[18px] font-medium tracking-wide mb-4 text-center">
        <span className="text-[#ff5100]">[</span>
        <span className="text-black mx-1">FAQ</span>
        <span className="text-[#ff5100]">]</span>
      </p>
      
      <div className="w-full max-w-[360px] h-[1px] bg-gray-200 mb-6"></div>
      
      <h2 className="text-[54px] leading-[1.0] font-semibold text-black mb-12 text-center tracking-tight">
        COMMON<br/>QUERIES
      </h2>

      {/* FAQ List */}
      <div className="w-full flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
    </div>
  );
};
