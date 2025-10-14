import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/ApiService';

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.getProducts();
      setProducts(response.data || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Helper functions for common filtering
  const getFeaturedProducts = () => {
    return products.filter(product => product.is_featured);
  };

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  const searchProducts = (query) => {
    if (!query) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filterProductsByType = (type) => {
    if (!type) return products;
    return products.filter(product => product.type === type);
  };

  const value = {
    products,
    loading,
    error,
    fetchProducts,
    getFeaturedProducts,
    getProductById,
    searchProducts,
    filterProductsByType,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
