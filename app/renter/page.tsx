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
    <div className="flex flex-col max-w-full mx-auto p-5 space-y-6">
      <div className="grid w-full grid-cols-5 space-x-5">
        <div className={`text w-full mx-auto border ${isSearched? "col-span-5 lg:col-span-3" : "col-span-5"} `}>
          <RoomSection title="Rooms in Ibadan" nums={isSearched? 3 : 5} rooms={ibadanRooms} />
          <RoomSection title="Rooms in Lagos" nums={isSearched? 3 : 5} rooms={lagosRooms} />
        </div>
        {isSearched && 
        <div className="text hidden col-span-2 lg:flex">
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
