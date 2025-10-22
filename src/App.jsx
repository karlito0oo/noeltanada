import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CmsProvider, useCms } from "./contexts/CmsContext";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Catalouge from "./pages/Catalogue/Catalouge";
import Media from "./pages/Media/Media";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Showroom from "./pages/Showroom/Showroom";
import ContactUs from "./pages/ContactUs/ContactUs";
import ProductView from "./pages/ProductView/ProductView";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CmsPage from "./pages/Admin/CmsPage";

// Loading component for global CMS loading state
const AppLoadingWrapper = ({ children }) => {
  const { isLoading: cmsLoading } = useCms();
  
  if (cmsLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading application...</p>
          <p className="mt-2 text-sm text-gray-500">Please wait while we load the CMS settings</p>
        </div>
      </div>
    );
  }
  
  return children;
};

function App() {
  return (
    <CmsProvider>
      <ProductsProvider>
        <Router>
          <AppLoadingWrapper>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductView />} />
              <Route path="/catalouge" element={<Catalouge />} />
              <Route path="/media" element={<Media />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/showroom" element={<Showroom />} />
              <Route path="/contact" element={<ContactUs />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/cms" element={<CmsPage />} />
            </Routes>
          </AppLoadingWrapper>
        </Router>
      </ProductsProvider>
    </CmsProvider>
  );
}

export default App;
