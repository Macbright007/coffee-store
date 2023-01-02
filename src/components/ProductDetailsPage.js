import React from "react";
import Header from "./Header";
import { CoffeeDetails } from "../CoffeeDetails";
import ProductDetailCard from "./ProductDetailCard";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const ProductDetailsPage = () => {
  const params = useParams();

  const coffee = CoffeeDetails.find((cof) => cof.id === Number(params.id));
  return (
    <div>
      <Header title="Product Details" text="" />
      <ProductDetailCard coffee={coffee} />;
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
