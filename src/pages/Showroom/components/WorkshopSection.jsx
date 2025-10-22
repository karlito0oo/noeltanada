import React from "react";
import { useCms } from "../../../contexts/CmsContext";

const WorkshopSection = () => {
  const { settings, isLoading } = useCms();

  if (isLoading) {
    return (
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gray-600">Loading...</div>
        </div>
      </section>
    );
  }

  return (
  <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 text-center sm:text-left">
          {settings?.['showroom.workshop.title'] || 'Workshop'}
        </h1>
      </div>
      {/* Location and Contact Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8">
        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20">
          {/* Map Pin Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            stroke="currentColor"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M24 44s14-13.333 14-24A14 14 0 1 0 10 20c0 10.667 14 24 14 24z"
            />
            <circle
              cx="24"
              cy="20"
              r="5"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-gray-900 mb-2 leading-tight">
            {settings?.['showroom.workshop.address'] || 'Lot 639, Narra Rd., Bayanbayanan, San Pedro, Laguna 4023'}
          </h2>
        </div>
      </div>
      {/* Contact Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
        <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 p-4 sm:p-0 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
          {/* Mobile Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black flex-shrink-0"
          >
            <rect
              x="6"
              y="2"
              width="12"
              height="20"
              rx="2"
              stroke="#000"
              strokeWidth="2"
              fill="#fff"
            />
            <circle cx="12" cy="18" r="1" fill="#000" />
          </svg>
          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              Cellphone:
            </p>
            <p className="text-base sm:text-lg text-gray-900">
              {settings?.['showroom.workshop.cellphone'] || '+63 995 324 3922'}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 p-4 sm:p-0 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black flex-shrink-0"
          >
            <path
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              Telephone:
            </p>
            <p className="text-base sm:text-lg text-gray-900">
              {settings?.['showroom.workshop.telephone'] || '(02) 8876-7285'}
            </p>
          </div>
        </div>
      </div>
      {/* Workshop Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        <img
          src={settings?.['showroom.workshop.image1'] || '/showroom-page/4.png'}
          alt="Workshop 1"
          className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
        />
        <img
          src={settings?.['showroom.workshop.image2'] || '/showroom-page/5.png'}
          alt="Workshop 2"
          className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Office Hours and Weekend Visits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
          <p className="text-gray-900">
            {settings?.['showroom.workshop.hours'] || 'Monday – Saturday, 10:00 AM – 5:00 PM'}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Weekend Visits
          </h3>
          <p className="text-gray-900 mb-1">
            {settings?.['showroom.workshop.weekend_visits'] || 'By appointment only'}
          </p>
          <p className="text-gray-900">
            Contact: {settings?.['showroom.workshop.weekend_contact'] || '+63 995 324 3922'}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Deliveries</h3>
          <p className="text-gray-900">
            {settings?.['showroom.workshop.deliveries'] || 'Monday – Saturday, 10:00 AM – 5:00 PM'}
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default WorkshopSection;
