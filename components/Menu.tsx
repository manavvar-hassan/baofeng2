"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ChevronRight, MenuIcon } from "lucide-react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);

  const menuData = [
    {
      title: "Walkie Talkie",
      children: ["Model A", "Model B"],
    },
    {
      title: "License Free",
      children: ["Free 1", "Free 2"],
    },
    {
      title: "Business Radios",
      children: ["Business 1", "Business 2"],
    },
    {
      title: "HAM Corner",
      children: ["HAM 1", "HAM 2"],
    },
    {
      title: "Licence Radios",
      children: ["Radio 1", "Radio 2"],
    },
  ];

  useEffect(() => {
    if (!panelRef.current) return;

    if (open) {
      // Panel animation
      gsap.fromTo(
        panelRef.current,
        { y: "-100%" },
        { y: "18%", duration: 0.5, ease: "power3.out" }
      );

      // 🔥 Reset before animating
      gsap.set(linksRef.current, { y: 30, opacity: 0 });

      // 🔥 Stagger animation
      gsap.to(linksRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.2,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      // Close animation
      gsap.to(panelRef.current, {
        y: "-100%",
        duration: 0.4,
        ease: "power3.in",
      });

      // Reset items (important)
      gsap.set(linksRef.current, { clearProps: "all" });
    }
  }, [open]);

  return (
    <div>
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex rounded-md cursor-pointer"
      >
        <MenuIcon />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Menu Panel */}
      <div
        ref={panelRef}
        className="fixed -top-[10px] left-7 w-[300px] bg-[#F3FBFF]/90 z-50 rounded-b-3xl p-6 shadow-xl overflow-visible"
        style={{ transform: "translateY(-100%)" }}
      >
        {/* Top Bar */}
        <div className="flex justify-start mb-8">
          <button
            onClick={() => setOpen(false)}
            className="text-lg font-semibold cursor-pointer"
          >
            ✕ Close
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start gap-3 text-xl font-medium">
          {menuData.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              className="relative w-full group"
            >
              {/* Parent */}
              <div className="flex justify-between items-center cursor-pointer hover:text-[#0069AF]">
                {item.title}
                <ChevronRight className="transition-transform group-hover:rotate-90" />
              </div>

              {/* Submenu (hover based) */}
              <div
                className="
                  absolute top-0 left-full ml-4 
                  bg-[#F3FBFF] shadow-lg rounded-xl p-4 
                  opacity-0 translate-x-5 
                  pointer-events-none
                  group-hover:opacity-100 
                  group-hover:translate-x-0 
                  group-hover:pointer-events-auto
                  transition-all duration-300
                "
              >
                {item.children.map((sub, j) => (
                  <div
                    key={j}
                    className="w-[120px] cursor-pointer hover:text-[#0069AF]"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t my-8" />

        {/* Other */}
        <div className="flex flex-col gap-3 text-sm text-gray-400">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;