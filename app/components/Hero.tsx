"use client";
import React from "react";
import BlurText from "../bits/BlurText";
import Orb from "../bits/Orb";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="pt-4 font-proxima min-h-screen">
      {/* Hero Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh] px-5">
        {/* Text Column */}
        <div className="flex flex-col justify-center space-y-6">
          <BlurText
            text={`Anonymous Chat Rooms <br /> for Free Speech`}
            delay={15}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          />
          <p className="text-2xl">
            Create time-limited chat rooms where users can speak freely with
            optional content moderation. Share with friends, family, or
            colleagues while maintaining anonymity.
          </p>

          {/* Optional: Add CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="btn bg-sky-500 text-white px-6 py-3 rounded-4xl shadow-lg shadow-sky-500/50 border-none hover:shadow-pink-sky/75 hover:-translate-y-1 transition-transform duration-200">
              Get Started
            </button>
            <button className="btn text-white rounded-4xl shadow-lg shadow-sky-500/50 border-sky-500 hover:-translate-y-1 transition-transform duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* SVG/Animation Column */}
        <div className="flex items-center justify-center">
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
