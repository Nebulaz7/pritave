"use client";
import React from "react";
import BlurText from "../bits/BlurText";
import Squares from "../bits/Squares";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="pt-7">
      {/* Hero Content */}
      <div className="text-right">
        <h1 className="">
          <BlurText
            text="Welcome!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl mb-8 text-center font-bold"
          />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
