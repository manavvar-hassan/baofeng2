"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Marquee from "@/components/InfiniteText";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "GT-68 FRS Radio",
    desc: "License-free gt-68-frs",
    img: "/images/p1.png",
  },
  {
    id: 2,
    title: "GT-68 FRS Radio",
    desc: "License-free gt-68-frs",
    img: "/images/p2.png",
  },
  {
    id: 3,
    title: "GT-68 FRS Radio",
    desc: "License-free gt-68-frs",
    img: "/images/p3.png",
  },
  {
    id: 4,
    title: "GT-68 FRS Radio",
    desc: "License-free gt-68-frs",
    img: "/images/p1.png",
  },
  {
    id: 5,
    title: "GT-68 FRS Radio",
    desc: "License-free gt-68-frs",
    img: "/images/p2.png",
  },
  {
    id: 6,
    title: "GT-68 FRS Radio",
    desc: "License-free gt-68-frs",
    img: "/images/p3.png",
  },
];

export default function FeaturedProducts() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <>
      <section className="px-3 sm:px-5 lg:px-8 mb-10 overflow-hidden">
        {/* HEADER */}
        <div className="featured-marquee">
          <Marquee />
        </div>

        {/* MOBILE SLIDER + DESKTOP GRID */}
        <div
          className="
            flex
            lg:grid
            lg:grid-cols-3
            gap-4
            sm:gap-6
            mt-5 sm:mt-6

            overflow-x-auto
            lg:overflow-visible

            scrollbar-hide
            snap-x
            snap-mandatory
            scroll-smooth
          "
        >
          {products.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="
                mobile-card
                group
                bg-[#f6f6f6]
                rounded-2xl
                sm:rounded-3xl

                p-4
                sm:p-5
                lg:p-6

                flex
                justify-between
                items-center

                overflow-hidden
                cursor-pointer

                min-w-[88%]
                sm:min-w-[70%]
                md:min-w-[48%]
                lg:min-w-0

                snap-center
                shrink-0
              "
            >
              {/* TEXT */}
              <div className="pr-3">
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  {product.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  {product.desc}
                </p>

                <button
                  className="
                    mt-2 sm:mt-4
                    bg-black
                    text-white
                    px-3 sm:px-4
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
              </div>

              {/* IMAGE */}
              <div className="relative shrink-0">
                <img
                  src={product.img}
                  alt={product.title}
                  className="
                    mobile-image
                    w-20 sm:w-24 lg:w-28
                    transition-transform
                    duration-500

                    lg:group-hover:scale-110
                    lg:group-hover:-translate-y-2
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        /* MOBILE CARD FLOAT */
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

        /* MOBILE IMAGE ZOOM */
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

        /* MOBILE MARQUEE SPEED BOOST */
        @media (max-width: 767px) {
          .featured-marquee * {
            animation-duration: 12s !important;
          }

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