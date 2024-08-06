import React from "react";
import Img1 from "@assets/users/images/blog/blog-01.jpg";

export default function RelatedArticles() {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
        <div className="mb-8 overflow-hidden rounded-[5px]">
          <a href="blog-details.html" className="block">
            <img
              src={Img1}
              alt="image"
              className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            />
          </a>
        </div>
        <div>
          <span className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">
            Dec 22, 2023
          </span>
          <h3>
            <a
              href="blog-details.html"
              className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              Meet AutoManage, the best AI management tools
            </a>
          </h3>
          <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}
