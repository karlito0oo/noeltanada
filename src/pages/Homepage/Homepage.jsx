import React from "react";
import HeroSection from "./components/HeroSection";
import AboutNoel from "./components/AboutNoel";
import FeaturedCollectionSection from "./components/FeaturedCollectionSection";
import OurStorySection from "./components/OurStorySection";
import FeaturedArticlesSection from "./components/FeaturedArticlesSection";
import FeaturedVideosSection from "./components/FeaturedVideosSection";
import FooterSection from "../../components/FooterSection";
import usePageTitle from "../../hooks/usePageTitle";

function Homepage() {
  usePageTitle("Home");
  return (
    <>
      <HeroSection />
      <AboutNoel />
      <FeaturedCollectionSection />
      <OurStorySection />
      <FeaturedArticlesSection />
      <FeaturedVideosSection />
      <FooterSection showFollowUsAndTC={true} />
    </>
  );
}

export default Homepage;
