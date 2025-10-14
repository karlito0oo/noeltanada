import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterSection from "../../components/FooterSection";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import { useAllProducts } from "../../constants";
import usePageTitle from "../../hooks/usePageTitle";

const Products = () => {
  usePageTitle("Products");
  const [selectedAvailability, setSelectedAvailability] =
    useState("Availability");
  const [selectedPrice, setSelectedPrice] = useState("Price");
  const [selectedProductType, setSelectedProductType] =
    useState("Product Type");
  const [selectedSort, setSelectedSort] = useState("Date, new to old");

  // Product data with types
  const allProducts = useAllProducts;

  // Filter products based on selected filters
  let filteredProducts = allProducts.filter((product) => {
    // Filter by product type
    const typeMatch =
      selectedProductType === "Product Type" ||
      product.type === selectedProductType;

    // Filter by availability
    const availabilityMatch =
      selectedAvailability === "Availability" ||
      product.availability === selectedAvailability;

    return typeMatch && availabilityMatch;
  });

  // Apply price sorting
  if (selectedPrice === "Low to High") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (selectedPrice === "High to Low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // Apply date sorting
  if (selectedSort === "Date, new to old") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
    );
  } else if (selectedSort === "Date, old to new") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
    );
  } else if (selectedSort === "Name A-Z") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (selectedSort === "Name Z-A") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      {/* Header */}
      <div className="px-4 md:px-20 py-8">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">
          {selectedProductType === "Product Type"
            ? "All Products"
            : selectedProductType}
        </h1>

        {/* Filter and Sort Section - Mobile Responsive */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-8">
          <div className="space-y-6 lg:space-y-0 lg:flex lg:justify-between lg:items-center">
            
            {/* Filter Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 sm:hidden">Filters</h3>
              
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:flex-wrap sm:gap-3 lg:items-center">
                <div className="hidden sm:block text-base font-medium text-gray-700 lg:mr-2">Filter:</div>

                {/* Availability Filter */}
                <div className="relative min-w-0 flex-1 sm:flex-none">
                  <select
                    value={selectedAvailability}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                    className="w-full sm:w-auto appearance-none border border-gray-300 rounded-md px-4 py-3 sm:py-2 pr-10 bg-white text-gray-700 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
                  >
                    <option>Availability</option>
                    <option>In Stock</option>
                    <option>Out of Stock</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Price Filter */}
                <div className="relative min-w-0 flex-1 sm:flex-none">
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full sm:w-auto appearance-none border border-gray-300 rounded-md px-4 py-3 sm:py-2 pr-10 bg-white text-gray-700 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px]"
                  >
                    <option>Price</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Product Type Filter */}
                <div className="relative min-w-0 flex-1 sm:flex-none">
                  <select
                    value={selectedProductType}
                    onChange={(e) => setSelectedProductType(e.target.value)}
                    className="w-full sm:w-auto appearance-none border border-gray-300 rounded-md px-4 py-3 sm:py-2 pr-10 bg-white text-gray-700 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
                  >
                    <option>Product Type</option>
                    <option>Chairs, Sofa, Bench</option>
                    <option>Lighting</option>
                    <option>Table</option>
                    <option>Accessories, Organizer, Figurine, Mirror</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Sort Section */}
            <div className="pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="text-base font-medium text-gray-700 sm:whitespace-nowrap">Sort by:</div>
                <div className="relative min-w-0 flex-1 sm:flex-none">
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="w-full sm:w-auto appearance-none border border-gray-300 rounded-md px-4 py-3 sm:py-2 pr-10 bg-white text-gray-700 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[160px]"
                  >
                    <option>Date, new to old</option>
                    <option>Date, old to new</option>
                    <option>Name A-Z</option>
                    <option>Name Z-A</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Count */}
        <div className="text-gray-600 mb-8">
          {filteredProducts.length} products
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              {/* Product Image */}
              <div className="aspect-square mb-4 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-center text-sm font-medium text-gray-900 uppercase tracking-wider mb-2">
                {product.name}
              </h3>

              {/* Product Price */}
              <p className="text-center text-lg font-semibold text-gray-800 mb-1">
                PHP {product.price.toLocaleString()}
              </p>

              {/* Product Availability */}
              <p
                className={`text-center text-xs font-medium ${
                  product.availability === "In Stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.availability}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Products;
