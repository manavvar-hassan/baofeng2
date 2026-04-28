"use client";

import { Eye } from "lucide-react";
import ProductCard from "@/components/ProdcutCard";

const products = [
  {
    id: 1,
    title: "Baofeng UV-17R Plus Dual-Band Portable Two-Way Radio Pack",
    price: "₹3000",
    oldPrice: "₹9980",
    image: "/images/a1.png",
    thumbs: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
  },
  {
    id: 2,
    title: "Baofeng UV-17R Plus Dual-Band Portable Two-Way Radio Pack",
    price: "₹3000",
    oldPrice: "₹9980",
    image: "/images/a1.png",
    thumbs: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
  },
  {
    id: 3,
    title: "Baofeng UV-17R Plus Dual-Band Portable Two-Way Radio Pack",
    price: "₹3000",
    oldPrice: "₹9980",
    image: "/images/a1.png",
    thumbs: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
  },
  {
    id: 4,
    title: "Baofeng UV-17R Plus Dual-Band Portable Two-Way Radio Pack",
    price: "₹3000",
    oldPrice: "₹9980",
    image: "/images/a1.png",
    thumbs: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
  },
  {
    id: 5,
    title: "Baofeng UV-17R Plus Dual-Band Portable Two-Way Radio Pack",
    price: "₹3000",
    oldPrice: "₹9980",
    image: "/images/a1.png",
    thumbs: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
  },
  {
    id: 6,
    title: "Baofeng UV-17R Plus Dual-Band Portable Two-Way Radio Pack",
    price: "₹3000",
    oldPrice: "₹9980",
    image: "/images/a1.png",
    thumbs: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
  },
  {
    id: 7,
    title: "Baofeng UV-17R Plus Dual-Band Portable Two-Way Radio Pack",
    price: "₹3000",
    oldPrice: "₹9980",
    image: "/images/a1.png",
    thumbs: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
  },
  {
    id: 8,
    title: "Baofeng UV-17R Plus Dual-Band Portable Two-Way Radio Pack",
    price: "₹3000",
    oldPrice: "₹9980",
    image: "/images/a1.png",
    thumbs: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
  },
];

export default function NewArrivalsSection() {
  return (
    <div className="mx-4 lg:mx-8 px-4 lg:px-8 py-4 mt-4 md:mt-8 bg-[#F3FBFF] border border-[#EBF7FD] rounded-2xl">
      {/* 🔥 Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] lg:text-2xl font-semibold">
          Explore New Arrivals
        </h2>

        <button className="flex items-center gap-2 text-xs md:text-sm font-semibold bg-white px-3 py-2 rounded-full border border-[#D7E9F2] text-[#0069AF] hover:bg-[#E0F3FA] transition">
          <Eye size={20} />
          View All
        </button>
      </div>

      {/* 📱 MOBILE SLIDER */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory lg:hidden no-scrollbar">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[220px] max-w-[260px] snap-start flex-shrink-0"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* 💻 DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-4 gap-7">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
