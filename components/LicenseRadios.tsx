"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const images = [
  "/images/banner2/bann1.jpeg",
  "/images/banner2/bann2.png",
  "/images/banner2/bann3.jpeg",
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

export default function LicenseRadios() {
  const [index, setIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 3,
        ease: "power2.out",
      }
    );
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-8 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">License Radios</h2>
        <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
          <span>View All</span>

          <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>

      {/* 🔥 UPDATED GRID */}
      <div className="grid grid-cols-5 gap-6">
        {/* 🔥 RIGHT CARDS */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-[#f6f6f6] flex flex-col items-center rounded-3xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <img src={p.img} className="w-[240px]" />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-center">
                {p.title}
              </h3>

              <div className="text-yellow-400 text-sm mb-2">★★★★★</div>

              <div className="text-sm mb-3">
                <span className="line-through text-gray-400 mr-2">
                  {p.old}
                </span>
                <span className="text-green-600 font-semibold">
                  {p.price}
                </span>
              </div>

              <div className="flex items-center gap-2">
                 <button className="mt-6 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
                <span>Buy now</span>

                <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
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
        {/* 🔥 LEFT BANNER */}
        <div className="col-span-2 h-[480px] rounded-3xl overflow-hidden relative">
          <img
            key={images[index]}
            ref={imgRef}
            src={images[index]}
            className="w-full h-full object-cover"
          />
        </div>


      </div>
    </section>
  );
}