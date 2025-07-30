"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import img from "../assets/images/house.png";
interface RoomCardProps {
  id: string;
  title: string;
  location?: string;
  rating?: number;
  price?: string;
  saved?: string;
  imageUrl?: string;
  isFavorite?: boolean;
  imgSize?: {
    width: string;
    height: string;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  title,
  location,
  rating,
  price,
  imgSize,
  // imageUrl,
  isFavorite = false,
  saved,
}) => {
  const [hoveredId, setHoveredId] = useState("");

  const handleFavoriteHover = (hoverId: string) => {
    if (hoverId === id) {
      setHoveredId(hoverId);
    }
  };

  return (
    <div
      onMouseEnter={() => handleFavoriteHover(id)}
      onMouseLeave={() => setHoveredId("")}
      className="group cursor-pointer shadow-none hover:shadow-lg p-2 rounded-[20px] transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative">
        <div
          className={`relative rounded-[20px] ${
            imgSize?.height ? imgSize.height : "h-[175px]"
          } ${imgSize?.width ? imgSize.width : "w-[260px]"} overflow-hidden`}
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {hoveredId === id && (
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
