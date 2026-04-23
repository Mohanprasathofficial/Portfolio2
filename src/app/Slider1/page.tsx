"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { name: "Next.js", src: "/portf/next.png" },
  { name: "React.js", src: "/portf/react.png" },
  { name: "HTML5", src: "/portf/html.png" },
  { name: "Tailwind CSS", src: "/portf/css.png" },
  { name: "Java", src: "/portf/java.png" },
  { name: "Git", src: "/portf/git.png" },
  { name: "AWS", src: "/portf/aws.png" },
  { name: "DevOps", src: "/portf/devops.png" },
];

export default function LogoSlider() {
  return (
    <section className="py-4 bg-[#FCFCFC] overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-[#b684ff] font-bold tracking-[0.4em] uppercase text-xs mb-4">
          Tech Stack Logic
        </h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#b684ff] to-transparent mx-auto" />
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-12 items-center">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-10 flex flex-col items-center justify-center group/logo"
              style={{ 
                animation: `floating 4s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s` 
              }}
            >
              <div className="relative w-24 h-24 flex items-center justify-center p-4 rounded-2xl transition-all duration-500 group-hover/logo:bg-white group-hover/logo:shadow-[0_20px_50px_rgba(182,132,255,0.2)]">
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#b684ff] opacity-0 group-hover/logo:opacity-5 blur-2xl transition-opacity duration-500 rounded-full" />
                
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover/logo:grayscale-0 transition-all duration-500 transform group-hover/logo:scale-110"
                />
              </div>
              
              <span className="mt-4 text-[9px] font-black tracking-[0.2em] text-gray-300 group-hover/logo:text-[#b684ff] transition-colors duration-300 uppercase">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Depth Fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FCFCFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FCFCFC] to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}