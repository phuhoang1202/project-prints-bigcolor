import React from "react";
import Header from "../../components/users/header/Header";
import Navbar from "../../components/users/navbar/Navbar";
import Breadcrumb from "../../components/users/breadcrumb/Breadcrumb";
import Wrapper from "../../components/users/wrapper/Wrapper";
import Footer from "../../components/users/footer/Footer";
import Copyright from "../../components/users/copyright/Copyright";

export default function ShoppingCart() {
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
      {/* wrapper */}
      <Wrapper />
      {/* ./wrapper */}
      {/* footer */}
      <Footer />
      {/* ./footer */}
      {/* copyright */}
      <Copyright />
      {/* ./copyright */}
    </>
  );
}
