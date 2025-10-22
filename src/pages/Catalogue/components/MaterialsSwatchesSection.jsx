import React, { useEffect, useState } from "react";
import { catalogueService } from "../../../services/CatalogueService";

const MaterialsSwatchesSection = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await catalogueService.getAllCatalogues();
        if (response.success) {
          // Sort by order and map to match component structure
          const sortedMaterials = response.data
            .sort((a, b) => a.order - b.order)
            .map((item) => ({
              id: item.id,
              name: item.title,
              description: item.description,
              image: item.image_url,
            }));
          setMaterials(sortedMaterials);
        }
      } catch (error) {
        console.error("Error fetching materials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  if (loading) {
    return (
      <section
        className="px-4 md:px-20 py-8"
        style={{ backgroundColor: "#fcf8f5" }}
      >
        <h2 className="text-4xl font-serif font-normal mb-12 text-black">
          Materials & Swatches
        </h2>
        <p className="text-center text-gray-500">Loading materials...</p>
      </section>
    );
  }

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
