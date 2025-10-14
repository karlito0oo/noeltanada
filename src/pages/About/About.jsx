import React from "react";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import OurStorySection from "./components/OurStorySection";
import FounderArtisanSection from "./components/FounderArtisanSection";
import DesignPhilosophySection from "./components/DesignPhilosophySection";
import OurPartnersSection from "./components/OurPartnersSection";
import OurBrandsSection from "./components/OurBrandsSection";
import FooterSection from "../../components/FooterSection";
import OurTeamSection from "./components/OurTeamSection";
import usePageTitle from "../../hooks/usePageTitle";

const About = () => {
  usePageTitle("About");
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      <OurStorySection />

      <FounderArtisanSection />

      <DesignPhilosophySection />

      <OurPartnersSection />

      <OurBrandsSection />

      <OurTeamSection />

      <FooterSection />
    </div>
  );
};

export default About;
