"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SimpleImageSection() {
  return (
    <section className="bg-black py-20  flex flex-col items-center">
      {/* SECTION HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
          Campus <span className="text-[#b684ff]">Overview</span>
        </h2>
        <div className="h-1 w-20 bg-[#b684ff] mx-auto mt-4" />
      </div>

      {/* THE IMAGE CONTAINER */}
      <div className="relative w-full max-w-7xl aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
        <img 
          src="/portf/grouppic.jpeg" 
          alt="EGS Pillay Engineering College"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        
        {/* Subtle Bottom Overlay for Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-[#b684ff] font-mono text-[10px] tracking-[0.3em] uppercase mb-1">Location</p>
          <h3 className="text-xl font-bold tracking-tight">Nagapattinam, Tamil Nadu</h3>
        </div>
      </div>
      
      {/* Optional Caption */}
      <p className="mt-6 text-gray-500 text-xs font-light italic max-w-lg text-center">
        "A premier institution committed to providing quality technical education and fostering innovation."
      </p>
    </section>
  );
}