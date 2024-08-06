import {
  FacebookOutlined,
  TikTokOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import Logo from "@assets/users/images/logo.jpg";
// import zalo from "@assets/users/images/icons/zalo";

export default function Footer() {
  return (
    <footer
      className=" pt-16 pb-12 border-t border-gray-100 wow fadeInUp"
      data-wow-delay=".1s"
    >
      <div className="container grid grid-cols-1 ">
        <div className="col-span-1 space-y-4">
          <img src={Logo} alt="logo" className="w-30" />
          <div className="mr-2">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              hic?
            </p>
          </div>
          <div className="flex space-x-5">
            <a href="#" className="text-white">
              <FacebookOutlined />
            </a>
            <a href="#" className="text-white">
              <YoutubeOutlined />
            </a>
            <a href="#" className="text-white">
              <TikTokOutlined />
            </a>
            <a href="#" className="text-white">
              {/* <img src={zalo} alt="photo" /> */}
            </a>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analitycs
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </a>
                {/* <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> */}
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analitycs
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </a>
                {/* <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> */}
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
