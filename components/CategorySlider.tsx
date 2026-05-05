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
    <div className="relative py-6 mx-4">
      <div className="flex items-center justify-between">
        <p className="text-4xl font-semibold mb-6">Shop by categories</p>

        <button className="my-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
          <span>View All</span>
          <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
            <ArrowUpRight size={16} />
          </span>
        </button>

      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white hover:bg-[#0069AF] hover:text-white shadow flex items-center justify-center cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white hover:bg-[#0069AF] hover:text-white shadow flex items-center justify-center cursor-pointer"
      >
        <ChevronRight size={20} />
      </button>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-12"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="min-w-[180px] bg-[#f6f6f6] rounded-2xl p-5 flex flex-col items-center justify-center shadow-sm group"
          >
            {/* IMAGE / DEAL */}
            {item.isDeal ? (
              <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold">
                Deals.
              </div>
            ) : (
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 rounded-full object-cover group-hover:scale-105 cursor-pointer transition-transform duration-800"
              />
            )}

            {/* TITLE */}
            <p className="mt-4 text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
