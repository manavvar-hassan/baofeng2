"use client";

import SearchBar from "@/components/Search";
import { Handbag, Heart, Menu } from "lucide-react";
import Image from "next/image";
import { cartRef } from "@/utils/cartRef";
import AnimatedLogo from "@/components/AnimatedLogo";

const Navbar = () => {
  return (
    <div
      className="bg-[#F3FBFF] mx-2 py-2 px-2 xl:px-5 
flex items-center justify-between rounded-full shadow-md 
sticky top-1 z-[9999]"
    >
      {/* 🔥 LEFT */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-[33px] h-[33px] border-2 border-black rounded-full flex items-center justify-center cursor-pointer">
          <Menu />
        </div>
        {/* 🔥 CENTER (LOGO) */}
        <div className="flex justify-center flex-1">
          <AnimatedLogo />
        </div>
      </div>

      {/* 🔥 RIGHT */}
      <div className="flex items-center gap-2 lg:gap-4 shrink-0">
        {/* 🔍 SEARCH */}
        <div className="relative z-[10000]">
          <SearchBar />
        </div>

        {/* 🛒 CART */}
        <div
          ref={(el) => {
            if (el) cartRef.current = el;
          }}
          className="bg-white p-3 rounded-full cursor-pointer"
        >
          <Handbag className="w-4 h-4 md:w-6 md:h-6" />
        </div>

        {/* ❤️ HEART */}
        <div className="hidden lg:block bg-white p-3 rounded-full cursor-pointer">
          <Heart fill="red" stroke="red" className="w-4 h-4 md:w-6 md:h-6" />
        </div>

        {/* 👤 USER */}
        <div className="bg-white rounded-full flex items-center cursor-pointer">
          <Image
            src="/icons/user1.png"
            alt="user"
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
