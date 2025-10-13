import React from "react";

const FeaturedArticlesSection = () => (
  <section className="bg-[#f6f1ed] py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-serif mb-12 text-gray-900">
        Featured Articles
      </h2>

      <div className="flex flex-col md:flex-row gap-0">
        {/* Left: Article Card */}
        <div className="md:w-[65%] flex items-center ml-14">
          <div className="bg-[#b8a38a] rounded-lg p-12 flex flex-col justify-center w-full">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl italic font-medium mb-4 text-gray-800">
                "10 Sustainable Filipino Brands for Men"
              </h3>
              <p className="text-lg text-gray-700 mb-8 italic">
                — Esquire Philippines (July 12, 2019)
              </p>

              <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed">
                A cultural spotlight among eco-conscious brands, EcoHomeArt and
                Noel Tañada are recognized for merging environmental
                responsibility with stylish, functional furniture—especially
                using bamboo and water hyacinths.
              </p>

              <div className="flex justify-center">
                <img src="/esquire.png" alt="Esquire Logo" className="h-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-[35%]">
          <div
            className="rounded-lg overflow-hidden flex items-center justify-center"
            style={{ height: "400px" }}
          >
            <img
              src="/feature-articles-image.png"
              alt="Noel Tanada"
              className="w-auto h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedArticlesSection;
