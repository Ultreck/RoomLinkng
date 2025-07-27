import React from 'react';
import { ChevronRight } from 'lucide-react';
import RoomCard from './RoomCard';

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
}

const RoomSection: React.FC<RoomSectionProps> = ({ title, rooms }) => {
  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
          {title}
          <ChevronRight className="h-5 w-5 ml-1 text-gray-400" />
        </h2>
      </div>

      {/* Room Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard
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

