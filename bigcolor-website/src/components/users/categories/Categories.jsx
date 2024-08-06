import React from "react";
import Bedroom from "@assets/users/images/category/category-1.jpg";
import Mattrass from "@assets/users/images/category/category-2.jpg";
import Outdoor from "@assets/users/images/category/category-3.jpg";
import Sofa from "@assets/users/images/category/category-4.jpg";
import LivingRoom from "@assets/users/images/category/category-5.jpg";
import Kitchen from "@assets/users/images/category/category-6.jpg";

export default function Categories() {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Thể loại
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <img src={Bedroom} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            MÁY IN QUẢNG CÁO
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={Mattrass} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            MÁY IN VẢI
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={Outdoor} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            MÁY CẮT
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={Sofa} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            MÁY IN DTF
          </a>
        </div>

        {/* <div className="relative rounded-sm overflow-hidden group">
          <img src={Kitchen} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Kitchen
          </a>
        </div> */}
      </div>
    </div>
  );
}
