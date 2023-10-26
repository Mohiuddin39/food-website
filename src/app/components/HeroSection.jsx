import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start py-20 ">
      {/* left side */}
      <div className="lg:w-1/2 lg:flex lg:flex-col justify-center gap-y-5">
        <button className="bg-red-100 text-[#F55556] text-xl rounded-3xl px-3 py-2 lg:w-1/2">
          More than Faster
        </button>
        <div>
          <h1 className="text-5xl font-bold leading-none">
            Groceries delivered in as little as{" "}
            <span className="text-[#F54748] font-normal text-4xl">2 hours</span>
          </h1>
        </div>
        <p className="leading-relaxed py-3">
          Grocen atssures fresh grocery every morning to your family without
          getting out in this pandemic.
        </p>
        <div className="flex space-x-7">
          <button className="bg-[#F54748] py-2 rounded-lg px-3 text-white text-lg cursor-pointer hover:bg-white hover:text-[#F54748] duration-200 ">
            Order Now
          </button>
          <button className=" py-2 rounded-lg px-3 text-[#F54748] text-lg cursor-pointer hover:bg-[#F54748] hover:text-white duration-200">
            Order Process
          </button>
        </div>
      </div>
      {/* Right side */}
      <div className="lg:w-1/2">
        <Image
          src="/Header Image.png"
          width={500}
          height={500}
          alt="Hero Image"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
