import React, { useState } from "react";
import { useState as useToastState, useEffect } from "react";

const ProductDetailSection = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState(
    product.material_options?.[0]?.value || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [showFullscreenModal, setShowFullscreenModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  const handleAddToCart = () => {
    // Handle add to cart functionality
    console.log("Added to cart:", {
      product,
      quantity,
      material: selectedMaterial,
    });
  };

  const handleBuyNow = () => {
    // Handle buy now functionality
    console.log("Buy now:", { product, quantity, material: selectedMaterial });
  };

  const handleShare = () => {
    // Always copy link and show toast
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  };

  const handleZoom = () => {
    setShowZoomModal(true);
    setZoomLevel(1.5);
  };

  const handleFullscreen = () => {
    setShowFullscreenModal(true);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const closeModal = () => {
    setShowZoomModal(false);
    setShowFullscreenModal(false);
    setZoomLevel(1);
  };

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    if (showZoomModal || showFullscreenModal) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showZoomModal, showFullscreenModal]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Right Side - Product Images - Mobile First */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative">
              <img
                src={product.images_urls?.[selectedImage] || product.image_url}
                alt={product.name}
                className="w-full h-96 md:h-[500px] object-contain bg-gray-50"
              />

              {/* Right Side Controls - Vertically Stacked */}
              <div className="absolute top-4 right-4 flex flex-col items-center space-y-3">
                {/* Zoom Icon */}
                <button 
                  onClick={handleZoom}
                  className="p-3 bg-white hover:bg-gray-50 rounded-full shadow-lg transition-colors border border-gray-200"
                  title="Zoom Image"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </button>

                {/* Maximize/Fullscreen Icon */}
                <button 
                  onClick={handleFullscreen}
                  className="p-3 bg-white hover:bg-gray-50 rounded-full shadow-lg transition-colors border border-gray-200"
                  title="Fullscreen View"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </button>

                {/* Thumbnail Images - Vertically Stacked */}
                {product.images_urls && product.images_urls.length > 1 && (
                  <div className="flex flex-col space-y-2 mt-2">
                    {product.images_urls.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-16 border-2 ${
                          selectedImage === index
                            ? "border-gray-800"
                            : "border-gray-300"
                        } overflow-hidden hover:border-gray-600 transition-colors bg-white shadow-sm`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-contain bg-gray-50"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Left Side - Product Info */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Product Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {product.name} | {product.category}
              </h1>
              <p className="text-3xl font-bold text-gray-900">
                PHP {product.price.toLocaleString()}
              </p>
            </div>

            {/* Material Selection */}
            {product.material_options && (
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">
                  Material
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full max-w-sm px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-gray-500 text-lg"
                >
                  {product.material_options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="space-y-4 max-w-sm">
              <div className="flex items-center space-x-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 w-fit">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <span className="mx-auto">-</span>
                  </button>
                  <span className="px-6 py-3 text-lg font-medium min-w-[60px] text-center flex items-center justify-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <span className="mx-auto">+</span>
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors text-lg"
                >
                  ADD TO CART
                </button>
              </div>

              {/* Buy It Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3 border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-lg"
              >
                Buy it now
              </button>
            </div>

            {/* Product Details */}
            <div className="space-y-2 text-gray-600">
              <p>{product.dimensions}</p>
              <p>{product.material}</p>
            </div>

            {/* Product Description */}
            <div className="text-gray-700 text-base leading-relaxed mt-2">
              {product.description}
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              <span>Share</span>
            </button>
            {showToast && (
              <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded shadow-lg z-50 text-base font-medium animate-fade-in">
                Product link copied!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {showZoomModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-10 flex space-x-2">
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
                title="Zoom Out"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <div className="px-3 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium">
                {Math.round(zoomLevel * 100)}%
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
                title="Zoom In"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {/* Zoomable Image */}
            <div 
              className="overflow-auto max-h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={product.images_urls?.[selectedImage] || product.image_url}
                alt={product.name}
                className="transition-transform duration-200 cursor-grab active:cursor-grabbing"
                style={{ transform: `scale(${zoomLevel})` }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Modal */}
      {showFullscreenModal && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Navigation */}
          {product.images_urls && product.images_urls.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prev => prev > 0 ? prev - 1 : product.images_urls.length - 1);
                }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prev => prev < product.images_urls.length - 1 ? prev + 1 : 0);
                }}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          {product.images_urls && product.images_urls.length > 1 && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium">
              {selectedImage + 1} / {product.images_urls.length}
            </div>
          )}

          {/* Fullscreen Image */}
          <img
            src={product.images_urls?.[selectedImage] || product.image_url}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProductDetailSection;
