import React, { Suspense } from 'react';
import RoomSection from '../RoomSection';
import { ibadanRooms, lagosRooms } from '@/lib/helper';
import Image from 'next/image';
import Link from 'next/link';
import RoomCard from '../RoomCard';
import SearchBar from '../SearchBar';
import RenterHeader from '../layout/RenterHeader';
import useParamHook from '@/hooks/use-param-hook';
import img from "../../assets/images/map.png";

const RenterSubPage = () => {
      const { mode } = useParamHook({ key: "search" });
  return (
    <Suspense fallback={null}>
      <header className="">
        <Suspense fallback={null}>
          <RenterHeader />
        </Suspense>
      </header>
      <SearchBar />
      <div className="flex flex-col max-w-full mx-auto p-5 space-y-6">
        {mode ? (
          <div className="grid w-full grid-cols-5 space-x-5 gap-5">
            <div className={`text w-full mx-auto col-span-5 lg:col-span-3`}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-xl font-semibold text-gray-900 flex items-center">
                  {mode}
                </div>
              </div>
              <div
                className={`grid sm:grid-cols-2 md:grid-cols-3 w-full grid-cols-1 `}
              >
                {[...ibadanRooms, ...lagosRooms]?.map((room) => (
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

            <div className="text hidden lg:col-span-2 mt-5  lg:flex">
              <Image
                src={img}
                alt={"map"}
                // fill
                width={600}
                height={700}
                className="group-hover:scale-105 h-[650px] object-fit transition-transform duration-300"
              />
            </div>
          </div>
        ) : (
          <div className="grid w-full grid-cols-5 space-x-5 gap-5">
            <div className={`text w-full mx-auto col-span-5 `}>
              <Suspense fallback={null}>
                <RoomSection
                  delay={4000}
                  title="Rooms in Ibadan"
                  rooms={ibadanRooms}
                />
                <RoomSection
                  delay={5000}
                  title="Rooms in Lagos"
                  rooms={lagosRooms}
                />
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default RenterSubPage