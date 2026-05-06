"use client";

import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  { title: "Best Deals", img: null, isDeal: true },
  { title: "Open-Ear", img: "/images/a1.png" },
  { title: "Earbuds", img: "/images/a2.png" },
  { title: "Headphones", img: "/images/a3.png" },
  { title: "Speakers", img: "/images/a4.png" },
  { title: "Head", img: "/images/a5.png" },
  { title: "Open-Ear", img: "/images/a1.png" },
  { title: "Earbuds", img: "/images/a2.png" },
  { title: "Headphones", img: "/images/a3.png" },
  { title: "Speakers", img: "/images/a4.png" },
  { title: "Head", img: "/images/a5.png" },
];

export default function CategorySlider() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = 250;

    container.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative py-6 mx-3 sm:mx-4 lg:mx-6">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Shop by categories
        </p>

        <button className="my-2 sm:my-4 bg-white text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
          <span>View All</span>

          <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white hover:bg-[#0069AF] hover:text-white shadow items-center justify-center cursor-pointer transition-all duration-300"
      >
        <ChevronLeft size={20} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white hover:bg-[#0069AF] hover:text-white shadow items-center justify-center cursor-pointer transition-all duration-300"
      >
        <ChevronRight size={20} />
      </button>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="
          flex gap-4 sm:gap-6
          overflow-x-auto
          scrollbar-hide
          px-1 sm:px-12
          scroll-smooth
          snap-x snap-mandatory
        "
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="
              snap-start
              min-w-[140px]
              sm:min-w-[160px]
              lg:min-w-[180px]
              bg-[#f6f6f6]
              rounded-2xl
              p-4 sm:p-5
              flex flex-col items-center justify-center
              shadow-sm
              group
              shrink-0
            "
          >
            {/* IMAGE / DEAL */}
            {item.isDeal ? (
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                Deals.
              </div>
            ) : (
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-16 h-16
                  sm:w-20 sm:h-20
                  rounded-full
                  object-cover
                  group-hover:scale-105
                  cursor-pointer
                  transition-transform
                  duration-700
                "
              />
            )}

            {/* TITLE */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
