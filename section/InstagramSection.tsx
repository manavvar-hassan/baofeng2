import InstaCard from "@/components/InstaCard";

const InstagramSection = () => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 bg-gradient-to-r from-[#FB2C36] to-[#FF6900] py-6 sm:py-8 rounded-2xl">
      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-16 mb-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
          ⚡ License Free on instagram
        </h2>

        <p className="text-[#0069AF] font-semibold text-xs sm:text-sm px-4 py-2 bg-white rounded-full cursor-pointer">
          View All
        </p>
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
