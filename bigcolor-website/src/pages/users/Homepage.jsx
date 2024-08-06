import React from "react";
import Header from "../../components/users/header/Header";
import Navbar from "../../components/users/navbar/Navbar";
import Banner from "../../components/users/banner/Banner";
import Features from "../../components/users/features/Features";
import Categories from "../../components/users/categories/Categories";
import NewArrival from "../../components/users/newArrival/NewArrival";
import Product from "../../components/users/product/Product";
import Footer from "../../components/users/footer/Footer";
import Copyright from "../../components/users/copyright/Copyright";
import Ads from "../../components/users/ads/Ads";

export default function Homepage() {
  return (
    <>
      {/* header */}
      <Header />
      {/* ./header */}
      {/* navbar */}
      <Navbar />
      {/* ./navbar */}
      {/* banner */}
      <Banner />
      {/* ./banner */}
      {/* features */}
      <Features />
      {/* ./features */}
      {/* categories */}
      <Categories />
      {/* ./categories */}
      {/* new arrival */}
      <NewArrival />
      {/* ./new arrival */}
      {/* ads */}
      <Ads />
      {/* ./ads */}
      {/* product */}
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Các sản phẩm
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      {/* ./product */}
      {/* footer */}
      <Footer />
      {/* ./footer */}
      {/* copyright */}
      <Copyright />
      {/* ./copyright */}
    </>
  );
}
