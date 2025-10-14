import React from "react";

const EcoVisionarySection = () => {
  return (
    <section className="bg-[#fcf8f5] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12 text-gray-900">
          Eco-Visionary Designer & Innovator
        </h2>

        {/* Background & Global Experience */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-amber-900 mb-4">
            Background & Global Experience
          </h3>
          <p className="text-lg text-gray-900 leading-relaxed">
            <strong>Noel Tañada's</strong> vision is rooted in a blend of
            heritage and global experience. He is the grandson of the esteemed
            Filipino nationalist Senator <strong>Lorenzo Tañada</strong>. After
            initially studying law and then transitioning to Business
            Management, he relocated to Los Angeles, gaining design experience
            at prominent firms such as Ethan Allen, Crate & Barrel, and Drexel
            Heritage. He even founded Tañada International, serving clients in
            Beverly Hills, before ultimately returning to the Philippines to
            pursue a purpose-driven path in sustainable design.
          </p>
        </div>

        {/* Ecohome Art & Tanglaw Initiatives */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-amber-900 mb-4">
            Ecohome Art & Tanglaw Initiatives
          </h3>
          <p className="text-lg text-gray-900 leading-relaxed mb-4">
            Together with his wife, Michelle Bautista, Tañada launched Ecohome
            Art—a social enterprise that fuses sustainable design with community
            empowerment. The company collaborates with marginalized groups to
            source materials, such as:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-900">
            <li>
              <strong>Recycled doy</strong> (juice) packs from Kilus Foundation.
            </li>
            <li>
              <strong>Tikog</strong> (grass) weaves from Balikatan sa Kaunlaran.
            </li>
            <li>
              <strong>Water hyacinth</strong> supplied by the cooperative One
              Cainta in Rizal.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcoVisionarySection;
