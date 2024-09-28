import React from "react";
import { motion } from "framer-motion";

const FloatingHoneycomb: React.FC = () => {
  const honeycombs = Array(8).fill(null); // Reduced to 8 honeycomb shapes

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {honeycombs.map((_, index) => (
        <motion.svg
          key={index}
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="absolute opacity-10" // Reduced opacity
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.8 + Math.random() * 0.4, // Smaller size range
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
            scale: 0.8 + Math.random() * 0.4,
          }}
          transition={{
            duration: 50 + Math.random() * 30, // Even slower movement
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <path
            d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
            fill="#eadaa2"
            stroke="#d8c88f"
            strokeWidth="1" // Thinner stroke
          />
        </motion.svg>
      ))}
    </div>
  );
};

export default FloatingHoneycomb;
