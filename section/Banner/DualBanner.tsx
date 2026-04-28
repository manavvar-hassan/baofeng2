"use client";

import Image from "next/image";

export default function DualBanner() {
  return (
    <div className="relative overflow-hidden mx-4 lg:mx-8 mt-8 flex flex-col lg:flex-row gap-6 mb-10">
      {/* 🔥 LEFT BANNER */}
      <div className="flex-1 bg-[#1aa39a] rounded-2xl p-6 flex items-center justify-between group overflow-hidden relative">
        {/* TEXT */}
        <div className="text-white z-10 max-w-[300px]">
          <h2 className="text-xl font-semibold leading-snug">
            BF–33C UHF Compact Communication Walkie Talkie
          </h2>

          <p className="mt-2 text-gray-100">Stay Connected Anywhere</p>

          <button className="bg-white text-black px-4 lg:px-7 py-2 lg:py-3 mt-3 text-sm rounded-full font-semibold hover:bg-gray-200 duration-200 transition cursor-pointer">
            Explore Now
          </button>
        </div>

        {/* 📸 IMAGE AREA */}
        <div className="relative w-[306px] h-[300px] flex items-center justify-center">
          {/* IMAGE 1 (DEFAULT) */}
          <Image
            src="/images/radio2.png"
            alt=""
            fill
            className="
              object-contain
              transition duration-900 ease-in-out
              translate-x-6 scale-110 opacity-100
              scale-x-[-1]
              group-hover:rotate-15 
              group-hover:translate-x-0 
              group-hover:opacity-0
            "
          />

          {/* IMAGE 2 (HOVER SHOW) */}
          <Image
            src="/images/hd1.png"
            alt=""
            fill
            className="
              object-contain
              absolute inset-0
              transition duration-500 ease-out
              rotate-0 scale-100 opacity-0
              cursor-pointer
              group-hover:opacity-100
              group-hover:scale-180
            "
          />
        </div>
      </div>

      {/* ⚡ RIGHT BANNER */}
      <div className="holographic-card flex-1 relative bg-[#2b2b2b] rounded-2xl py-3 px-6 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between">
        <div className="text-white">
          <p className="text-2xl text-[#FDE70C] font-semibold">NEW ARRIVAL</p>
          <p className="text-sm text-gray-300 mt-1">
            PROFESSIONAL COMMUNICATION GEAR
          </p>
          <p className="mt-2 text-lg">From ₹1399</p>
        </div>

        <div className="relative w-[320px] h-[300px] flex items-end justify-end">
          {/* 🔻 BACK RADIO (base) */}
          <Image
            src="/images/newA1.png"
            alt=""
            width={460}
            height={320}
            className="absolute -bottom-6 right-0"
          />

          {/* 🔼 RADIO 1 */}
          <div className="absolute -left-14 sm:left-0 bottom-4 sm:bottom-8 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] h-[280px] animate-float1 relative">
            <Image
              src="/images/feature.png"
              alt=""
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>

          {/* 🔽 RADIO 2 */}
          <div className="absolute bottom-0 right-10 w-[80px] sm:w-[90px] md:w-[100px] h-[140px] sm:h-[160px] md:h-[180px] animate-float2 relative">
            <Image
              src="/images/radio2.png"
              alt=""
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(12px);
          }
        }

        .animate-float1 {
          animation: float1 3s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
