"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const items = [
  {
    title: "BAOFENG UV-5R Walkie Talkie VHF 136-174hz UHF",
    img: "/images/feature.png",
  },
  {
    title: "BF-33C UHF Compact Communication Radio Licence Free Walkie Talkie",
    img: "/images/hd1.png",
  },
  {
    title: "Baofeng BF-888s Licence Free Walkie Talkie",
    img: "/images/hd2.png",
  },
];

export default function LicenceFreeSection() {
  const [hovered, setHovered] = useState(null);

  const imageRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      // 🔥 smooth follow (lerp)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="mx-4 px-6 py-16 grid md:grid-cols-2 gap-10 items-center relative">
      {/* LEFT CONTENT */}
      <div className="relative">
        <h2 className="text-4xl font-semibold leading-tight">
          Gear Up for Adventure: Explore Our Latest Collection
        </h2>

        <p className="mt-4 text-gray-500">
          Discover the top-rated Models, perfect for every outdoor enthusiast.
        </p>

        {/* LIST */}
        <div className="mt-10 space-y-6">
          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(item.img)}
              onMouseLeave={() => setHovered(null)}
              className="flex justify-between items-center border-b pb-3 cursor-pointer group"
            >
              <span className="text-lg group-hover:text-black transition">
                {item.title}
              </span>

              <span className="text-sm flex items-center gap-1">→</span>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
          <span>View All Collection</span>

          <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <img
          src="/images/avatar1.png"
          alt=""
          className="w-full h-[500px] object-cover rounded-2xl"
        />

        {/* CARD */}
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 flex justify-between items-center shadow">
          <div>
            <p className="text-sm">Double-button trench coat</p>
            <p className="text-sm font-semibold">$219.99</p>
          </div>

          <button className="mt-6 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
            <span>Buy Now</span>

            <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </div>

      {/* 🔥 CURSOR FOLLOW IMAGE */}
      {hovered && (
        <div
          ref={imageRef}
          className="fixed top-0 left-0 pointer-events-none z-50"
        >
          <img
            src={hovered}
            alt=""
            className="w-[180px] h-[240px] object-cover rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
