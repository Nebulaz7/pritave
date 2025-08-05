"use client";
import React from "react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <div className="m-10 p-10 flex gap-4">
      FeatureSection
      <h1>Framer motion</h1>
      <motion.div
        initial={{ transform: "translate(-100px)", backgroundColor: "#fb64b6" }}
        whileInView={{
          transform: "translate(0px)",
          backgroundColor: "#67afe4",
        }}
        transition={{ type: "spring", ease: "easeOut", duration: 10 }}
        className="h-6 w-6 rounded-2xl m-2 p-10 bg-pink-400"
      />
    </div>
  );
};

export default FeatureSection;
