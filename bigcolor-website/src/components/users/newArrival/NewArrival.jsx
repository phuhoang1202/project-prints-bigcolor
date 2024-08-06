import React from "react";
import Product from "../product/Product";

export default function NewArrival() {
  return (
    <div className="container pb-16 wow fadeInUp" data-wow-delay=".1s">
      <h2 className="relative pb-5 text-2xl uppercase font-semibold text-dark dark:text-white sm:text-[36px]">
        Sản phẩm hot
      </h2>
      <span className="mb-10 inline-block h-[2px] w-20 bg-primary" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
