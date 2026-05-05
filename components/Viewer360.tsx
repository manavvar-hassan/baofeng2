"use client";

import { useState, useRef, useEffect } from "react";

export default function Viewer360() {
  const [frame, setFrame] = useState(2);
  const totalFrames = 81;

  const startX = useRef(0);
  const isDragging = useRef(false);
  const accumulated = useRef(0);

  const sensitivity = 8;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    accumulated.current = 0; // 🔥 reset
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;

    const diff = e.clientX - startX.current;
    accumulated.current += diff;

    // 👇 jitter avoid
    if (Math.abs(accumulated.current) < sensitivity) return;

    const frameChange = Math.floor(accumulated.current / sensitivity);

    if (frameChange !== 0) {
      setFrame((prev) => (prev + frameChange + totalFrames) % totalFrames);
      accumulated.current -= frameChange * sensitivity;
    }

    startX.current = e.clientX;
  };

  const stopDragging = () => {
    isDragging.current = false;
    accumulated.current = 0; // 🔥 fully stop
  };

  // 🔥 GLOBAL mouseup fix (important)
  useEffect(() => {
    window.addEventListener("mouseup", stopDragging);
    return () => {
      window.removeEventListener("mouseup", stopDragging);
    };
  }, []);

  return (
    <div
      className="mt-25 w-[600px] h-[600px] mx-auto cursor-grab active:cursor-grabbing border border-red-500"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={stopDragging}
    >
      <img
        src={`/images/product/0${frame}.png`}
        alt="360 view"
        className="w-full h-full object-contain select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
}