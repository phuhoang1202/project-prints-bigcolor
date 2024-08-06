import React from "react";
import Header from "../../components/users/header/Header";
import Navbar from "../../components/users/navbar/Navbar";
import Breadcrumb from "../../components/users/breadcrumb/Breadcrumb";
import ProductDetail from "../../components/users/productDetail/ProductDetail";
import Description from "../../components/users/description/Description";
import RelatedProduct from "../../components/users/relatedProduct/RelatedProduct";
import Footer from "../../components/users/footer/Footer";
import Copyright from "../../components/users/copyright/Copyright";

export default function DetailProduct() {
  return (
    <>
      {/* header */}
      <Header />
      {/* ./header */}
      {/* navbar */}
      <Navbar />
      {/* ./navbar */}
      {/* breadcrumb */}
      <Breadcrumb />
      {/* ./breadcrumb */}
      {/* product-detail */}
      <ProductDetail />
      {/* ./product-detail */}
      {/* description */}
      <Description />
      {/* ./description */}
      {/* related product */}
      <RelatedProduct />
      {/* ./related product */}
      {/* footer */}
      <Footer />
      {/* ./footer */}
      {/* copyright */}
      <Copyright />
      {/* ./copyright */}
    </>
  );
}
