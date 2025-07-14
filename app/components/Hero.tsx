"use client";
import React from "react";
import NavBar from "./NavBar";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="relative max-h-[95vh] overflow-hidden">
      {/* Fixed NavBar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-5 pt-5">
        <NavBar />
      </div>

      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 via-blue-500/10 to-purple-500/20"></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/10 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>

      {/* Hero Content - Centered Layout */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-5">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Anonymous Chat Rooms <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                for Free Speech
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create time-limited chat rooms where users can speak freely with
              optional content moderation. Share with friends, family, or
              colleagues while maintaining anonymity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl shadow-lg shadow-cyan-500/25 border-none hover:shadow-cyan-500/40 hover:-translate-y-2 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group cursor-pointer relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 hover:-translate-y-2 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default Hero;
