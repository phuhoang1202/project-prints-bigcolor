import React from "react";
import Product from "../product/Product";

export default function RelatedProduct() {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Related products
      </h2>
      <div className="grid grid-cols-4 gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
