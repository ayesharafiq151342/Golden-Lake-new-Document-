"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ Next.js router

// No TypeScript types now (if you're using .jsx instead of .tsx)
const FlipCard = ({ icon, title, description, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      className="relative w-full h-72 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Flip Wrapper */}
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-5 border"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-3">{icon}</div> {/* ✅ Show Icon instead of Image */}
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-purple-600 text-white shadow-lg rounded-lg flex flex-col items-center justify-center p-5 border"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        >
          <p className="text-sm text-center">{description}</p>
          <button
            className="mt-4 px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-purple-100 transition"
            onClick={() => router.push(link)} // ✅ Navigate to route
          >
            View More
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
