import React from "react";
import Sofa from "@assets/users/images/icons/sofa.svg";
import Terarce from "@assets/users/images/icons/terrace.svg";
import Bed from "@assets/users/images/icons/bed.svg";
import Office from "@assets/users/images/icons/office.svg";
import Outdoor from "@assets/users/images/icons/outdoor-cafe.svg";
import Mattress from "@assets/users/images/icons/bed-2.svg";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 wow fadeInUp" data-wow-delay=".1s">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <MenuOutlined />
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>
          {/* dropdown */}
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={Sofa} alt="sofa" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src={Terarce}
                alt="terrace"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Terarce</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={Bed} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Bed</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src={Office}
                alt="office"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">office</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src={Outdoor}
                alt="outdoor"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src={Mattress}
                alt="Mattress"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Mattress</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              to={"/"}
              className="text-gray-200 hover:text-white transition"
            >
              TRANG CHỦ
            </Link>
            <Link
              to={"/all-product"}
              className="text-gray-200 hover:text-white transition"
            >
              SẢN PHẨM
            </Link>
            <a
              href="#"
              className="text-gray-200 uppercase hover:text-white transition"
            >
              VỀ CHÚNG TÔI
            </a>
            <Link
              to={"/content"}
              className="text-gray-200 uppercase hover:text-white transition"
            >
              Bài viết
            </Link>
            <a
              href="#"
              className="text-gray-200 uppercase hover:text-white transition"
            >
              TÌM KIẾM MÁY IN PHÙ HỢP
            </a>
            <a
              href="#"
              className="text-gray-200 uppercase hover:text-white transition"
            >
              LIÊN HỆ
            </a>
          </div>
          <a
            href="#"
            className="text-gray-200 uppercase hover:text-white transition"
          >
            Hỗ trợ kỹ thuật - 0123456789
          </a>
        </div>
      </div>
    </nav>
  );
}
