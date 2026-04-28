import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const products = [1, 2];

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center justify-center gap-6 h-[500px]">
      {products.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className={`
              w-[260px] rounded-2xl p-3 cursor-pointer bg-white
              transition-all duration-500 ease-in-out
              ${isActive ? "scale-100 z-20 opacity-100 shadow-2xl" : "scale-75 opacity-50 blur-[1px]"}
            `}
          >
            <div className="flex flex-col gap-1">
              <p className="px-2 py-1 bg-red-500 rounded-full max-w-20 text-center text-white uppercase font-medium text-xs tracking-wider">
                hot deal
              </p>
              <p className="text-sm font-medium bg-[#D7E9F2] px-2 py-1 max-w-12 rounded-full mt-2">
                -19%
              </p>
            </div>

            <div className="flex justify-center h-[180px] mt-2">
              <Image
                src="/images/a1.png"
                alt=""
                width={200}
                height={200}
                className="object-contain h-full w-full"
              />
            </div>

            <p className="text-sm font-bold mt-3">
              Baofeng BF-888s Licence Free Walkie Talkie
            </p>

            <div className="flex items-center gap-1 mb-3 mt-2">
              <div className="flex">
                <Star color="#FDC700" fill="#FDC700" size={12} />
                <Star color="#FDC700" fill="#FDC700" size={12} />
                <Star color="#FDC700" fill="#FDC700" size={12} />
                <Star color="#FDC700" fill="#FDC700" size={12} />
              </div>
              <p className="text-sm text-gray-500">(234)</p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold">₹1399</span>
              <span className="line-through text-gray-400 text-sm">
                ₹1599
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}