import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <div
    className="min-h-screen relative overflow-hidden"
    style={{
      backgroundImage: "url(/hero-section-bg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Background overlay for darker tone */}
    <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-40"></div>

    {/* Main content */}
    <div className="relative z-10 min-h-screen flex flex-col">
      {/* Header with logo - Mobile Responsive */}
      <header className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start">
          {/* Logo images - Responsive sizing */}
          <div className="flex flex-col items-center">
            <img 
              src="/logo-short.png" 
              alt="Short Logo" 
              className="w-10 sm:w-12 lg:w-16 mb-1 sm:mb-2" 
            />
            <img 
              src="/logo-full.png" 
              alt="Full Logo" 
              className="w-24 sm:w-28 lg:w-32" 
            />
          </div>
        </div>
      </header>

      {/* Hero section - Mobile Responsive */}
      <main className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Main headline - Responsive Typography */}
            <h1 className="text-white font-light leading-tight">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-1 sm:mb-2">
                WHERE
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-1 sm:mb-2">
                SUSTAINABILITY
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                MEETS ART
              </div>
            </h1>

            {/* Shop button - Mobile Responsive */}
            <Link to="/products" className="inline-block">
              <button
                className="w-full sm:w-auto mt-4 sm:mt-5 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium uppercase tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "#7d6040" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6a5236")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#7d6040")
                }
              >
                SHOP
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom tagline - Mobile Responsive */}
      <footer className="p-4 sm:p-6 lg:p-8">
        <div className="w-full flex justify-center items-center">
          <p className="text-white text-xs sm:text-sm uppercase tracking-wide sm:tracking-widest opacity-80 text-center max-w-4xl leading-relaxed px-2">
            <span className="hidden sm:inline">
              NOEL TANADA TRANSFORMS WASTE INTO TIMELESS FURNITURE PIECES THAT
              MERGE INNOVATION, SUSTAINABILITY, AND FILIPINO CRAFTSMANSHIP
            </span>
            <span className="sm:hidden">
              TRANSFORMING WASTE INTO TIMELESS FURNITURE WITH INNOVATION & FILIPINO CRAFTSMANSHIP
            </span>
          </p>
        </div>
      </footer>
    </div>
  </div>
);

export default HeroSection;
