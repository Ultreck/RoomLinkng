"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonies } from "@/lib/helper";
import Image from "next/image";

export function TestimonyCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
        className="w-full h-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {testimonies.map((testy, index) => (
            <CarouselItem key={index}>
              <div className="h-auto">
                <Card className="bg-[#36624D] border-0">
                  <CardContent className="">
                    <p className="text-[16px] text-white font-normal">
                      {testy.testimony}
                    </p>
                    <div className="text mt-3 flex items-center gap-3">
                      <Image
                        src={testy.image}
                        alt={testy.name}
                        width={70}
                        height={70}
                      />
                      <p className="text">
                        <span className="text-[16px] font-semibold text-white">
                          {testy.name}
                        </span>
                        <br />
                        <span className="text-[14px] text-gray-300">
                          {testy.role}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
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
}
