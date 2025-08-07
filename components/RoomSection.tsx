import React from "react";
import { ChevronRight } from "lucide-react";
import RoomCard from "./RoomCard";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface Room {
  id: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  isFavorite?: boolean;
  imageUrl: string | StaticImageData;
  otherImgs: (string | StaticImageData)[];
}

interface RoomSectionProps {
  title: string;
  rooms: Room[];
  nums: number;
}

const RoomSection: React.FC<RoomSectionProps> = ({ title, rooms, nums }) => {
  return (
    <div className="mb-5 w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
          {title}
          <ChevronRight className="h-5 w-5 ml-1 text-gray-400" />
        </h2>
      </div>

      {/* Room Cards Grid */}
      <div
        className={`grid w-full grid-cols-1 ${
          nums === 3 ? "sm:grid-cols-3" : "sm:grid-cols-3 md:grid-cols-5"
        } `}
      >
        {rooms?.slice(0, nums)?.map((room) => (
          <Link key={room.id} href={`/renter/${room.title}`}>
            <RoomCard
              type="renter"
              key={room.id}
              id={room.id}
              title={room.title}
              location={room.location}
              rating={room.rating}
              price={room.price}
              otherImgs={room.otherImgs}
              imageUrl={room.imageUrl}
              isFavorite={room.isFavorite}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoomSection;
