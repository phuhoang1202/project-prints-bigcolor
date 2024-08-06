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
import RelatedArticles from "../../components/users/content/contnetArticles/RelatedArticles";

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
      <div className="container pb-16 wow fadeInUp" data-wow-delay=".1s">
        <h2 className="relative pb-5 text-2xl uppercase font-semibold text-dark dark:text-white sm:text-[36px]">
          CÁC SẢN PHẨM
        </h2>
        <span className="mb-10 inline-block h-[2px] w-20 bg-primary" />
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
      {/* Content */}
      <div className="container pb-16 wow fadeInUp" data-wow-delay=".1s">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 wow fadeInUp mt-14" data-wow-delay=".2s">
            <h2 className="relative pb-5 text-2xl uppercase font-semibold text-dark dark:text-white sm:text-[36px]">
              BÀI VIẾT
            </h2>
            <span className="mb-10 inline-block h-[2px] w-20 bg-primary" />
          </div>
          <RelatedArticles />
          <RelatedArticles />
          <RelatedArticles />
        </div>
      </div>
      {/* Content */}

      {/* footer */}
      <Footer />
      {/* ./footer */}

      {/* copyright */}
      <Copyright />
      {/* ./copyright */}
    </>
  );
}
