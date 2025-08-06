import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Search } from "lucide-react";
import searchBg from "../assets/images/search-bg.png";
import Image from "next/image";
import filterIcon from "../assets/icons/filter-icon.svg";
import RangeCalender from "./RangeCalender";
import { ChevronDown } from "lucide-react";
import { endDate } from "@/lib/helper";
import { PriceFilterModal } from "./PriceFilterModal";
import LocationSelect from "./modals/LocationSelect";
import DropdownSelect from "./modals/DropdownSelect";
import PropertyTypeSelect from "./modals/PropertyTypeSelect";

type isSearchedProp = {
  setIsSearched: (value: boolean) => void;
};
const SearchBar = ({ setIsSearched }: isSearchedProp) => {
  return (
    <div
      style={{ backgroundImage: `url(${searchBg.src})` }}
      className="w-full text-gray-800 bg-cover bg-no-repeat bg text-sm bg-white p-6 border"
    >
      <div className="max-w-5xl mx-auto text-gray-800">
        {/* Search Bar Container */}
        <div className="flex items-center justify-center space-x-5 ">
          {/* Filter Button */}
          <PriceFilterModal>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearched(true)}
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

          <div className="text flex bg-gray-100  h-14 rounded-full shadow-md px-3 justify-between py-2 space-x-7">
            {/* Location Selector */}
            <LocationSelect
              className="bordr-r border-white w-64 bg-white"
              title="Where do you want to go"
              setIsSearched={setIsSearched}
            />

            {/* Available From Date */}
            <div
              onClick={() => setIsSearched(true)}
              className="flex items-center  w-full space-x-2 px-8 border-r border-white bg-white rounded-full flex-1"
            >
              <RangeCalender>
                <p className="flex text-gray-500 border-0 outline-0 w-40 justify-between items-center space-x-2 font-normal">
                  <Calendar className="h-4 w-4 text-green-600 hover:text-green-700 flex-shrink-0" />
                  Available from
                  <ChevronDown size={16} className="text-gray-400" />
                </p>
              </RangeCalender>
            </div>

            {/* Month Selector */}
            <DropdownSelect data={endDate} placeHolder="July, 28, 2025" label="Minimun of one month" setIsSearched={setIsSearched} />

            {/* Rooms Selector */}
           <PropertyTypeSelect setIsSearched={setIsSearched} />

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
