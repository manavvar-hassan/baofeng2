"use client";

import { Battery, Lock, SatelliteDish, Siren, Volume2, Zap } from "lucide-react";
import Image from "next/image";

const icons = [
  { id: 1, content: <SatelliteDish color="#3ea4ae" size={30} />, delay: "0s", left: "46%", top: "28%", x: "20px" },
  { id: 2, content: <Siren color="#3ea4ae" size={30} />, delay: "0.5s", left: "48%", top: "54%", x: "20px" },
  { id: 3, content: <Zap color="#3ea4ae" size={30} />, delay: "1s", left: "58%", top: "50%", x: "28px" },
  { id: 4, content: <Battery color="#3ea4ae" size={30} />, delay: "1.5s", left: "40%", top: "60%", x: "-25px" },
  { id: 5, content: <Volume2 color="#3ea4ae" size={30} />, delay: "1.9s", left: "48%", top: "70%", x: "25px" },
  { id: 6, content: <Lock color="#3ea4ae" size={30} />, delay: "2.5s", left: "38%", top: "68%", x: "-15px" },
];

export default function HologramIcons() {
  return (
    <div className="relative flex justify-centeoverflow-hidden">

      {/* 📱 Walkie Talkie */}
      <Image
      width={200}
      height={300}
        src="/images/feature.png"
        alt="Walkie Talkie"
        className="w-full relative"
      />

      {/* 💡 Light Beam */}
      <div className="absolute top-0 left-[45%] -translate-x-1/2 w-32 h-40 bg-cyan-400/30 blur-2xl opacity-70 animate-beam" />

      {/* 🔷 Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {icons.map((icon) => (
          <span
            key={icon.id}
            className="icon animate-float"
            style={{
              left: icon.left,
              top: icon.top,
              position: "absolute",
              animationDelay: icon.delay,
              "--x": icon.x,
            } as React.CSSProperties & { '--x': string }}
          >
            {icon.content}
          </span>
        ))}
      </div>

      {/* 🧠 Styles */}
      <style jsx>{`
        .icon {
          font-size: 20px;
          color: #22d3ee;
          text-shadow: 0 0 10px #00f0ff;
        }

        @keyframes floatUp {
          0% {
            transform: translate(0px, 0px) scale(0.7);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), -120px) scale(1.3);
            opacity: 0;
          }
        }

        .animate-float {
          animation: floatUp 3s ease-in-out infinite;
        }

        @keyframes beam {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-beam {
          animation: beam 2s infinite ease-in-out;
        }
      `}</style>

    </div>
  );
}