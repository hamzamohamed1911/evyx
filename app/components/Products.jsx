import React from "react";
import Image from "next/image";
import { ecommerce, landingPage, wordPress } from "../assets";

const Products = () => {
  return (
    <section
      className="mx-auto container   sm:p-6 p-6 py-8 lg:py-16"
      id="المنتجات"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-medium mb-4 leading-relaxed lg:leading-normal">
          نمتلك خبرة طويلة في مجالنا، ولذلك نستطيع تقديم خدمات متميّزة لك.
        </h1>
        <h1 className="text-4xl font-bold text-[#2F4E8E] py-5 leading-relaxed lg:leading-normal">
          انواع المواقع من ايڤكس
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 justify-items-center">
        <div className=" w-full flex flex-col items-center">
          <div className="border-2 border-black rounded-md">
            <Image
              src={ecommerce}
              alt="ecommerce"
              width={0}
              height={0}
              className="w-full h-full"
            />
          </div>
          <h1 className="text-center font-bold text-3xl mt-6">
            E-Commerce Websites
          </h1>
          <h2 className="text-[#DB965E] mt-4 font-bold text-2xl">
            {" "}
            تبدأ من $ 300{" "}
          </h2>
        </div>
        <div className=" w-full flex flex-col items-center">
          <div className="border-2 border-black rounded-md">
            <Image
              src={landingPage}
              alt="landingPage"
              width={0}
              height={0}
              className="w-full h-full"
            />
          </div>
          <h1 className="text-center font-bold text-3xl mt-6">LandingPage</h1>
          <h2 className="text-[#DB965E] mt-4 font-bold text-2xl">
            تبدأ من $ 200
          </h2>
        </div>
        <div className=" w-full flex flex-col items-center">
          <div className="border-2 border-black rounded-md">
            <Image
              src={wordPress}
              alt="wordPress"
              width={0}
              height={0}
              className="w-full h-full"
            />
          </div>
          <h1 className="text-center font-bold text-3xl mt-6">
            WordPress Portfolio
          </h1>
          <h2 className="text-[#DB965E] mt-4 font-bold text-2xl">
            تبدأ من $ 500{" "}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Products;
