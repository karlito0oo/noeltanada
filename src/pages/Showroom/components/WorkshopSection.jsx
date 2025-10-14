import React from "react";

const WorkshopSection = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gray-900 text-left">
          Workshop
        </h1>
      </div>
      {/* Location and Contact Info */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20">
          {/* Map Pin Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            stroke="currentColor"
            className="w-16 h-16 text-black"
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
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">
            Lot 639, Narra Rd., Bayanbayanan, San Pedro, Laguna 4023
          </h2>
        </div>
      </div>
      {/* Contact Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex items-center gap-4">
          {/* Mobile Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-black"
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
          <div>
            <p className="text-lg font-semibold text-gray-900">Cellphone:</p>
            <p className="text-lg text-gray-900">+63 995 324 3922</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <div>
            <p className="text-lg font-semibold text-gray-900">Telephone:</p>
            <p className="text-lg text-gray-900">(02) 8876-7285</p>
          </div>
        </div>
      </div>
      {/* Workshop Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <img
          src="/showroom-page/4.png"
          alt="Workshop 1"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
        />
        <img
          src="/showroom-page/5.png"
          alt="Workshop 2"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Office Hours and Weekend Visits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
          <p className="text-gray-900">Monday – Saturday, 10:00 AM – 5:00 PM</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Weekend Visits
          </h3>
          <p className="text-gray-900 mb-1">By appointment only</p>
          <p className="text-gray-900">Contact: +63 995 324 3922</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Deliveries</h3>
          <p className="text-gray-900">Monday – Saturday, 10:00 AM – 5:00 PM</p>
        </div>
      </div>
    </div>
  </section>
);

export default WorkshopSection;
