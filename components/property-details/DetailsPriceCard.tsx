'use client'

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import priceIcon from "../../assets/icons/price-icon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
const DetailsPriceCard = () => {
  const pathname = usePathname();
    console.log(pathname);
  return (
    <div className="border h-[300px] rounded-xl space-y-4">
      <p className="text-xl font-semibold border-b py-5 px-6">
        ₦30,000
        <span className="text-xs lg:text-sm font-normal text-muted-foreground">
          /month
        </span>
      </p>
      <div className="text px-3 ">
        <div className="text-xs lg:text-sm flex justify-between px-3 py-2 bg-[#F8F8F8] rounded-lg items-center space-y-2">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Available from</span>
            <span>July 23rd, 2025</span>
          </div>
          <FaArrowRightLong />
          <div className="flex flex-col">
            <span className="text-muted-foreground">To</span>
            <span>August 23rd, 2025</span>
          </div>
        </div>
        <div className="text-xs lg:text-sm flex items-center gap-2 text-muted-foreground italic lg:my-4 my-2">
          <Image src={priceIcon} width={20} height={20} alt="Pice icon" /> Prices include all fees
        </div>
        <button className="bg-[#3F7C5F] cursor-pointer mt-5 text-white w-full py-2 rounded-md hover:bg-green-800 transition">
        <Link href={`/renter/payments`} className="px-6 " >
          Book this room
        </Link>
        </button>
      </div>
    </div>
  );
};

export default DetailsPriceCard;
