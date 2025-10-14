import React from "react";

const FeaturedArticlesSection = () => {
  const articles = [
    {
      id: 1,
      quote:
        "Fashioning beautiful pieces of furniture, building materials out of waste",
      source: "Market Monitor (December 4, 2023)",
      description:
        "This detailed feature explores Noel Tanada's broader ventures under Alpha DDSI—including EcoHomeArt and WASTO Waste Solutions. It covers his leadership roles, collaborations with institutions like DOST's ITDI & PTRI, and his work with sustainable patents and circular design.",
      logo: "/media-page/market-monitor.png",
      backgroundColor: "#7d6040",
      textColor: "white",
    },
    {
      id: 2,
      quote: "10 Sustainable Filipino Brands for Men",
      source: "Esquire Philippines (July 12, 2019)",
      description:
        "A cultural spotlight among eco-conscious brands, EcoHomeArt and Noel Tanada are recognized for merging environmental responsibility with stylish, functional furniture—especially using bamboo and water hyacinths.",
      logo: "/media-page/esquire.png",
      backgroundColor: "#b8a38a",
      textColor: "white",
    },
    {
      id: 3,
      quote: "Filipino designer turns plastic waste into furniture",
      source: "Inquirer Lifestyle (September 16, 2023)",
      description:
        "This article highlights Noel Tanada as a furniture designer and eco warrior who crafts stylish solutions from plastic waste—including shampoo sachets and junk food packaging—to combat environmental pollution.",
      logo: "/media-page/lifestyle-iq.png",
      backgroundColor: "#dd9d4c",
      textColor: "white",
    },
    {
      id: 4,
      quote: "Tanada grandson designs with sustainable, accessible materials",
      source: "Inquirer Lifestyle (November 2, 2016)",
      description:
        "Delving deeper into his design ethos, this piece shows how Noel transforms raw, organic materials like bamboo and water hyacinth into forward-looking, functional furniture.",
      logo: "/media-page/lifestyle-iq.png",
      backgroundColor: "#f9e1c7",
      textColor: "black",
    },
  ];

  return (
    <section
      className="px-6 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-white"
      style={{ backgroundColor: "#fcf8f5" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-12 sm:mb-16 md:mb-20 text-black text-center">
          Featured Articles
        </h2>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden mx-auto max-w-md md:max-w-none"
              style={{ backgroundColor: article.backgroundColor }}
            >
            {/* Mobile-First Card Layout */}
            <div className="p-8 sm:p-10 md:p-12 flex flex-col min-h-[500px] sm:min-h-[550px] md:min-h-[600px] justify-center">
              
              {/* Quote - Prominent Mobile Design */}
              <div className="text-center mb-8">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-4 ${
                    article.textColor === "white" ? "text-white" : "text-black"
                  }`}
                >
                  "{article.quote}"
                </h3>

                {/* Source - Better Mobile Styling */}
                <p
                  className={`text-sm sm:text-base font-medium tracking-wide ${
                    article.textColor === "white"
                      ? "text-white/90"
                      : "text-gray-700"
                  }`}
                >
                  — {article.source}
                </p>
              </div>

              {/* Description - Mobile Optimized */}
              <div className="mb-6">
                <p
                  className={`text-sm sm:text-base md:text-lg leading-relaxed text-center ${
                    article.textColor === "white"
                      ? "text-white/85"
                      : "text-gray-600"
                  }`}
                >
                  {article.description}
                </p>
              </div>

              {/* Logo - Enhanced Mobile Display */}
              <div className="flex justify-center items-end mt-auto pt-4 border-t border-white/20">
                <img
                  src={article.logo}
                  alt="Publication logo"
                  className="h-8 sm:h-10 md:h-12 object-contain filter brightness-0 invert opacity-80"
                  style={{
                    filter: article.textColor === "white" 
                      ? "brightness(0) invert(1) opacity(0.9)" 
                      : "brightness(0) opacity(0.7)"
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;
