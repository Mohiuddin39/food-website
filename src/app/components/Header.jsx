import React from "react";
import Logo from "./Logo";
import { navData } from "../constants";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5 ">
      <Logo />
      {/* --- Nav Links */}
      <div>
        {navData.map(({ _id, title, href }) => (
          <Link href={href} className="relative mx-3" key={_id}>
            <span className="hidden lg:inline-block relative z-10 text-lg">
              {title}
            </span>
          </Link>
        ))}
      </div>
      {/* Search Fields */}
      <div className="hidden lg:flex items-center px-2 border border-gray-300 rounded-lg group hover:border-[#03A66B] duration-200">
        <AiOutlineSearch className="text-gray-500" />
        <input
          type="search"
          name=""
          id=""
          placeholder="Search..."
          className="outline-none px-2"
        />
      </div>
      {/* Cart icon */}
      <div className="hidden lg:flex items-center">
        <BsCart2 className="text-2xl" />
      </div>
      {/* Mobile nav Links */}
      <MobileHeader />
    </div>
  );
};

export default Header;
