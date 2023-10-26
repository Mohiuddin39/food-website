import Image from "next/image";
import React from "react";

const ServiceSection = () => {
  return (
    <div id="service" className="py-2">
      {/* heading */}
      <div className="text-center">
        <h2 className="text-xl text-[#F54748] font-semibold">What we Serve</h2>
        <h1 className="lg:text-5xl text-3xl  font-bold capitalize">
          fruit and vegetable delivered <br /> to your home
        </h1>
      </div>
      {/* cards */}
      <div className="flex flex-col lg:flex-row gap-x-20 gap-y-10 lg:gap-y-0 py-10">
        {/* card-1 */}
        <div className="flex-1 bg-gray-300 rounded-2xl p-10">
          <div className="flex items-center justify-center">
            <Image src="/icon-1.png" width={95} height={95} alt="Icon-1" />
          </div>
          <h2 className="text-lg font-semibold text-center">Free shipping</h2>
          <p className="leading-relaxed text-center">
            Enjoy Order in a hand using the fresness of groceries
          </p>
        </div>
        {/* card-2 */}
        <div className="flex-1 bg-gray-300 rounded-2xl p-10">
          <div className="flex items-center justify-center">
            <Image src="/icon-2.png" width={95} height={95} alt="Icon-1" />
          </div>
          <h2 className="text-lg font-semibold text-center">15 days returns</h2>
          <p className="leading-relaxed text-center">
            Order in a handy way using the freshness of the groceries.
          </p>
        </div>
        {/* card-3 */}
        <div className="flex-1 bg-gray-300 rounded-2xl p-10">
          <div className="flex items-center justify-center">
            <Image src="/icon-3.png" width={95} height={95} alt="Icon-1" />
          </div>
          <h2 className="text-lg font-semibold text-center">Secure checkout</h2>
          <p className="leading-relaxed text-center">
            If you get rotten items - return immediately to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
