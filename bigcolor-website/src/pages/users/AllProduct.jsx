import React from "react";
import Header from "../../components/users/header/Header";
import Navbar from "../../components/users/navbar/Navbar";
import Breadcrumb from "../../components/users/breadcrumb/Breadcrumb";
import ShopWrapper from "../../components/users/shopWrapper/ShopWrapper";
import Footer from "../../components/users/footer/Footer";
import Copyright from "../../components/users/copyright/Copyright";

export default function AllProduct() {
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
      {/* shop wrapper */}
      <ShopWrapper />
      {/* ./shop wrapper */}
      {/* footer */}
      <Footer />
      {/* ./footer */}
      {/* copyright */}
      <Copyright />
      {/* ./copyright */}
    </>
  );
}
