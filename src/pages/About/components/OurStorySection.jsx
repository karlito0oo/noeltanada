import React from "react";

const OurStorySection = () => {
  return (
    <section
      className="px-4 md:px-20 py-8 "
      style={{ backgroundColor: "#f6f1ed" }}
    >
      <h2 className="text-5xl font-serif font-normal mb-12 text-black">
        Our Story
      </h2>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/about-page/cover1.png"
            alt="Craftsmen working on sustainable furniture"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/about-page/cover2.png"
            alt="Sustainable furniture crafting process"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Story Text */}
      <div className="max-w-none text-black">
        <p className="text-lg leading-relaxed text-justify">
          Noel Tanada's journey began with a vision to transform Filipino design
          into a force for sustainability. Inspired by his heritage and the
          urgent call to address waste, he began experimenting with water
          hyacinth, palochina wood, doypacks, and other indigenous materials.
          This passion evolved into EcoHomeArt, his creative platform where
          design meets advocacy. Today, Noel continues to craft furniture that
          not only beautifies homes but also raises awareness of how plastic
          waste and discarded materials can be reborn as timeless, functional
          pieces.
        </p>
      </div>
    </section>
  );
};

export default OurStorySection;
