import React from "react";
import Product1 from "@assets/users/images/products/product1.jpg";
import Product2 from "@assets/users/images/products/product2.jpg";
import Product3 from "@assets/users/images/products/product3.jpg";
import Product4 from "@assets/users/images/products/product4.jpg";
import Product5 from "@assets/users/images/products/product5.jpg";
import Product6 from "@assets/users/images/products/product6.jpg";

export default function ProductDetail() {
  return (
    <div className="container grid grid-cols-2 gap-6">
      {/* Left */}
      <div>
        <img src={Product1} alt="product" className="w-full" />
        <div className="grid grid-cols-5 gap-4 mt-4">
          <img
            src={Product2}
            alt="product2"
            className="w-full cursor-pointer border border-primary"
          />
          <img
            src={Product3}
            alt="product2"
            className="w-full cursor-pointer border"
          />
          <img
            src={Product4}
            alt="product2"
            className="w-full cursor-pointer border"
          />
          <img
            src={Product5}
            alt="product2"
            className="w-full cursor-pointer border"
          />
          <img
            src={Product6}
            alt="product2"
            className="w-full cursor-pointer border"
          />
        </div>
      </div>

      {/* Right */}
      <div>
        <h2 className="text-3xl font-medium uppercase mb-2">
          Italian L Shape Sofa
        </h2>
        <div className="flex items-center mb-4">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Availability: </span>
            <span className="text-green-600">In Stock</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Brand: </span>
            <span className="text-gray-600">Apex</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Category: </span>
            <span className="text-gray-600">Sofa</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">SKU: </span>
            <span className="text-gray-600">BE45VGRT</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-base text-gray-400 line-through">$55.00</p>
        </div>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
          reprehenderit dolore vel mollitia optio consequatur hic asperiores
          inventore suscipit, velit consequuntur, voluptate doloremque iure
          necessitatibus adipisci magnam porro.
        </p>
        <div className="pt-4">
          <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                htmlFor="size-xs"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                htmlFor="size-sm"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                htmlFor="size-m"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                htmlFor="size-l"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-xl" className="hidden" />
              <label
                htmlFor="size-xl"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XL
              </label>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Color
          </h3>
          <div className="flex items-center gap-2">
            <div className="color-selector">
              <input type="radio" name="color" id="red" className="hidden" />
              <label
                htmlFor="red"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: "#fc3d57" }}
              />
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="black" className="hidden" />
              <label
                htmlFor="black"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: "#000" }}
              />
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="white" className="hidden" />
              <label
                htmlFor="white"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              -
            </div>
            <div className="h-8 w-8 text-base flex items-center justify-center">
              4
            </div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              +
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
          <a
            href="#"
            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
          >
            <i className="fa-solid fa-bag-shopping" /> Add to cart
          </a>
          <a
            href="#"
            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
          >
            <i className="fa-solid fa-heart" /> Wishlist
          </a>
        </div>
        <div className="flex gap-3 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <i className="fa-brands fa-twitter" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
