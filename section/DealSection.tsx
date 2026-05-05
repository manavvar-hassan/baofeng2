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
    <div className="mx-4 px-4 lg:px-10 py-5">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-4xl font-semibold mb-6">Explore New Arrivals</p>

        <button className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
              <span>View All</span>

              <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
                <ArrowUpRight size={16} />
              </span>
            </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-[#f5f5f5] rounded-xl p-4 overflow-hidden cursor-pointer"
          >
            {/* 🔥 IMAGE AREA (group yaha shift kiya) */}
            <div className="relative h-[180px] flex items-center justify-center group">
              {/* DISCOUNT */}
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  {item.discount}
                </span>
              )}

              {/* IMAGE */}
              <img
                src={item.img}
                alt=""
                className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* 🔥 ICONS */}
              <div className="absolute right-2 top-1/3 -translate-y-1/2 flex flex-col gap-3 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {/* WISHLIST */}
                <div className="relative group/icon">
                  <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:text-white hover:bg-gray-900">
                    <Heart size={16} />
                  </div>

                  <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 transition-all duration-300 whitespace-nowrap">
                    Wishlist
                  </span>
                </div>

                {/* COMPARE */}
                <div className="relative group/icon">
                  <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:text-white hover:bg-gray-900">
                    <GitCompare size={16} />
                  </div>

                  <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 transition-all duration-300 whitespace-nowrap">
                    Compare
                  </span>
                </div>

                {/* QUICK VIEW */}
                <div className="relative group/icon">
                  <div className="bg-white p-2 rounded-full shadow cursor-pointer hover:text-white hover:bg-gray-900">
                    <Eye size={16} />
                  </div>

                  <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 translate-x-2 group-hover/icon:opacity-100 group-hover/icon:translate-x-0 transition-all duration-300 whitespace-nowrap">
                    Quick View
                  </span>
                </div>
              </div>

              {/* 🔥 ADD TO CART */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button className="w-full bg-white py-2 rounded-full text-xs font-medium shadow hover:bg-black hover:text-white transition cursor-pointer">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* TEXT */}
            <h3 className="mt-4 text-sm font-medium line-clamp-2">
              {item.title}
            </h3>

            <p className="mt-2 font-semibold">{item.price}</p>

            {/* PROGRESS */}
            <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[60%]"></div>
            </div>

            <div className="flex justify-between text-xs mt-2 text-gray-500">
              <span>Available: 50</span>
              <span>Sold: 50</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
