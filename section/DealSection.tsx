"use client";

import { Heart, Eye, GitCompare, ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "PlayStation DualSense Wireless Controller",
    price: "$59.99",
    img: "/images/p1.png",
  },
  {
    title: "Apple Watch Ultra 2 – Rugged Titanium Case",
    price: "$79.99",
    img: "/images/p2.png",
    discount: "-25%",
  },
  {
    title: "JBL Tune 750BTNC",
    price: "$89.99",
    img: "/images/p3.png",
  },
  {
    title: "JBL Live 460nc",
    price: "$69.99",
    img: "/images/p4.png",
  },
  {
    title: "iPad Mini 6",
    price: "$69.99",
    img: "/images/a1.png",
  },
];

export default function DealSection() {
  return (
    <>
      <div className="px-3 sm:px-4 lg:px-10 py-5">
        {/* HEADER */}
        <div className="flex justify-between items-center gap-4 flex-wrap mb-6">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Explore New Arrivals
          </p>

          <button className="bg-white text-black px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
            <span>View All</span>

            <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

        {/* MOBILE SLIDER + DESKTOP GRID */}
        <div
          className="
            flex
            lg:grid
            lg:grid-cols-5
            md:grid-cols-3
            gap-4 sm:gap-6
            overflow-x-auto
            lg:overflow-visible
            scrollbar-hide
            snap-x
            snap-mandatory
            scroll-smooth
          "
        >
          {products.map((item, i) => (
            <div
              key={i}
              className="
                mobile-card
                bg-[#f5f5f5]
                rounded-xl
                p-3 sm:p-4
                overflow-hidden
                cursor-pointer

                min-w-[75%]
                sm:min-w-[45%]
                md:min-w-[32%]
                lg:min-w-0

                snap-start
                shrink-0
              "
            >
              {/* IMAGE AREA */}
              <div className="relative h-[160px] sm:h-[180px] flex items-center justify-center group">
                {/* DISCOUNT */}
                {item.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full z-10">
                    {item.discount}
                  </span>
                )}

                {/* IMAGE */}
                <img
                  src={item.img}
                  alt=""
                  className="
                    mobile-image
                    h-full
                    object-contain
                    transition-transform
                    duration-500
                    md:group-hover:scale-105
                  "
                />

                {/* ICONS */}
                <div className="absolute right-2 top-1/3 -translate-y-1/2 hidden md:flex flex-col gap-2 sm:gap-3 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {/* WISHLIST */}
                  <div className="relative group/icon">
                    <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:text-white hover:bg-gray-900">
                      <Heart size={14} />
                    </div>

                    <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] sm:text-xs px-2 py-1 rounded opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 transition-all duration-300 whitespace-nowrap">
                      Wishlist
                    </span>
                  </div>

                  {/* COMPARE */}
                  <div className="relative group/icon">
                    <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:text-white hover:bg-gray-900">
                      <GitCompare size={14} />
                    </div>

                    <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] sm:text-xs px-2 py-1 rounded opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 transition-all duration-300 whitespace-nowrap">
                      Compare
                    </span>
                  </div>

                  {/* QUICK VIEW */}
                  <div className="relative group/icon">
                    <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:text-white hover:bg-gray-900">
                      <Eye size={14} />
                    </div>

                    <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] sm:text-xs px-2 py-1 rounded opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 transition-all duration-300 whitespace-nowrap">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* ADD TO CART */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[85%] hidden md:block opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-white py-2 rounded-full text-[10px] sm:text-xs font-medium shadow hover:bg-black hover:text-white transition cursor-pointer">
                    ADD TO CART
                  </button>
                </div>
              </div>

              {/* TEXT */}
              <h3 className="mt-3 text-xs sm:text-sm font-medium line-clamp-2">
                {item.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base font-semibold">
                {item.price}
              </p>

              {/* PROGRESS */}
              <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[60%]"></div>
              </div>

              <div className="flex justify-between text-[10px] sm:text-xs mt-2 text-gray-500">
                <span>Available: 50</span>
                <span>Sold: 50</span>
              </div>
            </div>
          ))}
        </div>
      </div>

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

        @media (max-width: 767px) {
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