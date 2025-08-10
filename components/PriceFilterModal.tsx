"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
import { Search } from "lucide-react";
import { TabsContent } from "@radix-ui/react-tabs";
import Counter from "./Counter";
import { Label } from "./ui/label";
import Image from "next/image";
import envelop from "../assets/icons/envelop.svg";
import useParamHook from "@/hooks/use-param-hook";

export function PriceFilterModal({ children }: { children: React.ReactNode }) {
  const { handleFilterParams, handleGetFilterParams, removeQueryParams } =
    useParamHook();
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(handleGetFilterParams("min-price")) || 30,
    Number(handleGetFilterParams("max-price")) || 300,
  ]);
  const [bedrooms, setBedrooms] = useState<number | null>(
    Number(handleGetFilterParams("bedroom")) || null
  );
  const [beds, setBeds] = useState<number | null>(
    Number(handleGetFilterParams("beds")) || null
  );
  const [bathrooms, setBathrooms] = useState<number | null>(
    Number(handleGetFilterParams("bathrooms")) || null
  );
  const [amenitiesId, setAmenitiesId] = useState<string | undefined>(
    handleGetFilterParams("amenity") || ""
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="rounded-3xl w-[90vw] max-w-2xl md:max-w-2xl px-6 py-8">
        <DialogTitle className="text-lg font-semibold">Filter</DialogTitle>

        <Tabs defaultValue="price" className="mt-4 w-full">
          <TabsList className="grid grid-cols-3 h-12 w-full mb-4 bg-white rounded-md border">
            <TabsTrigger
              value="price"
              className="data-[state=active]:bg-[#E5E5E5] data-[state=active]:border data-[state=active]:border-[#474747] data-[state=active]:text-[#212121] rounded-md data-[state=active]:py-2"
            >
              Price
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#E5E5E5] data-[state=active]:border data-[state=active]:border-[#474747] data-[state=active]:text-[#212121] rounded-md data-[state=active]:py-2"
              value="rooms"
            >
              Rooms and Beds
            </TabsTrigger>
            <TabsTrigger
              value="amenities"
              className="data-[state=active]:bg-[#E5E5E5] data-[state=active]:border data-[state=active]:border-[#474747] data-[state=active]:text-[#212121] rounded-md data-[state=active]:py-2"
            >
              Amenities
            </TabsTrigger>
          </TabsList>
          <TabsContent value="price">
            <div className="mt-2 space-y-4">
              <h3 className="text-sm font-medium">Price Range</h3>

              <Slider.Root
                className="relative flex w-full touch-none select-none items-center"
                min={30}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={(value) => {
                  setPriceRange([value[0], value[1]]);
                  handleFilterParams(value[0].toLocaleString(), "min-price");
                  handleFilterParams(value[1].toLocaleString(), "max-price");
                }}
              >
                <Slider.Track className="relative h-2 w-full grow rounded-full bg-muted" />
                <Slider.Range className="absolute h-2 rounded-full bg-green-600" />
                <Slider.Thumb className="block h-5 w-5 rounded-full bg-yellow-500 border-[6px] border-green-600 shadow-sm" />
                <Slider.Thumb className="block h-5 w-5 rounded-full bg-yellow-500 border-[6px] border-green-600 shadow-sm" />
              </Slider.Root>

              <div className="flex justify-between text-sm font-semibold">
                <span className="py-1 px-3 border rounded-full">
                  {" "}
                  <span className="text-gray-500 font-normal mr-1">Min:</span>₦
                  {priceRange[0]}k
                </span>
                <span className="px-3 py-1 border rounded-full">
                  <span className="text-gray-500 font-normal mr-1">Max:</span>₦
                  {priceRange[1]}k+
                </span>
              </div>

              <div className="flex items-center justify-between pt-6">
                <Button
                  variant="ghost"
                  className="text-sm  text-muted-foreground"
                  onClick={() => removeQueryParams("renter")}
                >
                  Reset
                </Button>
                <Button className="rounded-full bg-[#474747] px-6 py-2">
                  <Search /> Find 30 results
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="rooms">
            <div className="text">
              <h1 className="text-xl font-bold text-gray-600">
                Rooms and beds
              </h1>
              <Counter
                label="Bedrooms"
                value={bedrooms}
                onIncrement={() => {
                  setBedrooms((prev) => (prev ?? 0) + 1);
                  handleFilterParams(
                    bedrooms !== null
                      ? (bedrooms + 1).toString()
                      : (0 + 1).toString(),
                    "bedroom"
                  );
                }}
                onDecrement={() => {
                  setBedrooms((prev) =>
                    (prev ?? 0) > 0 ? (prev ?? 0) - 1 : null
                  );
                  handleFilterParams(
                    bedrooms !== null
                      ? (bedrooms - 1).toString()
                      : (0 + 1).toString(),
                    "bedroom"
                  );
                }}
              />
              <Counter
                label="Beds"
                value={beds}
                onIncrement={() => {
                  setBeds((prev) => (prev ?? 0) + 1);
                  handleFilterParams(
                    beds !== null ? (beds + 1).toString() : (0 + 1).toString(),
                    "beds"
                  );
                }}
                onDecrement={() => {
                  setBeds((prev) => ((prev ?? 0) > 0 ? (prev ?? 0) - 1 : null));
                  handleFilterParams(
                    beds !== null ? (beds - 1).toString() : (0 + 1).toString(),
                    "beds"
                  );
                }}
              />
              <Counter
                label="Bathrooms"
                value={bathrooms}
                onIncrement={() => {
                  setBathrooms((prev) => (prev ?? 0) + 1);
                  handleFilterParams(
                    bathrooms !== null
                      ? (bathrooms + 1).toString()
                      : (0 + 1).toString(),
                    "bathrooms"
                  );
                }}
                onDecrement={() => {
                  setBathrooms((prev) =>
                    (prev ?? 0) > 0 ? (prev ?? 0) - 1 : null
                  );
                  handleFilterParams(
                    bathrooms !== null
                      ? (bathrooms - 1).toString()
                      : (0 + 1).toString(),
                    "bathrooms"
                  );
                }}
              />
            </div>
          </TabsContent>
          <TabsContent value="amenities">
            <div>
              <h3 className="font-normal mb-2">Amenities</h3>
              <div className="grid text-sm grid-cols-4 gap-4">
                {[
                  { id: "table", label: "Table" },
                  { id: "wifi", label: "WiFi" },
                  { id: "carpet", label: "Carpet/Rug" },
                  { id: "tv", label: "TV" },
                  { id: "ac", label: "AC/Fan" },
                  { id: "bus", label: "Bus Station" },
                ].map((amenity) => (
                  <button
                    onClick={() => {
                      handleFilterParams(amenity.id, "amenity");
                      setAmenitiesId(amenity.id);
                    }}
                    key={amenity.id}
                    className={`flex border cursor-pointer ${
                      amenitiesId === amenity.id && "bg-[#E5E5E5]"
                    } rounded-full items-center px-1 gap-1`}
                  >
                    <Image src={envelop} alt="envelop icon" />
                    <Label>{amenity.label}</Label>
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
