import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Catalouge from "./pages/Catalogue/Catalouge";
import Media from "./pages/Media/Media";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Showroom from "./pages/Showroom/Showroom";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/catalouge" element={<Catalouge />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
