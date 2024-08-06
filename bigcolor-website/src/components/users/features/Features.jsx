import React from "react";
import FreeShip from "@assets/users/images/icons/delivery-van.svg";
import MoneyRturns from "@assets/users/images/icons/money-back.svg";
import Support from "@assets/users/images/icons/service-hours.svg";

export default function Features() {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src={FreeShip}
            alt="Delivery"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              Vận chuyển nhanh chóng
            </h4>
            {/* <p className="text-gray-500 text-sm">Tiết kiệm thời gian</p> */}
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src={MoneyRturns}
            alt="Delivery"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              Tiết kiệm chi phí
            </h4>
            {/* <p className="text-gray-500 text-sm">Giá cả cạnh tranh</p> */}
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src={Support}
            alt="Delivery"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Hỗ trợ 24/7</h4>
            {/* <p className="text-gray-500 text-sm">Hỗ trợ khách hàng</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
