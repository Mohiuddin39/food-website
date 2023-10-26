import Image from "next/image";
import React from "react";

const Delivery = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-start pb-10 ">
      {/* left side */}
      <div className="lg:w-1/2 lg:flex lg:flex-col justify-center gap-y-5">
        <button className=" text-[#F9BA45] text-xl hover:underline text-start">
          HOME DELIVERY
        </button>
        <div>
          <h1 className="text-5xl font-bold leading-none">
            Sit at Home We Will Take Care Your Order
          </h1>
        </div>
        <p className="leading-relaxed py-3">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
        </p>
        <div className="flex space-x-7">
          <button className=" py-2 rounded-lg px-3 border border-[#F54748] text-[#F54748] text-lg cursor-pointer duration-200 ">
            Explore Now
          </button>
        </div>
      </div>
      {/* Right side */}
      <div className="lg:w-1/2">
        <Image
          src="/image-&-card.png"
          width={500}
          height={500}
          alt="Hero Image"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Delivery;
