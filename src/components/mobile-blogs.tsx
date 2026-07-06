"use client";

import React from "react";

export const MobileBlogs = () => {
  const blogs = Array(6).fill(null).map((_, i) => ({
    category: "DESIGN",
    title: "The Importance of Mobile-First Design in 2005",
    date: "Feb 26, 2001",
    image: "/services-placement.png"
  }));

  return (
    <div className="w-full relative bg-[#fffff0] pt-16 pb-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12 gap-6 w-full z-10 relative mt-4">

        
        <div className="w-[150vw] -ml-[25vw] h-px bg-black/10 relative" />
        
        <h2 className="text-[40px] leading-[1.1] font-semibold text-black text-center w-full px-4 mt-10">
          BLOGS & ARTICLES
        </h2>
      </div>

      {/* Blogs List */}
      <div className="w-full px-5 flex flex-col gap-6 relative z-10">
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[15px] w-full p-[10px] pb-6 flex flex-col overflow-hidden relative shadow-sm border border-black/5"
          >
            {/* Image Section */}
            <div className="w-full aspect-[380/239] rounded-[10px] overflow-hidden relative mb-5">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Content Section */}
            <div className="flex flex-col gap-[10px] px-[10px] flex-1">
              <span className="font-semibold text-[14px] leading-[14px] tracking-[1.4px] uppercase text-black/65">
                {blog.category}
              </span>
              <h3 className="font-medium text-[25px] leading-[30px] text-black">
                {blog.title}
              </h3>
            </div>

            {/* Date Section */}
            <div className="px-[10px] mt-8">
              <span className="text-[15px] leading-[15px] text-black/65 whitespace-nowrap">
                {blog.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
