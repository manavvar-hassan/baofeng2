"use client";

import { MoveRight } from "lucide-react";
import { useState } from "react";

const tags = [
  "New Arrivals",
  "Licence Free",
  "License Free On Instagram",
  "Licence Radios",
  "Microphones",
  "Battery",
  "Charger",
  "Earphone",
  "Antenna",
  "Belt Clips",
  "Trending Products",
  "News Update",
  "Belt Clips",
];

export default function TrendingSearch() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (i: number) => {
    setActiveIndex(i === activeIndex ? null : i);
  };

  return (
    <div className="relative mx-4 lg:mx-8 mt-8 rounded-xl p-6 bg-[#DCEAF4] overflow-hidden">

      <div className="relative z-10">
        <h2 className="text-lg font-semibold mb-4">Trending Search</h2>

        {/* 📱 MOBILE SLIDER */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar sm:hidden snap-x snap-mandatory">
          {tags.map((tag, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className="snap-start flex-shrink-0 "
            >
              <div
                className={`relative inline-flex items-center justify-center px-6 py-3 border-2 border-[#9ACFF2] rounded-full shadow-md transition-all duration-300 ${
                  activeIndex === i ? "bg-[#0069AF]" : "bg-[#DCEAF4]"
                }`}
              >
                {/* ICON */}
                <span
                  className={`transition-all duration-300 ${
                    activeIndex === i ? "text-white mr-2" : "hidden"
                  }`}
                >
                  <MoveRight size={16} />
                </span>

                {/* TEXT */}
                <span
                  className={`transition-all duration-300 ${
                    activeIndex === i ? "text-white" : "text-black"
                  }`}
                >
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 💻 DESKTOP (HOVER SAME) */}
        <div className="hidden sm:flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <a
              key={i}
              href="#_"
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-[#F3FBFF] rounded-full shadow-sm hover:bg-[#9ACFF2]/50 hover:text-white group"
            >
              <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform  ease">
                {tag}
              </span>
              <span className="relative invisible">{tag}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}