import React from "react";

import HeroSection from "./HeroSection";
import ProductList from "./ProductList";

import { useSelector } from "react-redux";

const HomePage = () => {
  const products = useSelector((state) => state.productList.products);

  return (
    <div>
      <HeroSection />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
