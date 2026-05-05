"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Camera } from "lucide-react";

const images = [
  "/images/insta/insta1.png",
  "/images/insta/insta2.png",
  "/images/insta/insta3.png",
  "/images/insta/insta4.png",
  "/images/insta/insta5.png",
  "/images/insta/insta6.png",
];

export default function InstagramScroll() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = marqueeRef.current;

    const animation = gsap.to(el, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    return () => animation.kill();
  }, []);

  return (
    <section className="px-8 py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">Shop By Instagram</h2>
        <p className="text-gray-500 text-sm">
          Elevate your wardrobe with fresh finds today!
        </p>
      </div>

      {/* 🔥 Marquee */}
      <div
        ref={marqueeRef}
        className="flex gap-4 whitespace-nowrap"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden cursor-pointer min-w-[220px] bg-[#F5F7F8]"
          >
            {/* Image */}
            <img
              src={img}
              className="w-[220px] h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <div className="bg-white rounded-full p-3 scale-75 group-hover:scale-100 transition duration-300">
                <img src="/icons/instagram.png" className="w-10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
