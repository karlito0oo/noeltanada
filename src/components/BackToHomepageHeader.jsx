import React, { useState } from "react";
import { Link } from "react-router-dom";

const BackToHomepageHeader = () => {
  return (
    <div className="px-4 md:px-20 py-4 border-b border-gray-200 bg-white">
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Homepage
      </Link>
    </div>
  );
};

export default BackToHomepageHeader;
