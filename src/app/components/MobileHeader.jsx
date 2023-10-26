"use client";

import { Popover } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { navData } from "../constants";
import Link from "next/link";
const MyPopover = () => {
  return (
    <Popover className="lg:hidden">
      {({ open }) => (
        <>
          <Popover.Button className="block lg:hidden p-2 focus:outline-none">
            {open ? (
              <IoIosArrowUp className=" text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </Popover.Button>
          <Popover.Panel className="lg:hidden absolute z-10 right-0 mt-2 bg-gray-300  shadow-md rounded-lg w-full p-5 transform ease-in-out transition-transform duration-200">
            <div className="space-y-2">
              {navData.map(({ _id, title, href }) => (
                <Link
                  href={href}
                  key={_id}
                  className=" text-xl flex items-center justify-start hover:text-[#F86061] duration-200"
                >
                  {title}
                </Link>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default MyPopover;
