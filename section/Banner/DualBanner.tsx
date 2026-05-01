"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function DualBanner() {
  const radio1Ref = useRef(null);
  const radio2Ref = useRef(null);
  const beamRef = useRef(null);

  const products = [
    {
      back: "/images/newA1.png",
      img1: "/images/feature.png",
      img2: "/images/radio2.png",
      bg: "#313133",
    },
    {
      back: "/images/newA1.png",
      img1: "/images/hd2.png",
      img2: "/images/hd1.png",
      bg: "#1a1a3a",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let i = 0;

    const beam = (beamRef.current as HTMLElement | null)?.querySelector(".beam");

    const tl = gsap.timeline({
      repeat: -1,
    });

    // FLOAT
    tl.to(radio1Ref.current, { y: -12, duration: 1.5, ease: "power1.inOut" }, 0)
      .to(radio1Ref.current, { y: 0, duration: 1.5 }, 1.5);

    tl.to(radio2Ref.current, { y: 12, duration: 1.5, ease: "power1.inOut" }, 0)
      .to(radio2Ref.current, { y: 0, duration: 1.5 }, 1.5);

    if (beam) {
      tl.to(
        beam,
        {
          x: "120%",
          opacity: 1,
          duration: 2.4,
          ease: "none",
        },
        0
      )

        // 🔥 MID SYNC
        .call(
          () => {
            setFade(true);

            setTimeout(() => {
              i++;
              setIndex(i % products.length);
              setFade(false);
            }, 290);
          },
          [],
          1
        )

        // fade beam
        .to(
          beam,
          {
            opacity: 0,
            duration: 0.9,
          },
          2
        )

        // reset beam
        .set(beam, {
          x: "-100%",
          opacity: 0,
        });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative overflow-hidden mx-4 lg:mx-8 mt-8 flex flex-col lg:flex-row gap-6 mb-10">
      
      {/* LEFT */}
      <div className="flex-1 bg-[#1aa39a] rounded-2xl p-6 flex items-center justify-between group overflow-hidden relative">
        <div className="text-white z-10 max-w-[300px]">
          <h2 className="text-xl font-semibold leading-snug">
            BF–33C UHF Compact Communication Walkie Talkie
          </h2>
          <p className="mt-2 text-gray-100">Stay Connected Anywhere</p>
          <button className="bg-white text-black px-4 lg:px-7 py-2 lg:py-3 mt-3 text-sm rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Now
          </button>
        </div>

        <div className="relative w-[306px] h-[300px] flex items-center justify-center animate-floatTalkie">
          <Image
            src="/images/radio2.png"
            alt=""
            fill
            className="object-contain transition-all duration-500 ease-linear translate-x-6 scale-110 opacity-100 scale-x-[-1] group-hover:rotate-15 group-hover:translate-x-7 group-hover:opacity-0"
          />
          <Image
            src="/images/hd1.png"
            alt=""
            fill
            className="object-contain absolute inset-0 transition-all duration-500 ease-linear opacity-0 group-hover:opacity-100 group-hover:scale-150"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="flex-1 relative rounded-2xl py-3 px-6 flex flex-col sm:flex-row items-center justify-between overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: products[index].bg }}
      >
        
        {/* 🔵 BEAM */}
        <div ref={beamRef} className="absolute inset-0 pointer-events-none">
          <div className="beam"></div>
        </div>

        <div className="text-white z-10">
          <p className="text-2xl text-[#FDE70C] font-semibold">NEW ARRIVAL</p>
          <p className="text-sm text-gray-300 mt-1">
            PROFESSIONAL COMMUNICATION GEAR
          </p>
          <p className="mt-2 text-lg">From ₹1399</p>
        </div>

        <div className="relative w-[320px] h-[300px] flex items-end justify-end">
          
          <Image
            src={products[index].back}
            alt=""
            width={460}
            height={320}
            className="absolute -bottom-6 right-0"
          />

          <div
            ref={radio1Ref}
            className="-left-14 sm:left-0 bottom-4 sm:bottom-8 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[240px] h-[280px] relative"
          >
            <Image
              src={products[index].img1}
              alt=""
              fill
              className={`object-contain drop-shadow-xl transition-all duration-400 ${
                fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
          </div>

          <div
            ref={radio2Ref}
            className="absolute bottom-0 right-10 w-[80px] sm:w-[90px] md:w-[190px] h-[140px] sm:h-[160px] md:h-[190px] relative"
          >
            <Image
              src={products[index].img2}
              alt=""
              fill
              className={`object-contain drop-shadow-xl transition-all duration-500 ${
                fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
          </div>
        </div>
      </div>

      {/* 🔵 BEAM CSS */}
      <style jsx>{`
        .beam {
          position: absolute;
          top: 120%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            0deg,
            transparent,
            transparent 30%,
            rgba(0, 255, 255, 0.3)
          );
          transform: rotate(-45deg) translateY(-100%);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}