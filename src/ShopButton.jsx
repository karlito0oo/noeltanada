import React from "react";

const ShopButton = () => (
  <button
    className="text-white px-8 py-4 text-lg font-medium uppercase tracking-wide transition-colors duration-300"
    style={{ backgroundColor: "#7d6040" }}
    onMouseOver={e => (e.currentTarget.style.backgroundColor = "#6a5236")}
    onMouseOut={e => (e.currentTarget.style.backgroundColor = "#7d6040")}
  >
    SHOP
  </button>
);

export default ShopButton;
