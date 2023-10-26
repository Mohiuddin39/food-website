import Image from "next/image";
import React from "react";

const Favorites = () => {
  return (
    <div id="menu" className="flex flex-col lg:flex-row justify-start py-10 ">
      {/* Left side */}
      <div className="lg:w-1/2">
        <Image
          src="/image-and-card.png"
          width={500}
          height={500}
          alt="Hero Image"
          className="w-full"
        />
      </div>
      {/* Right side */}
      <div className="lg:w-1/2 lg:flex lg:flex-col justify-center gap-y-5">
        <a className=" text-[#03A66B] text-xl text-start lg:w-1/2 hover:underline cursor-pointer duration-200">
          WHY CHOOSE US
        </a>
        <div>
          <h1 className="text-5xl font-bold leading-none">
            Find Favorites and Discover New Ones
          </h1>
        </div>
        <p className="leading-relaxed py-3">
          At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis
          praesen voluptatum deleniti.
        </p>
        <div className="flex space-x-7">
          <button className="bg-[#F54748] py-2 rounded-lg px-3 text-white text-lg cursor-pointer hover:bg-white hover:text-[#F54748] duration-200 ">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
