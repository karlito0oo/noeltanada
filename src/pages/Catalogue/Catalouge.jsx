import React from "react";
import CatalogueSection from "./components/CatalogueSection";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import FooterSection from "../../components/FooterSection";
import MaterialsSwatchesSection from "./components/MaterialsSwatchesSection";
import usePageTitle from "../../hooks/usePageTitle";

const Catalouge = () => {
  usePageTitle("Catalogue");
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
