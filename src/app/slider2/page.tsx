"use client";

import React, { useState } from "react";
import { motion} from "framer-motion";

export default function AboutPage() {
  const [activeLogic, setActiveLogic] = useState<number | null>(null);

  const skills = [
    { title: "Logical Architecture", desc: "Crafting scalable, clean modular systems.", icon: "01" },
    { title: "Next.js Engineering", desc: "Optimizing SSR/SSG for peak performance.", icon: "02" },
    { title: "Motion Mechanics", desc: "Designing fluid, meaningful interactions.", icon: "03" },
    { title: "Systems Thinking", desc: "Dissecting challenges into efficient flows.", icon: "04" },
  ];

  return (
    
    <main className="min-h-screen bg-[#FBFBFB] overflow-hidden selection:bg-[#b684ff] selection:text-white">
      
      {/* 1. DYNAMIC BACKGROUND CANVAS */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f2937" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
     
      </div>

      <section className="container mx-auto px-6 pt-24 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-20 items-center">
          
          {/* LEFT: THE KINETIC HEADLINE */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-4"
          >

            <h1 className="text-7xl md:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter">
              <span className="relative inline-block overflow-hidden">
                Logical
                <motion.span 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute bottom-0 left-0 h-10 w-full bg-[#b684ff]/20 -z-10"
                />
              </span>
              <br />
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400"
              >
                Creator.
              </motion.span>
            </h1>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8 }}
              className="relative max-w-sm pt-8 border-t border-gray-100"
            >
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                I am a software architect focused on the intersection of structural logic and high-end aesthetics.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: INTERACTIVE DASHBOARD */}
          <div className="w-full relative">
            <div className="absolute -top-10 -right-10 w-full h-full border-[1px] border-dashed border-[#b684ff]/30 rounded-[2rem] -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-[#b684ff]/5 transition-all cursor-pointer group overflow-hidden"
                  onMouseEnter={() => setActiveLogic(index)}
                  onMouseLeave={() => setActiveLogic(null)}
                >
                  <span className="absolute -top-5 -left-5 text-8xl font-black text-gray-50 font-mono group-hover:text-[#b684ff]/5 transition-colors">
                    {skill.icon}
                  </span>
                  <div className="relative z-10 flex items-center gap-4 mb-6">
                    <div 
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all"
                      style={{ 
                        borderColor: activeLogic === index ? "#b684ff" : "#e5e7eb",
                        backgroundColor: activeLogic === index ? "#b684ff" : "white"
                      }}
                    >
                      {activeLogic === index && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-[#b684ff] font-bold text-sm tracking-widest">FUNC {skill.icon}</span>
                  </div>
                  <h4 className="relative z-10 font-bold text-gray-900 text-lg mb-2">{skill.title}</h4>
                  <p className="relative z-10 text-sm text-gray-500 leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLIED STATS SECTION */}
      <section className="bg-black py-24 text-white relative">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Logic Score", val: "99%" },
            { label: "UI Polish", val: "High" },
            { label: "Coffee/Line", val: "1:50" },
            { label: "Current Focus", val: "Next 15" }
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i}
            >
              <p 
                className="text-5xl font-black mb-2" 
                style={{ color: i % 2 === 0 ? "#b684ff" : "white" }}
              >
                {stat.val}
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
           
    </main>
  );
}