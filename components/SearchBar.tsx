import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { MapPin, Calendar, Search } from "lucide-react";
import searchBg from "../assets/images/search-bg.png";
import Image from "next/image";
import filterIcon from "../assets/icons/filter-icon.svg";
import RangeCalender from "./RangeCalender";
import { ChevronDown } from "lucide-react";
import { endDate } from "@/lib/helper";

const SearchBar = () => {
  return (
    <div
      style={{ backgroundImage: `url(${searchBg.src})` }}
      className="w-full text-gray-800 bg-cover bg-no-repeat bg text-sm bg-white p-6 border"
    >
      <div className="max-w-5xl mx-auto text-gray-800">
        {/* Search Bar Container */}
        <div className="flex items-center justify-center space-x-5 ">
          {/* Filter Button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border-2 h-14 w-14 shadow-md"
          >
            <Image width={24} height={24} src={filterIcon} alt="Filter icon" />
          </Button>

          <div className="text flex bg-gray-100  h-14 rounded-full shadow-md px-3 justify-between py-2 space-x-7">
            {/* Location Selector */}
            <div className="flex items-center space-x-2 w-64 px-8 bordr-r border-white bg-white rounded-full">
              <Select>
                <SelectTrigger className="border-none shadow-none text-[#474747] p-0 h-auto focus:ring-0">
                  <SelectValue
                    placeholder={
                      <span className="flex items-center gap-2">
                        {" "}
                        <MapPin className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
                        Where do you want to go
                      </span>
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Suggestions</SelectLabel>
                    {[
                      "Find rooms around you",
                      "Ikeja, Lagos",
                      "Elebu estate, Ibadan",
                      "Gbagada, Lagos",
                      "Ajah, Lagos",
                      "Apata, Ibadan",
                    ].map((city: string) => (
                      <SelectItem
                        key={city}
                        className="flex items-center space-x-2"
                        value={city}
                      >
                        <MapPin className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
                        {city}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Available From Date */}
            <div className="flex items-center  w-full space-x-2 px-8 border-r border-white bg-white rounded-full flex-1">
              <RangeCalender>
                <p className="flex text-gray-500 border-0 outline-0 w-40 justify-between items-center space-x-2 font-normal">
                  <Calendar className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
                  Available from
                  <ChevronDown size={16} className="text-gray-400" />
                </p>
              </RangeCalender>
            </div>

            {/* Month Selector */}
            <div className="flex items-center space-x-2 px-8 border-r border-white bg-white rounded-full flex-1">
              <Calendar className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
              <Select>
                <SelectTrigger className="border-none shadow-none p-0 h-auto focus:ring-0">
                  <SelectValue placeholder="July, 28, 2025" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Minimun of one month</SelectLabel>
                    {endDate.map((date) => (
                      <SelectItem
                        key={date?.value}
                        value={date?.value}
                        className="flex items-center space-x-2"
                      >
                        <span>{date?.label}</span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Rooms Selector */}
            <div className="flex text-gray-800 items-center space-x-2 px-8 min-w-0 flex-1">
              <Select>
                <SelectTrigger className="border-none text-gray-800 shadow-none p-0 h-auto focus:ring-0">
                  <SelectValue placeholder="Rooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>What do you need?</SelectLabel>
                    {["Rooms", "Property"].map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="flex items-center space-x-2"
                      >
                        <MapPin className="h-4 w-4 text-gray-500 hover:text-gray-600 flex-shrink-0" />
                        <span>{option}</span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button className="bg-green-600 hover:bg-green-700 rounded-full h-10 w-10 p-0">
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
