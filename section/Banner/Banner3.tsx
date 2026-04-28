"use client";

import { ChevronRight } from "lucide-react";
import OrbitIcons from "@/components/OrbitIcons";
import Image from "next/image";

const LicenseFreeSection = () => {
  return (
    <div className="mt-10 bg-[#146BA6] px-4 sm:px-6 py-6 sm:py-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">

        {/* 🔥 LEFT SIDE */}
        <div className="flex-1 text-white">
          <p className="text-[10px] sm:text-xs opacity-80">LICENCE FREE</p>

          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mt-2 leading-snug">
            BF–33C UHF Compact Communication Radio Licence Free Walkie Talkie
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-lg font-medium">
            Sale Price: ₹ 1999
          </p>

          <div className="mt-3 flex-shrink-0 scale-75 sm:scale-90 lg:scale-100 origin-left">
            <OrbitIcons />
          </div>
        </div>

        {/* ⚡ RIGHT SIDE */}
        <div className="flex-[1.5]">

          {/* Header */}
          <div className="flex justify-between items-center text-white mb-4">
            <h3 className="text-base sm:text-lg font-semibold">License Free</h3>

            <div className="hidden sm:flex gap-2">
              <button className="w-6 h-6 rounded border border-[#D7E9F2] bg-white flex items-center justify-center shadow hover:scale-110 transition rotate-180 cursor-pointer">
                <ChevronRight size={16} color="#0069AF" />
              </button>
              <button className="w-6 h-6 rounded border border-[#D7E9F2] bg-white flex items-center justify-center shadow hover:scale-110 transition cursor-pointer">
                <ChevronRight size={16} color="#0069AF" />
              </button>
            </div>
          </div>

          {/* 🔥 SLIDER */}
          <div className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2">

            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative w-[180px] sm:w-[200px] md:w-[220px] xl:w-[293px] h-[290px] lg:h-[426px] flex-shrink-0">
                
                <div className="relative w-full h-full bg-white rounded-xl p-4 flex flex-col justify-between transition duration-500 group-hover:shadow-[0_0_30px_-5px_#0069AF]">
                  
                  {/* 🔥 TOP BADGES */}
                  <div className="flex flex-col gap-1">

                    {/* ✅ HOT DEAL ANIMATED */}
                    <p
                      className="relative overflow-hidden px-2 py-1 bg-red-500 rounded-full w-fit text-white text-xs uppercase hot-tag"
                      style={{ animationDelay: `${item * 0.2}s` }}
                    >
                      hot deal
                      <span className="shine"></span>
                    </p>

                    {/* DISCOUNT */}
                    <p className="text-xs bg-[#D7E9F2] px-2 py-1 w-fit rounded-full mt-1">
                      -19%
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="relative w-full h-[65%]">
                    <Image
                      src="/images/hd2.png"
                      alt=""
                      fill
                      className="object-contain transition duration-500 group-hover:opacity-0"
                    />
                  </div>

                  {/* TITLE */}
                  <p className="text-xs font-bold uppercase transition-all duration-300 group-hover:-translate-y-6 group-hover:text-sm">
                    Baofeng BF-888s Licence Free Walkie Talkie
                  </p>

                  {/* PRICE */}
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">₹1399</span>
                    <span className="line-through text-gray-400 text-xs">
                      ₹1599
                    </span>
                  </div>
                </div>

                {/* FLOAT IMAGE */}
                <div className="absolute bottom-30 left-1/2 -translate-x-1/2 w-[85%] h-[45%] pointer-events-none">
                  <Image
                    src="/images/hd2.png"
                    alt=""
                    fill
                    className="object-contain opacity-0 transition duration-500 group-hover:scale-180 group-hover:opacity-100 group-hover:-translate-y-20"
                  />
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* 🔥 ANIMATION CSS */}
      <style jsx>{`
        .hot-tag {
          animation: smoothBounce 2.2s ease-in-out infinite;
        }

        @keyframes smoothBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .shine {
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.6),
            transparent
          );
          animation: shineMove 3s linear infinite;
        }

        @keyframes shineMove {
          100% {
            left: 120%;
          }
        }
      `}</style>

    </div>
  );
};

export default LicenseFreeSection;