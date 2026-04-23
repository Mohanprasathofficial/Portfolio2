'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    heading: "Accessibility Checker",
    topic: "Check Your Website's Accessibility",
    description: "Ensure your website meets all accessibility standards and improve user experience for everyone.",
    image: "/banner4.jpg",
    buttons: [{ text: "Learn More", link: "#" }]
  },
  {
    heading: "Enhance Your Content",
    topic: "Ensure Inclusive Web Experiences",
    description: "Build web content that resonates with everyone and ensure inclusivity across all devices.",
    image: "/banner5.jpg",
    buttons: [{ text: "Our Services", link: "#" }, { text: "Contact Us", link: "#" }]
  },
  {
    heading: "Inclusive Design",
    topic: "Build Websites for Everyone",
    description: "Design with accessibility in mind and make the web a better place for all users.",
    image: "/banner6.jpg",
    buttons: [{ text: "Contact Us", link: "#" }]
  }
];

export default function Slider() {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-900 text-white xl:-mt-32">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-cover bg-center h-full w-full flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0  opacity-50"></div>

              {/* Content */}
              <div className="container mx-auto relative z-10 flex flex-col items-start justify-center h-full text-white xl:px-16 xl:mr-16 ">
                <h6 className="text-lg font-medium uppercase tracking-wide mb-4 ">{slide.heading}</h6>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight xl:w-6/12">{slide.topic}</h1>
                <p className="mt-4 text-lg md:text-xl leading-relaxed xl:w-6/12">{slide.description}</p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  {slide.buttons.map((button, btnIndex) => (
                    <a key={btnIndex} href={button.link} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute left-6 top-1/2 -translate-y-1/2 p-6 bg-white backdrop-blur-md rounded-full shadow-md hover:bg-white/50 transition-all duration-300">
      <ChevronLeft size={32} />
      </button>

      <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 p-6 bg-white rounded-full hover:bg-white/40 transition">
        <ChevronRight size={30} />
      </button>
    </div>
  );
}



