import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full  py-5">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p className="leading-relaxed">
            Fast delivery, which is active all over the world, serves with many
            transportation vehicles.
          </p>
        </div>
        {/* 2nd cloumn */}
        <div>
          <p className="font-medium text-lg">Company</p>
          <ul className="flex flex-col mt-9 gap-y-2  text-base">
            <Link href={"/"}>
              <li className=" hover:text-[#03A66B] cursor-pointer duration-200">
                About Us
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" hover:text-[#03A66B] cursor-pointer duration-200">
                Blog
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" hover:text-[#03A66B] cursor-pointer duration-200">
                All Products
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" hover:text-[#03A66B] cursor-pointer duration-200">
                Locations Map
              </li>
            </Link>
          </ul>
        </div>
        {/* 3rd cloumn */}
        <div>
          <p className="font-medium text-lg">Services</p>
          <ul className="flex flex-col mt-9 gap-y-2  text-base">
            <Link href={"/"}>
              <li className=" hover:text-[#F86061] cursor-pointer duration-200">
                Order tracking
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" hover:text-[#F86061] cursor-pointer duration-200">
                Wish List
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" hover:text-[#F86061] cursor-pointer duration-200">
                My account
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" hover:text-[#F86061] cursor-pointer duration-200">
                Terms & Conditions
              </li>
            </Link>
          </ul>
        </div>
        {/* 4th column */}
        <div className="flex flex-col gap-y-4">
          <h2 className="font-medium text-lg">Get in Touch</h2>
          <p className="leading-relaxed">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center border-t dark:border-darkColorLight border-primaryColorLight py-5 md:flex-row md:justify-between mt-5">
        <p class="paragraph">Food Website is made by Ghulam Mohiuddin</p>
        <p class="paragraph">Copyright © 2023. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
