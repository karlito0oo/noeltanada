import React, { useState, useEffect } from "react";
import { useCms } from "../../../contexts/CmsContext";
import { catalogueService } from "../../../services/CatalogueService";

const CatalogueSection = () => {
  const { getSetting } = useCms();
  const [catalogues, setCatalogues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatalogues = async () => {
      try {
        const response = await catalogueService.getAllCatalogues();
        if (response.success) {
          setCatalogues(response.data);
        }
      } catch (error) {
        console.error("Error fetching catalogues:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalogues();
  }, []);

  // Get CMS images as fallback
  const heroImage = getSetting("catalogue.hero_image");
  const secondaryImage = getSetting("catalogue.secondary_image");

  if (loading) {
    return (
      <section className="px-4 md:px-20 py-8 bg-white">
        <h2 className="text-5xl font-serif font-normal mb-12">Catalogue</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-20 py-8 bg-white">
      <h2 className="text-5xl font-serif font-normal mb-12">Catalogue</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Furniture Card */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={heroImage}
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
            src={secondaryImage}
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
