"use client";

import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";
import { useState, useRef } from "react";
import { useFlyToCart } from "@/hooks/useFlyToCart";

type Product = {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  thumbs: string[];
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState(product.image);
  const { flyToCart } = useFlyToCart();

  return (
    <div className="bg-white rounded-2xl py-6 px-10 relative border border-[#C9E6F4] group hover:shadow-[-3px_2px_31px_-7px_#0069AF] duration-400 transition cursor-pointer">
      {/* 🔵 Top Icons */}
      <div className="absolute top-3 right-3 flex gap-2">
        <button className="w-9 h-9 flex items-center justify-center bg-white text-[#0069AF] rounded-xl shadow border border-[#0069AF] hover:bg-[#0069AF] hover:text-white transition">
          <Eye size={20} />
        </button>

        <button
          onClick={() => flyToCart(imgRef.current!)}
          className="w-9 h-9 flex items-center justify-center bg-white rounded-xl shadow border border-[#0069AF] text-[#0069AF] hover:bg-[#0069AF] hover:text-white transition cursor-pointer z-[999]"
        >
          <ShoppingCart size={20} />
        </button>
      </div>

      {/* 📸 MAIN IMAGE */}
      <div
        ref={imgRef}
        className="flex justify-center group-hover:scale-130 transition-all  duration-400  group-hover:-translate-y-10"
      >
        <Image
          src={activeImg}
          alt="product"
          width={230}
          height={230}
          className="object-contain h-30"
        />
      </div>

      {/* 📝 Title */}
      <p className="text-sm font-medium text-center mt-3 line-clamp-2">
        {product.title}
      </p>

      {/* 💰 Price */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="font-semibold">{product.price}</span>
        <span className="text-gray-400 line-through text-sm">
          {product.oldPrice}
        </span>
      </div>

      {/* 🧩 Thumbnails */}
      <div className="flex justify-center gap-2 mt-4">
        {product.thumbs.map((thumb: string, i: number) => (
          <div
            key={i}
            onClick={() => setActiveImg(thumb)}
            className={`w-17.5 h-16 bg-gray-200 rounded-md flex items-center justify-center shadow cursor-pointer border-2 ${
              activeImg === thumb ? "border-[#0069AF]" : "border-transparent"
            }`}
          >
            <Image
              src={thumb}
              alt="thumb"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
