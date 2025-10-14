import React from "react";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import FooterSection from "../../components/FooterSection";
import ContactFormSection from "./components/ContactFormSection";
import usePageTitle from "../../hooks/usePageTitle";

const ContactUs = () => {
  usePageTitle("Contact Us");
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      {/* Main Content - grows to fill available space */}
      <main className="flex-grow">
        <ContactFormSection />
      </main>

      {/* Footer - stays at bottom */}
      <FooterSection bgColor="black" />
    </div>
  );
};

export default ContactUs;
