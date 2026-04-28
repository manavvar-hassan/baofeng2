"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import RadarEffect from "./RadarEffect";

gsap.registerPlugin(MotionPathPlugin);

export default function OrbitIcons() {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    iconsRef.current.forEach((icon, i) => {
      if (!icon) return;

      gsap.to(icon, {
        duration: 7,
        repeat: -1,
        ease: "none",
        delay: i * 0.8,
        motionPath: {
          path: "M180,0 A180,180 0 1,1 -180,0 A180,180 0 1,1 180,0",
        },
        onUpdate() {
          const progress = this.progress();
          const scale = 0.6 + Math.sin(progress * Math.PI) * 0.6;

          gsap.set(icon, {
            scale,
            zIndex: Math.round(scale * 10),
          });
        },
      });
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center ml-18">
      <div className="absolute top-1 left-[42%]">
        <RadarEffect />
      </div>
      {/* WALKIE */}
      <Image src="/images/wt.png" width={292} height={462} alt="wt" />

      {/* ICONS */}
      {["vo-ai", "power", "vox", "channel", "fl", "fq", 'charger'].map((icon, i) => (
        <div
          key={icon} 
          ref={(el) => {
            if (el) iconsRef.current[i] = el;
          }}
          className="absolute"
        >
          <Image src={`/icons/${icon}.png`} width={50} height={50} alt="icon" className="h-auto w-auto"/>
        </div>
      ))}
    </div>
  );
}
