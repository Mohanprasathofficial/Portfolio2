"use client";

import React from "react";
import { motion } from "framer-motion";
import IndexNavbar from "@/navbar/IndexNavbar";
import IndexNavbar2 from "@/navbar/IndexNavbar2";
import Grouppic from "../grouppic/page";
import Image from "next/image";


export default function SchoolBanner() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative min-h-screen w-full bg-black">
        
        {/* NAVBAR */}
        <nav className="relative z-50">
          <div className="hidden lg:block">
            <IndexNavbar />
          </div>
          <div className="block lg:hidden">
            <IndexNavbar2 />
          </div>
        </nav>

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-20" />
          
          <Image
            src="/portf/NHSS.jpeg" 
            alt="NHSS"
            className="w-full h-full object-cover filter blur-[2px] grayscale-[30%] brightness-[50%]"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-30 h-screen flex flex-col items-center justify-center text-center px-6">
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter"
          >
            EGS <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px white" }}
            >
             Pillay Engineering College
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[#b684ff] font-mono text-xs tracking-[0.5em] mt-4 uppercase"
          >
            An Autonomous
          </motion.p>
        </div>
      </section>

      {/* ================= NEXT SECTION ================= */}
      <section className="w-full bg-white ">
        <Grouppic />
      </section>
    </>
  );
}