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
      <Header>
        <h4>Product Details</h4>
      </Header>
      <ProductDetailCard coffee={coffee} />;
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
