"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { StaticImageData } from "next/image";
import Link from "next/link";
import RoomCard from "../RoomCard";

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
  rooms: Room[];
  delay: number;
}

const SmallerScreenCarousel = ({ rooms, delay }: RoomSectionProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: delay, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-auto "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {rooms.map((room, index) => (
            <CarouselItem
              key={index}
              className="basis-3/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 py-2"
            >
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      {/* Dots */}
      <div className="flex justify-center sm:hidden mt-2 gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              current !== index ? "bg-green-900" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallerScreenCarousel;
