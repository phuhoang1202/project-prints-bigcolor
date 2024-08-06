import React from "react";
import Product from "../product/Product";

export default function NewArrival() {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Sản phẩm hot
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
