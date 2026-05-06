"use client";

import { Truck, RefreshCcw, CreditCard, Shield } from "lucide-react";

const features = [
  {
    icon: <Truck size={20} />,
    title: "Free Shipping",
    desc: "Free same day delivery within Doha on orders above 200 INR.",
  },
  {
    icon: <RefreshCcw size={20} />,
    title: "Full Refund",
    desc: "Didn't like it? No problem! simply return within 7 days and get a full refund.",
  },
  {
    icon: <CreditCard size={20} />,
    title: "Debit & Credit Card",
    desc: "Don't have a Credit Card? We accept any debit card issued in Dubai.",
  },
  {
    icon: <Shield size={20} />,
    title: "100% Secure Payment",
    desc: "paymentText & Credit Card",
  },
];

export default function FeatureBar() {
  return (
    <section className="px-3 sm:px-5 lg:px-6 py-4 sm:py-6 mx-0 sm:mx-2">
      <div
        className="
          bg-[#F3FBFF]
          rounded-2xl sm:rounded-3xl

          px-4 sm:px-6
          py-5 sm:py-8

          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-5 sm:gap-6
        "
      >
        {features.map((item, i) => (
          <div
            key={i}
            className="
              flex
              items-start
              gap-3 sm:gap-4
            "
          >
            {/* ICON */}
            <div
              className="
                w-10 h-10
                sm:w-12 sm:h-12

                min-w-[40px]
                min-h-[40px]

                sm:min-w-[48px]
                sm:min-h-[48px]

                flex-shrink-0
                rounded-full
                bg-white

                flex
                items-center
                justify-center

                shadow-sm
                text-[#0069AF]

                transition-transform
                duration-300

                hover:scale-110
              "
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h4 className="font-semibold text-sm sm:text-base">
                {item.title}
              </h4>

              <p
                className="
                  text-xs sm:text-sm
                  text-[#111111]
                  mt-1
                  leading-relaxed
                "
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
