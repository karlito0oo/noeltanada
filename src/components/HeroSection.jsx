import React from "react";

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
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

    {/* Main content */}
    <div className="relative z-10 min-h-screen flex flex-col">
      {/* Header with logo */}
      <header className="p-8">
        <div className="flex items-start">
          {/* Logo images */}
          <div className="flex flex-col items-center">
            <img src="/logo-short.png" alt="Short Logo" className="w-16 mb-2" />
            <img src="/logo-full.png" alt="Full Logo" className="w-32" />
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex-1 flex flex-col justify-center px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Main headline */}
            <h1 className="text-white font-light leading-tight">
              <div className="text-6xl lg:text-7xl xl:text-8xl mb-2">WHERE</div>
              <div className="text-6xl lg:text-7xl xl:text-8xl mb-2">
                SUSTAINABILITY
              </div>
              <div className="text-6xl lg:text-7xl xl:text-8xl">MEETS ART</div>
            </h1>

            {/* Shop button */}
            <button
              className="text-white px-8 py-4 text-lg font-medium uppercase tracking-wide transition-colors duration-300"
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
          </div>
        </div>
      </main>

      {/* Bottom tagline */}
      <footer className="p-8">
        <div className="w-full flex justify-center items-center">
          <p className="text-white text-xs uppercase tracking-widest opacity-80 text-center whitespace-nowrap overflow-x-auto w-full px-2">
            NOEL TANADA TRANSFORMS WASTE INTO TIMELESS FURNITURE PIECES THAT
            MERGE INNOVATION, SUSTAINABILITY, AND FILIPINO CRAFTSMANSHIP
          </p>
        </div>
      </footer>
    </div>
  </div>
);

export default HeroSection;
