import RoomSection from "@/components/RoomSection";
import Image from "next/image";
import React from "react";
import img from "../../assets/images/map.png";
// Mock data for rooms
const ibadanRooms = [
  {
    id: "1",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
  {
    id: "2",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: true,
  },
  {
    id: "3",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
];

const lagosRooms = [
  {
    id: "4",
    title: "Tropic flat villa",
    location: "Lekki Lagos",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
  {
    id: "5",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
  {
    id: "6",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
];
const RenterPage = () => {
  return (
    <div className="flex flex-col max-w-8xl mx-auto p-5 space-y-6">
      <div className="text flex justify-center w-full lg:justify-between space-x-5">
        <div className="text mx-auto">
          <RoomSection title="Rooms in Ibadan" rooms={ibadanRooms} />
          <RoomSection title="Rooms in Lagos" rooms={lagosRooms} />
        </div>
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
      </div>
    </div>
  );
};

export default RenterPage;
