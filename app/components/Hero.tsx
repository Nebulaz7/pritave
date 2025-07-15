import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Curved Section with Text and CTA */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-6 py-12">
          {/* Curved Border Container */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl shadow-black/20 p-8 md:p-12 text-center">
            {/* Glass shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-30 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Chat Anonymously, <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Without Limits
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Speak freely in anonymous, time-limited chat rooms. Filtered or
                unfiltered. Your voice, your rules.
              </p>

              <div className="flex justify-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 border-none hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
