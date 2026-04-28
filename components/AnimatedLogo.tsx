"use client";

import Image from "next/image";

const letters = [
  "/images/logo/pl1.png",
  "/images/logo/pl2.png",
  "/images/logo/pl3.png",
  "/images/logo/pl4.png",
  "/images/logo/pl5.png",
  "/images/logo/pl6.png",
  "/images/logo/pl7.png",
];

export default function LogoAnimation() {
  return (
    <div className="flex items-end overflow-hidden cursor-pointer">
      {letters.map((src, i) => (
        <div
          key={i}
          className={`animate-letter ${i !== 0 ? "-ml-1.4" : ""}`}
          style={{ animationDelay: `${i * 0.12}s` }}
        >
          <div className="relative w-[20px] md:w-[30px] h-[20px] md:h-[30px]">
            <Image
              src={src}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}