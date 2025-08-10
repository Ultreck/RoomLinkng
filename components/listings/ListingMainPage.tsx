"use client";

import { ibadanRooms, lagosRooms } from "@/lib/helper";
import RoomCard from "../RoomCard";
import ListingHeader from "./ListingHeader";

const ListingMainPage = () => {
  return (
    <div>
      <div className="mb-5 w-full mt-10">
        <div className="text flex  justify-between items-center mb-3">
          <h1 className="text-[#474747] text-xl font-bold">
            My Listings{" "}
            <span className="text-sm font-normal">
              ( {[, , , , , , , , , , , , , , , , , , , , , , , , , , ,].length}{" "}
              results)
            </span>{" "}
          </h1>
          <div className="text w-3/5">
            <ListingHeader />
          </div>
        </div>
        {/* Room Cards Grid */}
        <div
          className={`grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  lg:gap-6`}
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
