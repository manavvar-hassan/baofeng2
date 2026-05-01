"use client";

import Image from "next/image";
import WaveEffect from "./WaveEffect";

const letters = [
  "/images/logo/pll1.png",
  "/images/logo/pl2.png",
  "/images/logo/pl3.png",
  "/images/logo/pl4.png",
  "/images/logo/pl5.png",
  "/images/logo/pl6.png",
  "/images/logo/pl7.png",
];

export default function LogoAnimation() {
  return (
    <div className="flex items-center justify-center cursor-pointer mt-90 relative">
      <div className="ml-1">
        {letters.map((src, i) => (
          <div
            key={i}
            className={`animate-loader ${i == 1 ? "mr-[3px] -ml-[6px]" : "-ml-[3px]"}`}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="relative w-[30px] h-[20px]">
              <Image
                src={src}
                alt=""
                fill
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3">
        <WaveEffect />
      </div>
    </div>
  );
}
