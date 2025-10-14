import React from "react";
import CatalogueSection from "./components/CatalogueSection";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import FooterSection from "../../components/FooterSection";
import MaterialsSwatchesSection from "./components/MaterialsSwatchesSection";

const Catalouge = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      <CatalogueSection />

      <MaterialsSwatchesSection />

      <FooterSection />
    </div>
  );
};

export default Catalouge;
