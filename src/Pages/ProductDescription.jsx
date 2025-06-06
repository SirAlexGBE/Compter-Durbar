import React from "react";
import MacBookProductListing from "../Components/ProductDescription/MacBookProductListing";
import TechnicalDetails from "../Components/ProductDescription/TechnicalDetails";
import SimilarProducts from "../Components/ProductDescription/SimilarProducts";
import Comments from "../Components/ProductDescription/Comments";

const ProductDescription = () => {
  return (
    <>
      <MacBookProductListing />
      <TechnicalDetails />
    </>
  );
};

export default ProductDescription;
