import React from "react";

const OurBrandsSection = () => {
  // Brand logos organized as they appear in the mockup
  const brandRows = [
    // Row 1 - Top brands
    [
      { src: "/about-page/our-brands/Screenshot_272.png", name: "EcoHomeArt" },
      { src: "/about-page/our-brands/Screenshot_273.png", name: "Wasto" },
    ],
    // Row 2 - Middle brands
    [
      { src: "/about-page/our-brands/Screenshot_274.png", name: "WOW" },
      { src: "/about-page/our-brands/Screenshot_275.png", name: "Tanglaw" },
      { src: "/about-page/our-brands/Screenshot_276.png", name: "Tresha" },
      {
        src: "/about-page/our-brands/Screenshot_277.png",
        name: "Agriplastics",
      },
    ],
    // Row 3 - Bottom brand (single logo)
    [
      {
        src: "/about-page/our-brands/Screenshot_278.png",
        name: "Alpha Distinct Development Solutions, Inc.",
      },
    ],
  ];

  return (
    <section className="px-4 md:px-20 py-8 bg-white">
      <h2 className="text-5xl font-serif font-normal mb-12 text-black">
        Our Brands
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {brandRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex items-center justify-center gap-12 ${
              rowIndex === 0
                ? "grid-cols-2"
                : rowIndex === 1
                ? "grid-cols-4"
                : "grid-cols-1"
            }`}
            style={{
              display: "grid",
              gridTemplateColumns:
                rowIndex === 0
                  ? "repeat(2, 1fr)"
                  : rowIndex === 1
                  ? "repeat(4, 1fr)"
                  : "1fr",
            }}
          >
            {row.map((brand) => (
              <div
                key={brand.src}
                className="flex items-center justify-center h-20"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBrandsSection;
