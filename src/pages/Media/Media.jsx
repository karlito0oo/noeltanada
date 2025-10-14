import React from "react";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import MediaSection from "./components/MediaSection";
import FeaturedArticlesSection from "./components/FeaturedArticlesSection";
import FeaturedVideosSection from "./components/FeaturedVideosSection";
import FooterSection from "../../components/FooterSection";
import usePageTitle from "../../hooks/usePageTitle";

const Catalouge = () => {
  usePageTitle("Media");
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      <MediaSection />

      <FeaturedArticlesSection />

      <FeaturedVideosSection />

      <FooterSection />
    </div>
  );
};

export default Catalouge;
