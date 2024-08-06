import React from "react";
import Bedroom from "@assets/users/images/category/category-1.jpg";
import Mattrass from "@assets/users/images/category/category-2.jpg";
import Outdoor from "@assets/users/images/category/category-3.jpg";
import Sofa from "@assets/users/images/category/category-4.jpg";
// import LivingRoom from "@assets/users/images/category/category-5.jpg";
// import Kitchen from "@assets/users/images/category/category-6.jpg";

export default function Categories() {
  return (
    <div className="container py-16 wow fadeInUp" data-wow-delay=".1s">
      <h2 className="relative pb-5 text-2xl uppercase font-semibold text-dark dark:text-white sm:text-[36px]">
        thể loại
      </h2>
      <span className="mb-10 inline-block h-[2px] w-20 bg-primary" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <img src={Bedroom} alt="category 1" className="w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition group-hover:bg-opacity-60">
            <a
              href="#"
              className="absolute inset-0 flex flex-col justify-center items-center text-xl text-white font-roboto font-medium transition-transform duration-500 group-hover:-translate-y-28"
            >
              MÁY IN QUẢNG CÁO
            </a>
            <div
              className="absolute bottom-0 left-0 right-0 bg-none text-white text-base font-roboto font-normal p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center"
              style={{ height: "80%" }}
            >
              <ul className="text-center flex flex-col justify-center items-center">
                <li>Nội dung 1</li>
                <li>Nội dung 2</li>
                <li>Nội dung 3</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-sm overflow-hidden group wow fadeInUp"
          data-wow-delay=".1s"
        >
          <img src={Mattrass} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            MÁY IN VẢI
          </a>
        </div>

        <div
          className="relative rounded-sm overflow-hidden group wow fadeInUp"
          data-wow-delay=".1s"
        >
          <img src={Outdoor} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            MÁY CẮT
          </a>
        </div>

        <div
          className="relative rounded-sm overflow-hidden group wow fadeInUp"
          data-wow-delay=".1s"
        >
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
