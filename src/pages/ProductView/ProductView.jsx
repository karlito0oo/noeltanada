import React from "react";
import { useParams } from "react-router-dom";
import BackToHomepageHeader from "../../components/BackToHomepageHeader";
import FooterSection from "../../components/FooterSection";
import ProductDetailSection from "./components/ProductDetailSection";
import { useAllProducts } from "../../constants";
import usePageTitle from "../../hooks/usePageTitle";

const ProductView = () => {
  const { id } = useParams();
  const product = useAllProducts.find((p) => p.id === parseInt(id));
  
  // Set dynamic title based on product name
  usePageTitle(product ? product.name : "Product Not Found");

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
