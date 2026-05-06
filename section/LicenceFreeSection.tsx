"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const items = [
  {
    title: "BAOFENG UV-5R Walkie Talkie VHF 136-174hz UHF",
    img: "/images/feature.png",
    price: "$219.99",
  },
  {
    title:
      "BF-33C UHF Compact Communication Radio Licence Free Walkie Talkie",
    img: "/images/hd1.png",
    price: "$189.99",
  },
  {
    title: "Baofeng BF-888s Licence Free Walkie Talkie",
    img: "/images/hd2.png",
    price: "$149.99",
  },
];

export default function LicenceFreeSection() {
  const [hovered, setHovered] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(items[0]);

  const imageRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });

  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animationFrame;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;

      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (imageRef.current) {
        imageRef.current.style.left = `${pos.current.x}px`;

        imageRef.current.style.top = `${pos.current.y}px`;

        imageRef.current.style.transform =
          "translate(-50%, -50%)";
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        className="
          mx-3 sm:mx-4 lg:mx-6
          px-1 sm:px-4 lg:px-6
          py-10 sm:py-14 lg:py-20
          grid md:grid-cols-2
          gap-8 lg:gap-10
          items-center
          relative
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight max-w-xl">
            Gear Up for Adventure: Explore Our Latest Collection
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 max-w-xl">
            Discover the top-rated Models, perfect for every outdoor
            enthusiast.
          </p>

          {/* LIST */}
          <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
            {items.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(item.img)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelectedProduct(item)}
                className="
                  flex justify-between items-center
                  border-b pb-3
                  cursor-pointer
                  group
                "
              >
                <span
                  className="
                    text-sm sm:text-base lg:text-lg
                    group-hover:text-black
                    transition
                    pr-4
                  "
                >
                  {item.title}
                </span>

                <span className="text-xs sm:text-sm flex items-center gap-1 shrink-0">
                  →
                </span>
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          <button
            className="
              mt-6
              bg-white
              text-black
              px-4
              py-2
              rounded-full
              text-xs sm:text-sm
              font-medium
              hover:bg-[#0069AF]
              hover:text-white
              cursor-pointer
              transition-all
              duration-300
              flex items-center gap-2
              group/btn
              overflow-hidden
            "
          >
            <span>View All Collection</span>

            <span
              className="
                flex items-center justify-center
                w-0
                opacity-0
                translate-x-2
                transition-all
                duration-300
                ease-out
                group-hover/btn:w-5
                group-hover/btn:opacity-100
                group-hover/btn:translate-x-0
              "
            >
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative bg-[#f5f5f5] rounded-2xl">
          {/* IMAGE */}
          <img
            src={selectedProduct.img}
            alt=""
            className="
              mobile-product-image
              w-full
              h-[320px]
              sm:h-[420px]
              lg:h-[500px]
              object-contain
              rounded-2xl
              transition-all
              duration-500
            "
          />

          {/* FLOATING CARD */}
          <div
            className="
              absolute
              -bottom-8 sm:-bottom-10
              left-3 sm:left-4
              right-3 sm:right-4
              bg-white
              rounded-xl
              p-3
              flex justify-between items-center
              gap-3
              shadow-lg
            "
          >
            <div className="min-w-0">
              <p className="text-xs sm:text-sm line-clamp-1">
                {selectedProduct.title}
              </p>

              <p className="text-sm sm:text-base font-semibold">
                {selectedProduct.price}
              </p>
            </div>

            <button
              className="
                bg-black
                text-white
                px-3 sm:px-4
                py-2
                rounded-full
                text-xs sm:text-sm
                font-medium
                hover:bg-[#0069AF]
                hover:text-white
                cursor-pointer
                transition-all
                duration-300
                flex items-center gap-2
                group/btn
                overflow-hidden
                shrink-0
              "
            >
              <span>Buy Now</span>

              <span
                className="
                  flex items-center justify-center
                  w-0
                  opacity-0
                  translate-x-2
                  transition-all
                  duration-300
                  ease-out
                  group-hover/btn:w-5
                  group-hover/btn:opacity-100
                  group-hover/btn:translate-x-0
                "
              >
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* CURSOR FOLLOW IMAGE */}
        {hovered && (
          <div
            ref={imageRef}
            className="
              hidden md:block
              fixed
              top-0
              left-0
              pointer-events-none
              z-50
              will-change-transform
            "
          >
            <img
              src={hovered}
              alt=""
              className="
                w-[180px]
                h-[240px]
                object-cover
                rounded-lg
                shadow-2xl
              "
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.05);
          }

          100% {
            transform: scale(1);
          }
        }

        @media (max-width: 767px) {
          .mobile-product-image {
            animation: slowZoom 5s ease-in-out infinite;
          }
        }
      `}</style>
    </>
  );
}