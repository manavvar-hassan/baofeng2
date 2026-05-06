"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Banner2 = () => {
  return (
    <div className="mx-8 mt-5">
      <div className="bg-[#3f3f46] rounded-2xl px-6 py-6 lg:py-0 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-6 overflow-hidden">
        {/* 🔥 LEFT TEXT */}
        <div className="text-center lg:text-left text-white lg:max-w-[200px]">
          <p className="text-yellow-400 font-medium text-xl">NEW ARRIVAL</p>
          <p className="text-xs text-gray-400 mt-1">
            PROFESSIONAL COMMUNICATION GEAR
          </p>
          <p className="text-base mt-2 font-medium">From ₹1399</p>
        </div>

        {/* 📸 CENTER IMAGE + GLOW */}
        <div className="relative flex justify-center items-center">
          {/* 💡 GLOW LAYER */}
          <div className="absolute w-72 h-72 bg-cyan-500/70 rounded-full blur-2xl animate-glowPulse" />

          {/* 📸 IMAGE */}
          <div className="w-[300px] lg:w-[250px] h-[300px] lg:h-[250px] relative">
            <Image
              src="/images/banner2/radio.png"
              alt="Walkie Talkie"
              fill
              className="object-contain relative z-10 -mb-2"
            />
          </div>
        </div>

        {/* ⚡ RIGHT CONTENT */}
        <div className="text-center lg:text-left text-white max-w-[400px]">
          <h2 className="text-lg lg:text-2xl font-semibold text-[#65FDF4]">
            BF–33C UHF Compact Communication Walkie Talkie
          </h2>
          <p className="mt-2 text-gray-200 text-xl md:text-2xl font-semibold">
            Stay Connected Anywhere
          </p>
        </div>

        {/* 🔘 BUTTON */}
        <div>
           <button className="mt-6 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
                <span>Explore Now</span>

                <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
                  <ArrowUpRight size={16} />
                </span>
              </button>
        </div>
      </div>

      {/* 🧠 INLINE ANIMATION */}
      <style jsx>{`
        @keyframes glowPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }

        .animate-glowPulse {
          animation: glowPulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner2;
