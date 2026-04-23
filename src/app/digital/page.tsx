"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboveFooter() {
  const contactMethods = [
    { icon: "/portf/linkedin.png", link: "https://www.linkedin.com/in/mohanprasath-s-r-9b4033296?utm_source=share_via&utm_content=profile&utm_medium=member_android", name: "LinkedIn" },
    { icon: "/portf/gmail.png", link: "srmprasath1304@gmail.com", name: "Email" },
    { icon: "/portf/instagram.png", link: "https://www.linkedin.com/in/mohanprasath-s-r-9b4033296?utm_source=share_via&utm_content=profile&utm_medium=member_android", name: "Instagram" },
    { icon: "/portf/whatsapp.png", link: "https://wa.me/7708391414", name: "WhatsApp" },
    { icon: "/portf/phone.png", link: "tel:+7708391414", name: "Phone" },
    { icon: "/portf/github.png", link: "https://github.com/yourgit", name: "GitHub" },
  ];

  return (
    <section className="relative py-24 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-[#121212] rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl border border-white/5">
          
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="innerGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#innerGrid)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* LEFT SIDE content */}
            <div className="space-y-8">
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-block font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
                  style={{ color: "#007AFF" }} 
                >
                  Get in Touch
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
                  Let&apos;s build <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #fff" }}>the future.</span>
                </h2>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                Ready to transform your logical concepts into high-performance digital reality? Choose your preferred way to connect.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 text-gray-500 font-mono text-xs">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: "#007AFF" }}></span>
                ACTIVE & AVAILABLE FOR PROJECTS
              </div>
            </div>

            {/* RIGHT SIDE: SOCIAL & CONTACT GRID */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-3xl"
            >
              <div className="grid grid-cols-3 gap-6 mb-10">
                {contactMethods.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl border border-white/5 bg-white/5 transition-all group"
                  >
                    <div className="w-10 h-10 mb-3 flex items-center justify-center">
                      <Image
                        src={item.icon} 
                        alt={item.name} 
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* HIRE ME BUTTON */}
              <motion.a 
                href="mailto:your-email@example.com"
                whileHover={{ scale: 1.02, backgroundColor: "#a370f7" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl text-white font-black shadow-xl transition-all"
                style={{ backgroundColor: "#b684ff" }}
              >
                <Image
                  src="/portf/zap.png" 
                  alt="Zap" 
                  className="w-5 h-5 object-contain" 
                />
                HIRE ME NOW
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}