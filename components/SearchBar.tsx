'use client'

import React, { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Search } from "lucide-react";
import searchBg from "../assets/images/search-bg.png";
import Image from "next/image";
import filterIcon from "../assets/icons/filter-icon.svg";
import RangeCalender from "./RangeCalender";
import { PriceFilterModal } from "./PriceFilterModal";
import LocationSelect from "./modals/LocationSelect";
import PropertyTypeSelect from "./modals/PropertyTypeSelect";
import { DateRange } from "react-day-picker";


const SearchBar = () => {
    const [date, setDate] = useState<DateRange | undefined>(undefined);
  return (
    <div
      style={{ backgroundImage: `url(${searchBg.src})` }}
      className="w-full text-gray-800 bg-cover hidden md:flex bg-no-repeat bg text-sm bg-white p-6 border"
    >
      <div className="max-w-5xl mx-auto text-gray-800">
        {/* Search Bar Container */}
        <div className="flex items-center justify-center space-x-5 ">
          {/* Filter Button */}
          <Suspense fallback={null}>
            <PriceFilterModal>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border-2 h-14 w-14 shadow-md"
              >
                <Image
                  width={24}
                  height={24}
                  src={filterIcon}
                  alt="Filter icon"
                />
              </Button>
            </PriceFilterModal>
          </Suspense>

          <div className="text flex bg-gray-100  h-14 rounded-full shadow-md px-3 justify-between py-2 lg:space-x-7 space-x-3">
            {/* Location Selector */}
            <Suspense fallback={null}>
              <LocationSelect
                className="bordr-r border-white w-auto bg-white"
                title="Where do you want to go"
                // setIsSearched={setIsSearched}
              />
            </Suspense>

            {/* Available From Date */}
            <div
              className="flex items-center  w-full space-x-2 lg:px-8 px-3 border-r border-white bg-white rounded-full flex-1"
            >
              <RangeCalender date={date} setDate={setDate}/>
            </div>

            {/* Month Selector */}
            <div className="flex items-center w-44 gap-2 lg:px-8 px-3 border-r border-white bg-white rounded-full">
              <Calendar className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
              {date?.to? date?.to.toLocaleDateString('en', {day: '2-digit', month: 'short', year: 'numeric'}) : "to"}
            </div>

            {/* Rooms Selector */}
            <PropertyTypeSelect />

            {/* Search Button */}
            <Button className="bg-green-600 cursor-pointer hover:bg-green-700 rounded-full h-10 w-10 p-0">
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
