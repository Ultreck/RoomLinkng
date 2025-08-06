import React from "react";
import { ChevronRight } from "lucide-react";
import RoomCard from "./RoomCard";

interface Room {
  id: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  imageUrl: string;
  isFavorite?: boolean;
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
        className={`grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  lg:gap-6`}
      >
        {rooms?.slice(0, nums)?.map((room) => (
          <RoomCard
            type="renter"
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
  );
};

export default RoomSection;
