"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, MoveDown } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "UV-9700 UHF Radio",
    desc: "Licence Free Walkie Talkie Frequency 400/470MHz",
    img: "https://media.istockphoto.com/id/2230798272/photo/woman-with-walkie-talkie-in-park-closeup.jpg?s=1024x1024&w=is&k=20&c=LA0KIQv9s5ukXMYO4EqBz5sqi4mUzVtSrOi6USHiBDg=",
  },
  {
    title: "U5R UHF Radio",
    desc: "Reliable Long Range Communication",
    img: "https://plus.unsplash.com/premium_photo-1663099414016-88f0bca0f6b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // image zoom
    tl.fromTo(
      imageRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 2.5, ease: "power3.out" },
    );

    // text animation
    tl.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "0.7",
    );
  }, [index]);

  // auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        ref={imageRef}
        key={slides[index].img}
        src={slides[index].img}
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full w-full flex flex-col justify-center items-center mt-60 md:px-10 text-white"
      >
        <h1 className="text-2xl md:text-6xl font-semibold md:font-bold mb-1 md:mb-4">
          {slides[index].title}
        </h1>

        <p className="text-sm md:text-base mb-6">{slides[index].desc}</p>

        <button className="mt-0 mb-4 md:mb-0 md:mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0069AF] hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden">
          <span>Buy now</span>
          <span className="flex items-center justify-center w-0 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover/btn:w-5 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>
    </div>
  );
}
