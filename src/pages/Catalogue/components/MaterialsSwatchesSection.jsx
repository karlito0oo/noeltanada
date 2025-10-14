import React from "react";

const MaterialsSwatchesSection = () => {
  const materials = [
    {
      id: 1,
      name: "Water Hyacinth",
      description:
        "Once an invasive aquatic plant choking Philippine rivers, now transformed into woven furniture, bags, and lighting pieces that symbolize rebirth.",
      image: "/mat-and-swatches/1.png",
    },
    {
      id: 2,
      name: "Plastic Waste",
      description:
        "Upcycled into durable, wood-like panels that are fire-resistant, water-proof, and termite-proof — turning pollution into innovation.",
      image: "/mat-and-swatches/2.png",
    },
    {
      id: 3,
      name: "Palochina",
      description:
        "Recycled from shipping crates, this wood finds a second life as chairs, tables, and storage solutions.",
      image: "/mat-and-swatches/3.png",
    },
    {
      id: 4,
      name: "Rebar (Reinforcing Bars)",
      description:
        "Industrial steel scraps repurposed into sleek, modern furniture frames.",
      image: "/mat-and-swatches/4.png",
    },
    {
      id: 5,
      name: "Doypacks (Beverage Cartons)",
      description:
        "Upcycled into bags, accessories, and unique design accents.",
      image: "/mat-and-swatches/5.png",
    },
    {
      id: 6,
      name: "Bamboo",
      description:
        "A timeless, sustainable Filipino material reinterpreted into bold and functional designs.",
      image: "/mat-and-swatches/6.png",
    },
  ];

  return (
    <section
      className="px-4 md:px-20 py-8 "
      style={{ backgroundColor: "#fcf8f5" }}
    >
      <h2 className="text-4xl font-serif font-normal mb-12 text-black">
        Materials & Swatches
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {materials.map((material) => (
          <div key={material.id} className="text-left">
            {/* Material Image */}
            <div className="mb-4">
              <img
                src={material.image}
                alt={material.name}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>

            {/* Material Info */}
            <h3 className="text-lg font-semibold mb-2 text-black">
              {material.name}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {material.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialsSwatchesSection;
