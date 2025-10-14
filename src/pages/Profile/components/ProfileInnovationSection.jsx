import React from "react";

const intellectualProperties = [
  {
    img: "/profile-page/4.png",
    title:
      "Department of Science and Technology—Industrial Technology Development Institute (DOST-ITDI)",
    details: [
      "THERMOPLASTIC COMPOSITE MATERIAL COMPRISING WOOD BYPRODUCTS",
      "UM Registration No. 2/2022/050073",
      "COMPOSITE MATERIAL COMPRISING AGRICULTURAL BYPRODUCTS",
      "UM Registration No. 2/2021/050370",
    ],
  },
  {
    img: "/profile-page/5.png",
    title: "Alpha Distinct Development Solutions Inc. (ADDSI)",
    details: [
      "METHOD OF PRODUCING A LIGNOCELLULOSIC COMPOSITE USING E. CRASSIPES",
      "UM Application No. 2/2025/051353",
      "METHOD OF UPCYCLING WASTE PLASTIC VIA THERMOCOMPRESSION PROCESS",
      "UM Application No. 2/2025/051351",
    ],
  },
];

const ProfileInnovationSection = () => (
  <section className="bg-[#f6f1ed] py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-10">
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <img
            src="/profile-page/3.png"
            alt="Innovative Works"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-2 text-center md:text-left">
            Innovative Works with Recycled Materials
          </h2>
          <p className="text-lg text-gray-900">
            Noel Tañada transforms everyday waste into artful, functional
            creations. By reimagining plastics, agricultural fibers, and
            discarded materials, he demonstrates how innovation and
            craftsmanship can turn what was once thrown away into pieces that
            inspire, serve, and sustain.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        INTELLECTUAL PROPERTIES
      </h3>
      <div className="flex flex-col gap-10">
        {intellectualProperties.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-contain mb-4 md:mb-0"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h4>
              {item.details.map((d, i) => (
                <p key={i} className="text-gray-900 text-base mb-1">
                  {d}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm italic text-gray-700">
        Assisted by Technological Institute of the Philippines (T.I.P.)
      </p>
    </div>
  </section>
);

export default ProfileInnovationSection;
