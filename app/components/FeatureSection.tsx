"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FeatureSection = () => {
  const { scrollY } = useScroll();

  // Transform scroll position to different speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]); // Slow
  const y2 = useTransform(scrollY, [0, 1000], [0, -500]); // Fast

  return (
    <div style={{ height: "200vh" }}>
      <motion.div className="bg-blue-500 w-full h-screen" style={{ y: y1 }}>
        Slow parallax element
      </motion.div>

      <motion.div className="bg-pink-500 w-full h-screen" style={{ y: y2 }}>
        Fast parallax element
      </motion.div>
    </div>
  );
};
export default FeatureSection;
