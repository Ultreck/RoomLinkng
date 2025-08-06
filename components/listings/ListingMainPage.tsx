'use client'

import { ibadanRooms, lagosRooms } from "@/lib/helper";
import React, { useState } from "react";
import RoomCard from "../RoomCard";
import ListingHeader from "./ListingHeader";

const ListingMainPage = () => {
      const [isSearched, setIsSearched] = useState<boolean>(false);
    
  return (
    <div>
      <div className="mb-5 w-full">
        <ListingHeader setIsSearched={setIsSearched}  />
        {/* Room Cards Grid */}
        <div
          className={`grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:gap-6`}
        >
          {[...lagosRooms, ...ibadanRooms]?.map((room) => (
            <RoomCard
              type="landlord"
              key={room.id}
              id={room.id}
              title={room.title}
              location={room.location}
              rating={room.rating}
              price={room.price}
              imageUrl={room.imageUrl}
              isFavorite={room.isFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingMainPage;
