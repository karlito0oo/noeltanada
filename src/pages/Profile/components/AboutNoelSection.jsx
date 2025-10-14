import React from "react";

const AboutNoelSection = () => {
  return (
    <section className="bg-[#fcf8f5]  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Logo */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
            <span className="inline-flex items-center justify-center gap-2">
              NOEL TAÑADA
            </span>
          </h1>
          <p className="text-xl text-amber-700 font-medium">
            Designer • Innovator • Artist
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-8 text-lg text-gray-900 leading-relaxed">
          <p>
            <strong>Noel Tañada</strong> is a Filipino furniture designer and
            innovator whose work transforms sustainability into a sophisticated
            art form. Drawing from his global design experience with brands such
            as <strong>Ethan Allen</strong>, <strong>Crate & Barrel</strong>,
            and <strong>Ralph Lauren</strong>, he channels his craft into
            creating pieces that merge modern aesthetics with environmental
            responsibility.
          </p>

          <p>
            His creativity and artistry are deeply influenced by his mother,{" "}
            <strong>Riqueza Feliciano Fenaughty</strong>, a renowned artist and
            fashion jewelry designer.
          </p>

          <p>
            Through his ventures under{" "}
            <strong>Alpha Distinct Development Solutions Inc.</strong>, he
            pioneers the use of recycled and reclaimed materials through
            sustainable brands such as <strong>EcoHomeArt</strong>,{" "}
            <strong>Wasto Waste Solutions</strong>,{" "}
            <strong>Tanglaw Road Safe</strong>, and{" "}
            <strong>Ecomarine Sheets</strong>. From water hyacinth and{" "}
            <em>tikog</em> grass to upcycled plastics and agriplastic
            composites, his creations embody functionality, beauty, and
            durability.
          </p>

          <p>
            In collaboration with the{" "}
            <em>Department of Science and Technology (DOST)</em>, Filipino
            innovations and technologies have been developed to convert waste
            into termite-resistant, waterproof, and fire-retardant
            boards—redefining what sustainable design can achieve.
          </p>

          <p>
            Noel has also introduced new methods of upcycling plastic, plant,
            and agricultural waste, creating products that enhance the everyday
            lives of Filipinos while promoting environmental responsibility.
          </p>

          <p>
            An artist at heart, his creations are more than objects—they are
            statements of environmental stewardship, community empowerment, and
            Filipino craftsmanship at its finest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutNoelSection;
