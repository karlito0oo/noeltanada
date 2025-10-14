import React from "react";

const DesignPhilosophySection = () => {
  return (
    <section className="px-4 md:px-20 py-8 bg-white">
      <h2 className="text-5xl font-serif font-normal mb-12 text-black">
        Design Philosophy
      </h2>
      <div className="mx-auto">
        <div className="rounded-lg overflow-hidden mb-8">
          <img
            src="/about-page/cover5.png"
            alt="Design philosophy in action"
            className="w-full h-70 object-cover"
          />
        </div>
        <div className="text-black">
          <p className="text-lg leading-relaxed text-justify mb-6">
            Our design philosophy centers on the belief that beauty and
            sustainability are not mutually exclusive. Every piece we create
            tells a story of transformation—where waste becomes wonder, and
            discarded materials find new purpose and meaning.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-6">
            We embrace the imperfections and unique characteristics of recycled
            materials, celebrating their history while crafting their future.
            This approach creates furniture with soul—pieces that are not only
            visually striking but also carry the narrative of environmental
            responsibility.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Through thoughtful design and meticulous craftsmanship, we prove
            that sustainable furniture can be both elegant and enduring. Our
            philosophy extends beyond aesthetics to encompass functionality,
            durability, and the positive impact each piece has on our world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophySection;
