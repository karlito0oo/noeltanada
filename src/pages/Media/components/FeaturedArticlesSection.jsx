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
      className="px-4 md:px-20 py-8 bg-white"
      style={{ backgroundColor: "#fcf8f5" }}
    >
      <h2 className="text-5xl font-serif font-normal mb-12 text-black">
        Featured Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="p-8 rounded-lg flex flex-col h-full justify-between"
            style={{ backgroundColor: article.backgroundColor }}
          >
            {/* Quote */}
            <h3
              className={`text-xl font-medium mb-2 text-center ${
                article.textColor === "white" ? "text-white" : "text-black"
              }`}
            >
              "{article.quote}"
            </h3>

            {/* Source */}
            <p
              className={`text-sm mb-6 italic text-center ${
                article.textColor === "white"
                  ? "text-white/80"
                  : "text-gray-600"
              }`}
            >
              – {article.source}
            </p>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed mb-8 ${
                article.textColor === "white"
                  ? "text-white/90"
                  : "text-gray-700"
              }`}
            >
              {article.description}
            </p>

            {/* Logo */}
            <div className="flex justify-center mt-auto">
              <img
                src={article.logo}
                alt="Publication logo"
                className="h-8 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;
