import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterSection from "../../components/FooterSection";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";

const Products = () => {
  const [selectedAvailability, setSelectedAvailability] =
    useState("Availability");
  const [selectedPrice, setSelectedPrice] = useState("Price");
  const [selectedProductType, setSelectedProductType] =
    useState("Product Type");
  const [selectedSort, setSelectedSort] = useState("Date, new to old");

  // Product data with types
  const allProducts = [
    // Chairs, Sofa, Bench
    {
      id: 1,
      name: "PHILIBAR",
      image: "products/Screenshot_270.png",
      type: "Chairs, Sofa, Bench",
      price: 9699,
      availability: "In Stock",
      dateAdded: "2024-01-15",
    },
    {
      id: 2,
      name: "SPARKIE ARM CHAIR",
      image: "products/Screenshot_271.png",
      type: "Chairs, Sofa, Bench",
      price: 12500,
      availability: "In Stock",
      dateAdded: "2024-01-20",
    },
    {
      id: 3,
      name: "LUGANO WITH HEAD REST",
      image: "products/Screenshot_272.png",
      type: "Chairs, Sofa, Bench",
      price: 15200,
      availability: "Out of Stock",
      dateAdded: "2024-02-10",
    },
    {
      id: 4,
      name: "MARCELO",
      image: "products/Screenshot_273.png",
      type: "Chairs, Sofa, Bench",
      price: 8900,
      availability: "In Stock",
      dateAdded: "2024-02-15",
    },
    {
      id: 5,
      name: "LOW BACK SIDE CHAIR",
      image: "products/Screenshot_274.png",
      type: "Chairs, Sofa, Bench",
      price: 7500,
      availability: "In Stock",
      dateAdded: "2024-02-22",
    },
    {
      id: 6,
      name: "MACHINTOCH CHAIR",
      image: "products/Screenshot_275.png",
      type: "Chairs, Sofa, Bench",
      price: 11800,
      availability: "Out of Stock",
      dateAdded: "2024-03-05",
    },
    {
      id: 7,
      name: "LA BELLA CHAIR",
      image: "products/Screenshot_276.png",
      type: "Chairs, Sofa, Bench",
      price: 9200,
      availability: "In Stock",
      dateAdded: "2024-03-12",
    },
    {
      id: 8,
      name: "CONFERENCE CHAIR",
      image: "products/Screenshot_277.png",
      type: "Chairs, Sofa, Bench",
      price: 13500,
      availability: "In Stock",
      dateAdded: "2024-03-18",
    },
    {
      id: 9,
      name: "BICOL LOUNG CHAIR",
      image: "products/Screenshot_278.png",
      type: "Chairs, Sofa, Bench",
      price: 16800,
      availability: "In Stock",
      dateAdded: "2024-04-02",
    },
    {
      id: 10,
      name: "SARI",
      image: "products/Screenshot_279.png",
      type: "Chairs, Sofa, Bench",
      price: 8500,
      availability: "Out of Stock",
      dateAdded: "2024-04-08",
    },
    {
      id: 11,
      name: "MBT DUAL-PURPOSE BENCH",
      image: "products/Screenshot_280.png",
      type: "Chairs, Sofa, Bench",
      price: 18900,
      availability: "In Stock",
      dateAdded: "2024-04-15",
    },
    {
      id: 12,
      name: "LOVE SEAT",
      image: "products/Screenshot_281.png",
      type: "Chairs, Sofa, Bench",
      price: 22500,
      availability: "In Stock",
      dateAdded: "2024-04-20",
    },

    // Lighting
    {
      id: 13,
      name: "LUCE TABLE LAMP",
      image: "products/Screenshot_283.png",
      type: "Lighting",
      price: 4500,
      availability: "In Stock",
      dateAdded: "2024-05-01",
    },
    {
      id: 14,
      name: "STRATOSPHERE",
      image: "products/Screenshot_284.png",
      type: "Lighting",
      price: 8200,
      availability: "In Stock",
      dateAdded: "2024-05-05",
    },
    {
      id: 15,
      name: "DOY QUAD LANTERN",
      image: "products/Screenshot_285.png",
      type: "Lighting",
      price: 6800,
      availability: "Out of Stock",
      dateAdded: "2024-05-10",
    },
    {
      id: 16,
      name: "ROMA",
      image: "products/Screenshot_286.png",
      type: "Lighting",
      price: 5200,
      availability: "In Stock",
      dateAdded: "2024-05-15",
    },
    {
      id: 17,
      name: "TORCH LAMP",
      image: "products/Screenshot_287.png",
      type: "Lighting",
      price: 7500,
      availability: "In Stock",
      dateAdded: "2024-05-20",
    },
    {
      id: 18,
      name: "BABYLON",
      image: "products/Screenshot_288.png",
      type: "Lighting",
      price: 9500,
      availability: "In Stock",
      dateAdded: "2024-05-25",
    },
    {
      id: 19,
      name: "SLATED LAMP",
      image: "products/Screenshot_289.png",
      type: "Lighting",
      price: 6200,
      availability: "Out of Stock",
      dateAdded: "2024-06-01",
    },
    {
      id: 20,
      name: "KARLA",
      image: "products/Screenshot_290.png",
      type: "Lighting",
      price: 5800,
      availability: "In Stock",
      dateAdded: "2024-06-05",
    },
    {
      id: 21,
      name: "AVATAR",
      image: "products/Screenshot_291.png",
      type: "Lighting",
      price: 17250,
      availability: "In Stock",
      dateAdded: "2024-06-10",
    },
    {
      id: 22,
      name: "ARTEMIO LAMP",
      image: "products/Screenshot_292.png",
      type: "Lighting",
      price: 4800,
      availability: "In Stock",
      dateAdded: "2024-06-15",
    },
    {
      id: 23,
      name: "ANDY BANKERS LAMP",
      image: "products/Screenshot_293.png",
      type: "Lighting",
      price: 7200,
      availability: "Out of Stock",
      dateAdded: "2024-06-20",
    },
    {
      id: 24,
      name: "AVATAR 2",
      image: "products/Screenshot_294.png",
      type: "Lighting",
      price: 16500,
      availability: "In Stock",
      dateAdded: "2024-06-25",
    },
    {
      id: 25,
      name: "BOATATING READING LAMP",
      image: "products/Screenshot_295.png",
      type: "Lighting",
      price: 8900,
      availability: "In Stock",
      dateAdded: "2024-07-01",
    },

    // Table
    {
      id: 26,
      name: "DINING TABLE",
      image: "products/Screenshot_296.png",
      type: "Table",
      price: 35000,
      availability: "In Stock",
      dateAdded: "2024-07-05",
    },
    {
      id: 27,
      name: "COFFEE TABLE",
      image: "products/Screenshot_297.png",
      type: "Table",
      price: 18500,
      availability: "In Stock",
      dateAdded: "2024-07-10",
    },
    {
      id: 28,
      name: "SIDE TABLE",
      image: "products/Screenshot_298.png",
      type: "Table",
      price: 12800,
      availability: "Out of Stock",
      dateAdded: "2024-07-15",
    },
    {
      id: 29,
      name: "WORK TABLE",
      image: "products/Screenshot_299.png",
      type: "Table",
      price: 28000,
      availability: "In Stock",
      dateAdded: "2024-07-20",
    },
    {
      id: 30,
      name: "CONSOLE TABLE",
      image: "products/Screenshot_300.png",
      type: "Table",
      price: 22000,
      availability: "In Stock",
      dateAdded: "2024-07-25",
    },
    {
      id: 31,
      name: "ACCENT TABLE",
      image: "products/Screenshot_301.png",
      type: "Table",
      price: 15500,
      availability: "In Stock",
      dateAdded: "2024-08-01",
    },

    // Accessories, Organizer, Figurine, Mirror
    {
      id: 32,
      name: "MULTIPURPOSE HOLDER",
      image: "products/Screenshot_302.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 1800,
      availability: "In Stock",
      dateAdded: "2024-08-05",
    },
    {
      id: 33,
      name: "SOAP HOLDER",
      image: "products/Screenshot_303.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 1200,
      availability: "In Stock",
      dateAdded: "2024-08-08",
    },
    {
      id: 34,
      name: "PENCIL HOLDER",
      image: "products/Screenshot_304.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 1500,
      availability: "Out of Stock",
      dateAdded: "2024-08-10",
    },
    {
      id: 35,
      name: "WINE HOLDER",
      image: "products/Screenshot_305.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 2800,
      availability: "In Stock",
      dateAdded: "2024-08-12",
    },
    {
      id: 36,
      name: "WINE RACK",
      image: "products/Screenshot_306.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 4500,
      availability: "In Stock",
      dateAdded: "2024-08-15",
    },
    {
      id: 37,
      name: "TOWEL RACK",
      image: "products/Screenshot_307.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 2200,
      availability: "In Stock",
      dateAdded: "2024-08-18",
    },
    {
      id: 38,
      name: "STACKABLE ASHTRAY HOLDER",
      image: "products/Screenshot_308.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 1800,
      availability: "Out of Stock",
      dateAdded: "2024-08-20",
    },
    {
      id: 39,
      name: "STORAGE BOX",
      image: "products/Screenshot_320.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 3200,
      availability: "In Stock",
      dateAdded: "2024-08-22",
    },
    {
      id: 40,
      name: "ARTIST'S RULER HOLDER",
      image: "products/Screenshot_309.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 1600,
      availability: "In Stock",
      dateAdded: "2024-08-25",
    },
    {
      id: 41,
      name: "CHOPSTICK HOLDER",
      image: "products/Screenshot_310.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 800,
      availability: "In Stock",
      dateAdded: "2024-08-28",
    },
    {
      id: 42,
      name: "DIAMOND PENCIL HOLDER",
      image: "products/Screenshot_311.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 1900,
      availability: "In Stock",
      dateAdded: "2024-09-01",
    },
    {
      id: 43,
      name: "TABLET HOLDER",
      image: "products/Screenshot_312.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 2500,
      availability: "Out of Stock",
      dateAdded: "2024-09-05",
    },
    {
      id: 44,
      name: "DONG CARPET",
      image: "products/Screenshot_313.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 8500,
      availability: "In Stock",
      dateAdded: "2024-09-08",
    },
    {
      id: 45,
      name: "TANADA SISTERS",
      image: "products/Screenshot_314.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 3800,
      availability: "In Stock",
      dateAdded: "2024-09-10",
    },
    {
      id: 46,
      name: "FLOATING CUBE",
      image: "products/Screenshot_315.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 2200,
      availability: "In Stock",
      dateAdded: "2024-09-12",
    },
    {
      id: 47,
      name: "KINETIC CUBE",
      image: "products/Screenshot_316.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 2800,
      availability: "In Stock",
      dateAdded: "2024-09-15",
    },
    {
      id: 48,
      name: "GOTHIC DIAMOND MIRROR",
      image: "products/Screenshot_317.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 6500,
      availability: "Out of Stock",
      dateAdded: "2024-09-18",
    },
    {
      id: 49,
      name: "SMALL GOTHIC MIRROR",
      image: "products/Screenshot_318.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 4200,
      availability: "In Stock",
      dateAdded: "2024-09-20",
    },
    {
      id: 50,
      name: "DIAMOND MIRROR",
      image: "products/Screenshot_319.png",
      type: "Accessories, Organizer, Figurine, Mirror",
      price: 5800,
      availability: "In Stock",
      dateAdded: "2024-09-22",
    },
  ];

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

        {/* Filter and Sort Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="text-lg font-medium">Filter:</div>

            {/* Availability Filter */}
            <div className="relative">
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="appearance-none border border-gray-300 px-4 py-2 pr-8 bg-white text-gray-700 min-w-[140px]"
              >
                <option>Availability</option>
                <option>In Stock</option>
                <option>Out of Stock</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
            <div className="relative">
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="appearance-none border border-gray-300 px-4 py-2 pr-8 bg-white text-gray-700 min-w-[100px]"
              >
                <option>Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
            <div className="relative">
              <select
                value={selectedProductType}
                onChange={(e) => setSelectedProductType(e.target.value)}
                className="appearance-none border border-gray-300 px-4 py-2 pr-8 bg-white text-gray-700 min-w-[140px]"
              >
                <option>Product Type</option>
                <option>Chairs, Sofa, Bench</option>
                <option>Lighting</option>
                <option>Table</option>
                <option>Accessories, Organizer, Figurine, Mirror</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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

          {/* Sort Section */}
          <div className="flex items-center space-x-4">
            <div className="text-lg font-medium">Sort by:</div>
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none border border-gray-300 px-4 py-2 pr-8 bg-white text-gray-700 min-w-[160px]"
              >
                <option>Date, new to old</option>
                <option>Date, old to new</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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

        {/* Products Count */}
        <div className="text-gray-600 mb-8">
          {filteredProducts.length} products
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
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
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Products;
