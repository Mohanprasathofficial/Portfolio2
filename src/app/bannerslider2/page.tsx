"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-140px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(140px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 2.2s ease-out both;
        }

        .animate-slideInRight {
          animation: slideInRight 2.2s ease-out both;
        }
      `}</style>

      <div
        ref={ref}
        className="relative xl:h-screen lg:h-screen md:h-[600px] h-[760px] overflow-hidden bg-gray-900 text-white z-0"
      >
        <div
          className="h-screen w-full bg-cover bg-center bg-fixed relative"
          style={{
            backgroundImage: `url('/portf/keybanner.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex items-center justify-between h-full px-8 max-w-7xl mx-auto">
            
            {/* LEFT CONTENT */}
            <div
              className={`w-1/2 flex flex-col justify-center pl-12 ${
                show ? "animate-slideInLeft" : "opacity-0"
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Mohanprasath S R
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-white/90">
                Software Developer
              </h2>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div
              className={`w-1/2 flex justify-end items-end h-full ${
                show ? "animate-slideInRight" : "opacity-0"
              }`}
            >
              <div className="relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]">

                {/* BACKGROUND IMAGE */}
                <img
                  src="/portf/mybackimg.png"  // <-- change this to your image
                  alt="mybackimg"
                  className="absolute bottom-0 right-8 mb-24 xl:h-[520px] object-contain z-0 opacity-100  scale-110"
                />

                {/* MAIN IMAGE */}
                <img
                  src="/portf/mohandanner.png"
                  alt="Mohan Danner"
                  className="relative xl:h-[650px] object-contain z-10"
                />

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}