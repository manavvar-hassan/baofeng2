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
    // entry animation (scroll pe aayega)
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section className="px-8 mb-6">
      {/* Header */}
      <Marquee />

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {products.map((product, i) => (
          <div
            key={product.id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="group bg-[#f6f6f6] rounded-3xl p-6 flex justify-between items-center overflow-hidden cursor-pointer"
          >
            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.desc}</p>

              <button className="mt-6 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
                <span>Buy now</span>

                <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={product.img}
                className="w-24 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
