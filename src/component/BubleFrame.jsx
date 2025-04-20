import React, { useEffect } from "react";
import './Buble.css';
const BubbleFlame = () => {
  useEffect(() => {
    const container = document.querySelector(".bubble-container");

    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      container.appendChild(bubble);

      const size = Math.random() * 5 + 5; // Random size between 5 and 25px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      const delay = Math.random() * 10; // Random delay between 0 and 5s
      bubble.style.animationDelay = `${delay}s`;

      const duration = 15; // Random duration between 3 and 8s
      bubble.style.animationDuration = `${duration}s`;

      bubble.style.left = `${Math.random() * 100}%`;
      //bubble.style.bottom = `0`;

      bubble.style.animationName = "bubble-flame";
      bubble.style.opacity = "0";
      bubble.classList.add('pulse');
    }
  }, []);

  return (
    <div className="bubble-container absolute  inset-0 overflow-hidden">
      {/* Bubbles will be appended dynamically here */}
    </div>
  );
};

export default BubbleFlame;
