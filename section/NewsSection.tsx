"use client";

import { ArrowUpRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Emergency Response Teams: Best Walkie Talkie",
    desc: "Learn how emergency response teams are using modern radio systems.",
    img: "/images/news/1.jpg",
    tag: "Safety",
    author: "David Chen",
    date: "Mar 8",
    time: "4 min read",
  },
  {
    id: 2,
    title: "Understanding Radio Frequencies: A Complete Guide",
    desc: "Everything you need to know about radio frequencies.",
    img: "/images/news/2.png",
    tag: "Education",
    author: "Emily Rodriguez",
    date: "Mar 5",
    time: "6 min read",
  },
  {
    id: 3,
    title: "Upgrading Your Security Team's Communication System",
    desc: "Key considerations when upgrading your radio infrastructure.",
    img: "/images/news/3.jpg",
    tag: "Business",
    author: "Michael Thompson",
    date: "Mar 3",
    time: "5 min read",
  },
];

export default function NewsSection() {
  return (
    <>
      <section
        className="
          px-3 sm:px-5 lg:px-8
          py-5 sm:py-8
          bg-[#F3FBFF]
          rounded-2xl sm:rounded-3xl
          mx-3 sm:mx-5 lg:mx-8
          overflow-hidden
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-start gap-4 flex-wrap mb-6 sm:mb-10">
          <div className="max-w-2xl">
            <span
              className="
                text-[10px] sm:text-xs
                bg-[#0069AF]
                text-white
                px-3 py-1
                rounded-full
              "
            >
              BAOFENGRADIOS INSIGHTS
            </span>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-3">
              Latest News & Updates
            </h2>

            <p className="text-gray-500 mt-2 text-xs sm:text-sm max-w-lg">
              Stay informed about the latest in radio communication
              technology
            </p>
          </div>

          <button
            className="
              text-[#0069AF]
              text-sm
              flex items-center gap-1
              transition-colors
              duration-300
              hover:text-red-500
              hover:underline
              group
              cursor-pointer
              shrink-0
            "
          >
            View All Articles

            <span
              className="
                group-hover:rotate-45
                transition-transform
                duration-300
              "
            >
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

        {/* LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
          {/* FEATURED LEFT */}
          <div
            className="
              relative
              h-[300px]
              sm:h-[420px]
              rounded-2xl sm:rounded-3xl
              overflow-hidden
              group
              cursor-pointer
            "
          >
            {/* IMAGE */}
            <img
              src="/images/news/featured.png"
              alt=""
              className="
                featured-image
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700

                lg:group-hover:scale-105
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-black/50

                p-4 sm:p-6

                flex
                flex-col
                justify-end
              "
            >
              <span
                className="
                  bg-[#0069AF]
                  text-white
                  text-[10px] sm:text-xs
                  px-3 py-1
                  rounded-full
                  w-fit
                  mb-3
                "
              >
                ⚡ FEATURED
              </span>

              {/* META */}
              <div
                className="
                  flex flex-wrap
                  items-center
                  gap-2
                  text-gray-300
                  text-[10px] sm:text-xs
                  mb-2
                "
              >
                <span>Sarah Mitchell</span>
                <span>•</span>
                <span>Mar 10, 2026</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-white
                  text-lg sm:text-2xl
                  font-semibold
                  mb-2
                  leading-snug
                "
              >
                Future of Digital Radio Communication in 2026
              </h3>

              {/* DESC */}
              <p
                className="
                  text-gray-200
                  text-xs sm:text-sm
                  mb-4
                  max-w-lg
                  line-clamp-2
                "
              >
                Discover the latest advancements in digital radio
                technology...
              </p>

              {/* LINK */}
              <span
                className="
                  text-white
                  text-xs sm:text-sm
                  flex items-center gap-1
                "
              >
                Read Full Story <ArrowUpRight size={14} />
              </span>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-3 sm:gap-4 min-w-0">
            {news.map((item) => (
              <div
                key={item.id}
                className="
                  news-card
                  flex
                  gap-3 sm:gap-4
                  bg-white
                  p-3 sm:p-4
                  rounded-xl sm:rounded-2xl
                  items-center
                  hover:shadow-md
                  transition
                  cursor-pointer
                  group
                "
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-xl shrink-0">
                  <img
                    src={item.img}
                    alt=""
                    className="
                      news-image
                      w-16 h-16
                      sm:w-20 sm:h-20
                      min-w-[64px]
                      sm:min-w-[80px]
                      object-cover
                      transition-transform
                      duration-500

                      lg:group-hover:scale-110
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="min-w-0">
                  <span
                    className="
                      text-[10px] sm:text-xs
                      bg-gray-200
                      px-2 py-1
                      rounded-full
                    "
                  >
                    {item.tag}
                  </span>

                  {/* META */}
                  <div
                    className="
                      text-[10px] sm:text-xs
                      text-gray-400
                      mt-1
                      flex flex-wrap
                      gap-2
                    "
                  >
                    <span>{item.author}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>

                  {/* TITLE */}
                  <h4
                    className="
                      text-xs sm:text-sm
                      font-semibold
                      mt-1
                      group-hover:text-blue-600
                      transition
                      line-clamp-2
                    "
                  >
                    {item.title}
                  </h4>

                  {/* DESC */}
                  <p
                    className="
                      text-[10px] sm:text-xs
                      text-gray-500
                      mt-1
                      line-clamp-2
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

        @media (max-width: 1023px) {
          .featured-image {
            animation: slowZoom 5s ease-in-out infinite;
          }
        }
      `}</style>
    </>
  );
}