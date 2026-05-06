"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const images = [
  "/images/banner1/ban1.png",
  "/images/banner1/ban2.png",
  "/images/banner1/ban3.png",
];

const products = [
  {
    id: 1,
    title: "GT-68 FRS Radio License-free gt-68-frs(1)",
    desc: "License-free gt-68-frs",
    price: "₹1299",
    old: "₹1999",
    img: "/images/p1.png",
  },
  {
    id: 2,
    title: "GT-68 FRS Radio",
    desc: "License-free gt-68-frs",
    price: "₹1299",
    old: "₹1999",
    img: "/images/p2.png",
  },
  {
    id: 3,
    title: "GT-68 FRS Radio License-free gt-68-frs",
    desc: "License-free gt-68-frs",
    price: "₹1299",
    old: "₹1999",
    img: "/images/p3.png",
  },
];

export default function LicenseFree() {
  const [index, setIndex] = useState(0);

  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    gsap.fromTo(
      imgRef.current,
      {
        scale: 1.15,
      },
      {
        scale: 1,
        duration: 3,
        ease: "power2.out",
      },
    );
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="px-3 sm:px-5 lg:px-8 py-4 overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center gap-4 flex-wrap mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            License Free
          </h2>

          <button
            className="
              bg-white
              text-black
              px-4
              py-2
              rounded-full
              text-xs sm:text-sm
              font-medium
              hover:bg-[#0069AF]
              hover:text-white
              cursor-pointer
              transition-all
              duration-300
              flex items-center gap-2
              group/btn
              overflow-hidden
            "
          >
            <span>View All</span>

            <span
              className="
                flex items-center justify-center
                w-0
                opacity-0
                translate-x-2
                transition-all
                duration-300
                ease-out
                group-hover/btn:w-5
                group-hover/btn:opacity-100
                group-hover/btn:translate-x-0
              "
            >
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-5 lg:gap-6">
          {/* LEFT BANNER */}
          <div
            className="
              lg:col-span-2
              h-[260px]
              sm:h-[360px]
              lg:h-[480px]
              rounded-3xl
              overflow-hidden
              relative
            "
          >
            <img
              key={images[index]}
              ref={imgRef}
              src={images[index]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT PRODUCTS */}
          <div
            className="
              lg:col-span-3

              flex
              lg:grid
              lg:grid-cols-3

              gap-4

              overflow-x-auto
              lg:overflow-visible

              scrollbar-hide
              snap-x
              snap-mandatory
              scroll-smooth
            "
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="
                  mobile-card
                  bg-[#f6f6f6]
                  flex flex-col items-center
                  rounded-2xl sm:rounded-3xl
                  p-4
                  transition-all
                  duration-300
                  lg:hover:shadow-xl
                  lg:hover:-translate-y-2
                  cursor-pointer

                  min-w-[85%]
                  sm:min-w-[60%]
                  md:min-w-[42%]
                  lg:min-w-0

                  snap-center
                  shrink-0
                "
              >
                {/* IMAGE */}
                <div className="flex justify-center mb-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="
                      mobile-image
                      w-[140px]
                      sm:w-[180px]
                      lg:w-[220px]
                      transition-transform
                      duration-500

                      lg:group-hover:scale-105
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-base
                    sm:text-lg
                    lg:text-xl
                    font-semibold
                    mb-2
                    text-center
                    line-clamp-2
                  "
                >
                  {p.title}
                </h3>

                {/* STARS */}
                <div className="text-yellow-400 text-sm mb-2">
                  ★★★★★
                </div>

                {/* PRICE */}
                <div className="text-xs sm:text-sm mb-3">
                  <span className="line-through text-gray-400 mr-2">
                    {p.old}
                  </span>

                  <span className="text-green-600 font-semibold">
                    {p.price}
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-2">
                  <button
                    className="
                      bg-black
                      text-white
                      px-4
                      py-2
                      rounded-full
                      text-xs sm:text-sm
                      font-medium
                      hover:bg-[#0069AF]
                      hover:text-white
                      cursor-pointer
                      transition-all
                      duration-300
                      flex items-center gap-2
                      group/btn
                      overflow-hidden
                    "
                  >
                    <span>Buy now</span>

                    <span
                      className="
                        flex items-center justify-center
                        w-0
                        opacity-0
                        translate-x-2
                        transition-all
                        duration-300
                        ease-out
                        group-hover/btn:w-5
                        group-hover/btn:opacity-100
                        group-hover/btn:translate-x-0
                      "
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </button>

                  <button className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-full">
                    🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes mobileFloat {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-6px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes mobileZoom {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.06);
          }

          100% {
            transform: scale(1);
          }
        }

        @media (max-width: 1023px) {
          .mobile-card {
            animation: mobileFloat 4s ease-in-out infinite;
          }

          .mobile-image {
            animation: mobileZoom 5s ease-in-out infinite;
          }
        }
      `}</style>
    </>
  );
}