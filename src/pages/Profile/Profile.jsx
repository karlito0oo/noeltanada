import React from "react";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import FooterSection from "../../components/FooterSection";
import AboutNoelSection from "./components/AboutNoelSection";
import EcoVisionarySection from "./components/EcoVisionarySection";
import ProfileHighlightsSection from "./components/ProfileHighlightsSection";
import ProfileImpactSection from "./components/ProfileImpactSection";
import ProfileInnovationSection from "./components/ProfileInnovationSection";
import usePageTitle from "../../hooks/usePageTitle";

const Profile = () => {
  usePageTitle("Profile");
  return (
    <div className="bg-[#fcf8f5] min-h-screen">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      <AboutNoelSection />
      <EcoVisionarySection />
      <ProfileHighlightsSection />
      <ProfileImpactSection />
      <ProfileInnovationSection />

      <FooterSection />
    </div>
  );
};

export default Profile;
