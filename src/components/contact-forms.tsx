"use client";

import React, { useState } from "react";
import { NameInput } from "@/components/name-input";
import { PhoneInput } from "@/components/phone-input";
import { countryCodes } from "@/lib/countryCodes";
import { useRouter } from "next/navigation";

function useContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      code: formData.get("code"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      projectDetails: formData.get("projectDetails"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit the form.");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      router.push("/thank-you");
    } catch (err: any) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, success, error };
}

export const MobileContactForm = () => {
  const { handleSubmit, loading, success, error } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {success && <p className="text-[#ff5100] font-medium">Thank you! We have received your message.</p>}
      {error && <p className="text-red-600 font-medium">{error}</p>}
      <div className="flex flex-col gap-1 border-b border-black/20 pb-2">
        <label className="text-[16px] text-[#626262] font-medium tracking-tight">Name*</label>
        <NameInput name="name" required className="w-full bg-transparent outline-none text-[16px] text-black" />
      </div>
      
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-1 border-b border-black/20 pb-2 w-[100px] shrink-0">
          <label className="text-[16px] text-[#626262] font-medium tracking-tight">Code*</label>
          <input 
            name="code"
            list="country-codes-mobile" 
            className="bg-transparent outline-none text-[16px] text-black w-full cursor-pointer" 
            placeholder="+Code"
            required
          />
          <datalist id="country-codes-mobile">
            {countryCodes.map((c, i) => (
              <option key={`m-${i}`} value={`${c.flag} ${c.code}`}>{c.country}</option>
            ))}
          </datalist>
        </div>
        
        <div className="flex flex-col gap-1 border-b border-black/20 pb-2 flex-1">
          <label className="text-[16px] text-[#626262] font-medium tracking-tight">Phone number*</label>
          <PhoneInput name="phone" required className="w-full bg-transparent outline-none text-[16px] text-black" />
        </div>
      </div>
      
      <div className="flex flex-col gap-1 border-b border-black/20 pb-2">
        <label className="text-[16px] text-[#626262] font-medium tracking-tight">E-mail*</label>
        <input name="email" type="email" required className="w-full bg-transparent outline-none text-[16px] text-black" />
      </div>
      
      <div className="flex flex-col gap-1 border-b border-black/20 pb-2">
        <label className="text-[16px] text-[#626262] font-medium tracking-tight">Service*</label>
        <select name="service" required className="w-full bg-transparent outline-none text-[16px] text-black cursor-pointer appearance-none" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option value="web-development">Website Development</option>
          <option value="ui-ux-design">UI/UX Design</option>
          <option value="branding">Branding</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="seo">SEO</option>
          <option value="social-media">Social Media Management</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-1 border-b border-black/20 pb-2">
        <label className="text-[16px] text-[#626262] font-medium tracking-tight">Tell us about your project*</label>
        <input name="projectDetails" type="text" required className="w-full bg-transparent outline-none text-[16px] text-black" />
      </div>

      <button 
        disabled={loading} 
        type="submit" 
        className="w-full mt-2 relative h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {/* Inner Left Pill with right shadow */}
        <div className="absolute left-[0px] top-0 w-[calc(100%-60px)] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
          {!loading && <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />}
          <span className="font-medium text-[18px] text-white tracking-tight whitespace-nowrap">
            {loading ? "Sending..." : "Get in touch"}
          </span>
        </div>
        
        {/* Right Arrow Icon */}
        <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
          <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </button>
    </form>
  );
};

export const DesktopContactForm = () => {
  const { handleSubmit, loading, success, error } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
      {success && <p className="text-[#ff5100] font-medium text-lg">Thank you! We have received your message.</p>}
      {error && <p className="text-red-600 font-medium">{error}</p>}
      <div className="flex flex-col gap-1 border-b border-black/20 pb-2">
        <label className="text-[16px] lg:text-[18px] text-[#626262] font-medium tracking-tight">Name*</label>
        <NameInput name="name" required className="w-full bg-transparent outline-none text-[18px] text-black" />
      </div>
      
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-1 border-b border-black/20 pb-2 w-[120px] shrink-0">
          <label className="text-[16px] lg:text-[18px] text-[#626262] font-medium tracking-tight">Code*</label>
          <input 
            name="code"
            list="country-codes-desktop" 
            className="bg-transparent outline-none text-[18px] text-black w-full cursor-pointer" 
            placeholder="+Code"
            required
          />
          <datalist id="country-codes-desktop">
            {countryCodes.map((c, i) => (
              <option key={`d-${i}`} value={`${c.flag} ${c.code}`}>{c.country}</option>
            ))}
          </datalist>
        </div>
        
        <div className="flex flex-col gap-1 border-b border-black/20 pb-2 flex-1">
          <label className="text-[16px] lg:text-[18px] text-[#626262] font-medium tracking-tight">Phone number*</label>
          <PhoneInput name="phone" required className="w-full bg-transparent outline-none text-[18px] text-black" />
        </div>
      </div>
      
      <div className="flex flex-col gap-1 border-b border-black/20 pb-2">
        <label className="text-[16px] lg:text-[18px] text-[#626262] font-medium tracking-tight">E-mail*</label>
        <input name="email" type="email" required className="w-full bg-transparent outline-none text-[18px] text-black" />
      </div>
      
      <div className="flex flex-col gap-1 border-b border-black/20 pb-2">
        <label className="text-[16px] lg:text-[18px] text-[#626262] font-medium tracking-tight">Service*</label>
        <select name="service" required className="w-full bg-transparent outline-none text-[18px] text-black cursor-pointer appearance-none" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option value="web-development">Website Development</option>
          <option value="ui-ux-design">UI/UX Design</option>
          <option value="branding">Branding</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="seo">SEO</option>
          <option value="social-media">Social Media Management</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-1 border-b border-black/20 pb-2">
        <label className="text-[16px] lg:text-[18px] text-[#626262] font-medium tracking-tight">Tell us about your project*</label>
        <input name="projectDetails" type="text" required className="w-full bg-transparent outline-none text-[18px] text-black" />
      </div>

      <button 
        disabled={loading} 
        type="submit" 
        className="w-full mt-4 relative h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {/* Inner Left Pill with right shadow */}
        <div className="absolute left-[0px] top-0 w-[calc(100%-60px)] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
          {!loading && <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />}
          <span className="font-medium text-[18px] lg:text-[20px] text-white tracking-tight whitespace-nowrap">
            {loading ? "Sending..." : "Get in touch"}
          </span>
        </div>
        
        {/* Right Arrow Icon */}
        <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
          <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </button>
    </form>
  );
};
