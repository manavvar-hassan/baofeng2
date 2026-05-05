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
    <section className="px-8 py-6 bg-[#F3FBFF] rounded-3xl mx-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <span className="text-xs bg-[#0069AF] text-white px-3 py-1 rounded-full">
            BAOFENGRADIOS INSIGHTS
          </span>

          <h2 className="text-3xl font-semibold mt-3">Latest News & Updates</h2>

          <p className="text-gray-500 mt-2 text-sm">
            Stay informed about the latest in radio communication technology
          </p>
        </div>

        <button className="text-[#0069AF] flex items-center gap-1 transition-colors duration-300 hover:text-red-500 hover:underline group cursor-pointer">
          View All Articles <span className="group-hover:rotate-45 transition-transform duration-300"> <ArrowUpRight size={16} /></span>
        </button>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* 🔥 Featured Left */}
        <div className="relative h-[420px] rounded-3xl overflow-hidden group cursor-pointer">
          <img
            src="/images/news/featured.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
            <span className="bg-[#0069AF] text-white text-xs px-3 py-1 rounded-full w-fit mb-3">
              ⚡ FEATURED
            </span>

            {/* 🔥 META INFO */}
            <div className="flex items-center gap-3 text-gray-300 text-xs mb-2">
              <span>Sarah Mitchell</span>
              <span>•</span>
              <span>Mar 10, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h3 className="text-white text-2xl font-semibold mb-2">
              Future of Digital Radio Communication in 2026
            </h3>

            <p className="text-gray-200 text-sm mb-4">
              Discover the latest advancements in digital radio technology...
            </p>

            <span className="text-white text-sm flex items-center gap-1">
              Read Full Story <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        {/* 🔥 Right Side Cards */}
        <div className="flex flex-col gap-4 min-w-0">
          {news.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white p-4 rounded-2xl items-center hover:shadow-md transition cursor-pointer group"
            >
              {/* Image */}
              <img
                src={item.img}
                className="w-20 h-20 min-w-[80px] object-cover rounded-xl"
              />

              {/* Content */}
              <div>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  {item.tag}
                </span>

                {/* 🔥 META INFO */}
                <div className="text-xs text-gray-400 mt-1 flex gap-2">
                  <span>{item.author}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                <h4 className="text-sm font-semibold mt-1 group-hover:text-blue-600 transition line-clamp-2">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
