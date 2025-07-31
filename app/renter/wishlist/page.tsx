import RoomCard from '@/components/RoomCard'
import { whishListItems } from '@/lib/helper'
import React from 'react'

const WishlistPage = () => {
  return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-8xl mx-auto p-5 space-x-4 `}>
        {whishListItems?.map((room) => (
          <RoomCard
            key={room.id}
            id={room.id}
            title={room.title}
            saved={room.saved}
            isFavorite={room.isFavorite}
            imgSize={{ width: "w-full", height: "h-full" }}
          />
        ))}
      </div>
  )
}

export default WishlistPage