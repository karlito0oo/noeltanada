import React from "react";

const FooterSection = () => (
  <footer className="relative">
    {/* Background Image Section */}
    <div 
      className="h-96 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/footer-background.png')"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content over background */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 md:px-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Follow Us</h2>
          
          {/* Instagram Icon */}
          <div className="flex items-center space-x-4">
            {/* Instagram Icon */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            {/* Facebook Icon */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/>
              </svg>
            </div>
          </div>
          
          {/* Right side links */}
          <div className="absolute top-8 right-4 md:right-20 text-white">
            <div className="text-right space-y-2">
              <div className="text-lg">Terms & Conditions</div>
              <div className="text-lg">FAQs</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Contact Section */}
    <div className="bg-[#7d574a] py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 flex-shrink-0 mt-1">
              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-lg">17 Valencia Street, Susana Heights Village,</p>
              <p className="text-lg">Tunasan, Muntinlupa City</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 flex-shrink-0 mt-1">
              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="text-lg">info.noeltanada.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 flex-shrink-0 mt-1">
              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
              <p className="text-lg">+632 8123 4567</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-white border-opacity-20">
          <p className="text-white text-sm">© 2025 Noel Tanada. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
