"use client";

import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    img: "/images/avatar1.png",
    tag: "Best Seller",
    title: "Designed For All Occasions",
  },
  {
    img: "/images/instagram.png",
    tag: "30% OFF",
    title: "Comfort, Unlimited Movement",
  },
  {
    img: "/images/prof.png",
    tag: "FREE SHIPPING",
    title: "Iconic Design And Brilliant Acoustics",
  },
];

export default function PromoSection() {
  return (
    <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-10">
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative group overflow-hidden rounded-2xl cursor-pointer"
        >
          {/* IMAGE */}
          <img
            src={card.img}
            alt=""
            className="w-full h-[420px] object-cover transition-transform duration-900 ease-out group-hover:scale-110"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />

          {/* CONTENT */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center justify-center text-center px-6 text-white z-10">
            <p className="text-sm tracking-widest opacity-90 font-semibold">
              {card.tag}
            </p>

            <h2 className="mt-3 text-xl md:text-2xl font-semibold leading-snug">
              {card.title}
            </h2>

            <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
              <span>Shop now</span>

              <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
