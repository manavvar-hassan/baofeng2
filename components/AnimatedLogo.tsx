"use client";

import Image from "next/image";

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
    <div className="flex items-center justify-center cursor-pointer">
      {letters.map((src, i) => (
        <div
          key={i}
          className={`animate-letter ${i == 1 ? "mr-[3px] -ml-[6px]" : "-ml-[3px]"}`}
          style={{ animationDelay: `${i * 0.12}s` }}
        >
          <div className="relative w-[24px] md:w-[30px] h-[14px] md:h-[20px]">
            <Image src={src} alt="" fill className="w-full h-full object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}
