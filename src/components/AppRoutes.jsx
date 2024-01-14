import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import ProductForm from "./ProductForm";
import ProductDetails from "./ProductDetails";
import CartPage from "./CartPage";
import ShippingPage from "./ShippingPage";

const AppRoutes = () => {
  return (
    <div style={{ marginTop: "-90px" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product-create" element={<ProductForm />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
