"use client";

import TopCategoriesCard from "@/components/TopCategoriesCard";
import Image from "next/image";

const accessories = [
  { img: "/images/a1.png" },
  { img: "/images/a2.png" },
  { img: "/images/a3.png" },
  { img: "/images/a4.png" },
  { img: "/images/a5.png" },
  { img: "/images/a6.png" },
  { img: "/images/a7.png" },
  { img: "/images/a8.png" },
];

export default function BottomHero() {
  return (
    <div className="px-4 lg:px-8 mt-2 md:mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
        {/* LEFT CARD */}

        <TopCategoriesCard />

        {/* RIGHT CARD */}
        <div className="bg-[#F3FBFF] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Accessories</h2>
            <span className="text-xs font-semibold bg-white px-4 py-1 text-[#0069AF] cursor-pointer border border-[#D7E9F2] rounded-2xl">
              View All
            </span>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {accessories.map((item, i) => (
              <div key={i} className="flex justify-center">
                <Image
                  width={180}
                  height={180}
                  src={item.img}
                  alt=""
                  className="w-14 h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
