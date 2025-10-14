import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAllProducts } from "../../../constants";

const FeaturedCollectionSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const featuredProducts = useAllProducts.filter((p) => p.isFeatured);

  // Search functionality
  const searchProducts = useAllProducts.filter(
    (product) =>
      searchQuery.length > 0 &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description &&
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (product.material &&
          product.material.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowSearchResults(query.length > 0);
    setCurrentPage(0); // Reset to first page when searching
  };

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine which products to show based on search state
  const displayProducts = showSearchResults ? searchProducts : featuredProducts;
  const itemsPerPage = isMobile ? 2 : 6; // Mobile: 2 stacked, Desktop: 6 in grid (2 rows x 3 cols)
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);

  const getCurrentPageProducts = () => {
    const startIndex = currentPage * itemsPerPage;
    return displayProducts.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="min-h-screen bg-[#f5f3f0] flex flex-col lg:flex-row relative">
      {/* Mobile Header */}
      <div className="lg:hidden bg-[#7d6040] text-white p-4 flex items-center justify-between">
        <img src="/logo-short.png" alt="Noel Tanada" className="h-8" />
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border border-white rounded flex items-center justify-center">
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
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative bg-[#7d6040] text-white w-80 max-w-[85vw] flex flex-col">
            <div className="p-4 border-b border-white/20 flex items-center justify-between">
              <img src="/logo-short.png" alt="Noel Tanada" className="h-8" />
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-white/20">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-transparent border-b border-white/30 px-4 py-3 text-white placeholder-white/70 focus:outline-none text-base"
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

            {/* Mobile Navigation */}
            <div className="flex-1 p-4 overflow-y-auto">
              <nav className="space-y-2">
                {["Products", "Catalogue", "Media", "About", "Workshop"].map(
                  (item) => (
                    <div key={item} className="border-b border-white/10 pb-3">
                      {item === "Products" ? (
                        <Link
                          to="/products"
                          onClick={() => setSidebarOpen(false)}
                          className="flex items-center justify-between py-3 text-lg hover:text-white/80 transition-colors"
                        >
                          {item}
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
                        </Link>
                      ) : item === "Catalogue" ? (
                        <Link
                          to="/catalouge"
                          onClick={() => setSidebarOpen(false)}
                          className="flex items-center justify-between py-3 text-lg hover:text-white/80 transition-colors"
                        >
                          {item}
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
                        </Link>
                      ) : item === "Media" ? (
                        <Link
                          to="/media"
                          onClick={() => setSidebarOpen(false)}
                          className="flex items-center justify-between py-3 text-lg hover:text-white/80 transition-colors"
                        >
                          {item}
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
                        </Link>
                      ) : item === "About" ? (
                        <Link
                          to="/about"
                          onClick={() => setSidebarOpen(false)}
                          className="flex items-center justify-between py-3 text-lg hover:text-white/80 transition-colors"
                        >
                          {item}
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
                        </Link>
                      ) : item === "Workshop" ? (
                        <Link
                          to="/showroom"
                          onClick={() => setSidebarOpen(false)}
                          className="flex items-center justify-between py-3 text-lg hover:text-white/80 transition-colors"
                        >
                          {item}
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
                        </Link>
                      ) : (
                        <span className="flex items-center justify-between py-3 text-lg">
                          {item}
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
                        </span>
                      )}
                    </div>
                  )
                )}

                <div className="border-b border-white/10 pb-3 mt-6">
                  <Link
                    to="/contact"
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center justify-between py-3 text-lg hover:text-white/80 transition-colors"
                  >
                    Contact Us
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
                  </Link>
                </div>
              </nav>
            </div>

            {/* Mobile Logo */}
            <div className="p-4 flex flex-col items-center border-t border-white/20">
              <img
                src="/logo-full.png"
                alt="Noel Tanada"
                className="w-32 mb-2"
              />
              <div className="text-center">
                <span className="tracking-[0.2em] text-xs text-white font-light">
                  WHERE FURNITURE IS{" "}
                </span>
                <span className="tracking-[0.2em] text-xs text-red-600 font-light">
                  A
                </span>
                <span className="tracking-[0.2em] text-xs text-white font-light">
                  RT
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-80 bg-[#7d6040] text-white flex-col">
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
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
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
      <div className="flex-1 p-4 sm:p-6 lg:p-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-12 space-y-4 sm:space-y-0">
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900">
              {showSearchResults ? "Search Results" : "Featured Collection"}
            </h1>
            {showSearchResults && (
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-sm text-gray-600">
                  {displayProducts.length} product
                  {displayProducts.length !== 1 ? "s" : ""} found for "
                  {searchQuery}"
                </p>
                <button
                  onClick={() => handleSearch("")}
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
          <Link
            to="/products"
            className="w-full sm:w-auto text-center px-4 sm:px-8 py-2 sm:py-3 text-white font-medium uppercase tracking-wide hover:opacity-90 transition inline-block text-sm sm:text-base"
            style={{ backgroundColor: "#dd9d4c" }}
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>

        {/* Product Grid - Responsive Layout */}
        {displayProducts.length === 0 && showSearchResults ? (
          // No search results
          <div className="text-center py-12">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-4">
              Try searching with different keywords
            </p>
            <button
              onClick={() => handleSearch("")}
              className="px-4 py-2 bg-[#7d6040] text-white rounded hover:bg-[#6d5235] transition-colors"
            >
              Browse Featured Products
            </button>
          </div>
        ) : isMobile ? (
          // Mobile: 2 Products Stacked Per Page
          <div className="space-y-6 mb-6">
            {getCurrentPageProducts().map((product) => (
              <Link
                to={`/product/${product.id}`}
                className="block group"
                key={product.id}
              >
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-4">
                    {/* Product Image */}
                    <div>
                      <img
                        src={product.images_urls?.[0] || product.image_url}
                        alt={product.name}
                        className="w-full h-48 sm:h-56 object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-medium mb-2">
                        {product.name} | {product.category}
                      </h3>
                      <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                        PHP {product.price.toLocaleString()}
                      </p>
                      {product.description && (
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                          {product.description}
                        </p>
                      )}
                      <div className="text-gray-500 text-sm space-y-1">
                        {product.dimensions && <p>{product.dimensions}</p>}
                        {product.material && <p>{product.material}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Desktop: 3x2 Grid (6 products per page)
          <div className="grid grid-cols-3 gap-8 mb-8">
            {getCurrentPageProducts().map((product) => (
              <Link
                to={`/product/${product.id}`}
                className="text-center group"
                key={product.id}
              >
                <div className="bg-white rounded-lg p-8 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={product.images_urls?.[0] || product.image_url}
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
        )}

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-3 pb-4 lg:pb-0">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
                  currentPage === index
                    ? "bg-[#7d6040]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Mobile Bottom Spacing */}
        <div className="h-20 lg:hidden" />
      </div>
    </section>
  );
};

export default FeaturedCollectionSection;
