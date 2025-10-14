import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAllProducts } from "../../../constants";

const FeaturedCollectionSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const featuredProducts = useAllProducts.filter((p) => p.isFeatured);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 6;
  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  const getCurrentPageProducts = () => {
    const startIndex = currentPage * itemsPerPage;
    return featuredProducts.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="min-h-screen bg-[#f5f3f0] flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-[#7d6040] text-white flex flex-col">
        {/* Top Section with Cart and Search in one row */}
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 border border-white rounded flex items-center justify-center mr-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent border-b border-white/30 px-4 py-2 text-white placeholder-white/70 focus:outline-none"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 p-6">
          <nav className="space-y-4">
            {["Products", "Catalogue", "Media", "About", "Workshop"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-2 border-b border-white/10"
                >
                  {item === "Products" ? (
                    <Link
                      to="/products"
                      className="text-lg hover:text-white/80 transition-colors"
                    >
                      {item}
                    </Link>
                  ) : item === "Catalogue" ? (
                    <Link
                      to="/catalouge"
                      className="text-lg hover:text-white/80 transition-colors"
                    >
                      {item}
                    </Link>
                  ) : item === "Media" ? (
                    <Link
                      to="/media"
                      className="text-lg hover:text-white/80 transition-colors"
                    >
                      {item}
                    </Link>
                  ) : item === "About" ? (
                    <Link
                      to="/about"
                      className="text-lg hover:text-white/80 transition-colors"
                    >
                      {item}
                    </Link>
                  ) : item === "Workshop" ? (
                    <Link
                      to="/showroom"
                      className="text-lg hover:text-white/80 transition-colors"
                    >
                      {item}
                    </Link>
                  ) : (
                    <span className="text-lg">{item}</span>
                  )}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )
            )}
          </nav>

          <div className="mt-16">
            <div className="border-b border-white/20 pb-4 flex items-center justify-between">
              <Link
                to="/contact"
                className="text-lg hover:text-white/80 transition-colors"
              >
                Contact Us
              </Link>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="p-6 flex flex-col items-center">
          <img src="/logo-full.png" alt="Noel Tanada" className="w-48" />
          <div className="text-center">
            <span className="tracking-[0.3em] text-sm text-white font-light">
              WHERE FURNITURE IS{" "}
            </span>
            <span className="tracking-[0.3em] text-sm text-red-600 font-light">
              A
            </span>
            <span className="tracking-[0.3em] text-sm text-white font-light">
              RT
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-light text-gray-900">
            Featured Collection
          </h1>
          <Link
            to="/products"
            className="px-8 py-3 text-white font-medium uppercase tracking-wide hover:opacity-90 transition inline-block"
            style={{ backgroundColor: "#dd9d4c" }}
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>

        {/* Product Grid - Dynamic Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {getCurrentPageProducts().map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="text-center group"
              key={product.id}
            >
              <div className="bg-white rounded-lg p-8 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={`/${product.images?.[0] || product.image}`}
                  alt={product.name}
                  className="w-full h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">
                {product.name} | {product.category}
              </h3>
              <p className="text-gray-600">
                PHP {product.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === index
                    ? "bg-[#7d6040]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCollectionSection;
