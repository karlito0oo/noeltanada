import React from "react";

const OurPartnersSection = () => {
  // Partner logos organized in rows as they appear in the mockup
  const partnerRows = [
    // Row 1
    [
      { src: "/about-page/partners/Screenshot_272.png", name: "Partner 1" },
      { src: "/about-page/partners/Screenshot_273.png", name: "Partner 2" },
      { src: "/about-page/partners/Screenshot_274.png", name: "Partner 3" },
      { src: "/about-page/partners/Screenshot_275.png", name: "Partner 4" },
      { src: "/about-page/partners/Screenshot_276.png", name: "Partner 5" },
      { src: "/about-page/partners/Screenshot_277.png", name: "Partner 6" },
    ],
    // Row 2
    [
      { src: "/about-page/partners/Screenshot_278.png", name: "Partner 7" },
      { src: "/about-page/partners/Screenshot_279.png", name: "Partner 8" },
      { src: "/about-page/partners/Screenshot_280.png", name: "Partner 9" },
      { src: "/about-page/partners/Screenshot_281.png", name: "Partner 10" },
      { src: "/about-page/partners/Screenshot_282.png", name: "Partner 11" },
      { src: "/about-page/partners/Screenshot_283.png", name: "Partner 12" },
    ],
    // Row 3
    [
      { src: "/about-page/partners/Screenshot_284.png", name: "Partner 13" },
      { src: "/about-page/partners/Screenshot_285.png", name: "Partner 14" },
      { src: "/about-page/partners/Screenshot_286.png", name: "Partner 15" },
      { src: "/about-page/partners/Screenshot_287.png", name: "Partner 16" },
      { src: "/about-page/partners/Screenshot_288.png", name: "Partner 17" },
    ],
    // Row 4
    [
      { src: "/about-page/partners/Screenshot_289.png", name: "Partner 18" },
      { src: "/about-page/partners/Screenshot_290.png", name: "Partner 19" },
      { src: "/about-page/partners/Screenshot_291.png", name: "Partner 20" },
      { src: "/about-page/partners/Screenshot_292.png", name: "Partner 21" },
      { src: "/about-page/partners/Screenshot_293.png", name: "Partner 22" },
      { src: "/about-page/partners/Screenshot_294.png", name: "Partner 23" },
      { src: "/about-page/partners/Screenshot_295.png", name: "Partner 24" },
      { src: "/about-page/partners/Screenshot_296.png", name: "Partner 25" },
      { src: "/about-page/partners/Screenshot_297.png", name: "Partner 26" },
      { src: "/about-page/partners/Screenshot_298.png", name: "Partner 27" },
      { src: "/about-page/partners/Screenshot_299.png", name: "Partner 28" },
    ],
  ];

  return (
    <section
      className="px-4 md:px-20 py-8"
      style={{ backgroundColor: "#f6f1ed" }}
    >
      <h2 className="text-5xl font-serif font-normal mb-12 text-black">
        Our Partners
      </h2>

      <div className="max-w-6xl mx-auto space-y-8">
        {partnerRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-8 items-center justify-items-center ${
              row.length === 6
                ? "grid-cols-6"
                : row.length === 5
                ? "grid-cols-5"
                : "grid-cols-6 lg:grid-cols-11"
            }`}
          >
            {row.map((partner) => (
              <div 
                key={partner.src} 
                className="w-16 h-16 flex items-center justify-center"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartnersSection;
