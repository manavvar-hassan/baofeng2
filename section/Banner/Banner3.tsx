"use client";

import { ChevronRight } from "lucide-react";
import OrbitIcons from "@/components/OrbitIcons";
import Image from "next/image";

const LicenseFreeSection = () => {
  return (
    <div className="mt-4 md:mt-8 bg-[#146BA6] px-4 sm:px-6 py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* 🔥 LEFT SIDE */}
        <div className="flex-1 text-white relative z-10">
          <p className="text-xs sm:text-sm opacity-80">LICENCE FREE</p>

          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mt-2 leading-snug">
            BF–33C UHF Compact Communication Radio Licence Free Walkie Talkie
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-lg font-medium">
            Sale Price: ₹ 1999
          </p>

          <div className="w-full flex justify-center items-center">
            <div className="scale-75 sm:scale-90 lg:scale-100 origin-center">
              <OrbitIcons />
            </div>
          </div>
        </div>

        {/* ⚡ RIGHT SIDE */}
        <div className="flex-[1.5] w-full overflow-hidden relative z-0">
          {/* Header */}
          <div className="flex justify-between items-center text-white mb-4">
            <h3 className="text-base sm:text-lg font-semibold">License Free</h3>
          </div>

          {/* 🔥 SLIDER */}
          <div className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative min-w-[280px] max-w-[180px] 
sm:min-w-[280px] sm:max-w-[200px] 
md:min-w-[220px] md:max-w-[260px] 
xl:min-w-[293px] xl:max-w-[293px] 
h-[350px] lg:h-[426px] flex-shrink-0"
              >
                <div className="relative w-full h-full bg-white rounded-xl p-4 flex flex-col justify-between transition duration-500 group-hover:shadow-[0_0_30px_-5px_#0069AF] cursor-pointer">
                  {/* 🔥 TOP BADGES */}
                  <div className="flex flex-col gap-1">
                    <p
                      className="relative overflow-hidden px-2 py-1 bg-linear-to-r from-[#ff0000] to-[#ff9a00] rounded-full w-fit text-white text-xs uppercase hot-tag font-semibold"
                      style={{ animationDelay: `${item * 0.2}s` }}
                    >
                      hot deal
                      <span className="shine"></span>
                    </p>

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
                      className="object-contain transition ease-in-out duration-600 group-hover:scale-130 group-hover:opacity-100 group-hover:-translate-y-20"
                    />
                  </div>

                  {/* TITLE */}
                  <p className="text-xs font-bold uppercase transition-all duration-300 group-hover:-translate-y-4 sm:group-hover:-translate-y-6 group-hover:text-sm">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseFreeSection;
