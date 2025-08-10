"use client";

import React from "react";
import profile from "../../assets/images/profile.png";
import Link from "next/link";
import Image from "next/image";

const DetailsLandlordCard = () => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border">
      <div className="flex items-center space-x-3">
        <Image
          src={profile.src}
          alt="Landlord"
          width={30}
          height={30}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">Gladys Adedeji</p>
          <p className="text-xs text-muted-foreground">Landlord</p>
        </div>
      </div>
      <Link href={`/renter/message`} className="px-4 hover:bg-gray-200 bg-gray-100 py-1.5 rounded-md text-sm">
        Send a message
      </Link>
    </div>
  );
};

export default DetailsLandlordCard;
