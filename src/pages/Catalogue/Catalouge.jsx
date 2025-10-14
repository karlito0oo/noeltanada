import React from "react";
import CatalogueSection from "./components/CatalogueSection";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";

const Catalouge = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      <CatalogueSection />
    </div>
  );
};

export default Catalouge;
