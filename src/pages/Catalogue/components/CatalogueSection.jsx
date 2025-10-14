import React from "react";

const CatalogueSection = () => {
  return (
    <section className="px-4 md:px-20 py-8 bg-white">
      <h2 className="text-5xl font-serif font-normal mb-12">Catalogue</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Furniture Card */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={"/catalouge1.png"}
            alt="Furniture"
            className="w-full h-[400px] object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="text-black text-[6vw] md:text-[4vw] font-serif font-normal leading-none">
              Furniture
            </span>
          </span>
        </div>
        {/* Materials & Swatches Card */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={"/catalouge2.png"}
            alt="Materials & Swatches"
            className="w-full h-[400px] object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="text-black text-[5vw] md:text-[3vw] font-serif font-normal leading-none text-center">
              Materials & Swatches
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CatalogueSection;
