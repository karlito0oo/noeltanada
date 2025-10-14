import React from "react";

const ProfileImpactSection = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Background & Global Experience */}
      <div>
        <h3 className="text-3xl md:text-4xl font-serif font-semibold text-amber-900 mb-6">
          Background & Global Experience
        </h3>
        <p className="text-lg text-gray-900 mb-4">
          Tañada is recognized as one of the first Filipino designers to successfully commercialize furniture made entirely from ocean plastic debris—turning harmful waste into durable, aesthetically pleasing products.
        </p>
        <p className="text-lg text-gray-900 mb-4">
          His company, <strong>Alpha District Development Solutions</strong>, developed Ecomarine, a proprietary material line crafted from shampoo sachets, junk food packets, aluminum, and paper waste. These are reformed into:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-900 mb-2">
          <li><strong>Rigid plastic lumber sheets</strong>—solid, durable, and 100% plastic.</li>
          <li><strong>Composite "faux plywood"</strong>—flexible and versatile, ideal for tables, benches, drawers, and interior finishes.</li>
        </ul>
        <p className="text-lg text-gray-900">
          The plastic lumber is also used in crates, pallets, and trays, offering eco-conscious alternatives to traditional wood products.
        </p>
      </div>

      {/* Community Impact & Design Philosophy */}
      <div>
        <h3 className="text-3xl md:text-4xl font-serif font-semibold text-amber-900 mb-6">
          Community Impact & Design Philosophy
        </h3>
        <p className="text-lg text-gray-900 mb-4">
          <strong>Noel Tañada</strong> channels social responsibility by working with grassroots cooperatives. Materials from small-scale weavers and women’s groups are transformed into high-value design objects, providing sustainable livelihoods. Tañada's aesthetic vision is influenced by modernist traditions (e.g., Charles Mackintosh) and contemporary lighting brands like Artemide, blending sleek lines with soft organic forms.
        </p>
        <p className="text-lg text-gray-900">
          His work seeks to harmonize inhabitant needs, spatial aesthetics, and material innovation—always emphasizing the value of Filipino resources and craftsmanship.
        </p>
      </div>
    </div>
  </section>
);

export default ProfileImpactSection;
