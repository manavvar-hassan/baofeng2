"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const categories = [
  { name: "UV-82", img: "/images/p1.png" },
  { name: "Chargers", img: "/images/p2.png" },
  { name: "BF-888s", img: "/images/p3.png" },
  { name: "UV-13PRO", img: "/images/p4.png" },
  { name: "Extra 1", img: "/images/p1.png" },
  { name: "Extra 2", img: "/images/p2.png" },
];

export default function TopCategoriesCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 🔁 Infinite effect (duplicate items)
  const loopItems = [...categories, ...categories];

  // ⏳ Auto scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.scrollBy({ left: 150, behavior: "smooth" });

      // reset for infinite illusion
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🎮 Buttons
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  // 🖱️ Drag support
  const handleMouseDown = (e: any) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: any) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-[#F3FBFF]/90 rounded-2xl p-4 md:p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Top Categories</h2>
          <span className="text-sm font-semibold text-[#0069AF] cursor-pointer">
            View All
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-6 h-6 rounded border border-[#D7E9F2] bg-white flex items-center justify-center shadow hover:scale-110 transition rotate-180 cursor-pointer"
          >
            <ChevronRight size={16} color="#0069AF" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-6 h-6 rounded border border-[#D7E9F2] bg-white flex items-center justify-center shadow hover:scale-110 transition cursor-pointer"
          >
            <ChevronRight size={16} color="#0069AF" />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {loopItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-1/3 md:w-1/5 flex flex-col items-center gap-2"
          >
            <Image
              width={150}
              height={150}
              src={item.img}
              alt=""
              className="w-20 h-20 object-contain"
            />
            <p className="text-sm font-medium text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
