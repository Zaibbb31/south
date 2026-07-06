"use client";

import React from "react";

export const DesktopBlogs = () => {
  const blogs = [
    {
      category: "DESIGN",
      title: "The Importance of Mobile-First Design in 2005",
      date: "Feb 26, 2001",
      image: "/photoshoot.jpg",
      isFeatured: true
    },
    ...Array(4).fill(null).map(() => ({
      category: "DESIGN",
      title: "The Importance of Mobile-First Design in 2005",
      date: "Feb 26, 2001",
      image: "/photoshoot.jpg",
      isFeatured: false
    }))
  ];

  return (
    <section className="w-full bg-[#fffff0] pb-32 pt-0 px-8 lg:px-[90px] flex flex-col relative z-10 overflow-hidden">
      
      {/* Top Section: Title */}
      <div className="flex flex-col w-full mb-16 lg:mb-24 items-center relative pt-16 gap-8 md:gap-10">
        <div className="w-full h-px bg-black/10 relative" />
        <h2 className="text-[50px] md:text-[80px] lg:text-[130px] font-semibold text-black text-center w-full leading-[1.1] lg:leading-[130px] tracking-tight px-4 mt-12 lg:mt-16">
          BLOGS & ARTICLES
        </h2>
      </div>

      {/* Blogs Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mb-16">
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-[15px] w-full p-8 lg:p-10 flex relative group cursor-pointer hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border border-black/5 ${blog.isFeatured ? 'md:col-span-2 flex-row items-center justify-between h-[400px] xl:h-[480px]' : 'col-span-1 flex-col justify-between h-[400px] xl:h-[480px]'}`}
          >
            {blog.isFeatured ? (
              // Featured Layout (Spans 2 columns)
              <>
                <div className="flex flex-col h-full justify-between w-[50%] z-10 py-2">
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold text-[18px] xl:text-[20px] tracking-[2px] uppercase text-black transition-colors duration-500 group-hover:text-[#ff5100]">
                      {blog.category}
                    </span>
                    <h3 className="font-medium text-[36px] xl:text-[45px] leading-[1.2] text-black pr-4 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2">
                      {blog.title}
                    </h3>
                  </div>
                  <span className="text-[24px] xl:text-[28px] text-black/65">
                    {blog.date}
                  </span>
                </div>
                
                <div className="w-[45%] h-[calc(100%-20px)] rounded-[15px] overflow-hidden relative shadow-sm group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] group-hover:scale-[1.08] group-hover:-translate-y-2 group-hover:-rotate-1 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mr-2 z-20">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]" 
                  />
                  {/* Subtle overlay to enhance the slick feel */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-[600ms] pointer-events-none" />
                </div>
              </>
            ) : (
              // Standard Layout (1 column)
              <>
                {/* Top Section */}
                <div className="flex flex-col gap-3 z-10 py-2">
                  <span className="font-semibold text-[18px] xl:text-[20px] tracking-[2px] uppercase text-black transition-colors duration-500 group-hover:text-[#ff5100]">
                    {blog.category}
                  </span>
                  <h3 className="font-medium text-[28px] xl:text-[35px] leading-[1.2] text-black pr-4 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2">
                    {blog.title}
                  </h3>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end mt-auto z-10 w-full relative">
                  <span className="text-[24px] xl:text-[28px] text-black/65 whitespace-nowrap pb-4">
                    {blog.date}
                  </span>
                  
                  <div className="w-[50%] h-[120px] xl:h-[150px] rounded-[15px] overflow-hidden relative shadow-sm translate-y-4 translate-x-4 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] group-hover:scale-[1.25] group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:-rotate-2 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-20">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.15] transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]" 
                    />
                    {/* Subtle overlay to enhance the slick feel */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-[600ms] pointer-events-none" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="w-full flex justify-center mt-4">
        <button className="bg-[#ff5100] text-white font-medium text-[18px] xl:text-[20px] px-10 py-4 rounded-[82px] hover:bg-[#ff5100]/90 transition-colors duration-300 shadow-[0_4px_14px_rgba(255,81,0,0.4)] hover:shadow-[0_6px_20px_rgba(255,81,0,0.6)] transform hover:-translate-y-1">
          Load More
        </button>
      </div>

    </section>
  );
};
