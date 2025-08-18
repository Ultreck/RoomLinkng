"use client";

import Image from "next/image";
import img from "../../assets/images/profile.png";
import Link from "next/link";
import envelop from "../../assets/icons/envelop.svg";
import SmallerScreenSidebar from "./SmallerScreenSidebar";
import { useState } from "react";

const TopNav = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="flex justify-between w-full border rounded-lg mx-auto items-center p-4 bg-gray-50 border-b">
      <div className="md:w-1/3 relative mr-2 md:mr-0">
        <input
          type="search"
          placeholder="Search rooms"
          className=" rounded-full py-2  px-4 border outline-none"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <div
          className={` absolute bg-white p-4  shadow-md rounded-2xl ${
            isActive ? "" : "hidden"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          necessitatibus amet impedit
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-gray-200 rounded-full">
          <Link
            href="/landlord/messages"
            className="text-gray-600 hover:text-gray-900"
          >
            {/* <Mail className="h-5 w-5" /> */}
            <Image src={envelop} alt="envelop icon" />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={img}
            width={35}
            height={35}
            className="rounded-full"
            alt="User"
          />
          <div className="hidden lg:block">
            <p className="text-sm  font-semibold">Gladys Adediji</p>
            <p className="text-xs text-gray-500">gladyssade10@gmail.com</p>
          </div>
        </div>
        <div className="text lg:hidden">
          <SmallerScreenSidebar />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
