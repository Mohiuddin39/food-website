import Image from "next/image";
import React from "react";

const Contract = () => {
  return (
    <div
      id="shop"
      className="flex flex-col lg:flex-row justify-start py-10 gap-y-10 lg:gap-y-0"
    >
      {/* Left side */}
      <div className="lg:w-1/2 flex items-center justify-center">
        <Image
          src="/mobile mockup.png"
          width={300}
          height={100}
          alt="Hero Image"
        />
      </div>
      {/* Right side */}
      <div className="lg:w-1/2 lg:flex lg:flex-col justify-center gap-y-5">
        <a className=" text-[#F54748] text-xl text-start lg:w-1/2 hover:underline cursor-pointer duration-200">
          Download our app
        </a>
        <div>
          <h1 className="text-5xl font-bold leading-none">
            Get the Groceries app order more easily.
          </h1>
        </div>
        <p className="leading-relaxed py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <div className="flex space-x-10">
          <div className="flex items-center gap-x-3 cursor-pointer duration-200 group">
            <Image src="/Apple.png" width={50} height={50} alt="Apple Store" />
            <h2 className="text-xl">App Store</h2>
          </div>
          <div className="flex items-center gap-x-3 cursor-pointer duration-200 group">
            <Image
              src="/Play Store.png"
              width={30}
              height={30}
              alt="Play Store"
            />
            <h2 className="text-xl">Play Store</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
