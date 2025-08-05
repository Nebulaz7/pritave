"use client";
import React from "react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <div className="m-10 p-10 flex gap-4">
      FeatureSection
      <h1>Framer motion</h1>
      <motion.div
        //   whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onTapStart={() => {
          console.log("Tap has started");
        }}
        className="h-6 w-6 rounded-2xl m-2 p-10 bg-pink-400"
      />
    </div>
  );
};

export default FeatureSection;
