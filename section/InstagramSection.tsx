import InstaCard from "@/components/InstaCard";
import { Eye } from "lucide-react";

const InstagramSection = () => {
  return (
    <div className="mx-2 sm:mx-6 lg:mx-8 bg-gradient-to-r from-[#FB2C36] to-[#FF6900] py-6 sm:py-8 rounded-2xl">
      {/* 🔥 HEADER */}
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-sm lg:text-2xl font-semibold text-white">
          ⚡License Free on instagram
        </h2>

        <button className="flex items-center gap-2 text-xs md:text-sm font-semibold bg-white px-3 py-2 rounded-full border border-[#D7E9F2] text-[#0069AF] hover:bg-[#E0F3FA] transition">
          <Eye size={20} />
          View All
        </button>
      </div>

      {/* 📱 MOBILE → SLIDER */}
      <div className="flex overflow-x-auto no-scrollbar px-4 lg:hidden snap-x snap-mandatory">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="snap-start">
            <InstaCard />
          </div>
        ))}
      </div>

      {/* 💻 TABLET + DESKTOP */}
      <div className="hidden lg:flex flex-wrap justify-center gap-6 px-6 lg:px-16">
        {[1, 2, 3, 4].map((_, i) => (
          <InstaCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default InstagramSection;
