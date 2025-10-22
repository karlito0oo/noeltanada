import React from 'react';
import { useCms } from '../../contexts/CmsContext';

const Footer = () => {
  const { getSetting, getSettingsByGroup } = useCms();
  
  // Get footer settings
  const footerSettings = getSettingsByGroup('footer');
  
  const address = getSetting('footer.address', 'Address not set');
  const email = getSetting('footer.email', 'Email not set');
  const phone = getSetting('footer.phone', 'Phone not set');
  const termsAndConditions = getSetting('footer.terms_conditions', '<p>Terms and conditions not set</p>');
  const faqs = getSetting('footer.faqs', '<p>FAQs not set</p>');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-1">Address</h4>
                <p className="text-sm whitespace-pre-line">{address}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-1">Email</h4>
                <a 
                  href={`mailto:${email}`} 
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  {email}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-1">Phone</h4>
                <a 
                  href={`tel:${phone}`} 
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/products" className="text-sm text-gray-300 hover:text-white">Products</a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-300 hover:text-white">About</a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Terms & Conditions</h3>
            <div 
              className="text-sm text-gray-300 line-clamp-6"
              dangerouslySetInnerHTML={{ 
                __html: termsAndConditions.substring(0, 150) + '...' 
              }}
            />
            <button className="text-blue-400 hover:text-blue-300 text-sm mt-2">
              Read More
            </button>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FAQs</h3>
            <div 
              className="text-sm text-gray-300 line-clamp-6"
              dangerouslySetInnerHTML={{ 
                __html: faqs.substring(0, 150) + '...' 
              }}
            />
            <button className="text-blue-400 hover:text-blue-300 text-sm mt-2">
              View All FAQs
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 Noel Tañada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
