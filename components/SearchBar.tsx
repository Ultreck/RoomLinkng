import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, Search } from "lucide-react";
import searchBg from "../assets/images/search-bg.png";
import Image from "next/image";
import filterIcon from "../assets/icons/filter-icon.svg";
import RangeCalender from "./RangeCalender";
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
            <div className="flex items-center space-x-2 px-8 bordr-r border-white bg-white rounded-full">
              <MapPin className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
              <Select>
                <SelectTrigger className="border-none shadow-none text-[#474747] p-0 h-auto focus:ring-0">
                  <SelectValue placeholder="Where do you want to go" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja</SelectItem>
                  <SelectItem value="ibadan">Ibadan</SelectItem>
                  <SelectItem value="kano">Kano</SelectItem>
                  <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Available From Date */}
            <div className="flex items-center space-x-2 px-8 border-r border-white bg-white rounded-full flex-1">
              <RangeCalender>
                <Button className="flex text-gray-500 border-0 focus-visible:border-0 focus-visible:ring-0 outline-0 bg-transparent hover:bg-transparent font-normal">
                  <Calendar className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
                  Available from
                </Button>
              </RangeCalender>
            </div>

            {/* Month Selector */}
            <div className="flex items-center space-x-2 px-8 border-r border-white bg-white rounded-full flex-1">
              <Calendar className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
              <Select>
                <SelectTrigger className="border-none shadow-none p-0 h-auto focus:ring-0">
                  <SelectValue placeholder="July, 2025" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jan-2025">January, 2025</SelectItem>
                  <SelectItem value="feb-2025">February, 2025</SelectItem>
                  <SelectItem value="mar-2025">March, 2025</SelectItem>
                  <SelectItem value="apr-2025">April, 2025</SelectItem>
                  <SelectItem value="may-2025">May, 2025</SelectItem>
                  <SelectItem value="jun-2025">June, 2025</SelectItem>
                  <SelectItem value="jul-2025">July, 2025</SelectItem>
                  <SelectItem value="aug-2025">August, 2025</SelectItem>
                  <SelectItem value="sep-2025">September, 2025</SelectItem>
                  <SelectItem value="oct-2025">October, 2025</SelectItem>
                  <SelectItem value="nov-2025">November, 2025</SelectItem>
                  <SelectItem value="dec-2025">December, 2025</SelectItem>
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
                  <SelectItem value="1">1 Room</SelectItem>
                  <SelectItem value="2">2 Rooms</SelectItem>
                  <SelectItem value="3">3 Rooms</SelectItem>
                  <SelectItem value="4">4 Rooms</SelectItem>
                  <SelectItem value="5+">5+ Rooms</SelectItem>
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
