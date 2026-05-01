"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [value, setValue] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  // 🔥 MOBILE SCROLL LOCK
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileOpen]);

  return (
    <>
      {/* 💻 DESKTOP */}
      <div
        ref={wrapperRef}
        className="hidden md:flex relative bg-white shadow-md rounded-full items-center px-2 py-1 text-black overflow-hidden"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Product"
          className="outline-none text-sm w-40 lg:w-56 opacity-100 px-4"
        />
        <div
          className="bg-black rounded-full p-3 cursor-pointer shrink-0"
        >
          <Search className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* 📱 MOBILE ICON */}
      <div
        onClick={(e) => {
          e.stopPropagation(); // Prevents the click from going to the navbar
          setIsMobileOpen(true);
        }}
        // Increased Z-index to ensure it is on top of everything
        className="md:hidden bg-black rounded-full p-3 cursor-pointer relative z-[10001]"
      >
        <Search className="w-4 h-4 text-white" />
      </div>

      {/* 📱 MOBILE OVERLAY */}
     {/* 📱 MOBILE OVERLAY */}
{isMobileOpen && (
  <div className="fixed inset-0 bg-white z-[10005] flex flex-col p-4 w-screen h-screen left-0 top-0">
    
    <div className="flex justify-between items-center mb-6">
      <p className="text-xl font-bold text-black">Search</p>
      <button 
        className="p-3 bg-gray-100 rounded-full active:scale-95" 
        onClick={() => setIsMobileOpen(false)}
      >
        <X className="text-black w-6 h-6" />
      </button>
    </div>

    <input
      autoFocus
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search for items..."
      className="w-full border-2 border-gray-200 px-4 py-4 rounded-2xl outline-none text-lg text-black focus:border-black transition-colors"
    />
  </div>
)}
    </>
  );
}