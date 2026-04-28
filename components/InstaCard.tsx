"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Play, Share } from "lucide-react";

export default function InstaCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnter = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const handleToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-[300px] lg:w-[343px] h-[400px] lg:h-[490px] relative cursor-pointer group ml-2 lg:ml-0">
      
      {/* 🔥 CARD UI */}
      <div className="absolute inset-0 bg-[rgb(243,251,255)] rounded-xl py-6 px-6">

        <p className="font-bold py-2">License Free on instagram</p>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-semibold flex items-center gap-2">
            <Image
              src="/images/insta-profile.png"
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            baofengindia
          </div>

          {/* 🔗 LINK */}
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-[#0069AF] text-white px-4 py-2 rounded-xl"
          >
            View Profile
          </a>
        </div>

        {/* 🔥 THUMBNAIL + VIDEO */}
        <div
          className="relative w-full h-[60%] rounded-xl overflow-hidden"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onClick={handleToggle}
        >
          {/* IMAGE */}
          <Image
            src="/images/insta-card.png"
            alt=""
            fill
            className={`object-cover transition duration-500 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* VIDEO */}
          <video
            ref={videoRef}
            src="/videos/wa2.mp4"
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* ▶️ Play Icon */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-3">
                <Play color="#454545" />
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0069AF] font-semibold py-1 capitalize block"
          >
            view on instagram
          </a>

          <div className="flex gap-4 mt-3">
            <Heart />
            <MessageCircle />
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
}