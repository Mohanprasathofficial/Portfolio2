"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import IndexNavbar from "@/navbar/IndexNavbar";
import IndexNavbar2 from "@/navbar/IndexNavbar2";
import Footer from "../footer";

export default function SchoolPortfolio() {
  const containerRef = useRef(null);

  // Scroll logic for the Journey Line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathScaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const educationData = [
    {
      period: "Early Foundation",
      school: "Devi Nursery & Primary",
      location: "Mannargudi",
      grades: "LKG & UKG",
      img: "/portf/devi.jpeg",
      text: "Started my journey here in Mannargudi, building the first blocks of my education."
    },
    {
      period: "Primary Excellence",
      school: "Annai Velankanni Matric",
      location: "Vettaikaraniruppu",
      grades: "1st to 3rd Standard",
      img: "/portf/annai.jpeg",
      text: "A move to Vettaikaraniruppu that introduced me to a new environment and academic rigor."
    },
    {
      period: "Formative Years",
      school: "Government High School",
      location: "Kovilpathu, Nagapattinam",
      grades: "3rd to 10th Standard",
      img: "/portf/gov_school.jpg",
      text: "A crucial 7-year chapter in Nagapattinam district where I grew significantly."
    },
    {
      period: "Higher Secondary",
      school: "National Higher Secondary",
      location: "Mannargudi",
      grades: "+1 & +2 (HSC)",
      img: "/portf/NHSS.jpeg",
      text: "Currently finishing my schooling at this prestigious 130-year-old institution back in Mannargudi."
    }
  ];

  return (
    <main className="bg-black">
      {/* SECTION 1: BANNER (Keeping your working code) */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <nav>
          <div className="hidden lg:block"><IndexNavbar /></div>
          <div className="block lg:hidden"><IndexNavbar2 /></div>
        </nav>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-20" />
          <img 
            src="/portf/NHSS.jpeg" 
            className="w-full h-full object-cover filter blur-[2px] grayscale-[30%] brightness-[50%]" 
            alt="NHSS"
          />
        </div>
        <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter">
            NATIONAL <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>Higher Secondary School</span>
          </motion.h1>
          <p className="text-[#b684ff] font-mono text-xs tracking-[0.5em] mt-4 uppercase">Legacy Since 1894</p>
        </div>
      </section>

      {/* SECTION 2: FIXED LEFT-RIGHT JOURNEY */}
      <section ref={containerRef} className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto relative">
          
          {/* THE CENTER LINE (Desktop: Center | Mobile: Left) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[1px] h-full bg-white/10" />
          
          {/* THE MOVABLE LINE */}
          <motion.div 
            style={{ scaleY: pathScaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-[#b684ff] z-10 shadow-[0_0_20px_#b684ff]"
          />

          <div className="space-y-24">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center w-full">
                  
                  {/* Container that handles the left/right split */}
                  <div className={`flex w-full items-center justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* 1. Content Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="w-full md:w-[45%] ml-12 md:ml-0 group"
                    >
                      <div className="bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#b684ff]/40 transition-all duration-500 shadow-2xl">
                        <div className="h-48 overflow-hidden">
                          <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="school" />
                        </div>
                        <div className="p-8">
                          <div className="text-[#b684ff] text-[10px] font-bold tracking-widest uppercase mb-2">{item.period}</div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#b684ff] transition-colors">{item.school}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                          <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                            <span className="text-xs text-gray-400 font-mono">{item.location}</span>
                            <span className="text-[10px] bg-white/5 px-3 py-1 rounded-full text-white">{item.grades}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* 2. Central Dot on the line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#b684ff] z-20 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="w-1.5 h-1.5 bg-[#b684ff] rounded-full"
                      />
                    </div>

                    {/* 3. Spacer for the other side */}
                    <div className="hidden md:block w-[45%]" />

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}