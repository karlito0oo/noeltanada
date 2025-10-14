import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext";
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

function App() {
  return (
    <ProductsProvider>
      <Router>
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
        </Routes>
      </Router>
    </ProductsProvider>
  );
}

export default App;
