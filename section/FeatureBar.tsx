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
    <section className="px-6 py-6">
      <div className="bg-[#F3FBFF] rounded-3xl px-6 py-8 flex flex-wrap justify-between gap-6">
        {features.map((item, i) => (
          <div key={i} className="flex items-start gap-4 max-w-[260px]">
            {/* 🔥 FIXED ICON */}
            <div className="w-12 h-12 min-w-[48px] min-h-[48px] flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm text-[#0069AF] transition-transform duration-300 hover:scale-110">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-[#11111] mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
