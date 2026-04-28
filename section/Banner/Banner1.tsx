"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Mega Power in mini size",
    img: "/images/banner1/ban1.png",
    dark: false,
  },
  {
    id: 2,
    title: "High Range Radios",
    img: "/images/banner1/ban2.png",
    dark: true,
  },
  {
    id: 3,
    title: "Dual Band VHF",
    img: "/images/banner1/ban3.png",
    dark: true,
  },
];

export default function Banner1() {
  return (
    <div className="px-4 lg:px-8 mt-6">

      {/* 🔥 MOBILE SLIDER */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory lg:hidden no-scrollbar">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group min-w-[85%] snap-start h-[260px] rounded-2xl overflow-hidden relative flex-shrink-0 
            transition duration-200 active:scale-[0.96]"
          >
            <Image
              src={card.img}
              alt=""
              fill
              className="object-cover transition duration-300"
            />

            {/* 🔥 Overlay (press feel) */}
            <div className="absolute inset-0 bg-black/0 active:bg-black/20 transition duration-200" />

            <h2
              className={`absolute top-6 left-6 text-2xl font-semibold ${
                card.dark ? "text-white" : "text-black"
              }`}
            >
              {card.title}
            </h2>

            <button className="absolute right-6 bottom-6 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
              READ MORE <MoveRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* ⚡ DESKTOP (HOVER ANIMATION ENABLED) */}
      <div className="hidden lg:flex gap-4">

        {/* LEFT BIG */}
        <div className="w-[40%] h-[260px] rounded-2xl overflow-hidden relative group">
          <Image
            src="/images/banner1/ban1.png"
            alt=""
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          <h2 className="absolute top-1/4 group-hover:-top-20 left-6 text-3xl font-semibold text-black transition-all duration-500">
            Mega Power in mini size
          </h2>

          <button className="absolute right-6 -bottom-12 group-hover:bottom-6 bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm transition-all duration-500">
            READ MORE <MoveRight size={16} />
          </button>
        </div>

        {/* RIGHT 2 CARDS */}
        <div className="w-[60%] grid grid-cols-2 gap-4">
          {cards.slice(1).map((card) => (
            <div
              key={card.id}
              className="h-[260px] rounded-2xl overflow-hidden relative group"
            >
              <Image
                src={card.img}
                alt=""
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <h2 className="absolute top-1/4 group-hover:-top-20 left-6 text-2xl font-semibold text-white transition-all duration-500">
                {card.title}
              </h2>

              <button className="absolute right-6 -bottom-12 group-hover:bottom-6 bg-white text-black px-5 py-2 rounded-full flex items-center gap-2 text-sm transition-all duration-500">
                READ MORE <MoveRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}