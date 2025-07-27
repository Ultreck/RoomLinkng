import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import img from "../assets/images/house.png"
interface RoomCardProps {
  id: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  imageUrl: string;
  isFavorite?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  title,
  location,
  rating,
  price,
  imageUrl,
  isFavorite = false
}) => {
  return (
    <div className="group cursor-pointer shadow-none hover:shadow-lg pt-0 border-0 transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        {/* Room Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 rounded-full bg-white/80 hover:bg-white ${
              isFavorite ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
        </div>

        <CardContent className="p-4">
          {/* Room Title */}
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>

          {/* Location */}
          <p className="text-sm text-gray-600 mb-2">{location}</p>

          {/* Rating and Price Row */}
          <div className="flex items-center justify-between">
            {/* Rating */}
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900">{rating}</span>
            </div>

            {/* Price */}
            <div className="text-right">
              <span className="text-lg font-bold text-gray-900">{price}</span>
              <span className="text-sm text-gray-600">/room</span>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default RoomCard;

