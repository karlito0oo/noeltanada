import React from "react";
import { useParams } from "react-router-dom";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import FooterSection from "../../components/FooterSection";
import ProductDetailSection from "./components/ProductDetailSection";
import { useProducts } from "../../contexts/ProductsContext";
import usePageTitle from "../../hooks/usePageTitle";

const ProductView = () => {
  const { id } = useParams();
  const { getProductById, loading } = useProducts();
  const product = getProductById(id);
  
  // Set dynamic title based on product name
  usePageTitle(product ? product.name : "Product Not Found");

  // Show loading state
  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <BackToHomepageHeader />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#7d6040] mx-auto"></div>
            <p className="mt-4 text-[#7d6040]">Loading product...</p>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white min-h-screen">
        <BackToHomepageHeader />
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-2xl text-gray-900">Product not found</h1>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Header */}
      <BackToHomepageHeader />

      <ProductDetailSection product={product} />

      <FooterSection bgColor="black" />
    </div>
  );
};

export default ProductView;
