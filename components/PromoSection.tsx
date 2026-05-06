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
    <div className="px-3 sm:px-4 lg:px-10 py-6">
      {/* MOBILE SLIDER + DESKTOP GRID */}
      <div
        className="
          flex
          md:grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-5
          lg:gap-6
          overflow-x-auto
          md:overflow-visible
          scrollbar-hide
          snap-x
          snap-mandatory
          scroll-smooth
        "
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              relative
              group
              overflow-hidden
              rounded-2xl
              cursor-pointer

              min-w-[85%]
              sm:min-w-[70%]
              md:min-w-0

              h-[320px]
              sm:h-[380px]
              lg:h-[420px]

              snap-center
              shrink-0
            "
          >
            {/* IMAGE */}
            <img
              src={card.img}
              alt={card.title}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />

            {/* CONTENT */}
            <div
              className="
                absolute
                inset-x-0
                bottom-6
                sm:bottom-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-4
                sm:px-6
                text-white
                z-10
              "
            >
              {/* TAG */}
              <p
                className="
                  text-[11px]
                  sm:text-xs
                  tracking-[0.2em]
                  opacity-90
                  font-semibold
                "
              >
                {card.tag}
              </p>

              {/* TITLE */}
              <h2
                className="
                  mt-2
                  sm:mt-3
                  text-lg
                  sm:text-xl
                  lg:text-2xl
                  font-semibold
                  leading-snug
                  max-w-[280px]
                "
              >
                {card.title}
              </h2>

              {/* BUTTON */}
              <button
                className="
                  mt-4
                  sm:mt-6
                  bg-white
                  text-black
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  sm:text-sm
                  font-medium
                  hover:bg-[#0069AF]
                  hover:text-white
                  cursor-pointer
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  group/btn
                  overflow-hidden
                "
              >
                <span>Shop now</span>

                <span
                  className="
                    flex
                    items-center
                    justify-center
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
          </div>
        ))}
      </div>
    </div>
  );
}