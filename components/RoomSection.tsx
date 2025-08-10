import React from "react";
import { ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";
import SmallerScreenCarousel from "./dashboard/SmallerScreenCarousel";
import useParamHook from "@/hooks/use-param-hook";

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
  delay: number;
}

const RoomSection: React.FC<RoomSectionProps> = ({ title, rooms, delay }) => {
  const {handleSearchParams} = useParamHook();
  return (
    <div className="mb-5 w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={() =>handleSearchParams(title, "search")} className="text-xl font-semibold text-gray-900 flex items-center">
          {title}
          <ChevronRight className="h-5 w-5 ml-1 text-gray-400" />
        </button>
      </div>
      <div className="text">
        <SmallerScreenCarousel delay={delay} rooms={rooms}/>
      </div>
      {/* Room Cards Grid */}
      {/* <div className={`sm:grid hidden sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 w-full grid-cols-1 `}>
        {rooms?.map((room) => (
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
      </div> */}
    </div>
  );
};

export default RoomSection;
