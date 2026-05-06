"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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

    if (!el) return;

    const isMobile = window.innerWidth < 768;

    const animation = gsap.to(el, {
      xPercent: -50,
      duration: isMobile ? 10 : 7, // 🔥 faster on mobile
      ease: "linear",
      repeat: -1,
    });

    return () => animation.kill();
  }, []);

  return (
    <section className="px-3 sm:px-5 lg:px-8 py-10 sm:py-16 overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Shop By Instagram
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto">
          Elevate your wardrobe with fresh finds today!
        </p>
      </div>

      {/* MARQUEE */}
      <div
        ref={marqueeRef}
        className="flex gap-3 sm:gap-4 whitespace-nowrap"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="
              relative
              group
              rounded-xl
              sm:rounded-2xl
              overflow-hidden
              cursor-pointer

              min-w-[180px]
              sm:min-w-[220px]

              bg-[#F5F7F8]
            "
          >
            {/* IMAGE */}
            <img
              src={img}
              alt=""
              className="
                w-[180px]
                h-[180px]

                sm:w-[220px]
                sm:h-[220px]

                object-cover
                transition-transform
                duration-500

                md:group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-black/40
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
                flex items-center justify-center
              "
            >
              <div
                className="
                  bg-white
                  rounded-full
                  p-2 sm:p-3
                  scale-75
                  group-hover:scale-100
                  transition
                  duration-300
                "
              >
                <img
                  src="/icons/instagram.png"
                  alt=""
                  className="w-7 sm:w-10"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}