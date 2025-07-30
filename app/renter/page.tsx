'use client'

import RoomSection from "@/components/RoomSection";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../assets/images/map.png";
import SearchBar from "@/components/SearchBar";
import { ibadanRooms, lagosRooms } from "@/lib/helper";
// Mock data for rooms

const RenterPage = () => {
  const [isSearched, setIsSearched] = useState<boolean>(false);
  console.log(isSearched);
  
  return (
    <>
      <SearchBar setIsSearched={setIsSearched} />
    <div className="flex flex-col max-w-8xl mx-auto p-5 space-y-6">
      <div className="text flex justify-center w-full lg:justify-between space-x-5">
        <div className="text mx-auto">
          <RoomSection title="Rooms in Ibadan" nums={isSearched? 3 : 5} rooms={ibadanRooms} />
          <RoomSection title="Rooms in Lagos" nums={isSearched? 3 : 5} rooms={lagosRooms} />
        </div>
        {isSearched && 
        <div className="text hidden lg:block h-[600px] lg:w-[517px] lg:h-[623px]">
          <Image
            src={img}
            alt={"map"}
            // fill
            // width={500}
            // height={700}
            className="group-hover:scale-105 object-cover transition-transform duration-300"
          />
        </div>
        }
      </div>
    </div>
    </>
  );
};

export default RenterPage;
