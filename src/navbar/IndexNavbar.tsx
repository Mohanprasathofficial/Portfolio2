"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function IndexNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "uppercase tracking-widest relative group cursor-pointer flex items-center gap-1";

  // Handlers to ensure smooth transitions
  const handleMouseEnter = () => setIsEducationOpen(true);
  const handleMouseLeave = () => setIsEducationOpen(false);

  return (
    <section
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 ">
        <div
          className={`flex justify-between items-center ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {/* LOGO */}
          <a href="/homepage">
            <Image
              src="/portf/logo.png"
              alt="logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </a>

          {/* MENU */}
          <div className="flex gap-6 md:gap-10 items-center text-sm md:text-base relative">
            <Link href="/" className={linkStyle}>
              ABOUT
              <span className="underline-anim"></span>
            </Link>

            <Link href="/" className={linkStyle}>
              SOFTWARE
              <span className="underline-anim"></span>
            </Link>

            {/* HOVER-TO-OPEN EDUCATION DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`${linkStyle}  pr-2`}>
                Education
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${
                    isEducationOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="underline-anim bottom-2"></span>
              </button>

              {/* DROPDOWN MENU */}
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[500px] transition-all duration-300 origin-top ${
                  isEducationOpen 
                    ? "opacity-100 visible translate-y-0" 
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {/* Smoke Theme Container */}
                <div className="mt-2 bg-[#F5F5F5]/90 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden p-2">
                  
                  {/* Dropdown Items */}
                  <a
                    href="/primary"
                    className="group/item flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray/100 hover:shadow-sm border border-transparent hover:border-gray-200"
                  >
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                        <Image
                          src="/portf/school.png"
                          alt="Secondary Education"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-xs font-bold text-white">1</span>
                        </div>
                    </div>
                    <div>
                      <h4 className="font-bold group-hover/item:text-blue-600 text-base"style={{ color: '#b684ff' }}>
                        Primary Education
                      </h4>
                      <p className="text-sm text-gray-300">Foundation learning programs</p>
                    </div>
                  </a>

                  <a
                    href="/college"
                    className="group/item flex items-center gap-4 p-4 mt-1 rounded-xl transition-all duration-300 hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-gray-200"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                        <Image
                          src="/portf/college.png"
                          alt="Secondary Education"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                           <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-xs font-bold text-white">2</span>
                        </div>
                    </div>
                    <div>
                      <h4 className="font-bold  group-hover/item:text-emerald-600 text-base"style={{ color: '#b684ff' }}>
                        Higher Study
                      </h4>
                      <p className="text-sm text-gray-300">Advanced skill development</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <Link href="/" className={linkStyle}>
              INFRASTRUCTURE
              <span className="underline-anim"></span>
            </Link>

            <Link href="/" className={linkStyle}>
              CONTACT
              <span className="underline-anim"></span>
            </Link>

            {/* BUTTON */}
            <Link href="/">
              <button
                className={`border px-6 py-2 text-sm font-medium tracking-wider transition-all duration-300 ${
                  scrolled
                    ? "text-black border-black hover:bg-black hover:text-white"
                    : "text-white border-white hover:bg-white hover:text-black"
                }`}
              >
                ENQUIRE
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .underline-anim {
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background-color: currentColor;
          transition: width 0.3s ease;
        }

        .group:hover .underline-anim {
          width: 100%;
        }
      `}</style>
    </section>
  );
}