"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Software", href: "/software" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ backgroundColor: '#b684ff' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16 border-b border-white/10">
          
          {/* LEFT: BRAND & MISSION */}
          <div className="space-y-8">
            <Image
              src="/portf/logo.png"
              alt="Logo"
              width={140}
              height={40}
              className=""
            />
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              Architecting digital logic with a focus on 
              <span className="text-white font-semibold"> performance</span>, 
              <span className="text-white font-semibold"> scalability</span>, and 
              <span className="text-white font-semibold"> creative excellence</span>.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-500 hover:text-[#b684ff] transition-colors font-bold text-sm tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: NAVIGATION & CONTACT CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">Navigation</h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-gray-300 hover:text-white transition-all"
                    >
                      <span className="h-[1px] w-0 bg-[#b684ff] mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Glassmorphism Contact Card */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-[#b684ff] mb-4">Start a Project</h4>
              <p className="text-sm text-gray-400 mb-6">Have a logical challenge for me?</p>
              <a 
                href="mailto:hello@yourdomain.com"
                className="block w-full text-center py-3 rounded-xl bg-[#b684ff] text-white font-bold hover:bg-[#a573ef] transition-all active:scale-95"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © {currentYear} All Rights Reserved. Built with <span className="text-[#b684ff]">Logic</span>.
          </p>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-500 text-xs font-mono tracking-tighter uppercase">System Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}