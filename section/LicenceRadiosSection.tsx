"use client";

import Image from "next/image";
import { Eye, Star } from "lucide-react";

const LicenceRadiosSection = () => {
  return (
    <div className="mx-4 lg:mx-8 mt-10 bg-[#F3FBFF] border border-[#E2F3FB] rounded-2xl p-3 md:p-6">
      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Licence Radios</h2>

        <button className="flex items-center gap-2 text-xs md:text-sm font-semibold bg-white px-3 py-2 rounded-full border border-[#D7E9F2] text-[#0069AF] hover:bg-[#E0F3FA] transition">
          <Eye size={20} />
          View All
        </button>
      </div>

      {/* ⚡ TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* LEFT BANNER */}
        <div className="flex-1 bg-[#D7DAEA] rounded-xl px-6 flex items-center justify-between group overflow-hidden">
          {/* TEXT */}
          <div>
            <h3 className="text-lg font-semibold">
              BAOFENG UV-5R Walkie Talkie VHF 136–174hz UHF
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Stay Connected Anywhere
            </p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded-md text-sm">
              SHOP NOW
            </button>
          </div>

          {/* IMAGE (HOVER + MOBILE FLOAT 🔥) */}
          <div className="relative w-[230px] h-[230px] overflow-hidden flex items-center justify-center">
            <Image
              src="/images/feature.png"
              alt=""
              fill
              className="
                        object-cover object-center
                        transition duration-900
                        lg:rotate-45 scale-125
                        group-hover:rotate-0 
                        group-hover:scale-230 
                        group-hover:-translate-y-27
                        md:animate-none
                        animate-floatMobile
                        cursor-pointer
    "
            />
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "Microphones",
            "Battery",
            "Cables",
            "Charger",
            "Earphone",
            "Antenna",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 hover:scale-140 transition-all cursor-pointer duration-300"
            >
              <Image src="/images/a2.png" alt="" width={40} height={40} />
              <div>
                <p className="text-sm font-medium">{item}</p>
                <p className="text-xs text-gray-500">20 Items</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔽 SLIDER */}
      <div className="flex justify-start lg:justify-center gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2 md:py-6 mx-auto mt-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="group relative w-[220px] sm:w-[220px] md:w-[260px] xl:w-[293px] h-[290px] lg:h-[426px] flex-shrink-0"
          >
            <div className="relative w-full h-full bg-white rounded-xl p-4 flex flex-col justify-between transition duration-500 group-hover:shadow-[0_0_30px_-5px_#0069AF] shadow-md cursor-pointer">
              {/* 🔥 TOP BADGES */}
              <div className="flex flex-col gap-1">
                {/* ✅ HOT DEAL ANIMATED */}
                <p
                  className="relative overflow-hidden px-2 py-1 bg-linear-to-r from-[#ff0000] to-[#ff9a00] rounded-full w-fit text-white text-xs uppercase hot-tag"
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
                  className="object-contain transition duration-500 group-hover:scale-130 group-hover:-translate-y-15"
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
          </div>
        ))}
      </div>

      <style jsx>{`
        .hot-tag {
          animation: smoothBounce 2.2s ease-in-out infinite;
        }

        @keyframes smoothBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
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
            rgba(255, 255, 255, 0.6),
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

export default LicenceRadiosSection;
