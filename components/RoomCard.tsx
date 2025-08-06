"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import img from "../assets/images/house.png";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
interface RoomCardProps {
  id: string;
  title: string;
  location?: string;
  rating?: number;
  price?: string;
  saved?: string;
  imageUrl?: string;
  isFavorite?: boolean;
  type: string;
  // imgSize?: {
  //   width: string;
  //   height: string;
  // };
}

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  title,
  location,
  rating,
  price,
  // imageUrl,
  isFavorite = false,
  saved,
  type = "renter",
}) => {
  const [hoveredId, setHoveredId] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFavoriteHover = (hoverId: string) => {
    if (hoverId === id) {
      setHoveredId(hoverId);
    }
  };

  const handlePlayAndPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onMouseEnter={() => handleFavoriteHover(id)}
      onMouseLeave={() => setHoveredId("")}
      onClick={handlePlayAndPause}
      className="group cursor-pointer shadow-none hover:shadow-lg p-2 rounded-[20px] transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative">
        <div className={`relative rounded-[20px] overflow-hidden`}>
          {!isPlaying && type === "landlord" && hoveredId === id && (
            <div className="text-white px-5 py-1 rounded-full bg-[#10101080] absolute top-3 z-20 right-2">
              Paused
            </div>
          )}
          <Image
            src={img}
            alt={title}
            width={700}
            height={475}
            className="w-full h-auto group-hover:scale-105"
          />
          {hoveredId === id && type === "renter" && (
            <Button
              variant="ghost"
              size="icon"
              className={`absolute bottom-3 right-3 rounded-full bg-white/80 hover:bg-white ${
                isFavorite ? "text-[#00A859]" : "text-gray-600"
              }`}
            >
              <Heart
                className={`h-4 w-4 cursor-pointer ${
                  isFavorite ? "fill-current" : ""
                }`}
              />
            </Button>
          )}
          {hoveredId === id && type === "landlord" && (
            <Button
              variant="ghost"
              size="icon"
              className={`absolute bottom-3 right-3 rounded-full bg-white/80 hover:bg-white ${
                isPlaying ? "text-[#00A859]" : "text-gray-600"
              }`}
            >
              {isPlaying ? (
                <FaPause className={`h-4 w-4 cursor-pointer `} />
              ) : (
                <FaPlay className={`h-4 w-4 cursor-pointer `} />
              )}
            </Button>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <p className="text-xs text-gray-800">{location || saved}</p>
            {rating && (
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
            )}
            <span className="text-xs font-medium text-gray-900">{rating}</span>
          </div>
          {price && (
            <div className="text-right">
              <span className="text-lg font-bold text-gray-900">{price}</span>
              <span className="text-xs text-gray-600">/room</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
