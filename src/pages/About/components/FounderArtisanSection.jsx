import React from "react";

const FounderArtisanSection = () => {
  return (
    <section
      className="px-4 md:px-20 py-8 "
      style={{ backgroundColor: "#fcf8f5" }}
    >
      <h2 className="text-5xl font-serif font-normal mb-12 text-black">
        Founder & Artisan
      </h2>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/about-page/cover3.png"
            alt="Noel Tanada - Founder and Artisan"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/about-page/cover4.png"
            alt="Artisan crafting sustainable furniture"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Content Text */}
      <div className="max-w-none text-black">
        <p className="text-lg leading-relaxed text-justify">
          As both founder and artisan, Noel Tanada embodies the spirit of
          innovation and craftsmanship that defines EcoHomeArt. With decades of
          experience in sustainable design, he has mastered the art of
          transforming discarded materials into beautiful, functional pieces.
          His hands-on approach ensures that every creation meets the highest
          standards of quality while staying true to environmental principles.
          Noel's vision extends beyond furniture-making; he seeks to inspire a
          movement where creativity and sustainability go hand in hand,
          empowering communities and preserving the planet for future
          generations.
        </p>
      </div>
    </section>
  );
};

export default FounderArtisanSection;
