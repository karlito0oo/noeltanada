import React from "react";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import FooterSection from "../../components/FooterSection";
import ContactFormSection from "./components/ContactFormSection";
import usePageTitle from "../../hooks/usePageTitle";

const ContactUs = () => {
  usePageTitle("Contact Us");
  return (
    <div className="bg-[#fcf8f5] min-h-screen">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      <ContactFormSection />

      <FooterSection bgColor="black" />
    </div>
  );
};

export default ContactUs;
