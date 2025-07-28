import React from "react";
import Image from "next/image";
import { TestimonyCarousel } from "./TestimonyCarousel";
const RegistrationSidebar = () => {
  return (
    <div className="w-full ">
      <div className="text bg-[#3F7C5F] p-5 flex flex-col justify-between min-h-[95vh] w-full rounded-[20px]  ">
        <div className="text">
          <h1 className="text-[32px] font-semibold text-[#FFFFFF] ">
            RoomLinkNG
          </h1>
        </div>
        <div className="text">
          <h1 className="text-[50px] text-white font-bold tracking-normal leading-14">
            Start your journey with us.
          </h1>
          <p className="text-[16px] text-white font-medium ">
            Become a landlord that earns and a renter with ease by using
            RoomLinkNG.
          </p>
        </div>
        <div className="text">
          <TestimonyCarousel />
        </div>
      </div>
    </div>
  );
};

export default RegistrationSidebar;
