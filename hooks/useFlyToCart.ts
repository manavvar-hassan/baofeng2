"use client";

import { useRef } from "react";
import { cartRef } from "@/utils/cartRef";

export const useFlyToCart = () => {
  const isAnimating = useRef(false);

  const flyToCart = (imgEl: HTMLElement) => {
    const cart = cartRef.current;

    if (!imgEl || !cart || isAnimating.current) return;

    isAnimating.current = true;

    const imgRect = imgEl.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const clone = imgEl.cloneNode(true) as HTMLElement;

    // 🔥 initial style
    clone.style.position = "fixed";
    clone.style.left = `${imgRect.left}px`;
    clone.style.top = `${imgRect.top}px`;
    clone.style.width = `${imgRect.width}px`;
    clone.style.height = `${imgRect.height}px`;
    clone.style.zIndex = "9999";
    clone.style.pointerEvents = "none";
    clone.style.transition =
      "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s";
    clone.style.willChange = "transform";

    document.body.appendChild(clone);

    // 🎯 center calculation
    const imgCenterX = imgRect.left + imgRect.width / 2;
    const imgCenterY = imgRect.top + imgRect.height / 2;

    const cartCenterX = cartRect.left + cartRect.width / 2;
    const cartCenterY = cartRect.top + cartRect.height / 2;

    const dx = cartCenterX - imgCenterX;
    const dy = cartCenterY - imgCenterY;

    requestAnimationFrame(() => {
      clone.style.transform = `translate(${dx}px, ${dy}px) scale(0.4)`;
      clone.style.opacity = "0.6";
    });

    // 🔥 cart feedback
    cart.style.transition = "transform 0.2s ease";
    cart.style.transform = "scale(1.2)";

    setTimeout(() => {
      cart.style.transform = "scale(1)";
    }, 200);

    setTimeout(() => {
      clone.remove();
      isAnimating.current = false;
    }, 700);
  };

  return { flyToCart };
};