import React, { useEffect } from "react";
import "./Buble.css"; // Import your Tailwind CSS styles

const BubbleBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".bubble-container");

    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      container.appendChild(bubble);

      const size = Math.random() * 5; // Random size between 5 and 25px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      const delay = Math.random() * 5; // Random delay between 0 and 5s
      bubble.style.animationDelay = `${delay}s`;

      const duration = Math.random() * 5 + 3; // Random duration between 3 and 8s
      bubble.style.animationDuration = `${duration}s`;

      bubble.style.left = `${Math.random() * 100}%`;

      bubble.style.animationName = "bubble-flame";

      // Randomize the horizontal movement
      const randomMovement = (Math.random() - 0.5) * 40; // Random number between -20 and 20
      bubble.style.setProperty("--movement", `${randomMovement}px`);
    }

    return () => {
      container.innerHTML = ""; // Clean up on component unmount
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Flame effect background */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-yellow-500 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 bubble-container"></div>
      </div>
    </div>
  );
};

export default BubbleBackground;
