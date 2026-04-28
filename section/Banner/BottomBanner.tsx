"use client";

import HologramIcons from "@/components/HologramIcons";
import { MoveRight } from "lucide-react";

export default function BottomBanner() {
  return (
    <div className="mx-4 lg:mx-8 mt-3 mb:mt-6 py-6 rounded-2xl overflow-hidden bg-[#0B0F14] relative">
      {/* 🌌 BG GRADIENT OVERLAY */}

      <div className="relative flex flex-col md:flex-row items-center justify-between px-6">
        {/* 🔥 LEFT (ANIMATED IMAGE) */}
        <div className="md:w-[35%] relative">
          <HologramIcons />
        </div>

        {/* ⚡ RIGHT CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-[55%] text-white pl-6">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Advanced <span className="text-gray-400">.</span> Reliable{" "}
            <span className="text-gray-400">.</span> Connected
          </h1>

          <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-xl">
            “Professional communication devices for every challenge. Explore the
            latest models designed to deliver peak performance and durability.”
          </p>

          {/* 🔘 BUTTON */}
          <button className="mt-3 mb:mt-6 flex w-fit items-center gap-3 bg-[#0B6CBF] hover:bg-[#095aa0] transition px-6 py-3 rounded-full text-sm font-medium">
            View All Product
            <span className="w-5 md:w-10 h-5 md:h-10 bg-white text-black flex items-center justify-center rounded-full -rotate-45">
              <MoveRight size={14}/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
