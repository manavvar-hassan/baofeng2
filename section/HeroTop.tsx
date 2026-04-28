"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title:
      "UV-9700 UHF Single Band Radio Licence Free Walkie Talkie Frequency 400/470MHz Power of 5w/10w",
    desc: "Reliable Long-Range Communication for Extreme Outdoor Adventures",
    video: "/videos/wa3.mp4",
  },
  {
    id: 2,
    title:
      "UV-5R Compact Communication Dual Band Radio Licence Free Walkie Talkie Frequency 136-174.20MHz/400/470MHz Power of 4W",
    desc: " Supports channel/frequency modes and manual programming.Supports both DMR digital and analog modes.",
    video: "/videos/wa2.mp4",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2">
      <div className="relative w-full aspect-[16/7] min-h-[205px] max-h-[650px] overflow-hidden cursor-pointer">
        {/* 🔥 Slides (stacked) */}
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* VIDEO */}
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* TEXT */}
            <div className="absolute z-20 left-4 md:left-16 -bottom-3 md:top-1/2 -translate-y-1/2 text-white lg:max-w-lg">
              <h1 className="text-lg sm:text-xl md:text-3xl font-semibold mb-2 md:mb-4 line-clamp-1 md:line-clamp-none">
                {slide.title}
              </h1>
              <p className="hidden md:block text-base md:text-lg mb-2 md:mb-6 opacity-80">
                {slide.desc}
              </p>
              <button className="px-3 md:px-6 py-1 md:py-3 text-xs  md:text-base bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
