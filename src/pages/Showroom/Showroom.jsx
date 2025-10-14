import React from "react";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import FooterSection from "../../components/FooterSection";
import OfficeShowroomSection from "./components/OfficeShowroomSection";
import WorkshopSection from "./components/WorkshopSection";
import usePageTitle from "../../hooks/usePageTitle";

const Showroom = () => {
  usePageTitle("Showroom");
  return (
    <div className="bg-[#fcf8f5] min-h-screen">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      <OfficeShowroomSection />
      <WorkshopSection />

      <FooterSection bgColor="black" />
    </div>
  );
};

export default Showroom;
