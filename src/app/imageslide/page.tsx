"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoIAm() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ backgroundColor: '#b684ff' }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* LEFT: IMAGE SECTION WITH FLOATING ANIMATION */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)]"
            >
              <Image
                src="/portf/exp.jpg" // Replace with your image
                alt="Who I am"
                width={600}
                height={700}
                className="w-full h-[600px] object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
              
              {/* Glassmorphism Experience Card */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 right-8 bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-xl"
              >
                <span className="block text-3xl font-black text-[#b684ff]">01+</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Years Experience</span>
              </motion.div>
            </motion.div>

            {/* Decorative Square Frame behind image */}
            <div 
              className="absolute -bottom-6 -left-6 w-full h-full border-2 rounded-3xl -z-0 opacity-20"
              style={{ borderColor: '#b684ff' }}
            />
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="flex flex-col space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase bg-white border border-gray-100 shadow-sm text-gray-400 mb-6">
                Discovery
              </span>
              <h2 className="text-5xl md:text-5xl font-black text-gray-900 tracking-tighter leading-[0.9]">
                Who
                <span style={{ color: '#b684ff' }}> I Am.</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                I am a Digital Architect based in the UAE, specializing in crafting high-performance 
                web experiences that leave a lasting impression.
              </p>
              <p className="text-gray-500 leading-relaxed">
                My approach combines <span className="text-black font-semibold">technical precision</span> with 
                <span className="text-black font-semibold"> creative intuition</span>. I believe that every pixel 
                has a purpose and every interaction should feel natural.
              </p>
            </motion.div>

            {/* Interactive Skills Chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {["Full Stack", "Creative Dev", "Software Architecture"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -5, backgroundColor: "#b684ff", color: "#fff" }}
                  className="px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-bold cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Magnetic-style Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 rounded-full text-white font-black text-lg shadow-2xl hover:shadow-[#b684ff]/40 transition-shadow"
                style={{ backgroundColor: '#b684ff' }}
              >
                Let&apos;s Build Together
                <motion.svg 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-5 h-5 ml-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}